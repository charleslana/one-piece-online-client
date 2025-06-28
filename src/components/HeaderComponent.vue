<template>
  <header class="header">
    <div class="logo"></div>
    <ul class="menu">
      <router-link to="/">
        <li>Home</li>
      </router-link>
      <router-link to="/about">
        <li>Notícias</li>
      </router-link>
      <router-link to="/error">
        <li>Hall da Fama</li>
      </router-link>
      <router-link to="/error">
        <li>Contato</li>
      </router-link>
    </ul>
    <button class="button is-warning is-medium is-responsive is-uppercase button-phagspa">
      <span class="icon is-small">
        <font-awesome-icon :icon="['fa', 'user']" />
      </span>
      <span>Login</span>
    </button>
  </header>
</template>

<script lang="ts" setup></script>

<style scoped>
.header {
  background: rgb(0, 23, 71, 0.8);
  height: 5.5rem;
  position: fixed;
  z-index: 1035;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 100%;
  width: 100%;
}

.logo {
  transform: translate(2rem, 2rem);
  max-width: 20rem;
  height: auto;
  width: 223px;
  height: 116px;
  background: url('../assets/images/logo.png');
  background-size: contain;
}

.menu {
  display: flex;
  transition: all 0.3s linear;
  position: relative;
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
</style>
