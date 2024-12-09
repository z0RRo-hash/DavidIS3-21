<template>
  <main class="main-content">
    <section class="recipe-list">
      <!-- Рецепт 1 -->
      <article class="recipe-item">
        <img src="@/assets/img/recipebig2.png" alt="Тосты с редисом и арбузной редькой" class="recipe-image">
        <span class="recipe-label"></span>
        <h3>Тосты и брускетты с редисом и арбузной редькой</h3>
        <div class="recipe-actions">
          <button class="favorite-button" aria-label="Добавить в избранное">+</button>
          <button class="cart-button" aria-label="Добавить в корзину">🛒</button>
        </div>
      </article>

      <!-- Рецепт 2 -->
      <article class="recipe-item">
        <img src="@/assets/img/recipebig.png" alt="Пельмени с креветками" class="recipe-image">
        <span class="recipe-label"></span>
        <h3>Пельмени с креветками</h3>
        <div class="recipe-actions">
          <button class="favorite-button" aria-label="Добавить в избранное">+</button>
          <button class="cart-button" aria-label="Добавить в корзину">🛒</button>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Rescipe'
}
</script>

<style scoped>
/* Добавьте стили, если необходимо */
</style>
