(this.webpackJsonpsuperhero=this.webpackJsonpsuperhero||[]).push([[0],[,,,,,,,,,,,,function(e,t,s){},,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),r=s(6),n=s.n(r),i=(s(12),s(4)),l=s.n(i),h=s(7),o=s(5),j=(s(14),s(2)),d=s(0);var u=function(e){return Object(d.jsxs)("div",{className:"navbar",children:[Object(d.jsx)("div",{className:"logo",children:" dev-graVity  "}),Object(d.jsxs)("div",{className:"socials",children:[Object(d.jsx)("a",{href:"https://www.linkedin.com/in/akash-sirohi-676b30202/",children:Object(d.jsx)(j.b,{className:"social lin"})}),Object(d.jsx)("a",{href:"https://github.com/belikeakash",children:Object(d.jsx)(j.a,{className:"social git"})})]})]})};s(16);var b=function(e){var t=e.handleChange,s=e.searchText;return console.log(e),Object(d.jsx)("div",{className:"input-feild",children:Object(d.jsx)("input",{id:"search-bar",type:"search",placeholder:"Search Your Character",onChange:t,value:s})})};s(17);var p=function(e){var t=e.data;return console.log(t),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"search-result",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("img",{src:t.image.url,alt:"Hero"})}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsx)("div",{className:"test",children:t.name}),Object(d.jsxs)("h4",{children:[" Real Identity : ",t.biography["full-name"]]}),Object(d.jsxs)("div",{className:"stats",children:[Object(d.jsxs)("div",{children:["Strength : ",t.powerstats.strength]}),Object(d.jsxs)("div",{children:["Speed : ",t.powerstats.speed]}),Object(d.jsxs)("div",{children:["Resistance ",t.powerstats.power]})]})]})]})})};s(18);var x=function(e){var t=e.superheroData,s=void 0===t?[]:t;return console.log(s),Object(d.jsx)("div",{className:"search-results",children:s.map((function(e){return Object(d.jsx)(p,{data:e})}))})};var v=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)([]),n=Object(o.a)(r,2),i=n[0],j=n[1];function p(){return(p=Object(h.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.superheroapi.com/api.php/130702602589533/search/".concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),j(c.results);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.jsxs)("div",{children:[Object(d.jsx)(u,{}),Object(d.jsx)(b,{searchText:s,setSearchText:a,handleChange:function(e){var t=e.target.value;a(t),0===t.length&&j([]),t.length>3&&function(){p.apply(this,arguments)}()}}),Object(d.jsx)(x,{superheroData:i})]})};n.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.f7767d26.chunk.js.map