<template>
  <div class="orderSummaryItem">
   <div class='orderSummaryItem-desc orderSummaryItem-desc--name'>{{name}}</div> |
   <div class='orderSummaryItem-desc orderSummaryItem-desc--price'>{{price}} PLN</div> 
   
  </div>
</template>

<script>

export default {
  name: "OrderSummaryItem",
  props:{
    name: String,
    price: Number 
  },
};

</script>


<style>
 .orderSummaryItem{
   display: flex;

 }
 .orderSummaryItem-desc{
   width: 50%;
   text-align: center;
 }
</style>
