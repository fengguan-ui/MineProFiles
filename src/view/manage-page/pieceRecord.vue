<template>
  <div class="pieceRecord-con">
    <!-- 工件记录 -->

    <Input
      search
      enter-button="查询"
      placeholder="请输入任意关键字进行查询..."
      size="large"
    />

    <Table border stripe :columns="columns" :data="tableData">
      <template slot-scope="{ row, index }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>
    </Table>
  </div>
</template>
<script>
import PieceExpand from "../components/PieceExpand";
export default {
  components: { PieceExpand },
  data() {
    return {
      // 表格
      columns: [
        {
          type: "expand",
          width: 50,
          render: (h, params) => {
            return h(PieceExpand, {
              props: {
                row: params.row,
              },
            });
          },
        },
        {
          title: "产品",
          slot: "name",
        },
        {
          title: "订单编码",
          key: "code",
        },
        {
          title: "创建时间",
          key: "time",
        },
      ],
      tableData: [
        {
          name: "收纳管(3d鸡)",
          time: "2020-12-12 21:18:37",
          code: "code",
          _expanded: true,
        },
        {
          name: "收纳管(2d羊)",
          time: "2020-12-12 21:18:37",
          code: "code",
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
.pieceRecord-con {
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
  .ivu-input-group {
    width: 320px;
  }
}
</style>