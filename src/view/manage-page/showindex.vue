<template>
  <div class="app-container show-container">
    <!-- 产线监控、设备状态、 -->
    <Row :gutter="16" class="row1">
      <Col span="16" class="colpadd">
        <div class="bgcon">
          <div class="colcontain colc1">
            <img src="../../assets/images/cx.png" />
          </div>
        </div>
      </Col>

      <Col span="8" class="colpadd">
        <div class="bgcon">
          <div class="colcontain colc2">
            <p class="stitle">
              <Icon type="md-git-merge" />设备状态<Icon type="ios-more" />
            </p>
            <!-- 设备状态显示，滚动 -->
            <Monitor />
          </div></div
      ></Col>
    </Row>

    <!-- 累计加工统计、订单列表、今日计划及良率 -->
    <Row :gutter="16" class="row2">
      <!-- 累计加工、订单列表 -->
      <Col span="6" class="colpadd">
        <div class="bgcon">
          <div class="colcontain colc3">
            <p class="stitle">
              <Icon type="md-stats" />累计加工数量<Icon type="ios-more" />
            </p>
            <Showprogress />
          </div>
        </div>
      </Col>

      <Col span="10" class="colpadd">
        <div class="bgcon">
          <div class="colcontain colc4">
            <p class="stitle">
              <Icon type="md-apps" />订单详情列表<Icon type="ios-more" />
            </p>
            <Showddtable />
          </div>
        </div>
      </Col>

      <!-- 今日计划 -->
      <Col span="8" class="colpadd">
        <div class="bgcon">
          <div class="colcontain colc5">
            <p class="stitle">
              <Icon type="md-time" />今日计划及良率<Icon type="ios-more" />
            </p>
            <Showplan />
          </div></div
      ></Col>
    </Row>
  </div>
</template>
<script>
import Monitor from "../components/dashboard/monitorstate";
import Showddtable from "../components/dashboard/showddtable";
import Showprogress from "../components/dashboard/showprogress";
import Showplan from "../components/dashboard/showplan";

export default {
  components: {
    Monitor: Monitor,
    Showddtable: Showddtable,
    Showprogress: Showprogress,
    Showplan: Showplan,
  },
  data() {
    return {};
  },
};
</script>

  <style lang="scss" scoped>
.show-container {
  min-width: 1200px;
  .bgcon {
    background-color: white;
    // height: 100%;
    border-radius: 10px;
    height: 100%;
  }
  .row1 {
    height: 404px;
    margin-bottom: 16px;
  }
  .row2 {
    height: 400px;
  }
  .colpadd {
    // padding: 8px;
    height: 100%;
  }
  .colcontain {
    padding: 20px;
    height: 100%;
  }
  .colc1 img {
    object-fit: cover;
    // height: 100%;
    width: 100%;
  }
  .colc1 {
    display: flex;
    align-content: center;
    align-items: center;
  }

  .stitle {
    color: #555;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
    .ivu-icon {
      margin-right: 8px;
    }
    .ivu-icon-ios-more {
      float: right;
    }
  }
}
</style>