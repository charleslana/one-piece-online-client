<template>
  <main class="page-container">
    <HeaderComponent />
    <SectionLogoutComponent />
    <div class="page-content container">
      <InfoComponent :icon="['fa', 'bullhorn']" title="Divulgue-nos" image="info-1.png">
        <p>
          Ajude a divulgar o nosso Site! Cole o código do Banner que vc desejar em seu site/blog.
        </p>
      </InfoComponent>
      <p class="has-text-black">Em breve.</p>
    </div>
    <FooterComponent />
  </main>
</template>

<script lang="ts" setup>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import InfoComponent from '@/components/InfoComponent.vue';
import SectionLogoutComponent from '@/components/SectionLogoutComponent.vue';
</script>

<style lang="css" scoped></style>
