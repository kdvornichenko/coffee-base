import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';

import Button from 'primevue/button';

import App from './App.vue'
import router from './router'
import Menubar from 'primevue/menubar';
import Menu from 'primevue/menu';

const app = createApp(App);

app.use(createPinia())
    .use(router)
    .use(PrimeVue, {
        unstyled: true
    });

app.component('Button', Button)
    .component('Menu', Menu)
    .component('Menubar ', Menubar);

app.mount('#app');
