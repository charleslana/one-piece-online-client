<template>
  <div class="mb-5">
    <nav class="level is-uppercase">
      <div class="level-left gtamerica last-news is-size-2 has-text-centered">Ultimas Noticias</div>
      <div class="level-right phagspa">
        <RouterLink to="/news" class="link has-text-centered">Ver todas as notícias</RouterLink>
      </div>
    </nav>
    <div class="columns">
      <div class="column" v-for="(news, index) in newsList" :key="index">
        <RouterLink :to="`/news/${news.id}`">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3 image-zoom-container">
                <img :src="news.image" :alt="news.title" class="zoom-image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <time :datetime="news.date">{{ formatDate(news.date) }}</time>
                <div class="news-title">{{ news.title }}</div>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { formatDate, getNewsImageUrl } from '@/utils/utils';
import { ref } from 'vue';

interface NewsItem {
  id: string;
  image: string;
  title: string;
  date: string;
}

const newsList = ref<NewsItem[]>([
  {
    id: '9c6f7b7a-1292-4cd0-bf9c-7f1f2e4eb43e',
    image: getNewsImageUrl('news-01.jpg'),
    title: 'Notícias número #01',
    date: '2025-06-27T14:23:00Z',
  },
  {
    id: '532f5aa9-7a4e-42b0-a326-27fa54d8a4de',
    image: getNewsImageUrl('news-02.jpg'),
    title: 'Notícias número #02',
    date: '2025-06-26T14:23:00Z',
  },
  {
    id: '0346d58e-66eb-4c2a-86db-2908ac20e174',
    image: getNewsImageUrl('news-03.jpg'),
    title: 'Notícias número #03',
    date: '2025-06-25T14:23:00Z',
  },
]);
</script>

<style scoped>
.image-zoom-container {
  overflow: hidden;
  margin: 0;
  border-radius: 4px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}

.zoom-image {
  transition: transform 0.4s ease;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.zoom-image:hover {
  transform: scale(1.1);
}

.card {
  grid-area: 1 / 1;
  height: 100%;
  box-shadow: inset 8rem 54rem 0rem 0rem #0c306a;
}

time {
  font-size: 1rem;
  color: #e9af64;
  font-weight: 700;
}

.news-title {
  color: #fff;
  font-size: 1.3rem;
  font-family: Phagspa !important;
  text-transform: uppercase;
  font-weight: 700;
}
</style>
