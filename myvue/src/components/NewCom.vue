<template>
  <div>
    <ul>{{msg}}}</ul>
  </div>
</template>

<script>
export default {
  name: 'NewCom',
  data () {
    return {
      msg: '新建一个Vue Component',
      hint: '提示信息',
      is_show: true
    }
  },
  methods: {
    clickHandler (e) {
      // alert('click')
      console.log('handler click')
      console.log(this)
      this.is_show = !this.is_show
    }
  }
  // components: {
  //   'child': Child
  // }
}
</script>

<style scoped>

</style>
