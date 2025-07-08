<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <div
          class="is-flex is-justify-content-space-evenly is-align-items-center has-text-centered is-gap-3 is-flex-wrap-wrap"
        >
          <div>
            <div class="is-uppercase gtamerica level is-size-3">Nv.</div>
            <div class="is-size-1 has-text-weight-bold">1</div>
          </div>
          <div class="is-flex is-flex-direction-column is-gap-3">
            <div class="is-flex is-gap-3 is-justify-content-center is-flex-wrap-wrap">
              <div class="is-flex is-gap-3">
                <div>
                  <img
                    src="../assets/images/icons/heart.png"
                    alt="icon image"
                    width="70"
                    height="70"
                  />
                </div>
                <div class="is-flex is-flex-direction-column is-gap-3">
                  <div>100/100</div>
                  <div>
                    <progress class="progress is-danger" value="100" max="100"></progress>
                  </div>
                </div>
              </div>
              <div class="is-flex is-gap-3">
                <div>
                  <img
                    src="../assets/images/icons/energy.png"
                    alt="icon image"
                    width="70"
                    height="70"
                  />
                </div>
                <div class="is-flex is-flex-direction-column is-gap-3">
                  <div>100/100</div>
                  <div>
                    <progress class="progress is-info" value="100" max="100"></progress>
                  </div>
                </div>
              </div>
              <div class="is-flex is-gap-3">
                <div>
                  <img
                    src="../assets/images/icons/stamina.png"
                    alt="icon image"
                    width="70"
                    height="70"
                  />
                </div>
                <div class="is-flex is-flex-direction-column is-gap-3">
                  <div>100/100</div>
                  <div>
                    <progress class="progress is-warning" value="100" max="100"></progress>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="progress-container">
                <progress class="progress is-success" value="50" max="100"></progress>
                <span class="progress-text is-uppercase">Exp: 5/10</span>
              </div>
            </div>
          </div>
          <div>
            <div class="is-uppercase gtamerica level is-size-3">Nv.</div>
            <div class="is-size-1 has-text-weight-bold next-level">2</div>
          </div>
        </div>
      </div>
    </div>
    <footer class="card-footer is-flex is-justify-content-center is-gap-3 p-3 is-flex-wrap-wrap">
      <VDropdown
        placement="bottom"
        :triggers="['hover']"
        :autoHide="true"
        :delay="{ show: 100, hide: 100 }"
        :popperTriggers="['hover', 'touch']"
      >
        <template #default>
          <div class="is-relative">
            <img
              src="../assets/images/icons/treasure.png"
              alt="icon image"
              width="50"
              height="50"
            />
            <div class="info-badge">1</div>
          </div>
        </template>

        <template #popper>
          <div class="p-2">
            Você tem <b class="is-green">1 prêmio</b> disponível.<br />
            <router-link to="/" class="is-blue">Ir para o Passe de Batalha</router-link>
          </div>
        </template>
      </VDropdown>
      <VDropdown
        placement="bottom"
        :triggers="['hover']"
        :autoHide="true"
        :delay="{ show: 100, hide: 100 }"
        :popperTriggers="['hover', 'touch']"
      >
        <template #default>
          <div class="is-relative">
            <img
              src="../assets/images/icons/hourglass.png"
              alt="icon image"
              width="50"
              height="50"
            />
          </div>
        </template>

        <template #popper>
          <div class="p-2">
            <p class="mb-5">Rotinas do jogo</p>
            <p class="has-text-weight-bold">
              Recuperação de vida: <span class="span">{{ lifeFormattedCountdown }}</span>
            </p>
            <p class="is-size-7">Recupera 10% de vida</p>
            <p class="has-text-weight-bold mt-3">
              Recuperação de energia: <span class="span">{{ energyFormattedCountdown }}</span>
            </p>
            <p class="is-size-7">Recupera 10% de energia</p>
            <p class="has-text-weight-bold mt-3">
              Recuperação de stamina: <span class="span">{{ staminaFormattedCountdown }}</span>
            </p>
            <p class="is-size-7">Recupera 10% de stamina</p>
          </div>
        </template>
      </VDropdown>
      <div class="is-relative">
        <img src="../assets/images/icons/poster.jpg" alt="icon image" width="35" height="50" />
      </div>
      <div class="is-relative">
        <img src="../assets/images/icons/sea.png" alt="icon image" width="50" height="50" />
        <div class="info-badge">4</div>
      </div>
      <div class="is-relative">
        <img src="../assets/images/icons/message.png" alt="icon image" width="50" height="50" />
        <div class="info-badge">2</div>
      </div>
      <div class="is-relative">
        <img src="../assets/images/icons/news.png" alt="icon image" width="50" height="50" />
        <div class="info-badge">9+</div>
      </div>
      <div
        v-tooltip="{
          content: 'Sua moeda cristal.',
          placement: 'bottom',
          triggers: ['hover', 'click'],
          delay: { show: 100, hide: 100 },
        }"
      >
        <div class="is-flex is-justify-content-center is-align-items-center is-gap-2">
          <div class="is-relative">
            <img src="../assets/images/icons/credit.png" alt="icon image" width="50" height="50" />
          </div>
          <div class="credit is-size-4">{{ formatNumber(0) }}</div>
        </div>
      </div>
      <VTooltip placement="bottom" :delay="100" :triggers="['hover', 'click']">
        <template #default>
          <div class="is-flex is-justify-content-center is-align-items-center is-gap-2">
            <div class="is-relative">
              <img src="../assets/images/icons/coin.png" alt="icon image" width="50" height="50" />
            </div>
            <div class="coin is-size-4">{{ formatNumber(3000) }}</div>
          </div>
        </template>
        <template #popper>
          <div>Sua moeda berry.</div>
        </template>
      </VTooltip>
      <VDropdown
        placement="bottom"
        :triggers="['click']"
        :autoHide="true"
        :delay="{ show: 100, hide: 100 }"
        @hide="forceBlurPopper"
      >
        <template #default>
          <div class="is-relative is-clickable">
            <img src="../assets/images/icons/bag.png" alt="icon image" width="50" height="50" />
          </div>
        </template>

        <template #popper>
          <div class="p-3">
            <p>Itens de regeneração</p>
            <div class="is-flex mt-2">
              <VTooltip
                v-for="(item, index) in items"
                :key="index"
                placement="bottom"
                :delay="100"
                :triggers="['hover', 'click']"
                :popperTriggers="['click', 'touch']"
                @click.stop.prevent="useItem"
              >
                <template #default>
                  <div class="item-bg">
                    <img :src="item.image" alt="item image" />
                    <div class="item-quantity">x{{ item.quantity }}</div>
                  </div>
                </template>
                <template #popper>
                  <div class="is-blue has-text-weight-bold">{{ item.name }}</div>
                  <div class="is-size-7">{{ item.description }}</div>
                  <div class="mt-2 is-flex is-flex-direction-column is-gap-2">
                    <div
                      class="is-flex is-gap-2 is-align-items-center"
                      v-for="(desc, idx) in item.iconDescriptions"
                      :key="idx"
                    >
                      <img :src="desc.icon" alt="icon image" class="item-image" />
                      <span>{{ desc.description }}</span>
                    </div>
                  </div>
                </template>
              </VTooltip>
            </div>
          </div>
        </template>
      </VDropdown>
    </footer>
    <ScreenLockComponent :active="isLocked" />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useIntervalFn } from '@vueuse/core';
