import Vue from 'vue'
import Router from 'vue-router'

/**
 * 
 * @argument 'FinancialConsultantInfo'  组件名称
 * @argument '@/components/FinancialConsultantInfo'   组件地址
 * 
 */
import FinancialConsultantInfo from '@/pages/FinancialConsultantInfo'
import ShowProject from '@/pages/ShowProject.vue'
import StoreTest from '@/pages/storeTest.vue'

Vue.use(Router)

export default new Router({
  mode:'history',


  routes: [
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
    },
/**
 * 项目信息页面
 */
    {
      path:'/showProject',
      name:'ShowProject',
      component: ShowProject
    },
    /**
 * 测试store
 */
     {
      path:'/storeTest',
      name:'StoreTest',
      component: StoreTest
    }

  ]
})
