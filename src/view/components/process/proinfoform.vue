<template>
  <div class="proform-con">
    <!-- 表单信息-默认只读状态，
    点击 “添加工件”、“修改工件” 按钮时————
    1、input切换为可输入状态，
    2、图片遮罩层显示 “重新上传” 按钮
    3、表单底部显示 “提交/保存”、“取消” 按钮
     -->
    <Button
      type="primary"
      size="large"
      style="margin-right: 8px"
      @click="addwork()"
    >
      添加工件
    </Button>
    <Button
      type="primary"
      size="large"
      style="margin-right: 8px"
      @click="editwork()"
    >
      修改工件
    </Button>
    <Button
      type="error"
      size="large"
      style="margin-right: 8px"
      @click="removework()"
    >
      删除工件
    </Button>
    <Button class="btngx" size="large">添加工序</Button>

    <!-- 此行删除 -->
    <font style="color: red"
      >树节点点击 工件 时-右侧显示工件信息，工序信息——此行删除</font
    >

    <div class="infoBg">
      <div>
        <Row class="rowfont">
          <Col span="6">工件编号：</Col>
          <Col span="14"><p class="pfont">编号00001</p></Col>
        </Row>

        <Row class="rowfont">
          <Col span="6">工件名称：</Col>
          <Col span="14"><p class="pfont">生肖鼠(2D)</p></Col>
        </Row>

        <Row class="rowfont">
          <Col span="6">材质：</Col>
          <Col span="14"><p class="pfont">材质材质</p></Col>
        </Row>

        <Row class="rowfont">
          <Col span="6">毛坯尺寸：</Col>
          <Col span="14"><p class="pfont">192mm*236mm</p></Col>
        </Row>
      </div>

      <!-- 工件图片 -->
      <div class="imgContainer">
        <img src="../../../assets/images/生肖/sx1.png" />
      </div>
    </div>

    <!-- 点击 “添加工件” 、“编辑工件” 按钮，显示弹窗 -->
    <Modal
      v-model="modal1"
      title="添加工件"
      @on-ok="ok"
      @on-cancel="cancel"
      ok-text="保存"
      width="720px"
    >
      <div class="formBg">
        <Form ref="form" :model="form" label-position="left" :label-width="80">
          <FormItem label="工件编号" prop="input0">
            <Input
              size="large"
              v-model="form.input0"
              placeholder="请输入工件编号"
            ></Input>
          </FormItem>
          <FormItem label="工件名称" prop="input1">
            <Input
              size="large"
              v-model="form.input1"
              placeholder="请输入工件名称"
            ></Input>
          </FormItem>
          <FormItem label="材质" prop="input2">
            <Input
              size="large"
              v-model="form.input2"
              placeholder="请输入工件材质"
            ></Input>
          </FormItem>
          <FormItem label="毛坯尺寸" prop="input3">
            <Input
              size="large"
              v-model="form.input3"
              placeholder="请输入毛坯尺寸"
            ></Input>
          </FormItem>
        </Form>

        <div class="formimg">
          <div class="demo-upload-list" v-if="imgurl !== ''">
            <template>
              <img :src="imgurl" />
              <div class="demo-upload-list-cover">
                <Upload multiple action="//jsonplaceholder.typicode.com/posts/">
                  <Button
                    type="primary"
                    icon="md-refresh"
                    shape="circle"
                    @click="handleRemove(item)"
                    >重新上传
                  </Button>
                </Upload>
              </div>
            </template>
          </div>

          <Upload
            ref="upload"
            :show-upload-list="false"
            :format="['jpg', 'jpeg', 'png']"
            :max-size="2048"
            multiple
            type="drag"
            action="//jsonplaceholder.typicode.com/posts/"
            style="display: inline-block; width: 232px"
            v-else
          >
            <div style="width: 232px; height: 232px; line-height: 252px">
              <Icon type="ios-camera" size="64"></Icon>
            </div>
          </Upload>
        </div>
      </div>
    </Modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modal1: false,
      imgurl: require("../../../assets/images/生肖/sx1.png"), //  图片显示及上传
      //表单
      form: {
        input0: "编号00001",
        input1: "生肖鼠(2D)",
        input2: "材质材质",
        input3: "192mm*236mm",
      },
    };
  },
  methods: {
    ok() {
      this.$Message.success("添加成功！");
    },
    cancel() {
      this.$Message.info("操作取消");
    },
    // 添加工件按钮点击事件
    addwork() {
      //  弹窗
      this.modal1 = true;
      this.form.input0 = "";
      this.form.input1 = "";
      this.form.input2 = "";
      this.form.input3 = "";
      this.imgurl = "";
    },

    // 修改工件
    editwork() {
      //  弹窗
      this.modal1 = true;
      this.form.input0 = "编号00001";
      this.form.input1 = "生肖鼠(2D)";
      this.form.input2 = "材质材质";
      this.form.input3 = "192mm*236mm";
      this.imgurl = require("../../../assets/images/生肖/sx1.png");
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.proform-con {
  .btngx {
    background-color: rgba(45, 140, 240, 0.12);
    color: rgba(45, 140, 240, 1);
    border-color: rgba(45, 140, 240, 0.8);
  }
  .btngx:hover {
    background-color: rgba(134, 193, 255, 0.1);
    color: rgba(66, 156, 252, 1);
    border-color: rgba(66, 156, 252, 1);
  }
  .infoBg {
    display: flex;
    background: #f4f4f7;
    border-radius: 10px;
    padding: 20px 20px 10px 40px;
    margin: 16px 0 16px 0;
    .rowfont {
      margin-bottom: 10px;
      font-size: 16px;
      .pfont {
        background-color: white;
        border-radius: 4px;
        width: 248px;
        // line-height: 40px;
        padding-left: 16px;
      }
      .ivu-col {
        line-height: 40px;
      }
      .ivu-col-span-6 {
        margin-right: 10px;
        font-weight: bold;
      }
    }
    .imgContainer {
      width: 190px;
      height: 190px;
      padding: 10px;
      margin-left: 60px;
    }
    .imgContainer img {
      width: 100%;
      height: 100%;
    }
  }
}

// 弹窗-图片显示及上传
.ivu-modal {
  .ivu-modal-header p,
  .ivu-modal-header-inner {
    font-size: 20px;
  }
  .formBg {
    // background: #f4f4f7;
    //  border-radius: 10px;
    padding: 20px;
    //     margin: 16px 0 16px 0;
    display: flex;

    .formimg {
      margin-right: 16px;
      margin-left: 40px;
    }

    // padding-bottom: 0;
    ::v-deep .ivu-input {
      // border: 1px solid #ffffff;
    }
    ::v-deep .ivu-form .ivu-form-item-label {
      line-height: 40px;
      padding: 0;
      font-size: 16px;
      font-weight: bold;
    }
  }
  .ivu-form {
    width: 380px;
  }

  //  图片显示及上传
  .demo-upload-list {
    display: inline-block;
    padding: 10px;
    width: 232px;
    height: 232px;
    text-align: center;
    line-height: 232px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  }
  .demo-upload-list img {
    width: 100%;
    height: 100%;
  }
  .demo-upload-list-cover {
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
  }
  .demo-upload-list:hover .demo-upload-list-cover {
    display: block;
  }
  .demo-upload-list-cover i {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
  }

  // 图片显示及上传end
}
</style>