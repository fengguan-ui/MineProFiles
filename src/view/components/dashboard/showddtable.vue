<template>
  <div class="ddtablecon">
    <Table stripe :columns="columns1" :data="data1">
      <!-- 订单名 -->
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>
      <!-- 车工序 -->
      <template slot-scope="{ row }" slot="g1">
        <span v-if="row.g1 === '等待'">
          <Badge color="#FF6C60" :text="row.g1" />
        </span>
        <span v-else-if="row.g1 === '完成'">
          <Badge color="#A9D86E" :text="row.g1" />
        </span>
        <span v-else-if="row.g1 === '进行中'">
          <Tag size="medium" style="font-weight: bold" color="#51b8fb">{{
            row.g1
          }}</Tag>
        </span>
      </template>

      <!-- 铣工序 -->
      <template slot-scope="{ row }" slot="g2">
        <span v-if="row.g2 === '等待'">
          <Badge color="#FF6C60" :text="row.g2" />
        </span>
        <span v-else-if="row.g2 === '完成'">
          <Badge color="#A9D86E" :text="row.g2" />
        </span>
        <span v-else-if="row.g2 === '进行中'">
          <Tag size="medium" style="font-weight: bold" color="#51b8fb">{{
            row.g2
          }}</Tag>
        </span>
      </template>

      <!-- 订单状态：（已启动）、未启动、执行中、已完成 -->
      <template slot-scope="{ row, index }" slot="state">
        <Icon
          :type="
            row.state == '未启动'
              ? 'md-remove'
              : row.state == '执行中'
              ? 'md-more'
              : 'md-checkmark'
          "
        />
        <strong>{{ row.state }}</strong>
      </template>
    </Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: "订单名",
          slot: "name",
        },
        {
          title: "工件类型",
          key: "type",
        },
        {
          title: "车工序",
          slot: "g1",
        },
        {
          title: "铣工序",
          slot: "g2",
        },
        {
          title: "状态",
          slot: "state",
        },
      ],

      data1: [
        {
          name: "J022026",
          type: "生肖猪",
          g1: "进行中",
          g2: "等待",
          state: "执行中",
        },
        {
          name: "J022026",
          type: "生肖猪",
          g1: "等待",
          g2: "等待",
          state: "未启动",
        },
        {
          name: "J022026",
          type: "生肖猪",
          g1: "完成",
          g2: "进行中",
          state: "执行中",
        },
        {
          name: "J022026",
          type: "生肖猪",
          g1: "完成",
          g2: "完成",
          state: "已完成",
        },
        {
          name: "J022026",
          type: "生肖猪",
          g1: "完成",
          g2: "完成",
          state: "已完成",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.ddtablecon {
  ::v-deep .ivu-icon {
    width: 24px;
    height: 24px;
    border-radius: 3px;
    line-height: 24px;
    text-align: center;
    margin-right: 8px;
    // transform: rotate(90deg);
  }
  ::v-deep .ivu-icon-md-more {
    transform: rotate(90deg);
    color: white;
    background: #41c3ff;
  }
  .ivu-icon-md-remove {
    color: white;
    background: #fc857f;
  }
  .ivu-icon-md-checkmark {
    color: white;
    background: #a9d86e;
  }
  ::v-deep .ivu-table th,
  ::v-deep .ivu-table td {
    border-bottom: none;
  }
  ::v-deep .ivu-table:before {
    background-color: rgba(0, 0, 0, 0);
  }
  ::v-deep .ivu-table-row {
    height: 52px;
  }
}
</style>