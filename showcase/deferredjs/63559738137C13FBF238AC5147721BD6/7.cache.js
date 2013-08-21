function lZb(){mZb.call(this,false)}
function JZb(a,b){LZb.call(this,a,false);this.c=b}
function KZb(a,b){LZb.call(this,a,false);IZb(this,b)}
function MZb(a){LZb.call(this,'GWT',true);IZb(this,a)}
function zmb(a){this.d=a;this.c=F6(this.d.b)}
function RYb(a,b){return YYb(a,b,a.b.c)}
function Pb(a,b){_b((ke(),fe),a,wI(s1,gpc,133,[(Ndc(),b?Mdc:Ldc)]))}
function IZb(a,b){a.e=b;!!a.d&&kZb(a.d,a);if(b){Ur(b.db,-1);Af();Pb(a.db,true)}else{Af();Pb(a.db,false)}}
function YYb(a,b,c){if(c<0||c>a.b.c){throw new Edc}a.p&&(RKb(),Rr(b.db,Hxc,2));QYb(a,c,b.db);gkc(a.b,c,b);return b}
function D6(a){var b,c;b=GI(a.b.gd(gyc),147);if(b==null){c=wI(x1,hpc,1,['\u4E0B\u8F7D',puc,ruc,'GWT \u9AD8\u624B\u7A0B\u5E8F']);a.b.jd(gyc,c);return c}else{return b}}
function E6(a){var b,c;b=GI(a.b.gd(hyc),147);if(b==null){c=wI(x1,hpc,1,['\u5185\u5BB9','\u5E78\u8FD0\u997C','\u5173\u4E8EGWT']);a.b.jd(hyc,c);return c}else{return b}}
function A6(a){var b,c;b=GI(a.b.gd(cyc),147);if(b==null){c=wI(x1,hpc,1,['\u64A4\u6D88','\u91CD\u590D','\u526A\u5207','\u590D\u5236','\u7C98\u8D34']);a.b.jd(cyc,c);return c}else{return b}}
function B6(a){var b,c;b=GI(a.b.gd(dyc),147);if(b==null){c=wI(x1,hpc,1,['\u65B0\u5EFA','\u6253\u5F00',eyc,'\u8FD1\u671F\u6587\u4EF6','\u9000\u51FA']);a.b.jd(dyc,c);return c}else{return b}}
function C6(a){var b,c;b=GI(a.b.gd(fyc),147);if(b==null){c=wI(x1,hpc,1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);a.b.jd(fyc,c);return c}else{return b}}
function PZb(){var a;Ti(this,(RKb(),$doc.createElement(Qvc)));jj(this.db,'gwt-MenuItemSeparator');a=$doc.createElement(gsc);SKb(this.db,a);Sr(a,csc,'menuSeparatorInner')}
function F6(a){var b,c;b=GI(a.b.gd(iyc),147);if(b==null){c=wI(x1,hpc,1,['\u611F\u8C22\u60A8\u9009\u62E9\u83DC\u5355\u9879','\u9009\u5F97\u5F88\u4E0D\u9519','\u9664\u4E86\u9009\u62E9\u83DC\u5355\u9879\u4E4B\u5916\u96BE\u9053\u6CA1\u6709\u66F4\u597D\u7684\u9009\u62E9\uFF1F','\u8BD5\u8BD5\u522B\u7684\u5427','\u8FD9\u4E0D\u8FC7\u662F\u4E2A\u83DC\u5355\u800C\u5DF2\uFF01','\u53C8\u6D6A\u8D39\u4E86\u4E00\u6B21\u70B9\u51FB']);a.b.jd(iyc,c);return c}else{return b}}
function vmb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new zmb(a);n=new lZb;n.c=true;_Kb(n.db,bsc,'500px');n.f=true;q=new mZb(true);p=C6(a.b);for(k=0;k<p.length;++k){PYb(q,new JZb(p[k],o))}d=new mZb(true);d.f=true;PYb(n,new KZb('\u6587\u4EF6',d));e=B6(a.b);for(k=0;k<e.length;++k){if(k==3){RYb(d,new PZb);PYb(d,new KZb(e[3],q));RYb(d,new PZb)}else{PYb(d,new JZb(e[k],o))}}b=new mZb(true);PYb(n,new KZb('\u7F16\u8F91',b));c=A6(a.b);for(k=0;k<c.length;++k){PYb(b,new JZb(c[k],o))}f=new mZb(true);PYb(n,new MZb(f));g=D6(a.b);for(k=0;k<g.length;++k){PYb(f,new JZb(g[k],o))}i=new mZb(true);RYb(n,new PZb);PYb(n,new KZb('\u5E2E\u52A9',i));j=E6(a.b);for(k=0;k<j.length;++k){PYb(i,new JZb(j[k],o))}n6b(n.db,Crc,jyc);jZb(n,jyc);return n}
var jyc='cwMenuBar',cyc='cwMenuBarEditOptions',dyc='cwMenuBarFileOptions',fyc='cwMenuBarFileRecents',gyc='cwMenuBarGWTOptions',hyc='cwMenuBarHelpOptions',iyc='cwMenuBarPrompts';E2(662,1,{},zmb);_.oc=function Amb(){KLb(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.b=0;E2(663,1,Wpc);_.mc=function Emb(){i5(this.c,vmb(this.b))};E2(1058,102,jpc,lZb);E2(1065,103,{98:1,103:1,117:1},JZb,KZb,MZb);E2(1066,103,{98:1,104:1,117:1},PZb);var ES=gec(Hwc,'CwMenuBar$1',662),vY=gec(Fwc,'MenuItemSeparator',1066);Jqc(Jn)(7);