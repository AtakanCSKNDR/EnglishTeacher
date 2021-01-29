import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Questions from "../views/Questions/Questions.vue";
import Result from "../views/Questions/Result.vue";
import Quiz from "../views/Questions/Quiz.vue";
import Verbs from "../views/Verbs.vue";
import VerbDetail from "../views/VerbDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Questions",
    name: "Questions",
    component: Questions,
  },
  {
    path: "/Quiz",
    name: "Quiz",
    component: Quiz,
    props: true,
  },
  {
    path: "/Result",
    name: "Result",
    component: Result,
    props: true,
  },
  {
    path: "/Verbs",
    name: "Verbs",
    component: Verbs,
  },

  {
    path: "/VerbDetail",
    name: "VerbDetail",
    component: VerbDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
