function JZb(){KZb.call(this,false)}
function f$b(a,b){h$b.call(this,a,false);this.c=b}
function g$b(a,b){h$b.call(this,a,false);e$b(this,b)}
function i$b(a){h$b.call(this,'GWT',true);e$b(this,a)}
function Tmb(a){this.d=a;this.c=Y6(this.d.b)}
function nZb(a,b){return uZb(a,b,a.b.c)}
function $b(a,b){kc((ve(),qe),a,QI(L1,Qpc,132,[(uec(),b?tec:sec)]))}
function e$b(a,b){a.e=b;!!a.d&&IZb(a.d,a);if(b){gs(b.db,-1);Lf();$b(a.db,true)}else{Lf();$b(a.db,false)}}
function uZb(a,b,c){if(c<0||c>a.b.c){throw new lec}a.p&&(mLb(),ds(b.db,yyc,2));mZb(a,c,b.db);Pkc(a.b,c,b);return b}
function U6(a){var b,c;b=$I(a.b.qd(Wyc),146);if(b==null){c=QI(Q1,Rpc,1,['New','Open',Xyc,Yyc,'Exit']);a.b.sd(Wyc,c);return c}else{return b}}
function T6(a){var b,c;b=$I(a.b.qd(Vyc),146);if(b==null){c=QI(Q1,Rpc,1,['Undo','Redo','Cut','Copy','Paste']);a.b.sd(Vyc,c);return c}else{return b}}
function X6(a){var b,c;b=$I(a.b.qd(_yc),146);if(b==null){c=QI(Q1,Rpc,1,['Contents','Fortune Cookie','About GWT']);a.b.sd(_yc,c);return c}else{return b}}
function W6(a){var b,c;b=$I(a.b.qd($yc),146);if(b==null){c=QI(Q1,Rpc,1,['Download','Examples',Zuc,"GWT wit' the program"]);a.b.sd($yc,c);return c}else{return b}}
function V6(a){var b,c;b=$I(a.b.qd(Zyc),146);if(b==null){c=QI(Q1,Rpc,1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);a.b.sd(Zyc,c);return c}else{return b}}
function l$b(){var a;cj(this,(mLb(),$doc.createElement(Ewc)));uj(this.db,'gwt-MenuItemSeparator');a=$doc.createElement(Qsc);nLb(this.db,a);es(a,Msc,'menuSeparatorInner')}
function Y6(a){var b,c;b=$I(a.b.qd(azc),146);if(b==null){c=QI(Q1,Rpc,1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);a.b.sd(azc,c);return c}else{return b}}
function Pmb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new Tmb(a);n=new JZb;n.c=true;wLb(n.db,Lsc,'500px');n.f=true;q=new KZb(true);p=V6(a.b);for(k=0;k<p.length;++k){lZb(q,new f$b(p[k],o))}d=new KZb(true);d.f=true;lZb(n,new g$b('File',d));e=U6(a.b);for(k=0;k<e.length;++k){if(k==3){nZb(d,new l$b);lZb(d,new g$b(e[3],q));nZb(d,new l$b)}else{lZb(d,new f$b(e[k],o))}}b=new KZb(true);lZb(n,new g$b('Edit',b));c=T6(a.b);for(k=0;k<c.length;++k){lZb(b,new f$b(c[k],o))}f=new KZb(true);lZb(n,new i$b(f));g=W6(a.b);for(k=0;k<g.length;++k){lZb(f,new f$b(g[k],o))}i=new KZb(true);nZb(n,new l$b);lZb(n,new g$b('Help',i));j=X6(a.b);for(k=0;k<j.length;++k){lZb(i,new f$b(j[k],o))}L6b(n.db,ksc,bzc);HZb(n,bzc);return n}
var bzc='cwMenuBar',Vyc='cwMenuBarEditOptions',Wyc='cwMenuBarFileOptions',Zyc='cwMenuBarFileRecents',$yc='cwMenuBarGWTOptions',_yc='cwMenuBarHelpOptions',azc='cwMenuBarPrompts';X2(660,1,{},Tmb);_.sc=function Umb(){fMb(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.b=0;X2(661,1,Eqc);_.qc=function Ymb(){B5(this.c,Pmb(this.b))};X2(1057,104,Tpc,JZb);X2(1064,105,{97:1,102:1,116:1},f$b,g$b,i$b);X2(1065,105,{97:1,103:1,116:1},l$b);var VS=Pec(wxc,'CwMenuBar$1',660),NY=Pec(uxc,'MenuItemSeparator',1065);rrc(Vn)(7);