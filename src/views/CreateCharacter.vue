<template>
  <main class="page-container">
    <UserHeaderComponent />
    <MenuFixedComponent />
    <div class="page-content">
      <div class="container mt-8rem">
        <p class="title is-1 is-uppercase gtamerica has-text-centered">Criar personagem</p>
        <InfoComponent
          :icon="['fa', 'id-badge']"
          title="Personagem criado com sucesso!"
          image="info-1.png"
          class="mt-8rem"
          v-if="success"
        >
          <p>Parabéns você acaba de criar seu personagem no {{ name }}.</p>
          <p>
            Comece agora mesmo seu treinamento
            <RouterLink to="/select-character" class="link3">clicando aqui</RouterLink> e selecione
            seu personagem
          </p>
        </InfoComponent>
      </div>
      <MainContainerComponent v-if="!success">
        <div class="columns is-multiline is-vcentered">
          <div
            class="column is-one-quarter is-flex is-justify-content-center is-align-items-center"
          >
            <div>
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
              <div class="field is-grouped mt-5">
                <p class="control">
                  <button class="button is-primary is-responsive">Veja mais imagens</button>
                </p>
                <p class="control">
                  <button
                    class="button is-link is-responsive"
                    @click="createCharacter"
                    :disabled="isLoading"
                    :class="{ 'is-loading': isLoading }"
                  >
                    Criar Personagem
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div class="column is-half is-flex is-justify-content-center is-align-items-center">
            <div>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label has-text-white is-size-5">Nome:</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <p class="control is-expanded">
                      <input
                        class="input is-shadowless"
                        type="text"
                        placeholder=""
                        v-model.trim="characterName"
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div class="field mt-5">
                <label class="label has-text-white is-size-5">Mar de origem:</label>
                <div class="buttons has-addons is-centered">
                  <button
                    v-for="sea in seas"
                    :key="sea.key"
                    class="button sea-button is-primary is-responsive"
                    :class="{ 'is-selected': selectedSea === sea.key }"
                    @click="selectedSea = sea.key"
                  >
                    {{ sea.label }}
                  </button>
                </div>
              </div>
              <div class="content has-text-white mt-5">
                <p class="has-text-white is-size-5"><b>Personagem:</b> Monkey D. Luffy</p>
                <p class="has-text-white is-size-5"><b>Versão:</b> Clássico</p>
                <p class="has-text-white is-size-5"><b>Mar de origem:</b> {{ selectedSeaLabel }}</p>
                <p class="has-text-white is-size-5"><b>Estatísticas:</b> 26%</p>
                <p class="has-text-white is-size-5"><b>População:</b> 360.786</p>
              </div>
            </div>
          </div>
          <div class="column is-flex is-justify-content-center is-align-items-center">
            <div>
              <div class="field mt-5">
                <label class="label has-text-white is-size-5">Facção:</label>
                <div class="buttons has-addons is-centered">
                  <button
                    v-for="faction in factions"
                    :key="faction.key"
                    class="button sea-button is-warning is-responsive"
                    :class="{ 'is-selected': selectedFaction === faction.key }"
                    @click="selectedFaction = faction.key"
                  >
                    {{ faction.label }}
                  </button>
                </div>
              </div>
              <div class="field mt-5">
                <label class="label has-text-white is-size-5">Raça:</label>
                <div class="buttons has-addons is-centered">
                  <button
                    v-for="breed in breeds"
                    :key="breed.key"
                    class="button sea-button is-link is-responsive"
                    :class="{ 'is-selected': selectedBreed === breed.key }"
                    @click="selectedBreed = breed.key"
                  >
                    {{ breed.label }}
                  </button>
                </div>
              </div>
              <div class="field mt-5">
                <label class="label has-text-white is-size-5">Classe:</label>
                <div class="buttons has-addons is-centered">
                  <button
                    v-for="characterClass in characterClasses"
                    :key="characterClass.key"
                    class="button sea-button is-info is-responsive"
                    :class="{ 'is-selected': selectedCharacterClass === characterClass.key }"
                    @click="selectedCharacterClass = characterClass.key"
                  >
                    {{ characterClass.label }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainContainerComponent>
      <div class="container" v-if="!success">
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
              :class="{ locked: char.id > 50 }"
              @click="selectedCharacter = char"
            >
              <img
                :src="getAvatarUrl(char.character, char.avatar)"
                :class="{
                  'is-selected': selectedCharacter?.id === char.id,
                  locked: char.id > 50,
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
import InfoComponent from '@/components/InfoComponent.vue';
import MainContainerComponent from '@/components/MainContainerComponent.vue';
import MenuFixedComponent from '@/components/MenuFixedComponent.vue';
import UserHeaderComponent from '@/components/UserHeaderComponent.vue';
import { alertError, getAvatarUrl, getCharacterUrl } from '@/utils/utils';
import { computed, ref } from 'vue';
// import { useRouter } from 'vue-router';

interface Option {
  key: string;
  label: string;
}

interface CharacterItem {
  id: number;
  character: string;
  avatar: string;
}

// const router = useRouter();
const name = ref('One Piece Online');

const characterName = ref('');
const selectedSea = ref<Option['key']>('east-blue');
const selectedFaction = ref<Option['key']>('pirate');
const selectedBreed = ref<Option['key']>('human');
const selectedCharacterClass = ref<Option['key']>('fighter');
const selectedCharacter = ref<CharacterItem>({
  id: 1,
  character: '1',
  avatar: '1.png',
});
const isLoading = ref(false);
const success = ref(false);

const seas: Option[] = [
  { key: 'east-blue', label: 'East Blue' },
  { key: 'north-blue', label: 'North Blue' },
  { key: 'west-blue', label: 'West Blue' },
  { key: 'south-blue', label: 'South Blue' },
];

const factions: Option[] = [
  { key: 'pirate', label: 'Pirata' },
  { key: 'marine', label: 'Marinha' },
  { key: 'revolutionary', label: 'Revolucionário' },
];

const breeds: Option[] = [
  { key: 'human', label: 'Humano' },
  { key: 'dwarf', label: 'Anão' },
  { key: 'giant', label: 'Gigante' },
  { key: 'merman', label: 'Tritão' },
  { key: 'cyborg', label: 'Ciborgue' },
];

const characterClasses: Option[] = [
  { key: 'fighter', label: 'Lutador' },
  { key: 'swordsman', label: 'Espadachim' },
  { key: 'shooter', label: 'Atirador' },
];

const characters: CharacterItem[] = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  character: '1',
  avatar: '1.png',
}));

const currentPage = ref(1);
const itemsPerPage = 16;

const totalPages = computed(() => Math.ceil(characters.length / itemsPerPage));

const paginatedCharacters = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return characters.slice(start, start + itemsPerPage);
});

const selectedSeaLabel = computed(() => {
  return seas.find((s) => s.key === selectedSea.value)?.label || '';
});

function createCharacter() {
  if (!characterName.value.trim()) {
    alertError('Ocorreu um erro.', 'Por favor, preencha o nome do personagem.');
    return;
  }

  isLoading.value = true;

  setTimeout(() => {
    isLoading.value = false;
    console.log(selectedSea.value);
    console.log(selectedFaction.value);
    success.value = true;
    window.scrollTo({ top: 0 });
    // router.push('/select-character');
  }, 2000);
}
</script>

<style lang="css" scoped>
.sea-button {
  opacity: 0.5;
  transition: opacity 0.2s ease;
}

.sea-button.is-selected {
  opacity: 1;
  font-weight: bold;
  border: 2px solid white;
}

label {
  text-align-last: start;
}

.character-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 130px);
  gap: 0.5rem;
  justify-content: center;
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

.locked {
  filter: grayscale(1);
  pointer-events: none;
}

.link3 {
  color: #fc984b;
}
</style>
