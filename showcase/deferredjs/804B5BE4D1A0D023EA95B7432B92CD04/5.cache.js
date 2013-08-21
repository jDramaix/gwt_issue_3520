function b$b(a,b){a.c=b}
function Q3b(a,b){F_b(a.b,b)}
function u$b(a,b){W3b(b,a.f)}
function X3b(a){this.b=a}
function Z3b(a){this.b=a}
function d4b(a){this.b=a}
function y4b(a){this.b=a}
function M6b(a){this.b=a}
function K0b(a){return Itc+a}
function N0b(a){return bgc(a,1)}
function D0b(a){E0b.call(this,a)}
function C0b(){E0b.call(this,2)}
function w$b(){x$b.call(this)}
function w4b(a){this.c=a;this.b=20}
function z$b(a,b){this.c=a;this.b=b}
function C$b(a,b){this.c=a;this.b=a+b}
function n4b(a,b){this.b=a;this.c=b}
function S0b(a){this.b=[];P0b(this,a,jsc)}
function R3b(a){S3b.call(this,a,new P_b)}
function S3b(a,b){T3b.call(this,a,b,new l4b)}
function Ej(a,b){!!a.ab&&sB(a.ab,b)}
function vk(a,b){!!a.q&&Vkc(a.q,b)}
function c4b(a,b){Pr(a.b.b.db);P3b(a.b,b)}
function j4b(a,b){a.d.Ib(b+'-popup');GZb(a.c,b)}
function h4b(a){a.d.D&&r4b(a.c,q4b(a.c)+1)}
function AOb(a){return mLb(),!a.db[pyc]}
function z0b(a,b){return Tkc(A0b(a,b,1),b,0)!=-1}
function P3b(a,b){a.d=b.c;Q3b(a,a.d);a.e.d.ec(false)}
function N_b(a){var b;b=C_b(a);return b==null?jsc:b}
function q4b(a){var b;b=a.k;if(b){return Tkc(a.g,b,0)}return -1}
function B$b(a,b){var c;c=a.c-b.c;c==0&&(c=b.b-a.b);return c}
function s$b(a,b){b=t$b(a,b);b=$fc(b,$tc,vrc);return dgc(b)}
function E0b(a){this.b=a;this.c=0;this.d={};this.e={}}
function s4b(){JZb.call(this,true);uj(this.db,jsc);this.e=false}
function u4b(a){g$b.call(this,a.b,true);wLb(this.db,zyc,Ayc);uj(this.db,Byc);this.b=a}
function qoc(){an.call(this,'No more elements in the iterator')}
function W3b(a,b){if(!AOb(a.b.b)){return}k4b(a.b.e,a.b,b.b,a.b.g)}
function g4b(a){var b;if(!a.d.D){return null}b=a.c.k;return !b?null:$I(b,112).b}
function C_b(a){var b;b=(mLb(),Vr(a.db,yyc));if(Sfc(jsc,b)){return null}return b}
function A0b(a,b,c){var d;d=new Ykc;b!=null&&c>0&&B0b(a,b,jsc,d,c);return d}
function r4b(a,b){var c;c=a.g;b>-1&&b<c.c&&uZb(a,(Mjc(b,c.c),$I(c.b[b],102)),false)}
function i4b(a){a.d.D&&(q4b(a.c)==-1?r4b(a.c,a.c.g.c-1):r4b(a.c,q4b(a.c)-1))}
function A_b(a,b){if(!a.c){a.c=true;Cj(a,new M6b(a),(uy(),uy(),ty))}return Dj(a,b,(!jB&&(jB=new Oy),jB))}
function rG(a,b){var c,d;d=pkc(VF(a.b));c=false;while(d.b.Bd()){if(!snc(b,vkc(d))){d.b.Dd();c=true}}return c}
function t$b(a,b){var c,d;b=b.toLowerCase();if(a.e!=null){for(c=0;c<a.e.length;++c){d=a.e[c];b=Yfc(b,d,32)}}return b}
function v$b(a,b,c){var d,e,f,g,i,j;g=s$b(a,b.c);f=b.b;d=p$b(a,g);for(e=d.c-1;e>f;--e){Ukc(d,e)}j=o$b(a,g,d);i=new y4b(j);W3b(c,i)}
function O3b(a){var b;b=B_b(a.b);if(Sfc(b,a.d)){return}else{a.d=b}b.length==0?u$b(a.f,(new w4b(null),a.c)):v$b(a.f,new w4b(b),a.c)}
function P0b(g,a,b){var c=[];for(var d in a.e){d.indexOf(Itc)==0&&c.push(d)}var e={suffixNames:c,subtrees:a.d,prefix:b,index:0};var f=g.b;f.push(e)}
function q$b(a,b){var c,d,e,f;d=new unc;f=A0b(a.d,b,2147483647);if(f){for(e=0;e<f.c;++e){c=$I(a.b.qd((Mjc(e,f.c),f.b[e])),151);!!c&&pG(d,c)}}return d}
function r$b(a,b,c){var d,e,f,g,i,j;d=null;for(i=0,j=b.length;i<j;++i){g=b[i];e=a.indexOf(g,c);if(e!=-1){f=new C$b(e,g.length);(!d||B$b(f,d)<0)&&(d=f)}}return d}
function x$b(){var a;this.f=new y4b(new Ykc);this.d=new C0b;this.b=new mnc;this.c=new mnc;this.e=PI(f1,Zpc,-1,1,1);for(a=0;a<1;++a){this.e[a]=vrc.charCodeAt(a)}}
function Yfc(d,a,b){var c;if(a<256){c=qfc(a);c='\\x'+'00'.substring(c.length)+c}else{c=String.fromCharCode(a)}return d.replace(RegExp(c,Xtc),String.fromCharCode(b))}
function l4b(){var a;this.c=new s4b;this.d=(a=new eSb(true,false,'suggestPopup'),uj(c8b((mLb(),ws(a.db))),'gwt-SuggestBoxPopup'),a.B=true,a.n=2,a);cSb(this.d,this.c)}
function Q0b(a){var b;b=R0b(a,false);if(b==null){if(R0b(a,true)!=null){throw new an('nextImpl() returned null, but hasNext says otherwise')}else{throw new qoc}}return b}
function n$b(a,b){var c,d,e,f,g;c=t$b(a,b);a.c.sd(c,b);g=_fc(c,vrc,0);for(d=0;d<g.length;++d){f=g[d];y0b(a.d,f);e=$I(a.b.qd(f),160);if(!e){e=new unc;a.b.sd(f,e)}e.vd(c)}}
function Gob(a){var b,c,d,e,f;c=new w$b;f=i7(a.b);for(b=0;b<f.length;++b){n$b(c,f[b])}d=new R3b(c);K6b(d.db,jsc,wyc);j4b(d.e,wyc);e=new h7b;e7b(e,new zTb('<b>Choose a word:<\/b>'));e7b(e,d);return e}
function T3b(a,b,c){var d;this.c=new X3b(this);this.g=new d4b(this);this.b=b;this.e=c;G5(this,b);d=new Z3b(this);Cj(this.b,d,(bz(),bz(),az));Cj(this.b,d,(hz(),hz(),gz));A_b(this.b,d);this.f=a;uj(this.db,'gwt-SuggestBox')}
function nZb(a){var b,c,d;DZb(a,null);b=a.p?a.d:(mLb(),ZMb(a.d,0));while((mLb(),$Mb(b))>0){Jr(b,ZMb(b,0))}for(d=new _jc(a.b);d.c<d.e.ud();){c=$I(Zjc(d),116);ds(c.db,xyc,1);aJ(c,103)?($I(c,103),undefined):($I(c,102).d=null)}Rkc(a.g);Rkc(a.b)}
function p$b(a,b){var c,d,e,f,g,i;d=new Ykc;if(b.length==0){return d}f=_fc(b,vrc,0);c=null;for(e=0;e<f.length;++e){i=f[e];if(i.length==0||Xfc(i,vrc)){continue}g=q$b(a,i);if(!c){c=g}else{rG(c,g);if(c.b.ud()<2){break}}}if(c){Qkc(d,c);Flc(d,null)}return d}
function k4b(a,b,c,d){var e,f,g,i;e=!!c&&c.c>0;if(!e){a.d.ec(false);return}a.d.$&&a.d.ec(false);nZb(a.c);for(g=new _jc(c);g.c<g.e.ud();){f=$I(Zjc(g),113);i=new u4b(f);b$b(i,new n4b(d,f));kZb(a.c,i)}e&&r4b(a.c,0);if(a.b!=b){!!a.b&&vk(a.d,a.b.db);a.b=b;lk(a.d,b.db)}Fk(a.d,b)}
function y0b(j,a){var b=j.e;var c=j.d;var d=j.b;if(a==null||a.length==0){return false}if(a.length<=d){var e=Itc+a;if(b.hasOwnProperty(e)){return false}else{j.c++;b[e]=true;return true}}else{var f=Itc+a.slice(0,d);var g;if(c.hasOwnProperty(f)){g=c[f]}else{g=new D0b(d<<1);c[f]=g}var i=a.slice(d);if(g.og(i)){j.c++;return true}else{return false}}}
function o$b(a,b,c){var d,e,f,g,i,j,k,n,o,p,q,r;q=new Ykc;for(i=0;i<c.c;++i){e=(Mjc(i,c.c),$I(c.b[i],1));f=0;j=0;g=$I(a.c.qd(e),1);d=new o4;o=_fc(b,vrc,0);while(true){r=r$b(e,o,j);if(!r){break}if(r.c==0||32==Qfc(e,r.c-1)){k=cgc(g,f,r.c);n=cgc(g,r.c,r.b);f=r.b;Kgc(d.b,B4(k));Kgc(d.b,'<strong>');Kgc(d.b,B4(n));Kgc(d.b,'<\/strong>')}j=r.b}if(f==0){continue}m4(d,bgc(g,f));p=new z$b(g,(new q4(d.b.b.b)).b);RI(q.b,q.c++,p)}return q}
function R0b(k,a){var b=k.b;var c=K0b;var d=N0b;while(b.length>0){var e=b.pop();if(e.index<e.suffixNames.length){var f=e.prefix+d(e.suffixNames[e.index]);!a&&e.index++;if(e.index<e.suffixNames.length){b.push(e)}else{for(j in e.subtrees){if(j.indexOf(Itc)!=0){continue}var g=e.prefix+d(j);var i=e.subtrees[j];k.rg(i,g)}}return f}else{for(var j in e.subtrees){if(j.indexOf(Itc)!=0){continue}var g=e.prefix+d(j);var i=e.subtrees[j];k.rg(i,g)}}}return null}
function B0b(p,a,b,c,d){var e=p.e;var f=p.d;var g=p.b;if(a.length>b.length+g){var i=Itc+a.slice(b.length,b.length+g);if(f.hasOwnProperty(i)){var j=f[i];var k=b+N0b(i);j.qg(a,k,c,d)}}else{for(var n in e){if(n.indexOf(Itc)!=0){continue}var k=b+N0b(n);k.indexOf(a)==0&&c.vd(k);if(c.ud()>=d){return}}for(var i in f){if(i.indexOf(Itc)!=0){continue}var k=b+N0b(i);var j=f[i];if(k.indexOf(a)==0){if(j.c<=d-c.ud()||j.c==1){j.pg(c,k)}else{for(var n in j.e){n.indexOf(Itc)==0&&c.vd(k+N0b(n))}for(var o in j.d){o.indexOf(Itc)==0&&c.vd(k+N0b(o)+_sc)}}}}}}
function i7(a){var b,c;b=$I(a.b.qd(vyc),146);if(b==null){c=QI(Q1,Qpc,1,['1337','apple','about','ant','bruce','banana','bobv','canada','coconut','compiler','donut','deferred binding','dessert topping','eclair','ecc','frog attack','floor wax','fitz','google','gosh','gwt','hollis','haskell','hammer','in the flinks','internets','ipso facto','jat','jgw','java','jens','knorton','kaitlyn','kangaroo','la grange','lars','love','morrildl','max','maddie','mloofle','mmendez','nail','narnia',Rsc,'optimizations','obfuscation','original','ping pong','polymorphic','pleather','quotidian','quality',"qu'est-ce que c'est",'ready state','ruby','rdayal','subversion','superclass','scottb','tobyr','the dans','~ tilde',Nrc,'unit tests','under 100ms','vtbl','vidalia','vector graphics','w3c','web experience','work around','w00t!','xml','xargs','xeno','yacc','yank (the vi command)','zealot','zoe','zebra']);a.b.sd(vyc,c);return c}else{return b}}
var wyc='cwSuggestBox',vyc='cwSuggestBoxWords';X2(695,1,Dqc);_.qc=function Mob(){B5(this.c,Gob(this.b))};X2(1067,1,{});X2(1066,1067,{},w$b);X2(1068,1,{113:1},z$b);X2(1069,1,{104:1,135:1},C$b);_.cT=function D$b(a){return B$b(this,$I(a,104))};_.b=0;_.c=0;X2(1099,353,pqc,C0b,D0b);_.vd=function F0b(a){return y0b(this,$I(a,1))};_.og=function G0b(a){return y0b(this,a)};_.xd=function H0b(a){return aJ(a,1)&&z0b(this,$I(a,1))};_.pg=function I0b(a,b){var c,d;for(d=new S0b(this);R0b(d,true)!=null;){c=Q0b(d);a.vd(b+c)}};_.cc=function J0b(){return new S0b(this)};_.ud=function L0b(){return this.c};_.qg=function M0b(a,b,c,d){B0b(this,a,b,c,d)};_.b=0;_.c=0;X2(1100,1,{},S0b);_.rg=function T0b(a,b){P0b(this,a,b)};_.Bd=function U0b(){return R0b(this,true)!=null};_.Cd=function V0b(){return Q0b(this)};_.Dd=function W0b(){throw new Zgc('PrefixTree does not support removal.  Use clear()')};X2(1129,414,wqc,R3b);_.Ib=function U3b(a){K6b(this.db,jsc,a);j4b(this.e,a)};X2(1130,1,{},X3b);X2(1131,1,{35:1,36:1,52:1,53:1},Z3b);_.Ic=function $3b(a){var b;switch(rs(a.b)){case 40:h4b(this.b.e);break;case 38:i4b(this.b.e);break;case 13:case 9:b=g4b(this.b.e);!b?this.b.e.d.ec(false):P3b(this.b,b);}};_.Jc=function _3b(a){O3b(this.b)};_.ic=function a4b(a){Ej(this.b,a)};X2(1132,1,{},d4b);X2(1134,1,{});X2(1133,1134,{},l4b);_.b=null;X2(1135,1,{},n4b);_.sc=function o4b(){c4b(this.b,this.c)};X2(1136,1057,Spc,s4b);X2(1137,1064,{97:1,102:1,112:1,116:1},u4b);X2(1138,1,{},w4b);_.b=20;X2(1139,1,{},y4b);X2(1157,1,Bqc,M6b);_.Gc=function N6b(a){mB(this.b,N_b(this.b))};X2(1306,127,Ypc,qoc);var r$=Oec(txc,'ValueBoxBase$1',1157),b$=Oec(txc,'SuggestOracle',1067),RY=Oec(txc,'MultiWordSuggestOracle',1066),PY=Oec(txc,'MultiWordSuggestOracle$MultiWordSuggestion',1068),QY=Oec(txc,'MultiWordSuggestOracle$WordBounds',1069),_Z=Oec(txc,'SuggestOracle$Request',1138),a$=Oec(txc,'SuggestOracle$Response',1139),$Z=Oec(txc,'SuggestBox',1129),XZ=Oec(txc,'SuggestBox$SuggestionDisplay',1134),WZ=Oec(txc,'SuggestBox$DefaultSuggestionDisplay',1133),ZZ=Oec(txc,'SuggestBox$SuggestionMenu',1136),YZ=Oec(txc,'SuggestBox$SuggestionMenuItem',1137),VZ=Oec(txc,'SuggestBox$DefaultSuggestionDisplay$1',1135),TZ=Oec(txc,'SuggestBox$1',1130),UZ=Oec(txc,'SuggestBox$2',1132),SZ=Oec(txc,'SuggestBox$1TextBoxEvents',1131),kZ=Oec(txc,'PrefixTree',1099),jZ=Oec(txc,'PrefixTree$PrefixTreeIterator',1100);qrc(Vn)(5);