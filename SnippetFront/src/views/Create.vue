<template>
<div>
<div id="create-container">
    <form style="text-align: center;" @submit="sendForm($event)">
        <p>Snippet Name:</p>
        <input required name="name" type="text"/>
        <br>
        <p>Language:</p>
        <input required name="language" type="text"/>
        <br>
        <p>Description: </p>
        <textarea maxlength="300" id="create-description" name="description"></textarea>
        <br>
        <p>Code:</p>
        <div id="code-area">
            <div name="code" id="display-code" style="text-align: left;"></div>
            <textarea name="code" id="input-code" @input="updateFormattedCode()"></textarea>
        </div>
        <br>
        <input type="submit" value="Create">
    </form>
</div>
</div>
</template>

<script>
import $ from 'jquery';
import axios from 'axios';
import cookies from '../cookie.js';


export default {
    name: "Create",
    data() {
        return {
            formattedCode: "",
        }
    },
    methods: {
        highlighting: function(code) {
            let words = {
                'print': 'purple',
                'console.log': 'purple',
                'self': 'purple',
                'this': 'purple',
                'return': 'orange',
                'for': 'orange',
                'in': 'orange',
                'import': 'orange',
                'export': 'orange',
                'new': 'orange',
                'function': 'orange',
                'let': 'orange',
                'var': 'orange',
                'def': 'orange',
                'with': 'orange',
                'from': 'orange',
                '\\(': 'purple',
                '\\)': 'purple',
            }

            for (let word of Object.entries(words)) {
                let syntax = word[0];
                let html = '<span style="color: ' + word[1] + '">' + syntax.replace("\\", "") + '</span>';
                code = code.replace(new RegExp(syntax, "g"), html);
            }

            return code;

        },
        characterAndStringParsing: function(code) {
            var before = "";
            var after = "";
            var inElement = false;
            var firstEndBracket = false
            for (let i = 0; i < code.length; i++) {
                let letter = code[i];

                if (letter === "<") {
                    inElement = true;
                    continue;
                } else if (letter === ">" && inElement) {
                    if (firstEndBracket || code[i-1] === "/") {
                        inElement = false;
                        firstEndBracket = false;
                        continue
                    } else {
                        firstEndBracket = true;
                        continue
                    }
                }

                if (inElement) {
                    continue
                }

                // adds <br/> in space of newlines
                if (letter === String.fromCharCode(10) || letter === String.fromCharCode(13)) {
                    if (i === 0) {
                        before = "";
                    } else {
                        before = code.slice(0, i);
                    }

                    if (i === code.length) {
                        after = "";
                    } else {
                        after = code.slice(i+1, code.length)
                    }

                    code = before + "<br/>" + after;
                }

                if (letter == " ") {
                    if (i === 0) {
                        before = "";
                    } else {
                        before = code.slice(0, i);
                    }

                    if (i === code.length) {
                        after = "";
                    } else {
                        after = code.slice(i+1, code.length)
                    }

                    code = before + "&nbsp;" + after;
                }
            }

            return code
        },
        convertToHtml: function(code) {
            code = this.highlighting(code);
            code = this.characterAndStringParsing(code);
            return code
        },
        updateFormattedCode: function() {
            // update height
            $("#code-area").css({height: $("#input-code")[0].scrollHeight});

            let display = $("#display-code");
            let currentCode = $("#input-code").val();
            this.formattedCode = this.convertToHtml(currentCode);
            display.html(this.formattedCode);
        },
        sendForm: function(evt) {
            evt.preventDefault()

            let name = $("input[name=name]").val();
            let language = $("input[name=language]").val();
            let description = $("textarea[name=description]").val();
            let code = this.formattedCode;

            axios.post(
                process.env.VUE_APP_ROOT + "api/snippet/",
                {
                    name: name,
                    language: language,
                    desc: description,
                    code: code,
                },
                {
                    headers: {"Authorization": "Token " + cookies.getCookie("authtoken")}
                }
            )
            this.$router.push("/snippets")
        }
    },
    mounted: function() {
        `
        var vue = this;
        window.addEventListener("keydown", (evt) => {
            let inputCode = $("#input-code");
            if (!inputCode.is(":hover")) {return}
            if (evt.keyCode === 9) {
                evt.preventDefault();
                let textAreaPosition = inputCode.prop("selectionStart");
                inputCode.text(inputCode.text().slice(0, textAreaPosition) + "  " + inputCode.text().slice(textAreaPosition+1, inputCode.text().length));
                vue.formattedCode = vue.convertToHtml(inputCode.text());
                let display = $("#display-code");
                display.html(vue.formattedCode);
            }
        })
        `
    }
}

</script>

<style scoped>
input {
    margin: 1em 0;
    border-radius: 0.5em;
    height: 1.5em;
    width: 50vw;
    border: solid 3px lightblue;
    outline: 0;
    transition: border-color .3s, box-shadow .3s;
}

input[type=submit] {
    height: 3em;
    color: white;
    cursor: pointer;
    background-image: linear-gradient(to right, royalblue, dodgerblue);
    transition: transform .2s, border-color .3s, box-shadow .3s;
}

input[type=submit]:hover {
    transform: scale(1.05);
}

input:focus, input:hover {
    border-color: dodgerblue;
    box-shadow: 0 0 1vh skyblue;
}

#code-area {
    position: relative;
    width: 100%;
    height: 20vh;
    border-radius: 1em;
    transition: height .1s;
}

    /* Hide scrollbar for Chrome, Safari and Opera */
#input-code::-webkit-scrollbar {
  display: none;
}

#input-code {
    color: rgba(30, 30, 30, 0);
    background-color: transparent;
    transition: box-shadow .2s;
    caret-color: white;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

#input-code, #display-code {
    border-radius: 1em;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 32px);
    height: calc(100% - 32px);
    padding: 16px;
    resize: none;
    font-size: 19px;
    outline: none;
    border: 0;
    font-family: inherit;
}

#display-code {
    color: white;
    background-color: rgb(30, 30, 30);
}

#input-code:focus, #input-code:hover {
    box-shadow: 0 0 3vh grey;
}

#create-container {
    margin: 5vh 0 5vh 10vw;
    padding: 3vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: calc(80% - 6vw);
    border-radius: 2em;
    background-color: lightcyan;
}

#create-description {
    border-radius: 1em;
    width: calc(100% - 32px);
    min-height: calc(20vh - 32px);
    padding: 16px;
    resize: none;
    font-size: 19px;
    outline: none;
    border: 0;
    font-family: inherit;
    transition: height .3s, box-shadow .3s;
}

#create-description:focus, #create-description:hover {
    box-shadow: 0 0 2vh lightgrey;
}
</style>
