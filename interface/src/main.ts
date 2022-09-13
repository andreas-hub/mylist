import Constants from '@/stores/Constants';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import './assets/main.css';

// Initialize Firebase
const fireApp = initializeApp(Constants.FIREBASE_CONFIG);
getAnalytics(fireApp);

// Initialize VUE
const app = createApp(App);
app.use(VueAxios, axios);
app.use(createPinia());
app.use(router);
app.mount('#app');
