<template>
  <div class="app-container statics-container">
    <!-- 统计分析 -->

    <!-- 柱状图 class="bar1"  -->
    <Row :gutter="16">
      <Col span="14">
        <div class="bar1 bar1-1">
          <p class="panelTitle">
            <Icon
              type="ios-podium"
              style="background-color: #409eff"
            />工件类型统计
            <RadioGroup v-model="border" style="float: right">
              <Radio label="一周" border></Radio>
              <Radio label="一月" border></Radio>
              <Radio label="一年" border></Radio>
            </RadioGroup>
          </p>

          <div style="width: 100%; height: 100%" ref="chart"></div>
        </div>
      </Col>
      <Col span="10">
        <div class="bar1 bar1-1 pie">
          <p class="panelTitle">
            <Icon type="md-pie" style="background-color: #61cad7" />设备在线 /
            离线统计
          </p>

          <Row style="height: calc(100% - 52px)">
            <Col span="9">
              <div class="pielist">
                <Row>
                  <Col span="12"> 机床</Col>
                  <Col span="12"><p class="pn2">2台</p></Col>
                </Row>
                <Row>
                  <Col span="12"> 机器人</Col>
                  <Col span="12"><p class="pn2">2台</p></Col>
                </Row>
                <Row>
                  <Col span="12"> AGV</Col>
                  <Col span="12"><p class="pn2">1台</p></Col>
                </Row>
                <Row>
                  <Col span="12"> 激光打标</Col>
                  <Col span="12"><p class="pn2">1台</p></Col>
                </Row>
                <Row>
                  <Col span="12"> 激光打标</Col>
                  <Col span="12"><p class="pn2">1台</p></Col>
                </Row>
              </div>
            </Col>
            <Col span="15">
              <div
                style="width: 100%; height: calc(100% - 128px)"
                ref="pchart"
              ></div>
              <Row class="tj-pie">
                <Col span="8">
                  <div class="td1"><Icon type="md-bulb" /></div>
                  <p class="pnum">7</p>
                  <p class="ptext">设备总数(台)</p>
                </Col>

                <Col span="8">
                  <div class="td2"><Icon type="ios-wifi" /></div>
                  <p class="pnum">2</p>
                  <p class="ptext">在线(台)</p>
                </Col>

                <Col span="8">
                  <div class="td3"><Icon type="ios-wifi-outline" /></div>
                  <p class="pnum">5</p>
                  <p class="ptext">离线(台)</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>

    <Row style="margin-top: 16px">
      <Col span="24">
        <div class="bar1 bar1-2">
          <p class="panelTitle">
            <Icon
              type="ios-pulse"
              style="background-color: #f9b54f"
            />订单数据分析
          </p>
          <div ref="chart2" style="width: 100%; height: 480px"></div>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
