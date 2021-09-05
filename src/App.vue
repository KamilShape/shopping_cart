<template>

  <div class="nav">
    <router-link class='nav-element' to="/">Home</router-link> |
    <router-link class='nav-element' to="/cart">Cart ({{items}})</router-link>
  </div>
  <transition name='appear'>
    <router-view />
  </transition>
 
</template>
<script>
export default {
  computed:{
    items(){
      return this.$store.getters.items
    },  
    isVisible(){
         return this.$store.state.isVisible
    } 
  }
}
</script>
<style>
body{
  font-family: 'Noto Sans JP', sans-serif;
  min-width: 960px;
}
.nav{

  text-align: center;
  padding: 10px;
}
.nav-element{
  text-decoration: none;
  color: black
}
.visible{
  display: none;
}
</style>
