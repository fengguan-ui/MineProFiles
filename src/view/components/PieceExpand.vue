<template>
  <div class="pieceExpand-con">
    <Collapse
      v-model="collapse"
      accordion
      v-for="item in tagsItem"
      :key="panelname"
    >
      <Panel v-bind:name="item.panelname">
        <div class="collapseHead">
          <span class="grid-cell proname"> {{ item.proname }}</span>

          <div class="grid-cell cell2">
            <Steps :current="1" size="small">
              <Step title="加工"></Step>
              <Step title="清洗"></Step>
              <Step title="检测"></Step>
              <Step title="打标"></Step>
              <Step title="装配"></Step>
            </Steps>
          </div>

          <span class="cell3"> 创建时间：2020-12-12 09:24:48</span>
        </div>

        <div slot="content">
          <Table border stripe :columns="columns" :data="tableData">
            <template slot-scope="{ row, index }" slot="name">
              <strong>{{ row.name }}</strong>
            </template>

            <!-- 状态 -->
            <template slot-scope="{ row }" slot="satte">
              <span v-if="row.satte === '等待'">
                <Badge color="#FF6C60" :text="row.satte" />
              </span>
              <span v-else-if="row.satte === '完成'">
                <Badge color="#A9D86E" :text="row.satte" />
              </span>
              <span v-else-if="row.satte === '进行中'">
                <Tag size="medium" style="font-weight: bold" color="#51b8fb">{{
                  row.satte
                }}</Tag>
              </span>
            </template>
          </Table>
        </div>
      </Panel>
    </Collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 折叠面板-状态
      tagsItem: [
        {
          panelname: "1",
          proname: "收纳管(2d羊)-下盖",
          tagstate1: "完成",
          tagstate2: "完成",
          tagstate3: "进行中",
          tagstate4: "等待",
          tagstate5: "等待",
        },
        {
          panelname: "2",
          proname: "收纳管(2d羊)-中间站z",
          tagstate1: "完成",
          tagstate2: "完成",
          tagstate3: "完成",
          tagstate4: "完成",
          tagstate5: "进行中",
        },
      ],
      //
      collapse: "1",
      // 表格
      columns: [
        {
          title: "工序名称",
          slot: "name",
        },
        {
          title: "状态",
          slot: "satte",
        },
        {
          title: "测量值",
          key: "num",
        },
        {
          title: "打标文件名",
          key: "file",
        },
        {
          title: "打标文字",
          key: "text",
        },
        {
          title: "开始时间",
          key: "time",
          width: "210",
        },
        {
          title: "结束时间",
          key: "timeEnd",
          width: "210",
        },
      ],
      tableData: [
        {
          name: "打标",
          satte: "等待",
          num: "测量值",
          file: "校徽.jpg",
          text: "1",
          time: "2020-12-12 15:42:24",
          timeEnd: "2020-12-12 15:42:24",
        },
        {
          name: "检测",
          satte: "进行中",
          num: "测量值",
          file: "校徽.jpg",
          text: "1",
          time: "2020-12-12 15:42:24",
          timeEnd: "2020-12-12 15:42:24",
        },
        {
          name: "收纳管装配",
          satte: "完成",
          num: "测量值",
          file: "校徽.jpg",
          text: "1",
          time: "2020-12-12 15:42:24",
          timeEnd: "2020-12-12 15:42:24",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.pieceExpand-con {
  ::v-deep .ivu-table {
    font-size: 16px;
  }
  ::v-deep .ivu-table-header thead tr th {
    font-weight: bold;
    // font-size: 18px;
  }
  .collapseHead {
    display: flex;
    position: absolute;
    z-index: 99;
    top: 0;
    margin-left: 30px;
    width: calc(100% - 46px);
    // justify-content: space-between;
    padding-right: 16px;
    font-size: 16px;
  }
  .collapseHead .proname {
    width: 162px;
    font-weight: bold;
    margin-right: 16px;
  }

  .cell2 {
    justify-content: center;
    align-items: center;
    display: flex;
    margin-right: auto;
  }
  .cell3 {
    display: flex;
    justify-content: flex-end;
  }
  ::v-deep .ivu-collapse > .ivu-collapse-item > .ivu-collapse-header {
    height: 58px;
    line-height: 58px;
  }
  .ivu-steps {
    width: 600px;
    padding-top: 4px;
  }
  ::v-deep .ivu-steps .ivu-steps-title {
    background: #f7f7f7;
  }
  ::v-deep .ivu-steps-status-process .ivu-steps-main .ivu-steps-title {
    color: #2d8cf0;
  }
  ::v-deep .ivu-steps.ivu-steps-small .ivu-steps-title {
    font-size: 14px;
  }
}
</style>