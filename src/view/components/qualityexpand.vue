<template>
  <div class="qualityexpand-con">
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
          title: "检测名称",
          slot: "name",
        },
        {
          title: "单位",
          key: "unit",
        },
        {
          title: "最小值",
          key: "min",
        },
        {
          title: "最大值",
          key: "max",
        },
        {
          title: "标准值",
          key: "num",
        },
        {
          title: "创建时间",
          key: "time",
        },
        {
          title: "备注",
          key: "remark",
        },
        {
          title: "操作",
          slot: "action",
        },
      ],
      tableData: [
        {
          name: "检测",
          unit: "mm",
          min: "0.8",
          max: "1.2",
          num: "1",
          time: "2020-12-12 15:42:24",
          remark: "",
        },
        {
          name: "检测",
          unit: "mm",
          min: "0.8",
          max: "1.2",
          num: "1",
          time: "2020-12-12 15:42:24",
          remark: "",
        },
        {
          name: "检测",
          unit: "mm",
          min: "0.8",
          max: "1.2",
          num: "1",
          time: "2020-12-12 15:42:24",
          remark: "",
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
.qualityexpand-con {
  ::v-deep .ivu-table {
    font-size: 16px;
  }
  ::v-deep .ivu-table-header thead tr th {
    font-weight: bold;
    // font-size: 18px;
  }
}
</style>