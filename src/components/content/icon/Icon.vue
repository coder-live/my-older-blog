<template>
  <div class= "icon">
    <slot name= "left"></slot>
    <span v-for= "(item,index) in inconSrc" :key= "item">
      <img :src="item" alt="" :class= "{isClick:isClick}">
      <span>{{iconNum[index]}}</span>
    </span>
    <slot></slot>
  </div>

</template>

<script>
export default {
  name: 'icon',
  props: {
    iconNum: {
      type: Array,
      default() {
        return [] 
      }
    },
    isClick: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  computed: {
    inconSrc() {
      return this.$store.state.iconSrc
    }
  }
}
</script>

<style scoped>
  .icon img{
    width: 20px;
    height: 20px;
    padding: 0 3px;
    margin: 0 5px;
    vertical-align: middle;
  }
  .icon .isClick{
    cursor: pointer;
  }
  .icon span{
    font-size: 12px;
  }
</style>