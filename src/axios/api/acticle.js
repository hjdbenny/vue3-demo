import base from "../base";
import instance from "../http";

const article = {
  // 新闻列表
  articleList() {
    return instance.get(`${base.sq}/topics`);
  },
  // 新闻详情,演示
  articleDetail(id, params) {
    return instance.get(`${base.sq}/topic/${id}`, {
      params: params
    });
  },
  // post提交
  login(params) {
    return instance.post(`${base.sq}/accesstoken`, params);
  }
};
export default article;
