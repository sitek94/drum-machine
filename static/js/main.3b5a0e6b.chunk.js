(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{32:function(e,a,t){e.exports=t.p+"static/media/rick.f7b426eb.png"},39:function(e,a,t){e.exports=t.p+"static/media/trollolol.229524ce.mp3"},40:function(e,a,t){e.exports=t.p+"static/media/wolololo.d4e94afc.mp3"},41:function(e,a,t){e.exports=t.p+"static/media/badum-tsss.61915dbf.mp3"},42:function(e,a,t){e.exports=t.p+"static/media/bomb-has-been-planted.c2da8ca5.mp3"},43:function(e,a,t){e.exports=t.p+"static/media/fatality.a99aeee9.mp3"},44:function(e,a,t){e.exports=t.p+"static/media/gta-mission-complete.fcbb6edf.mp3"},45:function(e,a,t){e.exports=t.p+"static/media/rick-roll.b8f18cbc.mp3"},46:function(e,a,t){e.exports=t.p+"static/media/im-batman.a8c56219.mp3"},47:function(e,a,t){e.exports=t.p+"static/media/goddamnit-cartman.7ddbff7e.mp3"},48:function(e,a,t){e.exports=t.p+"static/media/wubalubadubdub.ad4c7c2d.mp3"},49:function(e,a,t){e.exports=t.p+"static/media/evil-morty.a201f89b.mp3"},50:function(e,a,t){e.exports=t.p+"static/media/good-job.579cc30a.mp3"},51:function(e,a,t){e.exports=t.p+"static/media/i-like-what-you-got.7171d458.mp3"},52:function(e,a,t){e.exports=t.p+"static/media/join-us-in-the-poopin.c5c44193.mp3"},53:function(e,a,t){e.exports=t.p+"static/media/my-man.6cdc222e.mp3"},54:function(e,a,t){e.exports=t.p+"static/media/pickle-rick.05a4d882.mp3"},55:function(e,a,t){e.exports=t.p+"static/media/show-me-what-you-got.e076a637.mp3"},56:function(e,a,t){e.exports=t.p+"static/media/butter-bot.02d6a56d.mp3"},62:function(e,a,t){e.exports=t(73)},67:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(14),l=t.n(o),i=(t(67),t(12)),r=t(57),s=t(95),m=t(96),u=t(92),d=t(32),p=t.n(d),b=t(75);function f(e){var a=e.children;return c.a.createElement(b.a,{className:"title",component:"h1",variant:"h4",align:"center"},a)}function h(e){var a=e.disabled,t=e.text;return c.a.createElement(u.a,{className:"display",variant:a?"outlined":"elevation",elevation:a?3:10},c.a.createElement(b.a,{color:a?"textSecondary":"initial",id:"display",variant:"h6"},t))}var v=t(97),E=t(37),y=t.n(E),k=t(38),w=t.n(k);function x(e){var a=e.value,t=e.onChange,n=e.disabled;return c.a.createElement("div",{className:"volume-slider"},c.a.createElement(b.a,{align:"center"},"Volume"),c.a.createElement("div",{className:"slider"},c.a.createElement(y.a,null),c.a.createElement(v.a,{value:a,onChange:t,disabled:n,valueLabelDisplay:"auto",valueLabelFormat:function(e){return Math.round(100*e)},min:0,max:1,step:.01}),c.a.createElement(w.a,null)))}var g=t(93),O=t(98);function j(e){var a=e.checked,t=e.onChange;return c.a.createElement(g.a,{className:"power-switch",control:c.a.createElement(O.a,{checked:a,onChange:t,color:"primary"}),label:"Power",labelPlacement:"top"})}function C(e){var a=e.disabled,t=e.onChange;return c.a.createElement(g.a,{className:"sounds-switch",control:c.a.createElement(O.a,{disabled:a,onChange:t,color:"primary"}),label:"Rick&Morty?",labelPlacement:"top"})}var N=t(58),S=t(94);function M(e){var a=e.label,t=e.keyValue,o=e.src,l=e.volume,i=e.disabled,r=e.onClick,s=Object(n.useRef)(null);Object(n.useEffect)((function(){s.current.volume=l}),[l]);var m=function(e){e.key!==t&&e.key!==t.toUpperCase()||(u(),r(a))},u=function(){if(!i){var e=s.current;if(null!==e){e.currentTime=0;var a=e.play();void 0!==a&&a.then((function(e){})).catch((function(e){console.log(e)}))}}};return Object(n.useEffect)((function(){return window.addEventListener("keydown",m),function(){window.removeEventListener("keydown",m)}})),c.a.createElement(S.a,{className:"drum-pad",id:a,variant:"contained",color:"primary",disabled:i,onClick:function(){u(),r(a)}},t.toUpperCase(),c.a.createElement("audio",{src:o,ref:s,className:"clip",id:t.toUpperCase()}))}function D(e){var a=e.sounds,t=Object(N.a)(e,["sounds"]),n=["q","w","e","a","s","d","z","x","c"];return c.a.createElement("div",{className:"pad-bank"},a.map((function(e,a){return c.a.createElement(M,Object.assign({key:e.label,keyValue:n[a]},e,t))})))}var T=t(39),F=t.n(T),L=t(40),P=t.n(L),z=t(41),B=t.n(z),I=t(42),R=t.n(I),A=t(43),G=t.n(A),J=t(44),U=t.n(J),V=t(45),W=t.n(V),q=t(46),H=t.n(q),K=t(47),Q=t.n(K),X={id:"epic-sounds-123",label:"Epic Sounds",sounds:[{label:"Trolololo",src:F.a},{label:"AoE: Wololo",src:P.a},{label:"Ba Dum Tssss",src:B.a},{label:"The bomb has been planted",src:R.a},{label:"Fatality!",src:G.a},{label:"GTA: Mission Complete",src:U.a},{label:"Ozzy Osbourne",src:W.a},{label:"I'm Batman",src:H.a},{label:"God dammit Cartman",src:Q.a}]},Y=t(48),Z=t.n(Y),$=t(49),_=t.n($),ee=t(50),ae=t.n(ee),te=t(51),ne=t.n(te),ce=t(52),oe=t.n(ce),le=t(53),ie=t.n(le),re=t(54),se=t.n(re),me=t(55),ue=t.n(me),de=t(56),pe=t.n(de),be={id:"rick-morty-213",label:"Rick and Morty Fever",sounds:[{label:"Wubba Lubba Dub Dub",src:Z.a},{label:"Evil Morty Theme",src:_.a},{label:"Good job!",src:ae.a},{label:"I like what you got",src:ne.a},{label:"Join us in the poopin",src:oe.a},{label:"My man!",src:ie.a},{label:"I'm pickle Rick!",src:se.a},{label:"Show me what you got",src:ue.a},{label:"Butter bot",src:pe.a}]};function fe(e){var a=e.onSoundsSwitch,t=Object(n.useState)(!0),o=Object(i.a)(t,2),l=o[0],r=o[1],s=Object(n.useState)(""),m=Object(i.a)(s,2),d=m[0],b=m[1],v=Object(n.useState)(X),E=Object(i.a)(v,2),y=E[0],k=E[1],w=Object(n.useState)(.3),g=Object(i.a)(w,2),O=g[0],N=g[1],S=y===be;return c.a.createElement(u.a,{className:"DrumMachine",elevation:5,id:"drum-machine"},c.a.createElement("img",{src:p.a,alt:"rick sanchez",className:"img-rick ".concat(S?"show-rick":"")}),c.a.createElement(f,null,"Drum Machine"),c.a.createElement(D,{sounds:y.sounds,volume:O,disabled:!l,onClick:b}),c.a.createElement(h,{disabled:!l,text:d}),c.a.createElement(x,{value:O,onChange:function(e,a){N(a)},disabled:!l}),c.a.createElement(j,{checked:l,onChange:function(){r(!l),b(l?"Power OFF":"Power ON")}}),c.a.createElement(C,{disabled:!l,onChange:function(){y.id===X.id?(k(be),b(be.label)):(k(X),b(X.label)),a()}}))}function he(){var e=Object(n.useState)("#f1c40f"),a=Object(i.a)(e,2),t=a[0],o=a[1],l=Object(r.a)({palette:{type:"dark",primary:{main:t}}});return c.a.createElement(s.a,{theme:l},c.a.createElement("div",{className:"App"},c.a.createElement(m.a,null),c.a.createElement(fe,{onSoundsSwitch:function(){o("#f1c40f"===t?"#69f023":"#f1c40f")}})))}l.a.render(c.a.createElement(he,null),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.3b5a0e6b.chunk.js.map