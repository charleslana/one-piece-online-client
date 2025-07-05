<template>
  <main class="page-container">
    <UserHeaderComponent />
    <MenuFixedComponent />
    <div class="page-content mt-8rem">
      <div class="container">
        <p class="title is-1 is-uppercase gtamerica has-text-centered">Selecione seu personagem</p>
      </div>
      <MainContainerComponent>
        <div class="columns is-multiline is-vcentered">
          <div class="column is-one-third is-flex is-justify-content-center is-align-items-center">
            <div class="character-bg">
              <transition
                mode="out-in"
                enter-active-class="animate__animated animate__fadeIn animate__faster"
                leave-active-class="animate__animated animate__fadeOut animate__faster"
              >
                <img
                  v-if="selectedCharacter"
                  :key="selectedCharacter.id"
                  :src="getCharacterUrl(selectedCharacter.character, selectedCharacter.avatar)"
                  alt="character image"
                />
              </transition>
            </div>
          </div>
          <div class="column is-one-third is-flex is-justify-content-start is-align-items-center">
            <div>
              <p class="mb-3">// <span class="is-size-3">Informações</span></p>
              <p class="is-orange has-text-weight-bold is-size-5">{{ selectedCharacter.name }}</p>
              <p class="is-orange has-text-weight-bold is-size-5">
                Nível:
                <span class="has-text-white has-text-weight-normal">{{
                  selectedCharacter.level
                }}</span>
              </p>
              <p class="is-orange has-text-weight-bold is-size-5">
                Facção:
                <span class="has-text-white has-text-weight-normal">{{
                  selectedCharacter.faction
                }}</span>
              </p>
              <p class="is-orange has-text-weight-bold is-size-5">
                Berries:
                <span class="has-text-white has-text-weight-normal">{{
                  formatNumber(selectedCharacter.berry)
                }}</span>
              </p>
              <p class="is-orange has-text-weight-bold is-size-5">
                Mar:
                <span class="has-text-white has-text-weight-normal">{{
                  selectedCharacter.sea
                }}</span>
              </p>
            </div>
          </div>
          <div class="column is-one-third is-flex is-justify-content-start is-align-items-center">
            <div class="attributes">
              <p class="mb-3">// <span class="is-size-3">Atributos</span></p>
              <div
                v-for="attr in attributes"
                :key="attr.name"
                class="columns is-mobile is-vcentered is-gapless mb-2"
              >
                <div class="column is-narrow is-flex is-align-items-center">
                  <img :src="getIconUrl(attr.icon)" alt="icon image" width="24" height="24" />
                  <span class="has-text-white ml-4">{{ attr.name }}</span>
                </div>
                <div class="column ml-4">
                  <div class="progress-container">
                    <progress class="progress is-success" value="100" max="100"></progress>
                    <span class="progress-text">{{ attr.value }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="buttons is-justify-content-center">
          <button class="button is-link is-medium" @click="playCharacter" :disabled="isLoading">
            Jogar
          </button>
          <button
            class="button is-danger is-medium"
            @click="deleteCharacter"
            :class="{ 'is-loading': isLoading }"
            :disabled="isLoading"
          >
            Remover
          </button>
        </div>
      </MainContainerComponent>
      <div class="container">
        <transition
          mode="out-in"
          enter-active-class="animate__animated animate__fadeIn animate__faster"
          leave-active-class="animate__animated animate__fadeOut animate__faster"
        >
          <div class="character-grid" :key="currentPage">
            <div
              v-for="char in paginatedCharacters"
              :key="char.id"
              class="profile-mask"
              @click="selectedCharacter = char"
            >
              <img
                :src="getAvatarUrl(char.character, char.avatar)"
                :class="{
                  'is-selected': selectedCharacter?.id === char.id,
                }"
              />
            </div>
          </div>
        </transition>
        <nav class="pagination is-centered mt-5" role="navigation" aria-label="pagination">
          <ul class="pagination-list">
            <li v-for="page in totalPages" :key="page">
              <a
                class="pagination-link has-text-white has-background-black gtamerica"
                :class="{ 'is-current': currentPage === page }"
                aria-label="Goto page"
                aria-current="page"
                @click.prevent="currentPage = page"
              >
                {{ page }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <FooterComponent />
  </main>
</template>

<script lang="ts" setup>
import FooterComponent from '@/components/FooterComponent.vue';
import MainContainerComponent from '@/components/MainContainerComponent.vue';
import MenuFixedComponent from '@/components/MenuFixedComponent.vue';
import UserHeaderComponent from '@/components/UserHeaderComponent.vue';
import {
  confirmDialog,
  formatNumber,
  getAvatarUrl,
  getCharacterUrl,
  showSuccess,
} from '@/utils/utils';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

interface CharacterItem {
  id: number;
  character: string;
  avatar: string;
  name: string;
  level: number;
  faction: string;
  berry: string;
  sea: string;
  heart: string;
  energy: string;
  stamina: string;
}

interface Attribute {
  icon: string;
  name: string;
  value: number;
}

const router = useRouter();

const selectedCharacter = ref<CharacterItem>({
  id: 1,
  character: '1',
  avatar: '1.png',
  name: 'Nome_personagem',
  level: 1,
  faction: 'Pirata',
  berry: '5000',
  sea: 'East Blue',
  heart: '100',
  energy: '100',
  stamina: '100',
});

const attributes = computed<Attribute[]>(() => {
  return [
    { icon: 'heart.png', name: 'Vida', value: Number(selectedCharacter.value.heart) },
    { icon: 'energy.png', name: 'Energia', value: Number(selectedCharacter.value.energy) },
    { icon: 'stamina.png', name: 'Stamina', value: Number(selectedCharacter.value.stamina) },
  ];
});

const characters: CharacterItem[] = Array.from({ length: 10 }, (_, i) => {
  if (i === 0) {
    return { ...selectedCharacter.value };
  }

  return {
    id: i + 1,
    character: '1',
    avatar: '1.png',
    name: 'Nome_personagem2',
    level: 2,
    faction: 'Marine',
    berry: '10000',
    sea: 'North Blue',
    heart: '150',
    energy: '98',
    stamina: '72',
  };
});

const isLoading = ref(false);

const currentPage = ref(1);
const itemsPerPage = 16;

const totalPages = computed(() => Math.ceil(characters.length / itemsPerPage));

const paginatedCharacters = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return characters.slice(start, start + itemsPerPage);
});

