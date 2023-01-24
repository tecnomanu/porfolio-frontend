import { createRouter, createWebHistory } from "vue-router";
import Profile from "@/views/Profile.vue";
import Dashboard from "@/views/Dashboard.vue";
import PortfolioView from "@/views/PortfolioView.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/profile",
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/portfolios",
    name: "Portfolio",
    component: Profile,
    children: [
      {
        path: ":slug",
        component: PortfolioView
      }
    ]
  },
  {
    path: "/blog",
    name: "Blog",
    component: Profile,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   component: Tables,
  // },
  // {
  //   path: "/billing",
  //   name: "Billing",
  //   component: Billing,
  // },
  // {
  //   path: "/virtual-reality",
  //   name: "Virtual Reality",
  //   component: VirtualReality,
  // },
  // {
  //   path: "/rtl-page",
  //   name: "Rtl",
  //   component: Rtl,
  // },
  // {
  //   path: "/sign-in",
  //   name: "Sign In",
  //   component: SignIn,
  // },
  // {
  //   path: "/sign-up",
  //   name: "Sign Up",
  //   component: SignUp,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
