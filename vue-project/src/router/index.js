import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

/**
 * 
 * @argument 'FinancialConsultantInfo'  组件名称
 * @argument '@/components/FinancialConsultantInfo'   组件地址
 * 
 */
import FinancialConsultantInfo from '@/components/FinancialConsultantInfo'

Vue.use(Router)

export default new Router({
  mode:'history',


  routes: [
    {
      path: '/rrr',
      name: 'HelloWorld',
      component: HelloWorld
    },

/**
 * @argument 'path'         组件被访问路径
 * @argument 'name'         组件被访问的另一中形式
 * @argument 'component'    组件：对应于import导入的组件名称
 * 
 */
    {
      path: '/',//理财顾问路由
      name: 'FinancialConsultantInfo',
      component: FinancialConsultantInfo
    }

  ]
})
