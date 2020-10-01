import VueRouter from "vue-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    { path: '/auth/login', component: Login },
    { path: '/auth/register', component: Register },
];

const router = new VueRouter({
    routes // short for `routes: routes`
})

export default router;
