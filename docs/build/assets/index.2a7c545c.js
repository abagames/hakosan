var j=Object.defineProperty;var X=(s,l,e)=>l in s?j(s,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[l]=e;var g=(s,l,e)=>(X(s,typeof l!="symbol"?l+"":l,e),e);import"./vendor.22f432c1.js";const Q=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))t(c);new MutationObserver(c=>{for(const o of c)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(c){const o={};return c.integrity&&(o.integrity=c.integrity),c.referrerpolicy&&(o.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?o.credentials="include":c.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(c){if(c.ep)return;c.ep=!0;const o=e(c);fetch(c.href,o)}};Q();class Y{constructor(l=null){g(this,"x");g(this,"y");g(this,"z");g(this,"w");this.setSeed(l)}get(l=1,e){return e==null&&(e=l,l=0),this.next()/4294967295*(e-l)+l}getInt(l,e){e==null&&(e=l,l=0);const t=Math.floor(l),c=Math.floor(e);return c===t?t:this.next()%(c-t)+t}getPlusOrMinus(){return this.getInt(2)*2-1}select(l){return l[this.getInt(l.length)]}setSeed(l,e=123456789,t=362436069,c=521288629,o=32){this.w=l!=null?l>>>0:Math.floor(Math.random()*4294967295)>>>0,this.x=e>>>0,this.y=t>>>0,this.z=c>>>0;for(let n=0;n<o;n++)this.next();return this}getState(){return{x:this.x,y:this.y,z:this.z,w:this.w}}next(){const l=this.x^this.x<<11;return this.x=this.y,this.y=this.z,this.z=this.w,this.w=(this.w^this.w>>>19^(l^l>>>8))>>>0,this.w}}const w=[vec(1,0),vec(0,1),vec(-1,0),vec(0,-1)];function v(s,l){l==null&&(l=(t,c)=>t-c);const e=s.map((t,c)=>[t,c]);return e.sort((t,c)=>{const o=l(t[0],c[0]);return o!==0?o:t[1]-c[1]}),e.map(t=>t[0])}const f=new Y;function Z(s){f.setSeed((s+1)*7);let l=[];for(let e=0;e<clamp(s,9,99);e++){const t=O(s);t!=null&&l.push(t)}return l.length===0?(f.setSeed(0),O(0)):(l=v(l,(e,t)=>t.stepCount-e.stepCount),l[0])}function O(s){const l=clamp(7+f.getInt(ceil(sqrt(s)),ceil(sqrt(s)*2)),7,24),e=vec(l,f.getInt(ceil(l*.5),l+1));f.get()<.5&&e.swapXy();const t=times(e.x,()=>times(e.y,()=>"wallOrEmpty")),c=times(e.x,()=>times(e.y,()=>!1));W(e,t,c),H(e,3,t,c);const o=[vec(e.x-2,1),vec(1,e.y-2),vec(1,1),vec(1,1)],n=[vec(0,1),vec(1,0),vec(0,1),vec(1,0)],r=[vec(-1,0),vec(0,-1),vec(1,0),vec(0,1)];let y=f.getInt(0,4);const i=vec(),R=vec(),I=vec();let T=0;for(let M=0;M<clamp(9+sqrt(s)*3,9,49);M++){y=f.getInt(0,2)*2+(1-y%2);let U=!0;if(q(e,t).forEach(_=>{G(_,y,t)||(U=!1)}),!U){y++;continue}for(T++,i.set(o[y]),R.set(n[y]),I.set(r[y]);t[i.x][i.y]==="box"&&z(i,y,t),i.add(R),i.x>=e.x-1?(i.x=1,i.y+=I.y):i.y>=e.y-1&&(i.y=1,i.x+=I.x),!!i.isInRect(1,1,e.x-2,e.y-2););}if(te(e,t,c),times(Math.floor(e.x*e.y/3),()=>{se(e,t)}),!!le(e,t,c))return{size:e,grid:t,targetGrid:c,stepCount:T}}function W(s,l,e){times(s.x,t=>{l[t][0]=l[t][s.y-1]="wall",e[t][0]=e[t][s.y-1]=!1}),times(s.y-2,t=>{const c=t+1;l[0][c]=l[s.x-1][c]="wall",e[0][c]=e[s.x-1][c]=!1})}function H(s,l,e,t){let c=-1,o=-1,n=0;times(l,()=>{for(;c<=0||c>=s.x-1||o<=0||o>=s.y-1||f.get()<.5||t[c][o];)if(c=f.getInt(floor(s.x*.2),ceil(s.x*.8)),o=f.getInt(floor(s.y*.2),ceil(s.y*.8)),n++,n>999)return;e[c][o]="box",t[c][o]=!0;const r=f.select(w);c+=r.x,o+=r.y})}function G(s,l,e){const t=w[l];return e[s.x-t.x][s.y-t.y]!=="empty"}function z(s,l,e){const t=w[l];let c=vec(s),o=0;const n=[];for(;;){c.add(t);const r=e[c.x][c.y];if(r==="wall"||r==="box"||(o++,times(ceil(ee(c,e)*3/o),()=>{n.push(o)}),o>3))break}e[s.x-t.x][s.y-t.y]==="wallOrEmpty"&&(e[s.x-t.x][s.y-t.y]="wall"),o!==0&&(n.length>0?o=f.select(n):o=f.getInt(1,o+1),c=vec(s),times(o,()=>{e[c.x][c.y]="empty",c.add(t)}),e[c.x][c.y]="box")}function ee(s,l){let e=0;return w.forEach(t=>{l[s.x+t.x][s.y+t.y]==="wallOrEmpty"&&e++}),e}function te(s,l,e){let t=null,c=null;times(s.x,r=>{t==null&&!K(s,r,l,e)&&(t=r),c==null&&!K(s,s.x-1-r,l,e)&&(c=s.x-1-r)});let o=null,n=null;times(s.y,r=>{o==null&&!N(s,r,l,e)&&(o=r),n==null&&!N(s,s.y-1-r,l,e)&&(n=s.y-1-r)}),s.x=c-t+1,s.y=n-o+1,times(s.x,r=>times(s.y,y=>{let i=l[r+t][y+o];i=i==="emptyOrWall"?"empty":i,l[r+1][y+1]=i,e[r+1][y+1]=e[r+t][y+o]})),s.x+=2,s.y+=2,W(s,l,e)}function K(s,l,e,t){let c=!0;return times(s.y,o=>{const n=e[l][o],r=t[l][o];if(n==="empty"||n==="box"||r)return c=!1,!1}),c}function N(s,l,e,t){let c=!0;return times(s.x,o=>{const n=e[o][l],r=t[o][l];if(n==="empty"||n==="box"||r)return c=!1,!1}),c}function se(s,l){const e=f.getInt(1,s.x-1),t=f.getInt(1,s.y-1);if(l[e][t]!=="wallOrEmpty")return;let o=!1;w.forEach(n=>{const r=l[e+n.x][t+n.y];(r==="wall"||r==="box")&&(o=!0)}),o&&(l[e][t]="wall")}function le(s,l,e){let t=!1;return q(s,l).forEach(c=>{e[c.x][c.y]||(t=!0)}),t}function q(s,l){const e=[];return times(s.x,t=>times(s.y,c=>{l[t][c]==="box"&&e.push(vec(t,c))})),e}const m={x:160,y:160},ce={viewSize:m,theme:"dark",isShowingScore:!1,isPlayingBgm:!0,seed:10},oe=[`
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
`];let a,x=1,E=2;const p=vec();let u,S=0,L,F,d=0,b,C=vec(),J=!1,B=!1,A=0,h;function ne(){ticks||(L=getButton({pos:vec(1,m.y-8),size:vec(25,7),text:"UNDO",onClick:()=>{D()}}),F=getButton({pos:vec(m.x-32,m.y-8),size:vec(31,7),text:"RESET",onClick:()=>{P()}}),ye(),P(),B=!0),times(a.size.x,e=>times(a.size.y,t=>{const c=a.grid[e][t];a.targetGrid[e][t]?(color("red"),char("c",p.x+e*6,p.y+t*6)):c==="wall"?(color("black"),char(addWithCharCode("a",(e*3+t*7)%9==5?1:0),p.x+e*6,p.y+t*6)):c==="empty"&&(e*11+t*5)%7==6&&(color("light_black"),char("d",p.x+e*6,p.y+t*6))})),d===0&&re(),color("black");let s=!0;const l=vec();u.forEach(e=>{if(S>0){S--;const c=S/9;l.set(p.x+(e.slipFrom.x*c+e.pos.x*(1-c))*6,p.y+(e.slipFrom.y*c+e.pos.y*(1-c))*6)}else l.set(p.x+e.pos.x*6,p.y+e.pos.y*6);let t;d>0?(t="m",l.y+=sin(d*.07)*2,d++):(t=addWithCharCode("e",e.way*2+floor(ticks/30)%2),a.targetGrid[e.pos.x][e.pos.y]||(s=!1)),char(t,l)}),d===0&&s&&(play("powerUp"),d=1),(d>60&&(input.isJustPressed||keyboard.isJustPressed)||d>300)&&fe(),ie(),updateButton(L),updateButton(F)}function re(){if(input.isJustPressed&&(C.set(input.pos),J=!0),input.isJustReleased){if(J&&C.distanceTo(input.pos)>9){const s=C.angleTo(input.pos),l=wrap(floor((s+PI/4)/(PI/2)),0,4);k(l,a.grid)}J=!1}(keyboard.code.ArrowRight.isJustPressed||keyboard.code.KeyD.isJustPressed)&&k(0,a.grid),(keyboard.code.ArrowDown.isJustPressed||keyboard.code.KeyS.isJustPressed)&&k(1,a.grid),(keyboard.code.ArrowLeft.isJustPressed||keyboard.code.KeyA.isJustPressed)&&k(2,a.grid),(keyboard.code.ArrowUp.isJustPressed||keyboard.code.KeyW.isJustPressed)&&k(3,a.grid),keyboard.code.KeyU.isJustPressed&&D(),keyboard.code.KeyR.isJustPressed&&P()}function k(s,l){switch(play("select"),b.push(u.map(t=>({pos:vec(t.pos),way:t.way}))),s){case 0:u=v(u,(t,c)=>c.pos.x-t.pos.x);break;case 1:u=v(u,(t,c)=>c.pos.y-t.pos.y);break;case 2:u=v(u,(t,c)=>t.pos.x-c.pos.x);break;case 3:u=v(u,(t,c)=>t.pos.y-c.pos.y);break}const e=w[s];u.forEach(t=>{t.slipFrom.set(t.pos),t.way=s;for(let c=0;c<99;c++)if(t.pos.add(e),l[t.pos.x][t.pos.y]==="wall"||ue(t)){t.pos.sub(e);break}}),S=9}function D(){if(b.length===0)return;play("hit"),b.pop().forEach((l,e)=>{u[e].pos.set(l.pos),u[e].way=l.way})}function ie(){if(A>0){A--;const s=`TRIP ${x}`;color("black"),text(s,(m.x-s.length*6)/2+3,p.y-9)}d>0&&(color("black"),text("Arrived!",59,p.y+a.size.y*6+9)),B&&(color("white"),rect(36,116,110,38),color("black"),text("[Swipe]",40,120),text("[     ] Move boxes",40,127),text("[WASD ]",40,134),text("[R]     Reset",40,143),text("[U]     Undo",40,150),times(4,s=>{char("n",46+s*7,128,{rotation:s})}),(input.isJustPressed||keyboard.isJustPressed)&&(B=!1))}function ae(s,l){u=[],times(s.x,e=>times(s.y,t=>{l[e][t]==="box"&&(u.push({pos:vec(e,t),way:1,slipFrom:vec()}),l[e][t]="empty")}))}function ue(s){let l=!1;return u.forEach(e=>{s!==e&&s.pos.equals(e.pos)&&(l=!0)}),l}function fe(){x=E,E++,pe(),$(),P()}function P(){play("coin"),a=Z(x),p.set((m.x-a.size.x*6)/2+3,(m.y-a.size.y*6)/2+3).floor(),ae(a.size,a.grid),d=0,A=180,b=[]}const V="hakosan_stage_count";function ye(){h=de(),h==null&&(h=1);const s=xe();x=s!=null?s:h,E=x<=h?x+1:h,$()}function pe(){if(!(h!=null&&h>x))try{localStorage.setItem(V,String(x))}catch(s){console.log(s)}}function de(){let s;try{s=localStorage.getItem(V)}catch(l){console.log(l)}if(s!=null){const l=Math.floor(Number(s));return l>0?l:void 0}}function $(){let l=`${window.location.href.split("?")[0]}?s=${x}`;try{window.history.replaceState({},"",l)}catch(e){console.log(e)}}function xe(){const s=window.location.search.substring(1);if(s==null)return;let l=s.split("&"),e;for(let c=0;c<l.length;c++){const n=l[c].split("=");n[0]==="s"&&(e=n[1])}if(e==null)return;const t=Math.floor(Number(e));return t>0?t:void 0}init({update:ne,options:ce,characters:oe});
