<template>
  <div class="menu-fixed" @click="openMenu">
    <span class="icon is-small">
      <font-awesome-icon :icon="['fa', 'chevron-right']" />
    </span>
  </div>
  <div v-if="!isHidden" class="menu-fixed-backdrop" @click="closeMenu"></div>
  <transition
    enter-active-class="animate__animated animate__slideInLeft"
    leave-active-class="animate__animated animate__slideOutLeft"
  >
    <div v-show="!isHidden" class="menu-fixed-wrapper animate__animated animate__faster">
      <span class="menu-fixed-close" @click="closeMenu">
        <font-awesome-icon :icon="['fa', 'angle-left']" color="white" size="2x" />
      </span>
      <div
        class="character-bg"
        :style="{ backgroundImage: `url('${getCharacterBackgroundUrl('1.png')}')` }"
      >
        <img :src="getCharacterUrl('1', '1.png')" alt="character image" />
      </div>
      <p class="mt-1 is-size-4 name">Nome_personagem</p>
      <div class="mt-5">
        <img src="../assets/images/icons/bag-character.png" alt="icon image" class="bag" />
      </div>
      <div class="mt-3">
        <button class="button is-link mb-3" @click="openProfileModal">Trocar Imagem</button>
        <button class="button is-info mb-3" @click="openBackgroundModal">Trocar Fundo</button>
      </div>
      <div class="mt-3">
        <p>Título:</p>
        <ModelSelect
          :options="options"
          v-model="item"
          placeholder="Pesquise a Alcunha"
          @searchchange="search"
          @update:modelValue="handleSelectItem"
          :is-disabled="isDisabled"
        />
      </div>
      <div class="mt-5">
        <p>Classe: Lutador</p>
        <p>Mar: East Blue</p>
        <p>Profissão: --</p>
        <p>Nível: 1</p>
        <p>Poder: {{ formatNumber(6000) }}</p>
        <p>Ranking (Geral): --</p>
        <p>Ranking (Mar): --</p>
        <p>Ranking (Facção): --</p>
        <p>Pontos: --</p>
        <p>Tripulação: Nenhum(a)</p>
      </div>
    </div>
  </transition>
  <ModalCharacterBackgroundComponent :active="isBackgroundModal" @close="closeBackgroundModal" />
  <ModalCharacterProfileComponent :active="isProfileModal" @close="closeProfileModal" />
</template>

<script lang="ts" setup>
import { formatNumber, getCharacterBackgroundUrl, getCharacterUrl } from '@/utils/utils';
import { ref, watch } from 'vue';
import { ModelSelect } from 'vue-search-select';
import ModalCharacterBackgroundComponent from './ModalCharacterBackgroundComponent.vue';
import ModalCharacterProfileComponent from './ModalCharacterProfileComponent.vue';

interface SearchSelect {
  value: string;
  text: string;
}

const options = ref<SearchSelect[]>([
  { value: '0', text: 'Nenhum(a)' },
  { value: '1', text: 'Axe-Hand' },
  { value: '2', text: 'Beheader' },
]);

const item = ref<SearchSelect>();
const searchText = ref('');
const isDisabled = ref(false);

const isHidden = ref(true);
const isBackgroundModal = ref(false);
const isProfileModal = ref(false);

let scrollPosition = 0;

watch(isHidden, (hidden) => {
  if (!hidden) {
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
});

function openMenu() {
  isHidden.value = false;
}

function closeMenu() {
  isHidden.value = true;
}

function search(text: string): void {
  searchText.value = text;
  console.log('searchText', searchText.value);
  console.log('item', item.value);
}

function handleSelectItem(selectedItem: SearchSelect): void {
  console.log('Selected item:', selectedItem);
}

function openBackgroundModal() {
  isBackgroundModal.value = true;
}

function closeBackgroundModal() {
  isBackgroundModal.value = false;
}

function openProfileModal() {
  isProfileModal.value = true;
}

function closeProfileModal() {
  isProfileModal.value = false;
}
</script>

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

.menu-fixed-wrapper {
  background: #0d0f1d;
  position: fixed;
  z-index: 38;
  top: 88px;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 18vw;
  overflow-y: auto;
  padding: 3rem 3rem 30rem 3rem;
  text-align: center;
  color: #fff;
}

.menu-fixed-close {
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 39;
  cursor: pointer;
}

.menu-fixed-wrapper::-webkit-scrollbar {
  width: 20px;
}

.menu-fixed-wrapper::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
}

.menu-fixed-wrapper::-webkit-scrollbar-thumb {
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

.menu-fixed-wrapper::-webkit-scrollbar-track {
  background-color: transparent;
}

@media (max-width: 600px) {
  .menu-fixed-wrapper {
    width: 80vw;
  }
}

.name {
  color: #f8b764;
  overflow-wrap: break-word;
}

.bag {
  border-radius: 25px;
  width: 40px;
  border: 2px solid #4395ff;
  cursor: pointer;
}

.menu-fixed-backdrop {
  position: fixed;
  z-index: 37;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: transparent;
}
</style>
