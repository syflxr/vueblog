import Vue from 'vue'
import VueRouter from 'vue-router'
import '../components/Login'
import Login from "../components/Login";
import Blogs from "../components/Blogs";
Vue.use(VueRouter)
const routes = [
  {
    path:'/blogs',
    component:Blogs
    // name: 'Blogs',
    // //懒加载
    // component: ()=>import('../components/Blogs.vue')
  },
  {
    path:'/login',
    component:Login
  }
  // ,
  // {
  //   path:'/blog/add',
  //   component: BlogEdit
  // },{
  //   path: '/blog/:blogId/edit',
  //   name: 'BlogEdit',
  //   meta: {
  //     requireAuth: true
  //   },
  //   component: BlogEdit
  // }
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
