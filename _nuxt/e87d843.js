(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,4],{247:function(t,e,n){var r=n(6),o=n(248),d=n(128);r({target:"Array",proto:!0},{fill:o}),d("fill")},248:function(t,e,n){"use strict";var r=n(23),o=n(71),d=n(27);t.exports=function(t){for(var e=r(this),n=d(e),l=arguments.length,f=o(l>1?arguments[1]:void 0,n),c=l>2?arguments[2]:void 0,h=void 0===c?n:o(c,n);h>f;)e[f++]=t;return e}},249:function(t,e,n){var content=n(255);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("097e94d0",content,!0,{sourceMap:!1})},250:function(t,e,n){"use strict";n.r(e);var r=n(129),o=n(130),d=(n(247),function(){function t(e){Object(r.a)(this,t),this.ctx=e,this.x=Math.random()*window.innerWidth,this.y=window.innerHeight+300*Math.random(),this.speed=l(2,4),this.size=l(3,4.5,!1),this.opacity=.4,this.frequency=l(1,2,!1)}return Object(o.a)(t,[{key:"update",value:function(){(this.y<.2*window.innerHeight||this.opacity<=0)&&(this.opacity-=.01),this.y<=0||(this.y-=this.speed,this.x+=2*Math.sin(this.frequency*(this.y/window.innerHeight)*2*Math.PI))}},{key:"draw",value:function(){this.ctx.fillStyle="rgba(253, 106, 2, ".concat(this.opacity,")"),this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.size,0,2*Math.PI),this.ctx.fill()}}]),t}());function l(t,e,n){return n?Math.floor(Math.random()*(e-t+1)+t):Math.random()*(e-t+1)+t}e.default=d},251:function(t,e,n){t.exports=n.p+"img/ring.81e2e4c.png"},252:function(t,e,n){t.exports=n.p+"img/smoke.91911de.png"},253:function(t,e,n){t.exports=n.p+"img/Bookcover-thelordoftherings.e4958c2.png"},254:function(t,e,n){"use strict";n(249)},255:function(t,e,n){var r=n(43)(!1);r.push([t.i,"canvas[data-v-269f520a]{display:block;position:absolute;top:0;right:0;bottom:0;left:0}",""]),t.exports=r},258:function(t,e,n){var content=n(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("0119e7c6",content,!0,{sourceMap:!1})},264:function(t,e,n){"use strict";n.r(e);n(179);var r=n(250),o={data:function(){return{particles:[],particleAmount:50,canvas:{},ctx:{},sizes:{width:0,height:0}}},mounted:function(){this.canvas=this.$refs.canvas,this.ctx=this.canvas.getContext("2d"),this.resize(),window.addEventListener("resize",this.resize);for(var i=0;i<this.particleAmount;i++)this.particles.push(new r.default(this.ctx));this.draw()},methods:{draw:function(){requestAnimationFrame(this.draw),this.ctx.clearRect(0,0,window.innerWidth,window.innerHeight);for(var i=0;i<this.particles.length;i++)this.particles[i].draw(this.ctx),this.particles[i].update(),this.particles[i].opacity<=0&&this.particles.splice(this.particles.indexOf(this.particles[i]),1),this.particles.length<this.particleAmount&&this.particles.push(new r.default(this.ctx))},resize:function(){this.sizes.width=window.innerWidth,this.sizes.height=window.innerHeight,this.canvas.width=this.sizes.width,this.canvas.height=this.sizes.height}}},d=(n(254),n(22)),component=Object(d.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("canvas",{ref:"canvas"})}),[],!1,null,"269f520a",null);e.default=component.exports},271:function(t,e,n){t.exports=n.p+"img/mines-of-moria.30b4ac1.png"},272:function(t,e,n){t.exports=n.p+"img/balrog-head.b60c1aa.png"},273:function(t,e,n){t.exports=n.p+"img/balrog-mouth.39632e6.png"},274:function(t,e,n){t.exports=n.p+"img/balrog-eyes.2928bc1.png"},275:function(t,e,n){t.exports=n.p+"img/horn.9e5e532.png"},276:function(t,e,n){t.exports=n.p+"img/script-normal-red.6268be7.png"},277:function(t,e,n){t.exports=n.p+"img/Gandalf.747642e.png"},278:function(t,e,n){t.exports=n.p+"img/morder-divider.00eed33.png"},279:function(t,e,n){t.exports=n.p+"img/Balrog-flames-1.836492e.png"},280:function(t,e,n){t.exports=n.p+"img/Balrog-flames-2.3a7b66b.png"},281:function(t,e,n){"use strict";n(258)},282:function(t,e,n){var r=n(43),o=n(100),d=n(283),l=r(!1),f=o(d);l.push([t.i,'div.imfell[data-v-5270134f]{overflow:hidden}.entry[data-v-5270134f]{height:100vh;display:flex;justify-content:center;align-items:center;flex-direction:column;padding-top:18em;text-align:center;will-change:transform}.entry .tngan[data-v-5270134f]{font-size:2rem}.entry .imfell[data-v-5270134f]{font-size:1.5rem}.entry .botw[data-v-5270134f]{font-size:5rem}.entry h1 span[data-v-5270134f]{opacity:0;color:rgba(216,26,34,0);letter-spacing:1rem;-webkit-text-stroke:1px #d81a22}.entry .botw[data-v-5270134f],.entry .imfell[data-v-5270134f],.entry .tngan[data-v-5270134f]{color:var(--lotr-red);position:relative;z-index:2}.entry img[data-v-5270134f]{width:40em;position:relative;top:-14em;opacity:0}.cave[data-v-5270134f]{height:100vh;width:100%;background:var(--black);position:fixed;top:0;opacity:0}.edge[data-v-5270134f]{color:var(--white);position:relative;z-index:3;padding:2rem;height:160vh;display:flex;flex-direction:column}.edge p[data-v-5270134f]{max-width:20em;font-size:1.5rem;margin-bottom:6rem}.edge p[data-v-5270134f]:nth-child(2n){text-align:right;align-self:flex-end}.inner[data-v-5270134f],.you-shall-not-pass-container[data-v-5270134f]{display:flex;flex-direction:column}.darkness p[data-v-5270134f],.inner p[data-v-5270134f],.you-shall-not-pass-container p[data-v-5270134f]{margin-bottom:8em;width:17em}.darkness p[data-v-5270134f]:nth-child(2n),.inner p[data-v-5270134f]:nth-child(2n),.you-shall-not-pass-container p[data-v-5270134f]:nth-child(2n){text-align:right;align-self:flex-end}.you-shall-not-pass-container p[data-v-5270134f]:nth-child(2n){opacity:0;transform:rotate(-90deg)}.you-shall-not-pass-container p[data-v-5270134f]:nth-child(odd){opacity:0;transform:rotate(90deg)}.darkness p[data-v-5270134f]:last-child{text-align:center;font-size:2.5rem;margin:0 auto}.inner-text-container[data-v-5270134f]{display:flex}.inner-text-container>p[data-v-5270134f]{margin-bottom:4em}.horn[data-v-5270134f]{opacity:0;width:15em;transform:translateX(5em);margin-top:2em}.balrog[data-v-5270134f]{padding:2rem}.balrog p[data-v-5270134f]{text-align:center;margin-bottom:2em;font-size:1.7rem;color:var(--black)}.balrog figure[data-v-5270134f]{position:relative;display:flex;justify-content:center;align-items:center;opacity:0;transform:scale(.9)}.balrog figure img[data-v-5270134f]{width:95%;margin:0 auto}.balrog figure .balrog-head[data-v-5270134f]{position:relative;z-index:2}.balrog figure .balrog-eyes[data-v-5270134f],.balrog figure .balrog-mouth[data-v-5270134f]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.smoke-container[data-v-5270134f]{left:50%;transform:translateX(-50%) scaleX(1.6);height:100%;z-index:1}.smoke[data-v-5270134f],.smoke-container[data-v-5270134f]{position:absolute;width:100%}.smoke[data-v-5270134f]{-webkit-animation:rotation-data-v-5270134f 40s linear infinite;animation:rotation-data-v-5270134f 40s linear infinite;opacity:.4}.smoke-rotate-left[data-v-5270134f]{-webkit-animation:rotation-left-data-v-5270134f 40s linear infinite;animation:rotation-left-data-v-5270134f 40s linear infinite}.text[data-v-5270134f]{position:relative;padding:2rem}.text>p[data-v-5270134f]{color:var(--black);transform:translateY(2em);opacity:0;padding:3em 0}div>p[data-v-5270134f]{padding-top:4rem;font-size:1.5rem}.gandalf-container[data-v-5270134f]{transform:translateX(-5em);opacity:0}.red-ring[data-v-5270134f]{position:relative;left:52%;width:45em;transform-origin:0 40%;-webkit-animation-name:spin-data-v-5270134f;animation-name:spin-data-v-5270134f;-webkit-animation-duration:50s;animation-duration:50s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;z-index:1}.gandalf-firm-container[data-v-5270134f],.wide-eyes-container[data-v-5270134f],.you-cannot-pass-container[data-v-5270134f]{display:flex;justify-content:center;align-items:center;height:100vh}.gandalf-firm-container p[data-v-5270134f],.wide-eyes-text[data-v-5270134f]{font-size:2rem;text-align:center;transform:scale(1)}.firm[data-v-5270134f]{text-decoration:underline}@-webkit-keyframes spin-data-v-5270134f{0%{transform:rotate(0deg) translateX(-50%) translateY(-10%)}to{transform:rotate(1turn) translateX(-50%) translateY(-10%)}}@keyframes spin-data-v-5270134f{0%{transform:rotate(0deg) translateX(-50%) translateY(-10%)}to{transform:rotate(1turn) translateX(-50%) translateY(-10%)}}.gandalf[data-v-5270134f]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:80%;z-index:2}.morder-divider[data-v-5270134f]{max-width:90%;left:50%;transform:translateX(-50%)}.balrog-flame-container[data-v-5270134f],.morder-divider[data-v-5270134f]{position:relative}.balrog-flame-container>img[data-v-5270134f]{width:150%;margin:0 auto;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.balrog-flame-1[data-v-5270134f],.balrog-flame-2[data-v-5270134f]{opacity:0}.balrog-flame-container>img[data-v-5270134f]:first-child{position:relative;left:50%;top:0;transform:translate(-50%);z-index:2}.balrog-flame-container>img[data-v-5270134f]:nth-child(2){z-index:1}.p16[data-v-5270134f]{display:flex;align-items:center;justify-content:center;grid-gap:1em;gap:1em}.p16[data-v-5270134f]:before{content:"";background-image:url('+f+');background-size:contain;background-repeat:no-repeat;background-position:50%;display:inline-block;width:1.5em;height:1.5em;transform:translateY(-.2em)}.durin-text[data-v-5270134f],.gandalf-muttered-text[data-v-5270134f]{display:flex;flex-direction:row;align-items:center;justify-content:center;grid-gap:1em;gap:1em}.durin-text[data-v-5270134f]:before,.gandalf-muttered-text[data-v-5270134f]:after{content:"";background-image:url('+f+');background-size:contain;background-repeat:no-repeat;background-position:50%;display:inline-block;width:2.5em;height:2.5em;transform:translateY(-.2em)}.gandalf-muttered-text[data-v-5270134f]:after{width:4.5em;height:4.5em}.p18[data-v-5270134f]{display:flex;flex-direction:column;align-items:center;justify-content:center;grid-gap:.7em;gap:.7em;text-align:center;padding-bottom:0!important}.p18[data-v-5270134f]:before{content:"";background-image:url('+f+');background-size:contain;background-repeat:no-repeat;background-position:50%;display:inline-block;width:1.5em;height:1.5em;transform:translateY(-.2em)}.darkness[data-v-5270134f]{height:300vh;width:100%;background:var(--black);position:relative;opacity:0;top:0;left:0;padding:0 2rem;display:flex;flex-direction:column;justify-content:center}.darkness>canvas[data-v-5270134f]{top:50%;transform:translateY(-50%)}.darkness>p[data-v-5270134f]{color:var(--white)}.p23[data-v-5270134f]{display:flex;align-items:center;justify-content:center;grid-gap:1em;gap:1em;text-align:center;transform:translateX(-2em);opacity:0}.p23[data-v-5270134f]:before{content:"";background-image:url('+f+');background-size:contain;background-repeat:no-repeat;background-position:50%;display:inline-block;width:1.5em;height:1.5em;transform:translateY(-.2em)}.p26[data-v-5270134f]{display:flex;align-items:center;justify-content:center;grid-gap:1em;gap:1em}.p26[data-v-5270134f]:before{content:"";background-image:url('+f+');background-size:contain;background-repeat:no-repeat;background-position:50%;display:inline-block;width:1.5em;height:1.5em;transform:translateY(-.4em)}.fly[data-v-5270134f]{height:100vh;flex-direction:row}.fly[data-v-5270134f],.fly-text[data-v-5270134f]{display:flex;justify-content:center;align-items:center}.fly-text[data-v-5270134f]{flex-direction:column;grid-gap:1em;gap:1em;text-align:center;opacity:0;font-size:1.5rem}.fly-text[data-v-5270134f]:before{content:"";background-image:url('+f+');background-size:contain;background-repeat:no-repeat;background-position:50%;display:inline-block;width:1.5em;height:1.5em;transform:translateY(-.2em)}.ring[data-v-5270134f]{opacity:0;width:20em;margin-bottom:30em}.continue[data-v-5270134f]{font-size:1.3rem}.buy-section[data-v-5270134f],.continue[data-v-5270134f]{text-align:center;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif}.buy-section[data-v-5270134f]{margin:2em;padding:2em 0;border-radius:2em;background-color:var(--white)}.buy-section figure>img[data-v-5270134f]{width:15em;padding:3em 0;-webkit-animation:up-and-down-data-v-5270134f 2s ease infinite alternate;animation:up-and-down-data-v-5270134f 2s ease infinite alternate}.buy-section h2[data-v-5270134f]{font-size:2.5rem}.buy-section p[data-v-5270134f]{font-size:2rem}.cta[data-v-5270134f]{position:relative;z-index:5;padding:1em 3em;font-size:1.2rem;background-color:var(--dark-blue);margin-bottom:2em}@-webkit-keyframes up-and-down-data-v-5270134f{0%{transform:translateY(-1em)}to{transform:translateY(1em)}}@keyframes up-and-down-data-v-5270134f{0%{transform:translateY(-1em)}to{transform:translateY(1em)}}@-webkit-keyframes rotation-data-v-5270134f{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes rotation-data-v-5270134f{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@-webkit-keyframes rotation-left-data-v-5270134f{0%{transform:rotate(0deg)}to{transform:rotate(-1turn)}}@keyframes rotation-left-data-v-5270134f{0%{transform:rotate(0deg)}to{transform:rotate(-1turn)}}@media (orientation:landscape){.entry img[data-v-5270134f]{width:35em}}',""]),t.exports=l},283:function(t,e,n){t.exports=n.p+"img/quote-mark-red.44ee554.png"},296:function(t,e,n){"use strict";n.r(e);var r,o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"entry"},[r("p",{staticClass:"tngan"},[t._v("d")]),t._v(" "),r("p",[t._v("Book Preview")]),t._v(" "),r("h1",{staticClass:"botw"},[r("span",[t._v("BRIDGE")]),r("br"),r("span",[t._v("Of")]),r("br"),r("span",[t._v("KHAZAD DUM")])]),t._v(" "),r("img",{attrs:{src:n(271),alt:"The mines of moria"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"balrog"},[r("p",{attrs:{"data-offset":"5000"}},[t._v("\n      'Ai! ai!' wailed Legolas. 'A Balrog! A Balrog is come!'\n    ")]),t._v(" "),r("figure",[r("img",{staticClass:"balrog-head",attrs:{src:n(272),alt:"Head of Balrog"}}),t._v(" "),r("img",{staticClass:"balrog-mouth",attrs:{src:n(273),alt:"Flaming Mouth of the Balrog "}}),t._v(" "),r("img",{staticClass:"balrog-eyes",attrs:{src:n(274),alt:"Firey Eyes of the Balrog"}}),t._v(" "),r("div",{staticClass:"smoke-container"},[r("img",{staticClass:"smoke",attrs:{src:n(252),alt:"Smoke"}}),t._v(" "),r("img",{staticClass:"smoke",attrs:{src:n(252),alt:"Smoke"}}),t._v(" "),r("img",{staticClass:"smoke smoke-rotate-left",attrs:{src:n(252),alt:"Smoke"}})])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text"},[r("div",{staticClass:"wide-eyes-container"},[r("p",{staticClass:"wide-eyes-text"},[t._v("Gimli stared with wide eyes.")])]),t._v(" "),r("div",{staticClass:"inner"},[r("p",{staticClass:"durin-text",attrs:{"data-offset":"7300"}},[t._v("\n        'Durin's Bane!' he cried, and letting his axe fall he covered his\n        face.\n      ")]),t._v(" "),r("p",{staticClass:"gandalf-muttered-text",attrs:{"data-offset":"7600"}},[t._v("\n        'A Balrog,' muttered Gandalf. 'Now I understand.' He faltered and\n        leaned heavily on his staff. 'What an evil fortune! And I am already\n        weary.'\n      ")])]),t._v(" "),r("div",{staticClass:"inner-text-container"},[r("div",[r("p",{staticClass:"dark-figure-text",attrs:{"data-offset":"7900"}},[t._v("\n          The dark figure streaming with fire raced towards them. The orcs\n          yelled and poured over the stone gangways. Then Boromir raised his\n          horn and blew.\n        ")]),t._v(" "),r("p",{attrs:{"data-offset":"8200"}},[t._v("\n          Loud the challenge rang and bellowed, like the shout of many throats\n          under the cavernous roof.\n        ")]),t._v(" "),r("p",{attrs:{"data-offset":"8400"}},[t._v("\n          For a moment the orcs quailed and the fiery shadow halted. Then the\n          echoes died as suddenly as a flame blown out by a dark wind, and the\n          enemy advanced again.\n        ")]),t._v(" "),r("p",{attrs:{"data-offset":"8600"}},[t._v("\n          'Over the bridge!' cried Gandalf, recalling his strength. 'Fly! This\n          is a foe beyond any of you. I must hold the narrow way. Fly!'\n        ")])]),t._v(" "),r("figure",[r("img",{staticClass:"horn",attrs:{src:n(275),alt:"horn"}})])]),t._v(" "),r("div",{staticClass:"gandalf-container"},[r("img",{staticClass:"red-ring",attrs:{src:n(276),alt:"Red Ring"}}),t._v(" "),r("img",{staticClass:"gandalf",attrs:{src:n(277),alt:"Gandalf the Grey"}})]),t._v(" "),r("img",{staticClass:"morder-divider",attrs:{src:n(278),alt:"Morder Divider"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gandalf-firm-container"},[n("p",[t._v("But Gandalf stood "),n("span",{staticClass:"firm"},[t._v("firm")]),t._v(".")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("figure",{staticClass:"balrog-flame-container"},[r("img",{staticClass:"balrog-flame-1",attrs:{src:n(279),alt:"Balrog Flames"}}),t._v(" "),r("img",{staticClass:"balrog-flame-2",attrs:{src:n(280),alt:"Balrog Flames"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"you-cannot-pass-container"},[n("p",{staticClass:"p16",attrs:{"data-offset":"13500"}},[t._v("'You cannot pass,' he said.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text"},[n("p",{staticClass:"p23"},[t._v("'You cannot pass!' he said.")]),t._v(" "),n("p",{attrs:{"data-offset":"19000"}},[t._v("\n      With a bound the Balrog leaped full upon the bridge. Its whip whirled\n      and hissed.\n    ")]),t._v(" "),n("p",{attrs:{"data-offset":"19300"}},[t._v("\n      'He cannot stand alone!' cried Aragorn suddenly and ran back along the\n      bridge. 'Elendil!' he shouted. 'I am with you, Gandalf!'\n    ")]),t._v(" "),n("p",{staticClass:"p26",attrs:{"data-offset":"19600"}},[t._v("\n      'Gondor!' cried Boromir and leaped after him.\n    ")]),t._v(" "),n("div",{staticClass:"inner"},[n("p",{attrs:{"data-offset":"19900"}},[t._v("\n        At that moment Gandalf lifted his staff, and crying aloud he smote the\n        bridge before him. The staff broke asunder and fell from his hand. A\n        blinding sheet of white flame sprang up.\n      ")]),t._v(" "),n("p",{attrs:{"data-offset":"20100"}},[t._v("\n        The bridge cracked. Right at the Balrog's feet it broke, and the stone\n        upon which it stood crashed into the gulf, while the rest remained,\n        poised, quivering like a tongue of rock thrust out into emptiness.\n      ")]),t._v(" "),n("p",{attrs:{"data-offset":"20300"}},[t._v("\n        With a terrible cry the Balrog fell forward, and its shadow plunged\n        down and vanished.\n      ")]),t._v(" "),n("p",{attrs:{"data-offset":"20600"}},[t._v("\n        But even as it fell it swung its whip, and the thongs lashed and\n        curled about the wizard's knees, dragging him to the brink. He\n        staggered and fell, grasped vainly at the stone, and slid into the\n        abyss.\n      ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"fly text"},[r("img",{staticClass:"ring",attrs:{src:n(251),alt:"Ring"}}),t._v(" "),r("p",{staticClass:"fly-text"},[t._v("'Fly, you fools!' he cried, and was gone.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v("The Fellowship "),n("br"),t._v("of the Ring")])},function(){var t=this.$createElement,e=this._self._c||t;return e("figure",[e("img",{staticClass:"book",attrs:{src:n(253),alt:"Book Cover Lord of the Rings"}})])}],d=n(33),l=(r={layout:"the-shining",data:function(){return{height:0}}},Object(d.a)(r,"layout","lotr"),Object(d.a)(r,"mounted",(function(){window.addEventListener("load",this.resize),window.addEventListener("resize",this.resize);var t=new ScrollMagic.Controller;gsap.to(".entry img",{top:"-18em",opacity:1,duration:1,delay:.9}),gsap.timeline().to(".entry h1 span",{opacity:1,duration:.75,stagger:.3,delay:.3},"group").to(".entry h1 span",{letterSpacing:"0",duration:.75,stagger:.3,delay:.3},"group").to(".entry h1 span",{textStroke:"1px rgba(216, 26, 34, 0)",color:"rgba(216, 26, 34, 1)",duration:.75});var e=gsap.to(".entry",{scale:7});new ScrollMagic.Scene({triggerElement:".entry",duration:3e3,triggerHook:0}).setPin(".entry").setTween(e).addTo(t);for(var p=document.querySelectorAll("[data-offset]"),i=0;i<p.length;i++){p[i].style.opacity=0,p[i].style.transform="translateY(2em)";var n=gsap.to(p[i],{opacity:1,y:0});new ScrollMagic.Scene({offset:p[i].dataset.offset,duration:p[i].dataset.duration?p[i].dataset.duration:.15*this.height,triggerHook:0}).setTween(n).addTo(t)}for(var r=[gsap.to(this.$refs.p12,{opacity:1,rotation:0,ease:"out"}),gsap.to(this.$refs.p13,{opacity:1,rotation:0,ease:"out"}),gsap.to(this.$refs.p14,{opacity:1,rotation:0,ease:"out"}),gsap.to(this.$refs.p15,{opacity:1,rotation:0,ease:"out"})],o=0;o<r.length;o++)new ScrollMagic.Scene({offset:10500+200*o,duration:.15*this.height,triggerHook:0}).setTween(r[o]).addTo(t);var d=gsap.to(".entry",{opacity:0});new ScrollMagic.Scene({offset:3e3,duration:0,triggerHook:0}).setTween(d).addTo(t);var l=gsap.to(this.$refs.particles.$el,{opacity:0});new ScrollMagic.Scene({offset:4400,duration:.4*this.height,triggerHook:0}).setTween(l).addTo(t);var f=gsap.to(".cave",{opacity:0});new ScrollMagic.Scene({offset:4700,duration:.4*this.height,triggerHook:0}).setTween(f).addTo(t);var c=gsap.to(".horn",{opacity:1,x:0});new ScrollMagic.Scene({offset:8150,duration:.4*this.height,triggerHook:0}).setTween(c).addTo(t);var h=gsap.to(".gandalf-container",{opacity:1,x:0});new ScrollMagic.Scene({offset:9e3,duration:.4*this.height,triggerHook:0}).setTween(h).addTo(t),gsap.to(".balrog-mouth",{opacity:.7,duration:1,repeat:-1,yoyo:!0}),gsap.to(".balrog-eyes",{opacity:.3,duration:1,repeat:-1,repeatDelay:1,yoyo:!0});var m=gsap.fromTo(".wide-eyes-text",{opacity:1,ease:1,scale:1},{opacity:0,scale:2});new ScrollMagic.Scene({triggerElement:".wide-eyes-container",duration:.9*this.height,triggerHook:0}).setTween(m).setPin(".wide-eyes-container").addTo(t);var v=gsap.fromTo(".gandalf-firm-container",{opacity:1,ease:1,scale:1},{opacity:0,scale:2});new ScrollMagic.Scene({triggerElement:".gandalf-firm-container",duration:.9*this.height,triggerHook:0}).setTween(v).setPin(".gandalf-firm-container").addTo(t);var y=gsap.fromTo(".you-cannot-pass-container",{opacity:1,ease:1,scale:1},{opacity:0,scale:2});new ScrollMagic.Scene({triggerElement:".you-cannot-pass-container",duration:.9*this.height,triggerHook:0}).setTween(y).setPin(".you-cannot-pass-container").addTo(t);var w=gsap.to(".balrog figure",{opacity:1,scale:1});new ScrollMagic.Scene({offset:5300,duration:.4*this.height,triggerHook:0}).setTween(w).addTo(t);var _=gsap.to(".balrog-flame-2",{opacity:1});new ScrollMagic.Scene({offset:11500,duration:.4*this.height,triggerHook:0}).setTween(_).addTo(t);var k=gsap.to(".balrog-flame-1",{opacity:1});new ScrollMagic.Scene({offset:13400,duration:.35*this.height,triggerHook:0}).setTween(k).addTo(t);var x=gsap.to(".darkness",{opacity:1});new ScrollMagic.Scene({offset:16150,duration:.2*this.height,triggerHook:0}).setTween(x).addTo(t);var T=gsap.to(".p23",{opacity:1,x:0});new ScrollMagic.Scene({offset:18700,duration:.2*this.height,triggerHook:0}).setTween(T).addTo(t);var C=gsap.to(".darkness",{opacity:0});new ScrollMagic.Scene({offset:17900,duration:.4*this.height,triggerHook:0}).setTween(C).addTo(t);var S=gsap.to(".ring",{opacity:1,y:0});new ScrollMagic.Scene({offset:21400,duration:.4*this.height,triggerHook:0}).setTween(S).addTo(t);var z=gsap.to(".fly-text",{opacity:1,y:0});new ScrollMagic.Scene({offset:21700,duration:.4*this.height,triggerHook:0}).setTween(z).addTo(t)})),Object(d.a)(r,"methods",{resize:function(){this.height=window.innerHeight}}),r),f=(n(281),n(22)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"imfell"},[t._m(0),t._v(" "),n("div",{staticClass:"cave",attrs:{"data-offset":"2000","data-duration":"1000"}}),t._v(" "),n("div",{staticClass:"edge"},[n("FireParticles",{ref:"particles"}),t._v(" "),n("p",{attrs:{"data-offset":"3500"}},[t._v("\n      It came to the edge of the fire and the light faded as if a cloud had\n      bent over it.\n    ")]),t._v(" "),n("p",{attrs:{"data-offset":"3700"}},[t._v("\n      Then with a rush it leaped across the fissure. The flames roared up to\n      greet it, and wreathed about it; and a black smoke swirled in the air.\n    ")]),t._v(" "),n("p",{attrs:{"data-offset":"3900"}},[t._v("\n      Its streaming mane kindled, and blazed behind it.\n    ")]),t._v(" "),n("p",{attrs:{"data-offset":"4100"}},[t._v("\n      In its right hand was a blade like a stabbing tongue of fire; in its\n      left it held a whip of many thongs.\n    ")])],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"text"},[n("div",{staticClass:"you-shall-not-pass-container"},[n("p",{ref:"p12"},[t._v("\n        Aragorn and Boromir did not heed the command, but still held their\n        ground, side by side, behind Gandalf at the far end of the bridge.\n      ")]),t._v(" "),n("p",{ref:"p13"},[t._v("\n        The others halted just within the doorway at the hall's end, and\n        turned, unable to leave their leader to face the enemy alone.\n      ")]),t._v(" "),n("p",{ref:"p14"},[t._v("\n        The Balrog reached the bridge. Gandalf stood in the middle of the\n        span, leaning on the staff in his left hand, but in his other hand\n        Glamdring gleamed, cold and white.\n      ")]),t._v(" "),n("p",{ref:"p15"},[t._v("\n        His enemy halted again, facing him, and the shadow about it reached\n        out like two vast wings. It raised the whip, and the thongs whined and\n        cracked. Fire came from its nostrils.\n      ")])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),n("p",{staticClass:"p17",attrs:{"data-offset":"15400"}},[t._v("\n      The orcs stood still, and a dead silence fell.\n    ")]),t._v(" "),n("p",{staticClass:"p18",attrs:{"data-offset":"15650"}},[t._v("\n      'I am a servant of the Secret Fire, wielder of the flame of Anor. You\n      cannot pass. The dark fire will not avail you, flame of Udûn. Go back to\n      the Shadow! You cannot pass.'\n    ")])]),t._v(" "),n("div",{staticClass:"darkness"},[n("FireParticles"),t._v(" "),n("p",{attrs:{"data-offset":"16800"}},[t._v("\n      The Balrog made no answer. The fire in it seemed to die, but the\n      darkness grew. It stepped forward slowly on to the bridge, and suddenly\n      it drew itself up to a great height, and its wings were spread from wall\n      to wall;\n    ")]),t._v(" "),n("p",{attrs:{"data-offset":"17000"}},[t._v("\n      but still Gandalf could be seen, glimmering in the gloom; he seemed\n      small, and altogether alone: grey and bent, like a wizened tree before\n      the onset of a storm.\n    ")]),t._v(" "),n("p",{attrs:{"data-offset":"17300"}},[t._v("\n      From out of the shadow a red sword leaped flaming. Glamdring glittered\n      white in answer. There was a ringing clash and a stab of white fire.\n    ")]),t._v(" "),n("p",{attrs:{"data-offset":"17700"}},[t._v("\n      The Balrog fell back, and its sword flew up in molten fragments. The\n      wizard swayed on the bridge, stepped back a pace, and then again stood\n      still.\n    ")])],1),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),n("p",{staticClass:"continue"},[t._v("Continue reading")]),t._v(" "),n("section",{staticClass:"buy-section"},[n("p",[t._v("J.R.R. Tolkien")]),t._v(" "),t._m(8),t._v(" "),n("p",[t._v("1954")]),t._v(" "),t._m(9),t._v(" "),n("NuxtLink",{staticClass:"cta",attrs:{to:"/"}},[t._v("Buy | €6,49")])],1)])}),o,!1,null,"5270134f",null);e.default=component.exports;installComponents(component,{FireParticles:n(264).default})}}]);