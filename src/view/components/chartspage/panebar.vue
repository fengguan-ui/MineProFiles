<template>
  <div class="panebar">
    <Form ref="formInline" :model="formInline" inline>
      <FormItem prop="datetime">
        <DatePicker
          type="daterange"
          confirm
          v-model="formInline.datetime"
          placeholder="起始日期至结束日期"
          style="width: 300px"
          size="large"
        ></DatePicker>
      </FormItem>
      <FormItem>
        <Button type="primary" size="large">查询</Button>
      </FormItem>
    </Form>

    <!-- 柱状图 -->
    <div class="bar1 bar1-1">
      <div style="width: 100%; height: 100%" ref="chart"></div>
    </div>
    <!-- 环饼图 -->
    <Row class="pierow">
      <Col span="12">
        <div class="pie">
          <p class="pietitle"><Icon type="md-pie" />校徽</p>
          <div style="width: 100%; height: 100%" ref="pchart"></div>
        </div>
      </Col>
      <Col span="12">
        <div class="pie">
          <p class="pietitle"><Icon type="md-pie" />校徽</p>
          <div style="width: 100%; height: 100%" ref="pchart1"></div>
        </div>
      </Col>
    </Row>

    <Row class="pierow">
      <Col span="12">
        <div class="pie">
          <p class="pietitle"><Icon type="md-pie" />校徽</p>
          <div style="width: 100%; height: 100%" ref="pchart2"></div>
        </div>
      </Col>
      <Col span="12">
        <div class="pie">
          <p class="pietitle"><Icon type="md-pie" />校徽</p>
          <div style="width: 100%; height: 100%" ref="pchart3"></div>
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
      chart: {},
      formInline: {
        datetime: "",
      },
    };
  },
  methods: {
    //   柱状图
    initCharts() {
      let myChart = echarts.init(this.$refs.chart);
      // 绘制图表

      myChart.setOption({
        title: {
          text: "工件产量总览",
          left: "0",
          top: 10,
          textStyle: {
            color: "#555",
            fontWeight: "bold",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        xAxis: {
          // show: false,
          // boundaryGap: ["5%", "5%"], //留白大小，坐标轴两边留白

          name: "工件类型",
          data: [
            "校徽",
            "酥油灯",
            "工件",
            "工件",
            "工件工件",
            "工件",
            "工件工件",
            "工件工件",
            "工件工件",
            "工件工件",
            "工件工件",
            "生肖猪",
          ],
          axisLabel: {
            show: true,
            textStyle: {
              color: "#555", //更改坐标轴文字颜色
              fontSize: 15, //更改坐标轴文字大小\
              fontWeight: 700,
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "#999", //更改坐标轴颜色
            },
          },
        },

        yAxis: {
          // boundaryGap: ["5%", "5%"], //留白大小，坐标轴两边留白
          name: "(产量)",
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
            },
          },
        },
        center: ["50%", "50%"],
        series: [
          {
            name: "产量",
            type: "bar",
            data: [5, 20, 36, 27, 20, 15, 10, 20, 36, 27, 10, 6],
            showBackground: true,
            backgroundStyle: {
              // color: "rgba(152, 193, 235, 0.2)",
              color: "#f6f8fc",
              width: "80px",
            },
            itemStyle: {
              normal: {
                color: "rgba(64, 158, 255, 1)", //设置柱子颜色
                barBorderRadius: [4, 4, 0, 0],
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
            barWidth: 14, //设置柱子宽度，单位为px
          },
        ],
      });
      // 防止越界，重绘canvas
      // window.onresize = myChart.resize;
      // myChart.setOption(option); //设置option
    },
    // 设备在离线环饼图 1
    initCharts2() {
      let pieChart = echarts.init(this.$refs.pchart);

      // let bgColor = "#fff";
      let title = "生产总数";
      let color = ["#61cad7", "#ff9999"];
      let echartData = [
        {
          name: "合格",
          value: "2",
        },
        {
          name: "不合格",
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
        // backgroundColor: bgColor,
        color: color,

        title: [
          {
            text: "{name|" + title + "}\n{val|" + formatNumber(total) + "}",
            top: "80px",
            left: "center",
            textStyle: {
              rich: {
                name: {
                  fontSize: 16,
                  fontWeight: "bold",
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
          top: 16,
          left: 56,
          data: ["合格", "不合格"],
        },

        series: [
          {
            name: "设备连接状态",
            type: "pie",
            radius: ["50%", "60%"],
            center: ["50%", "40%"],
            data: echartData,
            hoverAnimation: true,
            itemStyle: {
              normal: {
                borderColor: "#fff",
                borderWidth: 4,
              },
            },
            labelLine: {
              normal: {
                length: 20,
                length2: 120,
                lineStyle: {
                  color: "#e6e6e6",
                },
              },
            },

            label: {
              normal: {
                formatter: (params) => {
                  return (
                    "{icon|●}{name|" +
                    params.name +
                    "}{value|" +
                    formatNumber(params.value) +
                    "}"
                  );
                },
                padding: [0, -100, 25, -100],
                rich: {
                  icon: {
                    fontSize: 16,
                  },
                  name: {
                    fontSize: 14,
                    padding: [0, 10, 0, 4],
                    color: "#666666",
                  },
                  value: {
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#333333",
                  },
                },
              },
            },
          },
        ],
      });
    },
    // 设备在离线环饼图 2
    initCharts3() {
      let pieChart = echarts.init(this.$refs.pchart1);

      // let bgColor = "#fff";
      let title = "生产总数";
      let color = ["#61cad7", "#ff9999"];
      let echartData = [
        {
          name: "合格",
          value: "2",
        },
        {
          name: "不合格",
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
        // backgroundColor: bgColor,
        color: color,

        title: [
          {
            text: "{name|" + title + "}\n{val|" + formatNumber(total) + "}",
            top: "80px",
            left: "center",
            textStyle: {
              rich: {
                name: {
                  fontSize: 16,
                  fontWeight: "bold",
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
          top: 16,
          left: 56,
          data: ["合格", "不合格"],
        },

        series: [
          {
            name: "设备连接状态",
            type: "pie",
            radius: ["50%", "60%"],
            center: ["50%", "40%"],
            data: echartData,
            hoverAnimation: true,
            itemStyle: {
              normal: {
                borderColor: "#fff",
                borderWidth: 4,
              },
            },
            labelLine: {
              normal: {
                length: 20,
                length2: 120,
                lineStyle: {
                  color: "#e6e6e6",
                },
              },
            },

            label: {
              normal: {
                formatter: (params) => {
                  return (
                    "{icon|●}{name|" +
                    params.name +
                    "}{value|" +
                    formatNumber(params.value) +
                    "}"
                  );
                },
                padding: [0, -100, 25, -100],
                rich: {
                  icon: {
                    fontSize: 16,
                  },
                  name: {
                    fontSize: 14,
                    padding: [0, 10, 0, 4],
                    color: "#666666",
                  },
                  value: {
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#333333",
                  },
                },
              },
            },
          },
        ],
      });
    },
    // 设备在离线环饼图 3-测试
    initCharts4() {
      let pieChart = echarts.init(this.$refs.pchart2);

      // let bgColor = "#fff";
      let title = "生产总数";
      let color = ["#61cad7", "#ff9999"];
      let echartData = [
        {
          name: "合格",
          value: "2",
        },
        {
          name: "不合格",
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
        // backgroundColor: bgColor,
        color: color,

        title: [
          {
            text: "{name|" + title + "}\n{val|" + formatNumber(total) + "}",
            top: "80px",
            left: "center",
            textStyle: {
              rich: {
                name: {
                  fontSize: 16,
                  fontWeight: "bold",
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
          top: 16,
          left: 56,
          data: ["合格", "不合格"],
        },

        series: [
          {
            name: "设备连接状态",
            type: "pie",
            radius: ["50%", "60%"],
            center: ["50%", "40%"],
            data: echartData,
            hoverAnimation: true,
            itemStyle: {
              normal: {
                borderColor: "#fff",
                borderWidth: 4,
              },
            },
            labelLine: {
              normal: {
                length: 20,
                length2: 120,
                lineStyle: {
                  color: "#e6e6e6",
                },
              },
            },

            label: {
              normal: {
                formatter: (params) => {
                  return (
                    "{icon|●}{name|" +
                    params.name +
                    "}{value|" +
                    formatNumber(params.value) +
                    "}"
                  );
                },
                padding: [0, -100, 25, -100],
                rich: {
                  icon: {
                    fontSize: 16,
                  },
                  name: {
                    fontSize: 14,
                    padding: [0, 10, 0, 4],
                    color: "#666666",
                  },
                  value: {
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#333333",
                  },
                },
              },
            },
          },
        ],
      });
    },
    initCharts5() {
      let pieChart = echarts.init(this.$refs.pchart3);

      // let bgColor = "#fff";
      let title = "生产总数";
      let color = ["#61cad7", "#ff9999"];
      let echartData = [
        {
          name: "合格",
          value: "2",
        },
        {
          name: "不合格",
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
        // backgroundColor: bgColor,
        color: color,

        title: [
          {
            text: "{name|" + title + "}\n{val|" + formatNumber(total) + "}",
            top: "80px",
            left: "center",
            textStyle: {
              rich: {
                name: {
                  fontSize: 16,
                  fontWeight: "bold",
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
          top: 16,
          left: 56,
          data: ["合格", "不合格"],
        },

        series: [
          {
            name: "设备连接状态",
            type: "pie",
            radius: ["50%", "60%"],
            center: ["50%", "40%"],
            data: echartData,
            hoverAnimation: true,
            itemStyle: {
              normal: {
                borderColor: "#fff",
                borderWidth: 4,
              },
            },
            labelLine: {
              normal: {
                length: 20,
                length2: 120,
                lineStyle: {
                  color: "#e6e6e6",
                },
              },
            },

            label: {
              normal: {
                formatter: (params) => {
                  return (
                    "{icon|●}{name|" +
                    params.name +
                    "}{value|" +
                    formatNumber(params.value) +
                    "}"
                  );
                },
                padding: [0, -100, 25, -100],
                rich: {
                  icon: {
                    fontSize: 16,
                  },
                  name: {
                    fontSize: 14,
                    padding: [0, 10, 0, 4],
                    color: "#666666",
                  },
                  value: {
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#333333",
                  },
                },
              },
            },
          },
        ],
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initCharts();

      this.initCharts2();
      this.initCharts3();

      this.initCharts4();
      this.initCharts5();
    });
  },
};
</script>

<style lang="scss" scoped>
.panebar {
  .bar1-1 {
    height: 420px;
  }

  .bar1 {
    background: #ffffff;
    border-radius: 10px;
    padding: 20px;
    padding-bottom: 0;
    .ivu-col {
      height: 100%;
    }
  }

  // 环饼图
  .pierow .ivu-col {
    padding: 16px;
    padding-bottom: 0;
  }
  .pierow .ivu-col:nth-child(1) {
    padding-left: 0;
  }
  .pierow .ivu-col:nth-child(2) {
    padding-right: 0;
  }
  .pie {
    background-color: white;
    border-radius: 10px;
    height: 300px;

    .pietitle {
      font-size: 16px;
      font-weight: bold;
      color: #555;
      padding: 10px 0 10px 20px;
      border-bottom: 1px rgb(225, 225, 230) solid;

      .ivu-icon {
        background: #61cad7;
        padding: 8px;
        border-radius: 30px;
        color: white;
        margin-right: 8px;
      }
    }
  }
}
</style>