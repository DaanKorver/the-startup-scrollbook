(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{236:function(e,t,n){var content=n(245);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(54).default)("4aa44f84",content,!0,{sourceMap:!1})},243:function(e,t,n){e.exports=n.p+"img/mines-of-moria.2e565f3.png"},244:function(e,t,n){"use strict";n(236)},245:function(e,t,n){var r=n(53)(!1);r.push([e.i,"div.imfell[data-v-198c8de1]{overflow:hidden}.entry[data-v-198c8de1]{height:100vh;display:flex;justify-content:center;align-items:center;flex-direction:column;padding-top:18em;text-align:center}.entry .tngan[data-v-198c8de1]{font-size:2rem}.entry .imfell[data-v-198c8de1]{font-size:1.5rem}.entry .botw[data-v-198c8de1]{font-size:5rem}.entry h1 span[data-v-198c8de1]{opacity:0;color:rgba(216,26,34,0);letter-spacing:1rem;-webkit-text-stroke:1px #d81a22}.entry .botw[data-v-198c8de1],.entry .imfell[data-v-198c8de1],.entry .tngan[data-v-198c8de1]{color:var(--lotr-red);position:relative;z-index:2}.entry img[data-v-198c8de1]{width:40em;position:relative;top:-14em;opacity:0}.cave[data-v-198c8de1]{height:100vh;width:100%;background:var(--black);position:fixed;top:0;opacity:0}.edge[data-v-198c8de1]{color:var(--lotr-grey);position:relative;z-index:3;padding:2em;font-size:2.5rem;height:150vh}.edge p[data-v-198c8de1]{margin-bottom:2rem}@media (orientation:landscape){.entry img[data-v-198c8de1]{width:35em}}",""]),e.exports=r},254:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"entry"},[r("p",{staticClass:"tngan"},[e._v("d")]),e._v(" "),r("p",[e._v("Book Preview")]),e._v(" "),r("h1",{staticClass:"botw"},[r("span",[e._v("BRIDGE")]),r("br"),r("span",[e._v("Of")]),r("br"),r("span",[e._v("KHAZAD DUM")])]),e._v(" "),r("img",{attrs:{src:n(243),alt:"The mines of moria"}})])}],o=(n(44),n(43),n(16),n(55),n(56),n(45),n(26),n(174),n(126),{layout:"lotr",mounted:function(){var e=this;this.transformParagraphs();var t=new ScrollMagic.Controller;gsap.to(".entry img",{top:"-18em",opacity:1,duration:1,delay:.9}),gsap.timeline().to(".entry h1 span",{opacity:1,duration:.75,stagger:.3,delay:.3},"group").to(".entry h1 span",{letterSpacing:"0",duration:.75,stagger:.3,delay:.3},"group").to(".entry h1 span",{textStroke:"1px rgba(216, 26, 34, 0)",color:"rgba(216, 26, 34, 1)",duration:.75});var n=gsap.to(".entry",{scale:7});new ScrollMagic.Scene({triggerElement:".entry",duration:3e3,triggerHook:0}).setPin(".entry").setTween(n).addTo(t);var r=gsap.to(".cave",{opacity:1});new ScrollMagic.Scene({offset:2e3,duration:1e3,triggerHook:0}).setTween(r).addTo(t);var o=Object.keys(this.$refs).filter((function(e){return e.includes("spans")})),d=0;o.map((function(n,r){for(var p=e.$refs[n],i=0;i<p.childElementCount;i++){var o=gsap.to(p.children[i],{color:"#fff",duration:.1});new ScrollMagic.Scene({offset:3400+12*d+16*r,duration:0,triggerHook:0}).setTween(o).addTo(t),console.log(d),d++}}))},methods:{transformParagraphs:function(){var e=this;Object.keys(this.$refs).filter((function(e){return e.includes("spans")})).map((function(t){var p=e.$refs[t],n=p.innerText.split(" ").map((function(e){return'<span style="display: inline-block; color: rgb(126, 127, 127);">'.concat(e,"</span>")}));p.innerHTML=n.join(" ")}))}}}),d=(n(244),n(27)),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"imfell"},[e._m(0),e._v(" "),n("section",{staticClass:"cave"}),e._v(" "),n("section",{staticClass:"edge"},[n("p",{ref:"spans-1"},[e._v("It came to the edge of the fire and the light faded as if a cloud had bent over it.")]),e._v(" "),n("p",{ref:"spans-2"},[e._v("Then with a rush it leaped across the fissure. The flames roared up to greet it, and wreathed about it; and a black smoke swirled in the air.")]),e._v(" "),n("p",{ref:"spans-3"},[e._v("Its streaming mane kindled, and blazed behind it.")]),e._v(" "),n("p",{ref:"spans-4"},[e._v("In its right hand was a blade like a stabbing tongue of fire; in its left it held a whip of many thongs.")])])])}),r,!1,null,"198c8de1",null);t.default=component.exports}}]);