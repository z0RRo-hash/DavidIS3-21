<template>
  <main class="main-content">
    <HeroSection />
    <div class="meal-blocks" id="mealSlider">
      <div class="meal" v-for="(meal, index) in meals" :key="index" :class="{ active: index === activeIndex }">
        <img :src="meal.img" :alt="meal.alt" />
        <p>{{ meal.name }}</p>
      </div>
    </div>
    <div class="slider-controls">
      <button @click="prevMeal">Prev</button>
      <button @click="nextMeal">Next</button>
    </div>
  </main>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';

export default {
  name: 'Home',
  components: {
    HeroSection
  },
  data() {
    return {
      meals: [
        { img: '@/assets/img/recipe1.png', alt: 'Завтрак', name: 'Завтрак' },
        { img: '@/assets/img/recipe2.png', alt: 'Обед', name: 'Обед' },
        { img: '@/assets/img/recipe3.png', alt: 'Ужин', name: 'Ужин' }
      ],
      activeIndex: 0
    };
  },
  methods: {
    nextMeal() {
      this.activeIndex = (this.activeIndex + 1) % this.meals.length;
    },
    prevMeal() {
      this.activeIndex = (this.activeIndex - 1 + this.meals.length) % this.meals.length;
    }
  }
}
</script>

<style scoped>
.meal-blocks {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  overflow: hidden;
  position: relative;
}

.meal {
  text-align: center;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  width: 100%;
}

.meal.active {
  opacity: 1;
}

.meal img {
  max-width: 100%;
  height: auto;
}

.meal p {
  margin-top: 10px;
  font-size: 1.2rem;
}

.slider-controls {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.slider-controls button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin: 0 10px;
}

.slider-controls button:hover {
  background-color: #0056b3;
}
</style>
