import Vue from "vue";
import App from "./App.vue";
window.axios = require("axios");
window.req = axios.create({
    baseURL: "/"
})

import router from "./router/router";

new Vue({
    router,
    render: h => h(App),
}).$mount("#app");
