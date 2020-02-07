<template>
  <div id="app">
    <div id="tb">
      <div id="top"></div>
      <tab-bar :tbi= "tbi" :path= "arr"></tab-bar>
    </div>
    <keep-alive><router-view :key= "$route.fullPath"/></keep-alive>
  </div>
</template>
<script>
import TabBar from "./components/common/tabbar/TabBar"
  export default {
    name: 'App',
    components: {
      TabBar,
    },
    data() {
      return{
        tbi: ["首页","笔记","随记","简介","小小项目"],
        arr: ["/home","/notes","/randomnotes","/introduce","/projects"]
      }
    },
    watch: {
      "$route": function( to,from ){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    }
  }


</script>
<style>
  @import "assets/css/base.css";
  #tb{
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 99;
  }
  #top{
    height: 3px;
    background-image: linear-gradient(to right, green, blue,red,#ccff66);
  }
</style>
