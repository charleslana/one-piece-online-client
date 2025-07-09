<template>
  <div v-if="active" class="screen-lock">
    <div class="lock-content">Aguarde...</div>
  </div>
</template>

<script lang="ts" setup>
import { watch } from 'vue';

const props = withDefaults(
  defineProps<{
    active: boolean;
    savePosition?: boolean;
  }>(),
  {
    savePosition: true,
  }
);

let scrollPosition = 0;

watch(
  () => props.active,
  (newVal) => {
    if (newVal) {
      if (props.savePosition) {
        scrollPosition = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
      } else {
        document.body.style.overflow = 'hidden';
      }
    } else {
      if (props.savePosition) {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo({ top: scrollPosition });
      } else {
        document.body.style.overflow = '';
      }
    }
  }
);
</script>

<style scoped>
.screen-lock {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10001;
  width: 100vw;
  height: 100vh;
  background-color: rgba(51, 51, 51, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.lock-content {
  color: white;
  font-size: 2rem;
  text-align: center;
}
</style>
