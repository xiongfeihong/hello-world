export function exportBlob(res) {
  let blob = res.data;
  const strs = res.headers["content-disposition"];
  const list = strs.split(";");
  const fileName = decodeURIComponent(
    list[list.length - 1].split("=")[1]
  );
  const fileType = fileName.split(".");
  downloadBlob(blob, fileName);
}
/** 
* Response Headers 1
* Content-Disposition: attachment;filename=general-Template.xlsx
* Content-Type: application/octet-stream
*
* Response Headers 2
* Content-Disposition: attachment;name=file;filename=grid_tot_20220412130835.csv
* Content-Type: multipart/form-data
*
*/

function downloadBlob(blob, fileName) {
  if ("download" in document.createElement("a")) {
    // 非ie下载
    const elink = document.createElement("a");
    elink.download = fileName;
    elink.style.display = "none";
    elink.href = URL.createObjectURL(blob);
    document.body.appendChild(elink);
    elink.click();
    URL.revokeObjectURL(elink.href); // 释放URL对象
    document.body.removeChild(elink);
  } else {
    // ie10+下载
    navigator.msSaveOrOpenBlob(blob, fileName);
  }
} 
