<template>
  <div class="cart">
     <div class="cartItem">
   <div class='cartItem-desc cartItem-desc--header'>Name</div>
   <div class='cartItem-desc cartItem-desc--header'>Price</div>
  </div>
        <CartItem v-for='item in cart'
        :key='item.name'
        :name='item.name'
        :price='item.price'
        />   
   <div class='cartItem-desc--summary'>Cart summary: {{cost.toFixed(2)}} PLN</div>
    <div><button class='cartItem-desc cartItem-desc--button' @click='showOrder' >ORDER</button></div>
    <transition name='bounce'>
        <OrderSummary  v-if='isVisible'/>
    </transition>
  </div>
</template>
<script>
import CartItem from "@/components/CartItem.vue";
import OrderSummary from "@/components/OrderSummary.vue";

export default {
   name: "Cart",
  components:{
    CartItem,
    OrderSummary
  },
  computed:{
    cart(){
      return this.$store.state.cart
    },
    cost(){
      return this.$store.getters.cost
    },
    isVisible(){
      return this.$store.state.isVisible
    }
  },
  methods:{
    showOrder(){
      this.$store.commit('changeVisibilityTrue') 
    }
  }
  }
</script>

<style scoped>
.cartItem-desc--header{
  font-weight: 700;
  background-color: rgb(254, 200, 216);
  width: 50%
}
 .cartItem-desc--summary{
   font-size: 22px;
   text-align: center;
   margin: 10px auto;
 }
 .cartItem-desc--button{
   display: block;
   margin: 10px auto;
   width: 10%;
   background-color: rgb(254, 200, 216);
   border-radius: 10px 0
 }
 .cartItem-desc--button:hover{
   background-color: rgb(255, 223, 211);
   border-radius: 0 10px
 }
 .visible{
   display: none;
 }

 
</style>