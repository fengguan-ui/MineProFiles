<template>
  <div class="render-conainer">
    <Table stripe :columns="columns1" :data="data1" class="showddlist"></Table>
  </div>
</template>
<script>
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
    };
  },
};
</script>

<style lang="scss" scoped>
.render-conainer {
  ::v-deep .ivu-icon {
    width: 36px;
    height: 36px;
    border-radius: 6px;
    line-height: 36px;
    text-align: center;
    margin-right: 8px;
  }
}
</style>