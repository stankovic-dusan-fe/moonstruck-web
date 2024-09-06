import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/web2.5academy",
      name: "web2.5academy",
      component: () => import("../views/AcademyView.vue"),
    },
  ],
});

export default router;
