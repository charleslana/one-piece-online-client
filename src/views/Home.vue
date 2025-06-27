<template>
  <div>
    <h1>Home</h1>
    <p>Count: {{ counter.count }}</p>
    <button @click="counter.increment()" class="button">Incrementar</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store/counter';

const counter = useCounterStore();
</script>
