<template>
  <div class="main-container">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.main-container {
  background-color: #0d316b;
  color: #fff;
  position: relative;
  width: 100%;
  height: auto;
  padding: 15rem 0;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image:
    url('../assets/images/layout/top-bar.png'), url('../assets/images/layout/bottom-bar.png');
  background-repeat: no-repeat, no-repeat;
  background-position:
    top center,
    bottom center;
  background-size:
    100% auto,
    100% auto;
}
</style>
