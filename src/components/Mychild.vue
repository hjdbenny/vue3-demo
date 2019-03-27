<template>
  <div class="myChild">
    <slot name="hasName"></slot>
    子组件{{ message2 }}
    <br />
    <button @click="changeMessage">click</button>
    <hr />
    <slot></slot>
    <slot :data="data"></slot>
    <hr />
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: ["zhangsan", "lisi", "wanwu", "zhaoliu", "tianqi", "xiaoba"]
    };
  },
  props: ["message2"],
  methods: {
    changeMessage() {
      this.message = "come from" + Math.random();
      this.$store.commit("message", this.message);
    }
  }
};
</script>
