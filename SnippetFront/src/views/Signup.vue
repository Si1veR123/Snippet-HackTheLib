<template>

<div id="signup-form-container">
    <div style="padding: 3em 1em; width: 80%; background-color: aliceblue; border-radius: 2em; text-align: center; box-shadow: 0 0 1vh aliceblue;">
        <h1>Signup <br><router-link to="/login" style="color: rgb(200, 200, 200); text-decoration: none; transition: color .2s;">or Login</router-link></h1>
        <form action="http://localhost:8000/auth/signup/" method="post" @submit.prevent="formSubmit($event)">
            <p style="color: red" class="error"></p>
            <input required autocomplete="username" type="text" name="username" placeholder="Username">
            <br>
            <input required autocomplete="email" type="email" name="email" placeholder="Email">
            <br>
            <input required autocomplete="current-password" type="password" name="password" placeholder="Password">
            <br>
            <input type="submit" value="Signup">
        </form>
    </div>
</div>

</template>

<script>
import axios from 'axios';
import $ from 'jquery';
import cookies from "../cookie.js";


export default {
    name: "signup",
    methods: {
        formSubmit: function(e) {
            var router = this.$router;

            let form = $(e.target);

            axios.post(process.env.VUE_APP_ROOT + "auth/signup/", {
                data: JSON.stringify({
                    username: form.find("input[name=username]").val(),
                    email: form.find("input[name=email]").val(),
                    password: form.find("input[name=password]").val(),
                }),
                headers: {'Content-Type': 'application/json' }
            }).then((response) => {
                if (response.data.success) {
                    cookies.setCookie("authtoken", response.data.token, 7);
                    router.push("/snippets");
                } else {
                    $(".error").text(response.data.info)
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
    width: 50vw;
    padding-left: 0.5em;
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

#signup-form-container {
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

</style>
