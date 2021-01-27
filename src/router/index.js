import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home, 
    meta : {
      title : "BlackFist | Home"
    }
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta : {
      title : "BlackFist | About Us"
    }
  },
  {
    path : "/trainers",
    name : "Trainers",
    component : () => import("../views/Trainers"), 
    meta : {
      title : "BlackFist | Our Trainers"
    }
  },
  {
    path : '/blogs',
    component : () => import("../views/Blogs"),
    meta : {
      title : "BlackFist | Our Blogs"
    }
   },
  {
    path : '/blogs/:blog',
    component : () => import("../views/BlogDetail"),
    meta : {
      title : "BlackFist | Our Blogs"
    }
  },
  {
    path : '/products',
    component : () => import("../views/ProductList"),
    meta : {
      title : "BlackFist | Our Products"
    }
  },
  {
    path : '/products/:id',
    component : () => import("../views/ProductDetail"),
    meta : {
      title : "BlackFist | Our Products"
    }
  },
  {
    path : '/sections/:name',
    component : () => import("../views/Section"),
    meta : {
      title : "BlackFist | Our Products"
    }
  },
  {
    path : '/myStore',
    component : () => import("../views/ShoppingCart"),
    meta : {
      title : "BlackFist | My Shopping Cart"
    }
  },
  {
    path : '*',
    name: "Error",
    component : () => import("../views/404"),
    meta : {
      title : "BlackFist | Page Not Found"
    }
  },
];

const router = new VueRouter({
  routes
});

export default router;
