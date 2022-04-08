import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProfilView from '../views/ProfilView.vue';
import RegisterView from '../views/RegisterView.vue';
import LoginView from '../views/LoginView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
          path: "/",
          name: "home",
          component: HomeView
      },
      {
          path: "/profil",
          name: "profil",
          component: ProfilView
      },
      {
          path: "/register",
          name: "register",
          component: RegisterView
      },
      {
          path: "/login",
          name: "login",
          component: LoginView
      },
      {
          path: "/:pathMatch(.*)",
          name: "not-found",
          component: NotFoundView
      }
  ]
})

export default router
