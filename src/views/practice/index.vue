<template>
  <div>
    <h3>自定义指令</h3>
    <div>
      <input v-model="value" v-anti-shake="onShowInfo" type="text">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    onShowInfo() {
      console.log(this.value)
    }
  }
}
</script>

<style></style>
