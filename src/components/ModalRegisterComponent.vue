<template>
  <div class="modal modal-fx-slideTop" :class="{ 'is-active': active }">
    <div class="modal-background" @click="closeModal"></div>
    <div class="icon-bg is-flex is-justify-content-center is-align-items-center">
      <font-awesome-icon :icon="['fa', 'skull-crossbones']" size="3x" color="white" />
    </div>
    <div class="modal-content is-tiny">
      <div class="is-size-3 has-text-centered m-5 pt-5">Inicie sua Aventura</div>
      <form @submit.prevent="handleSubmit">
        <div class="field">
          <label class="label">E-mail</label>
          <div class="control">
            <input
              class="input is-shadowless"
              :class="{ 'is-danger': emailError }"
              type="email"
              placeholder=""
              v-model.trim="email"
              required
            />
          </div>
          <div v-if="emailError" class="field">
            <p class="help is-danger">{{ emailError }}</p>
          </div>
        </div>
        <div class="field">
          <label class="label">Confirmar e-mail</label>
          <div class="control">
            <input
              class="input is-shadowless"
              :class="{ 'is-danger': emailError }"
              type="email"
              placeholder=""
              v-model.trim="confirmEmail"
              required
            />
          </div>
          <div v-if="emailError" class="field">
            <p class="help is-danger">{{ emailError }}</p>
          </div>
        </div>
        <div class="field">
          <label class="label">Senha</label>
          <div class="control">
            <input
              class="input is-shadowless"
              :class="{ 'is-danger': passwordError }"
              type="password"
              placeholder=""
              v-model.trim="password"
              required
            />
          </div>
          <div v-if="passwordError" class="field">
            <p class="help is-danger">{{ passwordError }}</p>
          </div>
        </div>
        <div class="field">
          <label class="label">Confirmar senha</label>
          <div class="control">
            <input
              class="input is-shadowless"
              :class="{ 'is-danger': passwordError }"
              type="password"
              placeholder=""
              v-model.trim="confirmPassword"
              required
            />
          </div>
          <div v-if="passwordError" class="field">
            <p class="help is-danger">{{ passwordError }}</p>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" v-model="tos" :disabled="isLoading" required />
              Declaro que li e concordo com os
              <a
                href="/tos"
                target="_blank"
                class="link"
                rel="noopener noreferrer"
                :style="{
                  opacity: isLoading ? 0.5 : 1,
                  pointerEvents: isLoading ? 'none' : 'auto',
                }"
                >Termos de Uso</a
              >
            </label>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button
              class="button is-link is-fullwidth"
              :class="{ 'is-loading': isLoading }"
              :disabled="!isFormValid || isLoading"
            >
              Jogar agora
            </button>
          </div>
        </div>
      </form>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
  </div>
</template>

<script lang="ts" setup>
import { alertError } from '@/utils/utils';
import { computed, ref, watch } from 'vue';

const props = defineProps<{ active: boolean }>();

const emit = defineEmits(['close']);
const email = ref('');
const confirmEmail = ref('');
const emailError = ref('');

const password = ref('');
const confirmPassword = ref('');
const passwordError = ref('');

const tos = ref(false);

const isLoading = ref(false);

let scrollPosition = 0;

watch(
  () => props.active,
  (newVal) => {
    if (newVal) {
      scrollPosition = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = '100%';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo({ top: scrollPosition });
    }
  }
);

watch([email, confirmEmail], () => {
  emailError.value = '';
});

watch([password, confirmPassword], () => {
  passwordError.value = '';
});

const isFormValid = computed(() => {
  return (
    !emailError.value &&
    !passwordError.value &&
    email.value &&
    confirmEmail.value &&
    password.value &&
    confirmPassword.value &&
    tos.value
  );
});

function closeModal() {
  if (!isLoading.value) {
    emit('close');
  }
}

async function handleSubmit() {
  emailError.value = '';
  passwordError.value = '';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    emailError.value = 'E-mail inválido.';
    return;
  }

  if (email.value !== confirmEmail.value) {
    emailError.value = 'Os e-mails não coincidem.';
    return;
  }

  if (password.value.length < 6) {
    passwordError.value = 'A senha deve conter no mínimo 6 caracteres.';
    return;
  }

  if (password.value !== confirmPassword.value) {
    passwordError.value = 'As senhas não coincidem.';
    return;
  }

  isLoading.value = true;

  setTimeout(() => {
    isLoading.value = false;
    alertError(
      'Não foi possível realizar o cadastro',
      'Um ou mais problemas estão acontecendo: o E-mail digitado não é válido'
    );
    emit('close');
  }, 2000);
}
</script>

<style scoped>
.modal-content {
  padding: 20px;
  border-radius: 5px;
  border: none;
  background-color: #fff;
  color: #636363;
  overflow-y: auto;
  position: relative;
}

.modal-close::before,
.modal-close::after {
  background-color: #fff;
}

.icon-bg {
  width: 95px;
  height: 95px;
  border-radius: 50%;
  z-index: 9;
  background: #007bff;
  padding: 15px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  transform: translateY(2.7rem);
}
</style>
