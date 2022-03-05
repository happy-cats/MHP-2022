import { createApp } from 'vue';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import { store, key } from './store/datastore';

import HeaderComponent from '@/components/HeaderComponent.vue';
import MainComponent from '@/components/MainComponent.vue';
import ScenariosComponent from '@/components/ScenariosComponent.vue';
import ItemsComponent from '@/components/ItemsComponent.vue';
import ItemComponent from '@/components/ItemComponent.vue';
import HomeComponent from '@/components/HomeComponent.vue';
import AddScenarioDialog from '@/components/dialog/AddScenarioDialog.vue';
import AddItemDialog from '@/components/dialog/AddItemDialog.vue';
import AssignScenarioItemDialog from '@/components/dialog/AssignScenarioItemDialog.vue';
import router from './router';

createApp(App)
    .component('header-component', HeaderComponent)
    .component('main-component', MainComponent)
    .component('scenarios-component', ScenariosComponent)
    .component('items-component', ItemsComponent)
    .component('item-component', ItemComponent)
    .component('home-component', HomeComponent)
    .component('add-scenario-dialog', AddScenarioDialog)
    .component('add-item-dialog', AddItemDialog)
    .component('assign-scenario-item-dialog', AssignScenarioItemDialog)
    .use(router)
    .use(vuetify)
    .use(store, key)
    .mount('#app');
