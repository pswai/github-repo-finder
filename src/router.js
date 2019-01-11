import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Repositories from "./views/Repositories.vue";
import RepoDetails from "./views/RepoDetails.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/users/:user/repos",
      name: "repos",
      component: Repositories
    },
    {
      path: "/users/:user/repos/:repoName",
      name: "repoDetails",
      component: RepoDetails
    }
  ]
});
