<template>
  <div class="charts-conainer">
    <Tabs value="name1">
      <TabPane label="工件类型统计" name="name1" icon="md-stats">
        <Panebar />
      </TabPane>
      <TabPane label="设备在线 / 离线统计" name="name2" icon="md-pie"
        >标签二的内容</TabPane
      >
      <TabPane label="加工计划统计" name="name3" icon="md-pulse"
        >标签三的内容</TabPane
      >
    </Tabs>
  </div>
</template>
<script>
import Panebar from "../components/panebar";
export default {
  components: {
    Panebar: Panebar,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.charts-conainer {
  // background: white;
  padding: 20px;
  border-radius: 10px;
  height: 100%;
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
}
</style>