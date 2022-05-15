<template>
  <fieldset>
    <legend>组件封装</legend>
    <div>诸事顺利</div>
    <div>动态值:{{msg}}</div>
    <div class="tel">手机号: {{tel}}</div>
    <slot></slot>
  </fieldset>
</template>
<script>
  export default {
    name: 'filed-sets',
    data () {
      return {
        msg: '第一次封装组件发布npm'
      }
    },
    props: {
      tel: {
        type: Number,
        default: () => {
          return 15692423517
        }
      }
    }
  }
</script>
<style>
.tel {
  color: red
}
</style>