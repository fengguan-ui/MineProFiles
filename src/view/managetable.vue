<template>
  <div class="app-container managetabCon">
    <!-- 检索区 -->
    <div>
      <Search />
    </div>
    <!-- end -->

    <!-- 表格 -->
    <div class="tabCon">
      <Table border stripe :columns="columns" :data="tableData">
        <template slot-scope="{ row, index }" slot="OrderName">
          <strong>{{ row.OrderName }}</strong>
        </template>

        <!-- 确认状态：已确认、未确认 -->
        <template slot-scope="{ row, index }" slot="state1">
          <Icon
            class="colstate1"
            :type="row.state1 == '已确认' ? 'md-checkmark' : 'md-remove'"
            :class="row.state1 == '已确认' ? 's1' : 's2'"
          />{{ row.state1 }}
        </template>

        <!-- 执行状态：已启动、未启动、执行中、已完成 -->

        <template slot-scope="{ row, index }" slot="state2">
          <Tag
            :class="
              row.state2 == '未启动'
                ? 'tag3'
                : row.state2 == '已启动'
                ? 'tag1'
                : row.state2 == '执行中'
                ? 'tag5'
                : 'tag4'
            "
            >{{ row.state2 }}</Tag
          >
        </template>

        <!-- 完成情况 -->
        <template slot-scope="{ row, index }" slot="progress">
          <Progress :percent="row.progress" status="active" :stroke-width="8" />
        </template>

        <!-- 操作 -->
        <template slot-scope="{ row, index }" slot="act">
          <!-- @click="modal1 = true" -->
          <Button
            type="primary"
            size="small"
            style="margin-right: 5px"
            @click="show(index)"
            >工件记录</Button
          >
          <Button type="error" size="small" @click="remove(index)">删除</Button>
        </template>
      </Table>

      <!-- 工件记录-点击弹窗 -->
      <Modal v-model="modalinfo" title="订单002d" footer-hide width="700">
        <Table border :columns="cols" :data="datas">
          <template slot-scope="{ row }" slot="name">
            <strong>{{ row.name }}</strong>
          </template>
          <template slot-scope="{ row, index }" slot="act">
            <Button
              type="primary"
              size="small"
              style="margin-right: 5px"
              @click="show(row.Id)"
              >编辑</Button
            >
            <Button type="error" size="small" @click="deleteDetail(row.Id)"
              >删除</Button
            >
          </template>
        </Table>
      </Modal>
      <!-- end -->
    </div>

    <!-- 分页 -->
    <div style="border: 1px #e8eaec solid; padding: 10px">
      <Page :total="100" show-total />
    </div>
    <!-- end -->
  </div>
</template>
<script>
import Search from "../../components/search";

export default {
  components: {
    Search: Search,
  },
  data() {
    return {
      modalinfo: false,
      //   表格
      columns: [
        {
          title: "订单号",
          slot: "OrderName",
        },
        {
          title: "确认状态",
          slot: "state1",
        },
        {
          title: "执行状态",
          slot: "state2",
        },
        {
          title: "创建时间",
          key: "time",
          width: 200,
        },
        {
          title: "加工单元",
          key: "m1",
        },
        {
          title: "需求总数",
          key: "num1",
        },
        {
          title: "出库总数",
          key: "num2",
        },
        {
          title: "完成总数",
          key: "num3",
        },
        {
          title: "合格总数",
          key: "num4",
        },
        {
          title: "完成情况",
          slot: "progress",
          width: 200,
        },
        {
          title: "操作",
          slot: "act",
          width: 160,
        },
      ],
      tableData: [
        {
          OrderName: "015s",
          state1: "已确认",
          state2: "执行中",
          time: "2020-12-21 20:25:38",
          m1: "自动排出",
          num1: "2",
          num2: "1",
          num3: "1",
          num4: "1",
          progress: "32",
        },
        {
          OrderName: "015s",
          state1: "已确认",
          state2: "执行中",
          time: "2020-12-21 20:25:38",
          m1: "自动排出",
          num1: "2",
          num2: "1",
          num3: "1",
          num4: "1",
          progress: "32",
        },
        {
          OrderName: "015s",
          state1: "已确认",
          state2: "执行中",
          time: "2020-12-21 20:25:38",
          m1: "自动排出",
          num1: "2",
          num2: "1",
          num3: "1",
          num4: "1",
          progress: "32",
        },
        {
          OrderName: "015s",
          state1: "未确认",
          state2: "已启动",
          time: "2020-12-21 20:25:38",
          m1: "自动排出",
          num1: "2",
          num2: "1",
          num3: "1",
          num4: "1",
          progress: "32",
        },
        {
          OrderName: "015s",
          state1: "已确认",
          state2: "未启动",
          time: "2020-12-21 20:25:38",
          m1: "自动排出",
          num1: "2",
          num2: "1",
          num3: "1",
          num4: "1",
          progress: "32",
        },
        {
          OrderName: "015s",
          state1: "未确认",
          state2: "已完成",
          time: "2020-12-21 20:25:38",
          m1: "自动排出",
          num1: "2",
          num2: "1",
          num3: "1",
          num4: "1",
          progress: "32",
        },
        {
          OrderName: "015s",
          state1: "已确认",
          state2: "已完成",
          time: "2020-12-21 20:25:38",
          m1: "自动排出",
          num1: "2",
          num2: "1",
          num3: "1",
          num4: "1",
          progress: "32",
        },
      ],

      // 工件记录表格
      // 表格
      cols: [
        {
          title: "#",
          type: "index",
          width: "50",
        },
        {
          title: "工件",
          key: "WorkpieceName",
        },
        {
          title: "需求数",
          key: "DemandCount",
        },
        {
          title: "出库数",
          key: "ItemCount",
        },
        {
          title: "完成数",
          key: "CompletionCount",
        },
        {
          title: "合格数",
          key: "QualificationCount",
        },
        {
          title: "操作",
          slot: "act",
          width: "128",
        },
      ],
      datas: [
        {
          WorkpieceName: "校徽",
          DemandCount: "1",
          ItemCount: "2",
          CompletionCount: "1",
          QualificationCount: "2",
        },
      ],
    };
  },

  methods: {
    show(index) {
      this.modalinfo = true;
    },
    remove(index) {
      this.tableData.splice(index, 1);
    },
  },
};
</script>
<style lang="scss" scoped>
.managetabCon {
  background-color: white;
  border-radius: 20px;
  min-height: 85vh;

  .ivu-page {
    margin-top: 0;
  }
  .tabCon .colstate1 {
    color: white;
    padding: 3px;
    border-radius: 2px;
    margin-right: 6px;
  }
  .s1 {
    background-color: #44c2d2;
  }
  .s2 {
    background-color: #d0d7d8;
  }
  .tag1 {
    background: #f0f9eb;
    border: none;

    ::v-deep .ivu-tag-text {
      color: #67c23a;
    }
  }

  .tag3 {
    background: #e4e7ec;
    border: none;
    color: #a6adb8;
  }
  .tag4 {
    background: #fbf4ed;
    border: none;

    ::v-deep .ivu-tag-text {
      color: #ffa360;
    }
  }
  .tag5 {
    background: #e7f3f9;
    border: none;

    ::v-deep .ivu-tag-text {
      color: #409eff;
    }
  }
  .tag1,
  .tag3,
  .tag4,
  .tag5 {
    height: 34px;
    line-height: 34px;
    font-size: 14px;
  }
  ::v-deep .ivu-progress .ivu-progress-text {
    font-weight: bold;
  }
}
</style>