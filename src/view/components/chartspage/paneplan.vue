<template>
  <div class="paneplan">
    <!-- 顶部计划区 -->
    <div class="topplan">
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
          <Button
            type="primary"
            style="background-color: #499ec5; border-color: #499ec5"
            size="large"
            >查询</Button
          >
        </FormItem>
      </Form>

      <div class="rowbox">
        <div class="colitem">
          <Icon type="ios-alarm-outline" />
          <span>
            <p class="p1">计划数量</p>
            <p class="p2">123</p>
          </span>
        </div>

        <div class="colitem">
          <Icon type="ios-stopwatch-outline" />
          <span>
            <p class="p1">完成数量</p>
            <p class="p2">91</p>
          </span>
        </div>

        <div class="colitem">
          <Icon type="ios-trophy-outline" />
          <span>
            <p class="p1">合格数量</p>
            <p class="p2">78</p>
          </span>
        </div>
      </div>
    </div>
    <!-- 顶部计划区-end -->

    <!-- 柱状图 -->
    <div class="bar1 bar1-1" ref="barparent">
      <div style="width: 100%; height: 100%" ref="chart" id="chartplan"></div>
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
      formInline: {
        datetime: "",
      },
    };
  },
  mounted() {
    // console.log("name3" + Date.now());
    this.$nextTick(() => {
      this.initCharts();
    });
    // this.initCharts();
  },
  methods: {
    //   柱状图
    initCharts() {
      let myChart = echarts.init(this.$refs.chart);
      // 绘制图表
      myChart.setOption({
        title: {
          text: "工件加工情况",
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
        //图例
        legend: {
          data: ["计划数量", "完成数量", "合格数量"], //与series的name对应
          right: "90", //图例的离左边位置，可以用像素，可以用百分比，也可以用center，right等
          top: 12, //图例离顶部的位置
          itemWidth: 18, //图例图标的宽
          itemHeight: 14, //图例图标的高
          textStyle: {
            color: "#555", //文字的具体的颜色
            fontSize: "14px",
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
            name: "计划数量",
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
                color: "#f69c79", //设置柱子颜色
                barBorderRadius: [4, 4, 0, 0],
              },
            },
            barWidth: 10, //设置柱子宽度，单位为px
          },
          {
            name: "完成数量",
            type: "bar",
            data: [3, 14, 28, 26, 15, 14, 6, 14, 23, 22, 7, 4],
            showBackground: true,
            backgroundStyle: {
              // color: "rgba(152, 193, 235, 0.2)",
              color: "#f6f8fc",
              width: "80px",
            },
            itemStyle: {
              normal: {
                color: "rgba(111,192,229,1)", //设置柱子颜色
                barBorderRadius: [4, 4, 0, 0],
              },
            },
            barWidth: 10, //设置柱子宽度，单位为px
          },
          {
            name: "合格数量",
            type: "bar",
            data: [3, 13, 23, 22, 11, 13, 4, 11, 20, 22, 7, 4],
            showBackground: true,
            backgroundStyle: {
              // color: "rgba(152, 193, 235, 0.2)",
              color: "#f6f8fc",
              width: "80px",
            },
            itemStyle: {
              normal: {
                color: "rgba(111,192,229,0.4)", //设置柱子颜色
                barBorderRadius: [4, 4, 0, 0],
              },
            },
            barWidth: 10, //设置柱子宽度，单位为px
          },
        ],
      });
      // 防止越界，重绘canvas
      // window.onresize = myChart.resize;

      // myChart.setOption(option); //设置option
    },
  },
};
</script>

<style lang="scss" scoped>
.paneplan {
  .topplan {
    background: #6fc0e5;
    border-radius: 10px;
    height: 200px;
    margin-bottom: 16px;
    padding: 20px;
    padding-top: 30px;

    ::v-deep .ivu-input {
      border: 1px solid #6fc0e5;
    }
  }
  .rowbox {
    display: flex;
    margin-top: 20px;
  }
  .colitem {
    margin-right: 180px;
    display: flex;
    .ivu-icon {
      background: #8dcdeb;
      padding: 18px;
      font-size: 36px;
      color: white;
      border-radius: 10px;
      margin-right: 20px;
    }
    .p1 {
      font-size: 18px;
      color: white;
      line-height: 34px;
    }
    .p2 {
      font-size: 38px;
      color: white;
      font-weight: bold;
      line-height: 28px;
      padding-top: 6px;
    }
  }

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
}
</style>