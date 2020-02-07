<template>
  <div id= "projects">
    <div class= "project-list">
      <list-item v-for= "(item,index) in randNoteData" 
      :key= "item.title" :index= "index" 
      :detail-data="item" >
      </list-item>
    </div>
    <home-aside></home-aside>
    <home-footer></home-footer>
    <back-top v-show= "isShow" @click.native= "topClick"></back-top>
  </div>

</template>

<script>
import ListItem from "@/components/content/listitem/ListItem"
import HomeFooter from "@/views/home/homechildren/HomeFooter"
import HomeAside from "@/views/home/homeaside/HomeAside"

import {mixin} from "@/commonjs/Mixins.js"
export default {
  name: 'projects',
  components: {
    HomeFooter,
    HomeAside,
    ListItem,
  },
  data() {
    return {
      randNoteData: [
        {
          listItem: "当前位置: 项目",
          listItemTit: "标题1",
          imgSrc: require("@/assets/img/items/03.jpg"),
          iconNum: ["2020.01.29","06","05","03"],
          id: 40     
        },
        {
          listItem: "当前位置: 项目",
          listItemTit: "标题2",
          imgSrc: require("@/assets/img/items/02.jpg"),
          iconNum: ["2020.01.29","06","05","03"],
          id: 41     
        }     
      ],
    }
  },
  mixins: [mixin],
  methods: {
    scroll( e ) {
      // let Delta;
      // let lessMaxHeight = (document.documentElement.scrollTop + document.documentElement.clientHeight)
      // <  document.documentElement.scrollHeight;
      // e = e || window.event;
      // Delta = e.wheelDelta ? e.wheelDelta/180 : -e.detail/3
      // if(lessMaxHeight) {
      //   if(Delta >0 ) {
      //     this.dIndex === 0 ? 0 : this.dIndex--
      //   }else{
      //     this.dIndex ++
      //   }
      // }
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      //console.log(scrollTop)
      this.isShow = scrollTop > 600? true : false;
    },
    topClick() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      this.isShow = false
    }
  },
}
</script>

<style scoped>
  #projects{
    position: relative;
    height: 1750px;
    margin-top: 59px;
    padding: 30px;
    background-color: #b3b3b3;
  }
  .project-list{
    width: 69vw;
    overflow: hidden;
  }
</style>