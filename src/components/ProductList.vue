<template>
    <div class="product-list">  
        <ProductItem 
        v-for="product in products" 
        :name="product.name"
        :description="product.description" 
        :price="product.price"
        :inventory="product.inventory"
        :product="product"
        :key="product.id"/>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ProductItem from '../components/ProductItem'

export default {
  setup(){
      const store = useStore()
      const products = computed( () => store.state.products.all)
      store.dispatch('products/getAllProducts')
      return{
          products,
          ProductItem,
      }
  }
}
</script>

<style lang="less" scoped>
    .product-list{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap:8px;
        padding: 12px;
    }
</style>