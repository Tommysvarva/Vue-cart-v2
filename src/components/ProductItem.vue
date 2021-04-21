<template>
  <article class="product-article">
      <h1> {{ name }}</h1>
      <p> {{ description }} </p>
      <div class="buy-menu">
          <div class="buy-menu__price"> {{ price }},- </div>
          <div class="buy-menu__buy-now">
          <button
           @click="addToCart(product)">
           Kjøp</button></div>
      </div>
  </article>
</template>

<script>

import {useShop} from '../API/shop'
export default {
    name: 'ProductItem',
    props: {
        name: String,
        description: String,
        price: Number,
        id: Number,
        product: Object
    },
    setup() {
        const {products, cart, addToCart} = useShop();
        return{
            products,
            cart,
            addToCart
        }
    }
}
</script>

<style lang="less" scoped>
.product-article{
   background-color:whitesmoke;
   padding: 12px; 
  .buy-menu{
      width: 100%;
      .buy-menu__price{
          float: left;
      }
      .buy-menu__buy-now{
          float: right;
          button{
              &:hover{
                  background-color:  rgb(140, 165, 51);
                  cursor: pointer; 
                        }
          }
      }
  }
}
</style>