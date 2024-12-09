<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/img/logo.png" alt="Шеф-повар" class="chef-icon">
      <span class="logo-text">Kurdyfood</span>
    </div>
    <div class="nav-links">
      <router-link to="/" exact-active-class="active">Главная</router-link>
      <router-link to="/about" exact-active-class="active">О нас</router-link>
      <router-link to="/rescipe" exact-active-class="active">Рецепты</router-link>
      <router-link to="/basket" class="cart-icon" exact-active-class="active">🛒</router-link>
    </div>
    <div class="search-bar">
      <input type="text" placeholder="Поиск блюда…">
      <button class="search-icon">🔍</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
/* Пример стилей для активной ссылки */
.nav-links .active {
  font-weight: bold;
  color: #ff6600; /* Цвет для активной ссылки */
}
</style>
