<template>
  <div class="modal modal-fx-slideTop" :class="{ 'is-active': active }">
    <!-- modal-full-screen -->
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content max-dialog modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Imagens disponíveis</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <div class="is-flex is-flex-wrap-wrap is-justify-content-start">
          <div v-for="char in characters" :key="char.id" class="character-bg">
            <img :src="getCharacterUrl(char.character, char.avatar)" alt="character image" />
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <div class="buttons">
          <button class="button is-link" @click="closeModal">Fechar</button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getCharacterUrl } from '@/utils/utils';
import { ref, watch } from 'vue';

type Character = {
  id: number;
  character: string;
  avatar: string;
};

const props = defineProps<{ active: boolean }>();

const emit = defineEmits(['close']);

const characters = ref<Character[]>([
  { id: 1, character: '1', avatar: '1.png' },
  { id: 2, character: '1', avatar: '1.png' },
  { id: 3, character: '1', avatar: '1.png' },
  { id: 4, character: '1', avatar: '1.png' },
  { id: 5, character: '1', avatar: '1.png' },
]);

const isLoading = ref(false);

let scrollPosition = 0;

watch(
  () => props.active,
  (newVal) => {
    if (newVal) {
      scrollPosition = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = '100%';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo({ top: scrollPosition });
    }
  }
);

function closeModal() {
  if (!isLoading.value) {
    emit('close');
  }
}
</script>

<style scoped>
.max-dialog {
  width: 50% !important;
}

@media (max-width: 600px) {
  .max-dialog {
    width: 100% !important;
  }
}
</style>
