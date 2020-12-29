

    <template>
  <div class="app-container">
    <my-table :col="col" :data="data"></my-table>
  </div>
</template>

<script>
import MyTable from "./MyTable";
export default {
  components: {
    MyTable,
  },
  // children:[{}]
  data() {
    return {
      col: [
        {
          prop: "date",
          label: "数控加工工艺卡",
          children: [
            {
              label: "零件名称",
            },
            {
              label: "零件名称内容",
            },
            {
              label: "材料",
            },
            {
              label: "材料内容",
            },
            {
              label: "每台件数",
            },
            {
              label: "每台件数内容",
            },
            {
              label: "每批件数",
            },
            {
              label: "每批件数内容",
            },
            {
              label: "图号",
            },
            {
              label: "图号内容",
            },
          ],
        },
      ],
      data: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普",
          zip: 200333,
        },
      ],
    };
  },
};
</script>
<style>
</style>
