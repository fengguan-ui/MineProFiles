<template>
  <div class="app-container process-container">
    <Row class="layRow">
      <!-- 左侧树结构 -->
      <Col span="6" class="leftCol">
        <p class="titleInfo">
          工艺结构
          <Icon
            type="md-pin"
            style="vertical-align: -0.12em; margin-left: 8px"
          />
        </p>
        <div class="col-d">
          <Protree />
        </div>
      </Col>
      <!-- 右侧信息 -->
      <Col span="18" class="rightCol">
        <p class="titleInfo">
          工艺信息<Icon
            type="md-create"
            style="vertical-align: -0.12em; margin-left: 8px"
          />
        </p>
        <div class="col-d">
          <!-- 树节点点击为工件时-右侧显示工件信息，工序信息 -->
          <Proinfoform v-show="!visible" />
          <Proinfotab v-show="!visible" />

          <!-- 树节点点击为工序时，右侧显示仅工步信息（表格） -->
          <Protabgb v-show="!visible" />
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
import Protree from "../components/process/protree";

import Proinfoform from "../components/process/proinfoform";
import Proinfotab from "../components/process/proinfotab";

import Protabgb from "../components/process/protabgb";
export default {
  components: {
    Protree: Protree,
    Proinfotab: Proinfotab,
    Proinfoform: Proinfoform,
    Protabgb: Protabgb,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.process-container {
  // 背景处理
  background-color: white;
  border-radius: 20px;
  min-height: 85vh;
  min-width: 1200px;
  // padding-bottom: 20px;

  // 布局
  .layRow {
    // height: 82vh;
    // min-height: 93%;
    min-height: 85vh;
  }
  .col-d {
    height: calc(100% - 85px);
    // overflow-y: auto;
  }
  .leftCol {
    height: 85vh;
    // min-height: 85vh;

    padding: 0 20px 0 20px;
  }
  .rightCol {
    // border-radius: 20px;
    height: 100%;
    min-height: 85vh;
    padding: 0 20px 20px 20px;
    border-left: 1px solid #dcdfe6;
  }
  .titleInfo {
    font-size: 20px;
    font-weight: bold;
    line-height: 68px;
    color: #555555;
    border-bottom: 1px solid #dcdfe6;
    margin-bottom: 16px;
  }
}
</style>