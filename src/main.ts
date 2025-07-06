import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import pinia from './store';
import router from './router';
import { Dropdown, Tooltip, vTooltip } from 'floating-vue';

import 'bulma/css/bulma.css';
import 'rpg-awesome/css/rpg-awesome.min.css';
import 'bulma-modal-fx/dist/css/modal-fx.min.css';
import 'animate.css';
import 'sweetalert2/src/sweetalert2.scss';
import 'floating-vue/dist/style.css';
import 'vue-search-select/dist/VueSearchSelect.css';

import {
  faUser,
  faSkullCrossbones,
  faExclamationCircle,
  faBullhorn,
  faKey,
  faTrophy,
  faMedal,
  faAward,
  faAngleDown,
  faChevronRight,
  faAngleLeft,
  faIdBadge,
} from '@fortawesome/free-solid-svg-icons';

import {
  faFileAlt,
  faCalendarAlt,
  faUser as faUserRegular,
} from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(
  faUser,
  faSkullCrossbones,
  faExclamationCircle,
  faFileAlt,
  faBullhorn,
  faKey,
  faTrophy,
  faMedal,
  faAward,
  faCalendarAlt,
  faUserRegular,
  faAngleDown,
  faChevronRight,
  faAngleLeft,
  faIdBadge
);

const app = createApp(App);

app.use(pinia);

app.use(router);

app.component('font-awesome-icon', FontAwesomeIcon);

app.directive('tooltip', vTooltip);
app.component('VTooltip', Tooltip);
app.component('VDropdown', Dropdown);

app.mount('#app');
