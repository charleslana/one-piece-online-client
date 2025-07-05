<template>
  <main class="page-container">
    <HeaderComponent />
    <SectionLogoutComponent />
    <div class="page-content container">
      <InfoComponent :icon="['fa', 'trophy']" title="Hall da fama" image="info-1.png">
        <p>
          As memórias dos grandes piratas, revolucionários e marinheiros do {{ name }} estão
          guardadas aqui, para que possam sempre ser lembrados como os viajantes dos mares.
        </p>
        <p class="mt-3">
          Acesse os Hall da Fama de:
          <RouterLink to="/hall-of-fame-faction" class="link2">Facção</RouterLink> e
          <RouterLink to="/hall-of-fame-crew" class="link2">Tripulação</RouterLink>
        </p>
      </InfoComponent>
      <div class="title is-3">Filtros do Hall da fama</div>
      <div class="columns mb-5">
        <div class="column is-5">
          <label class="label is-small">Mar</label>
          <div class="select is-fullwidth is-medium">
            <select class="is-shadowless" v-model="selectedSea" :disabled="isFiltering">
              <option v-for="s in seaOptions" :key="s.key" :value="s.key">
                {{ s.label }}
              </option>
            </select>
          </div>
        </div>
        <div class="column is-5">
          <label class="label is-small">Posição</label>
          <div class="select is-fullwidth is-medium">
            <select class="is-shadowless" v-model="selectedPosition" :disabled="isFiltering">
              <option v-for="p in positionOptions" :key="p.label" :value="p.value">
                {{ p.label }}
              </option>
            </select>
          </div>
        </div>
        <div class="column is-2">
          <label class="label is-small is-invisible">Filtrar</label>
          <button
            class="button is-link is-medium is-fullwidth"
            :class="{ 'is-loading': isFiltering }"
            :disabled="isFiltering"
            @click="applyFilters"
          >
            Filtrar
          </button>
        </div>
      </div>
      <div class="table-container mb-8rem is-relative">
        <table
          v-if="rankingList.length > 0"
          class="table is-striped is-bordered is-narrow is-hoverable is-fullwidth mt-5"
        >
          <thead>
            <tr>
              <th><abbr></abbr></th>
              <th><abbr>Posição</abbr></th>
              <th><abbr>Nome</abbr></th>
              <th><abbr>Facção</abbr></th>
              <th><abbr>Nível</abbr></th>
              <th><abbr>Pontuação</abbr></th>
              <th><abbr>Mar</abbr></th>
              <th><abbr>Personagem</abbr></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(entry, index) in rankingList" :key="index">
              <th class="has-text-centered">
                <font-awesome-icon
                  :icon="['fa', getIconByPosition(index + 1)[0]]"
                  size="2x"
                  :class="getIconByPosition(index + 1)[1]"
                />
              </th>
              <td class="is-size-3 gtamerica has-text-centered">{{ index + 1 }}º</td>
              <td class="has-text-weight-bold">{{ entry.name }}</td>
              <td>{{ entry.faction }}</td>
              <td>{{ entry.level }}</td>
              <td>{{ formatNumber(entry.score) }}</td>
              <td>{{ entry.sea }}</td>
              <td class="has-text-centered">
                <div class="profile-mask">
                  <img :src="getAvatarUrl(entry.character, entry.avatar)" alt="avatar image" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else class="notification is-light has-text-centered mt-5">
          Nenhum resultado encontrado.
        </div>
        <div v-if="isFiltering" class="table-loading-overlay">
          <button class="button is-loading is-white is-large" disabled>Carregando...</button>
        </div>
      </div>
    </div>
    <FooterComponent />
  </main>
</template>

<script lang="ts" setup>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import InfoComponent from '@/components/InfoComponent.vue';
import SectionLogoutComponent from '@/components/SectionLogoutComponent.vue';
import { formatNumber, getAvatarUrl } from '@/utils/utils';
import { ref } from 'vue';

interface RankingEntry {
  name: string;
  faction: string;
  level: number;
  score: string;
  sea: string;
  character: string;
  avatar: string;
}

type SeaKey = 'general' | 'east-blue' | 'north-blue' | 'west-blue' | 'south-blue';
type PositionValue = [number, number];

const name = ref('One Piece Online');

const seaOptions = [
  { key: 'general', label: 'Geral' },
  { key: 'east-blue', label: 'East Blue' },
  { key: 'north-blue', label: 'North Blue' },
  { key: 'west-blue', label: 'West Blue' },
  { key: 'south-blue', label: 'South Blue' },
] satisfies { key: SeaKey; label: string }[];

const positionOptions = [
  { value: [1, 25], label: '1 até 25' },
  { value: [2, 25], label: '26 até 50' },
] satisfies { value: PositionValue; label: string }[];

const selectedSea = ref<SeaKey>('general');
const selectedPosition = ref<PositionValue>([1, 25]);

const isFiltering = ref(false);

const rankingList = ref<RankingEntry[]>([
  {
    name: 'Zoro',
    faction: 'Pirata',
    level: 10,
    score: '99999',
    sea: 'East Blue',
    character: '1',
    avatar: '1.png',
  },
  {
    name: 'Sakazuki',
    faction: 'Marinha',
    level: 12,
    score: '89400',
    sea: 'Grand Line',
    character: '1',
    avatar: '2.png',
  },
  {
    name: 'Dragon',
    faction: 'Revolucionário',
    level: 15,
    score: '78700',
    sea: 'New World',
    character: '1',
    avatar: '3.png',
  },
  {
    name: 'Smoker',
    faction: 'Marinha',
    level: 8,
    score: '60000',
    sea: 'East Blue',
    character: '1',
    avatar: '4.png',
  },
  {
    name: 'Brook',
    faction: 'Pirata',
    level: 7,
    score: '57000',
    sea: 'West Blue',
    character: '1',
    avatar: '5.png',
  },
  {
    name: 'Brook2',
    faction: 'Pirata',
    level: 7,
    score: '57001',
    sea: 'West Blue',
    character: '1',
    avatar: '5.png',
  },
]);

function getIconByPosition(position: number): [string, string] {
  if (position === 1) return ['trophy', 'has-text-warning'];
  if (position === 2) return ['trophy', 'has-text-grey'];
  if (position === 3) return ['trophy', 'has-text-orange'];
  if (position === 4) return ['medal', 'has-text-yellow'];
  return ['award', 'has-text-grey-light'];
}

function applyFilters() {
  isFiltering.value = true;

  const payload = {
    sea: selectedSea.value,
    range: selectedPosition.value,
  };

  console.log('Enviando para backend:', payload);

  setTimeout(() => {
    // Aqui você pode aplicar a lógica de filtro real
    // Exemplo:
    // rankingList.value = originalList.filter(entry => entry.sea === selectedSea.value);

    // Apenas simulando uma nova referência
    rankingList.value = [...rankingList.value];

    isFiltering.value = false;
  }, 2000);
}
</script>

<style lang="css" scoped>
th,
td {
  vertical-align: middle !important;
}

td:last-child {
  text-align: center;
}

.table-loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 2rem; /* remover para centro */
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 10;
  display: flex;
  align-items: flex-start; /* center */
  justify-content: center;
  pointer-events: all;
}
</style>
