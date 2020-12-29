<template>
  <div class="showContainer clearfix">
    <!-- 标题-时间 -->
    <div class="showTitle">
      <Row :gutter="16">
        <Col span="17">
          <!-- 大标题 -->
          <img src="../../assets/images/show-title.png"
        /></Col>
        <Col span="7" style="padding-right: 26px">
          <!-- 系统时间 -->

          <Row
            style="
              padding-top: 10px;
              border-bottom: 1px solid #173d5b;
              height: 76px;
            "
          >
            <Col span="14" offset="10">
              <Row :gutter="16">
                <Col span="5">
                  <div class="sysTime">
                    <Icon type="ios-time-outline" />
                  </div>
                </Col>
                <Col span="8">
                  <p class="time-p1">时间</p>
                  <p class="time-p2">SYSTEM TIME</p>
                </Col>
                <Col span="11">
                  <p class="time-p3">{{ time }}</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>

    <div class="showBody">
      <!-- 产线图-设备信息滚动 -->
      <Row :gutter="16" class="rowbody1">
        <Col span="17" class="l1">
          <div class="d1-title">
            <!-- 标题 -->
            <p><Icon type="md-navigate" class="d1-icon" />产线运行安全监控</p>
            <p>Production line operation monitoring</p>
          </div>

          <div class="d2-tulist">
            <!-- 设备监控统计 -->
            <div class="listCon l-1">
              <p>设备监测数据</p>
            </div>
            <div class="listCon l-2">
              <p>
                总数<font>{{ listData.length }}</font
                >台
              </p>
            </div>
            <div class="listCon l-3">
              <p>
                正常<font>{{ listData.length }}</font
                >台
              </p>
            </div>
            <div class="listCon l-4">
              <p>异常<font>0</font>台</p>
            </div>
          </div>

          <div style="padding-top: 40px">
            <img src="../../assets/images/l1img.png" height="540px" />
          </div>
        </Col>

        <Col span="7" class="r1">
          <!-- 设备信息-自动滚动 -->
          <div class="r1-2">
            <div class="title">
              <p>
                <i class="icon-t1"></i>
                <font>设备信息</font>

                <i class="icon-t2"></i>
              </p>
            </div>

            <div class="container">
              <vue-seamless-scroll
                :data="listData"
                class="seamless-warp"
                :class-option="optionSingleHeight"
              >
                <Row class="item">
                  <Col span="24" v-for="(item, index) in listData" :key="index">
                    <Row :gutter="8" class="rowLi">
                      <Col span="6" class="leftIndex">
                        <div class="dbg">
                          <p>{{ `0${++index}` }}</p>
                        </div>
                      </Col>
                      <Col span="18" class="rightInfo">
                        <div class="dbg" style="padding-left: 28px">
                          <p>
                            <i class="icontitle"></i>
                            {{ item.Name }}
                            <font>
                              {{ item.State }}
                            </font>
                          </p>
                          <p>
                            <Row :gutter="16">
                              <Col span="14">
                                <Icon type="ios-wifi" class="iconwifi" />
                                <font style="color: #88ceff">{{
                                  item.NetState
                                }}</font>
                                <font style="margin-left: 8px"
                                  >IP:{{ item.IP }}</font
                                >
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

              <span class="lineBottom" style="left: 8px"></span>
              <span class="lineBottom" style="right: 8px"></span>
            </div>
          </div>
        </Col>
      </Row>
      <!-- 订单-累计加工 -->
      <Row :gutter="16" class="rowbody2">
        <Col span="17">
          <div class="title">
            <p>
              <i class="icon-t1"></i>
              <font>订单列表</font>

              <i class="icon-t2"></i>
            </p>
          </div>
          <div class="container">
            <Table
              stripe
              :columns="columns1"
              :data="data1"
              class="showddlist"
            ></Table>
          </div>
        </Col>

        <Col span="7">
          <!-- 累计加工统计 -->
          <div class="title">
            <p>
              <i class="icon-t1"></i>
              <font>累计加工统计</font>

              <i class="icon-t2"></i>
            </p>
          </div>

          <div class="container">
            <div class="charts">
              <Row>
                <Col span="4" class="chartcol">
                  <div class="barBG">
                    <Progress
                      vertical
                      :percent="45"
                      status="active"
                      hide-info
                      :stroke-width="30"
                    />
                  </div>
                  <div class="textBg">
                    <p>1356</p>
                    <p>校徽</p>
                  </div>
                </Col>
                <Col span="4" class="chartcol">
                  <div class="barBG">
                    <Progress
                      vertical
                      :percent="45"
                      status="active"
                      hide-info
                      :stroke-width="30"
                    />
                  </div>
                  <div class="textBg">
                    <p>1356</p>
                    <p>校徽</p>
                  </div>
                </Col>
                <Col span="4" class="chartcol">
                  <div class="barBG">
                    <Progress
                      vertical
                      :percent="45"
                      status="active"
                      hide-info
                      :stroke-width="30"
                    />
                  </div>
                  <div class="textBg">
                    <p>1356</p>
                    <p>校徽</p>
                  </div>
                </Col>
                <Col span="4" class="chartcol">
                  <div class="barBG">
                    <Progress
                      vertical
                      :percent="45"
                      status="active"
                      hide-info
                      :stroke-width="30"
                    />
                  </div>
                  <div class="textBg">
                    <p>1356</p>
                    <p>校徽</p>
                  </div>
                </Col>
                <Col span="4" class="chartcol">
                  <div class="barBG">
                    <Progress
                      vertical
                      :percent="45"
                      status="active"
                      hide-info
                      :stroke-width="30"
                    />
                  </div>
                  <div class="textBg">
                    <p>1356</p>
                    <p>校徽</p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>

    <!-- 标底 -->
    <Row class="showbottom">
      <Col span="24">
        <img src="../../assets/images/show-bottom.png" width="100%" />
      </Col>
    </Row>
  </div>
