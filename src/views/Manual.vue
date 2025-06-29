<template>
  <main class="page-container">
    <HeaderComponent />
    <SectionLogoutComponent />
    <div class="page-content container">
      <InfoComponent :icon="['fa-regular', 'file-alt']" title="Manual" image="info-1.png">
        <p>
          Faça o download de um tutorial criado pelos criadores do jogo ou acesse alguns vídeos
          feitos pela comunidade do jogo.
        </p>
      </InfoComponent>
      <div class="columns menu-columns">
        <div class="column is-3">
          <aside class="menu">
            <ul class="menu-list">
              <li v-for="menu in menus" :key="menu.key" class="phagspa">
                <a
                  :class="{ 'is-active': selectedMenu === menu.key }"
                  @click="selectedMenu = menu.key"
                  >{{ menu.label }}
                </a>
              </li>
            </ul>
          </aside>
        </div>
        <div class="column is-9">
          <Transition
            name="fade"
            enter-active-class="animate__animated animate__fadeIn"
            mode="out-in"
          >
            <div :key="selectedMenu" class="content-menu">
              <div v-if="selectedMenu === 'Manual para Download'">
                <div class="title is-3">Download do Manual Completo em PDF</div>
                <p class="description"><b>Nome:</b> Manual Completo</p>
                <p class="description mb-3"><b>Tamanho:</b> 0MB</p>
                <a href="#" target="_blank" class="link2">Ver o Manual</a>
              </div>
              <div v-if="selectedMenu === 'Manual em Videos'">
                <div class="title is-3">Manual em Videos</div>
                <p class="description">Em breve.</p>
              </div>
            </div>
          </Transition>
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
import { ref } from 'vue';

interface MenuItem {
  key: string;
  label: string;
}

const menus: MenuItem[] = [
  { key: 'Manual para Download', label: 'Manual para Download' },
  { key: 'Manual em Videos', label: 'Manual em Videos' },
];

const selectedMenu = ref<string>('Manual para Download');
</script>

<style lang="css" scoped>
.title {
  font-family: Balto !important;
}

.description {
  color: #000;
}

.menu-columns {
  margin-bottom: 8rem !important;
}
</style>
