<template>
  <div class= "aside-item">
    <head-line><span>{{asideTitle}}</span></head-line>
    我是边栏内容
  </div>

</template>

<script>
import HeadLine from "@/components/content/headline/HeadLine";
export default {
  name: 'homeasideitem',
  components: {
    HeadLine
  },
  props: {
    asideTitle: {
      type: String,
      default() {
        return "我是导航线"
      }
    }
  }
}
</script>

<style scoped>
  .aside-item{
    width: 100%;
    height: 200px;
    background-color: #fff;
    margin-bottom:20px;
    border-radius: 5px;
  }
</style>