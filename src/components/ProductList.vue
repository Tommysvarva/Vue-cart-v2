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
import {useShop} from '../API/shop'
import ProductItem from '../components/ProductItem'
export default {
  setup(){
      const {products} = useShop();
      return{
        products,
        ProductItem
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