<template>
  <div class="app-container qualityAnalysis-container">
    <Form
      ref="formInline"
      :model="formInline"
      inline
      label-position="right"
      label-width="100"
    >
      <FormItem label="工件:">
        <Select v-model="formInline.select" size="large">
          <Option
            v-for="item in product"
            :value="item.value"
            :key="item.value"
            >{{ item.label }}</Option
          >
        </Select>
      </FormItem>

      <FormItem label="部位:">
        <Select v-model="formInline.select2" size="large">
          <Option v-for="item in parts" :value="item.value" :key="item.value">{{
            item.label
          }}</Option>
        </Select>
      </FormItem>

      <FormItem label="单元:">
        <Select v-model="formInline.select3" size="large">
          <Option v-for="item in unit" :value="item.value" :key="item.value">{{
            item.label
          }}</Option>
        </Select>
      </FormItem>

      <FormItem label-width="0">
        <Button type="primary" size="large">查询</Button>
      </FormItem>
    </Form>

    <!-- 测量数据——散点图 -->
    <div class="bar1 bar1-1">
      <div style="width: 100%; height: 100%" ref="chart0"></div>
    </div>

    <!-- 测量分析——柱状图 -->
    <div class="bar1 bar1-2">
      <div style="width: 100%; height: 100%" ref="chart"></div>
    </div>
  </div>
