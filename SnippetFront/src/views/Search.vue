<template>
<div>
    <div style="width: 90%; display: flex; align-items: center; justify-content: space-around; margin: 3vh 5vw;">
        <input id="search" type="text" placeholder="Search..."/>
        <button @click="search"><i class="material-icons">search</i></button>
    </div>
    <hr style="width: 80%; margin-left: 10%;">

    <SnippetFlexbox :snippets="snippets"/>

</div>
</template>

<script>
import axios from 'axios';
import cookies from '../cookie.js';
import $ from 'jquery';
import SnippetFlexbox from '@/components/SnippetFlexbox.vue';


export default {
    name: "Search",
    components: {
        SnippetFlexbox
    },
    data() {
        return {
            snippets: {},
        }
    },
    methods: {
        search: function() {
            this.$router.push(this.$route.path + "?q=" + $("#search").val());
            this.getSnippets();
        },
        getSnippets: function() {
            axios.get(
                process.env.VUE_APP_ROOT + "api/searchsnip/",
                {
                    headers: {"Authorization": "Token " + cookies.getCookie("authtoken")},
                    params: {
                        searchid: this.$route.query.q
                    }
                }
            ).then((response) => {
                this.snippets = response.data
            })
        }
    },
    mounted: function() {
        if (this.$route.query.q !== undefined) {
            this.getSnippets()
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
    font-family: inherit;
    font-size: 14px;
    transition: all .3s;
    background-color: dodgerblue;
    cursor: pointer;
    color: white;
    transition: background-color .3s;
}

button:hover {
    background-color: skyblue;
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

#snippet-flexbox {
    padding: 1vh 5vw;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    flex: 1 2 auto;
    padding-bottom: 10vh;
}

</style>
