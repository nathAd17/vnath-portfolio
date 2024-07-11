import { createRouter, createWebHistory } from "vue-router";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Project from "@/views/Project.vue";
import Contact from "@/views/Contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/project",
      name: "project",
      component: Project,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
  ],
});

router.beforeEach((to, from, next) => {
  AOS.init(); // Initialize AOS
  next();
});

export default router;
