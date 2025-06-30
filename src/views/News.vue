<template>
  <main class="page-container">
    <HeaderComponent />
    <SectionLogoutComponent />
    <div class="page-content container mt-5 mb-8rem">
      <p class="title is-1 is-uppercase gtamerica">Noticias dos mares</p>
      <NewsComponent />
    </div>
    <FooterComponent />
  </main>
</template>

<script lang="ts" setup>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import NewsComponent from '@/components/NewsComponent.vue';
import SectionLogoutComponent from '@/components/SectionLogoutComponent.vue';
</script>

<style lang="css" scoped></style>
