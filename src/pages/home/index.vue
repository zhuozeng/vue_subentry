<template>
  <div class="index_banner">
    <div class="search_form">
      <i>列表</i>
      <van-search style="opcity:0" placeholder="请输入搜索关键词" v-model="value"/>
      <span>搜索</span>
    </div>

    

    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item class="img_list" v-for="(item , index) in banner_list" :key="item.id">
        <img :src="item.img" alt srcset>
      </van-swipe-item>
    </van-swipe>

    <van-row>
      <van-col
        class="SubCategories"
        v-for="(item, index) in GoodsSubCategories_list"
        :key="item.id"
        span="8"
      >

        <router-link :to="'/home/goodsList/?id='+ item.id + '&title=' + item.name" tag="div">
          <img :src="item.img" alt srcset>
          <p>{{item.name}}</p>
        </router-link>
      </van-col>
    </van-row>

     <comment></comment>
    
  </div>
</template>
<script>
import axios from "axios";


export default {
  data() {
    return {
   
      value: "",
      banner_list: [],
      GoodsSubCategories_list: []
    };
  },
  created() {
    this.getBanners();
    this.getNewsCategories();
  },
  methods: {
    getBanners() {
      this.$http.get("v1/home/getBanners").then(result => {
        this.banner_list = result.data;
      });
    },
    getNewsCategories() {
      this.$http
        .get("v1/goods/getGoodsSubCategories?page=1&pageSize=10")
        .then(result => {
          console.log(result);
          this.GoodsSubCategories_list = result.data.cates;
        });
    }
  }
};
</script>
<style lang="less" scoped>
.index_banner {
    padding-bottom: 40px;
  > .search_form {
    position: fixed;
    background: none;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    box-sizing: border-box;
    padding: 0 30px;
    > i,
    > span {
      position: absolute;
      font-size: 14px;
      top: 50%;

      transform: translateY(-50%);
      color: #888;
    }
    > i {
      left: 8px;
      font-style: normal;
    }
    > span {
      right: 8px;
    }
    > div {
     background:none !important;
  }
  }

  
}
.img_list {
  width: 100%;
  > img {
    width: 100%;
    //    height: 100%;
  }
}
.SubCategories {
  > div {
    box-sizing: border-box;
    padding: 10px;
    > img {
      display: block;
      width: 80%;

      margin: 0 auto;
    }
    > p {
      text-align: center;
      font-size: 12px;
      color: #888;
    }
  }
}
</style>
