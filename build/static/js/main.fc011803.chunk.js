(this["webpackJsonpsezzle-calc-client"]=this["webpackJsonpsezzle-calc-client"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),l=n.n(r),i=(n(11),n(2)),o=n.n(i),u=n(5),s=n(1),d=(n(13),n(14),function(e){return c.a.createElement("div",{className:"button-wrapper ".concat((t=e.children,isNaN(t)&&"."!==t&&"="!==t?"operator":null)),onClick:function(){return e.handleClick(e.children)}},e.children);var t}),m=(n(15),function(e){return c.a.createElement("div",null,c.a.createElement("div",{className:"equation"},e.equation))}),f=(n(16),function(e){return c.a.createElement("div",{className:"input"},e.input)}),h=(n(17),function(e){return c.a.createElement("div",{className:"clear-btn",onClick:e.handleClear},e.children)}),E=(n(18),function(e){var t=e.recent.map((function(e){return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"recent-calculation"},e.result))}));return c.a.createElement("div",{className:"recent-wrapper"},t)}),p=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(!1),i=Object(s.a)(l,2),p=i[0],v=i[1],k=Object(a.useState)(""),b=Object(s.a)(k,2),C=b[0],N=b[1],O=Object(a.useState)(""),j=Object(s.a)(O,2),w=(j[0],j[1]),x=Object(a.useState)(""),S=Object(s.a)(x,2),F=(S[0],S[1]),y=Object(a.useState)(void 0),g=Object(s.a)(y,2),z=g[0],q=g[1],J=Object(a.useState)([]),T=Object(s.a)(J,2),A=T[0],B=T[1];Object(a.useEffect)((function(){M()}),[]),Object(a.useEffect)((function(){p&&fetch("https://hidden-wave-54655.herokuapp.com/insert",{headers:{"Content-type":"application/json"},method:"POST",body:JSON.stringify({input:C,output:n,calculation:C+" = "+n})}).then(I).catch((function(e){console.log(e)})),v(!1),N(""),P()}),[p]),Object(a.useEffect)((function(){M()}),[A]);var I=function(e){if(!e.ok)throw Error("".concat(e.status," - ").concat(e.statusText));return e},M=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://hidden-wave-54655.herokuapp.com/recent");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,B(n.data),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),P=function(){w(""),F(""),r(""),q(""),N("")},D=function(e){r((function(t){return t+e})),H(e)},G=function(e){""!==n&&(q(e),N(n),r(""),H(e))},H=function(e){N((function(t){return t+e}))};return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"calc-wrapper"},c.a.createElement(m,{equation:C}),c.a.createElement(f,{input:n}),c.a.createElement("div",{className:"row"},c.a.createElement(d,{handleClick:D},"7"),c.a.createElement(d,{handleClick:D},"8"),c.a.createElement(d,{handleClick:D},"9"),c.a.createElement(d,{handleClick:G},"/")),c.a.createElement("div",{className:"row"},c.a.createElement(d,{handleClick:D},"4"),c.a.createElement(d,{handleClick:D},"5"),c.a.createElement(d,{handleClick:D},"6"),c.a.createElement(d,{handleClick:G},"*")),c.a.createElement("div",{className:"row"},c.a.createElement(d,{handleClick:D},"1"),c.a.createElement(d,{handleClick:D},"2"),c.a.createElement(d,{handleClick:D},"3"),c.a.createElement(d,{handleClick:G},"+")),c.a.createElement("div",{className:"row"},c.a.createElement(d,{handleClick:function(e){-1===n.indexOf(".")&&(r((function(t){return t+e})),H(e)),""==n&&(r("0"+e),N("0"+e))}},"."),c.a.createElement(d,{handleClick:function(e){""==n&&(r("0"),N(e)),""!==n&&(r((function(t){return t+e})),H(e)),"0"==n&&(r(e),N(e))}},"0"),c.a.createElement(d,{handleClick:function(){var e,t=parseFloat(C),a=parseFloat(n);isNaN(t)||isNaN(a)||("+"===z?e=(t+a).toFixed(2):"-"===z?e=(t-a).toFixed(2):"*"===z?e=(t*a).toFixed(2):"/"===z&&(e=(t/a).toFixed(2)),r(parseFloat(e)),q(void 0),v(!0))}},"="),c.a.createElement(d,{handleClick:G},"-")),c.a.createElement("div",{className:"row"},c.a.createElement(h,{handleClear:P},"Clear"))),c.a.createElement(E,{recent:A}))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.fc011803.chunk.js.map