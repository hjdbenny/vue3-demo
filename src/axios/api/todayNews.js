// import base from "../base";
import instance from "../http";

const todayNews = {
  // 新闻列表
  getTodayNewsList(params) {
    return instance.get(`/api/news/feed/v51`, {
      params: params
    });
  },
  test() {
    return instance.get(
      `https://api.apiopen.top/musicBroadcastingDetails?channelname=public_tuijian_spring`,
      {}
    );
  }
};
export default todayNews;
