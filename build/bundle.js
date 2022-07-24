var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function f(){return l(" ")}let d;function p(t){d=t}const $=[],h=[],m=[],g=[],y=Promise.resolve();let b=!1;function _(t){m.push(t)}const v=new Set;let x=0;function k(){const t=d;do{for(;x<$.length;){const t=$[x];x++,p(t),w(t.$$)}for(p(null),$.length=0,x=0;h.length;)h.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];v.has(n)||(v.add(n),n())}m.length=0}while($.length);for(;g.length;)g.pop()();b=!1,v.clear(),p(t)}function w(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_)}}const E=new Set;function C(t,n){t&&t.i&&(E.delete(t),t.i(n))}function j(t,e,c,u){const{fragment:i,on_mount:s,on_destroy:a,after_update:l}=t.$$;i&&i.m(e,c),u||_((()=>{const e=s.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(_)}function A(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function O(t,n){-1===t.$$.dirty[0]&&($.push(t),b||(b=!0,y.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function N(n,r,c,u,i,a,l,f=[-1]){const $=d;p(n);const h=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||($?$.$$.context:[])),callbacks:e(),dirty:f,skip_bound:!1,root:r.target||$.$$.root};l&&l(h.root);let m=!1;if(h.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return h.ctx&&i(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),m&&O(n,t)),e})):[],h.update(),m=!0,o(h.before_update),h.fragment=!!u&&u(h.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);h.fragment&&h.fragment.l(t),t.forEach(s)}else h.fragment&&h.fragment.c();r.intro&&C(n.$$.fragment),j(n,r.target,r.anchor,r.customElement),k()}p($)}class L{$destroy(){A(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function M(t){let n;return{c(){n=a("h1"),n.textContent="Cargando"},m(t,e){i(t,n,e)},d(t){t&&s(n)}}}function S(n){let e,o,r,c,d,p,$,h,m,g,y,b=n[1]&&M();return{c(){e=a("div"),b&&b.c(),o=f(),r=l(T),c=f(),d=a("video"),p=f(),$=a("button"),$.textContent="Click",h=f(),m=l(n[2]),d.playsInline="",d.autoplay=""},m(t,s){var a,l,f,_;i(t,e,s),b&&b.m(e,null),u(e,o),u(e,r),u(e,c),u(e,d),n[4](d),u(e,p),u(e,$),u(e,h),u(e,m),g||(a=$,l="click",f=n[3],a.addEventListener(l,f,_),y=()=>a.removeEventListener(l,f,_),g=!0)},p(t,[n]){t[1]?b||(b=M(),b.c(),b.m(e,o)):b&&(b.d(1),b=null),4&n&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(m,t[2])},i:t,o:t,d(t){t&&s(e),b&&b.d(),n[4](null),g=!1,y()}}}let T=0;function q(t,n,e){let o=null,r=!1,c="";return[o,r,c,async()=>{try{e(1,r=!0);const t=await navigator.mediaDevices.getUserMedia({video:!0});e(0,o.srcObject=t,o),o.play(),e(1,r=!1)}catch(t){console.log("error",t),e(2,c=t)}},function(t){h[t?"unshift":"push"]((()=>{o=t,e(0,o)}))}]}class B extends L{constructor(t){super(),N(this,t,q,S,c,{})}}function D(n){let e,o,r;return o=new B({}),{c(){var t,n,r,c;e=a("main"),(t=o.$$.fragment)&&t.c(),n=e,r="class",null==(c="svelte-ri70vu")?n.removeAttribute(r):n.getAttribute(r)!==c&&n.setAttribute(r,c)},m(t,n){i(t,e,n),j(o,e,null),r=!0},p:t,i(t){r||(C(o.$$.fragment,t),r=!0)},o(t){!function(t,n,e,o){if(t&&t.o){if(E.has(t))return;E.add(t),(void 0).c.push((()=>{E.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}else o&&o()}(o.$$.fragment,t),r=!1},d(t){t&&s(e),A(o)}}}return new class extends L{constructor(t){super(),N(this,t,null,D,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
