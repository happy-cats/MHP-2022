import {createApp} from 'vue';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import {key, store} from './store/datastore';

import SplashScreenComponent from '@/components/SplashScreenComponent.vue';
import LoginComponent from '@/components/LoginComponent.vue';
import MainComponent from '@/components/MainComponent.vue';
import HomeComponent from '@/components/HomeComponent.vue';
import AddScenarioDialog from '@/components/dialog/AddScenarioDialog.vue';
import AddItemDialog from '@/components/dialog/AddItemDialog.vue';
import AssignScenarioItemDialog from '@/components/dialog/AssignScenarioItemDialog.vue';
import router from './router';
import HeaderComponent from "@/components/structure/HeaderComponent.vue";
import FooterComponent from "@/components/structure/FooterComponent.vue";
import DashboardComponent from "@/components/DashboardComponent.vue";

createApp(App)
    .component('splash-screen-component', SplashScreenComponent)
    .component('header-component', HeaderComponent)
    .component('footer-component', FooterComponent)
    .component('dashboard-component', DashboardComponent)
    .component('login-component', LoginComponent)
    .component('main-component', MainComponent)
    .component('home-component', HomeComponent)
    .component('add-scenario-dialog', AddScenarioDialog)
    .component('add-item-dialog', AddItemDialog)
    .component('assign-scenario-item-dialog', AssignScenarioItemDialog)
    .use(router)
    .use(vuetify)
    .use(store, key)
    .mount('#app');
