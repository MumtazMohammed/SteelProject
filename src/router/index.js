import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../views/MainPage.vue";
import AboutPage from "../views/AboutPage.vue";
import ProductPage from "../views/ProductPage.vue";
import ContactPage from "../views/ContactPage.vue";//---------bootstrap import---------//
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/product",
    name: "ProductPage",
    component: ProductPage,
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: ContactPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
