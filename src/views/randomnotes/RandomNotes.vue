<template>
  <div id= "rand-notes">
    <div class= "rand-notes-list">
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
import ListItem from "@/components/content/listitem/ListItem";
import HomeFooter from "@/views/home/homechildren/HomeFooter";
import HomeAside from "@/views/home/homeaside/HomeAside";

import {mixin} from "@/commonjs/Mixins.js"
export default {
  name: 'randomnotes',
  components: {
    HomeFooter,
    HomeAside,
    ListItem,
  },
  data() {
    return {
      randNoteData: [
        {
          listItem: "当前位置: 随记",
          listItemTit: "标题1",
          imgSrc: require("@/assets/img/items/02.jpg"),
          iconNum: ["2020.01.29","06","05","03"],
          id: 50     
        },
        {
          listItem: "当前位置: 随记",
          listItemTit: "标题2",
          imgSrc: require("@/assets/img/items/04.jpg"),
          iconNum: ["2020.01.29","06","05","03"],
          id: 51     
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
  #rand-notes{
    position: relative;
    height: 1750px;
    margin-top: 59px;
    padding: 30px;
    background-color: #b3b3b3;
  }
  .rand-notes-list{
    width: 69vw;
    overflow: hidden;
  }

</style>