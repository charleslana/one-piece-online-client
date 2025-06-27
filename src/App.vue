<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
      <router-link to="/error">Error</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
