(this["webpackJsonpjokes-portal"]=this["webpackJsonpjokes-portal"]||[]).push([[0],{20:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));var r=n(7),c=n.n(r),s=n(10),a=function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://ebrahim-2401d-default-rtdb.asia-southeast1.firebasedatabase.app/jokes.json",{method:"POST",body:JSON.stringify(t),header:{"content-type":"application/json"}});case 3:if(e.sent.ok){e.next=6;break}throw new Error("Error");case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(s.a)(c.a.mark((function e(){var t,n,r,s,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ebrahim-2401d-default-rtdb.asia-southeast1.firebasedatabase.app/jokes.json");case 2:return t=e.sent,e.next=5,t.json();case 5:for(s in n=e.sent,r=[],n)a={id:s,author:n[s].author,content:n[s].content},r.push(a);return e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://ebrahim-2401d-default-rtdb.asia-southeast1.firebasedatabase.app/jokes/".concat(t,".json"));case 3:if((n=e.sent).ok){e.next=6;break}throw new Error("Issue fetching the joke");case 6:return e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()},29:function(e,t,n){},30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(23),a=n.n(s),i=(n(29),n(30),n(2)),o=n(8),u=n(1),j=function(){return Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("div",{children:"Great Jokes"}),Object(u.jsxs)("div",{className:"menu",children:[Object(u.jsx)("div",{children:Object(u.jsx)(o.b,{to:"/jokes",children:"All Jokes"})}),Object(u.jsx)("div",{children:Object(u.jsx)(o.b,{to:"/addjoke",children:"Add A Joke"})})]})]})},d=n(19),b=n(7),h=n.n(b),l=n(10),f=n(15),p=function(e){return Object(u.jsx)("section",{className:"joke",children:Object(u.jsxs)("div",{className:"content",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:e.joke.content}),Object(u.jsx)("div",{children:e.joke.author})]}),Object(u.jsx)("div",{children:Object(u.jsx)(o.b,{to:"/details/".concat(e.joke.id),children:Object(u.jsx)("button",{children:"View FullScreen"})})})]})})},x=n(20),O=[],k=function(){var e=Object(r.useState)(!1),t=Object(f.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)(!1),i=Object(f.a)(a,2),o=i[0],j=i[1];return Object(r.useEffect)((function(){j(!0),function(){var e=Object(l.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.a)();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()().then((function(e){return O=Object(d.a)(e),j(!1),O}))}),[]),function(e,t){e.sort((function(e,n){return t?e.id>n.id?1:-1:e.id<n.id?1:-1}))}(O,n),Object(u.jsxs)("div",{children:[o&&Object(u.jsx)("p",{children:"Loading"}),!o&&Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsxs)("button",{onClick:function(){s((function(e){return!e}))},children:[" ","Sort ",n?"descending":"ascending"]}),O.map((function(e,t){return Object(u.jsx)(p,{joke:e},t)}))]}),0===O.length&&Object(u.jsx)("p",{children:"No Jokes found. Please add jokes to view"})]})},v=c.a.lazy((function(){return Promise.all([n.e(2),n.e(4)]).then(n.bind(null,194))})),m=c.a.lazy((function(){return n.e(5).then(n.bind(null,195))}));var w=function(){return Object(u.jsxs)("div",{className:"centered",children:[Object(u.jsx)(j,{}),Object(u.jsx)(r.Suspense,{fallback:Object(u.jsx)("div",{children:"Loading..."}),children:Object(u.jsxs)(i.e,{children:[Object(u.jsx)(i.c,{path:"/",exact:!0,children:Object(u.jsx)(i.b,{to:"/jokes"})}),Object(u.jsx)(i.c,{path:"/jokes",children:Object(u.jsx)(k,{})}),Object(u.jsx)(i.c,{path:"/addjoke",children:Object(u.jsx)(v,{})}),Object(u.jsx)(i.c,{path:"/details/:jokeId",children:Object(u.jsx)(m,{})})]})})]})};a.a.render(Object(u.jsx)(o.a,{children:Object(u.jsx)(w,{})}),document.getElementById("root"))}},[[37,1,3]]]);
//# sourceMappingURL=main.68f363ed.chunk.js.map