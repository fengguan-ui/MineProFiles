<template>
  <div class="ddlilst-container">
    <Table stripe border :columns="columns1" :data="data1">
      <!-- 订单名 -->
      <template slot-scope="{ row }" slot="dname">
        <strong>{{ row.dname }}</strong>
      </template>

      <!-- 类型图片 -->
      <template slot-scope="{ row }" slot="typeimg">
        <img :src="row.typeimg" class="typeimg" />
        <!-- <img src="../../assets/images/11_wps图片_wps图片.png" /> -->
      </template>

      <!-- 出库 -->
      <template slot-scope="{ row }" slot="outstate">
        <span v-if="row.outstate === '等待'">
          <Badge color="#FF6C60" :text="row.outstate" />
        </span>
        <span v-else-if="row.outstate === '完成'">
          <Badge color="#A9D86E" :text="row.outstate" />
        </span>
        <span v-else-if="row.outstate === '进行中'">
          <Tag size="medium" style="font-weight: bold" color="#51b8fb">{{
            row.outstate
          }}</Tag>
        </span>
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

      <!-- 清洗 -->
      <template slot-scope="{ row }" slot="g3">
        <span v-if="row.g3 === '等待'">
          <Badge color="#FF6C60" :text="row.g3" />
        </span>
        <span v-else-if="row.g3 === '完成'">
          <Badge color="#A9D86E" :text="row.g3" />
        </span>
        <span v-else-if="row.g3 === '进行中'">
          <Tag size="medium" style="font-weight: bold" color="#51b8fb">{{
            row.g3
          }}</Tag>
        </span>
      </template>

      <!-- 检测 -->
      <template slot-scope="{ row }" slot="g4">
        <span v-if="row.g4 === '等待'">
          <Badge color="#FF6C60" :text="row.g4" />
        </span>
        <span v-else-if="row.g4 === '完成'">
          <Badge color="#A9D86E" :text="row.g4" />
        </span>
        <span v-else-if="row.g4 === '进行中'">
          <Tag size="medium" style="font-weight: bold" color="#51b8fb">{{
            row.g4
          }}</Tag>
        </span>
      </template>

      <!-- 打标 -->
      <template slot-scope="{ row }" slot="g5">
        <span v-if="row.g5 === '等待'">
          <Badge color="#FF6C60" :text="row.g5" />
        </span>
        <span v-else-if="row.g5 === '完成'">
          <Badge color="#A9D86E" :text="row.g5" />
        </span>
        <span v-else-if="row.g5 === '进行中'">
          <Tag size="medium" style="font-weight: bold" color="#51b8fb">{{
            row.g5
          }}</Tag>
        </span>
      </template>

      <!-- 入库 -->
      <template slot-scope="{ row }" slot="instate">
        <span v-if="row.instate === '等待'">
          <Badge color="#FF6C60" :text="row.instate" />
        </span>
        <span v-else-if="row.instate === '完成'">
          <Badge color="#A9D86E" :text="row.instate" />
        </span>
        <span v-else-if="row.instate === '进行中'">
          <Tag size="medium" style="font-weight: bold" color="#51b8fb">{{
            row.instate
          }}</Tag>
        </span>
      </template>

      <!-- 装配 -->
      <template slot-scope="{ row, index }" slot="state">
        <Tag
          size="medium"
          style="font-weight: bold"
          :color="
            row.state == '等待'
              ? '#FF6C60'
              : row.state == '完成'
              ? '#A9D86E'
              : '#51b8fb'
          "
          >{{ row.state }}</Tag
        >
      </template>
    </Table>
    <Page :total="100" show-total />
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: "订单名",
          slot: "dname",
        },
        {
          title: "个性签名",
          key: "name",
        },
        {
          title: "类型名称",
          key: "type",
        },
        {
          title: "类型图片",
          slot: "typeimg",
        },
        {
          title: "出库",
          slot: "outstate",
        },
        {
          title: "加工单元",
          key: "m1",
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
          title: "清洗",
          slot: "g3",
        },
        {
          title: "检测",
          slot: "g4",
        },
        {
          title: "打标",
          slot: "g5",
        },
        {
          title: "入库",
          slot: "instate",
        },

        {
          title: "入库库位",
          key: "inum",
        },
        {
          title: "装配",
          slot: "state",
        },
      ],

      data1: [
        {
          dname: "001",
          name: "J022026",
          type: "生肖猪",
          typeimg: require("../../assets/images/生肖/sx1.png"),
          outstate: "完成",
          m1: "单元一",
          g1: "完成",
          g2: "完成",
          g3: "完成",
          g4: "完成",
          g5: "完成",
          instate: "完成",
          inum: "1",
          state: "进行中",
        },
        {
          dname: "001",
          name: "J022026",
          type: "生肖猪",
          typeimg: require("../../assets/images/生肖/sx1.png"),
          outstate: "完成",
          m1: "单元一",
          g1: "进行中",
          g2: "等待",
          g3: "等待",
          g4: "等待",
          g5: "等待",
          instate: "等待",
          inum: "1",
          state: "等待",
        },
        {
          dname: "001",
          name: "J022026",
          type: "生肖猪",
          typeimg: require("../../assets/images/生肖/sx1.png"),
          outstate: "完成",
          m1: "单元一",
          g1: "完成",
          g2: "进行中",
          g3: "等待",
          g4: "等待",
          g5: "等待",
          instate: "等待",
          inum: "1",
          state: "等待",
        },
        {
          dname: "001",
          name: "J022026",
          type: "生肖猪",
          typeimg: require("../../assets/images/生肖/sx1.png"),
          outstate: "完成",
          m1: "单元一",
          g1: "完成",
          g2: "完成",
          g3: "完成",
          g4: "完成",
          g5: "进行中",
          instate: "等待",
          inum: "1",
          state: "等待",
        },
        {
          dname: "001",
          name: "J022026",
          type: "生肖猪",
          typeimg: require("../../assets/images/生肖/sx1.png"),
          outstate: "完成",
          m1: "单元一",
          g1: "完成",
          g2: "完成",
          g3: "完成",
          g4: "完成",
          g5: "完成",
          instate: "完成",
          inum: "1",
          state: "完成",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.ddlilst-container {
  background: white;
  padding: 20px;
  border-radius: 10px;
  height: 100%;
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

  .typeimg {
    width: 68px;
    height: 68px;
  }
  .ivu-page {
    margin-top: 30px;
  }
}
</style>