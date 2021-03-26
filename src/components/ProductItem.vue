<template>
  <article class="product-article">
      <h1> {{ name }}</h1>
      <p> {{ description }} </p>
      <div class="buy-menu">
          <div class="buy-menu__price"> {{ price }},- </div>
          <div class="buy-menu__buy-now">
          <button
           @click="addProductToCart(product)">
           Kjøp</button></div>
      </div>
  </article>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

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
        const store = useStore()
        const products = computed(() => store.state.products.all)
        const addProductToCart = (product) => store.dispatch('cart/addProductToCart', product)

        store.dispatch('products/getAllProducts')
        return{
            products,
            addProductToCart
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
      }
  }
}
</style>