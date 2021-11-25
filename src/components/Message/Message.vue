<template>
  <div class="message" :style="{background:bgColor}"><slot>sss</slot> <slot name="footer" myData="我是数据">熊猫</slot>{{ title }}<button @click="ok">按钮</button></div>
</template>

<script>
export default {
  props: ['title', 'func'],
  data: function() {
    return {
      bgColor: 'red'
    }
  },
  methods: {
    ok() {
      console.log(this)
      this.func()
    }
  }
}
</script>

<style lang="scss">
.message {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  padding: 30px;
  background: skyblue;
  border-radius: 6px;
  box-shadow: 1px 1px 5px gray;
}
</style>
