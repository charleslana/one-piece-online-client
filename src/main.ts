import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import pinia from './store';
import router from './router';

import 'bulma/css/bulma.css';
import 'rpg-awesome/css/rpg-awesome.min.css';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faUser);

const app = createApp(App);

app.use(pinia);

app.use(router);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
