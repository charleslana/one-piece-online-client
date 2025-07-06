<template>
  <main class="page-container">
    <CharacterHeaderComponent />
    <HeaderBackgroundComponent />
    <MenuFixedComponent />
    <div class="page-content">
      <div class="container">
        <CharacterStatusBarComponent />
        <p class="title is-1 is-uppercase gtamerica has-text-centered mt-8rem">
          Status do personagem
        </p>
      </div>
      <MainContainerComponent></MainContainerComponent>
    </div>
    <FooterComponent />
  </main>
</template>

<script lang="ts" setup>
import CharacterHeaderComponent from '@/components/CharacterHeaderComponent.vue';
import CharacterStatusBarComponent from '@/components/CharacterStatusBarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderBackgroundComponent from '@/components/HeaderBackgroundComponent.vue';
import MainContainerComponent from '@/components/MainContainerComponent.vue';
import MenuFixedComponent from '@/components/MenuFixedComponent.vue';
</script>

<style lang="css" scoped>
.card {
  background: #0d316b;
  color: #fff;
  border-start-start-radius: 0px;
  border-start-end-radius: 0px;
}
</style>
