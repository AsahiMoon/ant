import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/views/Login'
// import Register from '@/views/Register'
// import Team from '@/views/Team'
// import TeamWork from '../components/TeamWork'
// import News from '../views/News'
// import CreateTeam from '../views/CreateTeam'
Vue.use(Router)

// 懒加载方案
const login = () => import('@/views/Login')
const Register = () => import('@/views/Register')
const Team = () => import('@/views/Team')
const TeamWork = () => import('../components/TeamWork')
const News = () => import('../views/News')
const CreateTeam = () => import('../views/CreateTeam')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/TeamWork',
      name: 'TeamWork',
      component: TeamWork,
      children: [
        {
          path: '/Team',
          name: Team,
          component: Team
        },
        {
          path: '/News',
          name: News,
          component: News
        },
        {
          path: '/CreateTeam',
          name: CreateTeam,
          component: CreateTeam
        }
      ]
    }
  ]
}

)
