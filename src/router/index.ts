import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import Home from '@/views/Home.vue';
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
import {
  isAuthenticated,
  removeAccessToken,
  removeCharacterCompleted,
} from '@/utils/local-storage-utils';

const BlankComponent = {
  template: '<div></div>',
};

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: getTitle('Início') },
  },
  {
    path: '/news',
    name: 'news',
    component: News,
    meta: { title: getTitle('Notícias') },
  },
  {
    path: '/news/:id',
    name: 'news-detail',
    component: NewsDetail,
    meta: { title: getTitle('Detalhas da notícia') },
    props: true,
  },
  {
    path: '/tos',
    name: 'tos',
    component: TOS,
    meta: { title: getTitle('Termos de serviço') },
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: PrivacyPolicy,
    meta: { title: getTitle('Política de privacidade') },
  },
  {
    path: '/rules',
    name: 'rules',
    component: Rules,
    meta: { title: getTitle('Regras') },
  },
  {
    path: '/manual',
    name: 'manual',
    component: Manual,
    meta: { title: getTitle('Manual') },
  },
  {
    path: '/disclosure',
    name: 'disclosure',
    component: Disclosure,
    meta: { title: getTitle('Divulgue-nos') },
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: { title: getTitle('Contato') },
  },
  {
    path: '/legal-notice',
    name: 'legal-notice',
    component: LegalNotice,
    meta: { title: getTitle('Aviso legal') },
  },
  {
    path: '/recovery-password',
    name: 'recovery-password',
    component: RecoveryPassword,
    meta: { title: getTitle('Recuperar senha') },
  },
  {
    path: '/hall-of-fame',
    name: 'hall-of-fame',
    component: HallOfFame,
    meta: { title: getTitle('Hall da Fama') },
  },
  {
    path: '/hall-of-fame-faction',
    name: 'hall-of-fame-faction',
    component: HallOfFameFaction,
    meta: { title: getTitle('Hall da Fama Facção') },
  },
  {
    path: '/hall-of-fame-crew',
    name: 'hall-of-fame-crew',
    component: HallOfFameCrew,
    meta: { title: getTitle('Hall da Fama Tripulação') },
  },
  {
    path: '/select-character',
    name: 'select-character',
    component: SelectCharacter,
    meta: { title: getTitle('Selecionar personagem'), requiresAuth: true },
    beforeEnter: (to, _from, next) => {
      if (to.query.access === 'true') {
        next();
      } else {
        next({ name: 'home' });
      }
    },
  },
  {
    path: '/create-character',
    name: 'create-character',
    component: CreateCharacter,
    meta: { title: getTitle('Criar personagem'), requiresAuth: true },
    beforeEnter: (to, _from, next) => {
      if (to.query.access === 'true') {
        next();
      } else {
        next({ name: 'home' });
      }
    },
  },
  {
    path: '/character-status',
    name: 'character-status',
    component: CharacterStatus,
    meta: { title: getTitle('Status do personagem'), requiresAuth: true },
  },
  {
    path: '/logout',
    name: 'logout',
    component: BlankComponent,
    beforeEnter: (_to, _from, next) => {
      removeCharacterCompleted();
      removeAccessToken();
      next({ name: 'home' });
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue'),
    meta: { title: getTitle('Nada encontrado') },
  },
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

interface RouteMeta {
  title?: string;
  requiresAuth?: boolean;
}

router.beforeEach((to, _from, next) => {
  const meta = to.meta as RouteMeta;
  if (meta && meta.title) {
    document.title = meta.title;
  } else {
    document.title = getTitle();
  }
  const requiresAuth = meta.requiresAuth;
  const publicPages = ['home', 'recovery-password'];
  const isPublicPage = publicPages.includes(to.name as string);
  if (!isAuthenticated() && requiresAuth) {
    next({ name: 'home' });
  } else if (isAuthenticated() && isPublicPage) {
    next({ name: 'select-character', query: { access: 'true' } });
  } else {
    next();
  }
});

function getTitle(title?: string): string {
  return `One Piece Online - ${title}`;
}
