function NZb(){OZb.call(this,false)}
function j$b(a,b){l$b.call(this,a,false);this.b=b}
function k$b(a,b){l$b.call(this,a,false);i$b(this,b)}
function m$b(a){l$b.call(this,'GWT',true);i$b(this,a)}
function Wmb(a){this.c=a;this.b=a7(this.c.a)}
function rZb(a,b){return yZb(a,b,a.a.b)}
function Pb(a,b){_b((ke(),fe),a,NI(K1,Tpc,134,[(yec(),b?xec:wec)]))}
function i$b(a,b){a.d=b;!!a.c&&MZb(a.c,a);if(b){Ur(b.cb,-1);Af();Pb(a.cb,true)}else{Af();Pb(a.cb,false)}}
function yZb(a,b,c){if(c<0||c>a.a.b){throw new pec}a.o&&(FLb(),Rr(b.cb,oyc,2));qZb(a,c,b.cb);Tkc(a.a,c,b);return b}
function p$b(){var a;Ti(this,(FLb(),qs($doc,vwc)));ij(this.cb,'gwt-MenuItemSeparator');a=qs($doc,Usc);GLb(this.cb,a);Sr(a,Psc,'menuSeparatorInner')}
function $6(a){var b,c;b=XI(a.a.gd(Pyc),148);if(b==null){c=NI(P1,Upc,1,['\u4E0B\u8F7D',_uc,bvc,'GWT \u9AD8\u624B\u7A0B\u5E8F']);a.a.jd(Pyc,c);return c}else{return b}}
function _6(a){var b,c;b=XI(a.a.gd(Qyc),148);if(b==null){c=NI(P1,Upc,1,['\u5185\u5BB9','\u5E78\u8FD0\u997C','\u5173\u4E8EGWT']);a.a.jd(Qyc,c);return c}else{return b}}
function X6(a){var b,c;b=XI(a.a.gd(Lyc),148);if(b==null){c=NI(P1,Upc,1,['\u64A4\u6D88','\u91CD\u590D','\u526A\u5207','\u590D\u5236','\u7C98\u8D34']);a.a.jd(Lyc,c);return c}else{return b}}
function Y6(a){var b,c;b=XI(a.a.gd(Myc),148);if(b==null){c=NI(P1,Upc,1,['\u65B0\u5EFA','\u6253\u5F00',Nyc,'\u8FD1\u671F\u6587\u4EF6','\u9000\u51FA']);a.a.jd(Myc,c);return c}else{return b}}
function Z6(a){var b,c;b=XI(a.a.gd(Oyc),148);if(b==null){c=NI(P1,Upc,1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);a.a.jd(Oyc,c);return c}else{return b}}
function a7(a){var b,c;b=XI(a.a.gd(Ryc),148);if(b==null){c=NI(P1,Upc,1,['\u611F\u8C22\u60A8\u9009\u62E9\u83DC\u5355\u9879','\u9009\u5F97\u5F88\u4E0D\u9519','\u9664\u4E86\u9009\u62E9\u83DC\u5355\u9879\u4E4B\u5916\u96BE\u9053\u6CA1\u6709\u66F4\u597D\u7684\u9009\u62E9\uFF1F','\u8BD5\u8BD5\u522B\u7684\u5427','\u8FD9\u4E0D\u8FC7\u662F\u4E2A\u83DC\u5355\u800C\u5DF2\uFF01','\u53C8\u6D6A\u8D39\u4E86\u4E00\u6B21\u70B9\u51FB']);a.a.jd(Ryc,c);return c}else{return b}}
function Smb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new Wmb(a);n=new NZb;n.b=true;PLb(n.cb,Osc,'500px');n.e=true;q=new OZb(true);p=Z6(a.a);for(k=0;k<p.length;++k){pZb(q,new j$b(p[k],o))}d=new OZb(true);d.e=true;pZb(n,new k$b('\u6587\u4EF6',d));e=Y6(a.a);for(k=0;k<e.length;++k){if(k==3){rZb(d,new p$b);pZb(d,new k$b(e[3],q));rZb(d,new p$b)}else{pZb(d,new j$b(e[k],o))}}b=new OZb(true);pZb(n,new k$b('\u7F16\u8F91',b));c=X6(a.a);for(k=0;k<c.length;++k){pZb(b,new j$b(c[k],o))}f=new OZb(true);pZb(n,new m$b(f));g=$6(a.a);for(k=0;k<g.length;++k){pZb(f,new j$b(g[k],o))}i=new OZb(true);rZb(n,new p$b);pZb(n,new k$b('\u5E2E\u52A9',i));j=_6(a.a);for(k=0;k<j.length;++k){pZb(i,new j$b(j[k],o))}U6b(n.cb,nsc,Syc);LZb(n,Syc);return n}
var Syc='cwMenuBar',Lyc='cwMenuBarEditOptions',Myc='cwMenuBarFileOptions',Oyc='cwMenuBarFileRecents',Pyc='cwMenuBarGWTOptions',Qyc='cwMenuBarHelpOptions',Ryc='cwMenuBarPrompts';W2(665,1,{},Wmb);_.nc=function Xmb(){vMb(this.b[this.a]);this.a=(this.a+1)%this.b.length};_.a=0;W2(666,1,Hqc);_.lc=function _mb(){F5(this.b,Smb(this.a))};W2(1063,102,Wpc,NZb);W2(1070,103,{99:1,104:1,118:1},j$b,k$b,m$b);W2(1071,103,{99:1,105:1,118:1},p$b);var VS=Tec(oxc,'CwMenuBar$1',665),MY=Tec(mxc,'MenuItemSeparator',1071);urc(In)(7);