import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';
import Snippets from './views/Snippets.vue';
import Create from './views/Create.vue';
import Community from './views/Community.vue';
import Featured from './views/Featured.vue';
import Search from './views/Search.vue';

import cookies from './cookie.js';

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/signup",
        name: "Signup",
        component: Signup
    },
    {
        path: "/community",
        name: "Community",
        component: Community,
        children: [
            {
                path: "search",
                component: Search,
            },
            {
                path: "featured",
                component: Featured,
            }
        ],
    },
    {
        path: "/create",
        name: "Create",
        component: Create,
    },
    {
        path: "/snippets",
        name: "Snippets",
        component: Snippets
    },
    {
        path: "/snippets/:id",
        name: "Snippet",
        props: true,
        component: Snippets
    },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

function inArray(array, item) {
    if (array.indexOf(item) === -1) {
        return false;
    }
    return true;
}

router.beforeEach((to, from, next) => {
    if (cookies.getCookie("authtoken") === "" && !inArray(["Login", "Home", "Signup"], to.name)) {
        document.title = "Snippet - Login";
        next("/login");
        return
    }
    else if (cookies.getCookie("authtoken") !== "" && inArray(["Login", "Signup"], to.name)) {
        return
    }

    document.title = "Snippet - " + to.name;
    next()
})

export default router;
