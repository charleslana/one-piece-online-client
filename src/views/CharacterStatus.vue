<template>
  <main class="page-container">
    <CharacterHeaderComponent />
    <MenuFixedComponent />
    <div class="page-content mt-8rem">
      <div class="container">
        <p class="title is-1 is-uppercase gtamerica has-text-centered">Status do personagem</p>
      </div>
      <MainContainerComponent></MainContainerComponent>
    </div>
    <FooterComponent />
  </main>
</template>

<script lang="ts" setup>
import CharacterHeaderComponent from '@/components/CharacterHeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import MainContainerComponent from '@/components/MainContainerComponent.vue';
import MenuFixedComponent from '@/components/MenuFixedComponent.vue';
</script>

<style lang="css" scoped></style>
