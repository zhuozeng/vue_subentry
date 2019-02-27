import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
=======
// import HelloWorld from '@/components/HelloWorld'
import home from '../pages/home'
import news from '../pages/news'
import shopping from '../pages/shopping'
import personalCenter from '../pages/personalCenter'
import category from '../pages/category'
import goodsList from '../components/goodsList.vue'
import goodsInfo from '../pages/goodsInfo/'



>>>>>>> 02dd27d6df99852f030c5850c7cf091baa94f68a

Vue.use(Router)

export default new Router({
  routes: [
<<<<<<< HEAD
    
=======
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {path: '/', redirect: '/home' },
    {path:'/home' , component:home},
    {path:'/news' , component:news},
    {path:'/shopping' , component:shopping},
    {path:'/personalCenter' , component:personalCenter},
    {path:'/category' , component:category},
    {path:'/home/goodsList/' , component:goodsList},
    {path:'/goodsInfo/:id' , component:goodsInfo}





>>>>>>> 02dd27d6df99852f030c5850c7cf091baa94f68a
  ]
})
