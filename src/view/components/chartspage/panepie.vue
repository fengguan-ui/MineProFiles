<template>
  <div class="panepie">
     <Button type="primary"  size="large">更新</Button></Button>

  
    <!-- 环饼图 -->
    <Row class="pierow">
      <Col span="12">
        <div class="pie">
          <p class="pietitle"><Icon type="md-pie" />机床1</p>
          <div style="width: 792px; height: 280px" ref="pchart"></div>
        </div>
      </Col>
      <Col span="12">
        <div class="pie">
          <p class="pietitle"><Icon type="md-pie" />PLC</p>
          <div style="width: 100%; height: 100%" ref="pchart1"></div>
        </div>
      </Col>
    </Row>

    <Row class="pierow">
      <Col span="12">
        <div class="pie">
          <p class="pietitle"><Icon type="md-pie" />PLC</p>
          <div style="width: 100%; height: 100%" ref="pchart2"></div>
        </div>
      </Col>
      <Col span="12">
        <div class="pie">
          <p class="pietitle"><Icon type="md-pie" />PLC</p>
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
    // 设备在离线环饼图 1
    initCharts2() {
      let pieChart = echarts.init(this.$refs.pchart);

      // let bgColor = "#fff";
      let title = "设备总数";
      let color = ["#05caae", "#dfe5e6"];
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
          data: ["在线", "离线"],
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
      let title = "设备总数";
      let color = ["#05caae", "#dfe5e6"];
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
          data: ["在线", "离线"],
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
      let title = "设备总数";
      let color = ["#05caae", "#dfe5e6"];
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
          data: ["在线", "离线"],
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
      let title = "设备总数";
      let color = ["#05caae", "#dfe5e6"];
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
          data: ["在线", "离线"],
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
      this.initCharts2();
      this.initCharts3();

      this.initCharts4();
      this.initCharts5();
    });
  },
};
</script>

<style lang="scss" scoped>
.panepie {
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
    width: 100%;

    .pietitle {
      font-size: 16px;
      font-weight: bold;
      color: #555;
      padding: 10px 0 10px 20px;
      border-bottom: 1px rgb(225, 225, 230) solid;

      .ivu-icon {
        background: #05caae;
        padding: 8px;
        border-radius: 30px;
        color: white;
        margin-right: 8px;
      }
    }
  }
}
</style>