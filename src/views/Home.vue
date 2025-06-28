<template>
  <HeaderComponent />
  <section class="home-bg"></section>
  <div>
    <h1>Home</h1>
    <p>Count: {{ counter.count }}</p>
    <button @click="counter.increment()" class="button">Incrementar</button>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import { useCounterStore } from '@/store/counter';

const counter = useCounterStore();
</script>

<style scoped>
.home-bg {
  border-bottom: 0.7rem solid #184d86;
  height: 95vh;
  background-image: url(../assets/images/home/background.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: center;
}
</style>
