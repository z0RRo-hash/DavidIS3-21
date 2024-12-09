import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Rescipe from '@/views/Rescipe.vue';
import Basket from '@/views/Basket.vue'; // Импортируем новый компонент корзины

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/rescipe', component: Rescipe },
  { path: '/basket', component: Basket }, // Добавляем маршрут корзины
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
