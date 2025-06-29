<template>
  <main class="page-container">
    <HeaderComponent />
    <SectionLogoutComponent />
    <div class="page-content container">
      <InfoComponent :icon="['fa', 'exclamation-circle']" title="Acesso negado" image="info-1.png">
        <CommonTextNotFoundComponent />
      </InfoComponent>
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
import CommonTextNotFoundComponent from '@/components/CommonTextNotFoundComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import InfoComponent from '@/components/InfoComponent.vue';
import SectionLogoutComponent from '@/components/SectionLogoutComponent.vue';
</script>

<style scoped></style>
