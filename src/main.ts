import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from "primevue/config";
import Aura from 'primevue/themes/aura';
import "primeicons/primeicons.css";
import "@/firebase/firebase";

import App from './App.vue';
import router from './router';
import 'animate.css';

const app = createApp(App);

app.use(PrimeVue, {
    ripple: true,
    // Default theme configuration
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: '[data-theme="dark"]',
            cssLayer: false
        }
    }
});

app.use(router);
app.use(createPinia());

app.mount('#app');
