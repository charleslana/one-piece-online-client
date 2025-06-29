<template>
  <main class="page-container">
    <section class="section page-content">
      <div class="container">
        <h1 class="title" v-for="i in 1" :key="i">News {{ i }}</h1>
        <RouterLink to="/" class="button is-primary">Botão Home</RouterLink>
      </div>
    </section>
    <FooterComponent />
  </main>
</template>

<script lang="ts" setup>
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<style lang="css" scoped></style>
