<template>
  <div class="app-container managelist-container">
    <Button type="primary" size="large">新增订单</Button>

    <Button class="btn-1" size="large">全部确认</Button>

    <Button class="btn-2" size="large">启动</Button>

    <Collapse v-model="panelvalue" accordion>
      <Panel name="panel1">
        <div class="headinfo">
          <!-- 合格率进度环 -->
          <div class="circleCon">
            <Circle :percent="80">
              <span class="demo-Circle-inner" style="font-size: 24px">80%</span>
              <p>合格率</p>
            </Circle>
          </div>

          <!-- 右侧信息 -->
          <div class="rightinfo">
            <span class="dname"> 订单名称：0001s </span>
            <Tag color="default" class="tag3">未启动</Tag>
            <!-- <Tag color="green" class="tag1">已启动</Tag>
            <Tag color="blue" class="tag5">执行中</Tag>
            <Tag color="orange" class="tag4">已完成</Tag> -->

            <Button
              type="error"
              icon="ios-trash-outline"
              class="deleteLeft"
              v-on:click.native.stop=""
            ></Button>

            <Switch
              true-color="#fff"
              false-color="#fff"
              v-on:click.native.stop=""
            >
              <span slot="open">已确认</span>
              <span slot="close">订单确认</span>
            </Switch>

            <Row class="rinfo">
              <Col span="16" class="cbox">
                <!-- <p> -->
                <span class="cspan" style="padding-right: 30px">
                  <font class="rt1">加工单元：</font>自动排出</span
                >
                <span class="cspan"><font class="rt1">需求总数：</font>2</span>
                <span class="cspan"><font class="rt1">出库总数：</font>1</span>
                <span class="cspan"><font class="rt1">完成总数：</font>1</span>
                <span class="cspan"><font class="rt1">合格总数：</font>1</span>
                <!-- </p> -->
              </Col>

              <Col span="8" class="rowProgress">
                完成情况：
                <Progress :percent="45" status="active" :stroke-width="8" />
              </Col>
            </Row>
          </div>
        </div>

        <template slot="content">
          <Table border :columns="columns1" :data="data1">
            <template slot-scope="{ row }" slot="name">
              <strong>{{ row.name }}</strong>
            </template>
            <template slot-scope="{ row, index }" slot="act">
              <Button
                type="primary"
                size="small"
                style="margin-right: 5px"
                @click="show(index)"
                >编辑</Button
              >
              <Button type="error" size="small" @click="remove(index)"
                >删除</Button
              >
            </template>
          </Table>
        </template>
      </Panel>

      <!-- 测试 -->

      <Panel name="panel2">
        <span class="dname"> 订单名称：0001s </span>
        <Tag color="default" class="tag3">未启动</Tag>
        <Tag color="green" class="tag1">已启动</Tag>
        <Tag color="blue" class="tag5">执行中</Tag>
        <Tag color="orange" class="tag4">已完成</Tag>

        <Button
          type="error"
          icon="ios-trash-outline"
          class="deleteLeft"
          v-on:click.native.stop=""
        ></Button>

        <Switch true-color="#fff" false-color="#fff" v-on:click.native.stop="">
          <span slot="open">已确认</span>
          <span slot="close">订单确认</span>
        </Switch>

        <Row class="rinfo">
          <Col span="16" class="cbox">
            <!-- <p> -->
            <span class="cspan" style="padding-right: 30px">
              <font class="rt1">加工单元：</font>自动排出</span
            >
            <span class="cspan"><font class="rt1">需求总数：</font>2</span>
            <span class="cspan"><font class="rt1">出库总数：</font>1</span>
            <span class="cspan"><font class="rt1">完成总数：</font>1</span>
            <span class="cspan"><font class="rt1">合格总数：</font>1</span>
            <!-- </p> -->
          </Col>

          <Col span="8" class="rowProgress">
            完成情况：
            <Progress :percent="45" status="active" :stroke-width="8" />
          </Col>
        </Row>

        <template slot="content">
          <Table border :columns="columns1" :data="data1">
            <template slot-scope="{ row }" slot="name">
              <strong>{{ row.name }}</strong>
            </template>
            <template slot-scope="{ row, index }" slot="act">
              <Button
                type="primary"
                size="small"
                style="margin-right: 5px"
                @click="show(index)"
                >编辑</Button
              >
              <Button type="error" size="small" @click="remove(index)"
                >删除</Button
              >
            </template>
          </Table>
        </template>
      </Panel>
      <!-- end -->
    </Collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      switch1: false,
      // 折叠默认展开项
      panelvalue: "panel1",
      //
      // 表格
      columns1: [
        {
          title: "工件",
          slot: "name",
        },
        {
          title: "需求数",
          key: "n1",
        },
        {
          title: "出库数",
          key: "n2",
        },
        {
          title: "完成数",
          key: "n3",
        },
        {
          title: "打标内容",
          key: "ntext",
        },
        {
          title: "合格数",
          key: "n4",
        },
        {
          title: "操作",
          slot: "act",
        },
      ],
      data1: [
        {
          name: "John Brown",
          n1: 18,
          n2: 18,
          n3: 18,
          ntext: "dafafw",
          n4: 1,
        },
        {
          name: "John Brown",
          n1: 18,
          n2: 18,
          n3: 18,
          ntext: "dafafw",
          n4: 1,
        },
        {
          name: "John Brown",
          n1: 18,
          n2: 18,
          n3: 18,
          ntext: "dafafw",
          n4: 1,
        },
        {
          name: "John Brown",
          n1: 18,
          n2: 18,
          n3: 18,
          ntext: "dafafw",
          n4: 1,
        },
      ],
    };
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Name：${this.data1[index].name}`,
      });
    },
    remove(index) {
      this.data1.splice(index, 1);
    },
  },
};
</script>
<style lang="scss" scoped>
.managelist-container {
  // 背景处理
  background-color: white;
  border-radius: 20px;
  min-height: 85vh;
  padding: 20px;

  //
  .headinfo {
    display: flex;
    flex-flow: row nowrap;
    .rightinfo {
      flex-grow: 1;
    }
  }

  //

  .btn-1 {
    color: #44c2d2;
    background: #e7f7f9;
    border: 1px solid #44c2d2;
    margin-left: 8px;
  }
  .btn-1:hover {
    color: #10acbf;

    border: 1px solid #10acbf;
  }
  .btn-2 {
    color: #67c23a;
    background: #f0f9eb;
    border: 1px solid #c2e7b0;
    margin-left: 8px;
  }
  .btn-2:hover {
    color: #74c94a;
    border: 1px solid #74c94a;
  }
  .rinfo {
    font-size: 16px;
    height: 40px;
    font-weight: bold;
    margin-top: 10px;
    .rt1 {
      color: #b3b9c1;
    }
  }
  .cbox {
    display: flex;
    padding-right: 50px;
    padding-left: 14px;
    height: 100%;
    align-items: center;
  }
  .cspan {
    flex: 1;
    // height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 16px;
    border-right: 1px solid #b3b9c1;
  }
  ::v-deep .ivu-collapse {
    border: none;
    background-color: rgba(0, 0, 0, 0);
    // border-radius: 10px;
    padding-bottom: 14px;
    // padding-top: 20px;
  }
  ::v-deep .ivu-collapse-content {
    background-color: rgba(0, 0, 0, 0);
  }
  ::v-deep .ivu-collapse > .ivu-collapse-item > .ivu-collapse-header {
    height: 138px;
    padding-top: 20px;
    border: none;
  }
  ::v-deep .ivu-collapse-content > .ivu-collapse-content-box {
    padding-bottom: 30px;
    padding-top: 0;
  }
  .ivu-collapse > .ivu-collapse-item {
    border: none;
    background-color: #f6f7f9;
    border-radius: 10px;
    margin-top: 20px;
  }
  .dname {
    font-size: 20px;
    font-weight: bold;
    vertical-align: middle;
    margin-right: 20px;
  }
  .tag1 {
    background: #f0f9eb;
    border: none;
    color: #67c23a;
  }
  .tag2 {
    background: #e7f3f9;
    border: none;
    color: #409eff;
  }
  .tag3 {
    background: #e4e7ec;
    border: none;
    color: #a6adb8;
  }
  .tag4 {
    background: #fbf4ed;
    border: none;
    color: #ffa360;
  }
  .tag5 {
    background: #e7f3f9;
    border: none;
    color: #409eff;
  }
  .tag1,
  .tag2,
  .tag3,
  .tag4,
  .tag5 {
    height: 42px;
    line-height: 42px;
    font-size: 16px;
  }
  .row-index-delete {
    background-color: #ff6c60;

    ::v-deep .ivu-icon {
      color: white;
    }
  }
  .deleteLeft {
    float: right;
    margin-right: 16px;
    width: 42px;
    height: 42px;
    background-color: rgba(250, 79, 64, 0);
    border-color: rgba(250, 79, 64, 0);

    ::v-deep .ivu-icon {
      font-size: 24px;
      color: #555555;
    }
  }

  .ivu-btn-error-hover {
    background-color: #fa4f40;
    border-color: #fa4f40;
    ::v-deep .ivu-icon:hover {
      color: white;
    }
  }
  .ivu-collapse-header:hover {
    .deleteLeft {
      background-color: #ff6c60;
      ::v-deep .ivu-icon {
        color: white;
      }
    }
  }
  .rowProgress {
    // margin-bottom: 24px;
    line-height: 40px;
    .ivu-progress {
      width: 82%;
      top: -2px;
    }
    ::v-deep .ivu-progress-text {
      font-size: 14px;
      font-weight: bold;
    }
    ::v-deep .ivu-progress-inner {
      height: 14px;
      padding-top: 3px;
      padding-left: 3px;
      background-color: #e4e7ec;
    }
  }
  // 订单开关
  .ivu-switch {
    width: 118px;
    height: 42px;
    border-radius: 8px;
    line-height: 40px;
    border: 1px solid #dcdfe6 !important;
    float: right;
    margin-right: 8px;
  }
  .ivu-switch:hover {
    border: 1px solid #44c2d2 !important;
  }

  ::v-deep .ivu-switch-inner {
    color: #555555;
    font-size: 14px;
    left: 47px;
    // font-weight: bold;
  }
  ::v-deep .ivu-switch-inner:hover {
    color: #44c2d2;
  }
  ::v-deep .ivu-switch-checked .ivu-switch-inner {
    left: 21px;
  }
  .ivu-switch:after {
    width: 32px;
    height: 32px;
    background: #e7f7f9;
    border-radius: 8px;
    left: 4px;
    top: 4px;
    background-image: url("../../assets/images/switch.png");
    background-repeat: no-repeat;
    background-position: center;
  }
  .ivu-switch-checked:after {
    left: 80px;
    background: #f3f3f6;
    background-image: url("../../assets/images/switch-s.png");
    background-repeat: no-repeat;
    background-position: center;
  }
  // 订单开关-end
}
</style>