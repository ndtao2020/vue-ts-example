import { createRouter, createWebHistory } from "vue-router";
// routes
import publics from "./publics";

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...publics],
});
