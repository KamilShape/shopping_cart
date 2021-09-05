<template>
<div class="background">
  <div class="orderSummary">
    <h1 class="orderSummary-header">Your order is:</h1>
    <div class="orderSummary-close" @click='closeOrder'><i class="fas fa-times"></i></div>
     <OrderSummaryItem v-for='item in cart'
    :key='item.name'
    :name='item.name'
    :price='item.price'
    />
   <div class="orderSummary-desc"> {{cost.toFixed(2)}} PLN</div>
    </div>
  </div>
</template>

<script>
import OrderSummaryItem from "@/components/OrderSummaryItem.vue";
export default {
  name: "OrderSummary",
  props:{
   
  },

  computed:{
    cart(){
      return this.$store.state.cart
    },
     cost(){
      return this.$store.getters.cost
    }
  },
   components:{
    OrderSummaryItem
  },
  isVisible(){
      return this.$store.state.isVisible
  },
  methods:{
  closeOrder(){
         this.$store.commit('changeVisibilityFalse') 
    }
  }
}
</script>


<style scoped>

.orderSummary{
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: yellow;
  padding: 20px;
  transform: translate(-50%, -50%);
  border-radius: 0px 20px;
  width: 400px;
  transition: 1s ease-in-out;  
}
.orderSummary-header{
  text-align: center;
  margin: 0 0 10px 0
}
.orderSummary-close{
  font-size: 25px;
  position: absolute;
  top: 5px;
  right: 10px;
}
.orderSummary-close:hover{
 cursor:pointer;
}
.orderSummary-desc{
  margin-top: 10px;
  font-size: 35px;
  text-align: center;
}
</style>
