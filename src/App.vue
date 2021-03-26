<template>
  <nav>
    <div class="navigation__logo">TShop</div>
    <div>Handlekruv({{ count }})</div>
  </nav>
  <div class="container">
    <div class="container__products slide-left">
      <h1>Produkter</h1>
      <ProductList />
    </div>
    <div class="container__cart">
      <ShoppingCart />
    </div>
  </div>
</template>

<script>

import ProductList from '../src/components/ProductList'
import ShoppingCart from '../src/components/ShoppingCart'
import {computed} from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'App',
  components: { ProductList, ShoppingCart},
  setup () {
    const store = useStore();
    const products = computed(() => store.getters['cart/cartProducts'])
    
    return {
      count: computed(() => store.state.cart.items.length),
      products
    }
  }

  

}
</script>

<style lang="less">
#app {
 font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #F3F5FA;
}
nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5%;
    background-color: rgb(66, 57, 62);
    color: white;

    .navigation__logo {
      font-weight: bold;
      font-size: 24px;
    }
    .navigation__user {
      font-weight: bold;
    }
  }
  .container{
    height: 100vh;
    background-color: white;
    display: flex;
    .container__products{
      width: 100%;
      height: 100%;
      padding-left: 5%;
      &.slide-left{
        width:80%;
        float: left;
      }
    }
    .container__cart{
      width: 20%;
      background: whitesmoke;
      height: 100%;
      float:right;
    }
  }
</style>
