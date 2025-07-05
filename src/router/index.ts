import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import NotFound from '@/views/NotFound.vue';
import News from '@/views/News.vue';
import NewsDetail from '@/views/NewsDetail.vue';
import TOS from '@/views/TOS.vue';
import PrivacyPolicy from '@/views/PrivacyPolicy.vue';
import Rules from '@/views/Rules.vue';
import Manual from '@/views/Manual.vue';
import Disclosure from '@/views/Disclosure.vue';
import Contact from '@/views/Contact.vue';
import LegalNotice from '@/views/LegalNotice.vue';
import RecoveryPassword from '@/views/RecoveryPassword.vue';
import HallOfFame from '@/views/HallOfFame.vue';
import HallOfFameFaction from '@/views/HallOfFameFaction.vue';
import HallOfFameCrew from '@/views/HallOfFameCrew.vue';
import SelectCharacter from '@/views/SelectCharacter.vue';
import CreateCharacter from '@/views/CreateCharacter.vue';
import CharacterStatus from '@/views/CharacterStatus.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  {
    path: '/news',
    name: 'news',
    component: News,
  },
  {
    path: '/news/:id',
    name: 'news-detail',
    component: NewsDetail,
    props: true,
  },
  {
    path: '/tos',
    name: 'tos',
    component: TOS,
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: PrivacyPolicy,
  },
  {
    path: '/rules',
    name: 'rules',
    component: Rules,
  },
  {
    path: '/manual',
    name: 'manual',
    component: Manual,
  },
  {
    path: '/disclosure',
    name: 'disclosure',
    component: Disclosure,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/legal-notice',
    name: 'legal-notice',
    component: LegalNotice,
  },
  {
    path: '/recovery-password',
    name: 'recovery-password',
    component: RecoveryPassword,
  },
  {
    path: '/hall-of-fame',
    name: 'hall-of-fame',
    component: HallOfFame,
  },
  {
    path: '/hall-of-fame-faction',
    name: 'hall-of-fame-faction',
    component: HallOfFameFaction,
  },
  {
    path: '/hall-of-fame-crew',
    name: 'hall-of-fame-crew',
    component: HallOfFameCrew,
  },
  {
    path: '/select-character',
    name: 'select-character',
    component: SelectCharacter,
  },
  {
    path: '/create-character',
    name: 'create-character',
    component: CreateCharacter,
  },
  {
    path: '/character-status',
    name: 'character-status',
    component: CharacterStatus,
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
