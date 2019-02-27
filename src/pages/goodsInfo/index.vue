<template>
  <div class="Product_box">
    <van-nav-bar :title="goodsInfo_details.name" left-text="返回" right-text="按钮" left-arrow/>

    <div class="big_imgs">
      <img @click="button_" :src="this.datu.big_tu" alt>
    </div>
    <!-- <van-button type="default" @click="button_">点击我</van-button> -->
    <div class="Product">
      <span>
        <b>商品名称:</b>
        <p>{{goodsInfo_details.name}}</p>
      </span>
      <span>
        <b>商品价格:</b>
        <p>{{goodsInfo_details.sale_price}}</p>
      </span>
      <span>
        <b>购买数量:{{goodsInfo_details.sale_count}}</b>
        <p></p>
      </span>
      <span>
        <b>商品描述:</b>
        <p>{{goodsInfo_details.description}}</p>
      </span>
      <span>
        <b>商品详情:</b>
      </span>
      <van-goods-action>
        <van-goods-action-mini-btn icon="chat-o" text="客服" @click="onClickMiniBtn"/>
        <van-goods-action-mini-btn icon="cart-o" text="购物车" @click="onClickMiniBtn"/>
        <van-goods-action-big-btn text="加入购物车" @click="onClickBigBtn"/>
        <van-goods-action-big-btn primary text="立即购买" @click="onClickBigBtn"/>
      </van-goods-action>

      <div class="goodsInfo_content" v-html="goodsInfo_details.content"></div>
    </div>
  </div>
</template>

<script>
import { ImagePreview ,Toast } from "vant";

// setTimeout(() => {
//   instance.close();
// }, 1000);
export default {
  data() {
    return {
      datu: {},
      titel: "",
      id: this.$route.params.id,
      goodsInfo_details: []
    };
  },
  created() {
    this.gitProduct();
  },
  mounted() {},
  methods: {
    onClickMiniBtn() {
      Toast("点击图标");
    },
    onClickBigBtn() {
      Toast("点击按钮");
    },

    button_() {
      let list = [];
      for (var i = 0; i < this.goodsInfo_details.big_img.length - 1; i++) {
        list.push(this.goodsInfo_details.big_img[i]);
      }

      ImagePreview(list);
    },
    gitProduct() {
      this.$http.get("v1/goods/getGoodsInfo/" + this.id).then(result => {
        this.goodsInfo_details = result.data;
        this.datu.big_tu = this.goodsInfo_details.big_img[0];
      });
    }

    // onClickLeft() {
    //   Toast("返回");
    // },
    // onClickRight() {
    //   Toast("按钮");
    // }
  }
};
</script>

<style lang="less">
.Product_box {
  .van-goods-action{

   margin-bottom: 50px;
  }
  padding-bottom: 50px;
  .Product {
    > span {
      display: block;
      > p {
        display: inline-block;
      }
    }
  }
  box-sizing: border-box;
  width: 100%;
  .goodsInfo_content {
    box-sizing: border-box;
    padding: 0 5px;
  }
  .goodsInfo_content /deep/ img {
    width: 100%;
  }
  .big_imgs /deep/ img {
    width: 100%;
    height: 300px;
  }
}
</style>
