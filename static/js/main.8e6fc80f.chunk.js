(this.webpackJsonpmememaker=this.webpackJsonpmememaker||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(7),s=n.n(a),o=n(3),r=(n(13),n(0)),i=function(e){var t=e.temp,n=e.setMeme;return Object(r.jsx)("div",{className:"Templates",children:t.map((function(e){return Object(r.jsx)("div",{className:"template",onClick:function(){n(e)},children:Object(r.jsx)("div",{style:{backgroundImage:"url(".concat(e.url,")")},className:"meme"})},e.id)}))})},m=n(8),u=n(4),l=function(e){var t=e.meme,n=e.setMeme,a=Object(c.useState)({template_id:t.id,username:"RituGupta",password:"Ritu@123",boxes:[]}),s=Object(o.a)(a,2),i=s[0],l=s[1];return Object(r.jsxs)("div",{className:"memebnao",children:[Object(r.jsx)("img",{src:t.url,alt:"meme"}),Object(r.jsx)("div",{children:Object(m.a)(Array(t.box_count)).map((function(e,t){return Object(r.jsx)("input",{type:"text",placeholder:"meme caption-".concat(t+1),onChange:function(e){var n=i.boxes;n[t]={text:e.target.value},l(Object(u.a)(Object(u.a)({},i),{},{boxes:n}))}},t)}))}),Object(r.jsxs)("div",{className:"btns",children:[Object(r.jsxs)("span",{children:[" ",Object(r.jsx)("button",{className:"backbtn",title:"Back",onClick:function(){n(null)},children:"Back"})]}),Object(r.jsx)("span",{children:Object(r.jsx)("button",{className:"generatebutton",onClick:function(){var e="https://api.imgflip.com/caption_image?template_id=".concat(i.template_id,"&username=").concat(i.username,"&password=").concat(i.password);i.boxes.map((function(t,n){return e+="&boxes[".concat(n,"][text]=").concat(t.text)})),console.log(e),fetch(e).then((function(e){return e.json()})).then((function(e){!0===e.success?n(Object(u.a)(Object(u.a)({},t),{},{url:e.data.url})):alert("Enter Some Text")}))},children:"Generate Meme"})}),Object(r.jsx)("span",{children:Object(r.jsx)("button",{className:"generatebutton",onClick:function(){var e=new XMLHttpRequest,n=t.url;e.open("GET",n,!0),e.responseType="blob",e.onload=function(){var e=(window.URL||window.webkitURL).createObjectURL(this.response),t=document.createElement("a");t.href=e,t.download="meme",document.body.appendChild(t),t.click(),document.body.removeChild(t)},e.send()},children:"Save"})})]})]})},b=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),m=Object(o.a)(s,2),u=m[0],b=m[1];return Object(c.useEffect)((function(){fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(e){a(e.data.memes)}))}),[]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"Meme Maker"}),null===u?Object(r.jsx)(i,{temp:n,setMeme:b}):Object(r.jsx)(l,{meme:u,setMeme:b})]})};s.a.render(Object(r.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8e6fc80f.chunk.js.map