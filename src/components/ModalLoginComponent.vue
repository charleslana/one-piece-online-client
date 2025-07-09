<template>
  <div class="modal modal-fx-slideTop" :class="{ 'is-active': active }">
    <div class="modal-background" @click="closeModal"></div>
    <div class="icon-bg is-flex is-justify-content-center is-align-items-center">
      <font-awesome-icon :icon="['fa', 'skull-crossbones']" size="3x" color="white" />
    </div>
    <div class="modal-content is-tiny">
      <div class="is-size-3 has-text-centered m-5 pt-5">Acessar minha conta</div>
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
          <label class="label">Senha</label>
          <div class="control">
            <input
              class="input is-shadowless"
              type="password"
              placeholder=""
              v-model.trim="password"
              required
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button
              class="button is-link is-fullwidth"
              :class="{ 'is-loading': isLoading }"
              :disabled="!isFormValid || isLoading"
            >
              Acessar
            </button>
          </div>
        </div>
      </form>
      <div class="modal-footer mt-5">
        <router-link to="/recovery-password">Esqueci minha senha</router-link>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
  </div>
</template>

<script lang="ts" setup>
import { showError } from '@/utils/utils';
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps<{ active: boolean }>();

const emit = defineEmits(['close']);
const email = ref('');
const emailError = ref('');

const password = ref('');

const isLoading = ref(false);

let scrollPosition = 0;

const router = useRouter();

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

watch([email], () => {
  emailError.value = '';
});

const isFormValid = computed(() => {
  return !emailError.value && email.value && password.value;
});

function closeModal() {
  if (!isLoading.value) {
    emit('close');
  }
}

async function handleSubmit() {
  emailError.value = '';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    emailError.value = 'E-mail inválido.';
    return;
  }

  isLoading.value = true;

  setTimeout(() => {
    isLoading.value = false;
    const error = false;
    if (error) {
      showError('E-mail ou senha inválidos!');
      return;
    }
    router.push('/select-character?access=true');
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

.modal-footer {
  background: #ecf0f1;
  border-color: #dee4e7;
  text-align: center;
  justify-content: center;
  margin: 0 -20px -20px;
  border-radius: 5px;
  font-size: 13px;
  padding: 1rem;
  border-top: 1px solid #e9ecef;
  display: flex;
  align-items: center;
}

.modal-footer a {
  color: #999;
  font-size: inherit;
  font-weight: normal;
  letter-spacing: revert;
}

.modal-footer a:hover {
  text-decoration: underline;
}
</style>
