<template>
  <div class="protabgb-con">
    <Button class="btngx" size="large">添加工步</Button>

    <!-- 此行删除 -->
    <font style="color: red"
      >树节点点击 工序 时，右侧显示仅工步信息（下方表格）——此行删除</font
    >

    <Table border stripe :columns="columns" :data="tableData">
      <template slot-scope="{ row, index }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>

      <template slot-scope="{ row, index }" slot="action">
        <Button
          type="primary"
          size="small"
          style="margin-right: 5px"
          @click="show(index)"
          >编辑</Button
        >
        <Button type="error" size="small" @click="tabremove(index)"
          >删除</Button
        >
      </template>
    </Table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 表格
      columns: [
        {
          title: "工步名称",
          slot: "name",
        },
        {
          title: "表头",
          key: "monitor",
        },
        {
          title: "表头",
          key: "num",
        },
        {
          title: "表头",
          key: "proname",
        },
        {
          title: "操作",
          slot: "action",
        },
      ],
      tableData: [
        {
          name: "车工序",
          monitor: "车床",
          num: "651",
          proname: "车工序",
        },
        {
          name: "车工序",
          monitor: "车床",
          num: "651",
          proname: "车工序",
        },
        {
          name: "车工序",
          monitor: "车床",
          num: "651",
          proname: "车工序",
        },
      ],
    };
  },
  methods: {
    // 表格
    show(index) {
      this.$Modal.info({
        title: "测试",
        content: `Name：${this.tableData[index].name}`,
      });
    },
    tabremove(index) {
      this.tableData.splice(index, 1);
    },
  },
};
</script>
<style lang="scss" scoped>
.protabgb-con {
  ::v-deep .ivu-table {
    font-size: 16px;
  }
  ::v-deep .ivu-table-header thead tr th {
    font-weight: bold;
    // font-size: 18px;
  }
  .btngx {
    background-color: rgba(45, 140, 240, 0.12);
    color: rgba(45, 140, 240, 1);
    border-color: rgba(45, 140, 240, 0.8);
    margin-bottom: 16px;
  }
  .btngx:hover {
    background-color: rgba(134, 193, 255, 0.1);
    color: rgba(66, 156, 252, 1);
    border-color: rgba(66, 156, 252, 1);
  }
}
</style>