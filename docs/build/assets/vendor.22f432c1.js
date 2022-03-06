(function(s){function A(l,e=0,t=1){return Math.max(e,Math.min(l,t))}function Re(l,e,t){const i=t-e,n=l-e;if(n>=0)return n%i+e;{let r=i+n%i+e;return r>=t&&(r-=i),r}}function je(l,e,t){return e<=l&&l<t}function k(l){return[...Array(l).keys()]}function zl(l,e){return k(l).map(t=>e(t))}function Il(l,e){let t=[];for(let i=0,n=0;i<l.length;n++)e(l[i],n)?(t.push(l[i]),l.splice(i,1)):i++;return t}function El(l){return[...l].reduce((e,[t,i])=>(e[t]=i,e),{})}function Dl(l){return Object.keys(l).map(e=>[e,l[e]])}function kt(l,e){return String.fromCharCode(l.charCodeAt(0)+e)}function ie(l){return l.x!=null&&l.y!=null}class g{constructor(e,t){this.x=0,this.y=0,this.set(e,t)}set(e=0,t=0){return ie(e)?(this.x=e.x,this.y=e.y,this):(this.x=e,this.y=t,this)}add(e,t){return ie(e)?(this.x+=e.x,this.y+=e.y,this):(this.x+=e,this.y+=t,this)}sub(e,t){return ie(e)?(this.x-=e.x,this.y-=e.y,this):(this.x-=e,this.y-=t,this)}mul(e){return this.x*=e,this.y*=e,this}div(e){return this.x/=e,this.y/=e,this}clamp(e,t,i,n){return this.x=A(this.x,e,t),this.y=A(this.y,i,n),this}wrap(e,t,i,n){return this.x=Re(this.x,e,t),this.y=Re(this.y,i,n),this}addWithAngle(e,t){return this.x+=Math.cos(e)*t,this.y+=Math.sin(e)*t,this}swapXy(){const e=this.x;return this.x=this.y,this.y=e,this}normalize(){return this.div(this.length),this}rotate(e){if(e===0)return this;const t=this.x;return this.x=t*Math.cos(e)-this.y*Math.sin(e),this.y=t*Math.sin(e)+this.y*Math.cos(e),this}angleTo(e,t){return ie(e)?Math.atan2(e.y-this.y,e.x-this.x):Math.atan2(t-this.y,e-this.x)}distanceTo(e,t){let i,n;return ie(e)?(i=e.x-this.x,n=e.y-this.y):(i=e-this.x,n=t-this.y),Math.sqrt(i*i+n*n)}isInRect(e,t,i,n){return je(this.x,e,e+i)&&je(this.y,t,t+n)}equals(e){return this.x===e.x&&this.y===e.y}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}get length(){return Math.sqrt(this.x*this.x+this.y*this.y)}get angle(){return Math.atan2(this.y,this.x)}}const $l=["transparent","white","red","green","yellow","blue","purple","cyan","black","light_red","light_green","light_yellow","light_blue","light_purple","light_cyan","light_black"],Ot="twrgybpclRGYBPCL";let ne;const Gt=[15658734,15277667,5025616,16761095,4149685,10233776,240116,6381921];function Rt(l){const[e,t,i]=qe(0,l);if(ne=El($l.map((n,r)=>{if(r<1)return[n,{r:0,g:0,b:0,a:0}];if(r<9){const[c,h,f]=qe(r-1,l);return[n,{r:c,g:h,b:f,a:1}]}const[o,a,u]=qe(r-9+1,l);return[n,{r:Math.floor(l?o*.5:e-(e-o)*.5),g:Math.floor(l?a*.5:i-(i-a)*.5),b:Math.floor(l?u*.5:t-(t-u)*.5),a:1}]})),l){const n=ne.blue;ne.white={r:Math.floor(n.r*.15),g:Math.floor(n.g*.15),b:Math.floor(n.b*.15),a:1}}}function qe(l,e){e&&(l===0?l=7:l===7&&(l=0));const t=Gt[l];return[(t&16711680)>>16,(t&65280)>>8,t&255]}function se(l,e=1){const t=ne[l];return Math.floor(t.r*e)<<16|Math.floor(t.g*e)<<8|Math.floor(t.b*e)}function re(l,e=1){const t=ne[l],i=Math.floor(t.r*e),n=Math.floor(t.g*e),r=Math.floor(t.b*e);return t.a<1?`rgba(${i},${n},${r},${t.a})`:`rgb(${i},${n},${r})`}const jt=`
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
`;function zt(l,e){return new PIXI.Filter(void 0,jt,{width:l,height:e})}const J=new g;let C,I,m,w=new g;const Fl=5;document.createElement("img");let y,oe,ae=1,Ve="black",x,Bl,K=!1,p,Ll;function It(l,e,t,i,n,r,o){J.set(l),p=o,Ve=t;const a=`
-webkit-touch-callout: none;
-webkit-tap-highlight-color: ${e};
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background: ${e};
color: #888;
`,u=`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
`,c=`
image-rendering: -moz-crisp-edges;
image-rendering: -webkit-optimize-contrast;
image-rendering: -o-crisp-edges;
image-rendering: pixelated;
`;if(document.body.style.cssText=a,w.set(J),p.isUsingPixi){w.mul(Fl);const f=new PIXI.Application({width:w.x,height:w.y});if(C=f.view,m=new PIXI.Graphics,m.scale.x=m.scale.y=Fl,PIXI.settings.SCALE_MODE=PIXI.SCALE_MODES.NEAREST,f.stage.addChild(m),m.filters=[],p.name==="crt"&&m.filters.push(Ll=new PIXI.filters.CRTFilter({vignettingAlpha:.7})),p.name==="pixel"&&m.filters.push(zt(w.x,w.y)),p.name==="pixel"||p.name==="shapeDark"){const b=new PIXI.filters.AdvancedBloomFilter({threshold:.1,bloomScale:p.name==="pixel"?1.5:1,brightness:p.name==="pixel"?1.5:1,blur:8});m.filters.push(b)}m.lineStyle(0),C.style.cssText=u}else C=document.createElement("canvas"),C.width=w.x,C.height=w.y,I=C.getContext("2d"),I.imageSmoothingEnabled=!1,C.style.cssText=u+c;document.body.appendChild(C);const h=()=>{const f=.95,b=innerWidth/innerHeight,R=w.x/w.y,Ge=b<R,U=Ge?f*innerWidth:f*innerHeight*R,We=Ge?f*innerWidth/R:f*innerHeight;C.style.width=`${U}px`,C.style.height=`${We}px`};if(window.addEventListener("resize",h),h(),i){y=document.createElement("canvas");let f;n?(y.width=w.x,y.height=w.y,f=r):(w.x<=w.y*2?(y.width=w.y*2,y.height=w.y):(y.width=w.x,y.height=w.x/2),y.width>400&&(ae=400/y.width,y.width=400,y.height*=ae),f=Math.round(400/y.width)),oe=y.getContext("2d"),oe.fillStyle=e,gcc.setOptions({scale:f,capturingFps:60,isSmoothingEnabled:!1})}}function ze(){if(p.isUsingPixi){m.clear(),K=!1,ce(se(Ve,p.isDarkColor?.15:1)),m.drawRect(0,0,J.x,J.y),ue(),K=!1;return}I.fillStyle=re(Ve,p.isDarkColor?.15:1),I.fillRect(0,0,J.x,J.y),I.fillStyle=re(x)}function Q(l){if(l===x){p.isUsingPixi&&!K&&ce(se(x));return}if(x=l,p.isUsingPixi){K&&m.endFill(),ce(se(x));return}I.fillStyle=re(l)}function ce(l){ue(),m.beginFill(l),K=!0}function ue(){K&&(m.endFill(),K=!1)}function Ye(){Bl=x}function Qe(){Q(Bl)}function de(l,e,t,i){if(p.isUsingPixi){p.name==="shape"||p.name==="shapeDark"?m.drawRoundedRect(l,e,t,i,2):m.drawRect(l,e,t,i);return}I.fillRect(l,e,t,i)}function Et(l,e,t,i,n){const r=se(x);ce(r),m.drawCircle(l,e,n*.5),m.drawCircle(t,i,n*.5),ue(),m.lineStyle(n,r),m.moveTo(l,e),m.lineTo(t,i),m.lineStyle(0)}function Dt(){Ll.time+=.2}function $t(){if(oe.fillRect(0,0,y.width,y.height),ae===1)oe.drawImage(C,(y.width-C.width)/2,(y.height-C.height)/2);else{const l=C.width*ae,e=C.height*ae;oe.drawImage(C,(y.width-l)/2,(y.height-e)/2,l,e)}gcc.capture(y)}const Tl=[`
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
 lll
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
  lll
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
l   l
 l l
  l
`,`
l   l
l l l
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

 lll
l  l
l  l
 lll
`,`
l
l
lll
l  l
lll
`,`

 lll
l  
l
 lll
`,`
   l
   l
 lll
l  l
 lll
`,`

 ll
l ll
ll
 ll
`,`
  l
 l 
lll
 l
 l
`,`
 ll
l  l
 lll
   l
 ll
`,`
l
l
ll
l l
l l
`,`

l

l
l
`,`
 l

 l
 l
l
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

llll
l l l
l l l
l   l
`,`

lll
l  l
l  l
l  l
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

 lll
ll
  ll
lll
`,`

 l
lll
 l
  l
`,`

l  l
l  l
l  l
 lll
`,`

l  l
l  l
 ll
 ll
`,`

l   l
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

`];let Z,Ie;function Ft(){Z=[],Ie=[]}function Ul(){Z=Z.concat(Ie),Ie=[]}function Al(l){let e={isColliding:{rect:{},text:{},char:{}}};return Z.forEach(t=>{Bt(l,t)&&(e=Object.assign(Object.assign(Object.assign({},e),Ze(t.collision.isColliding.rect)),{isColliding:{rect:Object.assign(Object.assign({},e.isColliding.rect),t.collision.isColliding.rect),text:Object.assign(Object.assign({},e.isColliding.text),t.collision.isColliding.text),char:Object.assign(Object.assign({},e.isColliding.char),t.collision.isColliding.char)}}))}),e}function Bt(l,e){const t=e.pos.x-l.pos.x,i=e.pos.y-l.pos.y;return-e.size.x<t&&t<l.size.x&&-e.size.y<i&&i<l.size.y}function Ze(l){if(l==null)return{};const e={transparent:"tr",white:"wh",red:"rd",green:"gr",yellow:"yl",blue:"bl",purple:"pr",cyan:"cy",black:"lc"};let t={};return Dl(l).forEach(([i,n])=>{const r=e[i];n&&r!=null&&(t[r]=!0)}),t}function Lt(l,e,t,i){return Jl(!1,l,e,t,i)}function Tt(l,e,t,i){return Jl(!0,l,e,t,i)}function Jl(l,e,t,i,n){if(typeof t=="number"){if(typeof i=="number")return il(e,t,i,Object.assign({isCharacter:l,isCheckingCollision:!0,color:x},n));throw"invalid params"}else return il(e,t.x,t.y,Object.assign({isCharacter:l,isCheckingCollision:!0,color:x},i))}const fe=6,he=1,d=fe*he;let Kl,el,ll,tl=!1,N,S;const ge={color:"black",backgroundColor:"transparent",rotation:0,mirror:{x:1,y:1},scale:{x:1,y:1},isCharacter:!1,isCheckingCollision:!1};function Ut(){N=document.createElement("canvas"),N.width=N.height=d,S=N.getContext("2d"),Kl=Tl.map((l,e)=>Object.assign(Object.assign({},sl(l)),{hitBox:Ee(String.fromCharCode(33+e),!1)})),el=Tl.map((l,e)=>Object.assign(Object.assign({},sl(l)),{hitBox:Ee(String.fromCharCode(33+e),!0)})),ll={}}function At(l,e){const t=e.charCodeAt(0)-33;l.forEach((i,n)=>{el[t+n]=Object.assign(Object.assign({},sl(i)),{hitBox:Ee(String.fromCharCode(33+t+n),!0)})})}function Jt(){tl=!0}function il(l,e,t,i={}){const n=Hl(i);e-=d/2*n.scale.x,t-=d/2*n.scale.y;const r=Math.floor(e);let o=l,a=r,u=Math.floor(t),c={isColliding:{rect:{},text:{},char:{}}};for(let h=0;h<o.length;h++){const f=o[h];if(f===`
`){a=r,u+=d*n.scale.y;continue}const b=Nl(f,a,u,n);n.isCheckingCollision&&(c={isColliding:{rect:Object.assign(Object.assign({},c.isColliding.rect),b.isColliding.rect),text:Object.assign(Object.assign({},c.isColliding.text),b.isColliding.text),char:Object.assign(Object.assign({},c.isColliding.char),b.isColliding.char)}}),a+=d*n.scale.x}return c}function Nl(l,e,t,i){const n=l.charCodeAt(0);if(n<32||n>126)return{isColliding:{rect:{},text:{},char:{}}};const r=Hl(i);if(r.backgroundColor!=="transparent"&&(Ye(),Q(r.backgroundColor),de(e,t,d*r.scale.x,d*r.scale.y),Qe()),n<=32)return{isColliding:{rect:{},text:{},char:{}}};const o=n-33,a=r.isCharacter?el[o]:Kl[o],u=Re(r.rotation,0,4);if(r.color==="black"&&u===0&&r.mirror.x===1&&r.mirror.y===1)return nl(a,e,t,r.scale,r.isCheckingCollision,!0);const c=JSON.stringify({c:l,options:r}),h=ll[c];if(h!=null)return nl(h,e,t,r.scale,r.isCheckingCollision,r.color!=="transparent");S.clearRect(0,0,d,d),u===0&&r.mirror.x===1&&r.mirror.y===1?S.drawImage(a.image,0,0):(S.save(),S.translate(d/2,d/2),S.rotate(Math.PI/2*u),(r.mirror.x===-1||r.mirror.y===-1)&&S.scale(r.mirror.x,r.mirror.y),S.drawImage(a.image,-d/2,-d/2),S.restore()),r.color!=="black"&&(S.globalCompositeOperation="source-in",S.fillStyle=re(r.color==="transparent"?"black":r.color),S.fillRect(0,0,d,d),S.globalCompositeOperation="source-over");const f=Ee(l,r.isCharacter);let b;if(tl||p.isUsingPixi){const R=document.createElement("img");R.src=N.toDataURL(),p.isUsingPixi&&(b=PIXI.Texture.from(R)),tl&&(ll[c]={image:R,texture:b,hitBox:f})}return nl({image:N,texture:b,hitBox:f},e,t,r.scale,r.isCheckingCollision,r.color!=="transparent")}function nl(l,e,t,i,n,r){if(r&&(i.x===1&&i.y===1?_l(l,e,t):_l(l,e,t,d*i.x,d*i.y)),!n)return;const o={pos:{x:e+l.hitBox.pos.x,y:t+l.hitBox.pos.y},size:{x:l.hitBox.size.x*i.x,y:l.hitBox.size.y*i.y},collision:l.hitBox.collision},a=Al(o);return r&&Z.push(o),a}function _l(l,e,t,i,n){if(p.isUsingPixi){ue(),m.beginTextureFill({texture:l.texture,matrix:new PIXI.Matrix().translate(e,t)}),m.drawRect(e,t,i==null?d:i,n==null?d:n),ce(se(x));return}i==null?I.drawImage(l.image,e,t):I.drawImage(l.image,e,t,i,n)}function sl(l,e=!0){S.clearRect(0,0,d,d);let t=l.split(`
`);e&&(t=t.slice(1,t.length-1));let i=0;t.forEach(u=>{i=Math.max(u.length,i)});const n=Math.max(Math.ceil((fe-i)/2),0),r=t.length,o=Math.max(Math.ceil((fe-r)/2),0);t.forEach((u,c)=>{if(!(c+o>=fe))for(let h=0;h<fe-n;h++){const f=u.charAt(h);let b=Ot.indexOf(f);f!==""&&b>=1&&(S.fillStyle=re($l[b]),S.fillRect((h+n)*he,(c+o)*he,he,he))}});const a=document.createElement("img");return a.src=N.toDataURL(),p.isUsingPixi?{image:a,texture:PIXI.Texture.from(a)}:{image:a}}function Ee(l,e){const t={pos:new g(d,d),size:new g,collision:{isColliding:{char:{},text:{}}}};e?t.collision.isColliding.char[l]=!0:t.collision.isColliding.text[l]=!0;const i=S.getImageData(0,0,d,d).data;let n=0;for(let r=0;r<d;r++)for(let o=0;o<d;o++)i[n+3]>0&&(o<t.pos.x&&(t.pos.x=o),r<t.pos.y&&(t.pos.y=r)),n+=4;n=0;for(let r=0;r<d;r++)for(let o=0;o<d;o++)i[n+3]>0&&(o>t.pos.x+t.size.x-1&&(t.size.x=o-t.pos.x+1),r>t.pos.y+t.size.y-1&&(t.size.y=r-t.pos.y+1)),n+=4;return t}function Hl(l){let e=Object.assign(Object.assign({},ge),l);return l.scale!=null&&(e.scale=Object.assign(Object.assign({},ge.scale),l.scale)),l.mirror!=null&&(e.mirror=Object.assign(Object.assign({},ge.mirror),l.mirror)),e}let ee=!1,De=!1,rl=!1;const Wl=["Escape","Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Minus","Equal","Backspace","Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Enter","ControlLeft","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Backquote","ShiftLeft","Backslash","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ShiftRight","NumpadMultiply","AltLeft","Space","CapsLock","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","Pause","ScrollLock","Numpad7","Numpad8","Numpad9","NumpadSubtract","Numpad4","Numpad5","Numpad6","NumpadAdd","Numpad1","Numpad2","Numpad3","Numpad0","NumpadDecimal","IntlBackslash","F11","F12","F13","F14","F15","F16","F17","F18","F19","F20","F21","F22","F23","F24","IntlYen","Undo","Paste","MediaTrackPrevious","Cut","Copy","MediaTrackNext","NumpadEnter","ControlRight","LaunchMail","AudioVolumeMute","MediaPlayPause","MediaStop","Eject","AudioVolumeDown","AudioVolumeUp","BrowserHome","NumpadDivide","PrintScreen","AltRight","Help","NumLock","Pause","Home","ArrowUp","PageUp","ArrowLeft","ArrowRight","End","ArrowDown","PageDown","Insert","Delete","OSLeft","OSRight","ContextMenu","BrowserSearch","BrowserFavorites","BrowserRefresh","BrowserStop","BrowserForward","BrowserBack"];let ol;const Kt={onKeyDown:void 0};let al,cl=!1,ul=!1,dl=!1,fl={},hl={},gl={};function Xl(l){al=Object.assign(Object.assign({},Kt),l),ol=El(Wl.map(e=>[e,{isPressed:!1,isJustPressed:!1,isJustReleased:!1}])),document.addEventListener("keydown",e=>{cl=ul=!0,fl[e.code]=hl[e.code]=!0,al.onKeyDown!=null&&al.onKeyDown(),(e.code==="AltLeft"||e.code==="AltRight"||e.code==="ArrowRight"||e.code==="ArrowDown"||e.code==="ArrowLeft"||e.code==="ArrowUp")&&e.preventDefault()}),document.addEventListener("keyup",e=>{cl=!1,dl=!0,fl[e.code]=!1,gl[e.code]=!0})}function ql(){De=!ee&&ul,rl=ee&&dl,ul=dl=!1,ee=cl,Dl(ol).forEach(([l,e])=>{e.isJustPressed=!e.isPressed&&hl[l],e.isJustReleased=e.isPressed&&gl[l],e.isPressed=!!fl[l]}),hl={},gl={}}function Vl(){De=!1,ee=!0}var Nt=Object.freeze({__proto__:null,get isPressed(){return ee},get isJustPressed(){return De},get isJustReleased(){return rl},codes:Wl,get code(){return ol},init:Xl,update:ql,clearJustPressed:Vl});class $e{constructor(e=null){this.setSeed(e)}get(e=1,t){return t==null&&(t=e,e=0),this.next()/4294967295*(t-e)+e}getInt(e,t){t==null&&(t=e,e=0);const i=Math.floor(e),n=Math.floor(t);return n===i?i:this.next()%(n-i)+i}getPlusOrMinus(){return this.getInt(2)*2-1}select(e){return e[this.getInt(e.length)]}setSeed(e,t=123456789,i=362436069,n=521288629,r=32){this.w=e!=null?e>>>0:Math.floor(Math.random()*4294967295)>>>0,this.x=t>>>0,this.y=i>>>0,this.z=n>>>0;for(let o=0;o<r;o++)this.next();return this}getState(){return{x:this.x,y:this.y,z:this.z,w:this.w}}next(){const e=this.x^this.x<<11;return this.x=this.y,this.y=this.z,this.z=this.w,this.w=(this.w^this.w>>>19^(e^e>>>8))>>>0,this.w}}const pe=new g;let E=!1,le=!1,me=!1,_t={isDebugMode:!1,anchor:new g,padding:new g,onPointerDownOrUp:void 0},M,G,v;const ye=new $e,_=new g,D=new g;let we=!1,be=new g,pl=!1,ml=!1,yl=!1;function Yl(l,e,t){v=Object.assign(Object.assign({},_t),t),M=l,G=new g(e.x+v.padding.x*2,e.y+v.padding.y*2),be.set(M.offsetLeft+M.clientWidth*(.5-v.anchor.x),M.offsetTop+M.clientWidth*(.5-v.anchor.y)),v.isDebugMode&&_.set(M.offsetLeft+M.clientWidth*(.5-v.anchor.x),M.offsetTop+M.clientWidth*(.5-v.anchor.y)),document.addEventListener("mousedown",i=>{et(i.pageX,i.pageY)}),document.addEventListener("touchstart",i=>{et(i.touches[0].pageX,i.touches[0].pageY)}),document.addEventListener("mousemove",i=>{lt(i.pageX,i.pageY)}),document.addEventListener("touchmove",i=>{i.preventDefault(),lt(i.touches[0].pageX,i.touches[0].pageY)},{passive:!1}),document.addEventListener("mouseup",i=>{tt()}),document.addEventListener("touchend",i=>{i.preventDefault(),i.target.click(),tt()},{passive:!1})}function Ql(){Ht(be.x,be.y,pe),v.isDebugMode&&!pe.isInRect(0,0,G.x,G.y)?(Wt(),pe.set(_),le=!E&&we,me=E&&!we,E=we):(le=!E&&ml,me=E&&yl,E=pl),ml=yl=!1}function Zl(){le=!1,E=!0}function Ht(l,e,t){M!=null&&(t.x=Math.round(((l-M.offsetLeft)/M.clientWidth+v.anchor.x)*G.x-v.padding.x),t.y=Math.round(((e-M.offsetTop)/M.clientHeight+v.anchor.y)*G.y-v.padding.y))}function Wt(){D.length>0?(_.add(D),!je(_.x,-G.x*.1,G.x*1.1)&&_.x*D.x>0&&(D.x*=-1),!je(_.y,-G.y*.1,G.y*1.1)&&_.y*D.y>0&&(D.y*=-1),ye.get()<.05&&D.set(0)):ye.get()<.1&&(D.set(0),D.addWithAngle(ye.get(Math.PI*2),(G.x+G.y)*ye.get(.01,.03))),ye.get()<.05&&(we=!we)}function et(l,e){be.set(l,e),pl=ml=!0,v.onPointerDownOrUp!=null&&v.onPointerDownOrUp()}function lt(l,e){be.set(l,e)}function tt(l){pl=!1,yl=!0,v.onPointerDownOrUp!=null&&v.onPointerDownOrUp()}var Xt=Object.freeze({__proto__:null,pos:pe,get isPressed(){return E},get isJustPressed(){return le},get isJustReleased(){return me},init:Yl,update:Ql,clearJustPressed:Zl});let L=new g,$=!1,j=!1,T=!1;function it(l){Xl({onKeyDown:l}),Yl(C,J,{onPointerDownOrUp:l,anchor:new g(.5,.5)})}function nt(){ql(),Ql(),L=pe,$=ee||E,j=De||le,T=rl||me}function st(){Vl(),Zl()}function Ce(l){L.set(l.pos),$=l.isPressed,j=l.isJustPressed,T=l.isJustReleased}var qt=Object.freeze({__proto__:null,get pos(){return L},get isPressed(){return $},get isJustPressed(){return j},get isJustReleased(){return T},init:it,update:nt,clearJustPressed:st,set:Ce});let rt,ot;const at=68,wl=1e3/at;let Se=0;const Vt={viewSize:{x:126,y:126},bodyBackground:"#111",viewBackground:"black",isUsingVirtualPad:!0,isFourWaysStick:!1,isCapturing:!1,isCapturingGameCanvasOnly:!1,isSoundEnabled:!0,captureCanvasScale:1,theme:{name:"simple",isUsingPixi:!1,isDarkColor:!1}};let O,ct=10;function Yt(l,e,t){rt=l,ot=e,O=Object.assign(Object.assign({},Vt),t),Rt(O.theme.isDarkColor),It(O.viewSize,O.bodyBackground,O.viewBackground,O.isCapturing,O.isCapturingGameCanvasOnly,O.captureCanvasScale,O.theme),it(O.isSoundEnabled?sss.startAudio:()=>{}),Ut(),rt(),ut()}function ut(){requestAnimationFrame(ut);const l=window.performance.now();l<Se-at/12||(Se+=wl,(Se<l||Se>l+wl*2)&&(Se=l+wl),O.isSoundEnabled&&sss.update(),nt(),ot(),O.isCapturing&&$t(),ct--,ct===0&&Jt())}class Qt{constructor(e){this.size=new g,this.size.set(e),this.letterGrid=k(this.size.x).map(()=>k(this.size.y).map(()=>{})),this.colorGrid=k(this.size.x).map(()=>k(this.size.y).map(()=>{})),this.backgroundColorGrid=k(this.size.x).map(()=>k(this.size.y).map(()=>{})),this.rotationGrid=k(this.size.x).map(()=>k(this.size.y).map(()=>{})),this.characterGrid=k(this.size.x).map(()=>k(this.size.y).map(()=>{}))}print(e,t,i,n={}){const r=Object.assign(Object.assign({},ge),n);let o=Math.floor(t),a=Math.floor(i);const u=o;for(let c=0;c<e.length;c++){const h=e[c];if(h===`
`){o=u,a++;continue}if(o<0||o>=this.size.x||a<0||a>=this.size.y){o++;continue}this.letterGrid[o][a]=h,this.colorGrid[o][a]=r.color,this.backgroundColorGrid[o][a]=r.backgroundColor,this.rotationGrid[o][a]=r.rotation,this.characterGrid[o][a]=r.isCharacter,o++}}getCharAt(e,t){if(e<0||e>=this.size.x||t<0||t>=this.size.y)return;const i=Math.floor(e),n=Math.floor(t),r=this.letterGrid[i][n],o=this.colorGrid[i][n],a=this.backgroundColorGrid[i][n],u=this.rotationGrid[i][n],c=this.characterGrid[i][n];return{char:r,options:{color:o,backgroundColor:a,rotation:u,isCharacter:c}}}setCharAt(e,t,i,n){if(e<0||e>=this.size.x||t<0||t>=this.size.y)return;const r=Object.assign(Object.assign({},ge),n),o=Math.floor(e),a=Math.floor(t);this.letterGrid[o][a]=i,this.colorGrid[o][a]=r.color,this.backgroundColorGrid[o][a]=r.backgroundColor,this.rotationGrid[o][a]=r.rotation,this.characterGrid[o][a]=r.isCharacter}draw(){for(let e=0;e<this.size.x;e++)for(let t=0;t<this.size.y;t++){const i=this.letterGrid[e][t];if(i==null)continue;const n=this.colorGrid[e][t],r=this.backgroundColorGrid[e][t],o=this.rotationGrid[e][t],a=this.characterGrid[e][t];Nl(i,e*d,t*d,{color:n,backgroundColor:r,rotation:o,isCharacter:a})}}clear(){for(let e=0;e<this.size.x;e++)for(let t=0;t<this.size.y;t++)this.letterGrid[e][t]=this.colorGrid[e][t]=this.backgroundColorGrid[e][t]=this.rotationGrid[e][t]=this.characterGrid[e][t]=void 0}scrollUp(){for(let t=0;t<this.size.x;t++)for(let i=1;i<this.size.y;i++)this.letterGrid[t][i-1]=this.letterGrid[t][i],this.colorGrid[t][i-1]=this.colorGrid[t][i],this.backgroundColorGrid[t][i-1]=this.backgroundColorGrid[t][i],this.rotationGrid[t][i-1]=this.rotationGrid[t][i],this.characterGrid[t][i-1]=this.characterGrid[t][i];const e=this.size.y-1;for(let t=0;t<this.size.x;t++)this.letterGrid[t][e]=this.colorGrid[t][e]=this.backgroundColorGrid[t][e]=this.rotationGrid[t][e]=this.characterGrid[t][e]=void 0}getState(){return{charGrid:this.letterGrid.map(e=>[].concat(e)),colorGrid:this.colorGrid.map(e=>[].concat(e)),backgroundColorGrid:this.backgroundColorGrid.map(e=>[].concat(e)),rotationGrid:this.rotationGrid.map(e=>[].concat(e)),symbolGrid:this.characterGrid.map(e=>[].concat(e))}}setState(e){this.letterGrid=e.charGrid.map(t=>[].concat(t)),this.colorGrid=e.colorGrid.map(t=>[].concat(t)),this.backgroundColorGrid=e.backgroundColorGrid.map(t=>[].concat(t)),this.rotationGrid=e.rotationGrid.map(t=>[].concat(t)),this.characterGrid=e.symbolGrid.map(t=>[].concat(t))}}let Fe;const Be=new $e;function bl(){Fe=[]}function dt(l,e=16,t=1,i=0,n=Math.PI*2){if(e<1){if(Be.get()>e)return;e=1}for(let r=0;r<e;r++){const o=i+Be.get(n)-n/2,a={pos:new g(l),vel:new g(t*Be.get(.5,1),0).rotate(o),color:x,ticks:clamp(Be.get(10,20)*Math.sqrt(Math.abs(t)),10,60)};Fe.push(a)}}function Le(){Ye(),Fe=Fe.filter(l=>(l.ticks--,l.ticks<0?!1:(l.pos.add(l.vel),l.vel.mul(.98),Q(l.color),de(Math.floor(l.pos.x),Math.floor(l.pos.y),1,1),!0))),Qe()}function Cl({pos:l,size:e,text:t,isToggle:i=!1,onClick:n=()=>{}}){return{pos:l,size:e,text:t,isToggle:i,onClick:n,isPressed:!1,isSelected:!1,isHovered:!1,toggleGroup:[]}}function Sl(l){const e=vec(input.pos).sub(l.pos);l.isHovered=e.isInRect(0,0,l.size.x,l.size.y),l.isHovered&&le&&(l.isPressed=!0),l.isPressed&&!l.isHovered&&(l.isPressed=!1),l.isPressed&&me&&(l.onClick(),l.isPressed=!1,l.isToggle&&(l.toggleGroup.length===0?l.isSelected=!l.isSelected:(l.toggleGroup.forEach(t=>{t.isSelected=!1}),l.isSelected=!0))),Te(l)}function Te(l){color(l.isPressed?"blue":"light_blue"),rect(l.pos.x,l.pos.y,l.size.x,l.size.y),l.isToggle&&!l.isSelected&&(color("white"),rect(l.pos.x+1,l.pos.y+1,l.size.x-2,l.size.y-2)),color(l.isHovered?"black":"blue"),text(l.text,l.pos.x+3,l.pos.y+3)}let z,ve,H,vl;function Zt(l){z={randomSeed:l,inputs:[]}}function ei(l){z.inputs.push(l)}function ft(){return z!=null}function li(l){ve=0,l.setSeed(z.randomSeed)}function ti(){ve>=z.inputs.length||(Ce(z.inputs[ve]),ve++)}function ii(){H=[]}function ni(l,e,t){H.push({randomState:t.getState(),gameState:cloneDeep(l),baseState:cloneDeep(e)})}function si(l){const e=H.pop(),t=e.randomState;return l.setSeed(t.w,t.x,t.y,t.z,0),vl={pos:vec(L),isPressed:$,isJustPressed:j,isJustReleased:T},Ce(z.inputs.pop()),e}function ri(l){const e=H[H.length-1],t=e.randomState;return l.setSeed(t.w,t.x,t.y,t.z,0),vl={pos:vec(L),isPressed:$,isJustPressed:j,isJustReleased:T},Ce(z.inputs[z.inputs.length-1]),e}function oi(){Ce(vl)}function ai(){return H.length===0}function ci(){const l=ve-1;if(!(l>=z.inputs.length))return H[l]}function ui(l,e,t,i){return ht(!1,l,e,t,i)}function di(l,e,t,i){return ht(!0,l,e,t,i)}function fi(l,e,t,i,n=.5,r=.5){typeof l!="number"&&(r=n,n=i,i=t,t=e,e=l.y,l=l.x);const o=new g(t).rotate(n),a=new g(l-o.x*r,e-o.y*r);return xl(a,o,i)}function hi(l,e,t=3,i=3,n=3){const r=new g,o=new g;if(typeof l=="number")if(typeof e=="number")typeof t=="number"?(r.set(l,e),o.set(t,i)):(r.set(l,e),o.set(t),n=i);else throw"invalid params";else if(typeof e=="number")if(typeof t=="number")r.set(l),o.set(e,t),n=i;else throw"invalid params";else if(typeof t=="number")r.set(l),o.set(e),n=t;else throw"invalid params";return xl(r,o.sub(r),n)}function gi(l,e,t,i,n,r){let o=new g;typeof l=="number"?o.set(l,e):(o.set(l),r=n,n=i,i=t,t=e),i==null&&(i=3),n==null&&(n=0),r==null&&(r=Math.PI*2);let a,u;if(n>r?(a=r,u=n-r):(a=n,u=r-n),u=A(u,0,Math.PI*2),u<.01)return;const c=A(ceil(u*Math.sqrt(t*.25)),1,36),h=u/c;let f=a,b=new g(t).rotate(f).add(o),R=new g,Ge=new g,U={isColliding:{rect:{},text:{},char:{}}};for(let We=0;We<c;We++){f+=h,R.set(t).rotate(f).add(o),Ge.set(R).sub(b);const Xe=xl(b,Ge,i,!0);U=Object.assign(Object.assign(Object.assign({},U),Ze(Xe.isColliding.rect)),{isColliding:{rect:Object.assign(Object.assign({},U.isColliding.rect),Xe.isColliding.rect),text:Object.assign(Object.assign({},U.isColliding.text),Xe.isColliding.text),char:Object.assign(Object.assign({},U.isColliding.char),Xe.isColliding.char)}}),b.set(R)}return Ul(),U}function ht(l,e,t,i,n){if(typeof e=="number"){if(typeof t=="number")return typeof i=="number"?n==null?W(l,e,t,i,i):W(l,e,t,i,n):W(l,e,t,i.x,i.y);throw"invalid params"}else if(typeof t=="number"){if(i==null)return W(l,e.x,e.y,t,t);if(typeof i=="number")return W(l,e.x,e.y,t,i);throw"invalid params"}else return W(l,e.x,e.y,t.x,t.y)}function xl(l,e,t,i=!1){let n=!0;(p.name==="shape"||p.name==="shapeDark")&&(x!=="transparent"&&Et(l.x,l.y,l.x+e.x,l.y+e.y,t),n=!1);const r=Math.floor(A(t,3,10)),o=Math.abs(e.x),a=Math.abs(e.y),u=A(Math.ceil(o>a?o/r:a/r)+1,3,99);e.div(u-1);let c={isColliding:{rect:{},text:{},char:{}}};for(let h=0;h<u;h++){const f=W(!0,l.x,l.y,t,t,!0,n);c=Object.assign(Object.assign(Object.assign({},c),Ze(f.isColliding.rect)),{isColliding:{rect:Object.assign(Object.assign({},c.isColliding.rect),f.isColliding.rect),text:Object.assign(Object.assign({},c.isColliding.text),f.isColliding.text),char:Object.assign(Object.assign({},c.isColliding.char),f.isColliding.char)}}),l.add(e)}return i||Ul(),c}function W(l,e,t,i,n,r=!1,o=!0){let a=o;(p.name==="shape"||p.name==="shapeDark")&&a&&x!=="transparent"&&(l?de(e-i/2,t-n/2,i,n):de(e,t,i,n),a=!1);let u=l?{x:Math.floor(e-i/2),y:Math.floor(t-n/2)}:{x:Math.floor(e),y:Math.floor(t)};const c={x:Math.trunc(i),y:Math.trunc(n)};if(c.x===0||c.y===0)return{isColliding:{rect:{},text:{},char:{}}};c.x<0&&(u.x+=c.x,c.x*=-1),c.y<0&&(u.y+=c.y,c.y*=-1);const h={pos:u,size:c,collision:{isColliding:{rect:{}}}};h.collision.isColliding.rect[x]=!0;const f=Al(h);return x!=="transparent"&&((r?Ie:Z).push(h),a&&de(u.x,u.y,c.x,c.y)),f}const pi=Math.PI,mi=Math.abs,yi=Math.sin,wi=Math.cos,bi=Math.atan2,Ci=Math.sqrt,Si=Math.pow,vi=Math.floor,xi=Math.round,Mi=Math.ceil;s.ticks=0,s.difficulty=void 0,s.score=0,s.time=void 0,s.isReplaying=!1;function Pi(l=1,e){return F.get(l,e)}function ki(l=2,e){return F.getInt(l,e)}function Oi(l=1,e){return F.get(l,e)*F.getPlusOrMinus()}function Ml(l="GAME OVER"){He=l,te&&(s.time=void 0),St()}function Gi(l="COMPLETE"){He=l,St()}function Ri(l,e,t){if(s.isReplaying||(s.score+=l,e==null))return;const i=`${l>=1?"+":""}${Math.floor(l)}`;let n=new g;typeof e=="number"?n.set(e,t):n.set(e),n.x-=i.length*d/2,n.y-=d/2,Ne.push({str:i,pos:n,vy:-2,ticks:30})}function gt(l){Q(l)}function ji(l,e,t,i,n,r){let o=new g;typeof l=="number"?(o.set(l,e),dt(o,t,i,n,r)):(o.set(l),dt(o,e,t,i,n))}function pt(l,e){return new g(l,e)}function mt(l){!ke&&!Y&&V&&sss.play(Ei[l])}function zi(l){if(ke){const e=ri(F),t=e.baseState;return s.score=t.score,s.ticks=t.ticks,cloneDeep(e.gameState)}else if(Y){const e=si(F),t=e.baseState;return s.score=t.score,s.ticks=t.ticks,e.gameState}else{if(s.isReplaying)return ci().gameState;if(X==="inGame"){const e={score:s.score,ticks:s.ticks};ni(l,e,F)}}return l}function Ii(){Y||(!s.isReplaying&&Ke?Ki():Ml())}const Ei={coin:"c",laser:"l",explosion:"e",powerUp:"p",hit:"h",jump:"j",select:"s",lucky:"u",random:"r"},yt={isPlayingBgm:!1,isCapturing:!1,isCapturingGameCanvasOnly:!1,captureCanvasScale:1,isShowingScore:!0,isShowingTime:!1,isReplayEnabled:!1,isRewindEnabled:!1,isDrawingParticleFront:!1,isDrawingScoreFront:!1,isMinifying:!1,isSoundEnabled:!0,viewSize:{x:100,y:100},seed:0,theme:"simple"},Di=new $e,F=new $e;let X,$i={title:Ui,inGame:Ti,gameOver:Ai,rewind:Ni},P,Pl=0,Ue,Ae=!0,Je=0,q,xe,wt,te,Me,Ke,Pe,kl,V,B,Ne,ke=!1,Y=!1,Oe,_e,He,Ol;function Fi(l){const e=window;e.update=l.update,e.title=l.title,e.description=l.description,e.characters=l.characters,e.options=l.options,bt()}function bt(){let l;typeof options!="undefined"&&options!=null?l=Object.assign(Object.assign({},yt),options):l=yt;const e={name:l.theme,isUsingPixi:!1,isDarkColor:!1};l.theme!=="simple"&&l.theme!=="dark"&&(e.isUsingPixi=!0),(l.theme==="pixel"||l.theme==="shapeDark"||l.theme==="crt"||l.theme==="dark")&&(e.isDarkColor=!0),q={viewSize:{x:100,y:100},bodyBackground:e.isDarkColor?"#101010":"#e0e0e0",viewBackground:e.isDarkColor?"blue":"white",theme:e,isSoundEnabled:l.isSoundEnabled},Je=l.seed,q.isCapturing=l.isCapturing,q.isCapturingGameCanvasOnly=l.isCapturingGameCanvasOnly,q.captureCanvasScale=l.captureCanvasScale,q.viewSize=l.viewSize,xe=l.isPlayingBgm,wt=l.isShowingScore&&!l.isShowingTime,te=l.isShowingTime,Me=l.isReplayEnabled,Ke=l.isRewindEnabled,Pe=l.isDrawingParticleFront,kl=l.isDrawingScoreFront,V=l.isSoundEnabled,l.isMinifying&&Wi(),Yt(Bi,Li,q)}function Bi(){typeof description!="undefined"&&description!=null&&description.trim().length>0&&(Ae=!1,Je+=Mt(description)),typeof title!="undefined"&&title!=null&&title.trim().length>0&&(Ae=!1,document.title=title,Je+=Mt(title)),typeof characters!="undefined"&&characters!=null&&At(characters,"a"),V&&sss.init(Je);const l=q.viewSize;B={x:Math.floor(l.x/6),y:Math.floor(l.y/6)},P=new Qt(B),Q("black"),Ae?(Gl(),s.ticks=0):Ct()}function Li(){s.df=s.difficulty=s.ticks/3600+1,s.tc=s.ticks;const l=s.score,e=s.time;s.sc=s.score;const t=s.sc;s.inp={p:L,ip:$,ijp:j,ijr:T},Ft(),$i[X](),p.isUsingPixi&&(ue(),p.name==="crt"&&Dt()),s.ticks++,s.isReplaying?(s.score=l,s.time=e):s.sc!==t&&(s.score=s.sc)}function Gl(){X="inGame",s.ticks=-1,bl();const l=Math.floor(s.score);l>Pl&&(Pl=l),te&&s.time!=null&&(Ue==null||Ue>s.time)&&(Ue=s.time),s.score=0,s.time=0,Ne=[],xe&&V&&sss.playBgm();const e=Di.getInt(999999999);F.setSeed(e),(Me||Ke)&&(Zt(e),ii(),s.isReplaying=!1)}function Ti(){P.clear(),ze(),Pe||Le(),kl||xt(),(Me||Ke)&&ei({pos:pt(L),isPressed:$,isJustPressed:j,isJustReleased:T}),update(),Pe&&Le(),kl&&xt(),Rl(),P.draw(),te&&s.time!=null&&s.time++}function Ct(){X="title",s.ticks=-1,bl(),P.clear(),ze(),ft()&&(li(F),s.isReplaying=!0)}function Ui(){if(j){Gl();return}if(ze(),Me&&ft()&&(ti(),s.inp={p:L,ip:$,ijp:j,ijr:T},Pe||Le(),update(),Pe&&Le()),s.ticks===0&&(Rl(),typeof title!="undefined"&&title!=null&&P.print(title,Math.floor(B.x-title.length)/2,Math.ceil(B.y*.2))),(s.ticks===30||s.ticks==40)&&typeof description!="undefined"&&description!=null){let l=0;description.split(`
`).forEach(t=>{t.length>l&&(l=t.length)});const e=Math.floor((B.x-l)/2);description.split(`
`).forEach((t,i)=>{P.print(t,e,Math.floor(B.y/2)+i)})}P.draw()}function St(){X="gameOver",s.isReplaying||st(),s.ticks=-1,Ji(),xe&&V&&sss.stopBgm()}function Ai(){(s.isReplaying||s.ticks>20)&&j?Gl():s.ticks===(Me?120:300)&&!Ae&&Ct()}function Ji(){s.isReplaying||(P.print(He,Math.floor((B.x-He.length)/2),Math.floor(B.y/2)),P.draw())}function Ki(){X="rewind",ke=!0,Oe=Cl({pos:{x:61,y:11},size:{x:36,y:7},text:"Rewind"}),_e=Cl({pos:{x:61,y:81},size:{x:36,y:7},text:"GiveUp"}),xe&&V&&sss.stopBgm(),p.isUsingPixi&&(Te(Oe),Te(_e))}function Ni(){P.clear(),ze(),update(),Rl(),oi(),Y?(Te(Oe),(ai()||!$)&&_i()):(Sl(Oe),Sl(_e),Oe.isPressed&&(Y=!0,ke=!1)),_e.isPressed?(ke=Y=!1,Ml()):P.draw(),te&&s.time!=null&&s.time++}function _i(){Y=!1,X="inGame",bl(),xe&&V&&sss.playBgm()}function Rl(){if(wt){P.print(`${Math.floor(s.score)}`,0,0);const l=`HI ${Pl}`;P.print(l,B.x-l.length,0)}te&&(vt(s.time,0,0),vt(Ue,9,0))}function vt(l,e,t){if(l==null)return;let i=Math.floor(l*100/50);i>=10*60*100&&(i=10*60*100-1);const n=jl(Math.floor(i/6e3),1)+"'"+jl(Math.floor(i%6e3/100),2)+'"'+jl(Math.floor(i%100),2);P.print(n,e,t)}function jl(l,e){return("0000"+l).slice(-e)}function xt(){Ye(),Q("black"),Ne=Ne.filter(l=>(il(l.str,l.pos.x,l.pos.y),l.pos.y+=l.vy,l.vy*=.9,l.ticks--,l.ticks>0)),Qe()}function Mt(l){let e=0;for(let t=0;t<l.length;t++){const i=l.charCodeAt(t);e=(e<<5)-e+i,e|=0}return e}function Hi(){let l=window.location.search.substring(1);if(l=l.replace(/[^A-Za-z0-9_-]/g,""),l.length===0)return;const e=document.createElement("script");Ol=`${l}/main.js`,e.setAttribute("src",Ol),document.head.appendChild(e)}function Wi(){fetch(Ol).then(l=>l.text()).then(l=>{const e=Terser.minify(l+"update();",{toplevel:!0}).code,t="function(){",i=e.indexOf(t),n="options={",r=e.indexOf(n);let o=e;if(i>=0)o=e.substring(e.indexOf(t)+t.length,e.length-4);else if(r>=0){let a=1,u;for(let c=r+n.length;c<e.length;c++){const h=e.charAt(c);if(h==="{")a++;else if(h==="}"&&(a--,a===0)){u=c+2;break}}a===0&&(o=e.substring(u))}Pt.forEach(([a,u])=>{o=o.split(a).join(u)}),console.log(o),console.log(`${o.length} letters`)})}s.inp=void 0;let Xi=gt,qi=mt,Vi=zl,Yi=Il;s.tc=void 0,s.df=void 0,s.sc=void 0;const Qi="transparent",Zi="white",en="red",ln="green",tn="yellow",nn="blue",sn="purple",rn="cyan",on="black",an="coin",cn="laser",un="explosion",dn="powerUp",fn="hit",hn="jump",gn="select",pn="lucky";let Pt=[["===","=="],["!==","!="],["input.pos","inp.p"],["input.isPressed","inp.ip"],["input.isJustPressed","inp.ijp"],["input.isJustReleased","inp.ijr"],["color(","clr("],["play(","ply("],["times(","tms("],["remove(","rmv("],["ticks","tc"],["difficulty","df"],["score","sc"],[".isColliding.rect.transparent",".tr"],[".isColliding.rect.white",".wh"],[".isColliding.rect.red",".rd"],[".isColliding.rect.green",".gr"],[".isColliding.rect.yellow",".yl"],[".isColliding.rect.blue",".bl"],[".isColliding.rect.purple",".pr"],[".isColliding.rect.cyan",".cy"],[".isColliding.rect.black",".lc"],['"transparent"',"tr"],['"white"',"wh"],['"red"',"rd"],['"green"',"gr"],['"yellow"',"yl"],['"blue"',"bl"],['"purple"',"pr"],['"cyan"',"cy"],['"black"',"lc"],['"coin"',"cn"],['"laser"',"ls"],['"explosion"',"ex"],['"powerUp"',"pw"],['"hit"',"ht"],['"jump"',"jm"],['"select"',"sl"],['"lucky"',"uc"]];s.PI=pi,s.abs=mi,s.addGameScript=Hi,s.addScore=Ri,s.addWithCharCode=kt,s.arc=gi,s.atan2=bi,s.bar=fi,s.bl=nn,s.box=di,s.ceil=Mi,s.char=Tt,s.clamp=A,s.clr=Xi,s.cn=an,s.color=gt,s.complete=Gi,s.cos=wi,s.cy=rn,s.end=Ml,s.ex=un,s.floor=vi,s.frameState=zi,s.getButton=Cl,s.gr=ln,s.ht=fn,s.init=Fi,s.input=qt,s.jm=hn,s.keyboard=Nt,s.lc=on,s.line=hi,s.ls=cn,s.minifyReplaces=Pt,s.onLoad=bt,s.particle=ji,s.play=mt,s.ply=qi,s.pointer=Xt,s.pow=Si,s.pr=sn,s.pw=dn,s.range=k,s.rd=en,s.rect=ui,s.remove=Il,s.rewind=Ii,s.rmv=Yi,s.rnd=Pi,s.rndi=ki,s.rnds=Oi,s.round=xi,s.sin=yi,s.sl=gn,s.sqrt=Ci,s.text=Lt,s.times=zl,s.tms=Vi,s.tr=Qi,s.uc=pn,s.updateButton=Sl,s.vec=pt,s.wh=Zi,s.wrap=Re,s.yl=tn,Object.defineProperty(s,"__esModule",{value:!0})})(window||{});
