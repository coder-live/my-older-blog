import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('@/views/home/Home');
const Notes = () => import('@/views/notes/Notes');
const RandomNotes = () => import('@/views/randomnotes/RandomNotes');
const Introduce = () => import('@/views/introduce/Introduce');
const Projects = () => import('@/views/projects/Projects');

const routes = [
  {
    path: '/',
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/notes",
    component: Notes
  },
  {
    path: "/randomnotes",
    component: RandomNotes
  },
  {
    path: "/introduce",
    component: Introduce
  },
  {
    path: "/projects",
    component: Projects
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
