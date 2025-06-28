import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import NotFound from '@/views/NotFound.vue';
import NewsList from '@/views/NewsList.vue';
import NewsDetail from '@/views/NewsDetail.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  {
    path: '/news',
    name: 'NewsList',
    component: NewsList,
  },
  {
    path: '/news/:id',
    name: 'NewsDetail',
    component: NewsDetail,
    props: true,
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, _savedPosition) {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    return { top: 0 };
  },
});

export default router;
