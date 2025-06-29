<template>
  <div class="info info-top">
    <font-awesome-icon :icon="icon" size="2x" color="white" />
    <div class="info-title">{{ title }}</div>
  </div>

  <div class="info-content">
    <div class="columns">
      <div class="column is-8">
        <slot></slot>
      </div>
      <div class="column is-4 is-hidden-touch">
        <img :src="imageUrl" alt="info image" class="info-character" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  icon: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const imageUrl = computed(() => getInfoImageUrl(props.image));

function getInfoImageUrl(fileName: string): string {
  return new URL(`../assets/images/info/${fileName}`, import.meta.url).href;
}
</script>

<style scoped>
.info {
  align-items: center;
  border-radius: 40px 0 0 0;
  color: #fff;
  display: flex;
  margin-bottom: 0;
  position: relative;
  width: 100%;
  padding: calc(4px * 2) calc(8px * 3);
  margin-top: -4rem;
}

.info-top {
  --shadow: #af4417;
  --color: #fff;
  background-image: linear-gradient(90deg, #af4417 0%, #ee7221 63%, rgba(238, 114, 33, 0) 100%);
}

.info-title {
  font-style: italic;
  text-shadow: 0 2px 0px #af4417;
  margin-left: 15px;
  text-transform: uppercase;
  font-family: GT-America !important;
  font-size: 2rem;
}

.info-content {
  border: solid white;
  border-width: 60px 64px 82px 88px;
  border-image-source: url(../assets/images/layout/border-chamfer-orange.png);
  border-image-slice: 120 128 164 176 fill;
  border-image-outset: 26px;
  padding: 0;
  color: #000;
  position: relative;
}

.info-character {
  bottom: -77px;
  max-height: 335px;
  right: 0;
  position: absolute;
}
</style>
