<template>
  <div id= "home">
    <home-swiper></home-swiper>
    <home-list></home-list>
    <home-aside></home-aside>
    <home-footer></home-footer>
  </div>
  
</template>

<script>
import HomeSwiper from "./homechildren/HomeSwiper"
import HomeFooter from "./homechildren/HomeFooter"
import HomeList from "./homelist/HomeList"
import HomeAside from "./homeaside/HomeAside"

export default {
  name: 'home',
  components: {
    HomeSwiper,
    HomeFooter,
    HomeAside,
    HomeList
  },

  created() {
    console.log("home")
  },
}
</script>

<style scoped>
  #home{
    position: relative;
    height: 1750px;
    margin-top: 59px;
    padding: 30px;
    background-color: #b3b3b3;
  }
</style>