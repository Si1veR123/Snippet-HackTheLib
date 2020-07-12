<template>
<div id="navbar">
    <div id="nav-dropdown-overflow">
        <div id="nav-dropdown">
            <img src="/static/dashedline.png" style="height: 2px;">
            <router-link to="/">Home</router-link>
            <img src="/static/dashedline.png" style="height: 2px;">
            <router-link to="/community/search">Community</router-link>
            <img src="/static/dashedline.png" style="height: 2px;">
            <router-link to="/snippets">Your Snippets</router-link>
            <img src="/static/dashedline.png" style="height: 2px;">
        </div>
    </div>
  <div id="navbar-content">
    <div style="width: 5vh;"></div>
    <router-link to="/"><img :src="logoSrc"></router-link>
    <div id="nav-buttons">
        <button @click="openMenu" id="menu-button">
            <i class="material-icons" style="font-size: 5vh;">menu</i>
        </button>
        <button @click="closeMenu" style="opacity: 0; display: none;" id="close-button">
            <i class="material-icons" style="font-size: 5vh;">close</i>
        </button>
    </div>
  </div>
</div>
</template>

<script>
import $ from 'jquery';

export default {
    name: "navbar",
    props: ["logoSrc", "options"],
    data() {
        return {
            open: false,
        }
    },
    methods: {
        openMenu: function() {
            if (this.open) {return}
            this.open = true;
            let dropdown = $("#nav-dropdown-overflow");
            dropdown.animate({height: "60%"});

            let menu = $("#menu-button");
            let close = $("#close-button");

            menu.css({transform: "translateY(-30px)"})
            menu.animate({opacity: 0}, 200, function() {
                menu.css({display: "none"})
            });
            close.css({transform: "translateY(0)"});
            close.css({display: "initial"});
            close.animate({opacity: 1}, 200);
        },
        closeMenu: function() {
            if (!this.open) {return}
            this.open = false;
            let dropdown = $("#nav-dropdown-overflow");
            dropdown.animate({height: 0});

            let menu = $("#menu-button");
            let close = $("#close-button");

            menu.css({transform: "translateY(0)"});
            menu.css({display: "initial"});
            menu.animate({opacity: 1}, 200);
            close.css({transform: "translateY(30px)"})
            close.animate({opacity: 0}, 200, function() {
                close.css({display: "none"})
            });
        }
    },
    watch: {
        $route: function() {
            this.closeMenu()
        }
    }
}

</script>

<style scoped>
button {
    border: 0;
    outline: 0;
    background-color: transparent;
    cursor: pointer;
    transition: color .3s, transform .4s;
    height: 5vh;
    color: rgb(60, 60, 60);
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
}

a {
    display: block;
    color: dodgerblue;
    text-decoration: none;
    font-size: 3vh;
    font-weight: 400;
    transition: color .3s;
}

a:hover {
    color: lightskyblue;
}

#menu-button:hover {
    color: rgb(0, 120, 255);
}

#close-button:hover {
    color: rgb(255, 0, 0);
}

img {
    height: 15vh;
}

#navbar {
    height: 10vh;
    width: 100%;
    
    background-image: linear-gradient(to left, deepskyblue, cyan);
    
    box-shadow: 0 0 4vh rgb(170, 170, 170);
}

#navbar-content {
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;
}

#nav-dropdown-overflow {
    position: absolute;
    top: 10vh;
    height: 0;
    width: 100%;
    overflow: hidden;
}

#nav-dropdown {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 60vh;
    width: 100%;
    top: 0;
    background-color: #eafbfb;
    z-index: 1;
}

#nav-dropdown img {
    transform: rotate(-2deg);
    opacity: 0.08;
}

#nav-buttons {
    position: relative;
    height: 5vh;
    width: 5vh;
}
</style>
