import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/login/homepage'

import Login from '@/components/login/Login'
import user from '@/components/login/user'
import login from '@/components/login/Login'
import register from '@/components/login/register'
import problem from '@/components/moudle/view/problems/problem'
import create from '@/components/moudle/view/problems/create'
import run from '@/components/moudle/view/problems/test'
import description from '@/components/moudle/view/problems/description'
import discuss from '@/components/moudle/view/problems/discuss'
import leaderboard from '@/components/moudle/view/problems/leaderboard'
import test from '@/components/moudle/view/problems/test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/users',
      name: 'users',
      component: user
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/problem',
      name: 'problem',
      component: problem
    },
    {
      path: '/create',
      name: 'create',
      component: create
    },
    {
      path: '/run',
      name: 'run',
      component: run
    },
    {
      path: '/description',
      name: 'description',
      component: description
    },
    {
      path: '/discuss',
      name: 'discuss',
      component: discuss
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
      component: leaderboard
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }

  ]
})
