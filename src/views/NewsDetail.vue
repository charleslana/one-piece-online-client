<template>
  <main class="page-container">
    <HeaderComponent />
    <SectionLogoutComponent />
    <div class="page-content container mt-5 mb-8rem">
      <div class="level">
        <div class="level-left is-flex is-flex-grow-1">
          <div><font-awesome-icon :icon="['fa-regular', 'calendar-alt']" /></div>
          <p>{{ formatDate(newsData.datetime) }}</p>
        </div>
        <div class="level-right is-flex is-flex-grow-1">
          <div><font-awesome-icon :icon="['fa-regular', 'user']" /></div>
          <p>{{ newsData.author }}</p>
        </div>
      </div>
      <hr />
      <div class="title is-1 is-uppercase balto">{{ newsData.title }}</div>
      <div class="mt-5 has-text-black" v-html="newsData.description"></div>
      <div class="mt-5 is-uppercase has-text-black">Staff</div>
      <div class="title is-1 is-uppercase balto mt-5">Deixe seu comentário</div>
      <form @submit.prevent="handleSubmit">
        <div class="field">
          <div class="control">
            <textarea
              ref="messageInput"
              v-model.trim="message"
              class="textarea is-shadowless has-fixed-size"
              placeholder="Deixe seu comentário aqui"
              rows="10"
              required
              :disabled="isLoading"
            ></textarea>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button
              class="button is-link is-fullwidth is-medium"
              :class="{ 'is-loading': isLoading }"
              :disabled="!isFormValid || isLoading"
            >
              Comentar
            </button>
          </div>
        </div>
      </form>
      <div class="title is-1 is-uppercase balto mt-5">Comentários</div>
      <article class="message" v-for="(comment, index) in newsData.comments" :key="index">
        <div class="message-header has-background-light">
          <p class="has-text-black has-text-weight-normal">
            <span class="has-text-orange has-text-weight-bold">Comentário</span> - postado por
            <b>{{ comment.name }}</b> em {{ formatDateTime(comment.datetime) }}
          </p>
        </div>
        <div class="message-body has-text-black">{{ comment.message }}</div>
      </article>
      <div class="level">
        <div class="level-left">
          <RouterLink to="/news/1" class="button is-link is-medium">Anterior</RouterLink>
        </div>
        <div class="level-right">
          <RouterLink to="/news/2" class="button is-link is-medium">Próximo</RouterLink>
        </div>
      </div>
    </div>
    <FooterComponent />
  </main>
</template>

<script lang="ts" setup>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import SectionLogoutComponent from '@/components/SectionLogoutComponent.vue';
import { alertSuccess, formatDate, formatDateTime } from '@/utils/utils';
import { computed, ref, watch } from 'vue';
// import { useRoute } from 'vue-router';

interface Comment {
  name: string;
  datetime: string;
  message: string;
}

interface News {
  title: string;
  datetime: string;
  description: string;
  author: string;
  comments: Comment[];
}

// const route = useRoute();
// const newsId = Number(route.params.id);
const props = defineProps<{ id: string }>();
const newsId = ref(Number(props.id));

const message = ref('');
const isLoading = ref(false);

const messageInput = ref<HTMLInputElement | null>(null);

const newsData = ref<News>({
  title: 'Notícias número 01',
  datetime: '2025-06-30T03:00:00Z',
  description: `
    Boa noite jogadores,
    <br />
    <br />
    Nesta noite venho comunicar a adição de 3 Temas Ultimates e 5 Itens Ultimates no jogo!
    <br />
    <br />
    Novos Temas e itens Ultimate
    <br />
    <br />
    Contamos com vocês!
  `,
  author: 'Administrador',
  comments: [
    {
      name: 'luffy_palha',
      datetime: '2025-06-30T12:30:00Z',
      message: 'Comentando aqui para ter o que comentar',
    },
    {
      name: 'nami san',
      datetime: '2025-06-30T00:00:00Z',
      message: 'Parabéns pela atualização!',
    },
  ],
});

watch(
  () => props.id,
  (newId) => {
    newsId.value = Number(newId);
    message.value = '';
  }
);

const isFormValid = computed(() => {
  return message.value;
});

function handleSubmit() {
  isLoading.value = true;

  setTimeout(() => {
    isLoading.value = false;
    message.value = '';
    messageInput.value?.blur();
    alertSuccess('Comentário enviado com sucesso', `ID da notícia ${newsId.value}`);
  }, 2000);
}
</script>

<style lang="css" scoped>
.message {
  border: 1px solid #dee2e6;
}

.message-header {
  border-bottom: 1px solid #dee2e6;
}
</style>
