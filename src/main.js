import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles.css' // Импортируем глобальные стили

createApp(App)
  .use(router)
  .mount('#app')
