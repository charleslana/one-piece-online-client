<template>
  <header class="header">
    <a
      role="button"
      class="navbar-burger is-hidden-desktop"
      aria-label="menu"
      aria-expanded="false"
      @click="toggleMobileMenu"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
    <ul v-if="mobileMenuVisible" class="panel-mobile">
      <router-link to="/"><li class="has-text-white py-2">Home</li></router-link>
      <router-link to="/news"><li class="has-text-white py-2">Notícias</li></router-link>
      <router-link to="/hall-of-fame"
        ><li class="has-text-white py-2">Hall da Fama</li></router-link
      >
      <router-link to="/contact"><li class="has-text-white py-2">Contato</li></router-link>
    </ul>
    <div class="logo is-hidden-touch"></div>
    <div class="mini-logo is-hidden-tablet"></div>
    <ul class="menu is-hidden-touch">
      <router-link to="/">
        <li>Home</li>
      </router-link>
      <router-link to="/news">
        <li>Notícias</li>
      </router-link>
      <router-link to="/hall-of-fame">
        <li>Hall da Fama</li>
      </router-link>
      <router-link to="/contact">
        <li>Contato</li>
      </router-link>
    </ul>
    <button
      class="button is-warning is-responsive is-uppercase is-shadowless is-orange"
      @click="openLoginModal"
    >
      <span class="icon is-small">
        <font-awesome-icon :icon="['fa', 'user']" />
      </span>
      <span>Login</span>
    </button>
    <div
      class="is-flex is-align-items-center is-hidden-mobile is-hidden-tablet-only is-hidden-desktop-only"
    >
      <div class="is-size-5 is-uppercase has-text-weight-bold has-text-white">Social</div>
      <div class="is-flex">
        <a href="#" target="_blank" rel="noopener noreferrer" class="ml-5">
          <img src="../assets/images/social/twitter.png" alt="social icon" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="ml-3">
          <img src="../assets/images/social/facebook.png" alt="social icon" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="ml-3">
          <img src="../assets/images/social/youtube.png" alt="social icon" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="ml-3">
          <img src="../assets/images/social/whatsapp.png" alt="social icon" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="ml-3">
          <img src="../assets/images/social/discord.png" alt="social icon" />
        </a>
      </div>
    </div>
    <div class="language is-flex is-align-items-center is-hidden-touch">
      <img
        src="../assets/images/social/brazil.svg"
        alt="social icon"
        width="45"
        height="45"
        class="is-clickable"
      />
      <img
        src="../assets/images/social/usa.svg"
        alt="social icon"
        width="45"
        height="45"
        class="is-clickable ml-4"
        style="opacity: 0.3"
      />
    </div>
  </header>
  <ModalLoginComponent :active="showLoginModal" @close="closeLoginModal" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ModalLoginComponent from './ModalLoginComponent.vue';

const showLoginModal = ref(false);
const mobileMenuVisible = ref(false);

function toggleMobileMenu() {
  mobileMenuVisible.value = !mobileMenuVisible.value;
}

function openLoginModal() {
  showLoginModal.value = true;
}

function closeLoginModal() {
  showLoginModal.value = false;
}
</script>

<style scoped>
.navbar-burger {
  background: #fc8834;
  color: #fff;
  width: 3rem;
  height: 3rem;
  margin-inline-start: 0;
}

.navbar-burger:hover {
  background: #fc8834;
  color: #fff;
}

.header {
  background: rgb(0, 23, 71, 0.8);
  height: 5.5rem;
  position: fixed;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 100%;
  width: 100%;
  padding: 15px;
}

.logo {
  transform: translate(2rem, 2rem);
  max-width: 20rem;
  height: auto;
  width: 223px;
  height: 116px;
  background: url('../assets/images/logo.png') no-repeat;
  background-size: contain;
}

.mini-logo {
  max-width: 20rem;
  height: auto;
  width: 55px;
  height: 50px;
  background: url('../assets/images/mini-logo.png') no-repeat;
  background-size: contain;
}

.menu {
  display: flex;
  transition: all 0.3s linear;
  position: relative;
  align-items: center;
}

.menu li {
  border-left: 0.1rem solid rgba(255, 255, 255, 0.3);
  padding: 1.2rem;
  text-transform: uppercase;
  font-family: Phagspa;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.1rem;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
  text-align: center;
}

.menu a:last-child li {
  border-right: 0.1rem solid rgba(255, 255, 255, 0.3);
}

.menu li:hover {
  filter: brightness(80%);
  color: #fff;
  text-decoration: none;
}

.menu li:before {
  content: '';
  position: absolute;
  z-index: -1;
  left: 0;
  right: 100%;
  bottom: 0;
  background: #fc8833;
  height: 4px;
  transition-property: right;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
}

.menu li:hover:before {
  right: 0;
}

.language {
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  padding: 1rem;
}

.is-orange {
  background: #fc8834;
  color: #fff;
  font-weight: 700;
  border-radius: 0.5rem;
  font-family: Phagspa !important;
  padding: 1rem 2rem;
}

.is-orange:hover {
  filter: brightness(90%);
}

.panel-mobile {
  transform: translate(0, 4rem);
  opacity: 0.9;
  top: 2rem;
  left: 2.2rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  width: 12rem;
  height: auto;
  background: #fc8834;
  transition: all 0.3s;
  border-radius: 5px;
}

.panel-mobile a {
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
}

.panel-mobile li {
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid #cf6f1d;
  font-family: Phagspa !important;
  font-weight: 700;
  height: 4rem;
  justify-content: center;
  align-items: center;
  display: flex;
}

.panel-mobile a:last-child li {
  border-bottom: 0px;
}
</style>
