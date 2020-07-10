<template>
<div>
    <div id="profile">
        <h1>{{ username }}</h1>
        <div id="tag-flexbox">
            <div v-for="tag in tags" :key="tag.id">
                <p>{{ tag.name }}</p>
            </div>
        </div>
    </div>
    <div id="filter-bar">
        <button @click="$router.push('/create')">New Snippet<i class="material-icons" style="font-size: inherit;">create</i></button>
        <input v-model="search" id="search" type="text" placeholder="Search..."/>
    </div>
    <hr style="width: 90%; opacity: 0.5;">
    <transition name="fade">
    <div v-show="id === undefined">
        <h1 style="margin-left: 10vw;">Your Snippets: </h1>
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
    </transition>
    <transition name="fade">
    <div v-show="id !== undefined">
        <div id="snippet-view-flexbox">
            <h1 style="font-size: 3em; color: dodgerblue; margin: 0.2em;">{{ viewing.name }}</h1>
            <h3>{{ viewing.date }}</h3>
            <p>{{ viewing.language }}</p>
            <p style="width: 90%; text-align: center;">{{ viewing.description }}</p>
            <div v-html="viewing.code" id="display-code">
            </div>
            <router-link to="/snippets" style="text-decoration: none; color: grey;">Back</router-link>
        </div>
    </div>
    </transition>
</div>
</template>

<script>
import axios from 'axios';
import cookies from '../cookie.js';


export default {
    name: "Snippets",
    props: ["id"],
    data() {
        return {
            username: "Loading...",
            unfiltered_snippets: [],
            snippets: [],
            tags: [],
            viewing: {}, // current viewing snippet
            search: "",
        }
    },
    mounted: function() {
        var vue = this;
        axios.get(process.env.VUE_APP_ROOT + "api/profile/", {
            headers: {"Authorization": "Token " + cookies.getCookie("authtoken")}
        }).then((response) => {
            vue.username = response.data[0].username
        })

        axios.get(process.env.VUE_APP_ROOT + "api/snippet/", {
            headers: {"Authorization": "Token " + cookies.getCookie("authtoken")}
        }).then((response) => {
            vue.snippets = response.data;
            vue.unfiltered_snippets = response.data;

            let tags_unflattened = response.data.map((item) => {
                return item.tags
            })
            vue.tags = [].concat.apply([], tags_unflattened);

            if (this.id) {
            var id = this.id;
            let snippet = this.unfiltered_snippets.map((item) => {
                if (item.id === Number(id)) {
                    return item
                }
            })[id-1]
            this.viewing = snippet;
        }

        })
    },
    watch: {
        id: function() {
            if (this.id) {
                var id = this.id;
                let snippet = this.unfiltered_snippets.filter((item) => {
                    console.log(item, id);
                    if (item.id === Number(id)) {
                        return true
                    }
                    return false
                })[0]
                this.viewing = snippet;
            }
        },
        search: function() {
            if (this.search === "") {
                this.snippets = this.unfiltered_snippets;
                return;
            }
            var search = this.search;
            this.snippets = this.unfiltered_snippets.filter((item) => {
                if (item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
                    return true;
                }
                return false;
            })
        }
    },
}

</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
    transition: all .2s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

h2 {
    color: dodgerblue;
}

#search {
    border: 2px solid blue;
    border-radius: 1em;
    outline: 0;
    padding-left: 1em;
    width: 55vw;
    height: 42px;
    margin-left: 5vw;
    font-family: inherit;
    font-size: 14px;
    transition: border-color .3s;
}

#search:hover, #search:focus {
    border-color: deepskyblue;
}

button {
    background-image: linear-gradient(to right, royalblue, dodgerblue);
    border: 2px solid blue;
    border-radius: 1em;
    outline: 0;
    width: 15vw;
    height: 48px;
    margin-left: 5vw;
    color: white;
    font-family: inherit;
    font-size: 14px;
    cursor: pointer;
    transition: border-color .3s, transform .3s;
}

button:hover {
    border: 2px solid dodgerblue;
    transform: scale(1.05);
}

@media only screen and (max-width: 750px) {
    button {
        font-size: 10px;
    }
}

button p, button i {
    padding: 0.5em;
}

#profile {
    margin: 5vh 0;
    margin-left: 5vw;
    border-radius: 2em;
    width: 90vw;
    background-color: aliceblue;
    color: deepskyblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#tag-flexbox {
    display: flex;
    flex-wrap: wrap;
}

#tag-flexbox div {
    height: 1.5em;
    padding: 0 1em;
    border-radius: 0.3em;
    background-color: grey;
}

#tag-flexbox div p {
    font-size: 1em;
    color: white;
}

#filter-bar {
    height: 4em;
    width: 90%;
    margin-left: 5%;
    border-radius: 0.5em;
    display: flex;
    align-items: center;
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

p {
    word-wrap: break-word;
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

#snippet-view-flexbox {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
}

#display-code {
    width: 80%;
    border-radius: 1em;
    color: white;
    background-color: rgb(30, 30, 30);
    width: calc(80% - 32px);
    height: calc(80% - 32px);
    font-size: 19px;
    margin: 1em;
    padding: 16px;
}
</style>
