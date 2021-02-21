import Vue from 'vue'
import Router from 'vue-router'
import OrderStatus from '@/components/OrderStatus'
import OrderDetails from '@/components/OrderDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OrderStatus',
      component: OrderStatus
    },
    {
      path: '/OrderDetails/:id',
      name: 'OrderDetails',
      component: OrderDetails
    }
  ]
})
