<template>
  <div class="proinfo-con">
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
          title: "工序名称",
          slot: "name",
        },
        {
          title: "设备",
          key: "monitor",
        },
        {
          title: "加工定额",
          key: "num",
        },
        {
          title: "程序名称",
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
.proinfo-con {
  ::v-deep .ivu-table {
    font-size: 16px;
  }
  ::v-deep .ivu-table-header thead tr th {
    font-weight: bold;
    // font-size: 18px;
  }
}
</style>