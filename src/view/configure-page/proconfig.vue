<template>
  <div class="app-container proconfig-container">
    <Button type="primary" style="margin-bottom: 8px" size="large">配置</Button>
    <Table border :columns="columns1" :data="data1">
      <!-- 产线名称 -->
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
          title: "产线名称",
          slot: "name",
        },
        {
          title: "创建时间",
          key: "createtime",
        },
        {
          title: "备注",
          key: "remarks",
        },

        {
          title: "操作",
          slot: "act",
        },
      ],
      data1: [
        {
          name: "智能产线",
          createtime: "2020-12-12 14:49:32",
          remarks: "12",
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
.proconfig-container {
  // 背景处理
  background-color: white;
  border-radius: 20px;
  min-height: 85vh;
  min-width: 1200px;
  padding: 20px;
}
</style>