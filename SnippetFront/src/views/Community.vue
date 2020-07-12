<template>
<div>

<div id="top-background">
    <h1 style="text-align:center; width: 100%; color: white; margin-top: 0;">Community-Not Finished, Coming Soon!</h1>
    <h3 style="text-align:center; width: 100%; color: white; margin-top: 0;">Search and find trending snippets to learn and get tips.</h3>

    <div id="tabs">
        <div class="tab" :class="{active: $route.path === '/community/search'}">
            <router-link to="/community/search">Search</router-link>
        </div>
        <div class="tab" :class="{active: $route.path === '/community/featured'}">
            <router-link to="/community/featured">Featured</router-link>
        </div>
    </div>
</div>

<div style="position: relative; width: 100%;">
    <transition name="fade">
        <router-view style="position: absolute; width: 100%;"></router-view>
    </transition>
</div>

</div>
</template>

<script>


export default {
    name: "Community",
}

</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
    transition: all .2s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

h1 {
    font-size: 2.5em;
}

#top-background {
    padding-top: 2em;
    background-image: linear-gradient(to left, deepskyblue, cyan);
    box-shadow: 0 2vh 2vh lightgrey;
}

a {
    font-size: 2em;
    text-decoration: none;
    transition: color .3s;
    color: inherit;
}

#tabs {
    display: flex;
    justify-content: space-around;
    padding: 5vh 5vw 0 5vw;
}

.active {
    color: dodgerblue !important;
    box-shadow: 0 -0.2em 1em -0.5em grey !important;
}

.tab {
    width: 40vw;
    text-align: center;
    padding: 1.2em 8vw 1em 8vw;
    margin: 0 2vw;
    color: white;
    background-color: rgba(0, 0, 0, 0.05);
    border-top-left-radius: 2em;
    border-top-right-radius: 2em;
    transition: box-shadow .3s;
}

@media only screen and (min-width:992px) {
    h1 {
        font-size: 3em;
    }
}

@media only screen and (max-width:992px) {
    a {
        font-size: 1.5em;
    }
}



</style>
