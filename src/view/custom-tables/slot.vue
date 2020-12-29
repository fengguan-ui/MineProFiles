<template>
  <div class="slot-container">
    <Table border :columns="columns1" :data="data1">
      <template slot-scope="{ row }" slot="g1">
        <span
          v-bind:style="{
            color:
              row.g1 == '进行中'
                ? '#41C3FF'
                : row.g1 == '未开始'
                ? '#FC857F'
                : '',
          }"
          >{{ row.g1 }}</span
        >
      </template>
      <template slot-scope="{ row }" slot="g2">
        <span
          v-bind:style="{
            color:
              row.g2 == '进行中'
                ? '#41C3FF'
                : row.g2 == '未开始'
                ? '#FC857F'
                : '',
          }"
          >{{ row.g2 }}</span
        >
      </template>
      <template slot-scope="{ row, index }" slot="state">
        <Icon
          :type="
            row.state == '未启动'
              ? 'md-remove'
              : row.state == '执行中'
              ? 'md-more'
              : 'md-checkmark'
          "
        />{{ row.state }}
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
          key: "name",
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
          g2: "进行中",
          state: "执行中",
        },
        {
          name: "J022026",
          type: "生肖猪",
          g1: "未开始",
          g2: "未开始",
          state: "未启动",
        },
        {
          name: "J022026",
          type: "生肖猪",
          g1: "进行中",
          g2: "未开始",
          state: "执行中",
        },
        {
          name: "J022026",
          type: "生肖猪",
          g1: "已完成",
          g2: "已完成",
          state: "已完成",
        },
        {
          name: "J022026",
          type: "生肖猪",
          g1: "已完成",
          g2: "已完成",
          state: "已完成",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.slot-container {
  ::v-deep .ivu-icon {
    width: 36px;
    height: 36px;
    border-radius: 6px;
    line-height: 36px;
    text-align: center;
    margin-right: 8px;
    // transform: rotate(90deg);
  }
  ::v-deep .ivu-icon-md-more {
    transform: rotate(90deg);
    color: #41c3ff;
    background: #223345;
  }
  .ivu-icon-md-remove {
    color: #fc857f;
    background: #3e272d;
  }
  .ivu-icon-md-checkmark {
    color: #1bf7d7;
    background: #1b393b;
  }
}
</style>