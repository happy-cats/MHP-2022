import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import ListenerComponent from '@/components/ListenerComponent.vue';
import HomeComponent from '@/components/HomeComponent.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'site',
    component: HomeComponent
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
