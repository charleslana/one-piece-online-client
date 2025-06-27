<template>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts" setup>
defineProps<{
  msg: string;
}>();
</script>

<style scoped></style>
