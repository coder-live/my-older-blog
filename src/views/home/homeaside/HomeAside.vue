<template>
  <div class= "home-aside">
    <home-aside-item v-for= "item in asideItem" :asideTitle="item" 
    :key="item"></home-aside-item>
    
  </div>

</template>

<script>
import HomeAsideItem from "./HomeAsideItem";
export default {
  name: 'homeaside',
  components: {
    HomeAsideItem
  },
  data() {
    return {
      asideItem: ["热门","最新-更新","最新-介绍","最新-了解","最新-想法"]
    }
  }
}
</script>

<style scoped>
  .home-aside{
    position: absolute;
    right: 0;
    top: 0;
    width: 23vw;
    height: 1620px;
    overflow: hidden;
    margin: 30px;
    
  }
</style>