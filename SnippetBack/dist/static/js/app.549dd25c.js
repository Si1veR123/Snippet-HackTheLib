(function(t){function e(e){for(var i,o,s=e[0],c=e[1],p=e[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,p||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},r=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var p=0;p<s.length;p++)e(s[p]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),a=n.n(i);a.a},"0406":function(t,e,n){"use strict";var i=n("f4d1"),a=n.n(i);a.a},"159a":function(t,e,n){},"1c46":function(t,e,n){"use strict";var i=n("159a"),a=n.n(i);a.a},"1d63":function(t,e,n){},"3a3d":function(t,e,n){},"4c6b":function(t,e,n){},5415:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("link",{attrs:{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}}),n("navbar",{attrs:{logoSrc:"/static/logo.png"}}),n("transition",{attrs:{name:"fade"}},[n("router-view",{staticStyle:{position:"absolute",width:"100%",top:"10vh"}})],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"navbar"}},[n("div",{attrs:{id:"nav-dropdown-overflow"}},[n("div",{attrs:{id:"nav-dropdown"}},[n("img",{staticStyle:{height:"2px"},attrs:{src:"/static/dashedline.png"}}),n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("img",{staticStyle:{height:"2px"},attrs:{src:"/static/dashedline.png"}}),n("router-link",{attrs:{to:"/community/search"}},[t._v("Community")]),n("img",{staticStyle:{height:"2px"},attrs:{src:"/static/dashedline.png"}}),n("router-link",{attrs:{to:"/snippets"}},[t._v("Your Snippets")]),n("img",{staticStyle:{height:"2px"},attrs:{src:"/static/dashedline.png"}})],1)]),n("div",{attrs:{id:"navbar-content"}},[n("div",{staticStyle:{width:"5vh"}}),n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:t.logoSrc}})]),n("div",{attrs:{id:"nav-buttons"}},[n("button",{attrs:{id:"menu-button"},on:{click:t.openMenu}},[n("i",{staticClass:"material-icons",staticStyle:{"font-size":"5vh"}},[t._v("menu")])]),n("button",{staticStyle:{opacity:"0",display:"none"},attrs:{id:"close-button"},on:{click:t.closeMenu}},[n("i",{staticClass:"material-icons",staticStyle:{"font-size":"5vh"}},[t._v("close")])])])],1)])},s=[],c=n("1157"),p=n.n(c),u={name:"navbar",props:["logoSrc","options"],data:function(){return{open:!1}},methods:{openMenu:function(){if(!this.open){this.open=!0;var t=p()("#nav-dropdown-overflow");t.animate({height:"60%"});var e=p()("#menu-button"),n=p()("#close-button");e.css({transform:"translateY(-30px)"}),e.animate({opacity:0},200,(function(){e.css({display:"none"})})),n.css({transform:"translateY(0)"}),n.css({display:"initial"}),n.animate({opacity:1},200)}},closeMenu:function(){if(this.open){this.open=!1;var t=p()("#nav-dropdown-overflow");t.animate({height:0});var e=p()("#menu-button"),n=p()("#close-button");e.css({transform:"translateY(0)"}),e.css({display:"initial"}),e.animate({opacity:1},200),n.css({transform:"translateY(30px)"}),n.animate({opacity:0},200,(function(){n.css({display:"none"})}))}}},watch:{$route:function(){this.closeMenu()}}},l=u,d=(n("0406"),n("2877")),h=Object(d["a"])(l,o,s,!1,null,"5145c396",null),f=h.exports,m={name:"App",components:{navbar:f}},v=m,g=(n("034f"),Object(d["a"])(v,a,r,!1,null,null,null)),y=g.exports,b=(n("c975"),n("b0c0"),n("8c4f")),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"home-container"}},[t._m(0),n("img",{staticStyle:{"max-height":"40vh","max-width":"80vw"},attrs:{src:"/static/codeExample.png"}}),n("img",{staticStyle:{"max-height":"10vh","max-width":"10vw"},attrs:{src:"/static/downArrow.png"}}),n("img",{staticStyle:{"max-height":"40vh","max-width":"80vw"},attrs:{src:"/static/snippetExample.png"}}),n("div",{staticStyle:{margin:"1em",width:"100%",border:"dashed 2px rgba(120, 120, 120, 0.1)"}}),n("button",{on:{click:t.start}},[t._v("Get Started")]),n("div",{staticStyle:{margin:"1em",width:"100%",border:"dashed 2px rgba(120, 120, 120, 0.1)"}})])])},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Welcome to snippet,"),n("br"),t._v("the "),n("span",{staticStyle:{color:"deepskyblue"}},[t._v("best")]),t._v(" code snippet organiser.")]),n("h2",{staticStyle:{color:"skyblue"}},[t._v("How does it work?")]),n("ul",{staticStyle:{padding:"1em"}},[n("li",[t._v("One "),n("span",{staticStyle:{color:"orange"}},[t._v("easy to access")]),t._v(" location for your programming notes.")]),n("li",[t._v("Discover "),n("span",{staticStyle:{color:"orange"}},[t._v("tips and tricks")]),t._v(" from other programmers.")]),n("li",[n("span",{staticStyle:{color:"orange"}},[t._v("Speed up development")]),t._v(" by copying repetitive code.")])])])}];n("ac1f"),n("1276");function _(t,e,n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3);var a="expires="+i.toUTCString();document.cookie=t+"="+e+";"+a+";path=/"}function x(t){for(var e=t+"=",n=decodeURIComponent(document.cookie),i=n.split(";"),a=0;a<i.length;a++){var r=i[a];while(" "==r.charAt(0))r=r.substring(1);if(0==r.indexOf(e))return r.substring(e.length,r.length)}return""}var k={getCookie:x,setCookie:_},C=k,O={name:"Home",methods:{start:function(){""!==C.getCookie("authtoken")?this.$router.push("/snippets"):this.$router.push("/signup")}}},$=O,j=(n("d618"),Object(d["a"])($,S,w,!1,null,"1a16297b",null)),T=j.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"login-form-container"}},[n("div",{staticStyle:{padding:"3em 1em",width:"80%","background-color":"aliceblue","border-radius":"2em","text-align":"center","box-shadow":"0 0 1vh aliceblue"}},[n("h1",[t._v("Login "),n("br"),n("router-link",{staticStyle:{color:"rgb(200, 200, 200)","text-decoration":"none",transition:"color .2s"},attrs:{to:"/signup"}},[t._v("or Signup for free!")])],1),n("form",{attrs:{action:"http://localhost:8000/auth/login/",method:"post"},on:{submit:function(e){return e.preventDefault(),t.formSubmit(e)}}},[n("p",{staticClass:"error",staticStyle:{color:"red"}}),n("input",{attrs:{autocomplete:"username",required:"",type:"text",name:"username",placeholder:"Username"}}),n("br"),n("input",{attrs:{autocomplete:"current-password",required:"",type:"password",name:"password",placeholder:"Password"}}),n("br"),n("input",{attrs:{type:"submit",value:"Login"}})])])])},z=[],q=(n("7db0"),n("bc3a")),P=n.n(q),A={name:"login",methods:{formSubmit:function(t){var e=this.$router,n=p()(t.target);P.a.post("/auth/login/",{data:JSON.stringify({username:n.find("input[name=username]").val(),password:n.find("input[name=password]").val()}),headers:{"Content-Type":"application/json"}}).then((function(t){t.data.success?(C.setCookie("authtoken",t.data.token,7),e.push("/snippets")):p()(".error").text("Invalid Login")}))}}},F=A,L=(n("a4a2"),Object(d["a"])(F,E,z,!1,null,"aeb3422c",null)),M=L.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"signup-form-container"}},[n("div",{staticStyle:{padding:"3em 1em",width:"80%","background-color":"aliceblue","border-radius":"2em","text-align":"center","box-shadow":"0 0 1vh aliceblue"}},[n("h1",[t._v("Signup "),n("br"),n("router-link",{staticStyle:{color:"rgb(200, 200, 200)","text-decoration":"none",transition:"color .2s"},attrs:{to:"/login"}},[t._v("or Login")])],1),n("form",{attrs:{action:"http://localhost:8000/auth/signup/",method:"post"},on:{submit:function(e){return e.preventDefault(),t.formSubmit(e)}}},[n("p",{staticClass:"error",staticStyle:{color:"red"}}),n("input",{attrs:{required:"",autocomplete:"username",type:"text",name:"username",placeholder:"Username"}}),n("br"),n("input",{attrs:{required:"",autocomplete:"email",type:"email",name:"email",placeholder:"Email"}}),n("br"),n("input",{attrs:{required:"",autocomplete:"current-password",type:"password",name:"password",placeholder:"Password"}}),n("br"),n("input",{attrs:{type:"submit",value:"Signup"}})])])])},N=[],H={name:"signup",methods:{formSubmit:function(t){var e=this.$router,n=p()(t.target);P.a.post("/auth/signup/",{data:JSON.stringify({username:n.find("input[name=username]").val(),email:n.find("input[name=email]").val(),password:n.find("input[name=password]").val()}),headers:{"Content-Type":"application/json"}}).then((function(t){t.data.success?(C.setCookie("authtoken",t.data.token,7),e.push("/snippets")):p()(".error").text(t.data.info)}))}}},I=H,Y=(n("8bf0"),Object(d["a"])(I,D,N,!1,null,"76f073ce",null)),J=Y.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"profile"}},[n("h1",[t._v(t._s(t.username))]),n("div",{attrs:{id:"tag-flexbox"}},t._l(t.tags,(function(e){return n("div",{key:e.id},[n("p",[t._v(t._s(e.name))])])})),0)]),n("div",{attrs:{id:"filter-bar"}},[n("button",{on:{click:function(e){return t.$router.push("/create")}}},[t._v("New Snippet"),n("i",{staticClass:"material-icons",staticStyle:{"font-size":"inherit"}},[t._v("create")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{id:"search",type:"text",placeholder:"Search..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),n("hr",{staticStyle:{width:"90%",opacity:"0.5"}}),n("div",{staticStyle:{position:"relative"}},[n("transition",{attrs:{name:"fade"}},[n("div",{staticStyle:{position:"absolute",width:"100vw"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:void 0===t.id,expression:"id === undefined"}]},[n("h1",{staticStyle:{"margin-left":"10vw"}},[t._v("Your Snippets: ")]),n("SnippetFlexbox",{attrs:{snippets:t.snippets}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:void 0===t.id,expression:"id === undefined"}]},[n("h1",{staticStyle:{"margin-left":"10vw"}},[t._v("Snipped: ")]),n("SnippetFlexbox",{attrs:{snippets:t.snippedSnippets}})],1)])]),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:void 0!==t.id,expression:"id !== undefined"}],staticStyle:{position:"absolute",width:"100vw"}},[n("div",{attrs:{id:"snippet-view-flexbox"}},[n("h1",{staticStyle:{"font-size":"3em",color:"dodgerblue",margin:"0.2em"}},[t._v(t._s(t.viewing.name))]),n("h3",[t._v(t._s(t.viewing.date))]),n("p",[t._v(t._s(t.viewing.language))]),n("p",{staticStyle:{width:"90%","text-align":"center"}},[t._v(t._s(t.viewing.description))]),n("div",{staticStyle:{"border-radius":"1em",overflow:"hidden",margin:"1em",width:"80%"}},[n("div",{attrs:{id:"display-code"},domProps:{innerHTML:t._s(t.viewing.code)}})]),n("p",{staticStyle:{color:"grey",cursor:"pointer"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("Back")])])])])],1)])},V=[],R=(n("99af"),n("4de4"),n("d81d"),n("a9e3"),n("841c"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"snippet-flexbox"}},[0===Object.keys(t.snippets).length?n("h1",{staticStyle:{color:"grey"}},[t._v("Empty")]):t._e(),t._l(t.snippets,(function(e){return n("div",{key:e.id,staticClass:"snippet-preview",on:{click:function(n){return t.$router.push("/snippets/"+e.id)},mouseover:function(e){return t.showDelete(e)},mouseout:function(e){return t.hideDelete(e)}}},[n("h2",[t._v(t._s(e.name))]),n("h3",[t._v(t._s(e.date))]),n("p",{staticStyle:{width:"100%"}},[t._v(t._s(e.description))]),n("div",{staticClass:"snippet-tags"},t._l(e.tags,(function(e){return n("div",{key:e.id,staticClass:"snippet-tag"},[n("p",[t._v(t._s(e.name))])])})),0),n("div",{staticClass:"snip-info"},[n("i",{staticClass:"material-icons",staticStyle:{"font-size":"2vh",color:"orange"}},[t._v("content_cut")]),n("span",{staticStyle:{"font-size":"3vh"}},[t._v(t._s(e.snips_amount))])]),e.author===t.ownId?n("div",{staticClass:"extra delete"},[n("i",{staticClass:"material-icons",staticStyle:{"font-size":"3vh"},on:{click:function(n){return n.stopPropagation(),t.deleteSnippet(e.id)}}},[t._v("close")])]):n("div",{staticClass:"extra snip"},[n("i",{staticClass:"material-icons",class:{snipped:-1!==e.snips.indexOf(t.ownId)},staticStyle:{"font-size":"3vh"},on:{click:function(n){return n.stopPropagation(),t.snip(e)}}},[t._v("content_cut")])])])}))],2)}),B=[],G=(n("a434"),{name:"SnippetFlexbox",props:["snippets"],data:function(){return{ownId:0}},methods:{showDelete:function(t){p()(t.target).find(".extra").first().css({opacity:1})},hideDelete:function(t){var e=p()("*:hover",t.target);0===e.length&&p()(t.target).find(".extra").first().css({opacity:0})},deleteSnippet:function(t){var e=this;P.a.delete("/api/snippet/"+t+"/",{headers:{Authorization:"Token "+C.getCookie("authtoken")}}).then((function(){var n=e.snippets.map((function(t){return t.id})).indexOf(t);e.snippets.splice(n,1)}))},snip:function(t){-1===t.snips.indexOf(this.ownId)&&P.a.post("/api/snip/",{snippetid:t.id},{headers:{Authorization:"Token "+C.getCookie("authtoken")}}).then((function(t){}))}},created:function(){var t=this;P.a.get("/api/profile/",{headers:{Authorization:"Token "+C.getCookie("authtoken")}}).then((function(e){t.ownId=e.data[0].id}))}}),W=G,K=(n("5dc1"),Object(d["a"])(W,R,B,!1,null,"2362fa58",null)),Q=K.exports,X={name:"Snippets",components:{SnippetFlexbox:Q},props:["id"],data:function(){return{username:"Loading...",unfiltered_snippets:[],snippets:[],tags:[],viewing:{},search:"",snippedSnippets:[]}},methods:{findViewing:function(){if(this.id){var t,e=this.id;t=this.unfiltered_snippets.filter((function(t){return t.id===Number(e)}))[0],void 0===t&&(t=this.snippedSnippets.filter((function(t){return t.id===Number(e)}))[0]),this.viewing=t}}},mounted:function(){var t=this,e=this;P.a.get("/api/profile/",{headers:{Authorization:"Token "+C.getCookie("authtoken")}}).then((function(t){e.username=t.data[0].username})),P.a.get("/api/snippet/",{headers:{Authorization:"Token "+C.getCookie("authtoken")}}).then((function(n){e.snippets=n.data,e.unfiltered_snippets=n.data;var i=n.data.map((function(t){return t.tags}));e.tags=[].concat.apply([],i),t.findViewing()})),P.a.get("/api/snip/",{headers:{Authorization:"Token "+C.getCookie("authtoken")}}).then((function(t){e.snippedSnippets=t.data}))},watch:{id:function(){this.findViewing()},search:function(){if(""!==this.search){var t=this.search;this.snippets=this.unfiltered_snippets.filter((function(e){return-1!==e.name.toLowerCase().indexOf(t.toLowerCase())}))}else this.snippets=this.unfiltered_snippets}}},Z=X,tt=(n("98a6"),Object(d["a"])(Z,U,V,!1,null,"0886dad0",null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"create-container"}},[n("form",{staticStyle:{"text-align":"center"},on:{submit:function(e){return e.preventDefault(),t.sendForm()}}},[n("p",[t._v("Snippet Name:")]),n("input",{attrs:{required:"",name:"name",type:"text"}}),n("br"),n("p",[t._v("Language:")]),n("input",{attrs:{required:"",name:"language",type:"text"}}),n("br"),n("p",[t._v("Description: ")]),n("textarea",{attrs:{maxlength:"300",id:"create-description",name:"description"}}),n("br"),n("p",[t._v("Code:")]),n("div",{attrs:{id:"code-area"}},[n("div",{staticStyle:{"text-align":"left"},attrs:{name:"code",id:"display-code"}}),n("textarea",{attrs:{name:"code",id:"input-code"},on:{input:function(e){return t.updateFormattedCode()}}})]),n("br"),n("input",{attrs:{type:"submit",value:"Create"}})])])])},it=[],at=(n("fb6a"),n("4fad"),n("4d63"),n("25f0"),n("5319"),{name:"Create",data:function(){return{formattedCode:""}},methods:{highlighting:function(t){for(var e={print:"purple","console.log":"purple",self:"purple",this:"purple",return:"orange",for:"orange",in:"orange",import:"orange",export:"orange",new:"orange",function:"orange",let:"orange",var:"orange",def:"orange",with:"orange",from:"orange","\\(":"purple","\\)":"purple"},n=0,i=Object.entries(e);n<i.length;n++){var a=i[n],r=a[0],o='<span style="color: '+a[1]+'">'+r.replace("\\","")+"</span>";t=t.replace(new RegExp(r,"g"),o)}return t},characterAndStringParsing:function(t){for(var e="",n="",i=!1,a=!1,r=0;r<t.length;r++){var o=t[r];if("<"!==o)if(">"===o&&i){if(a||"/"===t[r-1]){i=!1,a=!1;continue}a=!0}else i||(o!==String.fromCharCode(10)&&o!==String.fromCharCode(13)||(e=0===r?"":t.slice(0,r),n=r===t.length?"":t.slice(r+1,t.length),t=e+"<br/>"+n)," "==o&&(e=0===r?"":t.slice(0,r),n=r===t.length?"":t.slice(r+1,t.length),t=e+"&nbsp;"+n));else i=!0}return t},convertToHtml:function(t){return t=this.highlighting(t),t=this.characterAndStringParsing(t),t},updateFormattedCode:function(){p()("#code-area").css({height:p()("#input-code")[0].scrollHeight});var t=p()("#display-code"),e=p()("#input-code").val();this.formattedCode=this.convertToHtml(e),t.html(this.formattedCode)},sendForm:function(){var t=p()("input[name=name]").val(),e=p()("input[name=language]").val(),n=p()("textarea[name=description]").val(),i=this.formattedCode;P.a.post("/api/snippet/",{name:t,language:e,desc:n,code:i},{headers:{Authorization:"Token "+C.getCookie("authtoken")}}),this.$router.push("/snippets")}},mounted:function(){}}),rt=at,ot=(n("6c0d"),Object(d["a"])(rt,nt,it,!1,null,"0d8f6000",null)),st=ot.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"top-background"}},[n("h1",{staticStyle:{"text-align":"center",width:"100%",color:"white","margin-top":"0"}},[t._v("Community")]),n("h3",{staticStyle:{"text-align":"center",width:"100%",color:"white","margin-top":"0"}},[t._v("Search and find trending snippets to learn and get tips.")]),n("div",{attrs:{id:"tabs"}},[n("div",{staticClass:"tab",class:{active:"/community/search"===t.$route.path}},[n("router-link",{attrs:{to:"/community/search"}},[t._v("Search")])],1),n("div",{staticClass:"tab",class:{active:"/community/featured"===t.$route.path}},[n("router-link",{attrs:{to:"/community/featured"}},[t._v("Featured")])],1)])]),n("div",{staticStyle:{position:"relative",width:"100%"}},[n("transition",{attrs:{name:"fade"}},[n("router-view",{staticStyle:{position:"absolute",width:"100%"}})],1)],1)])},pt=[],ut={name:"Community"},lt=ut,dt=(n("dca1"),Object(d["a"])(lt,ct,pt,!1,null,"6847ce87",null)),ht=dt.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("SnippetFlexbox",{staticStyle:{"margin-top":"5vh"},attrs:{snippets:t.snippets}})],1)},mt=[],vt={name:"Featured",components:{SnippetFlexbox:Q},data:function(){return{snippets:{}}},mounted:function(){var t=this;P.a.get("/api/featured/",{headers:{Authorization:"Token "+C.getCookie("authtoken")}}).then((function(e){t.snippets=e.data}))}},gt=vt,yt=(n("1c46"),Object(d["a"])(gt,ft,mt,!1,null,"3b2b3999",null)),bt=yt.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{width:"90%",display:"flex","align-items":"center","justify-content":"space-around",margin:"3vh 5vw"}},[n("input",{attrs:{id:"search",type:"text",placeholder:"Search..."}}),n("button",{on:{click:t.search}},[n("i",{staticClass:"material-icons"},[t._v("search")])])]),n("hr",{staticStyle:{width:"80%","margin-left":"10%"}}),n("SnippetFlexbox",{attrs:{snippets:t.snippets}})],1)},wt=[],_t={name:"Search",components:{SnippetFlexbox:Q},data:function(){return{snippets:{}}},methods:{search:function(){this.$router.push(this.$route.path+"?q="+p()("#search").val()),this.getSnippets()},getSnippets:function(){var t=this;P.a.get("/api/searchsnip/",{headers:{Authorization:"Token "+C.getCookie("authtoken")},params:{searchid:this.$route.query.q}}).then((function(e){t.snippets=e.data}))}},mounted:function(){void 0!==this.$route.query.q&&this.getSnippets()}},xt=_t,kt=(n("6f63"),Object(d["a"])(xt,St,wt,!1,null,"31c0877c",null)),Ct=kt.exports;i["a"].use(b["a"]);var Ot=[{path:"/",name:"Home",component:T},{path:"/login",name:"Login",component:M},{path:"/signup",name:"Signup",component:J},{path:"/community",name:"Community",component:ht,children:[{path:"search",component:Ct,props:function(t){return{query:t.query.q}}},{path:"featured",component:bt}]},{path:"/create",name:"Create",component:st},{path:"/snippets",name:"Snippets",component:et},{path:"/snippets/:id",name:"Snippet",props:!0,component:et}],$t=new b["a"]({mode:"history",routes:Ot});function jt(t,e){return-1!==t.indexOf(e)}$t.beforeEach((function(t,e,n){if(""===C.getCookie("authtoken")&&!jt(["Login","Home","Signup"],t.name))return document.title="Snippet - Login",void n("/login");""!==C.getCookie("authtoken")&&jt(["Login","Signup"],t.name)||(document.title="Snippet - "+t.name,n())}));var Tt=$t;i["a"].config.productionTip=!1,new i["a"]({router:Tt,render:function(t){return t(y)}}).$mount("#app")},"5dc1":function(t,e,n){"use strict";var i=n("1d63"),a=n.n(i);a.a},6219:function(t,e,n){},"6c0d":function(t,e,n){"use strict";var i=n("3a3d"),a=n.n(i);a.a},"6f63":function(t,e,n){"use strict";var i=n("9687"),a=n.n(i);a.a},7924:function(t,e,n){},"85ec":function(t,e,n){},"8bf0":function(t,e,n){"use strict";var i=n("5415"),a=n.n(i);a.a},9687:function(t,e,n){},"98a6":function(t,e,n){"use strict";var i=n("af8e"),a=n.n(i);a.a},a4a2:function(t,e,n){"use strict";var i=n("4c6b"),a=n.n(i);a.a},af8e:function(t,e,n){},d618:function(t,e,n){"use strict";var i=n("7924"),a=n.n(i);a.a},dca1:function(t,e,n){"use strict";var i=n("6219"),a=n.n(i);a.a},f4d1:function(t,e,n){}});
//# sourceMappingURL=app.549dd25c.js.map