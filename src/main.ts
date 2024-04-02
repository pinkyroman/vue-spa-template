import { createApp } from "vue";
import { createI18n } from "vue-i18n";

import "./css/style.css";
import "./css/style.scss";
import "./assets/fonts.css";

import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);
const i18n = createI18n({
  legacy: false,
  locale: "en",
});

app.use(i18n);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
