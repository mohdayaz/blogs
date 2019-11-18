import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "./components/bloglist/Landing";
import Blog from "./components/blogs/Blog";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: Landing,
    component: Landing
  },
  {
    path: "/blog/:id",
    component: Blog
  }
];

export default new VueRouter({
  routes
});
