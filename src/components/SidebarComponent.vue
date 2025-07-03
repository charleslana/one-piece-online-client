<template>
  <div class="menu-fixed">
    <span class="icon is-small">
      <font-awesome-icon :icon="['fa', 'chevron-right']" />
    </span>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.menu-fixed {
  position: fixed;
  z-index: 4;
  top: 50%;
  left: 0;
  background: #f32;
  color: #fff;
  cursor: pointer;
  padding: 1em;
  border-top-right-radius: 5px 5px;
  border-bottom-right-radius: 5px 5px;
  display: flex;
  align-items: center;
}
</style>
