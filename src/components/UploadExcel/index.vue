<template>
  <div class="app-container CAPP-container">
    <input ref="excel-upload-input" class="excel-upload-input" type="file" accept=".xlsx, .xls" @change="handleClick">
     <!-- 表头操作 -->
    <label class="tablab">工艺清单选择：</label>
    <el-select v-model="value" placeholder="请选择" style="margin-right:10px;">
      <el-option-group v-for="group in options" :key="group.label" :label="group.label">
        <el-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-option-group>
    </el-select>

    <el-button type="primary" :loading="loading" plain @click="handleUpload">生成工艺卡</el-button>
<el-button type="primary" plain>查看图纸</el-button>



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



/* pannel标题 */
.pnneltitle{font-size: 14px;color: white;background-color: teal;width: 34px;height: 34px;line-height: 34px;text-align: center;
border-radius: 100px;margin-right: 10px;}
}
</style>



<script>
import XLSX from 'xlsx'

export default {
  props: {
    beforeUpload: Function, // eslint-disable-line
    onSuccess: Function// eslint-disable-line
  },
  data() {
    return {
      loading: false,
      excelData: {
        header: null,
        results: null
      },
      // 零件选择-下拉框
       options: [
        {
          label: "部件ZN-02-00-03",
          options: [
            {
              value: "01",
              label: "下板"
            },
            {
              value: "02",
              label: "上板"
            }
          ]
        },
        {
          label: "部件ZN-02-00-03",
          options: [
            {
              value: "11",
              label: "下板"
            },
            {
              value: "12",
              label: "上板"
            },
            {
              value: "13",
              label: "下板11"
            },
            {
              value: "14",
              label: "上板12"
            }
          ]
        }
      ],
       value: "",
      
    }
  },
  methods: {
    generateData({ header, results }) {
      this.excelData.header = header
      this.excelData.results = results
      this.onSuccess && this.onSuccess(this.excelData)
    },
    handleUpload() {
      this.$refs['excel-upload-input'].click()
    },
    handleClick(e) {
      const files = e.target.files
      const rawFile = files[0] // only use files[0]
      if (!rawFile) return
      this.upload(rawFile)
    },
    upload(rawFile) {
      this.$refs['excel-upload-input'].value = null // fix can't select the same excel

      if (!this.beforeUpload) {
        this.readerData(rawFile)
        return
      }
      const before = this.beforeUpload(rawFile)
      if (before) {
        this.readerData(rawFile)
      }
    },
    readerData(rawFile) {
      this.loading = true
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = e => {
          const data = e.target.result
          const workbook = XLSX.read(data, { type: 'array' })
          const firstSheetName = workbook.SheetNames[0]
          const worksheet = workbook.Sheets[firstSheetName]
          const header = this.getHeaderRow(worksheet)
          const results = XLSX.utils.sheet_to_json(worksheet)
          this.generateData({ header, results })
          this.loading = false
          resolve()
        }
        reader.readAsArrayBuffer(rawFile)
      })
    },
    getHeaderRow(sheet) {
      const headers = []
      const range = XLSX.utils.decode_range(sheet['!ref'])
      let C
      const R = range.s.r
      /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) { /* walk every column in the range */
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
        /* find the cell in the first row */
        let hdr = 'UNKNOWN ' + C // <-- replace with your desired default
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
        headers.push(hdr)
      }
      return headers
    },
    isExcel(file) {
      return /\.(xlsx|xls|csv)$/.test(file.name)
    }
  }
}
</script>

<style scoped>
.excel-upload-input{
  display: none;
  z-index: -9999;
}
.drop{
  border: 2px dashed #bbb;
  width: 600px;
  height: 160px;
  line-height: 160px;
  margin: 0 auto;
  font-size: 24px;
  border-radius: 5px;
  text-align: center;
  color: #bbb;
  position: relative;
}
</style>