// 局部引用echarts
const echarts = require("echarts");
export default {
  data() {
    return {
      border: "一周",
      chart: {},
    };
  },
  methods: {
    //   柱状图
    initCharts() {
      let myChart = echarts.init(this.$refs.chart);
      // window.onresize = myChart.resize;
      // 绘制图表
      myChart.setOption({
        // title: { text: "在Vue中使用echarts" },
        tooltip: {},
        xAxis: {
          name: "工件类型",
          data: [
            "校徽",
            "酥油灯",
            "工件",
            "工件",
            "工件工件",
            "工件",
            "工件工件",
          ],
        },
        yAxis: {
          name: "(产量)",
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
            },
          },
        },
        series: [
          {
            name: "产量",
            type: "bar",
            data: [5, 20, 36, 27, 20, 15, 10],
            showBackground: true,
            backgroundStyle: {
              color: "rgba(152, 193, 235, 0.2)",
              width: "80px",
            },
            itemStyle: {
              normal: {
                color: "rgba(64, 158, 255, 1)", //设置柱子颜色
                barBorderRadius: [30, 30, 0, 0],
                label: {
                  show: true, //柱子上显示值--未生效
                  fontSize: 16,
                  fontWeight: "bold",
                  position: "top", //值在柱子上方显示--未生效
                  textStyle: {
                    color: "#555555", //值得颜色
                  },
                },
              },
            },
            barWidth: 20, //设置柱子宽度，单位为px
          },
        ],
      });
      //防止越界，重绘canvas
      //window.onresize = myChart.resize;
      //myChart.setOption(option); //设置option
    },

    // 订单数据分析-趋势图
    initCharts2() {
      //this.chart = echarts.init(document.getElementById("main"));
      let chart = echarts.init(this.$refs.chart2);
      var gzData = [
        12.6 * 5,
        25.9 * 5,
        9.0 * 5,
        62.4 * 5,
        28.7 * 5,
        70.7 * 5,
        45.6 * 5,
        82.2 * 5,
        48.7 * 5,
        18.8 * 5,
        26.0 * 5,
        22.3 * 5,
      ];
      var bjData = [
        13.9 * 5,
        15.9 * 5,
        11.1 * 5,
        18.27 * 5,
        48.3 * 5,
        69.2 * 5,
        31.6 * 5,
        46.6 * 5,
        55.4 * 5,
        28.4 * 5,
        20.23 * 5,
        10.7 * 5,
      ];
      var XData = [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ];
      var option2 = {
        title: {
          // text: "历年使用情况",
          x: "left",
        },
        tooltip: {
          trigger: "axis",
          backgroundColor: "white",
          textStyle: {
            color: "#000",
          },
          formatter: function (value) {
            const a0 = value[0] ? value[0].seriesName : "";
            const a1 = value[1] ? value[1].seriesName : "";
            const c0 = value[0] ? parseFloat(value[0].data) : "";
            const c1 = value[1] ? parseFloat(value[1].data) : "";
            let sum = c0 + c1;
            if (c0 != "" && c1 != "") {
              sum = sum.toFixed(2); //保留两位小数
            }
            const b = value[0] ? value[0].name : "";

            var pcent = ((Math.abs(c0 - c1) / sum) * 100).toFixed(2); //百分比

            var atext = "";
            var btext = "";
            if (c0 != "") {
              //2019
              if (c0 > c1)
                atext = `<p style="text-align:left;"><span>${a0}：</span><span><strong>${c0.toFixed(
                  2
                )}</strong> 单</span><span style="color:red;margin-left:10px;">${pcent}%</span><span style="color:red;">&#9650</span></p>`;
              else
                atext = `<p style="text-align:left;"><span>${a0}：</span><span><strong>${c0.toFixed(
                  2
                )}</strong> 单</span><span style="color:#00a854;margin-left:10px;">${pcent}%</span><span style="color:#00a854;">&#9660</span></p>`;
            }
            if (c1 != "") {
              if (c1 > c0)
                btext = `<p style="text-align:left;"><span>${a1}：</span><span><strong>${c1.toFixed(
                  2
                )}</strong> 单</span><span style="color:red;margin-left:10px;">${pcent}%</span><span style="color:red;">&#9650</span></p>`;
              else
                btext = `<p style="text-align:left;"><span>${a1}：</span><span><strong>${c1.toFixed(
                  2
                )}</strong> 单</span><span style="color:#00a854;margin-left:10px;">${pcent}%</span><span style="color:#00a854;">&#9660</span></p>`;
            }
            var all = `<p style="text-align:left;"><span>全部：</span><span><strong>${sum}</strong> 单</span></p>`;
            return `${all}${atext}${btext}`;
          },
        },
        legend: {
          icon: "roundRect",
          right: 10,
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            name: "月份",
            type: "category",
            axisPointer: {
              type: "shadow",
              shadowStyle: {
                color: "blue",
                opacity: 0.05,
              },
            },
            boundaryGap: false,
            data: XData,
          },
        ],
        yAxis: [
          {
            name: "(订单数量)",
            type: "value",
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed",
              },
            },
          },
        ],
        series: [
          {
            id: "y0",
            name: "2019年",
            type: "line",
            smooth: true,
            color: "orange",
            symbol: "circle",
            areaStyle: {
              opacity: 0.3,
              color: {
                type: "linear",
                x: 1,
                y: 0,
                x: 1,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "orange", //0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "white", // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺省为 false
              },
            },
            data: gzData,
          },
          {
            id: "y1",
            name: "2018年",
            type: "line",
            smooth: true,
            color: "red",
            // hoverAnimation:true,
            symbol: "circle",
            areaStyle: {
              opacity: 0.3,
              color: {
                type: "linear",
                x: 1,
                y: 0,
                x: 1,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "red",
                  },
                  {
                    offset: 1,
                    color: "white",
                  },
                ],
                globalCoord: false,
              },
            },
            data: bjData,
          },
          {
            name: "2019年",
            type: "effectScatter",
            coordinateSystem: "cartesian2d",
            data: bjData, //2d坐标系
            symbol: "circle",
            symbolSize: 10,
            showEffectOn: "emphasis",
            rippleEffect: {
              brushType: "stroke",
            },
            itemStyle: {
              normal: {
                color: "red",
                borderColor: "white",
              },
            },
            zlevel: 1,
            tooltip: {
              trigger: "item",
              backgroundColor: "white",
              textStyle: {
                color: "#000",
              },
              formatter:
                '<span style="font-size:20px;color: #0a080b"><strong>{c0}</strong></span><span style="color: #0a080b">小时&nbsp;&nbsp;&nbsp;</span><span style="color: green">2.85%</span><span class="test1" >&#9660<style>\n' +
                ".test1{color:green }\n" +
                "</style></span></br>" +
                '<span style="color: #0a080b">{b0}</span>',
            },
          },
          {
            name: "2018年",
            type: "effectScatter",
            coordinateSystem: "cartesian2d",
            data: gzData, //2d坐标系
            symbolSize: 10,
            showEffectOn: "emphasis",
            rippleEffect: {
              brushType: "stroke",
            },
            itemStyle: {
              normal: {
                color: "orange",
                borderColor: "white",
              },
            },
            tooltip: {
              trigger: "item",
              backgroundColor: "white",
              textStyle: {
                color: "#000",
              },
              formatter:
                '<span style="font-size:20px;color: #0a080b"><strong>{c0}</strong></span><span style="color: #0a080b">小时&nbsp;&nbsp;&nbsp;</span><span style="color: red">2.85%</span><span class="test1" >&#9650<style>\n' +
                ".test1{color:red }\n" +
                "</style></span></br>" +
                '<span style="color: #0a080b">{b0}</span>',
            },
            zlevel: 1,
          },
        ],
      };
      chart.setOption(option2);
    },

    // 设备在离线环饼图
    initCharts3() {
      let pieChart = echarts.init(this.$refs.pchart);

      let bgColor = "#fff";
      let title = "设备总数";
      let color = ["#61cad7", "#d7dbdc"];
      let echartData = [
        {
          name: "在线",
          value: "2",
        },
        {
          name: "离线",
          value: "5",
        },
      ];

      let formatNumber = function (num) {
        let reg = /(?=(\B)(\d{3})+$)/g;
        return num.toString().replace(reg, ",");
      };
      let total = echartData.reduce((a, b) => {
        return a + b.value * 1;
      }, 0);

      // 绘制图表
      pieChart.setOption({
        backgroundColor: bgColor,
        color: color,

        title: [
          {
            text: "{name|" + title + "}\n{val|" + formatNumber(total) + "}",
            top: "center",
            left: "center",
            textStyle: {
              rich: {
                name: {
                  fontSize: 14,
                  fontWeight: "normal",
                  color: "#666666",
                  padding: [10, 0],
                },
                val: {
                  fontSize: 32,
                  fontWeight: "bold",
                  color: "#333333",
                },
              },
            },
          },
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c}台 ({d}%)",
        },
        legend: {
          orient: "vertical",

          right: 10,
          data: ["在线", "离线"],
        },

        series: [
          {
            name: "设备连接状态",
            type: "pie",
            radius: ["50%", "60%"],
            center: ["50%", "50%"],
            data: echartData,
            hoverAnimation: true,
            itemStyle: {
              normal: {
                borderColor: bgColor,
                borderWidth: 4,
              },
            },
            // labelLine: {
            //   normal: {
            //     length: 20,
            //     length2: 120,
            //     lineStyle: {
            //       color: "#e6e6e6",
            //     },
            //   },
            // },

            // label: {
            //   normal: {
            //     formatter: (params) => {
            //       return (
            //         "{icon|●}{name|" +
            //         params.name +
            //         "}{value|" +
            //         formatNumber(params.value) +
            //         "}"
            //       );
            //     },
            //     padding: [0, -100, 25, -100],
            //     rich: {
            //       icon: {
            //         fontSize: 16,
            //       },
            //       name: {
            //         fontSize: 14,
            //         padding: [0, 10, 0, 4],
            //         color: "#666666",
            //       },
            //       value: {
            //         fontSize: 18,
            //         fontWeight: "bold",
            //         color: "#333333",
            //       },
            //     },
            //   },
            // },
          },
        ],
      });
    },
  },
  mounted() {
    //this.initCharts2();
    this.initCharts();
    this.initCharts2();
    this.initCharts3();
  },
};
</script>

