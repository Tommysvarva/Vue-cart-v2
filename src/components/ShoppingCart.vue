<template>
	<div class="shopping-cart">
		<h2>Handlekurv</h2>
    <p>{{cart}}</p>
		<ul>
			<li v-for="product in cart" :key="product.id">
				<div class="shopping-cart__header">
					<p class="shopping-cart__header__product-name">{{ product.name }}</p>
					<p class="shopping-cart__header__product-price">{{ product.price }} kr</p>
				</div>
				<div class="shopping-cart__header__product-quantity">
					<p>Antall: {{ product.quantity }}</p>
				</div>
			</li>
		</ul>
    <div class="shopping-cart__total">
      <p>Total sum</p>
    <p class="shopping-cart__total-sum">{{totalPrice}} kr</p>

    </div>
    <div class="shopping-cart__checkout">
      <button>Til kassen</button>
    </div>
	</div>
</template>

<script>
import {useShop} from '../API/shop'
export default {
	name: "ShoppingCart",
	setup() {

     const {cart} = useShop(); 

		return {
      cart
		}
	}
}
</script>

<style lang="less" scoped>
.shopping-cart {
	background: whitesmoke;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 12px;

  h2{
    color: rgb(31, 30, 30);
  }
	ul {
		list-style: none;
		padding: 0;
    margin-bottom: 0;
		li {
      margin-bottom: 12px;
      border-bottom: 1px solid rgb(214, 214, 214);
			.shopping-cart__header {
				display: flex;
				width: 100%;
				.shopping-cart__header__product-name {
					margin: 0;
					padding: 0;
					width: 50%;
          color: #020202;
				}
				.shopping-cart__header__product-price {
					margin: 0;
					padding: 0;
					width: 50%;
					text-align: end;
				}
			}
      .shopping-cart__header__product-quantity {
					font-size:12px;
          p{
            padding: 0;
            margin:6px 0 6px 0 ;
          }
				}
		}
	}
  .shopping-cart__total {
    display: flex;
    margin-bottom: 24px;
    p{
      margin:0;
      padding: 0;
      width: 50%;
      font-size: 16px;
      font-weight:550;
    }
    .shopping-cart__total-sum{
      text-align: end;
      font-size: 18px;
    }
  }
  .shopping-cart__checkout{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    
    button{
      width: 50%;
      padding: 12px 6px;
      background-color: rgb(140, 165, 51);
      border: none;
      border-radius: 3px;
      font-size: 18px;
      color: rgb(32, 32, 32);
      font-weight: bold;
      &:hover{
        background-color:rgb(187, 216, 83)
      }
    }
  }
}
</style>
