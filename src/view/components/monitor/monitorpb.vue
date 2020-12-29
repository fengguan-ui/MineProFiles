<template>
  <div class="monitorpb">
    <!-- 设备监控 -->
    <!-- 设备状态：在线：#03D6B4     离线：#BABBC0     异常：#FF6C60 -->
    <Row :gutter="64" class="all-Row">
      <div>
        <Col span="12">
          <div class="panel">
            <Row :gutter="16">
              <Col span="10">
                <div class="d-img">
                  <img src="../../../assets/images/五轴机床.png" />
                </div>
              </Col>
              <Col span="14" style="padding-left: 18px">
                <p style="font-size: 18px; margin-top: 20px">
                  智能高速五轴机床 <Tag color="rgb(255, 108, 96)">故障</Tag>
                </p>
                <!-- <p>
                  <font class="p-th">设备状态：</font>
                 
                </p> -->
                <p>
                  <font class="p-th">网络检测：</font>
                  <Tag color="#05caae"> 在线</Tag>
                  <!-- <Tag color="#BABBC0">离线</Tag> -->
                </p>

                <p><font class="p-th">IP地址：</font>192.168.1.100</p>
                <p><font class="p-th">端口：</font>8080</p>
                <Button type="primary">查看详情</Button>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span="12">
          <div class="panel">
            <Row :gutter="16">
              <Col span="10">
                <div class="d-img">
                  <img src="../../../assets/images/五轴机床.png" />
                </div>
              </Col>
              <Col span="14" style="padding-left: 18px">
                <p style="font-size: 18px; margin-top: 20px">
                  智能高速五轴机床 <Tag color="#409EFF">正常</Tag>
                </p>
                <!-- <p>
                  <font class="p-th">设备状态：</font>
                 
                </p> -->
                <p>
                  <font class="p-th">网络检测：</font>
                  <!-- <Tag color="#05caae"> 在线</Tag> -->
                  <Tag color="#BABBC0">离线</Tag>
                </p>

                <p><font class="p-th">IP地址：</font>192.168.1.100</p>
                <p><font class="p-th">端口：</font>8080</p>
                <Button type="primary">查看详情</Button>
              </Col>
            </Row>
          </div>
        </Col>
      </div>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.monitorpb {
  background-color: white;
  border-radius: 20px;
  // min-height: 85vh;
  padding: 20px;
  min-width: 1200px;

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
      height: 24px;
      width: 46px;
      font-size: 13px;
      text-align: center;
      line-height: 23px;
    }
  }
}
</style>