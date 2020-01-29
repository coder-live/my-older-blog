<template>
  <div class= "list-item">
    <head-line><span>{{detailData.listItem}}</span></head-line>
    <div class="box">
      <img :src="detailData.imgSrc" alt="">
      <div class="text">
        <div class="title">
          {{detailData.listItemTit}}
        </div>
        <div class="tet">文字内容几个月没有发过文章了，最近确实挺忙！！这几个月一直在搞公司的一个小程序项目，所以一直没抽出时间，后面我会把遇到的问题及踩到的坑也会提出来，今天咱们不说踩过的坑，说一个比较常见及常用的功能，就是内容的展开和收起。可能大家就开始想了，这么简单一功能还用看别人教吗？咱们先废话不多说，先来看看这个是怎样的一个功能～针对这个功能，产品的需求如下由于我们项目是教育类产品所以这里这个功能会用在发动态这里，就像微信朋友圈那样，我们叫班级圈。用户发班级圈时，可以发布文字内容、图片、视频，文字可以输入500个字。这样的话，如果列表一次展示全部文字，如果用户真有500个文字就基本一条动态占用了整屏高度，对于用户体验来说，用户一眼看到的东西太少了，所以产品就提出了需要折叠文字需求，并说明文字需要满6行的时候折叠，并显示全文按钮，当用户点击全文按钮时要展开所有内容，当点击收起按钮又变回折叠状态。说完需求，现在来说说问题首先，开发过小程序的朋友都知道，小程序内部是无法操作dom的，也就是说根本没有dom这个东西。
        </div>
        <div class="icon">
          <span v-for= "item in detailData.iconContent">
            <img :src="item.iconSrc" alt="">
            {{item.num}}
          </span>
          <span class="watch">阅读全文>></span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import HeadLine from "@/components/content/headline/HeadLine";
export default {
  name: 'homelistitem',
  components: {
    HeadLine
  },
  data() {
    return {

    }
  },
  props: {
    detailData: {
      type: Object,
      default() {
        return {}
      }
    },
  }
}
</script>

<style scoped>
  .list-item{
    width: 100%;
    height: 310px;
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 5px;
  }
  .box{
    display: flex;
    margin: 15px;
    justify-content: space-between;
    overflow: hidden;
  }
  .box img{
    width: 230px;
    height: 200px;
    cursor: pointer;
  }
  .box .text{
    width: 600px;
    height: 200px;
  }
  .box .text .title{
    font-size: 18px;
    cursor: pointer;
  }
  .box .text .tet{
    height: 58px;
    margin: 50px 0;
    color: #aaa;
    font-size: 14px;
    line-height: 20px;
    text-align: center;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .box .text .icon{
    line-height: 20px;
    height: 20px;
    font-size: 12px;
  }
  .box .text .icon span{
    margin: 0 5px;
  }
  .box .text .icon .watch{
    fontsize: 35px;
    color: green;
    background-color: #eee;
    float: right;
    cursor: pointer;
  }
  .box .text .icon img{
    width: 20px;
    height: 20px;
    padding: 0 3px;
    vertical-align: middle;
  }
</style>