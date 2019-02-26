<template>
  <div class="goodsList">
    <h3>{{$route.query.title}}</h3>
    <div class="goods" v-if="goods_list">
      <ul>
        <router-link  v-for="item in goods_list" :key="item.id" tag="li" :to="'/goodsInfo/' + item.id">
          <img :src="item.cover_img">
          <span>
            <p>{{item.name}}</p>
            <h4>出售价:{{item.sale_price}} | 市场价:{{item.price}}</h4>
          </span>
        </router-link>
      </ul>
    </div>
    <div class="goods" v-else>暂无商品数据哦!</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goods_list: [],
      id: this.$route.query.id 
    };
  },
  created() {
    this.getGoodsSubCategories();
  },
  methods: {
    getGoodsSubCategories() {
      this.$http
        .get("v1/goods/getGoodsList", {
          params: {
            cateId: this.id,
            page: 1,
            pageSize: 10
          }
        })
        .then(result => {
          this.goods_list = result.data.goods;
        });
    }
  }
};
</script>



<style lang="less" scoped>
.goodsList {
  > h3 {
      font-weight: normal;
    font-size: 16px;
    text-align: center;
    height: 24px;
    line-height: 24px;
  }
  .goods {
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
    > ul {
      width: 100%;
      > li {
        font-size: 13px;
        box-sizing: border-box;
        border-radius: 2px;
        box-shadow: 0 0 2px #888888 inset;
        padding: 5px;
        display: flex;
        color: #888;
        margin-bottom: 3px;

        > img {
          width: 100px;
          height: 100px;
        }
        > span {
          width: 100%;
          box-sizing: border-box;
          padding: 0 8px;
          > p {
          }
          > h4 {
            font-weight: normal;
          }
        }
      }
    }
  }
}
</style>
