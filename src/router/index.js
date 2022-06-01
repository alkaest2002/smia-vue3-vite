import { createRouter, createWebHashHistory } from "vue-router";

import home from "@/views/home.vue";
import reservations from "@/views/reservations.vue";
import certificates from "@/views/certificates.vue";
import therapy from "@/views/therapy.vue";
import about from "@/views/about.vue";

const routes = [
  {
    path: "/",
    name: "route-home",
    component: home,
  },
  {
    path: "/prenotazioni",
    name: "route-reservations",
    component: reservations,
  },
  {
    path: "/certificati",
    name: "route-certificates",
    component: certificates,
  },
  {
    path: "/terapie",
    name: "route-therapy",
    component: therapy,
  },
  {
    path: "/about",
    name: "route-about",
    component: about,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
