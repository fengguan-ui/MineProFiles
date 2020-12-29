<template>
  <div class="progresscon">
    <p class="p1">工件累计加工数</p>
    <p class="p2">2654<font>件</font></p>
    <p class="p3">
      <Icon type="md-list-box" />历史订单总数统计 <font>952</font>单
    </p>

    <div class="procon">
      <p class="p4">十二生肖<font>78%</font></p>
      <Progress
        :percent="78"
        status="active"
        stroke-color="#6e6efa"
        :stroke-width="8"
      />
    </div>

    <div class="procon">
      <p class="p4">十二生肖<font>55%</font></p>
      <Progress
        :percent="55"
        status="active"
        stroke-color="#f38684"
        :stroke-width="8"
      />
    </div>

    <div class="procon">
      <p class="p4">十二生肖<font>31%</font></p>
      <Progress
        :percent="31"
        status="active"
        stroke-color="#ffb96b"
        :stroke-width="8"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.progresscon {
  padding-left: 24px;

  padding-right: 24px;
  .p1 {
    color: #405c7d;
    font-size: 14px;
    margin-bottom: 10px;
  }
  .p2 {
    color: #405c7d;
    font-size: 36px;
    line-height: 26px;
  }
  .p2 font {
    color: #405c7d;
    font-size: 14px;
    margin-left: 8px;
  }
  .p3 {
    color: rgba(64, 92, 125, 0.6);
    font-size: 14px;

    .ivu-icon {
      margin-right: 8px;
      font-size: 16px;
    }
  }
  .p3 font {
    color: #2d8cf0;
    margin-right: 4px;
    font-weight: bold;
    font-size: 16px;
  }
  .procon {
    margin-top: 24px;
    .p4 {
      font-size: 16px;
      color: #405c7d;
    }
  }
  .p4 font {
    float: right;
    font-weight: bold;
  }
  ::v-deep .ivu-progress-show-info .ivu-progress-outer {
    padding-right: 0;
  }
  ::v-deep .ivu-progress-text {
    display: none;
  }
}
</style>