<template>
<div>

<SnippetFlexbox :snippets="snippets" style="margin-top: 5vh;"/>

</div>
</template>

<script>
import axios from 'axios';
import cookies from '../cookie.js';
import SnippetFlexbox from '@/components/SnippetFlexbox.vue';


export default {
    name: "Featured",
    components: {
        SnippetFlexbox
    },
    data() {
        return {
            snippets: {}
        }
    },
    mounted: function() {
        axios.get(
            process.env.VUE_APP_ROOT + "api/featured/",
            {
                headers: {"Authorization": "Token " + cookies.getCookie("authtoken")},
            }
        ).then((response) => {
            this.snippets = response.data
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
