import axios from 'axios';

export default {
  // 模板下载
  downLoadTemplate(){
    return axios({
      method:'get',
      url:`/fee/business/downloadTemplate`,
      responseType:'blob'
    })
  },
  // 导入文件
  imprtCommission(files){
    return axios({
      method:'post',
      url:`/fee/business/import`,
      data:files,
      headers:{
        "Content-type":"multipart/form-data"
      }
    })
    // return window.origin+`${KONG+'/custom'}}/fee/business/import`
  },
};
