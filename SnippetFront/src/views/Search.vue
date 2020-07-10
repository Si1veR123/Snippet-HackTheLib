<template>
<div>
    <div style="width: 100%; text-align: center;">
        <input id="search" type="text" placeholder="Search..."/>
        <button @click="search">Search</button>
    </div>
    <hr style="width: 80%; margin-left: 10%;">

    <div id="snippet-flexbox">
        <div v-for="snippet in snippets" :key="snippet.id" class="snippet-preview" @click="$router.push('snippets/' + snippet.id)">
            <h2>{{ snippet.name }}</h2>
            <h3>{{ snippet.date }}</h3>
            <p style="width: 100%;">{{ snippet.description }}</p>
            <div class="snippet-tags">
                <div class="snippet-tag" v-for="tag in snippet.tags" :key="tag.id">
                    <p>{{ tag.name }}</p>
                </div>
            </div>
            <div class="snip-info">
                <i class="material-icons" style="font-size: 2vh; color: orange;">content_cut</i>
                <span style="font-size: 3vh;">{{ snippet.snips.length }}</span>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import axios from 'axios';
import cookies from '../cookie.js';
import $ from 'jquery';


export default {
    name: "Search",
    data() {
        return {
            snippets: {}
        }
    },
    methods: {
        search: function() {
            axios.post(
                process.env.VUE_APP_ROOT + "api/search/",
                {
                    searchid: $("#search").val()
                },
                {
                    headers: {"Authorization": "Token " + cookies.getCookie("authtoken")}
                }
            ).then((response) => {
                this.snippets = response.data
            })
        }
    }
}

</script>

<style scoped>

input {
    border: 2px solid blue;
    border-radius: 1em;
    outline: 0;
    padding-left: 1em;
    width: 55vw;
    height: 42px;
    margin: 5vh 1vw;
    font-family: inherit;
    font-size: 14px;
    transition: all .3s;
}

button {
    border: 2px solid blue;
    border-radius: 1em;
    outline: 0;
    padding-left: 1em;
    width: 10vw;
    height: 48px;
    margin: 5vh 5vw;
    font-family: inherit;
    font-size: 14px;
    transition: all .3s;
    background-color: dodgerblue;
    cursor: pointer;
    color: white;
}

input:focus {
    border-color: lightblue;
}

#snippet-view-flexbox {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
}

.snip-info {
    position: absolute;
    right: 0.5em;
    top: 0.5em;
}

.snippet-preview:hover {
    background-color: rgb(252, 252, 255);
    box-shadow: 0 0 10em rgb(220, 220, 220);
    transform: scale(1.05);
}

.snippet-preview {
    position: relative;
    width: 200px;
    overflow: hidden;
    padding: 1em;
    margin: 1em;
    border-radius: 2em;
    background-color: aliceblue;
    cursor: pointer;
    transition: background-color .3s, box-shadow .3s, transform .5s;
}

</style>
