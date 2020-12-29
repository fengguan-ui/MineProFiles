<template>
  <div class="app-container monitor-container">
    <Tabs value="name1" @on-click="onclick">
      <TabPane label="单元一" name="name1">
        <!-- 单元一 -->
        <Monitorpa v-if="tabname == 'name1'" />
      </TabPane>
      <TabPane label="单元二" name="name2">
        <Monitorpb v-if="tabname == 'name2'" />
      </TabPane>
      <TabPane label="单元三" name="name3">
        <Monitorpc v-if="tabname == 'name3'" />
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
import Monitorpa from "../components/monitor/monitorpa";
import Monitorpb from "../components/monitor/monitorpb";
import Monitorpc from "../components/monitor/monitorpc";

export default {
  components: {
    Monitorpa: Monitorpa,
    Monitorpb: Monitorpb,
    Monitorpc: Monitorpc,
  },
  data() {
    return { tabname: "name1" };
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
.monitor-container {
  background-color: white;
  border-radius: 20px;
  min-height: 85vh;
  padding: 20px;
  min-width: 1200px;
  ::v-deep .ivu-tabs-nav .ivu-tabs-tab {
    font-size: 16px;
    font-weight: bold;
  }
  .panel {
    //   width: 80%;
    height: 246px;
    background-color: #f6f7f9;
    border-radius: 10px;
  }
  .all-Row {
    // padding-left: 200px;
    // padding-right: 200px;
    margin-bottom: 16px;
    min-width: 1200px;
  }
  .d-img {
    width: 210px;
    height: 210px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin-top: 18px;
    margin-left: 18px;
  }
  .d-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  .panel p {
    font-size: 16px;
    font-weight: bold;
    color: #555555;
    line-height: 42px;

    .p-th {
      color: #b3b9c1;
    }
    .ivu-tag {
      height: 32px;
      width: 54px;
      font-size: 14px;
      text-align: center;
      line-height: 31px;
    }
  }
}
</style>