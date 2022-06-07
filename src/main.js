import { createApp } from 'vue';
import app from "./app.vue";
import router from "./router";
import appHero from "./views/components/app-hero.vue";
import appPhone from "./views/components/app-phone.vue";
import appAddress from "./views/components/app-address.vue"
import appNavigation from "./views/components/app-navigation.vue";
import baseLayout from "./views/layouts/base-layout.vue";
import fullheightLayout from "./views/layouts/fullheight-layout.vue";

// import css
import "../node_modules/bulma/css/bulma.css";
import "./assets/scss/main.scss";

// create app
const vueApp = createApp(app).use(router);

// register global components
vueApp.component("AppHero", appHero);
vueApp.component("AppNavigation", appNavigation);
vueApp.component("AppPhone", appPhone);
vueApp.component("AppAddress", appAddress);
vueApp.component("BaseLayout", baseLayout);
vueApp.component("FullheightLayout", fullheightLayout);

// mount app
vueApp.mount("#app");