import { formatNumber, getIconUrl, getItemUrl } from '@/utils/utils';
import formatCountdown from '@/utils/countdown-utils';
import ScreenLockComponent from './ScreenLockComponent.vue';

interface ItemData {
  image: string;
  name: string;
  description: string;
  quantity: number;
  iconDescriptions: {
    icon: string;
    description: string;
  }[];
}

const items = ref<ItemData[]>([
  {
    image: getItemUrl('1.png'),
    name: 'Seafood',
    description: 'Comida de regeneração.',
    quantity: 5,
    iconDescriptions: [
      {
        icon: getIconUrl('heart.png'),
        description: 'Recupera 100 pontos de vida.',
      },
      {
        icon: getIconUrl('energy.png'),
        description: 'Recupera 100 pontos de energia.',
      },
      {
        icon: getIconUrl('stamina.png'),
        description: 'Recupera 100 pontos de stamina.',
      },
    ],
  },
  {
    image: getItemUrl('2.png'),
    name: 'Takoyaki',
    description: 'Comida de regeneração.',
    quantity: 1,
    iconDescriptions: [
      {
        icon: getIconUrl('heart.png'),
        description: 'Recupera 200 pontos de vida.',
      },
      {
        icon: getIconUrl('energy.png'),
        description: 'Recupera 200 pontos de energia.',
      },
      {
        icon: getIconUrl('stamina.png'),
        description: 'Recupera 200 pontos de stamina.',
      },
    ],
  },
]);

