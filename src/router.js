import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
Vue.use(Router)


import ProductsList from './views/ProductsList.vue'
import ProductsAdd from './views/ProductsAdd.vue'
import OrderList from './views/OrderList.vue'
import OrderNew from './views/OrderNew.vue'
import ImagesCover from './views/ImagesCover.vue'
import ImagesAvatar from './views/ImagesAvatar.vue'
import ViewProductDetail from './views/ViewProductDetail.vue'


export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'dashboard',
      component: DashboardLayout,
      beforeEnter: (to, from, next) => {
        if(document.cookie){
          next()
        }else{
          next({path: '/login'})
        }
      },
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue')
        },
        //profile
        {
          path: '/profile',
          name: 'profile',
          component: () => import(/* webpackChunkName: "demo" */ './views/UserProfile.vue')
        },
        //product
        {
          path: '/products-list',
          name: 'products-list',
          component: ProductsList
        },
        {
          path: '/products-add',
          name: 'products-add',
          component: ProductsAdd
        },
        {
          path: '/order-list',
          name: 'order-list',
          component: OrderList
        },
        {
          path: '/new-order',
          name: 'new-order',
          component: OrderNew
        },
        {
          path: '/images-cover',
          name: 'images-cover',
          component: ImagesCover
        },
        {
          path: '/images-avatar',
          name: 'images-avatar',
          component: ImagesAvatar
        },
        {
          path: '/view-product-detail',
          name: 'view-product-detail',
          component: ViewProductDetail
        },
      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "demo" */ './views/Register.vue')
        }
      ]
    }
  ]
})
