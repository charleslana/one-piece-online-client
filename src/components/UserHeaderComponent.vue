<template>
  <nav class="navbar header" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="mini-logo"></div>
      <a
        role="button"
        class="navbar-burger"
        :class="{ 'is-active': isOpen }"
        aria-label="menu"
        aria-expanded="false"
        @click="toggleMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <transition
      enter-active-class="animate__animated animate__slideInRight"
      leave-active-class="animate__animated animate__slideOutRight"
    >
      <div
        ref="navbarMenuRef"
        v-show="isMobile ? isOpen : true"
        class="is-active navbar-menu animate__animated animate__faster"
      >
        <div class="navbar-start is-justify-content-center">
          <div
            v-for="(menu, index) in menus"
            :key="index"
            class="navbar-item has-dropdown"
            :class="{
              'is-hoverable': !menu.disabled && !isMobile,
              'is-active': isMobile && activeDropdown === index,
            }"
          >
            <a
              class="navbar-link menu-button"
              :class="{ 'is-disabled': menu.disabled }"
              @click.prevent="toggleDropdown(index)"
            >
              {{ menu.title }}
            </a>
            <div
              v-if="!menu.disabled && (!isMobile || activeDropdown === index)"
              class="navbar-dropdown"
            >
              <RouterLink
                v-for="(item, i) in menu.items"
                :key="i"
                :to="item.to"
                class="navbar-item"
                :class="{ 'is-active': route.path === item.to }"
                @click="closeMenu"
              >
                {{ item.label }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script lang="ts" setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
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
const isOpen = ref(false);
const isMobile = ref(false);
const activeDropdown = ref<number | null>(null);
const navbarMenuRef = ref<HTMLElement | null>(null);

const menus: Menu[] = [
  {
    title: 'Usuário',
    disabled: false,
    items: [
      { label: 'Meus dados', to: '/my-data' },
      { label: 'Notícias', to: '/news' },
      { label: 'Trocar senha', to: '/change-password' },
      { label: 'Sair', to: '/logout' },
    ],
  },
  {
    title: 'Personagem',
    disabled: false,
    items: [
      { label: 'Selecionar', to: '/select-character?access=true' },
      { label: 'Criar personagem', to: '/create-character?access=true' },
    ],
  },
  {
    title: 'Treinamento',
    disabled: true,
    items: [],
  },
  {
    title: 'Tesouro',
    disabled: true,
    items: [],
  },
  {
    title: 'Mar atual',
    disabled: true,
    items: [],
  },
  {
    title: 'Batalhas',
    disabled: true,
    items: [],
  },
  {
    title: 'Facção',
    disabled: true,
    items: [],
  },
  {
    title: 'Tripulação',
    disabled: true,
    items: [],
  },
  {
    title: 'Ranking',
    disabled: true,
    items: [],
  },
  {
    title: 'Info',
    disabled: true,
    items: [],
  },
];

let scrollPosition = 0;

watch(isOpen, (open) => {
  if (isMobile.value) {
    if (open) {
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
});

const activeMenuIndex = computed(() =>
  menus.findIndex((menu) => menu.items.some((item) => item.to === route.path))
);

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
  if (isMobile.value && activeMenuIndex.value !== -1) {
    activeDropdown.value = activeMenuIndex.value;
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile);
});

function toggleMenu() {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    nextTick(() => {
      if (navbarMenuRef.value) {
        navbarMenuRef.value.scrollTop = 0;
      }
    });
  }
}

function closeMenu() {
  if (isMobile.value) {
    isOpen.value = false;
    activeDropdown.value = null;
  }
}

function toggleDropdown(index: number) {
  if (!isMobile.value) return;
  activeDropdown.value = activeDropdown.value === index ? null : index;
}

function checkMobile() {
  isMobile.value = window.innerWidth <= 1024;
}
</script>

<style scoped>
.header {
  background: rgb(0, 23, 71, 0.8);
  height: auto;
  min-height: 5.5rem;
  position: fixed;
  z-index: 35;
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
  text-transform: uppercase;
}

.menu-button[disabled] {
  background-color: transparent;
  opacity: 0.5;
}

.mini-logo {
  max-width: 20rem;
  width: 55px;
  height: 50px;
  background: url('../assets/images/mini-logo.png') no-repeat;
  background-size: contain;
  margin-left: 2rem;
  margin-right: 2rem;
}

.navbar-burger span {
  background-color: white;
}

.navbar-dropdown {
  border-radius: 13px;
}

.navbar-link:not(.is-arrowless)::after {
  border-color: white;
  width: 0.425em;
  height: 0.425em;
}

.is-active {
  color: white;
}

.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media screen and (max-width: 1024px) {
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 5.5rem;
    z-index: 37;
    background: rgb(0, 23, 71, 0.8);
    padding: 1rem 1rem;
    display: block;
  }

  .navbar-menu {
    position: fixed;
    top: 5.5rem;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: auto;
    background-color: #0d0f1d;
    z-index: 36;
    padding: 1rem 1.5rem;
  }
}

@media screen and (min-width: 1025px) {
  .navbar-menu {
    display: flex !important;
    flex-wrap: wrap;
  }

  .navbar-start {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
    justify-content: flex-start;
  }
}
</style>
