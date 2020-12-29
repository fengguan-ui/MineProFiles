
<template>
  <div class="search-comp">
    <!-- 表格顶部工具栏-检索区域 -->
    <div class="seabg">
      <div class="seacon">
        <Form
          :model="formInline"
          inline
          label-position="right"
          :label-width="100"
        >
          <Row>
            <Col span="8">
              <FormItem label="订单号：">
                <Input
                  type="text"
                  v-model="formInline.value1"
                  placeholder="请输入订单号..."
                  clearable
                /> </FormItem
            ></Col>
            <Col span="8">
              <FormItem label="确认状态：">
                <RadioGroup v-model="formInline.border">
                  <Radio label="全部" border></Radio>
                  <Radio label="已确认" border></Radio>
                  <Radio label="未确认" border></Radio>
                </RadioGroup> </FormItem
            ></Col>
            <Col span="8">
              <FormItem label="执行状态：">
                <Select v-model="formInline.select">
                  <Option value="s0">全部</Option>
                  <Option value="s1">未启动</Option>
                  <Option value="s2">已启动</Option>

                  <Option value="s3">执行中</Option>
                  <Option value="s4">已完成</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <!-- 在此新增条件查询输入控件 -->
          <Row>
            <Col span="8">
              <FormItem label="执行状态：">
                <Select v-model="formInline.select">
                  <Option value="s0">全部</Option>
                  <Option value="s1">未启动</Option>
                  <Option value="s2">已启动</Option>

                  <Option value="s3">执行中</Option>
                  <Option value="s4">已完成</Option>
                </Select>
              </FormItem>
            </Col>
            <Col span="8">
              <FormItem label="测试条件1：">
                <Select v-model="formInline.select">
                  <Option value="s0">全部</Option>
                  <Option value="s1">未启动</Option>
                  <Option value="s2">已启动</Option>

                  <Option value="s3">执行中</Option>
                  <Option value="s4">已完成</Option>
                </Select>
              </FormItem>
            </Col>
            <Col span="8">
              <FormItem label="测试条件字：">
                <Select v-model="formInline.select">
                  <Option value="s0">全部</Option>
                  <Option value="s1">未启动</Option>
                  <Option value="s2">已启动</Option>

                  <Option value="s3">执行中</Option>
                  <Option value="s4">已完成</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="8">
              <FormItem label="执行状态：">
                <Select v-model="formInline.select">
                  <Option value="s0">全部</Option>
                  <Option value="s1">未启动</Option>
                  <Option value="s2">已启动</Option>

                  <Option value="s3">执行中</Option>
                  <Option value="s4">已完成</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <!-- end -->

          <Row>
            <Col span="24">
              <FormItem>
                <Button type="primary">查询</Button>
                <Button type="primary" icon="ios-add">新增订单</Button>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        value1: "",
        border: "全部",
        select: "s0",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.search-comp {
  .seabg {
    background-color: #f8f8f9;
    // min-height: 150px;
    border: 1px #e8eaec solid;
    margin-bottom: 8px;
    .seacon {
      padding: 10px;
      padding-top: 18px;
      padding-right: 30px;
      .ivu-form-item {
        margin-bottom: 0;
        width: 100%;
        .ivu-btn {
          margin-right: 8px;
        }
      }
      .ivu-row {
        margin-bottom: 8px;
      }
    }
    .ivu-radio-border {
      padding: 0 8px;
    }
    ::v-deep .ivu-form-item-content {
      width: calc(100% - 100px);
    }
    ::v-deep .ivu-form .ivu-form-item-label {
      padding-right: 0;
    }
  }
}
</style>