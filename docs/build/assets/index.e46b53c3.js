var _s=Object.defineProperty;var Vs=(i,c,r)=>c in i?_s(i,c,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[c]=r;var qe=(i,c,r)=>(Vs(i,typeof c!="symbol"?c+"":c,r),r);const Hs=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const y of d.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&o(y)}).observe(document,{childList:!0,subtree:!0});function r(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerpolicy&&(d.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?d.credentials="include":u.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(u){if(u.ep)return;u.ep=!0;const d=r(u);fetch(u.href,d)}};Hs();(function(i,c){function r(t,e=0,l=1){return Math.max(e,Math.min(t,l))}function o(t,e,l){const s=l-e,n=t-e;if(n>=0)return n%s+e;{let a=s+n%s+e;return a>=l&&(a-=s),a}}function u(t,e,l){return e<=t&&t<l}function d(t){return[...Array(t).keys()]}function y(t,e){return d(t).map(l=>e(l))}function x(t,e){let l=[];for(let s=0,n=0;s<t.length;n++)e(t[s],n)?(l.push(t[s]),t.splice(s,1)):s++;return l}function j(t){return[...t].reduce((e,[l,s])=>(e[l]=s,e),{})}function k(t){return Object.keys(t).map(e=>[e,t[e]])}function He(t,e){return String.fromCharCode(t.charCodeAt(0)+e)}function W(t){return t.x!=null&&t.y!=null}class C{constructor(e,l){this.x=0,this.y=0,this.set(e,l)}set(e=0,l=0){return W(e)?(this.x=e.x,this.y=e.y,this):(this.x=e,this.y=l,this)}add(e,l){return W(e)?(this.x+=e.x,this.y+=e.y,this):(this.x+=e,this.y+=l,this)}sub(e,l){return W(e)?(this.x-=e.x,this.y-=e.y,this):(this.x-=e,this.y-=l,this)}mul(e){return this.x*=e,this.y*=e,this}div(e){return this.x/=e,this.y/=e,this}clamp(e,l,s,n){return this.x=r(this.x,e,l),this.y=r(this.y,s,n),this}wrap(e,l,s,n){return this.x=o(this.x,e,l),this.y=o(this.y,s,n),this}addWithAngle(e,l){return this.x+=Math.cos(e)*l,this.y+=Math.sin(e)*l,this}swapXy(){const e=this.x;return this.x=this.y,this.y=e,this}normalize(){return this.div(this.length),this}rotate(e){if(e===0)return this;const l=this.x;return this.x=l*Math.cos(e)-this.y*Math.sin(e),this.y=l*Math.sin(e)+this.y*Math.cos(e),this}angleTo(e,l){return W(e)?Math.atan2(e.y-this.y,e.x-this.x):Math.atan2(l-this.y,e-this.x)}distanceTo(e,l){let s,n;return W(e)?(s=e.x-this.x,n=e.y-this.y):(s=e-this.x,n=l-this.y),Math.sqrt(s*s+n*n)}isInRect(e,l,s,n){return u(this.x,e,e+s)&&u(this.y,l,l+n)}equals(e){return this.x===e.x&&this.y===e.y}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}get length(){return Math.sqrt(this.x*this.x+this.y*this.y)}get angle(){return Math.atan2(this.y,this.x)}}const Ce=["transparent","white","red","green","yellow","blue","purple","cyan","black","light_red","light_green","light_yellow","light_blue","light_purple","light_cyan","light_black"],Ye="twrgybpclRGYBPCL";let se;const oi=[15658734,15277667,5025616,16761095,4149685,10233776,240116,6381921];function ci(t){const[e,l,s]=wt(0,t);if(se=j(Ce.map((n,a)=>{if(a<1)return[n,{r:0,g:0,b:0,a:0}];if(a<9){const[g,b,w]=wt(a-1,t);return[n,{r:g,g:b,b:w,a:1}]}const[f,h,p]=wt(a-9+1,t);return[n,{r:Math.floor(t?f*.5:e-(e-f)*.5),g:Math.floor(t?h*.5:s-(s-h)*.5),b:Math.floor(t?p*.5:l-(l-p)*.5),a:1}]})),t){const n=se.blue;se.white={r:Math.floor(n.r*.15),g:Math.floor(n.g*.15),b:Math.floor(n.b*.15),a:1}}}function wt(t,e){e&&(t===0?t=7:t===7&&(t=0));const l=oi[t];return[(l&16711680)>>16,(l&65280)>>8,l&255]}function ve(t,e=1){const l=se[t];return Math.floor(l.r*e)<<16|Math.floor(l.g*e)<<8|Math.floor(l.b*e)}function Se(t,e=1){const l=se[t],s=Math.floor(l.r*e),n=Math.floor(l.g*e),a=Math.floor(l.b*e);return l.a<1?`rgba(${s},${n},${a},${l.a})`:`rgb(${s},${n},${a})`}const ol=[`
  l
  l
  l

  l
`,`
 l l
 l l



`,`
 l l
lllll
 l l
lllll
 l l
`,`
 lll
l l
 lll
  l l
 lll
`,`
l   l
l  l
  l
 l  l
l   l
`,`
 l
l l
 ll l
l  l
 ll l
`,`
  l
  l



`,`
   l
  l
  l
  l
   l
`,`
 l
  l
  l
  l
 l
`,`
  l
l l l
 lll
l l l
  l
`,`
  l
  l
lllll
  l
  l
`,`



  l
 l
`,`


lllll


`,`




  l
`,`
    l
   l
  l
 l
l
`,`
 lll
l  ll
l l l
ll  l
 lll
`,`
 ll
l l
  l
  l
lllll
`,`
 lll
l   l
  ll
 l
lllll
`,`
 lll
l   l
  ll
l   l
 lll
`,`
  ll
 l l
l  l
lllll
   l
`,`
lllll
l
llll
    l
llll
`,`
 lll
l
llll
l   l
 lll
`,`
lllll
l   l
   l
  l
 l
`,`
 lll
l   l
 lll
l   l
 lll
`,`
 lll
l   l
 llll
    l
 lll
`,`

  l

  l

`,`

  l

  l
 l
`,`
   ll
 ll
l
 ll
   ll
`,`

lllll

lllll

`,`
ll
  ll
    l
  ll
ll
`,`
 lll
l   l
  ll

  l
`,`
 lll
l   l
l lll
l
 lll
`,`
 lll
l   l
lllll
l   l
l   l
`,`
llll
l   l
llll
l   l
llll
`,`
 lll
l   l
l
l   l
 lll
`,`
llll
l   l
l   l
l   l
llll
`,`
lllll
l
llll
l
lllll
`,`
lllll
l
llll
l
l
`,`
 lll
l
l  ll
l   l
 llll
`,`
l   l
l   l
lllll
l   l
l   l
`,`
lllll
  l
  l
  l
lllll
`,`
 llll
   l
   l
l  l
 ll
`,`
l   l
l  l
lll
l  l
l   l
`,`
l
l
l
l
lllll
`,`
l   l
ll ll
l l l
l   l
l   l
`,`
l   l
ll  l
l l l
l  ll
l   l
`,`
 lll
l   l
l   l
l   l
 lll
`,`
llll
l   l
llll
l
l
`,`
 lll
l   l
l   l
l  ll
 llll
`,`
llll
l   l
llll
l   l
l   l
`,`
 llll
l
 lll
    l
llll
`,`
lllll
  l
  l
  l
  l
`,`
l   l
l   l
l   l
l   l
 lll
`,`
l   l
l   l
 l l
 l l
  l
`,`
l   l
l   l
l l l
l l l
 l l
`,`
l   l
 l l
  l
 l l
l   l
`,`
l   l
 l l
  l
  l
  l
`,`
lllll
   l
  l
 l
lllll
`,`
  ll
  l
  l
  l
  ll
`,`
l
 l
  l
   l
    l
`,`
 ll
  l
  l
  l
 ll
`,`
  l
 l l



`,`




lllll
`,`
 l
  l



`,`
 ll
   l
 lll
l  l
 ll
`,`
l
l
lll
l  l
lll
`,`

 ll
l  
l
 ll
`,`
   l
   l
 lll
l  l
 lll
`,`
 ll
l  l
lll
l
 ll
`,`
   l
  l 
 lll
  l
  l
`,`
 lll
l  l
 lll
   l
 ll
`,`
l
l
lll
l  l
l  l
`,`
  l

  l
  l
  l
`,`
   l

   l
   l
 ll
`,`
l
l
l l
ll
l l
`,`
 ll
  l
  l
  l
 lll
`,`

ll l
l l l
l l l
l l l
`,`

l ll
ll  l
l   l
l   l
`,`

 ll
l  l
l  l
 ll
`,`

lll
l  l
lll
l
`,`

 lll
l  l
 lll
   l
`,`

l ll
ll
l
l
`,`
 ll
l
 ll  
   l
 ll
`,`
 l
lll
 l
 l
  l
`,`

l  l
l  l
l  l
 ll
`,`

l  l
l  l
 ll
 ll
`,`

l l l
l l l
l l l
 l l
`,`

l  l
 ll
 ll
l  l
`,`

l  l
 ll
 l
l
`,`

llll
  l
 l
llll
`,`
  ll
  l
 l
  l
  ll
`,`
  l
  l
  l
  l
  l
`,`
 ll
  l
   l
  l
 ll
`,`

 l
l l l
   l

`];let pe,Qe;function ai(){pe=[],Qe=[]}function cl(){pe=pe.concat(Qe),Qe=[]}function al(t){let e={isColliding:{rect:{},text:{},char:{}}};return pe.forEach(l=>{ui(t,l)&&(e=Object.assign(Object.assign(Object.assign({},e),xt(l.collision.isColliding.rect)),{isColliding:{rect:Object.assign(Object.assign({},e.isColliding.rect),l.collision.isColliding.rect),text:Object.assign(Object.assign({},e.isColliding.text),l.collision.isColliding.text),char:Object.assign(Object.assign({},e.isColliding.char),l.collision.isColliding.char)}}))}),e}function ui(t,e){const l=e.pos.x-t.pos.x,s=e.pos.y-t.pos.y;return-e.size.x<l&&l<t.size.x&&-e.size.y<s&&s<t.size.y}function xt(t){if(t==null)return{};const e={transparent:"tr",white:"wh",red:"rd",green:"gr",yellow:"yl",blue:"bl",purple:"pr",cyan:"cy",black:"lc"};let l={};return k(t).forEach(([s,n])=>{const a=e[s];n&&a!=null&&(l[a]=!0)}),l}function fi(t,e,l,s){return ul(!1,t,e,l,s)}function di(t,e,l,s){return ul(!0,t,e,l,s)}function ul(t,e,l,s,n){if(typeof l=="number"){if(typeof s=="number")return St(e,l,s,Object.assign({isCharacter:t,isCheckingCollision:!0,color:B},n));throw"invalid params"}else return St(e,l.x,l.y,Object.assign({isCharacter:t,isCheckingCollision:!0,color:B},s))}const ke=6,Me=1,m=ke*Me;let fl,bt,Ct,vt=!1,ne,G;const Pe={color:"black",backgroundColor:"transparent",rotation:0,mirror:{x:1,y:1},scale:{x:1,y:1},isCharacter:!1,isCheckingCollision:!1};function hi(){ne=document.createElement("canvas"),ne.width=ne.height=m,G=ne.getContext("2d"),fl=ol.map((t,e)=>Object.assign(Object.assign({},Mt(t)),{hitBox:Ze(String.fromCharCode(33+e),!1)})),bt=ol.map((t,e)=>Object.assign(Object.assign({},Mt(t)),{hitBox:Ze(String.fromCharCode(33+e),!0)})),Ct={}}function gi(t,e){const l=e.charCodeAt(0)-33;t.forEach((s,n)=>{bt[l+n]=Object.assign(Object.assign({},Mt(s)),{hitBox:Ze(String.fromCharCode(33+l+n),!0)})})}function pi(){vt=!0}function St(t,e,l,s={}){const n=hl(s);e-=m/2*n.scale.x,l-=m/2*n.scale.y;const a=Math.floor(e);let f=t,h=a,p=Math.floor(l),g={isColliding:{rect:{},text:{},char:{}}};for(let b=0;b<f.length;b++){const w=f[b];if(w===`
`){h=a,p+=m*n.scale.y;continue}const O=dl(w,h,p,n);n.isCheckingCollision&&(g={isColliding:{rect:Object.assign(Object.assign({},g.isColliding.rect),O.isColliding.rect),text:Object.assign(Object.assign({},g.isColliding.text),O.isColliding.text),char:Object.assign(Object.assign({},g.isColliding.char),O.isColliding.char)}}),h+=m*n.scale.x}return g}function dl(t,e,l,s){const n=t.charCodeAt(0);if(n<32||n>126)return{isColliding:{rect:{},text:{},char:{}}};const a=hl(s);if(a.backgroundColor!=="transparent"&&(Ot(),ye(a.backgroundColor),je(e,l,m*a.scale.x,m*a.scale.y),Gt()),n<=32)return{isColliding:{rect:{},text:{},char:{}}};const f=n-33,h=a.isCharacter?bt[f]:fl[f],p=o(a.rotation,0,4);if(a.color==="black"&&p===0&&a.mirror.x===1&&a.mirror.y===1)return kt(h,e,l,a.scale,a.isCheckingCollision,!0);const g=JSON.stringify({c:t,options:a}),b=Ct[g];if(b!=null)return kt(b,e,l,a.scale,a.isCheckingCollision,a.color!=="transparent");G.clearRect(0,0,m,m),p===0&&a.mirror.x===1&&a.mirror.y===1?G.drawImage(h.image,0,0):(G.save(),G.translate(m/2,m/2),G.rotate(Math.PI/2*p),(a.mirror.x===-1||a.mirror.y===-1)&&G.scale(a.mirror.x,a.mirror.y),G.drawImage(h.image,-m/2,-m/2),G.restore()),a.color!=="black"&&(G.globalCompositeOperation="source-in",G.fillStyle=Se(a.color==="transparent"?"black":a.color),G.fillRect(0,0,m,m),G.globalCompositeOperation="source-over");const w=Ze(t,a.isCharacter);let O;if(vt||v.isUsingPixi){const U=document.createElement("img");U.src=ne.toDataURL(),v.isUsingPixi&&(O=c.Texture.from(U)),vt&&(Ct[g]={image:U,texture:O,hitBox:w})}return kt({image:ne,texture:O,hitBox:w},e,l,a.scale,a.isCheckingCollision,a.color!=="transparent")}function kt(t,e,l,s,n,a){if(a&&(s.x===1&&s.y===1?ml(t,e,l):ml(t,e,l,m*s.x,m*s.y)),!n)return;const f={pos:{x:e+t.hitBox.pos.x,y:l+t.hitBox.pos.y},size:{x:t.hitBox.size.x*s.x,y:t.hitBox.size.y*s.y},collision:t.hitBox.collision},h=al(f);return a&&pe.push(f),h}function Mt(t,e=!0){G.clearRect(0,0,m,m);let l=t.split(`
`);e&&(l=l.slice(1,l.length-1));let s=0;l.forEach(p=>{s=Math.max(p.length,s)});const n=Math.max(Math.ceil((ke-s)/2),0),a=l.length,f=Math.max(Math.ceil((ke-a)/2),0);l.forEach((p,g)=>{if(!(g+f>=ke))for(let b=0;b<ke-n;b++){const w=p.charAt(b);let O=Ye.indexOf(w);w!==""&&O>=1&&(G.fillStyle=Se(Ce[O]),G.fillRect((b+n)*Me,(g+f)*Me,Me,Me))}});const h=document.createElement("img");return h.src=ne.toDataURL(),v.isUsingPixi?{image:h,texture:c.Texture.from(h)}:{image:h}}function Ze(t,e){const l={pos:new C(m,m),size:new C,collision:{isColliding:{char:{},text:{}}}};e?l.collision.isColliding.char[t]=!0:l.collision.isColliding.text[t]=!0;const s=G.getImageData(0,0,m,m).data;let n=0;for(let a=0;a<m;a++)for(let f=0;f<m;f++)s[n+3]>0&&(f<l.pos.x&&(l.pos.x=f),a<l.pos.y&&(l.pos.y=a)),n+=4;n=0;for(let a=0;a<m;a++)for(let f=0;f<m;f++)s[n+3]>0&&(f>l.pos.x+l.size.x-1&&(l.size.x=f-l.pos.x+1),a>l.pos.y+l.size.y-1&&(l.size.y=a-l.pos.y+1)),n+=4;return l}function hl(t){let e=Object.assign(Object.assign({},Pe),t);return t.scale!=null&&(e.scale=Object.assign(Object.assign({},Pe.scale),t.scale)),t.mirror!=null&&(e.mirror=Object.assign(Object.assign({},Pe.mirror),t.mirror)),e}const yi=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float width;
uniform float height;

float gridValue(vec2 uv, float res) {
  vec2 grid = fract(uv * res);
  return (step(res, grid.x) * step(res, grid.y));
}

void main(void) {
  vec4 color = texture2D(uSampler, vTextureCoord);  
  vec2 grid_uv = vTextureCoord.xy * vec2(width, height);
  float v = gridValue(grid_uv, 0.2);
  gl_FragColor.rgba = color * v;
}
`;function mi(t,e){return new c.Filter(void 0,yi,{width:t,height:e})}const re=new C;let R,P=new C,q,S;const gl=5;document.createElement("img");let M,Oe,Ge=1,Pt="black",B,pl,oe=!1,v,yl;function wi(t,e,l,s,n,a,f){re.set(t),v=f,Pt=l;const h=`
-webkit-touch-callout: none;
-webkit-tap-highlight-color: ${e};
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background: ${e};
color: #888;
`,p=`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
`,g=`
image-rendering: -moz-crisp-edges;
image-rendering: -webkit-optimize-contrast;
image-rendering: -o-crisp-edges;
image-rendering: pixelated;
`;if(document.body.style.cssText=h,P.set(re),v.isUsingPixi){P.mul(gl);const w=new c.Application({width:P.x,height:P.y});if(R=w.view,S=new c.Graphics,S.scale.x=S.scale.y=gl,c.settings.SCALE_MODE=c.SCALE_MODES.NEAREST,w.stage.addChild(S),S.filters=[],v.name==="crt"&&S.filters.push(yl=new c.filters.CRTFilter({vignettingAlpha:.7})),v.name==="pixel"&&S.filters.push(mi(P.x,P.y)),v.name==="pixel"||v.name==="shapeDark"){const O=new c.filters.AdvancedBloomFilter({threshold:.1,bloomScale:v.name==="pixel"?1.5:1,brightness:v.name==="pixel"?1.5:1,blur:8});S.filters.push(O)}S.lineStyle(0),R.style.cssText=p}else R=document.createElement("canvas"),R.width=P.x,R.height=P.y,q=R.getContext("2d"),q.imageSmoothingEnabled=!1,R.style.cssText=p+g;document.body.appendChild(R);const b=()=>{const w=.95,O=innerWidth/innerHeight,U=P.x/P.y,We=O<U,le=We?w*innerWidth:w*innerHeight*U,ht=We?w*innerWidth/U:w*innerHeight;R.style.width=`${le}px`,R.style.height=`${ht}px`};if(window.addEventListener("resize",b),b(),s){M=document.createElement("canvas");let w;n?(M.width=P.x,M.height=P.y,w=a):(P.x<=P.y*2?(M.width=P.y*2,M.height=P.y):(M.width=P.x,M.height=P.x/2),M.width>400&&(Ge=400/M.width,M.width=400,M.height*=Ge),w=Math.round(400/M.width)),Oe=M.getContext("2d"),Oe.fillStyle=e,gcc.setOptions({scale:w,capturingFps:60,isSmoothingEnabled:!1})}}function Xe(){if(v.isUsingPixi){S.clear(),oe=!1,Re(ve(Pt,v.isDarkColor?.15:1)),S.drawRect(0,0,re.x,re.y),Ee(),oe=!1;return}q.fillStyle=Se(Pt,v.isDarkColor?.15:1),q.fillRect(0,0,re.x,re.y),q.fillStyle=Se(B)}function ye(t){if(t===B){v.isUsingPixi&&!oe&&Re(ve(B));return}if(B=t,v.isUsingPixi){oe&&S.endFill(),Re(ve(B));return}q.fillStyle=Se(t)}function Re(t){Ee(),S.beginFill(t),oe=!0}function Ee(){oe&&(S.endFill(),oe=!1)}function Ot(){pl=B}function Gt(){ye(pl)}function je(t,e,l,s){if(v.isUsingPixi){v.name==="shape"||v.name==="shapeDark"?S.drawRoundedRect(t,e,l,s,2):S.drawRect(t,e,l,s);return}q.fillRect(t,e,l,s)}function xi(t,e,l,s,n){const a=ve(B);Re(a),S.drawCircle(t,e,n*.5),S.drawCircle(l,s,n*.5),Ee(),S.lineStyle(n,a),S.moveTo(t,e),S.lineTo(l,s),S.lineStyle(0)}function ml(t,e,l,s,n){if(v.isUsingPixi){Ee(),S.beginTextureFill({texture:t.texture,matrix:new c.Matrix().translate(e,l)}),S.drawRect(e,l,s==null?m:s,n==null?m:n),Re(ve(B));return}s==null?q.drawImage(t.image,e,l):q.drawImage(t.image,e,l,s,n)}function bi(){yl.time+=.2}function Ci(){if(Oe.fillRect(0,0,M.width,M.height),Ge===1)Oe.drawImage(R,(M.width-R.width)/2,(M.height-R.height)/2);else{const t=R.width*Ge,e=R.height*Ge;Oe.drawImage(R,(M.width-t)/2,(M.height-e)/2,t,e)}gcc.capture(M)}let me=!1,et=!1,Rt=!1;const wl=["Escape","Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Minus","Equal","Backspace","Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Enter","ControlLeft","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Backquote","ShiftLeft","Backslash","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ShiftRight","NumpadMultiply","AltLeft","Space","CapsLock","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","Pause","ScrollLock","Numpad7","Numpad8","Numpad9","NumpadSubtract","Numpad4","Numpad5","Numpad6","NumpadAdd","Numpad1","Numpad2","Numpad3","Numpad0","NumpadDecimal","IntlBackslash","F11","F12","F13","F14","F15","F16","F17","F18","F19","F20","F21","F22","F23","F24","IntlYen","Undo","Paste","MediaTrackPrevious","Cut","Copy","MediaTrackNext","NumpadEnter","ControlRight","LaunchMail","AudioVolumeMute","MediaPlayPause","MediaStop","Eject","AudioVolumeDown","AudioVolumeUp","BrowserHome","NumpadDivide","PrintScreen","AltRight","Help","NumLock","Pause","Home","ArrowUp","PageUp","ArrowLeft","ArrowRight","End","ArrowDown","PageDown","Insert","Delete","OSLeft","OSRight","ContextMenu","BrowserSearch","BrowserFavorites","BrowserRefresh","BrowserStop","BrowserForward","BrowserBack"];let Et;const vi={onKeyDown:void 0};let jt,Dt=!1,zt=!1,Bt=!1,$t={},Ft={},It={};function xl(t){jt=Object.assign(Object.assign({},vi),t),Et=j(wl.map(e=>[e,{isPressed:!1,isJustPressed:!1,isJustReleased:!1}])),document.addEventListener("keydown",e=>{Dt=zt=!0,$t[e.code]=Ft[e.code]=!0,jt.onKeyDown!=null&&jt.onKeyDown(),(e.code==="AltLeft"||e.code==="AltRight")&&e.preventDefault()}),document.addEventListener("keyup",e=>{Dt=!1,Bt=!0,$t[e.code]=!1,It[e.code]=!0})}function bl(){et=!me&&zt,Rt=me&&Bt,zt=Bt=!1,me=Dt,k(Et).forEach(([t,e])=>{e.isJustPressed=!e.isPressed&&Ft[t],e.isJustReleased=e.isPressed&&It[t],e.isPressed=!!$t[t]}),Ft={},It={}}function Cl(){et=!1,me=!0}var Si=Object.freeze({__proto__:null,get isPressed(){return me},get isJustPressed(){return et},get isJustReleased(){return Rt},codes:wl,get code(){return Et},init:xl,update:bl,clearJustPressed:Cl});class tt{constructor(e=null){this.setSeed(e)}get(e=1,l){return l==null&&(l=e,e=0),this.next()/4294967295*(l-e)+e}getInt(e,l){l==null&&(l=e,e=0);const s=Math.floor(e),n=Math.floor(l);return n===s?s:this.next()%(n-s)+s}getPlusOrMinus(){return this.getInt(2)*2-1}select(e){return e[this.getInt(e.length)]}setSeed(e,l=123456789,s=362436069,n=521288629,a=32){this.w=e!=null?e>>>0:Math.floor(Math.random()*4294967295)>>>0,this.x=l>>>0,this.y=s>>>0,this.z=n>>>0;for(let f=0;f<a;f++)this.next();return this}getState(){return{x:this.x,y:this.y,z:this.z,w:this.w}}next(){const e=this.x^this.x<<11;return this.x=this.y,this.y=this.z,this.z=this.w,this.w=(this.w^this.w>>>19^(e^e>>>8))>>>0,this.w}}const De=new C;let _=!1,we=!1,ze=!1,ki={isDebugMode:!1,anchor:new C,padding:new C,onPointerDownOrUp:void 0},F,J,E;const Be=new tt,ce=new C,V=new C;let $e=!1,Fe=new C,Tt=!1,Jt=!1,Ut=!1;function vl(t,e,l){E=Object.assign(Object.assign({},ki),l),F=t,J=new C(e.x+E.padding.x*2,e.y+E.padding.y*2),Fe.set(F.offsetLeft+F.clientWidth*(.5-E.anchor.x),F.offsetTop+F.clientWidth*(.5-E.anchor.y)),E.isDebugMode&&ce.set(F.offsetLeft+F.clientWidth*(.5-E.anchor.x),F.offsetTop+F.clientWidth*(.5-E.anchor.y)),document.addEventListener("mousedown",s=>{Ml(s.pageX,s.pageY)}),document.addEventListener("touchstart",s=>{Ml(s.touches[0].pageX,s.touches[0].pageY)}),document.addEventListener("mousemove",s=>{Pl(s.pageX,s.pageY)}),document.addEventListener("touchmove",s=>{s.preventDefault(),Pl(s.touches[0].pageX,s.touches[0].pageY)},{passive:!1}),document.addEventListener("mouseup",s=>{Ol()}),document.addEventListener("touchend",s=>{s.preventDefault(),s.target.click(),Ol()},{passive:!1})}function Sl(){Mi(Fe.x,Fe.y,De),E.isDebugMode&&!De.isInRect(0,0,J.x,J.y)?(Pi(),De.set(ce),we=!_&&$e,ze=_&&!$e,_=$e):(we=!_&&Jt,ze=_&&Ut,_=Tt),Jt=Ut=!1}function kl(){we=!1,_=!0}function Mi(t,e,l){F!=null&&(l.x=Math.round(((t-F.offsetLeft)/F.clientWidth+E.anchor.x)*J.x-E.padding.x),l.y=Math.round(((e-F.offsetTop)/F.clientHeight+E.anchor.y)*J.y-E.padding.y))}function Pi(){V.length>0?(ce.add(V),!u(ce.x,-J.x*.1,J.x*1.1)&&ce.x*V.x>0&&(V.x*=-1),!u(ce.y,-J.y*.1,J.y*1.1)&&ce.y*V.y>0&&(V.y*=-1),Be.get()<.05&&V.set(0)):Be.get()<.1&&(V.set(0),V.addWithAngle(Be.get(Math.PI*2),(J.x+J.y)*Be.get(.01,.03))),Be.get()<.05&&($e=!$e)}function Ml(t,e){Fe.set(t,e),Tt=Jt=!0,E.onPointerDownOrUp!=null&&E.onPointerDownOrUp()}function Pl(t,e){Fe.set(t,e)}function Ol(t){Tt=!1,Ut=!0,E.onPointerDownOrUp!=null&&E.onPointerDownOrUp()}var Oi=Object.freeze({__proto__:null,pos:De,get isPressed(){return _},get isJustPressed(){return we},get isJustReleased(){return ze},init:vl,update:Sl,clearJustPressed:kl});let ee=new C,H=!1,L=!1,te=!1;function Gl(){xl({onKeyDown:sss.playEmpty}),vl(R,re,{onPointerDownOrUp:sss.playEmpty,anchor:new C(.5,.5)})}function Rl(){bl(),Sl(),ee=De,H=me||_,L=et||we,te=Rt||ze}function El(){Cl(),kl()}function Ie(t){ee.set(t.pos),H=t.isPressed,L=t.isJustPressed,te=t.isJustReleased}var Gi=Object.freeze({__proto__:null,get pos(){return ee},get isPressed(){return H},get isJustPressed(){return L},get isJustReleased(){return te},init:Gl,update:Rl,clearJustPressed:El,set:Ie});let jl,Dl;const zl=68,Lt=1e3/zl;let Te=0;const Ri={viewSize:{x:126,y:126},bodyBackground:"#111",viewBackground:"black",isUsingVirtualPad:!0,isFourWaysStick:!1,isCapturing:!1,isCapturingGameCanvasOnly:!1,captureCanvasScale:1,theme:{name:"simple",isUsingPixi:!1,isDarkColor:!1}};let A,Bl=10;function Ei(t,e,l){jl=t,Dl=e,A=Object.assign(Object.assign({},Ri),l),ci(A.theme.isDarkColor),wi(A.viewSize,A.bodyBackground,A.viewBackground,A.isCapturing,A.isCapturingGameCanvasOnly,A.captureCanvasScale,A.theme),Gl(),hi(),jl(),$l()}function $l(){requestAnimationFrame($l);const t=window.performance.now();t<Te-zl/12||(Te+=Lt,(Te<t||Te>t+Lt*2)&&(Te=t+Lt),sss.update(),Rl(),Dl(),A.isCapturing&&Ci(),Bl--,Bl===0&&pi())}class ji{constructor(e){this.size=new C,this.size.set(e),this.letterGrid=d(this.size.x).map(()=>d(this.size.y).map(()=>{})),this.colorGrid=d(this.size.x).map(()=>d(this.size.y).map(()=>{})),this.backgroundColorGrid=d(this.size.x).map(()=>d(this.size.y).map(()=>{})),this.rotationGrid=d(this.size.x).map(()=>d(this.size.y).map(()=>{})),this.characterGrid=d(this.size.x).map(()=>d(this.size.y).map(()=>{}))}print(e,l,s,n={}){const a=Object.assign(Object.assign({},Pe),n);let f=Math.floor(l),h=Math.floor(s);const p=f;for(let g=0;g<e.length;g++){const b=e[g];if(b===`
`){f=p,h++;continue}if(f<0||f>=this.size.x||h<0||h>=this.size.y){f++;continue}this.letterGrid[f][h]=b,this.colorGrid[f][h]=a.color,this.backgroundColorGrid[f][h]=a.backgroundColor,this.rotationGrid[f][h]=a.rotation,this.characterGrid[f][h]=a.isCharacter,f++}}getCharAt(e,l){if(e<0||e>=this.size.x||l<0||l>=this.size.y)return;const s=Math.floor(e),n=Math.floor(l),a=this.letterGrid[s][n],f=this.colorGrid[s][n],h=this.backgroundColorGrid[s][n],p=this.rotationGrid[s][n],g=this.characterGrid[s][n];return{char:a,options:{color:f,backgroundColor:h,rotation:p,isCharacter:g}}}setCharAt(e,l,s,n){if(e<0||e>=this.size.x||l<0||l>=this.size.y)return;const a=Object.assign(Object.assign({},Pe),n),f=Math.floor(e),h=Math.floor(l);this.letterGrid[f][h]=s,this.colorGrid[f][h]=a.color,this.backgroundColorGrid[f][h]=a.backgroundColor,this.rotationGrid[f][h]=a.rotation,this.characterGrid[f][h]=a.isCharacter}draw(){for(let e=0;e<this.size.x;e++)for(let l=0;l<this.size.y;l++){const s=this.letterGrid[e][l];if(s==null)continue;const n=this.colorGrid[e][l],a=this.backgroundColorGrid[e][l],f=this.rotationGrid[e][l],h=this.characterGrid[e][l];dl(s,e*m,l*m,{color:n,backgroundColor:a,rotation:f,isCharacter:h})}}clear(){for(let e=0;e<this.size.x;e++)for(let l=0;l<this.size.y;l++)this.letterGrid[e][l]=this.colorGrid[e][l]=this.backgroundColorGrid[e][l]=this.rotationGrid[e][l]=this.characterGrid[e][l]=void 0}scrollUp(){for(let l=0;l<this.size.x;l++)for(let s=1;s<this.size.y;s++)this.letterGrid[l][s-1]=this.letterGrid[l][s],this.colorGrid[l][s-1]=this.colorGrid[l][s],this.backgroundColorGrid[l][s-1]=this.backgroundColorGrid[l][s],this.rotationGrid[l][s-1]=this.rotationGrid[l][s],this.characterGrid[l][s-1]=this.characterGrid[l][s];const e=this.size.y-1;for(let l=0;l<this.size.x;l++)this.letterGrid[l][e]=this.colorGrid[l][e]=this.backgroundColorGrid[l][e]=this.rotationGrid[l][e]=this.characterGrid[l][e]=void 0}getState(){return{charGrid:this.letterGrid.map(e=>[].concat(e)),colorGrid:this.colorGrid.map(e=>[].concat(e)),backgroundColorGrid:this.backgroundColorGrid.map(e=>[].concat(e)),rotationGrid:this.rotationGrid.map(e=>[].concat(e)),symbolGrid:this.characterGrid.map(e=>[].concat(e))}}setState(e){this.letterGrid=e.charGrid.map(l=>[].concat(l)),this.colorGrid=e.colorGrid.map(l=>[].concat(l)),this.backgroundColorGrid=e.backgroundColorGrid.map(l=>[].concat(l)),this.rotationGrid=e.rotationGrid.map(l=>[].concat(l)),this.characterGrid=e.symbolGrid.map(l=>[].concat(l))}}let lt;const it=new tt;function At(){lt=[]}function Fl(t,e=16,l=1,s=0,n=Math.PI*2){if(e<1){if(it.get()>e)return;e=1}for(let a=0;a<e;a++){const f=s+it.get(n)-n/2,h={pos:new C(t),vel:new C(l*it.get(.5,1),0).rotate(f),color:B,ticks:clamp(it.get(10,20)*Math.sqrt(Math.abs(l)),10,60)};lt.push(h)}}function st(){Ot(),lt=lt.filter(t=>(t.ticks--,t.ticks<0?!1:(t.pos.add(t.vel),t.vel.mul(.98),ye(t.color),je(Math.floor(t.pos.x),Math.floor(t.pos.y),1,1),!0))),Gt()}function Kt({pos:t,size:e,text:l,isToggle:s=!1,onClick:n=()=>{}}){return{pos:t,size:e,text:l,isToggle:s,onClick:n,isPressed:!1,isSelected:!1,isHovered:!1,toggleGroup:[]}}function Nt(t){const e=vec(input.pos).sub(t.pos);t.isHovered=e.isInRect(0,0,t.size.x,t.size.y),t.isHovered&&we&&(t.isPressed=!0),t.isPressed&&!t.isHovered&&(t.isPressed=!1),t.isPressed&&ze&&(t.onClick(),t.isPressed=!1,t.isToggle&&(t.toggleGroup.length===0?t.isSelected=!t.isSelected:(t.toggleGroup.forEach(l=>{l.isSelected=!1}),t.isSelected=!0))),nt(t)}function nt(t){color(t.isPressed?"blue":"light_blue"),rect(t.pos.x,t.pos.y,t.size.x,t.size.y),t.isToggle&&!t.isSelected&&(color("white"),rect(t.pos.x+1,t.pos.y+1,t.size.x-2,t.size.y-2)),color(t.isHovered?"black":"blue"),text(t.text,t.pos.x+3,t.pos.y+3)}let K,Je,ae,Wt;function Di(t){K={randomSeed:t,inputs:[]}}function zi(t){K.inputs.push(t)}function Il(){return K!=null}function Bi(t){Je=0,t.setSeed(K.randomSeed)}function $i(){Je>=K.inputs.length||(Ie(K.inputs[Je]),Je++)}function Fi(){ae=[]}function Ii(t,e,l){ae.push({randomState:l.getState(),gameState:cloneDeep(t),baseState:cloneDeep(e)})}function Ti(t){const e=ae.pop(),l=e.randomState;return t.setSeed(l.w,l.x,l.y,l.z,0),Wt={pos:vec(ee),isPressed:H,isJustPressed:L,isJustReleased:te},Ie(K.inputs.pop()),e}function Ji(t){const e=ae[ae.length-1],l=e.randomState;return t.setSeed(l.w,l.x,l.y,l.z,0),Wt={pos:vec(ee),isPressed:H,isJustPressed:L,isJustReleased:te},Ie(K.inputs[K.inputs.length-1]),e}function Ui(){Ie(Wt)}function Li(){return ae.length===0}function Ai(){const t=Je-1;if(!(t>=K.inputs.length))return ae[t]}function Ki(t,e,l,s){return Tl(!1,t,e,l,s)}function Ni(t,e,l,s){return Tl(!0,t,e,l,s)}function Wi(t,e,l,s,n=.5,a=.5){typeof t!="number"&&(a=n,n=s,s=l,l=e,e=t.y,t=t.x);const f=new C(l).rotate(n),h=new C(t-f.x*a,e-f.y*a);return qt(h,f,s)}function qi(t,e,l=3,s=3,n=3){const a=new C,f=new C;if(typeof t=="number")if(typeof e=="number")typeof l=="number"?(a.set(t,e),f.set(l,s)):(a.set(t,e),f.set(l),n=s);else throw"invalid params";else if(typeof e=="number")if(typeof l=="number")a.set(t),f.set(e,l),n=s;else throw"invalid params";else if(typeof l=="number")a.set(t),f.set(e),n=l;else throw"invalid params";return qt(a,f.sub(a),n)}function _i(t,e,l,s,n,a){let f=new C;typeof t=="number"?f.set(t,e):(f.set(t),a=n,n=s,s=l,l=e),s==null&&(s=3),n==null&&(n=0),a==null&&(a=Math.PI*2);let h,p;if(n>a?(h=a,p=n-a):(h=n,p=a-n),p=r(p,0,Math.PI*2),p<.01)return;const g=r(ceil(p*Math.sqrt(l*.25)),1,36),b=p/g;let w=h,O=new C(l).rotate(w).add(f),U=new C,We=new C,le={isColliding:{rect:{},text:{},char:{}}};for(let ht=0;ht<g;ht++){w+=b,U.set(l).rotate(w).add(f),We.set(U).sub(O);const gt=qt(O,We,s,!0);le=Object.assign(Object.assign(Object.assign({},le),xt(gt.isColliding.rect)),{isColliding:{rect:Object.assign(Object.assign({},le.isColliding.rect),gt.isColliding.rect),text:Object.assign(Object.assign({},le.isColliding.text),gt.isColliding.text),char:Object.assign(Object.assign({},le.isColliding.char),gt.isColliding.char)}}),O.set(U)}return cl(),le}function Tl(t,e,l,s,n){if(typeof e=="number"){if(typeof l=="number")return typeof s=="number"?n==null?ue(t,e,l,s,s):ue(t,e,l,s,n):ue(t,e,l,s.x,s.y);throw"invalid params"}else if(typeof l=="number"){if(s==null)return ue(t,e.x,e.y,l,l);if(typeof s=="number")return ue(t,e.x,e.y,l,s);throw"invalid params"}else return ue(t,e.x,e.y,l.x,l.y)}function qt(t,e,l,s=!1){let n=!0;(v.name==="shape"||v.name==="shapeDark")&&(B!=="transparent"&&xi(t.x,t.y,t.x+e.x,t.y+e.y,l),n=!1);const a=Math.floor(r(l,3,10)),f=Math.abs(e.x),h=Math.abs(e.y),p=r(Math.ceil(f>h?f/a:h/a)+1,3,99);e.div(p-1);let g={isColliding:{rect:{},text:{},char:{}}};for(let b=0;b<p;b++){const w=ue(!0,t.x,t.y,l,l,!0,n);g=Object.assign(Object.assign(Object.assign({},g),xt(w.isColliding.rect)),{isColliding:{rect:Object.assign(Object.assign({},g.isColliding.rect),w.isColliding.rect),text:Object.assign(Object.assign({},g.isColliding.text),w.isColliding.text),char:Object.assign(Object.assign({},g.isColliding.char),w.isColliding.char)}}),t.add(e)}return s||cl(),g}function ue(t,e,l,s,n,a=!1,f=!0){let h=f;(v.name==="shape"||v.name==="shapeDark")&&h&&B!=="transparent"&&(t?je(e-s/2,l-n/2,s,n):je(e,l,s,n),h=!1);let p=t?{x:Math.floor(e-s/2),y:Math.floor(l-n/2)}:{x:Math.floor(e),y:Math.floor(l)};const g={x:Math.trunc(s),y:Math.trunc(n)};if(g.x===0||g.y===0)return{isColliding:{rect:{},text:{},char:{}}};g.x<0&&(p.x+=g.x,g.x*=-1),g.y<0&&(p.y+=g.y,g.y*=-1);const b={pos:p,size:g,collision:{isColliding:{rect:{}}}};b.collision.isColliding.rect[B]=!0;const w=al(b);return B!=="transparent"&&((a?Qe:pe).push(b),h&&je(p.x,p.y,g.x,g.y)),w}const Vi=Math.PI,Hi=Math.abs,Yi=Math.sin,Qi=Math.cos,Zi=Math.atan2,_t=Math.sqrt,Xi=Math.pow,es=Math.floor,ts=Math.round,ls=Math.ceil;i.ticks=0,i.score=0;function is(t=1,e){return Y.get(t,e)}function ss(t=2,e){return Y.getInt(t,e)}function ns(t=1,e){return Y.get(t,e)*Y.getPlusOrMinus()}function Vt(t="GAME OVER"){dt=t,xe&&(i.time=void 0),ql()}function rs(t="COMPLETE"){dt=t,ql()}function os(t,e,l){if(Z||(i.score+=t,e==null))return;const s=`${t>=1?"+":""}${Math.floor(t)}`;let n=new C;typeof e=="number"?n.set(e,l):n.set(e),n.x-=s.length*m/2,n.y-=m/2,ut.push({str:s,pos:n,vy:-2,ticks:30})}function Jl(t){ye(t)}function cs(t,e,l,s,n,a){let f=new C;typeof t=="number"?(f.set(t,e),Fl(f,l,s,n,a)):(f.set(t),Fl(f,e,l,s,n))}function Ul(t,e){return new C(t,e)}function Ll(t){!Ke&&!he&&sss.play(fs[t])}function as(t){if(Ke){const e=Ji(Y),l=e.baseState;return i.score=l.score,i.ticks=l.ticks,cloneDeep(e.gameState)}else if(he){const e=Ti(Y),l=e.baseState;return i.score=l.score,i.ticks=l.ticks,e.gameState}else{if(Z)return Ai().gameState;if(fe==="inGame"){const e={score:i.score,ticks:i.ticks};Ii(t,e,Y)}}return t}function us(){he||(!Z&&at?Cs():Vt())}const fs={coin:"c",laser:"l",explosion:"e",powerUp:"p",hit:"h",jump:"j",select:"s",lucky:"u"},Al={isPlayingBgm:!1,isSpeedingUpSound:!1,isCapturing:!1,isCapturingGameCanvasOnly:!1,captureCanvasScale:1,isShowingScore:!0,isShowingTime:!1,isReplayEnabled:!1,isRewindEnabled:!1,isDrawingParticleFront:!1,isDrawingScoreFront:!1,isMinifying:!1,viewSize:{x:100,y:100},seed:0,theme:"simple"},ds=new tt,Y=new tt,Kl=300;let fe,hs={title:ws,inGame:ms,gameOver:xs,rewind:vs},I,Ht=0,rt,ot=!0,ct=0,de,Ue,Yt,Nl,xe,Le,at,Ae,Qt,Q,ut,Z=!1,Ke=!1,he=!1,Ne,ft,dt,Zt;function gs(){let t;typeof options!="undefined"&&options!=null?t=Object.assign(Object.assign({},Al),options):t=Al;const e={name:t.theme,isUsingPixi:!1,isDarkColor:!1};t.theme!=="simple"&&t.theme!=="dark"&&(e.isUsingPixi=!0),(t.theme==="pixel"||t.theme==="shapeDark"||t.theme==="crt"||t.theme==="dark")&&(e.isDarkColor=!0),de={viewSize:{x:100,y:100},bodyBackground:e.isDarkColor?"#101010":"#e0e0e0",viewBackground:e.isDarkColor?"blue":"white",theme:e},ct=t.seed,de.isCapturing=t.isCapturing,de.isCapturingGameCanvasOnly=t.isCapturingGameCanvasOnly,de.captureCanvasScale=t.captureCanvasScale,de.viewSize=t.viewSize,Ue=t.isPlayingBgm,Yt=t.isSpeedingUpSound,Nl=t.isShowingScore&&!t.isShowingTime,xe=t.isShowingTime,Le=t.isReplayEnabled,at=t.isRewindEnabled,Ae=t.isDrawingParticleFront,Qt=t.isDrawingScoreFront,t.isMinifying&&Ms(),Ei(ps,ys,de)}function ps(){typeof description!="undefined"&&description!=null&&description.trim().length>0&&(ot=!1,ct+=Hl(description)),typeof title!="undefined"&&title!=null&&title.trim().length>0&&(ot=!1,document.title=title,ct+=Hl(title)),typeof characters!="undefined"&&characters!=null&&gi(characters,"a"),sss.init(ct);const t=de.viewSize;Q={x:Math.floor(t.x/6),y:Math.floor(t.y/6)},I=new ji(Q),ye("black"),ot?(Xt(),i.ticks=0):Wl()}function ys(){i.df=i.difficulty=i.ticks/3600+1,i.tc=i.ticks;const t=i.score,e=i.time;i.sc=i.score;const l=i.sc;i.inp={p:ee,ip:H,ijp:L,ijr:te},ai(),hs[fe](),v.isUsingPixi&&(Ee(),v.name==="crt"&&bi()),i.ticks++,Z?(i.score=t,i.time=e):i.sc!==l&&(i.score=i.sc)}function Xt(){fe="inGame",i.ticks=-1,At();const t=Math.floor(i.score);t>Ht&&(Ht=t),xe&&i.time!=null&&(rt==null||rt>i.time)&&(rt=i.time),i.score=0,i.time=0,ut=[],Ue&&sss.playBgm();const e=ds.getInt(999999999);Y.setSeed(e),(Le||at)&&(Di(e),Fi(),Z=!1)}function ms(){I.clear(),Xe(),Ae||st(),Qt||Vl(),(Le||at)&&zi({pos:Ul(ee),isPressed:H,isJustPressed:L,isJustReleased:te}),update(),Ae&&st(),Qt&&Vl(),el(),I.draw(),xe&&i.time!=null&&i.time++,Yt&&i.ticks%Kl==0&&(sss.playInterval=.5/_t(i.difficulty))}function Wl(){fe="title",i.ticks=-1,At(),I.clear(),Xe(),Il()&&(Bi(Y),Z=!0)}function ws(){if(L){Xt();return}if(Xe(),Le&&Il()&&($i(),i.inp={p:ee,ip:H,ijp:L,ijr:te},Ae||st(),update(),Ae&&st(),Yt&&i.ticks%Kl==0&&(sss.playInterval=.5/_t(i.difficulty))),i.ticks===0&&(el(),typeof title!="undefined"&&title!=null&&I.print(title,Math.floor(Q.x-title.length)/2,Math.ceil(Q.y*.2))),(i.ticks===30||i.ticks==40)&&typeof description!="undefined"&&description!=null){let t=0;description.split(`
`).forEach(l=>{l.length>t&&(t=l.length)});const e=Math.floor((Q.x-t)/2);description.split(`
`).forEach((l,s)=>{I.print(l,e,Math.floor(Q.y/2)+s)})}I.draw()}function ql(){fe="gameOver",Z||El(),i.ticks=-1,bs(),Ue&&sss.stopBgm()}function xs(){(Z||i.ticks>20)&&L?Xt():i.ticks===(Le?120:300)&&!ot&&Wl()}function bs(){Z||(I.print(dt,Math.floor((Q.x-dt.length)/2),Math.floor(Q.y/2)),I.draw())}function Cs(){fe="rewind",Ke=!0,Ne=Kt({pos:{x:61,y:11},size:{x:36,y:7},text:"Rewind"}),ft=Kt({pos:{x:61,y:81},size:{x:36,y:7},text:"GiveUp"}),Ue&&sss.stopBgm(),v.isUsingPixi&&(nt(Ne),nt(ft))}function vs(){I.clear(),Xe(),update(),el(),Ui(),he?(nt(Ne),(Li()||!H)&&Ss()):(Nt(Ne),Nt(ft),Ne.isPressed&&(he=!0,Ke=!1)),ft.isPressed?(Ke=he=!1,Vt()):I.draw(),xe&&i.time!=null&&i.time++}function Ss(){he=!1,fe="inGame",At(),Ue&&sss.playBgm()}function el(){if(Nl){I.print(`${Math.floor(i.score)}`,0,0);const t=`HI ${Ht}`;I.print(t,Q.x-t.length,0)}xe&&(_l(i.time,0,0),_l(rt,9,0))}function _l(t,e,l){if(t==null)return;let s=Math.floor(t*100/50);s>=10*60*100&&(s=10*60*100-1);const n=tl(Math.floor(s/6e3),1)+"'"+tl(Math.floor(s%6e3/100),2)+'"'+tl(Math.floor(s%100),2);I.print(n,e,l)}function tl(t,e){return("0000"+t).slice(-e)}function Vl(){Ot(),ye("black"),ut=ut.filter(t=>(St(t.str,t.pos.x,t.pos.y),t.pos.y+=t.vy,t.vy*=.9,t.ticks--,t.ticks>0)),Gt()}function Hl(t){let e=0;for(let l=0;l<t.length;l++){const s=t.charCodeAt(l);e=(e<<5)-e+s,e|=0}return e}function ks(){let t=window.location.search.substring(1);if(t=t.replace(/[^A-Za-z0-9_-]/g,""),t.length===0)return;const e=document.createElement("script");Zt=`${t}/main.js`,e.setAttribute("src",Zt),document.head.appendChild(e)}function Ms(){fetch(Zt).then(t=>t.text()).then(t=>{const e=Terser.minify(t+"update();",{toplevel:!0}).code,l="function(){",s=e.indexOf(l),n="options={",a=e.indexOf(n);let f=e;if(s>=0)f=e.substring(e.indexOf(l)+l.length,e.length-4);else if(a>=0){let h=1,p;for(let g=a+n.length;g<e.length;g++){const b=e.charAt(g);if(b==="{")h++;else if(b==="}"&&(h--,h===0)){p=g+2;break}}h===0&&(f=e.substring(p))}Yl.forEach(([h,p])=>{f=f.split(h).join(p)}),console.log(f),console.log(`${f.length} letters`)})}let Ps=Jl,Os=Ll,Gs=y,Rs=x;const Es="transparent",js="white",Ds="red",zs="green",Bs="yellow",$s="blue",Fs="purple",Is="cyan",Ts="black",Js="coin",Us="laser",Ls="explosion",As="powerUp",Ks="hit",Ns="jump",Ws="select",qs="lucky";let Yl=[["===","=="],["!==","!="],["input.pos","inp.p"],["input.isPressed","inp.ip"],["input.isJustPressed","inp.ijp"],["input.isJustReleased","inp.ijr"],["color(","clr("],["play(","ply("],["times(","tms("],["remove(","rmv("],["ticks","tc"],["difficulty","df"],["score","sc"],[".isColliding.rect.transparent",".tr"],[".isColliding.rect.white",".wh"],[".isColliding.rect.red",".rd"],[".isColliding.rect.green",".gr"],[".isColliding.rect.yellow",".yl"],[".isColliding.rect.blue",".bl"],[".isColliding.rect.purple",".pr"],[".isColliding.rect.cyan",".cy"],[".isColliding.rect.black",".lc"],['"transparent"',"tr"],['"white"',"wh"],['"red"',"rd"],['"green"',"gr"],['"yellow"',"yl"],['"blue"',"bl"],['"purple"',"pr"],['"cyan"',"cy"],['"black"',"lc"],['"coin"',"cn"],['"laser"',"ls"],['"explosion"',"ex"],['"powerUp"',"pw"],['"hit"',"ht"],['"jump"',"jm"],['"select"',"sl"],['"lucky"',"uc"]];i.PI=Vi,i.abs=Hi,i.addGameScript=ks,i.addScore=os,i.addWithCharCode=He,i.arc=_i,i.atan2=Zi,i.bar=Wi,i.bl=$s,i.box=Ni,i.ceil=ls,i.char=di,i.clamp=r,i.clr=Ps,i.cn=Js,i.color=Jl,i.complete=rs,i.cos=Qi,i.cy=Is,i.end=Vt,i.ex=Ls,i.floor=es,i.frameState=as,i.getButton=Kt,i.gr=zs,i.ht=Ks,i.input=Gi,i.jm=Ns,i.keyboard=Si,i.lc=Ts,i.line=qi,i.ls=Us,i.minifyReplaces=Yl,i.onLoad=gs,i.particle=cs,i.play=Ll,i.ply=Os,i.pointer=Oi,i.pow=Xi,i.pr=Fs,i.pw=As,i.range=d,i.rd=Ds,i.rect=Ki,i.remove=x,i.rewind=us,i.rmv=Rs,i.rnd=is,i.rndi=ss,i.rnds=ns,i.round=ts,i.sin=Yi,i.sl=Ws,i.sqrt=_t,i.text=fi,i.times=y,i.tms=Gs,i.tr=Es,i.uc=qs,i.updateButton=Nt,i.vec=Ul,i.wh=js,i.wrap=o,i.yl=Bs})(window||{},PIXI);class Ys{constructor(c=null){qe(this,"x");qe(this,"y");qe(this,"z");qe(this,"w");this.setSeed(c)}get(c=1,r){return r==null&&(r=c,c=0),this.next()/4294967295*(r-c)+c}getInt(c,r){r==null&&(r=c,c=0);const o=Math.floor(c),u=Math.floor(r);return u===o?o:this.next()%(u-o)+o}getPlusOrMinus(){return this.getInt(2)*2-1}select(c){return c[this.getInt(c.length)]}setSeed(c,r=123456789,o=362436069,u=521288629,d=32){this.w=c!=null?c>>>0:Math.floor(Math.random()*4294967295)>>>0,this.x=r>>>0,this.y=o>>>0,this.z=u>>>0;for(let y=0;y<d;y++)this.next();return this}getState(){return{x:this.x,y:this.y,z:this.z,w:this.w}}next(){const c=this.x^this.x<<11;return this.x=this.y,this.y=this.z,this.z=this.w,this.w=(this.w^this.w>>>19^(c^c>>>8))>>>0,this.w}}const be=[vec(1,0),vec(0,1),vec(-1,0),vec(0,-1)];function _e(i,c){c==null&&(c=(o,u)=>o-u);const r=i.map((o,u)=>[o,u]);return r.sort((o,u)=>{const d=c(o[0],u[0]);return d!==0?d:o[1]-u[1]}),r.map(o=>o[0])}const $=new Ys;function Qs(i){$.setSeed((i+1)*7);let c=[];for(let r=0;r<clamp(i,9,99);r++){const o=Ql(i);o!=null&&c.push(o)}return c.length===0?($.setSeed(0),Ql(0)):(c=_e(c,(r,o)=>o.stepCount-r.stepCount),c[0])}function Ql(i){const c=clamp(7+$.getInt(ceil(sqrt(i)),ceil(sqrt(i)*2)),7,24),r=vec(c,$.getInt(ceil(c*.5),c+1));$.get()<.5&&r.swapXy();const o=times(r.x,()=>times(r.y,()=>"wallOrEmpty")),u=times(r.x,()=>times(r.y,()=>!1));Zl(r,o,u),Zs(r,3,o,u);const d=[vec(r.x-2,1),vec(1,r.y-2),vec(1,1),vec(1,1)],y=[vec(0,1),vec(1,0),vec(0,1),vec(1,0)],x=[vec(-1,0),vec(0,-1),vec(1,0),vec(0,1)];let j=$.getInt(0,4);const k=vec(),He=vec(),W=vec();let C=0;for(let Ce=0;Ce<clamp(9+sqrt(i)*3,9,49);Ce++){j=$.getInt(0,2)*2+(1-j%2);let Ye=!0;if(ti(r,o).forEach(se=>{Xs(se,j,o)||(Ye=!1)}),!Ye){j++;continue}for(C++,k.set(d[j]),He.set(y[j]),W.set(x[j]);o[k.x][k.y]==="box"&&en(k,j,o),k.add(He),k.x>=r.x-1?(k.x=1,k.y+=W.y):k.y>=r.y-1&&(k.y=1,k.x+=W.x),!!k.isInRect(1,1,r.x-2,r.y-2););}if(ln(r,o,u),times(Math.floor(r.x*r.y/3),()=>{sn(r,o)}),!!nn(r,o,u))return{size:r,grid:o,targetGrid:u,stepCount:C}}function Zl(i,c,r){times(i.x,o=>{c[o][0]=c[o][i.y-1]="wall",r[o][0]=r[o][i.y-1]=!1}),times(i.y-2,o=>{const u=o+1;c[0][u]=c[i.x-1][u]="wall",r[0][u]=r[i.x-1][u]=!1})}function Zs(i,c,r,o){let u=-1,d=-1,y=0;times(c,()=>{for(;u<=0||u>=i.x-1||d<=0||d>=i.y-1||$.get()<.5||o[u][d];)if(u=$.getInt(floor(i.x*.2),ceil(i.x*.8)),d=$.getInt(floor(i.y*.2),ceil(i.y*.8)),y++,y>999)return;r[u][d]="box",o[u][d]=!0;const x=$.select(be);u+=x.x,d+=x.y})}function Xs(i,c,r){const o=be[c];return r[i.x-o.x][i.y-o.y]!=="empty"}function en(i,c,r){const o=be[c];let u=vec(i),d=0;const y=[];for(;;){u.add(o);const x=r[u.x][u.y];if(x==="wall"||x==="box"||(d++,times(ceil(tn(u,r)*3/d),()=>{y.push(d)}),d>3))break}r[i.x-o.x][i.y-o.y]==="wallOrEmpty"&&(r[i.x-o.x][i.y-o.y]="wall"),d!==0&&(y.length>0?d=$.select(y):d=$.getInt(1,d+1),u=vec(i),times(d,()=>{r[u.x][u.y]="empty",u.add(o)}),r[u.x][u.y]="box")}function tn(i,c){let r=0;return be.forEach(o=>{c[i.x+o.x][i.y+o.y]==="wallOrEmpty"&&r++}),r}function ln(i,c,r){let o=null,u=null;times(i.x,x=>{o==null&&!Xl(i,x,c,r)&&(o=x),u==null&&!Xl(i,i.x-1-x,c,r)&&(u=i.x-1-x)});let d=null,y=null;times(i.y,x=>{d==null&&!ei(i,x,c,r)&&(d=x),y==null&&!ei(i,i.y-1-x,c,r)&&(y=i.y-1-x)}),i.x=u-o+1,i.y=y-d+1,times(i.x,x=>times(i.y,j=>{let k=c[x+o][j+d];k=k==="emptyOrWall"?"empty":k,c[x+1][j+1]=k,r[x+1][j+1]=r[x+o][j+d]})),i.x+=2,i.y+=2,Zl(i,c,r)}function Xl(i,c,r,o){let u=!0;return times(i.y,d=>{const y=r[c][d],x=o[c][d];if(y==="empty"||y==="box"||x)return u=!1,!1}),u}function ei(i,c,r,o){let u=!0;return times(i.x,d=>{const y=r[d][c],x=o[d][c];if(y==="empty"||y==="box"||x)return u=!1,!1}),u}function sn(i,c){const r=$.getInt(1,i.x-1),o=$.getInt(1,i.y-1);if(c[r][o]!=="wallOrEmpty")return;let d=!1;be.forEach(y=>{const x=c[r+y.x][o+y.y];(x==="wall"||x==="box")&&(d=!0)}),d&&(c[r][o]="wall")}function nn(i,c,r){let o=!1;return ti(i,c).forEach(u=>{r[u.x][u.y]||(o=!0)}),o}function ti(i,c){const r=[];return times(i.x,o=>times(i.y,u=>{c[o][u]==="box"&&r.push(vec(o,u))})),r}const ge={x:160,y:160};window.options={viewSize:ge,theme:"dark",isShowingScore:!1,isPlayingBgm:!0,seed:10};window.characters=[`
ll llll

lllll l

lll lll
`,`
lllllll

lllllll

lllllll
`,`
llllll
llllll
llllll
llllll
llllll
llllll
`,`




 l l

`,`
cccc
cwcw
cccc
cccc
`,`
cccc
cccc
cwcw
cccc
`,`
cccc
wccw
cccc
cccc
`,`
cccc
cccc
wccw
cccc
`,`
cccc
wcwc
cccc
cccc
`,`
cccc
cccc
wcwc
cccc
`,`
cccc
cccc
cwcc
cwcc
`,`
cccc
cccc
cwcc
ccwc
`,`
cccc
wccw
cccc
`,`
  ll
   ll
llllll
llllll
   ll
  ll
`];let D,X=1,ll=2;const T=vec();let z,pt=0,li,ii,N=0,yt,il=vec(),sl=!1,nl=!1,rl=0,ie;window.update=function(){ticks||(li=getButton({pos:vec(1,ge.y-8),size:vec(25,7),text:"UNDO",onClick:()=>{si()}}),ii=getButton({pos:vec(ge.x-32,ge.y-8),size:vec(31,7),text:"RESET",onClick:()=>{mt()}}),fn(),mt(),nl=!0),times(D.size.x,r=>times(D.size.y,o=>{const u=D.grid[r][o];D.targetGrid[r][o]?(color("red"),char("c",T.x+r*6,T.y+o*6)):u==="wall"?(color("black"),char(addWithCharCode("a",(r*3+o*7)%9==5?1:0),T.x+r*6,T.y+o*6)):u==="empty"&&(r*11+o*5)%7==6&&(color("light_black"),char("d",T.x+r*6,T.y+o*6))})),N===0&&rn(),color("black");let i=!0;const c=vec();z.forEach(r=>{if(pt>0){pt--;const u=pt/9;c.set(T.x+(r.slipFrom.x*u+r.pos.x*(1-u))*6,T.y+(r.slipFrom.y*u+r.pos.y*(1-u))*6)}else c.set(T.x+r.pos.x*6,T.y+r.pos.y*6);let o;N>0?(o="m",c.y+=sin(N*.07)*2,N++):(o=addWithCharCode("e",r.way*2+floor(ticks/30)%2),D.targetGrid[r.pos.x][r.pos.y]||(i=!1)),char(o,c)}),N===0&&i&&(play("powerUp"),N=1),(N>60&&(input.isJustPressed||keyboard.isJustPressed)||N>300)&&un(),on(),updateButton(li),updateButton(ii)};function rn(){if(input.isJustPressed&&(il.set(input.pos),sl=!0),input.isJustReleased){if(sl&&il.distanceTo(input.pos)>9){const i=il.angleTo(input.pos),c=wrap(floor((i+PI/4)/(PI/2)),0,4);Ve(c,D.grid)}sl=!1}(keyboard.code.ArrowRight.isJustPressed||keyboard.code.KeyD.isJustPressed)&&Ve(0,D.grid),(keyboard.code.ArrowDown.isJustPressed||keyboard.code.KeyS.isJustPressed)&&Ve(1,D.grid),(keyboard.code.ArrowLeft.isJustPressed||keyboard.code.KeyA.isJustPressed)&&Ve(2,D.grid),(keyboard.code.ArrowUp.isJustPressed||keyboard.code.KeyW.isJustPressed)&&Ve(3,D.grid),keyboard.code.KeyU.isJustPressed&&si(),keyboard.code.KeyR.isJustPressed&&mt()}function Ve(i,c){switch(play("select"),yt.push(z.map(o=>({pos:vec(o.pos),way:o.way}))),i){case 0:z=_e(z,(o,u)=>u.pos.x-o.pos.x);break;case 1:z=_e(z,(o,u)=>u.pos.y-o.pos.y);break;case 2:z=_e(z,(o,u)=>o.pos.x-u.pos.x);break;case 3:z=_e(z,(o,u)=>o.pos.y-u.pos.y);break}const r=be[i];z.forEach(o=>{o.slipFrom.set(o.pos),o.way=i;for(let u=0;u<99;u++)if(o.pos.add(r),c[o.pos.x][o.pos.y]==="wall"||an(o)){o.pos.sub(r);break}}),pt=9}function si(){if(yt.length===0)return;play("hit"),yt.pop().forEach((c,r)=>{z[r].pos.set(c.pos),z[r].way=c.way})}function on(){if(rl>0){rl--;const i=`TRIP ${X}`;color("black"),text(i,(ge.x-i.length*6)/2+3,T.y-9)}N>0&&(color("black"),text("Arrived!",59,T.y+D.size.y*6+9)),nl&&(color("white"),rect(36,116,110,38),color("black"),text("[Swipe]",40,120),text("[     ] Move boxes",40,127),text("[WASD ]",40,134),text("[R]     Reset",40,143),text("[U]     Undo",40,150),times(4,i=>{char("n",46+i*7,128,{rotation:i})}),(input.isJustPressed||keyboard.isJustPressed)&&(nl=!1))}function cn(i,c){z=[],times(i.x,r=>times(i.y,o=>{c[r][o]==="box"&&(z.push({pos:vec(r,o),way:1,slipFrom:vec()}),c[r][o]="empty")}))}function an(i){let c=!1;return z.forEach(r=>{i!==r&&i.pos.equals(r.pos)&&(c=!0)}),c}function un(){X=ll,ll++,dn(),ri(),mt()}function mt(){play("coin"),D=Qs(X),T.set((ge.x-D.size.x*6)/2+3,(ge.y-D.size.y*6)/2+3).floor(),cn(D.size,D.grid),N=0,rl=180,yt=[]}const ni="hakosan_stage_count";function fn(){ie=hn(),ie==null&&(ie=1);const i=gn();X=i!=null?i:ie,ll=X<=ie?X+1:ie,ri()}function dn(){if(!(ie!=null&&ie>X))try{localStorage.setItem(ni,String(X))}catch(i){console.log(i)}}function hn(){let i;try{i=localStorage.getItem(ni)}catch(c){console.log(c)}if(i!=null){const c=Math.floor(Number(i));return c>0?c:void 0}}function ri(){let c=`${window.location.href.split("?")[0]}?s=${X}`;try{window.history.replaceState({},"",c)}catch(r){console.log(r)}}function gn(){const i=window.location.search.substring(1);if(i==null)return;let c=i.split("&"),r;for(let u=0;u<c.length;u++){const y=c[u].split("=");y[0]==="s"&&(r=y[1])}if(r==null)return;const o=Math.floor(Number(r));return o>0?o:void 0}window.addEventListener("load",onLoad);
