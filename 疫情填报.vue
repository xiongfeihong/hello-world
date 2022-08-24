<template>
  <div class="view">
    <el-card shadow="always">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="工号" prop="workno">
                <el-input v-model.trim="ruleForm.workno"></el-input>
              </el-form-item>
              <el-form-item label="姓名" prop="employee">
                <el-input v-model.trim="ruleForm.employee"></el-input>
              </el-form-item>
              <el-form-item label="手机号" prop="telephoneNum">
                <el-input v-model.trim="ruleForm.telephoneNum" maxlength="11" show-word-limit oninput="value=value.replace(/[^\d.]/g,'')"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')"
                  >代码生成
                </el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                <el-button
                  v-clipboard="content"
                  @success="handleSuccess"
                  @error="handleError"
                  >复制代码</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple">
            <el-input
              type="textarea"
              ref="copyContent"
              class="scroll-bar"
              autosize
              placeholder="待复制的代码区"
              v-model="content"
            >
            </el-input>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        workno: "",
        employee: "",
        telephoneNum: "",
      },
      rules: {
        workno: [{ required: true, message: "请输入工号", trigger: "blur" }],
        employee: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        telephoneNum: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { min: 11, message: '11位数字', trigger: 'blur' }
        ],
      },
      content: "",
    };
  },
  created() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.content = `javascript:!function(){"use strict";clearCookie();var wenjuan_url=location.href;if(wenjuan_url.includes("/vm/"))return wenjuan_url=wenjuan_url.replace("/vm/","/vj/"),alert("已切换至PC端地址，请再次点击书签进行自动填写^-^"),void(location.href=wenjuan_url);if(-1!=window.location.href.indexOf("https://www.wjx.cn/wjx/join/complete.aspx"))window.location.href=wenjuan_url;else if(window.location.href!=wenjuan_url)return;window.scrollTo(0,document.body.scrollHeight);var lists=document.querySelectorAll(".ulradiocheck"),ccc=0,liangbiao_index=0,xiala_index=0,ops,bili,temp_flag,tiankong_list,liangbiao_lists,min_options;let today;function leijia(list,num){for(var sum=0,i=0;i<num;i++)sum+=list[i];return sum}function randomNum(minNum,maxNum){switch(arguments.length){case 1:return parseInt(Math.random()*minNum+1,10);case 2:return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);default:return 0}}function isInRange(num,start,end){return num>=start&&num<=end}function danxuan(bili){for(var pp=randomNum(1,100),i=1;i<=bili.length;i++){var start=0,end;if(1!=i&&(start=leijia(bili,i-1)),isInRange(pp,start,leijia(bili,i)))return i-1}}function clearCookie(){var keys=document.cookie.match(/[^ =;]+(?=\=)/g);if(keys)for(var i=keys.length;i--;)document.cookie=keys[i]+"=0;path=/;expires="+new Date(0).toUTCString(),document.cookie=keys[i]+"=0;path=/;domain="+document.domain+";expires="+new Date(0).toUTCString(),document.cookie=keys[i]+"=0;path=/;domain=kevis.com;expires="+new Date(0).toUTCString()}function formatDate(){var date=new Date,y=date.getFullYear(),m=date.getMonth()+1;m=m<10?"0"+m:m;var d=date.getDate();return y+"-"+m+"-"+(d=d<10?"0"+d:d)}tiankong_list=['${this.ruleForm.workno}'],bili=[100],document.querySelector("#q1").value=tiankong_list[danxuan(bili)],tiankong_list=['${this.ruleForm.employee}'],bili=[100],document.querySelector("#q2").value=tiankong_list[danxuan(bili)],tiankong_list=[formatDate()],bili=[100],document.querySelector("#q3").value=tiankong_list[danxuan(bili)],tiankong_list=['${this.ruleForm.telephoneNum}'],bili=[100],document.querySelector("#q4").value=tiankong_list[danxuan(bili)],ops=lists[ccc].querySelectorAll("li"),ccc+=1,ops[danxuan(bili=[100])].click(),ops=lists[ccc].querySelectorAll("li"),ccc+=2,ops[danxuan(bili=[0,100])].click(),ops=lists[ccc].querySelectorAll("li"),ccc+=1,ops[danxuan(bili=[0,100])].click(),ops=lists[ccc].querySelectorAll("li"),ccc+=2,ops[danxuan(bili=[0,100])].click(),ops=lists[ccc].querySelectorAll("li"),ccc+=1,ops[danxuan(bili=[0,100])].click(),ops=lists[ccc].querySelectorAll("li"),ccc+=1,ops[danxuan(bili=[0,100])].click(),ops=lists[ccc].querySelectorAll("li"),ccc+=1,ops[danxuan(bili=[100])].click(),ops=lists[ccc].querySelectorAll("li"),ccc+=1,ops[danxuan(bili=[100])].click(),ops=lists[ccc].querySelectorAll("li"),ccc+=1,ops[danxuan(bili=[100])].click()}();`;
          console.log(
            this.ruleForm.workno,
            this.ruleForm.employee,
            this.ruleForm.telephoneNum
          );
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.content = "";
      this.$refs[formName].resetFields();
    },
    handleSuccess(e) {
      console.log(e);
      this.$message.warning("已成功复制至剪贴板！");
    },
    handleError(e) {
      console.log(e);
      this.$message.warning("复制失败");
    },
  },
};
</script>

<style lang="scss" scoped>
.view {
  width: 90%;
  margin: 0 auto;
}
.el-card {
  padding: 30px 0;
}
// .scroll-bar {
::v-deep .el-textarea__inner {
  overflow-y: auto;
}
// 滚动条里面轨道
// .scroll-bar::-webkit-scrollbar-track{
::v-deep .el-textarea__inner::-webkit-scrollbar-track {
  background-color: #f5f5f5;
  -webit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
}
// 滚动条整体样式
// .scroll-bar::-webkit-scrollbar{
::v-deep .el-textarea__inner::-webkit-scrollbar {
  width: 8px;
  height: 6px;
  background-color: #f1f1f1;
  -webkit-box-shadow: inset 0 0 6px raba(0, 0, 0, 0.22);
  border-radius: 10px;
}
// 滚动条里面小方块
// .scroll-bar::-webkit-scrollbar-thumb{
::v-deep .el-textarea__inner::-webkit-scrollbar-thumb {
  border-radius: 4px;
  height: 30px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  // background-color: #a8a8a8;
}
</style>
