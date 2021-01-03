import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

import base from "@/router/modules/base";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  base,
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
