<template>
  <div class="app-container CAPP-container">
   

<upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" />
<!-- 工艺卡展示 -->
<div class="drawing">
<div class="d-title">
<i class="el-icon-picture pnneltitle"></i><label class="tablab">工艺卡</label>
</div>


    <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
      <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item">
       
      </el-table-column>
    </el-table> 




</div>




  </div>
</template>


<style lang="scss" scoped>
.CAPP-container{
.el-select{
margin-bottom: 10px;

}
.tablab{
  font-size: 14px;
  color: #606266;
    line-height: 40px;vertical-align: middle;
    
}
.drawing{
  border: #E4E7ED 1px solid;
  border-radius: 10px;
  height: 100%;
  min-height: 500px;
  padding: 20px;
  padding-top: 10px;
}


/* pannel标题 */
.pnneltitle{font-size: 14px;color: white;background-color: teal;width: 34px;height: 34px;line-height: 34px;text-align: center;
border-radius: 100px;margin-right: 10px;}
}
</style>

<script>
import UploadExcelComponent from "@/components/UploadExcel/index.vue";

export default {
  name: "UploadExcel",
  components: { UploadExcelComponent },
  data() {
    return {
      tableData: [],
      tableHeader: [
        
      ],
    };
  },
  methods: {
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1;

      if (isLt1M) {
        return true;
      }

      this.$message({
        message: "Please do not upload files larger than 1m in size.",
        type: "warning",
      });
      return false;
    },
    handleSuccess({ results, header }) {
      this.tableData = results;
      this.tableHeader = header;
    },
  },
};
</script>
