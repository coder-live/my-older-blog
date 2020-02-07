<template>
  <div class= "home-list">
    <list-item v-for= "(item,index) in box"
    :detail-data="item" :key= "item.listItem" 
    :index= "index">
      
    </list-item>
    
    
  </div>
 
</template>

<script>
import ListItem from "@/components/content/listitem/ListItem"
export default {
  name: 'homelist',
  components: {
    ListItem
  },
  data() {
    return {
      box: [
        {
          listItem: "最新-笔记",imgSrc: require("@/assets/img/items/01.jpg"),
          listItemTit: "笔记标题",
          iconNum: ["2020.01.29","06","05","03"],
          id: 10     
        },
        {
          listItem: "最新-随记",imgSrc: require("@/assets/img/items/02.jpg"),
          listItemTit: "随记标题",
          iconNum: ["2020.01.29","12","09","06"],
          id: 11  
        },
        {
          listItem: "最新-项目",imgSrc: require("@/assets/img/items/03.jpg"),
          listItemTit: "项目标题",
          iconNum: ["2020.01.29","55","25","13"],
          id: 12  
        },{
          listItem: "最新-xx",imgSrc: require("@/assets/img/items/01.jpg"),
          listItemTit: "xx标题",
          iconNum: ["2020.01.29","16","13","11"],
          id: 13     
        }
      ]
      
    }
  }
}
</script>

<style scoped>
  .home-list{
    
    width: 69vw;
    margin-top: 20px;
    height: 1300px;
    overflow: hidden;
  }
  
</style>