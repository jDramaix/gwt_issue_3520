function IZb(){JZb.call(this,false)}
function e$b(a,b){g$b.call(this,a,false);this.c=b}
function f$b(a,b){g$b.call(this,a,false);d$b(this,b)}
function h$b(a){g$b.call(this,'GWT',true);d$b(this,a)}
function Tmb(a){this.d=a;this.c=Y6(this.d.b)}
function mZb(a,b){return tZb(a,b,a.b.c)}
function $b(a,b){kc((ve(),qe),a,QI(L1,Ppc,132,[(tec(),b?sec:rec)]))}
function d$b(a,b){a.e=b;!!a.d&&HZb(a.d,a);if(b){gs(b.db,-1);Lf();$b(a.db,true)}else{Lf();$b(a.db,false)}}
function tZb(a,b,c){if(c<0||c>a.b.c){throw new kec}a.p&&(mLb(),ds(b.db,xyc,2));lZb(a,c,b.db);Okc(a.b,c,b);return b}
function U6(a){var b,c;b=$I(a.b.qd(Vyc),146);if(b==null){c=QI(Q1,Qpc,1,['New','Open',Wyc,Xyc,'Exit']);a.b.sd(Vyc,c);return c}else{return b}}
function T6(a){var b,c;b=$I(a.b.qd(Uyc),146);if(b==null){c=QI(Q1,Qpc,1,['Undo','Redo','Cut','Copy','Paste']);a.b.sd(Uyc,c);return c}else{return b}}
function X6(a){var b,c;b=$I(a.b.qd($yc),146);if(b==null){c=QI(Q1,Qpc,1,['Contents','Fortune Cookie','About GWT']);a.b.sd($yc,c);return c}else{return b}}
function W6(a){var b,c;b=$I(a.b.qd(Zyc),146);if(b==null){c=QI(Q1,Qpc,1,['Download','Examples',Yuc,"GWT wit' the program"]);a.b.sd(Zyc,c);return c}else{return b}}
function V6(a){var b,c;b=$I(a.b.qd(Yyc),146);if(b==null){c=QI(Q1,Qpc,1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);a.b.sd(Yyc,c);return c}else{return b}}
function k$b(){var a;cj(this,(mLb(),$doc.createElement(Dwc)));uj(this.db,'gwt-MenuItemSeparator');a=$doc.createElement(Psc);nLb(this.db,a);es(a,Lsc,'menuSeparatorInner')}
function Y6(a){var b,c;b=$I(a.b.qd(_yc),146);if(b==null){c=QI(Q1,Qpc,1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);a.b.sd(_yc,c);return c}else{return b}}
function Pmb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new Tmb(a);n=new IZb;n.c=true;wLb(n.db,Ksc,'500px');n.f=true;q=new JZb(true);p=V6(a.b);for(k=0;k<p.length;++k){kZb(q,new e$b(p[k],o))}d=new JZb(true);d.f=true;kZb(n,new f$b('File',d));e=U6(a.b);for(k=0;k<e.length;++k){if(k==3){mZb(d,new k$b);kZb(d,new f$b(e[3],q));mZb(d,new k$b)}else{kZb(d,new e$b(e[k],o))}}b=new JZb(true);kZb(n,new f$b('Edit',b));c=T6(a.b);for(k=0;k<c.length;++k){kZb(b,new e$b(c[k],o))}f=new JZb(true);kZb(n,new h$b(f));g=W6(a.b);for(k=0;k<g.length;++k){kZb(f,new e$b(g[k],o))}i=new JZb(true);mZb(n,new k$b);kZb(n,new f$b('Help',i));j=X6(a.b);for(k=0;k<j.length;++k){kZb(i,new e$b(j[k],o))}K6b(n.db,jsc,azc);GZb(n,azc);return n}
var azc='cwMenuBar',Uyc='cwMenuBarEditOptions',Vyc='cwMenuBarFileOptions',Yyc='cwMenuBarFileRecents',Zyc='cwMenuBarGWTOptions',$yc='cwMenuBarHelpOptions',_yc='cwMenuBarPrompts';X2(660,1,{},Tmb);_.sc=function Umb(){fMb(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.b=0;X2(661,1,Dqc);_.qc=function Ymb(){B5(this.c,Pmb(this.b))};X2(1057,104,Spc,IZb);X2(1064,105,{97:1,102:1,116:1},e$b,f$b,h$b);X2(1065,105,{97:1,103:1,116:1},k$b);var VS=Oec(vxc,'CwMenuBar$1',660),NY=Oec(txc,'MenuItemSeparator',1065);qrc(Vn)(7);