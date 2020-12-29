  <template>
  <div class="showplancon">
    <div style="width: 100%; height: calc(100% - 178px)" ref="pchart"></div>

    <Row class="tj-pie">
      <Col span="8">
        <div class="td1"><Icon type="ios-alarm-outline" /></div>
        <p class="pnum">7</p>
        <p class="ptext">计划数量</p>
      </Col>

      <Col span="8">
        <div class="td2">
          <Icon type="ios-stopwatch-outline" />
        </div>
        <p class="pnum">2</p>
        <p class="ptext">完成数量</p>
      </Col>

      <Col span="8">
        <div class="td3">
          <Icon type="ios-trophy-outline" />
        </div>
        <p class="pnum">5</p>
        <p class="ptext">合格数量</p>
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
    };
  },
  methods: {
    // 设备在离线环饼图
    initCharts3() {
      let pieChart = echarts.init(this.$refs.pchart);

      let bgColor = "#fff";
      let title = "良率";
      let color = ["#61cad7", "#d7dbdc"];
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
      // let total = echartData.reduce((a, b) => {
      //   return a + b.value * 1;
      // }, 0);
      let total = "33.51 %";

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
                  fontSize: 18,
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

          left: 10,
          data: ["合格", "不合格"],
        },

        series: [
          {
            name: "设备连接状态",
            type: "pie",
            radius: ["50%", "62%"],
            center: ["50%", "55%"],
            data: echartData,
            hoverAnimation: true,
            itemStyle: {
              normal: {
                borderColor: bgColor,
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
      this.initCharts3();
    });
  },
};
</script>

<style lang="scss" scoped>
.showplancon {
  height: 100%;
  .tj-pie {
    text-align: center;
    padding-top: 20px;
    border-top: 1px #e6e9ea solid;
    // display: none;
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
        font-weight: bold;
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