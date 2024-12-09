<template>
  <div class="content-container">
    

    <main class="main-content">
      <section class="cart-items">
        <article v-for="(item, index) in cartItems" :key="index" class="cart-item">
          <img :src="item.image" :alt="item.name" class="recipe-image">
          <h3>{{ item.name }}</h3>
          <div class="item-actions">
            <button @click="removeItem(index)" class="remove-item">Удалить</button>
          </div>
        </article>
      </section>

      <div class="cart-summary">
        <h3>Итого: <span>{{ totalPrice }} ₽</span></h3>
        <button class="checkout-btn" @click="proceedToCheckout">Перейти к оплате</button>
      </div>

      <!-- Форма для оформления заказа -->
      <form @submit.prevent="submitOrder" class="checkout-form">
        <h3>Оформить заказ</h3>
        
        <div class="form-group">
          <label for="name">Ваше имя:</label>
          <input type="text" v-model="orderData.name" id="name" required>
        </div>

        <div class="form-group">
          <label for="address">Адрес доставки:</label>
          <input type="text" v-model="orderData.address" id="address" required>
        </div>

        <div class="form-group">
          <label for="phone">Телефон:</label>
          <input type="tel" v-model="orderData.phone" id="phone" required>
        </div>

        <div class="form-group">
          <label for="payment-method">Метод оплаты:</label>
          <select v-model="orderData.paymentMethod" id="payment-method" required>
            <option value="card">Карта</option>
            <option value="cash">Наличные</option>
          </select>
        </div>

        <button type="submit" class="checkout-btn">Оформить заказ</button>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Basket',
  data() {
    return {
      // Массив товаров в корзине
      cartItems: [
        {
          name: "Тосты и брускетты с редисом и арбузной редькой",
          image: "@/assets/img/recipebig2.png",
          price: 1000,
        },
        {
          name: "Пельмени с креветками",
          image: "@/assets/img/recipebig.png",
          price: 1000,
        }
      ],
      orderData: {
        name: '',
        address: '',
        phone: '',
        paymentMethod: 'card',
      }
    };
  },
  computed: {
    // Рассчитываем общую сумму корзины
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    }
  },
  methods: {
    // Удаление товара из корзины
    removeItem(index) {
      this.cartItems.splice(index, 1);
    },
    // Переход к оплате (можно добавить логику для дальнейшего оформления)
    proceedToCheckout() {
      console.log('Переход к оплате');
    },
    // Отправка данных для оформления заказа
    submitOrder() {
      console.log('Данные для оформления заказа:', this.orderData);
      // Здесь можно добавить логику отправки данных на сервер
    }
  }
};
</script>

<style scoped>
/* Ваши стили для корзины */
</style>
