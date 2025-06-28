<template>
  <HeaderComponent />
  <section class="home-bg"></section>
  <div class="has-text-centered">
    <button class="button is-uppercase register-button" @click="openRegisterModal">
      Cadastre-se
    </button>
  </div>
  <!-- <div>
    <h1>Home</h1>
    <p>Count: {{ counter.count }}</p>
    <button @click="counter.increment()" class="button">Incrementar</button>
  </div> -->
  <div class="container space">
    <nav class="level is-uppercase">
      <div class="level-left gtamerica last-news is-size-2 has-text-centered">Ultimas Noticias</div>
      <div class="level-right phagspa">
        <RouterLink to="/" class="link has-text-centered">Ver todas as notícias</RouterLink>
      </div>
    </nav>
  </div>
  <ModalRegisterComponent :active="showRegisterModal" @close="closeRegisterModal" />
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import ModalRegisterComponent from '@/components/ModalRegisterComponent.vue';
import { ref } from 'vue';
// import { useCounterStore } from '@/store/counter';

// const counter = useCounterStore();
const showRegisterModal = ref(false);

function openRegisterModal() {
  showRegisterModal.value = true;
}

function closeRegisterModal() {
  showRegisterModal.value = false;
}
</script>

<style scoped>
.home-bg {
  border-bottom: 0.7rem solid #184d86;
  height: 95dvh;
  background-image: url(../assets/images/home/background.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: center;
  background-position-x: center;
}

.register-button {
  background-image: linear-gradient(
    to right top,
    #fc8834,
    #fd8936,
    #fd8b38,
    #fe8c39,
    #fe8d3b,
    #fa8937,
    #f68434,
    #f28030,
    #e87526,
    #de6b1b,
    #d3600f,
    #c95501
  );
  box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.5);
  letter-spacing: 0.2rem;
  font-weight: bold;
  font-size: 2rem;
  border-radius: 0.5rem;
  font-family: Phagspa !important;
  margin-top: -2.8rem;
  border-color: transparent;
  transition-property: box-shadow, transform;
  color: #fff;
}

.register-button:hover {
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.5);
  transform: scale(1.1);
}

.last-news {
  color: #000;
}

.space {
  margin-top: 5rem;
}
</style>
