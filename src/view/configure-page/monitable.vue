<template>
  <div class="app-container monitable-container">
    <Button type="primary" style="margin-bottom: 8px" size="large">添加</Button>
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
          title: "设备名称",
          slot: "name",
        },
        {
          title: "设备类型",
          key: "mtype",
        },
        {
          title: "设备IP",
          key: "ip",
        },
        {
          title: "端口号",
          key: "port",
        },
        {
          title: "描述",
          key: "describe",
        },
        {
          title: "操作",
          slot: "act",
        },
      ],
      data1: [
        {
          name: "AGV小车01",
          mtype: "其他",
          ip: "192.168.3.459",
          port: "1202",
          describe: "12",
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
.monitable-container {
  // 背景处理
  background-color: white;
  border-radius: 20px;
  min-height: 85vh;
  min-width: 1200px;
  padding: 20px;
}
</style>