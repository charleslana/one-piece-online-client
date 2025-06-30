<template>
  <main class="page-container">
    <HeaderComponent />
    <SectionLogoutComponent />
    <div class="page-content container mt-5 mb-8rem">
      <p class="has-text-black">ID da notícia: {{ idNumber }}</p>
    </div>
    <FooterComponent />
  </main>
</template>

<script lang="ts" setup>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import SectionLogoutComponent from '@/components/SectionLogoutComponent.vue';

const props = defineProps<{ id: string }>();
const idNumber = Number(props.id);
</script>

<style lang="css" scoped></style>
