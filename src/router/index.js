import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    beforeEnter: function routeHome(to, from, next) {
      if (store.getters["isLogin"]) {
        next("/dashboard");
      } else {
        next("/login");
      }
    }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/DashBoard.vue"),
    beforeEnter
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    beforeEnter(to, from, next) {
      store.getters["isLogin"] ? next("/") : next();
    }
  },

  {
    path: "/bakery/category",
    name: "BakeryCategory",
    component: () => import("../views/BakeryCategory.vue"),
    beforeEnter
  },

  {
    path: "/bread/style",
    name: "BreadStyle",
    component: () => import("../views/BreadStyle.vue"),
    beforeEnter
  },

  {
    path: "/emoji",
    name: "Emoji",
    component: () => import("../views/Emoji.vue"),
    beforeEnter
  },

  {
    path: "/terms",
    name: "Terms",
    component: () => import("../views/Terms.vue"),
    beforeEnter
  },

  {
    path: "/terms/:termsTypeId",
    name: "TermDetails",
    component: () => import("../views/TermDetails.vue"),
    beforeEnter
  },

  {
    path: "/terms/:id/form",
    name: "TermForm",
    component: () => import("../views/TermForm.vue"),
    beforeEnter
  },

  {
    path: "*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

function beforeEnter(to, from, next) {
  if (store.getters["isLogin"]) {
    next();
  } else {
    alert("로그인 해주세요. 😊");
    next("/login");
  }
}