</template>
<script>
// import moment from "moment";
// import bigScreen from "@/api/dashboard/bigScreen";
export default {
  data() {
    return {
      columns1: [
        {
          title: "订单名",
          key: "name",
        },
        {
          title: "工件类型",
          key: "type",
        },
        {
          title: "车工序",
          key: "g1",
          render: (h, params) => {
            if (params.row.g1 === "未开始") {
              return h(
                "span",
                {
                  style: {
                    color: "#FC857F",
                  },
                },
                params.row.g1
              );
            } else if (params.row.g1 === "进行中") {
              return h(
                "span",
                {
                  style: {
                    color: "#41C3FF",
                  },
                },
                params.row.g1
              );
            } else {
              return h("span", {}, params.row.g1);
            }
          },
        },
        {
          title: "铣工序",
          key: "g2",
          render: (h, params) => {
            if (params.row.g2 === "未开始") {
              return h(
                "span",
                {
                  style: {
                    color: "#FC857F",
                  },
                },
                params.row.g2
              );
            } else if (params.row.g2 === "进行中") {
              return h(
                "span",
                {
                  style: {
                    color: "#41C3FF",
                  },
                },
                params.row.g2
              );
            } else {
              return h("span", {}, params.row.g2);
            }
          },
        },
        {
          title: "状态",
          key: "state",
          render: (h, params) => {
            if (params.row.state === "未启动") {
              return h("div", [
                h("Icon", {
                  props: {
                    type: "md-remove",
                  },
                  style: {
                    color: "#FC857F",
                    background: "#3E272D",
                  },
                }),
                h("span", params.row.state),
              ]);
            } else if (params.row.state === "执行中") {
              return h("div", [
                h("Icon", {
                  props: {
                    type: "md-more",
                  },
                  style: {
                    color: "#41C3FF",
                    background: "#223345",
                    transform: "rotate(90deg)",
                  },
                }),
                h("span", params.row.state),
              ]);
            } else {
              return h("div", [
                h("Icon", {
                  props: {
                    type: "md-checkmark",
                  },
                  style: {
                    color: "#1BF7D7",
                    // fontSize: "22px",
                    background: "#1B393B",
                  },
                }),
                h("span", params.row.state),
              ]);
            }
          },
        },
      ],

      data1: [
        {
          name: "J022026",
          type: "生肖猪",
          g1: "进行中",
          g2: "进行中",
          state: "执行中",
        },
        {
          name: "J022026",
          type: "生肖猪",
          g1: "未开始",
          g2: "未开始",
          state: "未启动",
        },
        {
          name: "J022026",
          type: "生肖猪",
          g1: "进行中",
          g2: "未开始",
          state: "执行中",
        },
        {
          name: "J022026",
          type: "生肖猪",
          g1: "已完成",
          g2: "已完成",
          state: "已完成",
        },
        {
          name: "J022026",
          type: "生肖猪",
          g1: "已完成",
          g2: "已完成",
          state: "已完成",
        },
      ],

      // 设备信息-自动滚动组件
      listData: [
        // {
        //   index: "01",
        //   title: "1号五轴加工中心",
        //   state1: "连接故障",
        //   state2: "在线",
        //   ip: "192.168.1.125",
        //   dkh: "1236",
        // },
        // {
        //   index: "02",
        //   title: "AGV小车",
        //   state1: "正常",
        //   state2: "离线",
        //   ip: "192.168.1.125",
        //   dkh: "1236",
        // },
        // {
        //   index: "03",
        //   title: "机器人",
        //   state1: "连接故障",
        //   state2: "在线",
        //   ip: "192.168.1.125",
        //   dkh: "1236",
        // },
        // {
        //   index: "04",
        //   title: "2号五轴加工中心",
        //   state1: "连接故障",
        //   state2: "在线",
        //   ip: "192.168.1.125",
        //   dkh: "1236",
        // },
        // {
        //   index: "05",
        //   title: "激光打标机",
        //   state1: "连接故障",
        //   state2: "在线",
        //   ip: "192.168.1.125",
        //   dkh: "1236",
        // },
        // {
        //   index: "06",
        //   title: "AGV小车",
        //   state1: "连接故障",
        //   state2: "在线",
        //   ip: "192.168.1.125",
        //   dkh: "1236",
        // },
        // {
        //   index: "07",
        //   title: "2号机器人",
        //   state1: "连接故障",
        //   state2: "在线",
        //   ip: "192.168.1.125",
        //   dkh: "1236",
        // },
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
        singleHeight: 120,
        // 停顿时间
        waitTime: 2000,
      };
    },
  },
  methods: {
    getData() {
      return bigScreen.getData().then((data) => {
        console.log(data);
        this.listData = data;
      });
    },
  },
  mounted() {
    this.getData();
    setInterval(() => {
      this.time = moment(new Date()).format("HH:mm");
    }, 1000);
  },
};
</script>
<style lang="scss" scoped>
.showContainer {
  //   background: linear-gradient(0deg, #02050c, #082032);
  background-image: url("../../assets/images/showbg.jpg");
  //   height: 100%;
  width: 100%;
  // 累计加工统计
  .container .charts {
    padding-top: 14px;
    .ivu-row .ivu-col:last-child {
      margin-right: 0;
    }
    .chartcol {
      margin-right: 20px;
    }
    .barBG {
      text-align: center;
      background-color: rgba(77, 123, 160, 0.06);
      height: 190px;
      ::v-deep .ivu-progress-active .ivu-progress-bg:before {
        border-radius: 0;
      }
      ::v-deep .ivu-progress-bg {
        border-radius: 0;
        background-image: linear-gradient(#27b5ea, #1374b6);
        // opacity: 0.5;
      }
      ::v-deep .ivu-progress-inner {
        background-color: rgba(243, 243, 243, 0);
      }
    }
    .textBg {
      background-color: rgba(23, 60, 91, 0.3);
      height: 70px;
      margin-top: 8px;
      padding-top: 8px;
    }
    .textBg p:nth-child(1) {
      font-size: 20px;
      font-family: "mplus-regular";
      font-weight: bold;
      font-style: italic;
      color: #ffffff;
      text-align: center;
    }
    .textBg p:nth-child(2) {
      font-size: 16px;
      font-weight: 400;
      color: #515a6e;
      text-align: center;
    }
  }
  // 设备信息
  .lineBottom {
    display: block;
    width: 8px;
    height: 2px;
    background-color: #ffce79;
    position: absolute;
    z-index: 9;
    bottom: 0;
  }
  .icontitle {
    display: block;
    background-image: url("../../assets/images/show-icontitle.png");
    width: 24px;
    height: 24px;
    background-position: center center;
    background-repeat: no-repeat;
    float: left;
    margin-right: 8px;
  }
  .iconwifi {
    width: 26px;
    text-align: center;
    font-size: 20px;
    margin-right: 6px;
    color: #88ceff;
  }
  .seamless-warp {
    height: 460px;
    overflow: hidden;
  }
  .rowLi {
    margin-bottom: 20px;
  }
  .leftIndex .dbg,
  .rightInfo .dbg {
    background: rgba(136, 206, 255, 0.03);
    border: 1px solid rgba(136, 206, 255, 0.1);
    height: 100px;
  }
  .leftIndex .dbg p {
    font-size: 32px;
    font-family: "mplus-regular";
    font-weight: 400;
    color: #88ceff;
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
      color: #ffffff;
      margin-top: 24px;
      margin-bottom: 2px;
    }
    .dbg p:nth-child(1) font {
      font-size: 15px;
      font-weight: bold;
      font-style: italic;
      color: #ffce79;
      text-align: right;
      float: right;
      margin-right: 26px;
    }
    .dbg p:nth-child(2) {
      font-size: 14px;
      font-weight: bold;
      color: #515a6e;
    }
  }
  // 设备信息

  .d2-tulist {
    position: absolute;
    z-index: 9;
    bottom: 40px;
    left: 30px;
    .listCon {
      width: 148px;
      color: #7ba6c8;
    }
    .l-1 {
      height: 54px;
      line-height: 54px;
      font-size: 18px;
      text-align: center;
      background-image: url("../../assets/images/d-l1.png");
      margin-bottom: 6px;
    }
    .l-2,
    .l-3,
    .l-4 {
      height: 48px;
      line-height: 36px;
      font-size: 16px;
      background-image: url("../../assets/images/d-l2.png");
      margin-bottom: 4px;
      padding-left: 19px;
    }
    .l-2 font,
    .l-3 font,
    .l-4 font {
      font-size: 32px;
      margin-left: 28px;
      font-family: "mplus-regular";
      top: 5px;
      position: relative;
      margin-right: 6px;
    }
    .l-2 font {
      color: #f7b36c;
    }
    .l-3 font {
      color: #88ceff;
    }
    .l-4 font {
      color: #db665c;
    }
  }
  .d1-title {
    width: 292px;
    height: 100px;
    padding-top: 18px;
    top: 40px;
    left: 30px;
    position: absolute;
    z-index: 9;
    background-image: url("../../assets/images/d1-titleBg.png");

    .d1-icon {
      transform: rotate(90deg);
      -ms-transform: rotate(90deg); /* IE 9 */
      -moz-transform: rotate(90deg); /* Firefox */
      -webkit-transform: rotate(90deg); /* Safari 和 Chrome */
      -o-transform: rotate(90deg);
    }
  }
  .d1-title p:nth-child(1) {
    font-size: 28px;
    font-weight: 400;
    color: #88ceff;
    letter-spacing: 2px;
  }
  .d1-title p:nth-child(2) {
    font-size: 12px;
    font-weight: 400;
    color: #88ceff;
    text-transform: uppercase;
    padding-left: 2px;
  }
  // 右上角时间
  .sysTime {
    width: 54px;
    height: 54px;
    background-color: #063d64;
    border: 1px #9bcaf9 solid;
    color: #9bcaf9;
    border-radius: 50%;
    text-align: center;
    line-height: 50px;
    font-size: 30px;
  }
  .time-p1 {
    font-size: 22px;
  }
  .time-p2 {
    font-size: 12px;
  }
  .time-p3 {
    font-size: 40px;
    color: #9bcaf9;
    font-family: "mplus-regular";
  }
  .time-p1,
  .time-p2 {
    font-weight: 400;
    color: #fefefe;
  }
  // end
  /* 清除浮动 */
  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .rowbody1 {
    height: 612px;
    margin-bottom: 16px;
  }
  .rowbody2 {
    height: 338px;

    .ivu-col {
      height: 100%;
    }
  }
  .showBody {
    padding-left: 26px;
    padding-right: 26px;
  }
  .showBody .l1 {
    background-image: url("../../assets/images/show-border.png");
    height: 100%;
    background-repeat: no-repeat;
    background-position-x: 5px;
  }

  .title {
    height: 38px;
    line-height: 38px;
    background-color: rgba(23, 61, 91, 0.2);
    border-top: 1px #18364d solid;
    border-bottom: 1px #18364d solid;
    border-left: 4px #88ceff solid;
    border-right: 4px #18364d solid;
    color: white;
  }
  .title p {
    height: 36px;
    line-height: 36px;

    .icon-t1,
    .icon-t2 {
      display: block;
      height: 36px;
      width: 36px;
    }
    .icon-t1 {
      float: left;
      background-image: url("../../assets/images/icon-t1.png");
    }
    .icon-t2 {
      float: right;
      background-image: url("../../assets/images/icon-t2.png");
    }
  }
  .title font {
    font-size: 18px;
  }
  .r1,
  .r1-2 {
    height: 100%;
  }
  .container {
    height: calc(100% - 46px);
    background-color: rgba(23, 61, 91, 0.2);
    margin-top: 8px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 14px;
  }
  .r1 .container {
    padding-top: 46px;
    border-bottom: 1px #173d5b solid;
  }
  .showTitle {
    .ivu-row {
      margin-left: 0 !important;
      margin-right: 0 !important;
      .ivu-col {
        padding-left: 0 !important;
      }
    }
  }
  //   订单列表表格
  ::v-deep .ivu-table:before {
    background-color: rgba(23, 61, 91, 0);
  }
  ::v-deep .ivu-table,
  ::v-deep .ivu-table th,
  ::v-deep .ivu-table td {
    background-color: rgba(23, 61, 91, 0);
  }
  ::v-deep .ivu-table-stripe .ivu-table-body tr:nth-child(2n) td,
  ::v-deep .ivu-table-stripe .ivu-table-fixed-body tr:nth-child(2n) td {
    background-color: rgba(23, 61, 91, 0);
  }
  //
  ::v-deep .ivu-table-stripe .ivu-table-body tr:nth-child(odd) td,
  ::v-deep .ivu-table-stripe .ivu-table-fixed-body tr:nth-child(odd) td {
    background-color: rgba(14, 31, 48, 0.5);
  }
  ::v-deep .ivu-table th,
  ::v-deep .ivu-table td {
    border: none;
  }
  //表格字体
  ::v-deep .ivu-table-header tr {
    font-size: 16px;
  }
  ::v-deep .ivu-table-body tr {
    font-size: 18px;
    font-weight: bold;
    color: white;
  }
  ::v-deep .showBody .ivu-col-span-7 {
    // padding-left: 16px;
  }

  //
  .showbottom {
    margin-top: 2px;
  }
  .showddlist {
    ::v-deep .ivu-icon {
      width: 36px;
      height: 36px;
      border-radius: 6px;
      line-height: 36px;
      text-align: center;
      margin-right: 8px;
    }
  }
}
</style>