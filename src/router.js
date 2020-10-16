import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
Vue.use(Router)

//add product
import ProductsList from './views/ProductsList.vue'
import ProductsAdd from './views/ProductsAdd.vue'
import OrderList from './views/OrderList.vue'
import OrderNew from './views/OrderNew.vue'
import ImagesCover from './views/ImagesCover.vue'
import ImagesAvatar from './views/ImagesAvatar.vue'
import ViewProductDetail from './views/ViewProductDetail.vue'
import SaleOff from './views/SaleOff.vue'

//add detail product
import DetailsAddBook from './views/AddDetails/DetailsAddBook.vue'
import DetailsAddToy from './views/AddDetails/DetailsAddToy.vue'
import DetailsAddFashion from './views/AddDetails/DetailsAddFashion.vue'
import DetailsAddHouseholdGoods from './views/AddDetails/DetailsAddHouseholdGoods.vue'
import DetailsAddIT from './views/AddDetails/DetailsAddIT.vue'
import DetailsAddElectronic from './views/AddDetails/DetailsAddElectronic.vue'


export default new Router({
  linkExactActiveClass: 'active',
  mode:"history",
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
        {
          path: '/sale-off',
          name: 'sale-off',
          component: SaleOff
        },
        //thêm biến thể
        {
          path: '/detail-add-book',
          name: 'detail-add-book',
          component: DetailsAddBook
        },
        {
          path: '/detail-add-toy',
          name: 'detail-add-toy',
          component: DetailsAddToy
        },
        {
          path: '/detail-add-fashion',
          name: 'detail-add-fashion',
          component: DetailsAddFashion
        },
        {
          path: '/detail-add-house-hold-goods',
          name: 'detail-add-house-hold-goods',
          component: DetailsAddHouseholdGoods
        },
        {
          path: '/detail-add-information-technology',
          name: 'detail-add-information-technology',
          component: DetailsAddIT
        },
        {
          path: '/detail-add-electronic',
          name: 'detail-add-electronic',
          component: DetailsAddElectronic
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
