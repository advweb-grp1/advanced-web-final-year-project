import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ResetView from '../views/ResetView.vue';
import LoginView from '../views/LoginView.vue';
import DashboardView from '../views/DashboardView.vue';
import QueryView from '../views/QueryView.vue';
import RegisterView from '../views/RegisterView.vue';
import ResetUserPasswordView from '../views/ResetUserPasswordView.vue';
import EditUserView from '../views/EditUserView.vue';
import ProfileView from '../views/ProfileView.vue';
import AddView from '../views/AddView.vue';
import MutationsView from '../views/MutationsView.vue';
import DataView from '../views/DataView.vue';
import { requireSignedOut,requireSignedIn } from './routeGuard';
import HelpView from '../views/HelpView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/reset',
      name: 'reset',
      component: ResetView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      beforeEnter: requireSignedOut
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      beforeEnter: requireSignedIn
    },
    {
      path: '/query',
      name: 'query',
      component: QueryView,
      beforeEnter: requireSignedIn
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/addData',
      name: 'addData',
      component: AddView,
      beforeEnter: requireSignedIn
    },
    {
      path: '/reset',
      name: 'reset',
      component: ResetUserPasswordView
    },
    {
      path: '/edit',
      name: 'edit',
      component: EditUserView,
      beforeEnter: requireSignedIn
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      beforeEnter: requireSignedIn
    },
    {
      path: '/mutations',
      name: 'mutations',
      component: MutationsView
    },
    {
      path: '/data',
      name: 'data',
      component: DataView,
      beforeEnter: requireSignedIn
    },
    {
      path: '/help',
      name: 'help',
      component: HelpView,
      beforeEnter: requireSignedIn
    }
  ]
});

export default router;
