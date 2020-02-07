<template>
  <div class= "detail-item">
    <div class="head">
      <div class="title">{{title}}</div>
      <icon><span slot= "left">
        <img src="~assets/img/icon/time.svg" alt=""> 萧逸
      </span></icon>
    </div>
    <div class="content">

    </div>
    <div class="share"></div>
    <div class="sent"></div>
    <div class="comments"></div>
  </div>

</template>

<script>
//import网络请求数据  ==> this.data.content,iconNum,shareNum,comments
import Icon from "@/components/content/icon/Icon";
export default {
  name: 'detailItem',
  data() {
    return {
      detailData: [
        {
          id: 10,
          
        }

      ]
    }
  }
  components: {
    Icon
  },
  computed: {
    title() {
      return document.title;
    }
  }
}

</script>

<style scoped>
  .detail-item{
    width: 69vw;
    text-align: center;
    border: 1px solid red;
  }
</style>