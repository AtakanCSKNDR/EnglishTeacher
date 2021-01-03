import Layout from "@/layout/index.vue";
const base = {
  path: "/View",
  name: "View",
  component: Layout,
  children: [
    {
      path: "/",
      name: "",
      component: () => import("@/views/base/View"),
    },
  ],
};

export default base;
