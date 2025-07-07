<template>
  <div class="modal modal-fx-slideTop" :class="{ 'is-active': active }">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content max-dialog modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Fundo disponíveis</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body" ref="modalBodyRef">
        <div class="is-flex is-flex-wrap-wrap is-justify-content-start">
          <div
            v-for="(char, index) in characters"
            :key="index"
            class="character-bg is-clickable"
            :style="{ backgroundImage: `url('${getCharacterBackgroundUrl(char.image)}')` }"
            @click="chooseBackground(char.id)"
          ></div>
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
import { confirmDialogWithLoading, getCharacterBackgroundUrl } from '@/utils/utils';
import { nextTick, ref, watch } from 'vue';

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

const characters = ref<{ id: number; image: string }[]>([
  { id: 1, image: '1.png' },
  { id: 2, image: '2.png' },
  { id: 3, image: '3.png' },
  { id: 4, image: '4.png' },
  { id: 5, image: '5.png' },
  { id: 6, image: '6.png' },
  { id: 7, image: '7.png' },
  { id: 8, image: '8.png' },
  { id: 9, image: '9.png' },
  { id: 10, image: '10.png' },
  { id: 11, image: '11.png' },
  { id: 12, image: '12.png' },
  { id: 13, image: '13.png' },
  { id: 14, image: '14.png' },
]);

const isLoading = ref(false);

function closeModal() {
  if (!isLoading.value) {
    emit('close');
  }
}

function chooseBackground(id: number) {
  confirmDialogWithLoading({
    title: '',
    text: 'Deseja alterar o fundo da imagem para a escolhida?',
    confirmText: 'Sim',
    cancelText: 'Não',
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
