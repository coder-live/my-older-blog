<template>
  <div class= "home-aside">
    <home-aside-item v-for= "(item,index) in asideItem" :aside-item="item" isMain= "true" 
    :key= "item.title" :index= "index"></home-aside-item>
    <!--asideTitle 中的内容也需要扩大化,进入for循环item,传给子组件.同listItem-->
    <home-aside-item v-for= "(item,index) in asideComment" :aside-item= "item" 
    :key= "item.title" :index= "index"></home-aside-item>
    
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
      asideItem: [
        {
          title: "热门",num: ["2020.01.27","25","22","17"],
          
        },
        {
          title: "最新-更新",num: ["2020.01.27","11","9","6"],
          
        },
        {
          title: "最新-想法",num: ["2020.01.27","33","25","19"],
          
        }
      ],
      asideComment: [
        {
          title: "最新评论",time: "一天前",
          comment: "我是评论1"
        },
        {
          title: "最近评论",time: "一周前",
          comment: "我是评论2"
        },
        {
          title: "旧评论",time: "一个月前",
          comment: "我是评论3"
        }
      ]
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