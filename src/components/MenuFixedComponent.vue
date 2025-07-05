<template>
  <div class="menu-fixed" @click="openMenu">
    <span class="icon is-small">
      <font-awesome-icon :icon="['fa', 'chevron-right']" />
    </span>
  </div>

  <transition
    enter-active-class="animate__animated animate__slideInLeft"
    leave-active-class="animate__animated animate__slideOutLeft"
  >
    <div v-show="!isHidden" class="menu-fixed-wrapper animate__animated animate__faster">
      <span class="menu-fixed-close" @click="closeMenu">
        <font-awesome-icon :icon="['fa', 'angle-left']" color="white" size="2x" />
      </span>

      <div v-for="(menu, index) in menus" :key="index">
        <div class="menu-title">
          <p class="is-size-5 has-text-weight-bold">{{ menu.title }}</p>
        </div>
        <ul>
          <li v-for="(item, i) in menu.items" :key="i">
            <RouterLink
              :to="item.to"
              class="menu-link"
              :class="{ 'has-text-weight-bold': route.path === item.to }"
            >
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

interface SubMenu {
  label: string;
  to: string;
}

interface Menu {
  title: string;
  items: SubMenu[];
}

const route = useRoute();

const isHidden = ref(true);

const menus: Menu[] = [
  {
    title: 'Usuário',
    items: [
      { label: 'Indique seus amigos', to: '/refer' },
      { label: 'Meus Dados', to: '/my-data' },
      { label: 'Suporte', to: '/support' },
      { label: 'Trocar Senha', to: '/change-password' },
      { label: 'Sair', to: '/' },
    ],
  },
  {
    title: 'Personagem',
    items: [
      { label: 'Selecionar', to: '/select-character' },
      { label: 'Criar Personagem', to: '/create-character' },
    ],
  },
  {
    title: 'Principal',
    items: [
      { label: 'Home', to: '/' },
      { label: 'Manual', to: '/manual' },
      { label: 'Hall da Fama', to: '/hall-of-fame' },
      { label: 'Divulgue-Nos', to: '/disclosure' },
      { label: 'Contato', to: '/contact' },
    ],
  },
];

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
  z-index: 500;
  top: 88px;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 18vw;
  /* display: block; */
  overflow-y: auto;
  padding: 3rem 3rem 30rem 3rem;
}

.menu-fixed-close {
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 4000;
  cursor: pointer;
}

.menu-title {
  text-align: center;
  padding: 1rem;
  margin: 3rem 0 0 0;
  color: #4395ff;
  border: 1px solid #4395ff;
}

ul {
  padding: 1rem;
}

.menu-link {
  color: #e9e9e9;
}

.menu-link:hover {
  color: #0056b3;
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
</style>