const isLocked = ref(false);

const lifeInitialSeconds = 1 * 1 * 3600;
const lifeSecondsLeft = ref(lifeInitialSeconds);

const energyInitialSeconds = 1 * 24 * 3600;
const energySecondsLeft = ref(energyInitialSeconds);

const staminaInitialSeconds = 75 * 24 * 3600;
const staminaSecondsLeft = ref(staminaInitialSeconds);

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { pause, resume } = useIntervalFn(() => {
  if (lifeSecondsLeft.value > 0) {
    lifeSecondsLeft.value--;
  } else {
    lifeSecondsLeft.value = lifeInitialSeconds;
  }

  if (energySecondsLeft.value > 0) {
    energySecondsLeft.value--;
  } else {
    energySecondsLeft.value = energyInitialSeconds;
  }

  if (staminaSecondsLeft.value > 0) {
    staminaSecondsLeft.value--;
  } else {
    staminaSecondsLeft.value = staminaInitialSeconds;
  }
}, 1000);

const lifeFormattedCountdown = computed(() => formatCountdown(lifeSecondsLeft.value));
const energyFormattedCountdown = computed(() => formatCountdown(energySecondsLeft.value));
const staminaFormattedCountdown = computed(() => formatCountdown(staminaSecondsLeft.value));

async function useItem() {
  isLocked.value = true;
  await new Promise((resolve) => setTimeout(resolve, 1500));
  isLocked.value = false;
}

function forceBlurPopper() {
  const focused = document.activeElement as HTMLElement | null;
  if (focused && focused.closest('.v-popper__popper')) {
    focused.blur();
  }
}
</script>

<style scoped>
.level {
  color: #637ea0;
}

.next-level {
  color: #082655;
}

.progress {
  width: 100%;
  height: 20px;
  margin-bottom: 0px !important;
  background-color: #1f1f1f !important;
}

.progress-container {
  position: relative;
  width: 100%;
}

.progress-text {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: bold;
  padding-left: 8px;
  font-size: 0.9rem;
  text-shadow: 1px 2px 1px rgb(0 0 0 / 80%);
}

.progress::-webkit-progress-bar {
  background-color: #1f1f1f;
}

.progress::-moz-progress-bar {
  background-color: #1f1f1f;
}

.credit {
  color: #e9e9e9;
}

.coin {
  color: #637ea0;
}

.card-footer {
  background: #07152c;
}

.info-badge {
  position: absolute;
  top: 0;
  right: -9px;
  width: 25px;
  height: 28px;
  background-color: #de1010;
  color: #fff;
  border-radius: 10px;
  border: solid 2px #fff;
  font-size: 1.1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
