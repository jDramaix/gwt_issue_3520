function k$b(){l$b.call(this,false)}
function I$b(a,b){K$b.call(this,a,false);this.c=b}
function J$b(a,b){K$b.call(this,a,false);H$b(this,b)}
function L$b(a){K$b.call(this,'GWT',true);H$b(this,a)}
function unb(a){this.d=a;this.c=A7(this.d.b)}
function PZb(a,b){return XZb(a,b,a.b.c)}
function _b(a,b){lc((we(),re),a,hJ(n2,wqc,133,[(_ec(),b?$ec:Zec)]))}
function H$b(a,b){a.e=b;!!a.d&&j$b(a.d,a);if(b){As((aXb(),b.db),-1);Mf();_b(a.db,true)}else{Mf();_b(a.db,false)}}
function XZb(a,b,c){if(c<0||c>a.b.c){throw new Sec}a.p&&(MLb(),xs(b.db,czc,2));OZb(a,c,b.db);vlc(a.b,c,b);return b}
function y7(a){var b,c;b=rJ(a.b.pd(Dzc),147);if(b==null){c=hJ(s2,xqc,1,['\u4E0B\u8F7D',Mvc,Ovc,'GWT \u9AD8\u624B\u7A0B\u5E8F']);a.b.rd(Dzc,c);return c}else{return b}}
function z7(a){var b,c;b=rJ(a.b.pd(Ezc),147);if(b==null){c=hJ(s2,xqc,1,['\u5185\u5BB9','\u5E78\u8FD0\u997C','\u5173\u4E8EGWT']);a.b.rd(Ezc,c);return c}else{return b}}
function v7(a){var b,c;b=rJ(a.b.pd(zzc),147);if(b==null){c=hJ(s2,xqc,1,['\u64A4\u6D88','\u91CD\u590D','\u526A\u5207','\u590D\u5236','\u7C98\u8D34']);a.b.rd(zzc,c);return c}else{return b}}
function w7(a){var b,c;b=rJ(a.b.pd(Azc),147);if(b==null){c=hJ(s2,xqc,1,['\u65B0\u5EFA','\u6253\u5F00',Bzc,'\u8FD1\u671F\u6587\u4EF6','\u9000\u51FA']);a.b.rd(Azc,c);return c}else{return b}}
function x7(a){var b,c;b=rJ(a.b.pd(Czc),147);if(b==null){c=hJ(s2,xqc,1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);a.b.rd(Czc,c);return c}else{return b}}
function O$b(){var a;dj(this,(MLb(),$doc.createElement(kxc)));vj(this.db,'gwt-MenuItemSeparator');a=$doc.createElement(xtc);NLb(this.db,a);ys(a,ttc,'menuSeparatorInner')}
function A7(a){var b,c;b=rJ(a.b.pd(Fzc),147);if(b==null){c=hJ(s2,xqc,1,['\u611F\u8C22\u60A8\u9009\u62E9\u83DC\u5355\u9879','\u9009\u5F97\u5F88\u4E0D\u9519','\u9664\u4E86\u9009\u62E9\u83DC\u5355\u9879\u4E4B\u5916\u96BE\u9053\u6CA1\u6709\u66F4\u597D\u7684\u9009\u62E9\uFF1F','\u8BD5\u8BD5\u522B\u7684\u5427','\u8FD9\u4E0D\u8FC7\u662F\u4E2A\u83DC\u5355\u800C\u5DF2\uFF01','\u53C8\u6D6A\u8D39\u4E86\u4E00\u6B21\u70B9\u51FB']);a.b.rd(Fzc,c);return c}else{return b}}
function qnb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new unb(a);n=new k$b;n.c=true;WLb(n.db,stc,'500px');n.f=true;q=new l$b(true);p=x7(a.b);for(k=0;k<p.length;++k){NZb(q,new I$b(p[k],o))}d=new l$b(true);d.f=true;NZb(n,new J$b('\u6587\u4EF6',d));e=w7(a.b);for(k=0;k<e.length;++k){if(k==3){PZb(d,new O$b);NZb(d,new J$b(e[3],q));PZb(d,new O$b)}else{NZb(d,new I$b(e[k],o))}}b=new l$b(true);NZb(n,new J$b('\u7F16\u8F91',b));c=v7(a.b);for(k=0;k<c.length;++k){NZb(b,new I$b(c[k],o))}f=new l$b(true);NZb(n,new L$b(f));g=y7(a.b);for(k=0;k<g.length;++k){NZb(f,new I$b(g[k],o))}i=new l$b(true);PZb(n,new O$b);NZb(n,new J$b('\u5E2E\u52A9',i));j=z7(a.b);for(k=0;k<j.length;++k){NZb(i,new I$b(j[k],o))}m7b(n.db,Tsc,Gzc);i$b(n,Gzc);return n}
var Gzc='cwMenuBar',zzc='cwMenuBarEditOptions',Azc='cwMenuBarFileOptions',Czc='cwMenuBarFileRecents',Dzc='cwMenuBarGWTOptions',Ezc='cwMenuBarHelpOptions',Fzc='cwMenuBarPrompts';z3(667,1,{},unb);_.sc=function vnb(){FMb(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.b=0;z3(668,1,krc);_.qc=function znb(){d6(this.c,qnb(this.b))};z3(1065,104,zqc,k$b);z3(1072,105,{98:1,103:1,117:1},I$b,J$b,L$b);z3(1073,105,{98:1,104:1,117:1},O$b);var vT=ufc(cyc,'CwMenuBar$1',667),nZ=ufc(ayc,'MenuItemSeparator',1073);Zrc(Vn)(7);