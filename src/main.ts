import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import pinia from './store';
import router from './router';

import 'bulma/css/bulma.css';
import 'rpg-awesome/css/rpg-awesome.min.css';
import 'bulma-modal-fx/dist/css/modal-fx.min.css';
import 'animate.css';
import 'sweetalert2/src/sweetalert2.scss';

import {
  faUser,
  faSkullCrossbones,
  faExclamationCircle,
  faBullhorn,
  faKey,
} from '@fortawesome/free-solid-svg-icons';

import { faFileAlt } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faUser, faSkullCrossbones, faExclamationCircle, faFileAlt, faBullhorn, faKey);

const app = createApp(App);

app.use(pinia);

app.use(router);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
