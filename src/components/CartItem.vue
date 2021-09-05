<template>
  <div class="cartItem">
   <div class='cartItem-desc cartItem-desc--name'>{{name}}</div>
   <div class='cartItem-desc cartItem-desc--price'>{{price}}  
  <button @click='removeItem' class='cartItem-desc cartItem-desc--button'><i class="far fa-times-circle"></i></button></div>
  </div>
</template>

<script>

export default {
  name: "CartItem",
  props:{
    name: String,
    price: Number
  },
  computed:{
    cart(){
      return this.$store.state.cart
    },
    summary(){
      return this.$store.state.summary
    }
    
  },
  methods:{
    removeItem(){
      let itemIndex = this.cart.findIndex(item => item.name == this.name)
      this.cart.splice(itemIndex,1)
      let amountIndex = this.summary.findIndex(amount => amount == this.price)
      this.summary.splice(amountIndex,1)
      
    }
  }
};
</script>


<style>
  .cartItem {
    display: flex;
    justify-content: space-evenly;
    background-color: rgb(123, 211, 246);
    width: 70%;
    margin: 0 auto;
    text-align: center;
  }
   .cartItem:nth-of-type(odd) {
      background-color: rgb(251, 214, 215)
  }
  .cartItem-desc {
    font-size: 20px;
    width: 30%;
    text-align: center;
    padding: 3px;
  }
   .cartItem-desc--button {
    font-size: 20px;
    width: 15%;
    text-align: center;
    background-color: transparent;
    border: none;
   }
   .cartItem-desc--button:hover {
   cursor: pointer;
 }
</style>
