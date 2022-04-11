import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "DashBoard",
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
