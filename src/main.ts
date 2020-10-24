import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axiosInstance from '@/modules/axios';
import VueAxios from "vue-axios";
import i18n from "@/modules/i18n/i18n";

createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axiosInstance)
  .use(i18n)
  .mount("#app");
