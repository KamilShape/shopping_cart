<template>
  <div class="shopItem">
    <span class="shopItem-picture" v-html="picture"></span>
    <div class="shopItem-desc shopItem-desc--name">{{name}}</div>
    <div class="shopItem-desc shopItem-desc--price">{{price}} PLN</div>
    <button class="shopItem-desc shopItem-desc--button" @click='addToCart'>Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "ShopItem",
  data(){

  },
  props:{
    name: String,
    price: Number,
    picture: String,
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
    addToCart(){
        this.cart.push({
          name:this.name,
          price: this.price
        })
        this.summary.push(this.price)
    }
  }
};
</script>


<style scoped>

.shopItem{
  position: relative;
  width: 23%;
  height: 200px;
  box-sizing: border-box;
  margin: 5px;
  border: 1px solid black;
  border-radius: 15px;
}
.shopItem-picture{
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -90%);
  font-size: 70px;
}
.shopItem-desc{
  position: absolute;
  /* transform: translateX(-50%); */
  text-align: center;

  width: 100%;
}
.shopItem-desc--name{
  bottom: 65px;
}
.shopItem-desc--price{
  bottom: 38px;
}
.shopItem-desc--button{
  bottom: 10px;
  width: 50%;
  transform: translateX(50%);
  font-family: 'Noto Sans JP', sans-serif;
  border-radius: 10px;
  background-color: rgb(255, 223, 211);
  border: none
}
.shopItem-desc--button:hover{
 cursor: pointer;
 background-color: rgb(253, 255, 235)
}
</style>
