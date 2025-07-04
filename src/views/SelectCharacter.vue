<template>
  <main class="page-container">
    <UserHeaderComponent />
    <MenuFixedComponent />
    <div class="page-content container mt-8rem">
      <p class="title is-1 is-uppercase gtamerica has-text-centered">Selecione seu personagem</p>
    </div>
    <FooterComponent />
  </main>
</template>

<script lang="ts" setup>
import FooterComponent from '@/components/FooterComponent.vue';
import MenuFixedComponent from '@/components/MenuFixedComponent.vue';
import UserHeaderComponent from '@/components/UserHeaderComponent.vue';
</script>

<style lang="css" scoped></style>
