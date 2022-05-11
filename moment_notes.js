// '2022-05-11 11:30:44' => '2022-05-11 19:30:44' 转成北京时间
let time = '2022-05-11 11:30:44';
moment(moment.utc(time).toDate()).format('YYYY-MM-DD HH:mm:ss');

// 日期格式转时间戳比大小
// this.taskForm.effectiveTo 形如 '2022-05-11 11:30:44'
if(
  moment(this.taskForm.effectiveTo).toDate().getTime() < moment(this.taskForm.effectiveFrom).toDate().getTime()
) {
  return this.$message.error('请选择任务有效结束时间少于开始时间');
}
