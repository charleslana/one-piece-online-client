<template>
  <main class="page-container">
    <HeaderComponent />
    <SectionLogoutComponent />
    <div class="page-content container mb-8rem">
      <InfoComponent :icon="['fa', 'key']" title="Esqueci minha senha" image="info-1.png">
        <p>
          Se você não lembra mais a sua senha, digite seu e-mail na qual fez o cadastro abaixo e
          clique em "enviar". Dentro de alguns instantes você receberá sua nova senha em seu email.
        </p>
      </InfoComponent>
      <div class="notification is-success" v-if="isSuccess">
        {{ successMessage }}
      </div>
      <div class="notification is-danger" v-if="emailError">
        {{ emailError }}
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="field">
          <label class="label">Digite o email da sua conta</label>
          <div class="control">
            <input
              ref="emailInput"
              class="input is-shadowless is-medium"
              type="email"
              placeholder="Digite o email da sua conta"
              v-model.trim="email"
              required
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button
              class="button is-link is-fullwidth is-medium"
              :class="{ 'is-loading': isLoading }"
              :disabled="!isFormValid || isLoading"
            >
              Recuperar senha
            </button>
          </div>
        </div>
      </form>
    </div>
    <FooterComponent />
  </main>
</template>

<script lang="ts" setup>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import InfoComponent from '@/components/InfoComponent.vue';
import SectionLogoutComponent from '@/components/SectionLogoutComponent.vue';
import { alertSuccess } from '@/utils/utils';
import { computed, ref, watch, watchEffect } from 'vue';

const email = ref('');
const emailRef = ref('');
const emailError = ref('');
const isSuccess = ref(false);
const successMessage = ref('');

const isLoading = ref(false);

const emailInput = ref<HTMLInputElement | null>(null);

watch([email], () => {
  emailError.value = '';
});

watchEffect(() => {
  if (email.value !== '') {
    isSuccess.value = false;
  }
});

const isFormValid = computed(() => {
  return !emailError.value && email.value;
});

async function handleSubmit() {
  emailError.value = '';
  isSuccess.value = false;
  emailRef.value = email.value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    emailError.value = 'E-mail inválido.';
    return;
  }

  isLoading.value = true;

  setTimeout(() => {
    isLoading.value = false;
    isSuccess.value = true;
    email.value = '';
    emailInput.value?.blur();
    successMessage.value = `Enviamos o e-mail para ${emailRef.value}, se este e-mail estiver cadastrado você receberá um e-mail com o link de recuperação da senha.`;
    alertSuccess('E-mail enviado com sucesso!', successMessage.value);
  }, 2000);
}
</script>

<style lang="css" scoped></style>