</template>
<script>
// 局部引用echarts
const echarts = require("echarts");
export default {
  data() {
    return {
      chart: {},

      // 表单
      formInline: {
        select: "",
        select2: "",
        select3: "",
      },
      product: [
        { value: "1", label: "生肖鼠" },
        { value: "2", label: "生肖牛" },
        { value: "3", label: "生肖虎" },
      ],
      parts: [
        { value: "1", label: "外径" },
        { value: "2", label: "外径2" },
        { value: "3", label: "外径外径" },
      ],
      unit: [
        { value: "1", label: "单元一" },
        { value: "2", label: "单元二" },
        { value: "3", label: "单元三" },
      ],
      // 表单 end
    };
  },
  methods: {
    // 测量数据——散点图
    initCharts0() {
      let myChart = echarts.init(this.$refs.chart0);
      // 绘制图表
      var data = [
        ["2020-12-12 08:06", "47.5"],
        ["2020-12-12 08:00", "50.5"],
        ["2020-12-12 08:17", "45.5"],
        ["2020-12-12 08:36", "51.4"],
        ["2020-12-12 08:24", "50.5"],
        ["2020-12-12 08:12", "52.5"],
        ["2020-12-12 08:07", "50.5"],
        ["2020-12-12 08:16", "51.5"],
        ["2020-12-12 08:18", "50.5"],
        ["2020-12-12 08:14", "50.9"],
        ["2020-12-12 08:21", "50.5"],
        ["2020-12-12 08:15", "54.5"],
        ["2020-12-12 08:09", "50.5"],
        ["2020-12-12 08:31", "62.3"],
        ["2020-12-12 08:11", "50.5"],
        ["2020-12-12 08:22", "59.5"],
        ["2020-12-12 08:29", "50.5"],
        ["2020-12-12 08:50", "55.5"],
      ];
      myChart.setOption({
        title: {
          text: "测量数据",
          left: "0",
          top: 10,
          textStyle: {
            color: "#555",
            fontWeight: "bold",
          },
        },
        xAxis: {
          name: "(时间轴)",
          scale: true,
          type: "time",
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
            },
          },
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
          name: "(测量值)",
          scale: true,
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
            },
          },
        },
        tooltip: {
          // trigger: 'axis',
          show: true,
          formatter: function (params) {
            return (
              params.seriesName +
              " :<br/>" +
              "时间 : " +
              params.value[0] +
              "<br/>" +
              "测量值 : " +
              params.value[1] +
              "<br/>"
            );
          },
          axisPointer: {
            show: true,
            type: "cross",
            lineStyle: {
              type: "dashed",
              width: 1,
            },
          },
        },
        series: [
          {
            name: "最大/最小值",

            type: "effectScatter",
            symbolSize: 16,
            itemStyle: {
              normal: {
                color: "#3e70f1",
              },
            },
            data: [
              ["2020-12-12 08:30", "70.5"],
              ["2020-12-12 08:06", "41.5"],
            ],
            markLine: {
              data: [
                [
                  {
                    name: "",
                    xAxis: "2020-12-12 08:00",
                    yAxis: "50",
                    symbol: "circle",
                  },
                  {
                    name: "",
                    xAxis: "2020-12-12 08:50",
                    yAxis: "50",
                    symbol: "circle",
                  },
                ],
                [
                  {
                    name: "",
                    xAxis: "2020-12-12 08:00",
                    yAxis: "65",
                    symbol: "circle",
                  },
                  {
                    name: "",
                    xAxis: "2020-12-12 08:50",
                    yAxis: "65",
                    symbol: "circle",
                  },
                ],
              ],
              label: {
                normal: {
                  show: true,
                  position: "middle",
                  // formatter: '标线文字说明',
                },
              },
              lineStyle: {
                normal: {
                  type: "solid",
                  color: "#638e32",
                },
              },
            },
          },

          {
            name: "测量数据",
            type: "scatter",
            itemStyle: {
              normal: {
                color: "#7fc531",
              },
            },
            data: data,
          },
        ],
      });
      // 防止越界，重绘canvas
      // window.onresize = myChart.resize;
      // myChart.setOption(option); //设置option
    },
    //   测量分析——柱状图
    initCharts() {
      let myChart = echarts.init(this.$refs.chart);
      // 绘制图表

      myChart.setOption({
        title: {
          text: "测量分析",
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

          name: "测量值",
          data: [
            "49.867",
            "49.888",
            "49.937",
            "49.987",
            "50.067",
            "50.039",
            "50.074",
            "50.108",
            "50.143",
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
          name: "(数量)",
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
            name: "数量",
            type: "bar",
            data: [5, 15, 36, 11, 25, 19, 33, 16, 36],
            showBackground: true,
            backgroundStyle: {
              // color: "rgba(152, 193, 235, 0.2)",
              color: "#f6f8fc",
              width: "80px",
            },
            itemStyle: {
              normal: {
                color: "#5684fd", //设置柱子颜色
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
          {
            name: "数量",
            type: "line",
            smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: "circle",
            symbolSize: 15,
            lineStyle: {
              normal: {
                color: "#ff605a",
                // shadowColor: "rgba(0, 0, 0, .3)",
                // shadowBlur: 0,
                // shadowOffsetY: 5,
                // shadowOffsetX: 5,
              },
            },
            // label: {
            //   show: true,
            //   position: "top",
            //   textStyle: {
            //     color: "#00b3f4",
            //   },
            // },
            itemStyle: {
              color: "#ff605a",
              borderColor: "#fff",
              borderWidth: 3,
              shadowColor: "rgba(0, 0, 0, .3)",
              shadowBlur: 0,
              shadowOffsetY: 2,
              shadowOffsetX: 2,
            },
            tooltip: {
              show: false,
            },
            data: [5, 15, 36, 11, 25, 19, 33, 16, 36],
          },
        ],
      });
      // 防止越界，重绘canvas
      // window.onresize = myChart.resize;
      // myChart.setOption(option); //设置option
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initCharts();
      this.initCharts0();
    });
  },
};
</script>

<style lang="scss" scoped>
.qualityAnalysis-container {
  // 头部
  .ivu-form {
    margin-top: 16px;
    .ivu-form-item {
      margin-bottom: 16px;
      width: 280px;
    }
    ::v-deep .ivu-form-item-label {
      font-size: 16px;
      line-height: 40px;
      padding: 0 16px 0 0;
    }
  }

  // 头部
  .bar1-1 {
    margin-bottom: 16px;
    height: 520px;
  }
  .bar1-2 {
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
}
</style>