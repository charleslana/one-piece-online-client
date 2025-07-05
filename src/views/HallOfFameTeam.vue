<template>
  <main class="page-container">
    <HeaderComponent />
    <SectionLogoutComponent />
    <div class="page-content container">
      <InfoComponent :icon="['fa', 'trophy']" title="Hall da fama equipes" image="info-1.png">
        <p>
          As memórias dos grandes piratas, revolucionários e marinheiros do {{ name }} estão
          guardadas aqui, para que possam sempre ser lembrados como os viajantes dos mares.
        </p>
        <p class="mt-3">
          Acesse os Hall da Fama de:
          <RouterLink to="/hall-of-fame" class="link2">Viajantes</RouterLink> e
          <RouterLink to="/hall-of-fame-guild" class="link2">Organização</RouterLink>
        </p>
      </InfoComponent>
      <div class="title is-3">Filtros do Hall da fama</div>
      <div class="columns mb-5">
        <div class="column is-5">
          <label class="label is-small">Facção</label>
          <div class="select is-fullwidth is-medium">
            <select class="is-shadowless" v-model="selectedFaction" :disabled="isFiltering">
              <option v-for="f in factionOptions" :key="f.key" :value="f.key">
                {{ f.label }}
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
              <th><abbr>Posição</abbr></th>
              <th><abbr>Nome</abbr></th>
              <th><abbr>Nível</abbr></th>
              <th><abbr>Pontuação</abbr></th>
              <th><abbr>Facção</abbr></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(entry, index) in rankingList" :key="index">
              <td class="is-size-3 gtamerica has-text-centered">{{ index + 1 }}º</td>
              <td class="has-text-weight-bold">{{ entry.name }}</td>
              <td>{{ entry.level }}</td>
              <td>{{ formatNumber(entry.score) }}</td>
              <td>{{ entry.faction }}</td>
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
import { formatNumber } from '@/utils/utils';
import { ref } from 'vue';

interface RankingEntry {
  name: string;
  faction: string;
  level: number;
  score: string;
}

type FactionKey = 'general' | 'marine' | 'pirate' | 'revolutionary';
type PositionValue = [number, number];

const name = ref('One Piece Online');

const factionOptions = [
  { key: 'general', label: 'Geral' },
  { key: 'marine', label: 'Marinha' },
  { key: 'pirate', label: 'Piratas' },
  { key: 'revolutionary', label: 'Revolucionários' },
] satisfies { key: FactionKey; label: string }[];

const positionOptions = [
  { value: [1, 25], label: '1 até 25' },
  { value: [2, 25], label: '26 até 50' },
] satisfies { value: PositionValue; label: string }[];

const selectedFaction = ref<FactionKey>('general');
const selectedPosition = ref<PositionValue>([1, 25]);

const isFiltering = ref(false);

const rankingList = ref<RankingEntry[]>([
  {
    name: 'Rei dos mares',
    faction: 'Pirata',
    level: 10,
    score: '99999',
  },
  {
    name: 'piratas',
    faction: 'Marinha',
    level: 12,
    score: '89400',
  },
  {
    name: 'revolucionários',
    faction: 'Revolucionário',
    level: 15,
    score: '78700',
  },
  {
    name: 'marinheiros',
    faction: 'Marinha',
    level: 8,
    score: '60000',
  },
  {
    name: 'palhas123',
    faction: 'Pirata',
    level: 7,
    score: '57000',
  },
]);

function applyFilters() {
  isFiltering.value = true;

  const payload = {
    faction: selectedFaction.value, // 'marine', 'pirate', etc.
    range: selectedPosition.value, // ex: [1, 25]
  };

  console.log('Enviando para backend:', payload);

  setTimeout(() => {
    // Aqui você pode aplicar a lógica de filtro real
    // Exemplo:
    // rankingList.value = originalList.filter(entry => entry.faction === selectedFaction.value);

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

.table-loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 2rem;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 10;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  pointer-events: all;
}
</style>
