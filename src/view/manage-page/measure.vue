<template>
  <div class="app-container measure-container">
    <Table border :columns="columns1" :data="data1">
      <!-- 订单名 -->
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>

      <!-- 测量结果 -->
      <template slot-scope="{ row, index }" slot="result">
        <Tag :color="row.result == '合格' ? 'green' : 'red'">{{
          row.result
        }}</Tag>
      </template>
    </Table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 表格
      columns1: [
        {
          title: "订单名",
          slot: "name",
        },
        {
          title: "个性签名",
          key: "ntext",
        },
        {
          title: "工件类型",
          key: "ntype",
        },
        {
          title: "标准值",
          key: "num1",
        },
        {
          title: "测量值",
          key: "num2",
        },

        {
          title: "单位",
          key: "unit",
        },
        {
          title: "公差",
          key: "tole",
        },
        {
          title: "测量结果",
          slot: "result",
        },
      ],
      data1: [
        {
          name: "收纳罐(2d羊)",
          ntext: "1245",
          ntype: "12",
          num1: 18,
          num2: 18,
          unit: 1,
          tole: "2",
          result: "合格",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.measure-container {
  // 背景处理
  background-color: white;
  border-radius: 20px;
  min-height: 85vh;
  min-width: 1200px;
  padding: 20px;
}
</style>