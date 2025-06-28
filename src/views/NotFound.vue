<template>
  <main class="page-container">
    <div class="page-content">
      <section class="section">
        <div class="container has-text-centered">
          <h1 class="title">404 - Página não encontrada</h1>
          <p>Oops! A página que você tentou acessar não existe.</p>
          <router-link to="/">Voltar para Home</router-link>
        </div>
      </section>
    </div>
    <FooterComponent />
  </main>
</template>

<script lang="ts" setup>
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<style scoped></style>
