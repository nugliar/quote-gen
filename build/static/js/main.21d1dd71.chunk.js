(this["webpackJsonpquote-page"]=this["webpackJsonpquote-page"]||[]).push([[0],{15:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var n,r=c(0),s=c.n(r),o=c(5),a=c.n(o),i=(c(15),c(4)),u=c(3),j=c(7),d=c.n(j),b=c(9),l=Object(i.b)("quote/fetchQuote",Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.quotable.io/random");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))),h=Object(i.c)({name:"quote",initialState:{item:{},status:"idle",error:null},reducers:{},extraReducers:(n={},Object(u.a)(n,l.pending,(function(e,t){e.status="pending"})),Object(u.a)(n,l.fulfilled,(function(e,t){e.status="succeeded",e.item=t.payload})),Object(u.a)(n,l.rejected,(function(e,t){e.status="rejected",e.error=t.payload})),n)}).reducer,O=function(e){return e.quote.item},p=Object(i.a)({reducer:{quote:h}}),x=c(2),f=c(1),m=function(){var e=Object(x.c)(O),t='text="'.concat(e.content,'" ').concat(e.author),c=Object(f.jsx)("span",{children:Object(f.jsx)("a",{id:"tweet-quote",href:"".concat("https://twitter.com/intent/tweet","?").concat(t,"&").concat("hashtags=quote"),children:Object(f.jsx)("i",{className:"icon-social icon-twitter-sign"})})});return Object(f.jsx)("div",{className:"social-buttons",children:c})},q=function(){var e,t,c=Object(x.b)(),n=Object(x.c)(O),s=Object(x.c)((function(e){return e.quote.status})),o=Object(x.c)((function(e){return e.quote.error}));return Object(r.useEffect)((function(){"idle"===s&&c(l())}),[c,s]),"idle"===s||"pending"===s?(e="...",t="..."):"succeeded"===s?(e=n.author,t=n.content):"rejected"===s&&(e="...",t=o),Object(f.jsxs)("section",{id:"quote-box",children:[Object(f.jsx)("h1",{children:"Quote"}),Object(f.jsx)("p",{id:"text",children:t}),Object(f.jsx)("p",{id:"author",children:Object(f.jsx)("i",{children:e})}),Object(f.jsx)("button",{id:"new-quote",className:"button",onClick:function(){return c(l())},children:"New quote"}),Object(f.jsx)(m,{})]})};var w=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)("header",{className:"App-header",children:[Object(f.jsx)("title",{children:"Quote Box"}),Object(f.jsx)("link",{href:"//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css",rel:"stylesheet"})]}),Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(q,{})})]})};a.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(x.a,{store:p,children:Object(f.jsx)(w,{})})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.21d1dd71.chunk.js.map