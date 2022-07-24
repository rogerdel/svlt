var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function f(){return l(" ")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let m;function $(t){m=t}const h=[],g=[],y=[],b=[],_=Promise.resolve();let v=!1;function x(t){y.push(t)}const k=new Set;let w=0;function E(){const t=m;do{for(;w<h.length;){const t=h[w];w++,$(t),j(t.$$)}for($(null),h.length=0,w=0;g.length;)g.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];k.has(n)||(k.add(n),n())}y.length=0}while(h.length);for(;b.length;)b.pop()();v=!1,k.clear(),$(t)}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(x)}}const C=new Set;function A(t,n){t&&t.i&&(C.delete(t),t.i(n))}function O(t,e,c,u){const{fragment:i,on_mount:s,on_destroy:a,after_update:l}=t.$$;i&&i.m(e,c),u||x((()=>{const e=s.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(x)}function N(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function L(t,n){-1===t.$$.dirty[0]&&(h.push(t),v||(v=!0,_.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function M(n,r,c,u,i,a,l,f=[-1]){const d=m;$(n);const p=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:e(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};l&&l(p.root);let h=!1;if(p.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&i(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),h&&L(n,t)),e})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!u&&u(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(s)}else p.fragment&&p.fragment.c();r.intro&&A(n.$$.fragment),O(n,r.target,r.anchor,r.customElement),E()}$(d)}class S{$destroy(){N(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function T(t){let n;return{c(){n=a("h1"),n.textContent="Cargando"},m(t,e){i(t,n,e)},d(t){t&&s(n)}}}function q(n){let e,o,r,c,d,m,$,h,g,y,b,_=n[1]&&T();return{c(){e=a("div"),_&&_.c(),o=f(),r=l(B),c=f(),d=a("video"),m=f(),$=a("button"),$.textContent="Click",h=f(),g=l(n[2]),d.playsInline="",d.autoplay=""},m(t,s){var a,l,f,p;i(t,e,s),_&&_.m(e,null),u(e,o),u(e,r),u(e,c),u(e,d),n[4](d),u(e,m),u(e,$),u(e,h),u(e,g),y||(a=$,l="click",f=n[3],a.addEventListener(l,f,p),b=()=>a.removeEventListener(l,f,p),y=!0)},p(t,[n]){t[1]?_||(_=T(),_.c(),_.m(e,o)):_&&(_.d(1),_=null),4&n&&p(g,t[2])},i:t,o:t,d(t){t&&s(e),_&&_.d(),n[4](null),y=!1,b()}}}let B=0;function D(t,n,e){let o=null,r=!1,c="";return[o,r,c,async()=>{try{e(1,r=!0);const t=await navigator.mediaDevices.getUserMedia({video:!0});e(0,o.srcObject=t,o),o.play(),e(1,r=!1)}catch(t){console.log("error",t),e(2,c=t)}},function(t){g[t?"unshift":"push"]((()=>{o=t,e(0,o)}))}]}class H extends S{constructor(t){super(),M(this,t,D,q,c,{})}}function I(t){let n,e,o,r,c,m,$,h;return $=new H({}),{c(){var u;n=a("main"),e=a("h1"),o=l("Hello "),r=l(t[0]),c=l("!"),m=f(),(u=$.$$.fragment)&&u.c(),d(e,"class","svelte-1tky8bj"),d(n,"class","svelte-1tky8bj")},m(t,s){i(t,n,s),u(n,e),u(e,o),u(e,r),u(e,c),u(n,m),O($,n,null),h=!0},p(t,[n]){(!h||1&n)&&p(r,t[0])},i(t){h||(A($.$$.fragment,t),h=!0)},o(t){!function(t,n,e,o){if(t&&t.o){if(C.has(t))return;C.add(t),(void 0).c.push((()=>{C.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}else o&&o()}($.$$.fragment,t),h=!1},d(t){t&&s(n),N($)}}}function P(t,n,e){let{name:o}=n;return t.$$set=t=>{"name"in t&&e(0,o=t.name)},[o]}return new class extends S{constructor(t){super(),M(this,t,P,I,c,{name:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
