import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gongsi from '@/views/modules/gongsi/list'
    import jianli from '@/views/modules/jianli/list'
    import toudi from '@/views/modules/toudi/list'
    import xueshengjiuye from '@/views/modules/xueshengjiuye/list'
    import yaoqing from '@/views/modules/yaoqing/list'
    import yonghu from '@/views/modules/yonghu/list'
    import zhaopin from '@/views/modules/zhaopin/list'
    import config from '@/views/modules/config/list'
    import dictionaryHanye from '@/views/modules/dictionaryHanye/list'
    import dictionaryJianliSex from '@/views/modules/dictionaryJianliSex/list'
    import dictionaryJiuye from '@/views/modules/dictionaryJiuye/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionaryYuanxi from '@/views/modules/dictionaryYuanxi/list'
    import dictionaryZhaopin from '@/views/modules/dictionaryZhaopin/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryHanye',
        name: '所在行业',
        component: dictionaryHanye
    }
    ,{
        path: '/dictionaryJianliSex',
        name: '性别',
        component: dictionaryJianliSex
    }
    ,{
        path: '/dictionaryJiuye',
        name: '是否就业',
        component: dictionaryJiuye
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryYuanxi',
        name: '院系类型',
        component: dictionaryYuanxi
    }
    ,{
        path: '/dictionaryZhaopin',
        name: '招聘岗位',
        component: dictionaryZhaopin
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gongsi',
        name: '公司',
        component: gongsi
      }
    ,{
        path: '/jianli',
        name: '简历',
        component: jianli
      }
    ,{
        path: '/toudi',
        name: '简历投递',
        component: toudi
      }
    ,{
        path: '/xueshengjiuye',
        name: '学生就业信息',
        component: xueshengjiuye
      }
    ,{
        path: '/yaoqing',
        name: '邀请面试',
        component: yaoqing
      }
    ,{
        path: '/yonghu',
        name: '学生',
        component: yonghu
      }
    ,{
        path: '/zhaopin',
        name: '招聘信息',
        component: zhaopin
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
