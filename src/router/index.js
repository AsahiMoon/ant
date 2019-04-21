import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Team from '@/views/Team'
import TeamWork from '../components/TeamWork'
import News from '../views/News'
import CreateTeam from '../views/CreateTeam'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Resigter',
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
