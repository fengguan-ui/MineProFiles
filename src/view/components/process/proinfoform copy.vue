<template>
  <div class="proform-con">
    <!-- 表单信息-默认只读状态，
    点击 “添加工件”、“修改工件” 按钮时————
    1、input切换为可输入状态，
    2、图片遮罩层显示 “重新上传” 按钮
    3、表单底部显示 “提交/保存”、“取消” 按钮
     -->

    <Form ref="form" :model="form" label-position="left" :label-width="80">
      <FormItem label="工件编号" prop="input0">
        <Input
          v-model="form.input0"
          placeholder="请输入工件编号"
          :readonly="readonly"
        ></Input>
      </FormItem>
      <FormItem label="工件名称" prop="input1">
        <Input
          v-model="form.input1"
          placeholder="请输入工件名称"
          :readonly="readonly"
        ></Input>
      </FormItem>
      <FormItem label="材质" prop="input2">
        <Input
          v-model="form.input2"
          placeholder="请输入工件材质"
          :readonly="readonly"
        ></Input>
      </FormItem>
      <FormItem label="毛坯尺寸" prop="input3">
        <Input
          v-model="form.input3"
          placeholder="请输入毛坯尺寸"
          :readonly="readonly"
        ></Input>
      </FormItem>

      <FormItem v-show="!visible">
        <Button type="primary" style="margin-right: 8px">保存</Button>
        <Button @click="cancel()">取消</Button>
      </FormItem>
      <FormItem v-show="visible">
        <Button type="primary" style="margin-right: 8px" @click="addwork()"
          >添加工件</Button
        >
        <Button type="primary" style="margin-right: 8px" @click="editwork()"
          >修改工件</Button
        >
        <Button type="error" @click="removework()">删除工件</Button>
      </FormItem>
    </Form>

    <!-- 工件图片 -->
    <div class="imgContainer">
      <div class="demo-upload-list">
        <template>
          <img src="../../../assets/images/生肖/sx1.png" />
          <div class="demo-upload-list-cover">
            <Upload multiple action="//jsonplaceholder.typicode.com/posts/">
              <Button
                type="primary"
                icon="md-refresh"
                shape="circle"
                @click="handleRemove(item)"
                >重新上传</Button
              >
            </Upload>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //表单
      form: {
        input0: "编号00001",
        input1: "生肖鼠(2D)",
        input2: "材质材质",
        input3: "192mm*236mm",
      },
      readonly: true,
      visible: true,
      // 图片显示及上传

      //  图片显示及上传-end
    };
  },
  methods: {
    // 添加工件按钮点击事件
    addwork() {
      this.visible = false;
      this.readonly = false;
      // this.$refs["form"].resetFields();
      this.form.input0 = "";
      this.form.input1 = "";
      this.form.input2 = "";
      this.form.input3 = "";
    },

    // 修改工件
    editwork() {
      this.visible = false;
      this.readonly = false;
    },

    // 取消
    cancel() {
      this.visible = true;
      this.readonly = true;
      // 表单需恢复传入的值
      this.form.input0 = "编号00001";
      this.form.input1 = "生肖鼠(2D)";
      this.form.input2 = "材质材质";
      this.form.input3 = "192mm*236mm";
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.proform-con {
  display: flex;

  .ivu-form {
    width: 380px;
  }
  // 图片显示及上传
  .demo-upload-list {
    display: inline-block;
    padding: 10px;
    width: 206px;
    height: 206px;
    text-align: center;
    line-height: 206px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    margin-right: 16px;
    margin-left: 40px;
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