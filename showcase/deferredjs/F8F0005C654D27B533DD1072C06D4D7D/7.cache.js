function qEc(){rEc.call(this,false)}
function OEc(a,b){QEc.call(this,a,false);this.c=b}
function PEc(a,b){QEc.call(this,a,false);NEc(this,b)}
function REc(a){QEc.call(this,'GWT',true);NEc(this,a)}
function F1b(a){this.d=a;this.c=KNb(this.d.b)}
function WDc(a,b){return bEc(a,b,a.b.c)}
function Pb(a,b){_b((ke(),fe),a,_lb(xIb,l4c,133,[(SUc(),b?RUc:QUc)]))}
function NEc(a,b){a.e=b;!!a.d&&pEc(a.d,a);if(b){Ur(b.db,-1);Af();Pb(a.db,true)}else{Af();Pb(a.db,false)}}
function bEc(a,b,c){if(c<0||c>a.b.c){throw new JUc}a.p&&(Xpc(),Rr(b.db,ndd,2));VDc(a,c,b.db);l_c(a.b,c,b);return b}
function GNb(a){var b,c;b=jmb(a.b.je(Ldd),147);if(b==null){c=_lb(CIb,m4c,1,['New','Open',Mdd,Ndd,'Exit']);a.b.le(Ldd,c);return c}else{return b}}
function FNb(a){var b,c;b=jmb(a.b.je(Kdd),147);if(b==null){c=_lb(CIb,m4c,1,['Undo','Redo','Cut','Copy','Paste']);a.b.le(Kdd,c);return c}else{return b}}
function JNb(a){var b,c;b=jmb(a.b.je(Qdd),147);if(b==null){c=_lb(CIb,m4c,1,['Contents','Fortune Cookie','About GWT']);a.b.le(Qdd,c);return c}else{return b}}
function INb(a){var b,c;b=jmb(a.b.je(Pdd),147);if(b==null){c=_lb(CIb,m4c,1,['Download','Examples',V9c,"GWT wit' the program"]);a.b.le(Pdd,c);return c}else{return b}}
function HNb(a){var b,c;b=jmb(a.b.je(Odd),147);if(b==null){c=_lb(CIb,m4c,1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);a.b.le(Odd,c);return c}else{return b}}
function UEc(){var a;Ti(this,(Xpc(),$doc.createElement(ubd)));jj(this.db,'gwt-MenuItemSeparator');a=$doc.createElement(l7c);Ypc(this.db,a);Sr(a,h7c,'menuSeparatorInner')}
function KNb(a){var b,c;b=jmb(a.b.je(Rdd),147);if(b==null){c=_lb(CIb,m4c,1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);a.b.le(Rdd,c);return c}else{return b}}
function B1b(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new F1b(a);n=new qEc;n.c=true;fqc(n.db,g7c,'500px');n.f=true;q=new rEc(true);p=HNb(a.b);for(k=0;k<p.length;++k){UDc(q,new OEc(p[k],o))}d=new rEc(true);d.f=true;UDc(n,new PEc('File',d));e=GNb(a.b);for(k=0;k<e.length;++k){if(k==3){WDc(d,new UEc);UDc(d,new PEc(e[3],q));WDc(d,new UEc)}else{UDc(d,new OEc(e[k],o))}}b=new rEc(true);UDc(n,new PEc('Edit',b));c=FNb(a.b);for(k=0;k<c.length;++k){UDc(b,new OEc(c[k],o))}f=new rEc(true);UDc(n,new REc(f));g=INb(a.b);for(k=0;k<g.length;++k){UDc(f,new OEc(g[k],o))}i=new rEc(true);WDc(n,new UEc);UDc(n,new PEc('Help',i));j=JNb(a.b);for(k=0;k<j.length;++k){UDc(i,new OEc(j[k],o))}sNc(n.db,H6c,Sdd);oEc(n,Sdd);return n}
var Sdd='cwMenuBar',Kdd='cwMenuBarEditOptions',Ldd='cwMenuBarFileOptions',Odd='cwMenuBarFileRecents',Pdd='cwMenuBarGWTOptions',Qdd='cwMenuBarHelpOptions',Rdd='cwMenuBarPrompts';JJb(746,1,{},F1b);_.oc=function G1b(){Qqc(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.b=0;JJb(747,1,_4c);_.mc=function K1b(){nMb(this.c,B1b(this.b))};JJb(1142,102,o4c,qEc);JJb(1149,103,{98:1,103:1,117:1},OEc,PEc,REc);JJb(1150,103,{98:1,104:1,117:1},UEc);var Jxb=lVc(lcd,'CwMenuBar$1',746),ADb=lVc(jcd,'MenuItemSeparator',1150);O5c(Jn)(7);