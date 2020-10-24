import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Login from "@/components/auth/Login.vue";
import Logout from "@/components/auth/Logout.vue";
import MainLayout from "@/components/layouts/MainLayout.vue";
import LoginLayout from "@/components/layouts/LoginLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
        meta: { requiresAuth: true }
      },
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
        meta: { requiresAuth: false }
      }
    ]
  },
  {
    path: '',
    component: LoginLayout,
    children: [
      {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { requiresAuth: false }
      },
      {
        path: "/logout",
        name: "Logout",
        component: Logout,
        meta: { requiresAuth: true }
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && (localStorage.token == null || localStorage.token === 'undefined')) {
    // La route a besoin d'être authentifié, mais pas de user trouvé,
    // on redirige vers la page de login.
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    next('/login');
  } else {
    next();
  }
});

export default router;
