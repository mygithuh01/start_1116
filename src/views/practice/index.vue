<template>
  <div>
    <h3>自定义指令</h3>
    <div>
      <input v-model="value" v-anti-shake="onShowInfo" type="text">
    </div>
    <el-button type="primary" @click="onShowMsg">点击弹出</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  mounted() {
    this.$Message({ title: '调用时设置的标题' })
  },
  methods: {
    onShowInfo() {
      console.log(this.value)
    },
    onShowMsg() {
      this.$Message({ title: Math.random() })
    }
  }
}
</script>

<style></style>
