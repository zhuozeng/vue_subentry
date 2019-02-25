import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '../pages/home'
import news from '../pages/news'
import shopping from '../pages/shopping'
import personalCenter from '../pages/personalCenter'
import category from '../pages/category'


Vue.use(Router)

export default new Router({
  routes: [
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
    {path:'/category' , component:category}



  ]
})
