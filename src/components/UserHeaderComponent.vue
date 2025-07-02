<template>
  <div class="header">
    <div class="mini-logo"></div>
    <div
      v-for="(menu, index) in menus"
      :key="index"
      class="dropdown"
      :class="{ 'is-hoverable': !menu.disabled }"
    >
      <div class="dropdown-trigger">
        <button
          class="button menu-button"
          :disabled="menu.disabled"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <span class="is-uppercase">{{ menu.title }}</span>
          <span class="icon is-small">
            <font-awesome-icon :icon="['fa', 'angle-down']" />
          </span>
        </button>
      </div>
      <div v-if="!menu.disabled" class="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <RouterLink
            v-for="(item, i) in menu.items"
            :key="i"
            :to="item.to"
            class="dropdown-item"
            :class="{ 'is-active': route.path === item.to }"
          >
            {{ item.label }}
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

interface MenuItem {
  label: string;
  to: string;
}

interface Menu {
  title: string;
  disabled?: boolean;
  items: MenuItem[];
}

const route = useRoute();

const menus: Menu[] = [
  {
    title: 'Usuário',
    disabled: false,
    items: [
      { label: 'Meus dados', to: '/my-data' },
      { label: 'Notícias', to: '/news' },
      { label: 'Trocar senha', to: '/change-password' },
    ],
  },
  {
    title: 'Personagem',
    disabled: false,
    items: [
      { label: 'Selecionar', to: '/select-character' },
      { label: 'Criar personagem', to: '/create-character' },
    ],
  },
  {
    title: 'Treinamento',
    disabled: true,
    items: [],
  },
  {
    title: 'Avançado',
    disabled: true,
    items: [],
  },
  {
    title: 'Missão atual',
    disabled: true,
    items: [],
  },
  {
    title: 'Mar atual',
    disabled: true,
    items: [],
  },
  {
    title: 'Hospital',
    disabled: true,
    items: [],
  },
  {
    title: 'Batalhas',
    disabled: true,
    items: [],
  },
  {
    title: 'Equipe',
    disabled: true,
    items: [],
  },
  {
    title: 'Organização',
    disabled: true,
    items: [],
  },
  {
    title: 'Ranking',
    disabled: true,
    items: [],
  },
];
</script>

<style scoped>
.header {
  background: rgb(0, 23, 71, 0.8);
  height: auto;
  min-height: 5.5rem;
  position: fixed;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
  width: 100%;
  padding: 1rem 3rem;
  gap: 0rem;
}

.menu-button {
  color: #e9e9e9;
  background: transparent;
  border: none;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}

.menu-button[disabled] {
  background-color: transparent;
  opacity: 0.5;
}

.mini-logo {
  max-width: 20rem;
  height: auto;
  width: 55px;
  height: 50px;
  background: url('../assets/images/mini-logo.png') no-repeat;
  background-size: contain;
  margin-left: 2rem;
  margin-right: 2rem;
}
</style>
