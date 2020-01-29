<template>
  <div class= "home-list">
    <home-list-item v-for= "item in box"
    :detail-data="item">
      
    </home-list-item>
    
    
  </div>

</template>

<script>
import HomeListItem from "./HomeListItem"
export default {
  name: 'homelist',
  components: {
    HomeListItem
  },
  data() {
    return {
      box: [
        {
          listItem: "最新-笔记",imgSrc: require("@/assets/img/items/01.jpg"),
          listItemTit: "笔记标题",
          iconContent: [
            {
              iconSrc: require("@/assets/img/icon/time.svg"),
              num: "2020.01.29",
            },
            {
              iconSrc: require("@/assets/img/icon/like.svg"),
              num: "06",
            },
            {
              iconSrc: require("@/assets/img/icon/collecte.svg"),
              num: "05",
            },
            {
              iconSrc: require("@/assets/img/icon/comment.svg"),
              num: "02"
            },
          ]     
        },
        {
          listItem: "最新-随记",imgSrc: require("@/assets/img/items/02.jpg"),
          listItemTit: "随记标题",
          iconContent: [
            {
              iconSrc: require("@/assets/img/icon/time.svg"),
              num : "2020.01.29",
            },
            {
              iconSrc: require("@/assets/img/icon/like.svg"),
              num : "06",
            },
            {
              iconSrc: require("@/assets/img/icon/collecte.svg"),
              num : "05",
            },
            {
              iconSrc: require("@/assets/img/icon/comment.svg"),
              num : "02"
            },
          ]   
        },
        {
          listItem: "最新-项目",imgSrc: require("@/assets/img/items/03.jpg"),
          listItemTit: "项目标题",
          iconContent: [
            {
              iconSrc: require("@/assets/img/icon/time.svg"),
              num : "2020.01.29",
            },
            {
              iconSrc: require("@/assets/img/icon/like.svg"),
              num : "06",
            },
            {
              iconSrc: require("@/assets/img/icon/collecte.svg"),
              num : "05",
            },
            {
              iconSrc: require("@/assets/img/icon/comment.svg"),
              num : "02"
            },
          ]   
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