<style lang="scss" scoped>
.statics-container {
  // background-color: white;
  border-radius: 20px;
  min-height: 85vh;
  padding: 0;

  .panelTitle {
    padding-left: 8px;
    // border-left: 4px #409eff solid;
    font-size: 16px;
    font-weight: bold;
    color: #555;
  }
  .pie .panelTitle {
    margin-bottom: 16px;
  }
  .bar1-1 {
    height: 420px;
  }
  .bar1-2 {
    height: 564px;
  }
  .bar1 {
    background: #ffffff;
    border-radius: 10px;
    padding: 24px 32px;
    .ivu-col {
      height: 100%;
    }
  }
  .pielist {
    // background: #f5f7f9;
    border-radius: 10px;
    // padding: 24px;
    height: 100%;

    .ivu-row {
      margin-top: 6px;
      /* margin-bottom: 20px; */
      background-color: #f3f5f6;
      padding-top: 12px;
      padding-bottom: 12px;
      padding-left: 20px;
      border-radius: 8px;
    }
    .pn2 {
      padding-left: 16px;
      border-left: 1px solid #d7dbdc;
      font-size: 14px;
      font-weight: bold;
    }
  }

  .panelTitle {
    .ivu-icon {
      border-radius: 50%;
      padding: 8px;
      color: white;
      margin-right: 10px;
    }
  }
  .tj-pie {
    text-align: center;
    padding-top: 20px;
    border-top: 1px #e6e9ea solid;
    margin-left: 30px;
    .td1,
    .td2,
    .td3 {
      background-color: burlywood;
      border-radius: 10px;
      width: 48px;
      height: 48px;
      margin-left: calc(50% - 24px);
      line-height: 48px;
      .ivu-icon {
        font-size: 22px;
      }
    }
    .td2 {
      background-color: #61cad7;
      color: white;
    }
    .td3 {
      background-color: rgba(204, 214, 216, 0.24);
      color: #b1bbbd;
    }
    .td1 {
      background-color: rgba(204, 214, 216, 0.24);
      color: #61cad7;
    }
    .pnum {
      font-size: 18px;
      font-weight: bold;
      font-family: "mplus-regular";
      margin-top: 12px;
    }
    .ptext {
      font-size: 13px;
      color: #b1bbbd;
    }
  }
}
</style>