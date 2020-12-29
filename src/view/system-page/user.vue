<template>
  <div class="app-container user-container">
    <Button
      size="large"
      type="primary"
      style="margin-bottom: 8px; margin-right: 8px"
      >添加</Button
    >
    <Button size="large" type="primary" style="margin-bottom: 8px">注销</Button>
    <Table border :columns="columns1" :data="data1">
      <!-- 设备名称 -->
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>

      <!-- 操作 -->
      <template slot-scope="{ row, index }" slot="act">
        <Button
          type="primary"
          size="small"
          style="margin-right: 5px"
          @click="show(index)"
          >编辑</Button
        >
        <Button type="error" size="small" @click="remove(index)">删除</Button>
      </template>
    </Table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 表格
      columns1: [
        {
          title: "用户名",
          slot: "name",
        },
        {
          title: "创建日期",
          key: "time",
        },
        {
          title: "备注",
          key: "remark",
        },

        {
          title: "操作",
          slot: "act",
        },
      ],
      data1: [
        {
          name: "admin",
          time: "2020-12-12 08:36:17",
          remark: "192.168.3.459",
        },
      ],
    };
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: "编辑",
        content: `Name：${this.data1[index].name}}`,
      });
    },
    remove(index) {
      this.data1.splice(index, 1);
    },
  },
};
</script>
<style lang="scss" scoped>
.user-container {
  // 背景处理
  background-color: white;
  border-radius: 20px;
  min-height: 85vh;
  min-width: 1200px;
  padding: 20px;
}
</style>