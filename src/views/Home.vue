<template>
  <div class="cart">
    <ShopItem v-for='product in rtvProducts'
    :key="product.name"
    :name="product.name"
    :price='product.price'
    :picture='product.picture'
    />
      <ShopItem v-for='product in agdProducts'
    :key="product.name"
    :name="product.name"
    :price='product.price'
    :picture='product.picture'
    />
  </div>
</template>
<script>
import rtvProducts from '@/assets/rtvProducts.js'
import agdProducts from '@/assets/agdProducts.js'
import ShopItem from "@/components/ShopItem.vue";

export default {
  data(){
    return{
      rtvProducts,
      agdProducts
    }
  },
  name: "Cart",
    components: {
    ShopItem,
  },
};
</script>
<style scoped>
  .cart{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  </style>