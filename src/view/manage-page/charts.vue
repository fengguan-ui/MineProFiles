<template>
  <div class="charts-conainer">
    <Tabs value="name1" :animated="true" @on-click="onclick">
      <!-- :animated="false" -->
      <TabPane label="工件类型统计" name="name1" icon="md-stats">
        <Panebar v-if="tabname == 'name1'" />
      </TabPane>
      <TabPane label="设备在线 / 离线统计" name="name2" icon="md-pie">
        <Panepie v-if="tabname == 'name2'" />
      </TabPane>
      <TabPane label="加工计划统计" name="name3" icon="md-pulse">
        <Paneplan v-if="tabname == 'name3'" />
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
import Panebar from "../components/chartspage/panebar";
import Panepie from "../components/chartspage/panepie";
import Paneplan from "../components/chartspage/paneplan";
export default {
  components: {
    Panebar: Panebar,
    Panepie: Panepie,
    Paneplan: Paneplan,
  },
  data() {
    return {
      tabname: "name1",
    };
  },
  methods: {
    onclick(name) {
      this.tabname = name;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.charts-conainer {
  // background: white;
  padding: 20px;
  border-radius: 10px;
  // height: 100%;
  ::v-deep .ivu-form-item {
    margin-bottom: 6px;
  }

  ::v-deep .ivu-tabs-bar {
    border-bottom: none;
  }
  ::v-deep .ivu-tabs-nav .ivu-tabs-tab {
    font-size: 16px;
    font-weight: bold;
  }

  .ivu-tabs-content > .ivu-tabs-tabpane {
    display: block;
    height: auto;
    overflow: hidden;
  }
}
</style>