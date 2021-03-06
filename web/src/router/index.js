import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Course from '@/components/course'
import About from '@/components/about'
import Login from '@/components/login'
import Register from '@/components/register'
import MyCourse from '@/components/myCourse'
import MyMessage from '@/components/myMessage'
import MyAccount from '@/components/MyAccount'
import MyVideo from '@/components/myVideo'
import MobHome from '@/components/mob/mob_home'
import MobHPage from '@/components/mob/mob_hpage'
import MobCourse from '@/components/mob/mob_course'
import MobMy from '@/components/mob/mob_my'
import MobCourseDetails from '@/components/mob/mob_courseDetails'
import MobMyCourse from '@/components/mob/mob_myCourse'
import MobMyVideo from '@/components/mob/mob_myVideo'
import MobMyMessage from '@/components/mob/mob_myMessage'
import MobMyAccount from '@/components/mob/mob_myAccount'
import MobLogin from '@/components/mob/mob_login'
import MobRegister from '@/components/mob/mob_register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Course',
      name: 'Course',
      component: Course
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/MyCourse',
      name: 'MyCourse',
      component: MyCourse
    },
    {
      path: '/MyMessage',
      name: 'MyMessage',
      component: MyMessage
    },
    {
      path: '/MyAccount',
      name: 'MyAccount',
      component: MyAccount
    },
    {
      path: '/MyVideo',
      name: 'MyVideo',
      component: MyVideo
    },
    {
      path: '/MobHome',
      name: 'MobHome',
      component: MobHome,
      children: [             //二级路由
        {
          path: '/MobHPage',
          name: 'MobHPage',
          component: MobHPage
        },
        {
          path: '/MobCourse',
          name: 'MobCourse',
          component: MobCourse
        },
        {
          path: '/MobMy',
          name: 'MobMy',
          component: MobMy
        }
      ],
      redirect: 'MobHPage'
    },
    {
      path: '/MobCourseDetails',
      name: 'MobCourseDetails',
      component: MobCourseDetails
    },
    {
      path: '/MobMyCourse',
      name: 'MobMyCourse',
      component: MobMyCourse
    },
    {
      path: '/MobMyVideo',
      name: 'MobMyVideo',
      component: MobMyVideo
    },
    {
      path: '/MobMyMessage',
      name: 'MobMyMessage',
      component: MobMyMessage
    },
    {
      path: '/MobMyAccount',
      name: 'MobMyAccount',
      component: MobMyAccount
    },
    {
      path: '/MobLogin',
      name: 'MobLogin',
      component: MobLogin
    },
    {
      path: '/MobRegister',
      name: 'MobRegister',
      component: MobRegister
    }
  ]
})
