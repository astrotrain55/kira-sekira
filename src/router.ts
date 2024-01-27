import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/prices',
      name: 'prices',
      component: () => import('./views/PricesView.vue'),
    },
    {
      path: '/:id',
      name: 'project-view',
      component: () => import('./views/ProjectView.vue'),
    },
    {
      path: '/:queryParams(.*)',
      name: 'redirect',
      component: HomeView,
      props: true,
    },
  ],
});
