<template>
<div>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet">
    <navbar :logoSrc="'/static/logo.png'"/>
    <transition name="fade">
        <router-view style="position: absolute; width: 100%; top: 10vh;"></router-view>
    </transition>
</div>
</template>

<script>

import navbar from './components/navbar.vue';

export default {
    name: "App",
    components: {
        navbar
    }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Source+Code+Pro:wght@300;400;600&display=swap');

.fade-enter-active, .fade-leave-active {
    transition: all .2s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

html, body {
    margin: 0 !important;
    font-family: "Source Code Pro", sans-serif;
}

/* Hide scrollbar for Chrome, Safari and Opera */
body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

body {
overflow-x: hidden;
}

</style>
