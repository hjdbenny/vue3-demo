/**
 * api接口的统一出口
 */
// 文章模块接口
import article from "./api/acticle";
import todayNews from "./api/todayNews";
// 其他模块的接口……

const api = {
  article,
  todayNews
  // ……
};

// 导出接口
export default api;
