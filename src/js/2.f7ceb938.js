(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"71f3":function(t,e,a){"use strict";var r=a("9468"),s=a.n(r);s.a},"8b24":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-center"},[a("FetchCharacters")],1)},s=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"q-pa-xl"},[a("h3",[t._v("Starwars characters")]),a("table",{staticClass:"characters"},[a("tr",[a("th",[t._v("Firstname")]),a("th",[t._v("Lastname")]),a("th",[t._v("Action")])]),a("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Search characters..."},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),t._l(this.currentArray,(function(e,r){return a("tr",{key:r},[a("td",[t._v(t._s(e.firstname))]),a("td",[t._v(t._s(e.lastname))]),a("q-btn-dropdown",{staticClass:"glossy",attrs:{color:"green",label:"more info..."}},[a("div",{staticClass:"q-pa-md"},[a("q-separator",{staticClass:"q-mx-lg",attrs:{vertical:"",inset:""}}),a("div",{staticClass:"bg-primary q-pa-md text-white text-center text-h4"},[t._v(t._s(e.firstname))]),a("table",{staticClass:"characters"},[a("tr",[a("th",[t._v("BirthYear")]),a("th",[t._v("Eye color")]),a("th",[t._v("Hair color")]),a("th",[t._v("Height")])]),a("tr",[a("td",[t._v(t._s(e.charData.birthYear))]),a("td",[t._v(t._s(e.charData.eyeColor))]),a("td",[t._v(t._s(e.charData.hairColor))]),a("td",[t._v(t._s(e.charData.height))])])])],1)])],1)}))],2),t.page>1?a("q-btn",{on:{click:function(e){return t.fetchCharacters(t.page--)}}},[t._v("Previous")]):t._e(),t._v("\n  Page "+t._s(t.page)+" / "+t._s(t.maxpage)+"\n  "),a("q-btn",{on:{click:function(e){return t.fetchCharacters(t.page++)}}},[t._v("Next")])],1)},n=[];a("e6cf"),a("5319");class h{static async fetchCharacters(t,e){const a="https://swapi.dev/api/people";try{return await fetch(`${a}?page=${t}&search=${e}`).then((t=>t.json())).then((t=>t))}catch(r){return console.log(r),r}}}var i=h,l={name:"FetchCharacters2",data(){return{filter:"",currentArray:[],characters:[],page:1,maxpage:1}},mounted(){this.fetchCharacters()},methods:{async fetchCharacters(){const t=await i.fetchCharacters(this.page,this.filter);this.filterData(t)},filterData(t){this.characters=[];for(let e=0;e<t.results.length;e++){const a=t.results[e].name.split(" "),r=(t.results[e].name.replace(" ","-"),{firstname:a[0],lastname:a[1]||"Unknown",charData:{birthYear:t.results[e].birth_year,eyeColor:t.results[e].eye_color,hairColor:t.results[e].hair_color,height:t.results[e].height}});this.characters.push(r)}this.currentArray=this.characters,this.maxpage=t.count/10,this.maxpage=Math.ceil(this.maxpage)}},watch:{filter:function(t){this.fetchCharacters()}}},o=l,u=(a("71f3"),a("2877")),p=a("9989"),f=a("27f9"),_=a("0016"),m=a("f20b"),v=a("eb85"),d=a("9c40"),g=a("eebe"),C=a.n(g),b=Object(u["a"])(o,c,n,!1,null,null,null),x=b.exports;C()(b,"components",{QPage:p["a"],QInput:f["a"],QIcon:_["a"],QBtnDropdown:m["a"],QSeparator:v["a"],QBtn:d["a"]});var y={name:"PageIndex",components:{FetchCharacters:x}},w=y,q=Object(u["a"])(w,r,s,!1,null,null,null);e["default"]=q.exports;C()(q,"components",{QPage:p["a"]})},9468:function(t,e,a){}}]);