<template>
  <div class="protree-con">
    <Input
      size="large"
      suffix="ios-search"
      placeholder="输入工件名称进行搜索..."
    />

    <Tree
      ref="tree"
      check-directly
      :data="datatree"
      :render="renderContent"
      @on-select-change="treeclick()"
    >
    </Tree>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 树结构
      datatree: [
        {
          title: "校徽",
          expand: true,

          children: [
            {
              title: "工序1-1",
            },
            {
              title: "工序2-2",
            },
          ],
        },
        {
          title: "酥油灯",
          expand: true,
          children: [
            {
              title: "工序1-1",
            },
            {
              title: "工序2-2",
            },
          ],
        },
        {
          title: "酥油灯",
          expand: true,
          children: [
            {
              title: "工序1-1",
            },
            {
              title: "工序2-2",
            },
          ],
        },
        {
          title: "酥油灯",
          expand: true,
          children: [
            {
              title: "工序1-1",
            },
            {
              title: "工序2-2",
            },
          ],
        },
        {
          title: "酥油灯",
          expand: true,
          children: [
            {
              title: "工序1-1",
            },
            {
              title: "工序2-2",
            },
          ],
        },
        {
          title: "酥油灯",
          expand: true,
          children: [
            {
              title: "工序1-1",
            },
            {
              title: "工序2-2",
            },
          ],
        },
      ],
    };
  },
  methods: {
    treeclick() {
      // 测试
      console.log(this.$refs.tree.getSelectedNodes());
    },
    renderContent(h, { root, node, data }) {
      return h(
        "span",
        {
          style: {
            display: "inline-block",
            width: "100%",
          },
        },
        [
          h("span", [
            h("Icon", {
              props: {
                type: "ios-barcode-outline",
              },
              style: {
                marginRight: "8px",
              },
            }),
            h("span", data.title),
          ]),
          h("span", {
            style: {
              display: "inline-block",
              float: "right",
              marginRight: "32px",
            },
          }),
        ]
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.protree-con {
  height: 100%;
  // 左-树结构
  .ivu-tree {
    height: calc(100% - 32px);
    overflow-y: auto;
    overflow-x: hidden;
    padding-left: 20px;
  }
  ::v-deep .ivu-tree-title {
    width: 96%;
    font-size: 16px;
    font-weight: bold;
    line-height: 32px;
  }
  ::v-deep .ivu-tree-title-selected,
  ::v-deep .ivu-tree-title:hover {
    color: #409eff;
    .ivu-icon-md-more {
      color: #409eff;
    }
  }
  ::v-deep .ivu-icon-md-more {
    color: rgba(204, 208, 216, 1);
  }
  .ivu-tree-arrow {
    line-height: 28px;
  }

  ::v-deep .ivu-icon-ios-arrow-forward {
    line-height: 2.2;
  }

  /*定义滚动条高宽及背景高宽分别对应横竖滚动条的尺寸*/
  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
    /* // background-color: #2c3e50; */
  }
  /*定义滑块颜色+圆角*/
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(87, 163, 243, 0);
  }
  /*定义滚动条轨道内阴影+圆角*/
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0);
  }
}
</style>