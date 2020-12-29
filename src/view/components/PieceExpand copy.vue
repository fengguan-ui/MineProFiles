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

          <!-- 加工 -->
          <div class="grid-cell">
            <span v-if="item.tagstate1 === '等待'">
              加工：<Badge color="#FF6C60" :text="item.tagstate1" />
            </span>

            <span v-else-if="item.tagstate1 === '完成'">
              加工： <Badge color="#A9D86E" :text="item.tagstate1" />
            </span>
            <span v-else-if="item.tagstate1 === '进行中'">
              加工：
              <Tag size="medium" style="font-weight: bold" color="#51b8fb">
                {{ item.tagstate1 }}
              </Tag>
            </span>
          </div>
          <!-- 清洗 -->
          <div class="grid-cell">
            <span v-if="item.tagstate2 === '等待'">
              清洗：<Badge color="#FF6C60" :text="item.tagstate2" />
            </span>

            <span v-else-if="item.tagstate2 === '完成'">
              清洗： <Badge color="#A9D86E" :text="item.tagstate2" />
            </span>
            <span v-else-if="item.tagstate2 === '进行中'">
              清洗：
              <Tag size="medium" style="font-weight: bold" color="#51b8fb">
                {{ item.tagstate2 }}
              </Tag>
            </span>
          </div>

          <!-- 检测 -->
          <div class="grid-cell">
            <span v-if="item.tagstate3 === '等待'">
              检测：<Badge color="#FF6C60" :text="item.tagstate3" />
            </span>

            <span v-else-if="item.tagstate3 === '完成'">
              检测： <Badge color="#A9D86E" :text="item.tagstate3" />
            </span>
            <span v-else-if="item.tagstate3 === '进行中'">
              检测：
              <Tag size="medium" style="font-weight: bold" color="#51b8fb">
                {{ item.tagstate3 }}
              </Tag>
            </span>
          </div>

          <!-- 打标 -->
          <div class="grid-cell">
            <span v-if="item.tagstate4 === '等待'">
              打标：<Badge color="#FF6C60" :text="item.tagstate4" />
            </span>

            <span v-else-if="item.tagstate4 === '完成'">
              打标： <Badge color="#A9D86E" :text="item.tagstate4" />
            </span>
            <span v-else-if="item.tagstate4 === '进行中'">
              打标：
              <Tag size="medium" style="font-weight: bold" color="#51b8fb">
                {{ item.tagstate4 }}
              </Tag>
            </span>
          </div>

          <!-- 装配 -->
          <div class="grid-cell">
            <span v-if="item.tagstate5 === '等待'">
              装配：<Badge color="#FF6C60" :text="item.tagstate5" />
            </span>

            <span v-else-if="item.tagstate5 === '完成'">
              装配： <Badge color="#A9D86E" :text="item.tagstate5" />
            </span>
            <span v-else-if="item.tagstate5 === '进行中'">
              装配：
              <Tag size="medium" style="font-weight: bold" color="#51b8fb">
                {{ item.tagstate5 }}
              </Tag>
            </span>
          </div>

          <span> 创建时间：2020-12-12 09:24:48</span>
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
        },
        {
          title: "结束时间",
          key: "timeEnd",
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
    justify-content: space-between;
    padding-right: 16px;
  }
  .collapseHead .proname {
    width: 162px;
    font-weight: bold;
    margin-right: 16px;
  }
  .grid-cell {
    flex: 1;
  }
  ::v-deep .ivu-collapse > .ivu-collapse-item > .ivu-collapse-header {
    height: 58px;
    line-height: 58px;
  }
}
</style>