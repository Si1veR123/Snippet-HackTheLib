<template>

<div id="login-form-container">
    <div style="padding: 3em 1em; width: 80%; background-color: aliceblue; border-radius: 2em; text-align: center; box-shadow: 0 0 1vh aliceblue;">
        <h1>Login <br><router-link to="/signup" style="color: rgb(200, 200, 200); text-decoration: none; transition: color .2s;">or Signup for free!</router-link></h1>
        <form action="http://localhost:8000/auth/login/" method="post" @submit="formSubmit($event)">
            <p style="color: red" class="error"></p>
            <input autocomplete="username" required type="text" name="username" placeholder="Username">
            <br>
            <input autocomplete="current-password" required type="password" name="password" placeholder="Password">
            <br>
            <input type="submit" value="Login">
        </form>
    </div>
</div>

</template>

<script>
import axios from 'axios';
import $ from 'jquery';
import cookies from "../cookie.js";


export default {
    name: "login",
    methods: {
        formSubmit: function(e) {
            var router = this.$router;

            e.preventDefault();
            let form = $(e.target);

            axios.post(process.env.VUE_APP_ROOT + "auth/login/", {
                data: JSON.stringify({
                    username: form.find("input[name=username]").val(),
                    password: form.find("input[name=password]").val(),
                }),
                headers: {'Content-Type': 'application/json' }
            }).then((response) => {
                if (response.data.success) {
                    cookies.setCookie("authtoken", response.data.token, 7);
                    router.push("/snippets");
                } else {
                    $(".error").text("Invalid Login")
                }
            })
        }
    }
}

</script>

<style scoped>
a:hover {
    color: dodgerblue !important;
}

input {
    padding-left: 0.5em;
    width: 50vw;
    margin: 2em 0;
    height: 2em;
    border-radius: 0.5em;
    border: solid 1px dodgerblue;
    transition: all .2s;
    font-family: inherit;
}

input:focus {
    outline: none;
    box-shadow: 0 0 1vh lightgrey;
}

input[type=submit] {
    background-color: dodgerblue;
    color: white;
    cursor: pointer;
    height: 3em;
}

input[type=submit]:hover {
    background-color: deepskyblue;
}

#login-form-container {
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

</style>
