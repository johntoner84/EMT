(function(){var k=this;function l(a){a=a.split(".");for(var b=k,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function n(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function p(a){return"string"==typeof a}function t(a,b){var c=a.split("."),d=k;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b};var aa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function u(a,b){return a<b?-1:a>b?1:0};var z=Array.prototype,ba=z.indexOf?function(a,b,c){return z.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ca=z.filter?function(a,b,c){return z.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=p(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var m=g[h];b.call(c,m,h,a)&&(e[f++]=m)}return e};
function ea(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e=d,f=n(e);if("array"==f||"object"==f&&"number"==typeof e.length){e=a.length||0;f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}};function fa(a){if(a.classList)return a.classList;a=a.className;return p(a)&&a.match(/\S+/g)||[]}function ga(a,b){var c;a.classList?c=a.classList.contains(b):(c=fa(a),c=0<=ba(c,b));return c}function ha(a,b){a.classList?a.classList.add(b):ga(a,b)||(a.className+=0<a.className.length?" "+b:b)}function ia(a,b){a.classList?a.classList.remove(b):ga(a,b)&&(a.className=ca(fa(a),function(a){return a!=b}).join(" "))};var ja="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ka(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ja.length;f++)c=ja[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}function la(a){var b=arguments.length;if(1==b&&"array"==n(arguments[0]))return la.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};la("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));function ma(a,b){this.width=a;this.height=b};var A;a:{var na=k.navigator;if(na){var oa=na.userAgent;if(oa){A=oa;break a}}A=""};function B(){return-1!=A.indexOf("Edge")};var pa=-1!=A.indexOf("Opera")||-1!=A.indexOf("OPR"),C=-1!=A.indexOf("Edge")||-1!=A.indexOf("Trident")||-1!=A.indexOf("MSIE"),D=-1!=A.indexOf("Gecko")&&!(-1!=A.toLowerCase().indexOf("webkit")&&!B())&&!(-1!=A.indexOf("Trident")||-1!=A.indexOf("MSIE"))&&!B(),qa=-1!=A.toLowerCase().indexOf("webkit")&&!B();function ra(){var a=A;if(D)return/rv\:([^\);]+)(\)|;)/.exec(a);if(C&&B())return/Edge\/([\d\.]+)/.exec(a);if(C)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(qa)return/WebKit\/(\S+)/.exec(a)}
function sa(){var a=k.document;return a?a.documentMode:void 0}var ta=function(){if(pa&&k.opera){var a=k.opera.version;return"function"==n(a)?a():a}var a="",b=ra();b&&(a=b?b[1]:"");return C&&!B()&&(b=sa(),b>parseFloat(a))?String(b):a}(),ua={};
function F(a){if(!ua[a]){for(var b=0,c=aa(String(ta)).split("."),d=aa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",m=RegExp("(\\d*)(\\D*)","g"),w=RegExp("(\\d*)(\\D*)","g");do{var q=m.exec(g)||["","",""],r=w.exec(h)||["","",""];if(0==q[0].length&&0==r[0].length)break;b=u(0==q[1].length?0:parseInt(q[1],10),0==r[1].length?0:parseInt(r[1],10))||u(0==q[2].length,0==r[2].length)||u(q[2],r[2])}while(0==b)}ua[a]=0<=b}}
var va=k.document,wa=sa(),xa=!va||!C||!wa&&B()?void 0:wa||("CSS1Compat"==va.compatMode?parseInt(ta,10):5);var G;if(!(G=!D&&!C)){var ya;if(ya=C)ya=C&&(B()||9<=xa);G=ya}G||D&&F("1.9.1");C&&F("9");function za(){var a=document;return p("yt-subscribe-card")?a.getElementById("yt-subscribe-card"):"yt-subscribe-card"};function Aa(a){var b=a.offsetWidth,c=a.offsetHeight,d=qa&&!b&&!c;if((void 0===b||d)&&a.getBoundingClientRect){var e;a:{try{e=a.getBoundingClientRect()}catch(f){e={left:0,top:0,right:0,bottom:0};break a}C&&a.ownerDocument.body&&(a=a.ownerDocument,e.left-=a.documentElement.clientLeft+a.body.clientLeft,e.top-=a.documentElement.clientTop+a.body.clientTop)}return new ma(e.right-e.left,e.bottom-e.top)}return new ma(b,c)}C&&F(12);var H=window,I=document,Ba=H.location;function Ca(){}var Da=/\[native code\]/;function J(a,b,c){return a[b]=a[b]||c}function Ea(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}function Fa(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}function K(){var a;if((a=Object.create)&&Da.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}var L=J(H,"gapi",{});var M;M=J(H,"___jsl",K());J(M,"I",0);J(M,"hel",10);function Ga(){var a=Ba.href,b;if(M.dpo)b=M.h;else{b=M.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}function Ha(a){var b=J(M,"PQ",[]);M.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}function Ia(a){return J(J(M,"H",K()),a,K())};var N=J(M,"perf",K());J(N,"g",K());var Ja=J(N,"i",K());J(N,"r",[]);K();K();function O(a,b,c){b&&0<b.length&&(b=Ka(b),c&&0<c.length&&(b+="___"+Ka(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=J(Ja,"_p",K()),J(b,c,K())[a]=(new Date).getTime(),b=N.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}function Ka(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")};var La=K(),P=[];function Q(a){throw Error("Bad hint"+(a?": "+a:""));};P.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?M[b]=J(M,b,[]).concat(c):J(M,b,c)}if(b=a.u)a=J(M,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);var Ma=/^(\/[a-zA-Z0-9_\-]+)+$/,Na=/^[a-zA-Z0-9\-_\.,!]+$/,Oa=/^gapi\.loaded_[0-9]+$/,Pa=/^[a-zA-Z0-9,._-]+$/;function Qa(a,b,c,d){var e=a.split(";"),f=e.shift(),g=La[f],h=null;g?h=g(e,b,c,d):Q("no hint processor for: "+f);h||Q("failed to generate load url");b=h;c=b.match(Ra);(d=b.match(Sa))&&1===d.length&&Ta.test(b)&&c&&1===c.length||Q("failed sanity: "+a);return h}
function Ua(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}a=Va(a);Oa.test(c)||Q("invalid_callback");b=Wa(b);d=d&&d.length?Wa(d):null;return[encodeURIComponent(a.l).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.c?"/am="+e(a.c):"",a.f?"/rs="+e(a.f):"",a.j?"/t="+e(a.j):"","/cb=",e(c)].join("")}
function Va(a){"/"!==a.charAt(0)&&Q("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))Q("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");Ma.test(b)||Q("invalid_prefix");c=S(a,"k",!0);d=S(a,"am");e=S(a,"rs");a=S(a,"t");return{l:b,version:c,
c:d,f:e,j:a}}function Wa(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Pa.test(e)&&b.push(e)}return b.join(",")}function S(a,b,c){a=a[b];!a&&c&&Q("missing: "+b);if(a){if(Na.test(a))return a;Q("invalid: "+b)}return null}var Ta=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Sa=/\/cb=/g,Ra=/\/\//g;function Xa(){var a=Ga();if(!a)throw Error("Bad hint");return a}
La.m=function(a,b,c,d){(a=a[0])||Q("missing_hint");return"https://apis.google.com"+Ua(a,b,c,d)};var T=decodeURI("%73cript");function Ya(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>Ea.call(b,e)&&c.push(e)}return c}function Za(a){"loading"!=I.readyState?$a(a):I.write("<"+T+' src="'+encodeURI(a)+'"></'+T+">")}function $a(a){var b=I.createElement(T);b.setAttribute("src",a);b.async="true";(a=I.getElementsByTagName(T)[0])?a.parentNode.insertBefore(b,a):(I.head||I.body||I.documentElement).appendChild(b)}
function ab(a,b){var c=b&&b._c;if(c)for(var d=0;d<P.length;d++){var e=P[d][0],f=P[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}function bb(a,b,c){cb(function(){var c;c=b===Ga()?J(L,"_",K()):K();c=J(Ia(b),"_",c);a(c)},c)}
function db(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);ab(a,c);var d=a?a.split(":"):[],e=c.h||Xa(),f=J(M,"ah",K());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var m=h.split("."),m=f[h]||f[m[1]&&"ns:"+m[0]||""]||e,w=g.length&&g[g.length-1]||null,q=w;w&&w.hint==m||(q={hint:m,features:[]},g.push(q));q.features.push(h)}var r=g.length;if(1<r){var E=c.callback;E&&(c.callback=function(){0==--r&&E()})}for(;d=g.shift();)eb(d.features,c,d.hint)}else eb(d||[],c,e)}
function eb(a,b,c){function d(a,b){if(r)return 0;H.clearTimeout(q);E.push.apply(E,v);var d=((L||{}).config||{}).update;d?d(f):f&&J(M,"cu",[]).push(f);if(b){O("me0",a,R);try{bb(b,c,w)}finally{O("me1",a,R)}}return 1}a=Fa(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,m=b.onerror,w=void 0;"function"==typeof m&&(w=m);var q=null,r=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var m=J(Ia(c),"r",[]).sort(),E=J(Ia(c),"L",[]).sort(),R=
[].concat(m);0<g&&(q=H.setTimeout(function(){r=!0;h()},g));var v=Ya(a,E);if(v.length){var v=Ya(a,m),x=J(M,"CP",[]),y=x.length;x[y]=function(a){function b(){var a=x[y+1];a&&a()}function c(b){x[y]=null;d(v,a)&&Ha(function(){e&&e();b()})}if(!a)return 0;O("ml1",v,R);0<y&&x[y-1]?x[y]=function(){c(b)}:c(b)};if(v.length){var da="loaded_"+M.I++;L[da]=function(a){x[y](a);L[da]=null};a=Qa(c,v,"gapi."+da,m);m.push.apply(m,v);O("ml0",v,R);b.sync||H.___gapisync?Za(a):$a(a)}else x[y](Ca)}else d(v)&&e&&e()};function cb(a,b){if(M.hee&&0<M.hel)try{return a()}catch(c){b&&b(c),M.hel--,db("debug_error",function(){try{window.___jsl.hefn(c)}catch(a){throw c;}})}else try{return a()}catch(d){throw b&&b(d),d;}};L.load=function(a,b){return cb(function(){return db(a,b)})};var fb=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",fb);t("yt.tokens_",window.yt&&window.yt.tokens_||{});t("yt.msgs_",window.yt&&window.yt.msgs_||{});function gb(){return l("gapi.iframes.getContext")()}function hb(){return l("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER")};var ib=l("yt.net.ping.workerUrl_")||null;t("yt.net.ping.workerUrl_",ib);function jb(a){try{var b=kb,c=hb();a.register("msg-hovercard-subscription",b,c)}catch(d){}}function kb(a){if(a){a=!!a.isSubscribed;var b=za();a?ia(b,"subscribe"):ha(b,"subscribe");a?ha(b,"subscribed"):ia(b,"subscribed")}};var U;
function lb(){var a;a=za();var b;b:{b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.display||b.getPropertyValue("display")||"";break b}b=""}if("none"!=(b||(a.currentStyle?a.currentStyle.display:null)||a.style&&a.style.display))a=Aa(a);else{b=a.style;var c=b.display,d=b.visibility,e=b.position;b.visibility="hidden";b.position="absolute";b.display="inline";a=Aa(a);b.display=c;b.position=e;b.visibility=d}a=
{width:a.width,height:a.height};gb().ready(a,null,void 0);a=hb();gb().addOnOpenerHandler(jb,null,a)}U="function"==n(lb)?{callback:lb}:lb||{};var mb;(mb=U.gapiHintOverride)||(mb="GAPI_HINT_OVERRIDE"in fb?fb.GAPI_HINT_OVERRIDE:void 0);
if(mb){var nb;var V=document.location.href;if(-1!=V.indexOf("?")){var V=(V||"").split("#")[0],ob=V.split("?",2),W=1<ob.length?ob[1]:ob[0];"?"==W.charAt(0)&&(W=W.substr(1));for(var pb=W.split("&"),X={},qb=0,rb=pb.length;qb<rb;qb++){var Y=pb[qb].split("=");if(1==Y.length&&Y[0]||2==Y.length){var Z=decodeURIComponent((Y[0]||"").replace(/\+/g," ")),sb=decodeURIComponent((Y[1]||"").replace(/\+/g," "));Z in X?"array"==n(X[Z])?ea(X[Z],sb):X[Z]=[X[Z],sb]:X[Z]=sb}}nb=X}else nb={};var tb=nb.gapi_jsh;tb&&ka(U,
{_c:{jsl:{h:tb}}})}db("gapi.iframes:gapi.iframes.style.common",U);})();