function getIconUrl(fileName: string): string {
  return new URL(`../assets/images/icons/${fileName}`, import.meta.url).href;
}

function deleteCharacter() {
  confirmDialog({
    title: 'Você tem certeza?',
    text: 'Você quer realmente deletar esse personagem?',
    confirmText: 'Sim, eu quero!',
    onConfirm: () => {
      isLoading.value = true;

      setTimeout(() => {
        console.log(`deletou o id ${selectedCharacter.value?.id}`);
        isLoading.value = false;
        showSuccess('Personagem deletado com sucesso.');
      }, 2000);
    },
  });
}

function playCharacter() {
  console.log(`jogando com o id ${selectedCharacter.value?.id}`);
  router.push('/general');
}
</script>

<style lang="css" scoped>
.attributes {
  width: 200px;
}

.progress {
  width: 100%;
  height: 20px;
  margin-bottom: 0px !important;
}

.progress-container {
  position: relative;
  width: 100%;
}

.progress-text {
  position: absolute;
  top: 0;
  left: 0px;
  height: 100%;
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: bold;
  padding-left: 8px;
  font-size: 0.9rem;
  text-shadow: 1px 2px 1px rgb(0 0 0 / 80%);
}

.profile-mask img {
  opacity: 0.4;
}

.profile-mask img.is-selected {
  opacity: 1;
}

.pagination-link {
  border: 1px solid #000;
}

.is-current {
  background-color: #ee7221 !important;
}

.pagination-link:hover {
  background-color: #ee7221 !important;
}
</style>
