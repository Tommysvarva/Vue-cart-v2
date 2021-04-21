<template>
  <nav>
    <div class="navigation__logo">TShop</div>
    <div class="navigation__cart"> Handlekruv({{ count }})</div>
  </nav>
  <div class="container">
    <div class="container__products slide-left">
      <h1>Produkter</h1>
      <ProductList />
    </div>
    <div class="container__cart" >
      <ShoppingCart />
    </div>
  </div>
</template>

<script>

import ProductList from '../src/components/ProductList'
import ShoppingCart from '../src/components/ShoppingCart'
import {useShop} from '../src/API/shop'
export default {
  name: 'App',
  components: { ProductList, ShoppingCart},
  setup () {
    const {products,cart} = useShop()
    return {
      products,
      cart
    }
  }
}
</script>

<style lang="less">
#app {
 font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #20252c;
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
    .navigation__cart{
      &:hover{
        cursor: pointer;
        color: rgb(140, 165, 51);
      }
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
      height: 50%;
      margin-top: 24px;
      display: block;
    }
  }
</style>
