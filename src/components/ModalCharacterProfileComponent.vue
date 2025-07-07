<template>
  <div class="modal modal-fx-slideTop" :class="{ 'is-active': active }">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content max-dialog modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Imagens disponíveis</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body" ref="modalBodyRef">
        <div class="is-flex is-flex-wrap-wrap is-justify-content-start">
          <div
            v-for="char in characters"
            :key="char.id"
            class="character-bg is-clickable"
            :style="{ backgroundImage: `url('${getCharacterBackgroundUrl('1.png')}')` }"
            @click="chooseProfile(char.id)"
          >
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
import {
  confirmDialogWithLoading,
  getCharacterBackgroundUrl,
  getCharacterUrl,
} from '@/utils/utils';
import { nextTick, ref, watch } from 'vue';

type Character = {
  id: number;
  character: string;
  avatar: string;
};

const props = defineProps<{ active: boolean }>();

const emit = defineEmits(['close']);

const modalBodyRef = ref<HTMLElement | null>(null);

watch(
  () => props.active,
  async (isActive) => {
    if (isActive) {
      await nextTick();
      modalBodyRef.value?.scrollTo({ top: 0 });
    }
  }
);

const characters = ref<Character[]>([
  { id: 1, character: '1', avatar: '1.png' },
  { id: 2, character: '1', avatar: '1.png' },
  { id: 3, character: '1', avatar: '1.png' },
  { id: 4, character: '1', avatar: '1.png' },
  { id: 5, character: '1', avatar: '1.png' },
]);

const isLoading = ref(false);

function closeModal() {
  if (!isLoading.value) {
    emit('close');
  }
}

function chooseProfile(id: number) {
  confirmDialogWithLoading({
    title: '',
    text: 'Deseja alterar a imagem do seu personagem para escolhida?',
    confirmText: 'Trocar',
    cancelText: 'Fechar',
    onConfirm: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      emit('close');
      console.log(id);
    },
  });
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
