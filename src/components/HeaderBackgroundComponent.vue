<template>
  <div class="header-background">
    <img :src="getHeaderUrl('1.png')" alt="header image" />
  </div>
</template>

<script lang="ts" setup>
function getHeaderUrl(fileName: string): string {
  return new URL(`../assets/images/headers/${fileName}`, import.meta.url).href;
}
</script>

<style scoped>
.header-background {
  position: relative;
  background-size: cover;
  background-position: top;
  background-image: url('../assets/images/layout/header-background.jpg');
  height: 500px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-top: 100px;
}

.header-background img {
  max-height: 100%;
  object-fit: contain;
}
</style>
