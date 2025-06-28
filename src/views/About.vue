<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Olá Bulma!</h1>
      <button class="button is-primary" @click="goHome">Botão Bulma</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goHome() {
  router.push('/');
}
</script>

<style lang="css" scoped></style>
