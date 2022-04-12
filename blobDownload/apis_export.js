import GDGridAxios from "axios";

const axios = window._xvueAxios || window._xvueAxiosProxy || GDGridAxios; // 移到编排系统兼容，_xvueAxios是xvue的
const prexUrl = "/sandbox/components/service";
const leadCenterUrl = "/vapp/lead/center/service";
export default {
  exportUptownTotList(data) {
    return axios({
      method: "post",
      url: `${prexUrl}/api/v1/task/management/uptownTotList/export`,
      responseType: "blob",
      data
    });
  },
  
}
