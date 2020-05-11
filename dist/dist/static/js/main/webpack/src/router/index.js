import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import search from '@/view/search/search'
import searchDetail from '@/view/search/searchDetail'
import login from '@/view/login/login'
import market from '@/view/market/market'
import Products from '@/view/Products/products'
import recommend from '@/view/Products/recommend'
import allMarket from '@/view/index/allMarket'
import service from '@/view/service/service'
import indexPay from '@/view/index/pay'
import proPay from '@/view/Products/pay'
import RaiderSearch from '@/view/Raiders/search'
import RaidersSearchDetail from '@/view/Raiders/searchDetail'
import newsSearchDetail from '@/view/news/searchDetail'
import newsSearch from '@/view/news/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: 'index'
    },
    {
      path: '/index/allMarket',
      name: 'indexallMarket',
      component: allMarket,
      meta: 'index'
    },
    {
      path: '/search',
      name: 'indexsearch',
      component: search,
      meta: 'index'
    },
    {
      path: '/searchDetail',
      name: 'indexsearchDetail',
      component: searchDetail,
      meta: 'index'
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: 'login'
    },
    {
      path: '/market',
      name: 'market',
      component: market,
      meta: 'market'
    },
    {
      path: '/Products',
      name: 'Products',
      component: Products,
      meta: 'Products'
    },
    {
      path: '/Products/recommend',
      name: 'recommend',
      component: recommend,
      meta: 'Products'
    },
    {
      path: '/Products/pay',
      name: 'ProductsPay',
      component: proPay,
      meta: 'Products'
    },
    {
      path: '/service',
      name: 'service',
      component: service,
      meta: 'service'
    },
    {
      path: '/pay',
      name: 'indexPay',
      component: indexPay,
      meta: 'index'
    },
    {
      path: '/Raiders',
      name: 'Raiders',
      component: RaiderSearch,
      meta: 'Raiders'
    },
    {
      path: '/RaidersSearchDetail',
      name: 'RaidersSearchDetail',
      component: RaidersSearchDetail,
      meta: 'Raiders'
    },
    {
      path: '/news',
      name: 'news',
      component: newsSearch,
      meta: 'news'
    },
    {
      path: '/newsSearchDetail',
      name: 'newsSearchDetail',
      component: newsSearchDetail,
      meta: 'news'
    }
  ]
})



// WEBPACK FOOTER //
// ./src/router/index.js