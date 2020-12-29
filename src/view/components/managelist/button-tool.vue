<template>
  <div class="button-tool">
    <Button type="text" size="small" @click="onClickAdd"
      ><i class="iconfont iconadd"></i>新增订单</Button
    >

    <Button type="text" size="small"
      ><i class="iconfont iconcheck"></i>全部确认</Button
    >
    <Button type="text" size="small"
      ><i class="iconfont iconsafe"></i>启动</Button
    >

    <Button type="text" size="small" @click.native="onClickSearch"
      ><i class="iconfont iconsearch"></i>查询</Button
    >
  </div>
</template>
<script>
export default {
  methods: {
    onClickSearch() {
      this.$emit("onClickSearch");
    },
    onClickAdd() {
      this.$emit("onClickAdd");
    },
    onClickDeleteMany() {
      this.$emit("onClickDeleteMany");
    },
  },
};
</script>
<style lang="scss" scoped>
.button-tool {
  padding: 5px 10px;
  background-color: #f8f8f9;
  border: 1px solid #e8eaec;

  .iconfont {
    margin-right: 5px;
  }

  button {
    padding: 0 10px;
  }
}
</style>