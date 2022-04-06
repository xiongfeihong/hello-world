<template>
  <div>
    <!-- 下载excel -->
    <el-button class="addbtn" icon="el-icon-download" @click="downTemplate">模板下载</el-button>
    <!-- Excel上传 -->
    <el-upload
      class="upload"
      :limit="1"
      action="#"
      :http-request="exportIn"
      :show-file-list="false"
      :on-change="flieChange"
      accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ref="elUpload"
      >
      <el-button class="addbtn" ref="uploadBtn"  icon="el-icon-upload2" @click="btnBlur">上传</el-button>
</el-upload>
  </div>
</template>

<script>
import apis from "@/apis/apis.js";

export default {
  data(){
    return {
      files: null,
    }
  },
  methods: {
    // 下载模板
    downTemplate(e){
      this.btnBlur(e)
      apis.downLoadTemplate().then(data=>{
        if(data.status==200){
            let res=data.data//请求回来的数据
             let bolb=new Blob([res]);
             let a = document.createElement('a');
             let url = URL.createObjectURL(bolb);
             console.log(url)
             a.href=url;
             a.download='模板.xlsx'
             document.body.appendChild(a);
             a.click();
             document.body.removeChild(a);
             URL.revokeObjectURL(url);
        }
      }).catch(err=>{
        console.log(err)
      })
    },
    // 按钮失焦问题
    btnBlur(e){
      let target = e.target;
      if(target.nodeName=='SPAN'||target.nodeName=='I'){
        target=e.target.parentNode
      };
      target.blur()
    },
    exportIn(){
      if(!this.files){
        return 
      }
      let forms = new FormData();
      forms.append('file',this.files)
      apis.imprtCommission(forms).then(res=>{
       this.files=null;//置空
       this.$refs.elUpload.clearFiles();//上传成功之后清除历史记录
       if(res.data.code==200){
         this.$message.success(res.data.data);
       }else{
         this.$message.warning(res.data.data)
       }
      }).catch(err=>{
        this.$message.error('全部导入失败')
      })
    },
    flieChange(file){
      let extentsion = file.name.substring(file.name.lastIndexOf('.')+1);
      if(!['csv','xls','xltx','xlt','xlsx','xlsm'].includes(extentsion)){
        return  this.$message.warning('只能上传excel表格文件')
      }
      this.files=file.raw;
    },
    
    
  },
}
</script>
