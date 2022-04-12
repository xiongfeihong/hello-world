<template>
  <el-button size="small" type="primary" plain @click="exportData()">导出</el-button>
</template>

<script>
import {
  exportBlob
} from '@/util/export.js'
import statisBoard from "@/apis/apis_export.js";

export default {
  data() {
    return {}
  },
  methods: {
    exportData() {
      let parm = this.getParams();
      statisBoard.exportPersonTotList(parm).then(res => {
        if (res) {
          // 导出csv
          exportBlob(res);
        }
      })
    }    
  }
}

</script>

