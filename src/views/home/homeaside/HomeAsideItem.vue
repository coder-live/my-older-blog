<template>
  <div class= "aside-item">
    <head-line><span>{{asideItem.title}}</span></head-line>
    <div class="main" v-if= "isMain">
      <div class="content">
        <div class="aside-title" :class= "{active: currentIndex === index}" 
        @mouseenter= "tilteHover(index)" 
        @mouseleave= "tilteLeave">
          我是标题
        </div>
        <div class="aside-text">
          文字内容几个月没有发过文章了，最近确实挺忙！！这几个月一直在搞公司的一个小程序项目，所以一直没抽出时间，后面我会把遇到的问题及踩到的坑也会提出来，今天咱们不说踩过的坑，说一个比较常见及常用的功能，就是内容的展开和收起。可能大家就开始想了，这么简单一功能还用看别人教吗？咱们先废话不多说，先来看看这个是怎样的一个功能～针对这个功能，产品的需求如下由于我们项目是教育类产品所以这里这个功能会用在发动态这里，就像微信朋友圈那样，我们叫班级圈。用户发班级圈时，可以发布文字内容、图片、视频，文字可以输入500个字。这样的话，如果列表一次展示全部文字，如果用户真有500个文字就基本一条动态占用了整屏高度，对于用户体验来说，用户一眼看到的东西太少了，所以产品就提出了需要折叠文字需求，并说明文字需要满6行的时候折叠，并显示全文按钮，当用户点击全文按钮时要展开所有内容，当点击收起按钮又变回折叠状态。说完需求，现在来说说问题首先，开发过小程序的朋友都知道，小程序内部是无法操作dom的，也就是说根本没有dom这个东西。
        </div>
        <icon :icon-num= "asideItem.num" ></icon>
      </div>
    </div>

    <div class="comment" v-else>
      <div class="content">
        <img src="~assets/img/items/04.jpg" alt="">
        <span class= "name">我是谁</span>
        <span class= "time">{{asideItem.time}}</span>
        <div class= "text">{{asideItem.comment}}</div>
        <div class="origin">来源于xx文章</div>
      </div>
    </div>
    
  </div>

</template>

<script>
import HeadLine from "@/components/content/headline/HeadLine";
import Icon from "@/components/content/icon/Icon";

export default {
  name: 'homeasideitem',
  components: {
    HeadLine,
    Icon
  },
  data() {
    return {
      currentIndex: ""
    }
  },
  props: {
    asideItem: {
      type: null,
      default() {
        return "我是导航线"
      }
    },
    isMain: {
      type: null,
      default() {
        return false
      }
    },
    index: Number
  },
  created() {

  },
  methods: {
    tilteHover(index) {
      this.currentIndex = index;
      //console.log(1)
    },
    tilteLeave() {
      this.currentIndex = ""
    }
  }
}
</script>

<style scoped>
  .active{
    color: skyblue;
  }
  .aside-item{
    width: 100%;
    height: 200px;
    background-color: #fff;
    margin-bottom:20px;
    border-radius: 5px;
  }
  .main,.comment{
    padding: 0 15px;
    overflow: hidden;
  }
  .main .aside-title{
    text-align: center;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .main .aside-text{
    margin-bottom: 10px;
    font-size: 13px;
    height: 60px;
    line-height: 20px;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .comment .content{
    padding: 15px 0;
    overflow: hidden;
  }
  .comment .content img{
    width: 50px;
    height: 50px;
    vertical-align: top;
  }
  .comment .content .name{
    display: inline-block;
    width: 80px;
    height: 20px;
    margin-left: 15px;
    overflow: hidden;
    color: skyblue;
    cursor: pointer;
  }
  .comment .content .time{
    float: right;
    font-size: 12px;
  }
  .comment .content .text{
    position: relative;
    top: -15px;
    margin-left: 65px;
    font-size: 12px;
  }
  .comment .content .origin{
    margin: 10px 5px;
    color: skyblue;
    cursor: pointer;
  }
</style>