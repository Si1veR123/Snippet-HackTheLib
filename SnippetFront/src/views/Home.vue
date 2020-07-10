<template>
<div>
    <div id="home-container">
        <div>
            <h1>Welcome to snippet,<br>the <span style="color: deepskyblue;">best</span> code snippet organiser.</h1>
            <h2 style="color: skyblue">How does it work?</h2>
            <ul style="padding: 1em;">
                <li>One <span style="color: orange;">easy to access</span> location for your programming notes.</li>
                <li>Discover <span style="color: orange;">tips and tricks</span> from other programmers.</li>
                <li><span style="color: orange;">Speed up development</span> by copying repetitive code.</li>
            </ul>
        </div>
        <img src="/static/codeExample.png" style="max-height: 40vh; max-width: 80vw;">
        <img src="/static/downArrow.png" style="max-height: 10vh; max-width: 10vw;">
        <img src="/static/snippetExample.png" style="max-height: 40vh; max-width: 80vw;">
        <div style="margin: 1em; width: 100%; border: dashed 2px rgba(120, 120, 120, 0.1);"></div>
        <button @click="start">Get Started</button>
        <div style="margin: 1em; width: 100%; border: dashed 2px rgba(120, 120, 120, 0.1);"></div>
    </div>
</div>
</template>

<script>
import cookies from '../cookie.js';


export default {
  name: 'Home',
  methods: {
    start: function() {
        if (cookies.getCookie("authtoken") === "") {
            this.$router.push('/signup');
            return;
        }
        this.$router.push('/snippets');
    }
  }
}
</script>

<style scoped>
h1, h2, li, p {
    text-align: center;
}

li {
    padding: 0.5em;
}

button {
    width: 50vw;
    margin: 1em;
    padding: 1em;
    height: 4em;
    border: solid 0.1em lightblue;
    border-radius: 0.9em;
    background-image: linear-gradient(to right, deepskyblue, dodgerblue);
    box-shadow: 0 0 1vh dodgerblue;
    color: white;
    font-family: inherit;
    font-size: 1em;
    cursor: pointer;
}

#home-container {
    padding: 5vh 5vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 90%;
    background-color: white;
}

</style>
