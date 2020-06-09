import Vue from "vue";
import VueRouter from "vue-router";
import Beranda from "../views/Beranda.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Beranda",
    component: Beranda
  },
  {
    path: "/matapelajaran",
    name: "Mapel",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Mapel.vue")
  },

  {
    path: "/kegiatan",
    name: "Kegiatan",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Kegiatan.vue")
  },
  {
    path: "/profil",
    name: "Profil",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Profil.vue")
  },
  {
    path: "/kontak",
    name: "Kontak",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Kontak.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
