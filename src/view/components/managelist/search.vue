<template>
  <div class="search-comp">
    <buttonTool
      @onClickSearch="onClickSearch"
      @onClickAdd="onClickAdd"
      @onClickDeleteMany="onClickDeleteMany"
    ></buttonTool>
    <div class="seabg">
      <Divider orientation="left" dashed style="color: #2db7f5"
        >表格数据采集(输入过滤条件后点击工具栏"查询"按钮)</Divider
      >
      <div class="seacon">
        <Form :model="params" inline label-position="right" :label-width="100">
          <Row>
            <Col :span="6">
              <FormItem label="部门编号">
                <Input
                  v-model.trim="params.SN"
                  placeholder="请输入关键字"
                  clearable
                ></Input>
              </FormItem>
            </Col>
            <Col :span="6">
              <FormItem label="部门名称">
                <Input
                  v-model.trim="params.Name"
                  placeholder="请输入关键字"
                  clearable
                ></Input>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>
import buttonTool from "./button-tool";
export default {
  components: { buttonTool },
  data() {
    return {
      params: {
        SN: "",
        Name: "",
      },
    };
  },
  methods: {
    onClickSearch() {
      let arr = [];
      if (this.params.SN) arr.push(`SN.Contains("${this.params.SN}")`);
      if (this.params.Name) arr.push(`Name.Contains("${this.params.Name}")`);
      let whereStr = arr.join(" and ");
      this.$emit("onClickSearch", whereStr);
    },
    onClickAdd() {
      this.$emit("onClickAdd");
    },
    onClickDeleteMany() {
      this.$emit("onClickDeleteMany");
    },
  },
};
</script>
<style lang="scss" scope>
// @import "../../../styles/default/common.scss";
</style>