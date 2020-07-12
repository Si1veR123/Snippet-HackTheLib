<template>

<div id="snippet-flexbox">
    <h1 v-if="Object.keys(snippets).length === 0" style="color: grey;">Empty</h1>
    <div v-for="snippet in snippets"
        :key="snippet.id"
        class="snippet-preview"
        @click="$router.push('/snippets/' + snippet.id)"
        @mouseover="showDelete($event)"
        @mouseout="hideDelete($event)"
    >
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
            <span style="font-size: 3vh;">{{ snippet.snips_amount }}</span>
        </div>
        <div class="extra delete" v-if="snippet.author === ownId">
            <i class="material-icons" style="font-size: 3vh;" @click.stop="deleteSnippet(snippet.id)">close</i>
        </div>
        <div class="extra snip" v-else>
            <i class="material-icons" style="font-size: 3vh;" :class="{snipped: snippet.snips.indexOf(ownId) !== -1}" @click.stop="snip(snippet)">content_cut</i>
        </div>
    </div>
</div>

</template>

<script>
import $ from 'jquery';
import axios from 'axios';
import cookies from '@/cookie.js';


export default {
    name: "SnippetFlexbox",
    props: ["snippets"],
    data() {
        return {
            ownId: 0,
        }
    },
    methods: {
        showDelete: function(evt) {
            $(evt.target).find(".extra").first().css({opacity: 1});
        },
        hideDelete: function(evt) {
            let children = $("*:hover", evt.target);
            if (children.length === 0) {
                $(evt.target).find(".extra").first().css({opacity: 0});
            }
        },
        deleteSnippet: function(id) {
            axios.delete(
                process.env.VUE_APP_ROOT + "api/snippet/" + id + "/",
                {
                    headers: {"Authorization": "Token " + cookies.getCookie("authtoken")},
                }
            ).then(() => {
                let index = this.snippets.map((item) => {return item.id}).indexOf(id);
                this.snippets.splice(index, 1);
            })
        },
        snip: function(snippet) {
            if (snippet.snips.indexOf(this.ownId) !== -1) {
                return
            }

            axios.post(
                process.env.VUE_APP_ROOT + "api/snip/",{snippetid: snippet.id},{headers: {"Authorization": "Token " + cookies.getCookie("authtoken")}}
            ).then((response) => {
                response
            })
        },
    },
    created: function() {
        var vue = this;
        axios.get(process.env.VUE_APP_ROOT + "api/profile/", {
            headers: {"Authorization": "Token " + cookies.getCookie("authtoken")}
        }).then((response) => {
            vue.ownId = response.data[0].id
        })
    }
}

</script>

<style scoped>

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

.extra {
    position: absolute;
    right: 0.5em;
    top: calc(50% - 1vh);
    opacity: 0;
    transition: opacity .2s, color .5s;
    color: black;
}

.delete:hover {
    color: red;
}

.snip:hover {
    color: orange;
}

.snipped {
    color: lightgrey !important;
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
