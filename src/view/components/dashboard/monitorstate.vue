  <template>
  <div class="monitorcon">
    <vue-seamless-scroll
      :data="listData"
      class="seamless-warp"
      :class-option="optionSingleHeight"
    >
      <Row class="item">
        <Col span="24" v-for="(item, index) in listData" :key="index">
          <Row :gutter="8" class="rowLi">
            <Col span="4" class="leftIndex">
              <div class="dbg" style="padding-left: 8px">
                <p>{{ `0${++index}` }}</p>
              </div>
            </Col>
            <Col span="20" class="rightInfo">
              <div class="dbg" style="padding-left: 8px">
                <p>
                  <i class="icontitle"></i>
                  {{ item.title }}
                  <font>
                    {{ item.state1 }}
                  </font>
                </p>
                <p>
                  <Row :gutter="16">
                    <Col span="14">
                      <Icon
                        type="ios-wifi"
                        class="iconwifi"
                        :style="{
                          color:
                            item.state2 == '离线'
                              ? 'rgba(64,92,125,0.6)'
                              : '#2d8cf0',
                        }"
                      />
                      <font
                        :style="{
                          color:
                            item.state2 == '离线'
                              ? 'rgba(64,92,125,0.6)'
                              : '#2d8cf0',
                        }"
                        >{{ item.state2 }}</font
                      >
                      <font style="margin-left: 8px">IP:{{ item.ip }}</font>
                    </Col>
                    <Col span="10">
                      <font>端口号：{{ item.Port }} </font></Col
                    >
                  </Row>
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </vue-seamless-scroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 设备信息-自动滚动组件
      listData: [
        {
          index: "01",
          title: "1号五轴加工中心",
          state1: "连接故障",
          state2: "在线",
          ip: "192.168.1.125",
          Port: "1236",
        },
        {
          index: "02",
          title: "AGV小车",
          state1: "正常",
          state2: "离线",
          ip: "192.168.1.125",
          Port: "1236",
        },
        {
          index: "03",
          title: "机器人",
          state1: "连接故障",
          state2: "离线",
          ip: "192.168.1.125",
          Port: "1236",
        },
        {
          index: "04",
          title: "2号五轴加工中心",
          state1: "连接故障",
          state2: "在线",
          ip: "192.168.1.125",
          Port: "1236",
        },
        {
          index: "05",
          title: "激光打标机",
          state1: "连接故障",
          state2: "离线",
          ip: "192.168.1.125",
          Port: "1236",
        },
        {
          index: "06",
          title: "AGV小车",
          state1: "连接故障",
          state2: "在线",
          ip: "192.168.1.125",
          Port: "1236",
        },
        {
          index: "07",
          title: "2号机器人",
          state1: "连接故障",
          state2: "离线",
          ip: "192.168.1.125",
          Port: "1236",
        },
      ],
      // 自动滚动组件,
      time: "", //系统时间
    };
  },
  computed: {
    // 设备信息滚动播放
    optionSingleHeight() {
      return {
        // 一行停顿的高度
        singleHeight: 108,
        // 停顿时间
        waitTime: 3000,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.seamless-warp {
  height: 324px;
  overflow: hidden;
}
.icontitle {
  display: block;
  background-image: url("../../../assets/images/show-icontitle.png");
  width: 24px;
  height: 24px;
  background-position: center center;
  background-repeat: no-repeat;
  float: left;
  margin-right: 8px;
}
.rowLi {
  background-color: #f7f7f9;
  margin-bottom: 8px;
}
.iconwifi {
  width: 26px;
  text-align: center;
  font-size: 20px;
  margin-right: 6px;
  //   color: #8c9db1;
}

.leftIndex .dbg,
.rightInfo .dbg {
  //   background: rgb(57, 101, 133);
  //   border: 1px solid rgba(66, 106, 134, 1);
  //   height: 100px;
}
.leftIndex .dbg p {
  font-size: 22px;
  font-family: "mplus-regular";
  font-weight: bold;
  color: #555;
  line-height: 100px;
  text-align: center;
}
.rightInfo {
  .dbg p {
    // padding-left: 28px;
  }
  .dbg p:nth-child(1) {
    font-size: 18px;
    font-weight: bold;
    color: #383838;
    margin-top: 24px;
    margin-bottom: 2px;
  }
  .dbg p:nth-child(1) font {
    font-size: 15px;
    font-weight: bold;
    font-style: italic;
    color: #fc857f;
    text-align: right;
    float: right;
    margin-right: 26px;
  }
  .dbg p:nth-child(2) {
    font-size: 14px;
    font-weight: bold;
    color: rgba(64, 92, 125, 0.6);
  }
}
</style>