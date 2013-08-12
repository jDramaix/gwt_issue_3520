function IZb(){JZb.call(this,false)}
function e$b(a,b){g$b.call(this,a,false);this.c=b}
function f$b(a,b){g$b.call(this,a,false);d$b(this,b)}
function h$b(a){g$b.call(this,'GWT',true);d$b(this,a)}
function Tmb(a){this.d=a;this.c=Y6(this.d.b)}
function mZb(a,b){return tZb(a,b,a.b.c)}
function $b(a,b){kc((ve(),qe),a,QI(L1,Mpc,132,[(qec(),b?pec:oec)]))}
function d$b(a,b){a.e=b;!!a.d&&HZb(a.d,a);if(b){gs(b.db,-1);Lf();$b(a.db,true)}else{Lf();$b(a.db,false)}}
function tZb(a,b,c){if(c<0||c>a.b.c){throw new hec}a.p&&(mLb(),ds(b.db,uyc,2));lZb(a,c,b.db);Lkc(a.b,c,b);return b}
function U6(a){var b,c;b=$I(a.b.qd(Syc),146);if(b==null){c=QI(Q1,Npc,1,['New','Open',Tyc,Uyc,'Exit']);a.b.sd(Syc,c);return c}else{return b}}
function T6(a){var b,c;b=$I(a.b.qd(Ryc),146);if(b==null){c=QI(Q1,Npc,1,['Undo','Redo','Cut','Copy','Paste']);a.b.sd(Ryc,c);return c}else{return b}}
function X6(a){var b,c;b=$I(a.b.qd(Xyc),146);if(b==null){c=QI(Q1,Npc,1,['Contents','Fortune Cookie','About GWT']);a.b.sd(Xyc,c);return c}else{return b}}
function W6(a){var b,c;b=$I(a.b.qd(Wyc),146);if(b==null){c=QI(Q1,Npc,1,['Download','Examples',Vuc,"GWT wit' the program"]);a.b.sd(Wyc,c);return c}else{return b}}
function V6(a){var b,c;b=$I(a.b.qd(Vyc),146);if(b==null){c=QI(Q1,Npc,1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);a.b.sd(Vyc,c);return c}else{return b}}
function k$b(){var a;cj(this,(mLb(),$doc.createElement(Awc)));uj(this.db,'gwt-MenuItemSeparator');a=$doc.createElement(Msc);nLb(this.db,a);es(a,Isc,'menuSeparatorInner')}
function Y6(a){var b,c;b=$I(a.b.qd(Yyc),146);if(b==null){c=QI(Q1,Npc,1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);a.b.sd(Yyc,c);return c}else{return b}}
function Pmb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new Tmb(a);n=new IZb;n.c=true;wLb(n.db,Hsc,'500px');n.f=true;q=new JZb(true);p=V6(a.b);for(k=0;k<p.length;++k){kZb(q,new e$b(p[k],o))}d=new JZb(true);d.f=true;kZb(n,new f$b('File',d));e=U6(a.b);for(k=0;k<e.length;++k){if(k==3){mZb(d,new k$b);kZb(d,new f$b(e[3],q));mZb(d,new k$b)}else{kZb(d,new e$b(e[k],o))}}b=new JZb(true);kZb(n,new f$b('Edit',b));c=T6(a.b);for(k=0;k<c.length;++k){kZb(b,new e$b(c[k],o))}f=new JZb(true);kZb(n,new h$b(f));g=W6(a.b);for(k=0;k<g.length;++k){kZb(f,new e$b(g[k],o))}i=new JZb(true);mZb(n,new k$b);kZb(n,new f$b('Help',i));j=X6(a.b);for(k=0;k<j.length;++k){kZb(i,new e$b(j[k],o))}K6b(n.db,gsc,Zyc);GZb(n,Zyc);return n}
var Zyc='cwMenuBar',Ryc='cwMenuBarEditOptions',Syc='cwMenuBarFileOptions',Vyc='cwMenuBarFileRecents',Wyc='cwMenuBarGWTOptions',Xyc='cwMenuBarHelpOptions',Yyc='cwMenuBarPrompts';X2(660,1,{},Tmb);_.sc=function Umb(){fMb(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.b=0;X2(661,1,Aqc);_.qc=function Ymb(){B5(this.c,Pmb(this.b))};X2(1057,104,Ppc,IZb);X2(1064,105,{97:1,102:1,116:1},e$b,f$b,h$b);X2(1065,105,{97:1,103:1,116:1},k$b);var VS=Lec(sxc,'CwMenuBar$1',660),NY=Lec(qxc,'MenuItemSeparator',1065);nrc(Vn)(7);