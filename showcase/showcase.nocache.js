function showcase(){var Q='',yb='" for "gwt:onLoadErrorFn"',wb='" for "gwt:onPropertyErrorFn"',jb='"><\/script>',$='#',Gb='&',Hc='.cache.html',ab='/',mb='//',$b='0C249A37757027B52E6272A030CE6CAE',ac='18A9382BC372A6A548AD52F9B19BAD5A',cc='2713FBF78CE66625E7AB8810BAD91C4C',ec='3B26FDC5F24EAB698A36045DAC34B933',gc='40F2D1A5DB358DCC8761675A030127DD',hc='4E3E2CA20E4146FFC5DD40FDAEB6846F',ic='50F16B9DCC5A010A3DBDB23234177807',jc='53AD024DE4F586867B00C25C94591371',kc='5479C8AD42078A88261F6657A5F17288',lc='58C6273A1D00B29EC7FB1AE268BE866C',mc='63559738137C13FBF238AC5147721BD6',nc='75DFA42D359C3427CF31F7E84BE73BF2',oc='785E2714CF119257D5BFE5D81675635E',pc='93E2C63990DC47D45D9572A78BBF1A58',qc='9A1F35BC586B0900DCC3F7C30CBF9A05',rc='9AD2BECA5D02A258C0D4CFC40EF5E491',Gc=':',qb='::',Ib=';',Jc='<script defer="defer">showcase.onInjectionDone(\'showcase\')<\/script>',ib='<script id="',tb='=',_='?',sc='A064CFBBABD7B14F156776856913DF50',tc='ABD9765293936FC3EEFDA950959D0D54',uc='B0C64FD291A9F0CA10BE33D7ED86C0E9',vc='B408490045D1C154CA5B1B5B83D9DEBB',wc='B4EC3372FFD8B2A26EC8FB4C5841FDD1',xc='B9480F44E9DBBA48249D40493971C8A9',yc='BCDA9739EFC717172582D405C6BA1EE9',vb='Bad handler "',zc='C54E458C551A10FF85B89A06FAA3C1C2',Ac='CCACF1DE5F4856C45348F981119EC20C',Bc='DC30116D9F65DE214F834CC4A7589B1B',Ic='DOMContentLoaded',Cc='E1F08B3B18DC4A25F7F594B4D027E98C',Dc='E259B596CE5A18A89577BCF681D0AE7C',Ec='E49202EB51A6CE14A48D83BD64F77833',Fc='EF172DEFC1B62D84641A29DDD8435984',kb='SCRIPT',Hb='SHOWCASE_LOCALE=',Lb='Unexpected exception in locale detection, using default: ',Jb='_',Kb='__gwt_Locale',hb='__gwt_marker_showcase',dc='ar',lb='base',db='baseUrl',U='begin',T='bootstrap',cb='clear.cache.gif',sb='content',_b='default',Eb='en',Z='end',fc='fr',Ub='gecko',Vb='gecko1_8',V='gwt.codesvr=',W='gwt.hosted=',X='gwt.hybrid',xb='gwt:onLoadErrorFn',ub='gwt:onPropertyErrorFn',rb='gwt:property',Yb='hosted.html?showcase',Tb='ie6',Sb='ie8',Rb='ie9',zb='iframe',bb='img',Ab="javascript:''",Xb='loadExternalRefs',Db='locale',Fb='locale=',nb='meta',Cb='moduleRequested',Y='moduleStartup',Qb='msie',ob='name',Nb='opera',Bb='position:absolute;width:0;height:0;border:none',Pb='safari',eb='script',Zb='selectingPermutation',R='showcase',fb='showcase.nocache.js',pb='showcase::',S='startup',gb='undefined',Wb='unknown',Mb='user.agent',Ob='webkit',bc='zh';var m=window,n=document,o=m.__gwtStatsEvent?function(a){return m.__gwtStatsEvent(a)}:null,p=m.__gwtStatsSessionId?m.__gwtStatsSessionId:null,q,r,s,t=Q,u={},v=[],w=[],x=[],y=0,z,A;o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:T,millis:(new Date).getTime(),type:U});if(!m.__gwt_stylesLoaded){m.__gwt_stylesLoaded={}}if(!m.__gwt_scriptsLoaded){m.__gwt_scriptsLoaded={}}function B(){var b=false;try{var c=m.location.search;return (c.indexOf(V)!=-1||(c.indexOf(W)!=-1||m.external&&m.external.gwtOnLoad))&&c.indexOf(X)==-1}catch(a){}B=function(){return b};return b}
function C(){if(q&&r){var b=n.getElementById(R);var c=b.contentWindow;if(B()){c.__gwt_getProperty=function(a){return I(a)}}showcase=null;c.gwtOnLoad(z,R,t,y);o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:Y,millis:(new Date).getTime(),type:Z})}}
function D(){function e(a){var b=a.lastIndexOf($);if(b==-1){b=a.length}var c=a.indexOf(_);if(c==-1){c=a.length}var d=a.lastIndexOf(ab,Math.min(c,b));return d>=0?a.substring(0,d+1):Q}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=n.createElement(bb);b.src=a+cb;a=e(b.src)}return a}
function g(){var a=G(db);if(a!=null){return a}return Q}
function h(){var a=n.getElementsByTagName(eb);for(var b=0;b<a.length;++b){if(a[b].src.indexOf(fb)!=-1){return e(a[b].src)}}return Q}
function i(){var a;if(typeof isBodyLoaded==gb||!isBodyLoaded()){var b=hb;var c;n.write(ib+b+jb);c=n.getElementById(b);a=c&&c.previousSibling;while(a&&a.tagName!=kb){a=a.previousSibling}if(c){c.parentNode.removeChild(c)}if(a&&a.src){return e(a.src)}}return Q}
function j(){var a=n.getElementsByTagName(lb);if(a.length>0){return a[a.length-1].href}return Q}
function k(){var a=n.location;return a.href==a.protocol+mb+a.host+a.pathname+a.search+a.hash}
var l=g();if(l==Q){l=h()}if(l==Q){l=i()}if(l==Q){l=j()}if(l==Q&&k()){l=e(n.location.href)}l=f(l);t=l;return l}
function E(){var b=document.getElementsByTagName(nb);for(var c=0,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(ob),g;if(f){f=f.replace(pb,Q);if(f.indexOf(qb)>=0){continue}if(f==rb){g=e.getAttribute(sb);if(g){var h,i=g.indexOf(tb);if(i>=0){f=g.substring(0,i);h=g.substring(i+1)}else{f=g;h=Q}u[f]=h}}else if(f==ub){g=e.getAttribute(sb);if(g){try{A=eval(g)}catch(a){alert(vb+g+wb)}}}else if(f==xb){g=e.getAttribute(sb);if(g){try{z=eval(g)}catch(a){alert(vb+g+yb)}}}}}}
function F(a,b){return b in v[a]}
function G(a){var b=u[a];return b==null?null:b}
function H(a,b){var c=x;for(var d=0,e=a.length-1;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function I(a){var b=w[a](),c=v[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(A){A(a,d,b)}throw null}
var J;function K(){if(!J){J=true;var a=n.createElement(zb);a.src=Ab;a.id=R;a.style.cssText=Bb;a.tabIndex=-1;n.body.appendChild(a);o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:Y,millis:(new Date).getTime(),type:Cb});a.contentWindow.location.replace(t+M)}}
w[Db]=function(){var b=null;var c=Eb;try{if(!b){var d=location.search;var e=d.indexOf(Fb);if(e>=0){var f=d.substring(e+7);var g=d.indexOf(Gb,e);if(g<0){g=d.length}b=d.substring(e+7,g)}}if(!b){var h=n.cookie;var i=h.indexOf(Hb);if(i>=0){var g=h.indexOf(Ib,i);if(g<0){g=h.length}b=h.substring(i+16,g)}}if(!b){b=G(Db)}if(!b){var j=navigator.browserLanguage?navigator.browserLanguage:navigator.language;if(j){var k=j.split(/[-_]/);if(k.length>1){k[1]=k[1].toUpperCase()}b=k.join(Jb)}}if(!b){b=m[Kb]}if(b){c=b}while(b&&!F(Db,b)){var l=b.lastIndexOf(Jb);if(l<0){b=null;break}b=b.substring(0,l)}}catch(a){alert(Lb+a)}m[Kb]=c;return b||Eb};v[Db]={ar:0,'default':1,en:2,fr:3,zh:4};w[Mb]=function(){var b=navigator.userAgent.toLowerCase();var c=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(function(){return b.indexOf(Nb)!=-1}())return Nb;if(function(){return b.indexOf(Ob)!=-1}())return Pb;if(function(){return b.indexOf(Qb)!=-1&&n.documentMode>=9}())return Rb;if(function(){return b.indexOf(Qb)!=-1&&n.documentMode>=8}())return Sb;if(function(){var a=/msie ([0-9]+)\.([0-9]+)/.exec(b);if(a&&a.length==3)return c(a)>=6000}())return Tb;if(function(){return b.indexOf(Ub)!=-1}())return Vb;return Wb};v[Mb]={gecko1_8:0,ie6:1,ie8:2,ie9:3,opera:4,safari:5};showcase.onScriptLoad=function(){if(J){r=true;C()}};showcase.onInjectionDone=function(){q=true;o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:Xb,millis:(new Date).getTime(),type:Z});C()};E();D();var L;var M;if(B()){if(m.external&&(m.external.initModule&&m.external.initModule(R))){m.location.reload();return}M=Yb;L=Q}o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:T,millis:(new Date).getTime(),type:Zb});if(!B()){try{H([Eb,Sb],$b);H([_b,Nb],ac);H([bc,Pb],cc);H([dc,Sb],ec);H([fc,Tb],gc);H([Eb,Rb],hc);H([fc,Rb],ic);H([fc,Nb],jc);H([dc,Vb],kc);H([dc,Rb],lc);H([bc,Nb],mc);H([dc,Pb],nc);H([_b,Sb],oc);H([bc,Tb],pc);H([dc,Tb],qc);H([_b,Pb],rc);H([fc,Pb],sc);H([Eb,Vb],tc);H([bc,Rb],uc);H([dc,Nb],vc);H([bc,Sb],wc);H([_b,Tb],xc);H([Eb,Tb],yc);H([fc,Sb],zc);H([fc,Vb],Ac);H([_b,Rb],Bc);H([Eb,Nb],Cc);H([_b,Vb],Dc);H([bc,Vb],Ec);H([Eb,Pb],Fc);L=x[I(Db)][I(Mb)];var N=L.indexOf(Gc);if(N!=-1){y=Number(L.substring(N+1));L=L.substring(0,N)}M=L+Hc}catch(a){return}}var O;function P(){if(!s){s=true;C();if(n.removeEventListener){n.removeEventListener(Ic,P,false)}if(O){clearInterval(O)}}}
if(n.addEventListener){n.addEventListener(Ic,function(){K();P()},false)}var O=setInterval(function(){if(/loaded|complete/.test(n.readyState)){K();P()}},50);o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:T,millis:(new Date).getTime(),type:Z});o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:Xb,millis:(new Date).getTime(),type:U});n.write(Jc)}
showcase();