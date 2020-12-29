<template>
  <div class="quality-con">
    <Button type="primary" size="large">添加</Button>

    <Table border stripe :columns="columns" :data="tableData">
      <template slot-scope="{ row, index }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>
    </Table>
  </div>
</template>
<script>
import Qualityexpand from "../components/qualityexpand";
export default {
  components: { Qualityexpand },
  data() {
    return {
      // 表格
      columns: [
        {
          type: "expand",
          width: 50,
          render: (h, params) => {
            return h(Qualityexpand, {
              props: {
                row: params.row,
              },
            });
          },
        },
        {
          title: "工件类型",
          slot: "name",
        },
        {
          title: "创建时间",
          key: "time",
        },
        {
          title: "G代码",
          key: "Gcode",
        },
      ],
      tableData: [
        {
          name: "收纳管(3d鸡)-中间轴",
          time: "2020-12-12 21:18:37",
          Gcode: "Gcode",
        },
        {
          name: "收纳管(3d鸡)-中间轴",
          time: "2020-12-12 21:18:37",
          Gcode: "Gcode",
        },
        {
          name: "收纳管(3d鸡)-中间轴",
          time: "2020-12-12 21:18:37",
          Gcode: "Gcode",
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
.quality-con {
  // 背景处理
  background-color: white;
  border-radius: 20px;
  min-height: 85vh;
  min-width: 1200px;
  padding: 20px;
  ::v-deep .ivu-table {
    font-size: 16px;
  }
  .ivu-table-wrapper-with-border {
    margin-top: 16px;
  }
  ::v-deep .ivu-table-header thead tr th {
    font-weight: bold;
    // font-size: 18px;
  }
}
</style>