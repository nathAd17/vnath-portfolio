import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import AOS from "aos";
import "aos/dist/aos.css";
import {
    Analytics
} from '@vercel/analytics/vue';

const app = createApp(App);
app.mount("#app"); 

AOS.init();
