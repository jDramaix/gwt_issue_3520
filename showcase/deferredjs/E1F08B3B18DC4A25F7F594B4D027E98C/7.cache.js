function rEc(){sEc.call(this,false)}
function PEc(a,b){REc.call(this,a,false);this.c=b}
function QEc(a,b){REc.call(this,a,false);OEc(this,b)}
function SEc(a){REc.call(this,'GWT',true);OEc(this,a)}
function F1b(a){this.d=a;this.c=KNb(this.d.b)}
function XDc(a,b){return cEc(a,b,a.b.c)}
function Pb(a,b){_b((ke(),fe),a,_lb(xIb,m4c,133,[(TUc(),b?SUc:RUc)]))}
function OEc(a,b){a.e=b;!!a.d&&qEc(a.d,a);if(b){Ur(b.db,-1);Af();Pb(a.db,true)}else{Af();Pb(a.db,false)}}
function cEc(a,b,c){if(c<0||c>a.b.c){throw new KUc}a.p&&(Xpc(),Rr(b.db,odd,2));WDc(a,c,b.db);m_c(a.b,c,b);return b}
function GNb(a){var b,c;b=jmb(a.b.je(Mdd),147);if(b==null){c=_lb(CIb,n4c,1,['New','Open',Ndd,Odd,'Exit']);a.b.le(Mdd,c);return c}else{return b}}
function FNb(a){var b,c;b=jmb(a.b.je(Ldd),147);if(b==null){c=_lb(CIb,n4c,1,['Undo','Redo','Cut','Copy','Paste']);a.b.le(Ldd,c);return c}else{return b}}
function JNb(a){var b,c;b=jmb(a.b.je(Rdd),147);if(b==null){c=_lb(CIb,n4c,1,['Contents','Fortune Cookie','About GWT']);a.b.le(Rdd,c);return c}else{return b}}
function INb(a){var b,c;b=jmb(a.b.je(Qdd),147);if(b==null){c=_lb(CIb,n4c,1,['Download','Examples',W9c,"GWT wit' the program"]);a.b.le(Qdd,c);return c}else{return b}}
function HNb(a){var b,c;b=jmb(a.b.je(Pdd),147);if(b==null){c=_lb(CIb,n4c,1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);a.b.le(Pdd,c);return c}else{return b}}
function VEc(){var a;Ti(this,(Xpc(),$doc.createElement(vbd)));jj(this.db,'gwt-MenuItemSeparator');a=$doc.createElement(m7c);Ypc(this.db,a);Sr(a,i7c,'menuSeparatorInner')}
function KNb(a){var b,c;b=jmb(a.b.je(Sdd),147);if(b==null){c=_lb(CIb,n4c,1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);a.b.le(Sdd,c);return c}else{return b}}
function B1b(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new F1b(a);n=new rEc;n.c=true;fqc(n.db,h7c,'500px');n.f=true;q=new sEc(true);p=HNb(a.b);for(k=0;k<p.length;++k){VDc(q,new PEc(p[k],o))}d=new sEc(true);d.f=true;VDc(n,new QEc('File',d));e=GNb(a.b);for(k=0;k<e.length;++k){if(k==3){XDc(d,new VEc);VDc(d,new QEc(e[3],q));XDc(d,new VEc)}else{VDc(d,new PEc(e[k],o))}}b=new sEc(true);VDc(n,new QEc('Edit',b));c=FNb(a.b);for(k=0;k<c.length;++k){VDc(b,new PEc(c[k],o))}f=new sEc(true);VDc(n,new SEc(f));g=INb(a.b);for(k=0;k<g.length;++k){VDc(f,new PEc(g[k],o))}i=new sEc(true);XDc(n,new VEc);VDc(n,new QEc('Help',i));j=JNb(a.b);for(k=0;k<j.length;++k){VDc(i,new PEc(j[k],o))}tNc(n.db,I6c,Tdd);pEc(n,Tdd);return n}
var Tdd='cwMenuBar',Ldd='cwMenuBarEditOptions',Mdd='cwMenuBarFileOptions',Pdd='cwMenuBarFileRecents',Qdd='cwMenuBarGWTOptions',Rdd='cwMenuBarHelpOptions',Sdd='cwMenuBarPrompts';JJb(746,1,{},F1b);_.oc=function G1b(){Qqc(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.b=0;JJb(747,1,a5c);_.mc=function K1b(){nMb(this.c,B1b(this.b))};JJb(1142,102,p4c,rEc);JJb(1149,103,{98:1,103:1,117:1},PEc,QEc,SEc);JJb(1150,103,{98:1,104:1,117:1},VEc);var Jxb=mVc(mcd,'CwMenuBar$1',746),ADb=mVc(kcd,'MenuItemSeparator',1150);P5c(Jn)(7);