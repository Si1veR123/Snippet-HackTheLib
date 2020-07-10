<template>
<div>

<div id="top-background">
    <h1 style="text-align:center; width: 100%; color: white; margin-top: 0;">Community-Not Finished, Coming Soon!</h1>
    <h3 style="text-align:center; width: 100%; color: white; margin-top: 0;">Search and find trending snippets to learn and get tips.</h3>

    <div id="tabs">
        <div class="tab">
            <router-link to="/community/search" :class="{active: $route.path === '/community/search'}">Search</router-link>
        </div>
        <div class="tab">
            <router-link to="/community/featured" :class="{active: $route.path === '/community/featured'}">Featured</router-link>
        </div>
    </div>
</div>


<router-view></router-view>

</div>
</template>

<script>


export default {
    name: "Community",
}

</script>

<style scoped>
h1 {
    font-size: 2em;
}

#top-background {
    padding-top: 2em;
    background-image: linear-gradient(to left, deepskyblue, cyan);
    overflow: hidden;
}

a {
    font-size: 2em;
    text-decoration: none;
    color: white;
    transition: color .3s;
}

#tabs {
    display: flex;
    justify-content: space-around;
    padding: 5vh 5vw 0 5vw;
}

.active {
    color: dodgerblue;
}

.tab {
    padding: 1.2em 8vw 1em 8vw;
    margin: 0 2vw;
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 0 1em grey;
    border-top-left-radius: 2em;
    border-top-right-radius: 2em;
}

@media only screen and (min-width:992px) {
    h1 {
        font-size: 3em;
    }
}

@media only screen and (max-width:992px) {
    a {
        font-size: 1em;
    }
}

@media only screen and (max-width:600px) {
    .tab {
        padding: 0.6em 4vw;
        border-top-left-radius: 1em;
        border-top-right-radius: 1em;
    }
}


</style>
