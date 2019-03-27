<template>
  <div class="home">
    <myChild :message2="message">
      <!-- <div>不具名的slot</div> -->
      <div slot="hasName">具名的slot</div>
      <template slot-scope="user">
        {{ user.data }}
      </template>
    </myChild>
    父组件{{ message }}
    <ul class="category">
      <li
        v-for="(item, index) in category"
        :key="index"
        class="categort-item"
        @click="
          getTodayNewsList(item.value);
          curentIndex = index;
        "
        :class="{ 'categort-item-active': index === curentIndex }"
      >
        <span>{{ item.name }}</span>
      </li>
    </ul>
    <ul class="list">
      <li v-for="(item, index) in list" :key="index" class="list-item">
        {{ item.content.publish_time | formatTimer("MM-DD") }}
        <img
          v-if="item.content.image_list"
          :src="item.content.image_list[0].url"
          width="40"
          height="40"
        />
        {{ item.content.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import myChild from "../components/Mychild";
export default {
  name: "home",
  data() {
    return {
      message2: "",
      curentIndex: 0,
      category: [
        { name: "热点", value: "news_hot" },
        { name: "视频", value: "video" },
        { name: "社会", value: "news_society" },
        { name: "娱乐", value: "news_entertainment" },
        { name: "问答", value: "question_and_answer" },
        { name: "图片", value: "组图" },
        { name: "科技", value: "news_tech" },
        { name: "汽车", value: "news_car" },
        { name: "体育", value: "news_sport" },
        { name: "财经", value: "news_finance" },
        { name: "军事", value: "news_military" },
        { name: "国际", value: "news_world" },
        { name: "段子", value: "essay_joke" },
        { name: "趣图", value: "image_funny" }
      ],
      list: []
    };
  },
  components: {
    myChild
  },
  computed: {
    message() {
      return this.$store.state.message;
    }
  },
  mounted() {
    this.getTodayNewsList(this.category[0].value);
  },
  methods: {
    getTodayNewsList(category) {
      this.$store.dispatch("getTodayNews", category).then(res => {
        this.list = res.data.data;
        this.list.map(item => {
          item.content = JSON.parse(item.content);
        });
      });
    },
    getData(val) {
      this.message2 = val;
    }
  }
};
</script>
<style lang="scss">
.category {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  .categort-item {
    margin: 0 10px;
    padding: 10px;
    border-bottom: 1px solid transparent;
    &:hover {
      background: coral;
      color: purple;
      border-bottom: 1px solid purple;
      cursor: pointer;
    }
  }
  .categort-item-active {
    border-bottom: 1px solid purple;
  }
}
.list {
  list-style: none;
  .list-item {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      margin: 0 20px;
    }
  }
}
</style>
