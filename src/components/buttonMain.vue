<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="search" dot>分类</van-tabbar-item>
      <van-tabbar-item to="/news" icon="friends-o" info="5">新闻</van-tabbar-item>
      <van-tabbar-item to="/shopping" icon="setting-o van-icon-shopping-cart" info="20">购物车</van-tabbar-item>
      <van-tabbar-item to="/mySelf" icon="setting-o" info="20">我的</van-tabbar-item>
    </van-tabbar> 
  </div>
</template>
<script>
export default {
   data(){
    return {
      active: 0 
    }
  }
}
</script>