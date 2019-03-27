import moment from "moment";
// 过滤日期格式
const formatTimer = function(val, formatter) {
  if (val) {
    if (formatter) {
      return moment(val).format(formatter);
    } else {
      return moment(val);
    }
  }
};
export { formatTimer };
