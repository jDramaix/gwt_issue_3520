function TEc(){UEc.call(this,false)}
function pFc(a,b){rFc.call(this,a,false);this.b=b}
function qFc(a,b){rFc.call(this,a,false);oFc(this,b)}
function sFc(a){rFc.call(this,'GWT',true);oFc(this,a)}
function a2b(a){this.c=a;this.b=fOb(this.c.a)}
function xEc(a,b){return EEc(a,b,a.a.b)}
function Pb(a,b){_b((ke(),fe),a,qmb(PIb,Z4c,134,[(EVc(),b?DVc:CVc)]))}
function oFc(a,b){a.d=b;!!a.c&&SEc(a.c,a);if(b){Ur(b.cb,-1);Af();Pb(a.cb,true)}else{Af();Pb(a.cb,false)}}
function EEc(a,b,c){if(c<0||c>a.a.b){throw new vVc}a.o&&(Lqc(),Rr(b.cb,Xdd,2));wEc(a,c,b.cb);Z_c(a.a,c,b);return b}
function bOb(a){var b,c;b=Amb(a.a.je(ted),148);if(b==null){c=qmb(UIb,$4c,1,['New','Open',ued,ved,'Exit']);a.a.le(ted,c);return c}else{return b}}
function aOb(a){var b,c;b=Amb(a.a.je(sed),148);if(b==null){c=qmb(UIb,$4c,1,['Undo','Redo','Cut','Copy','Paste']);a.a.le(sed,c);return c}else{return b}}
function eOb(a){var b,c;b=Amb(a.a.je(yed),148);if(b==null){c=qmb(UIb,$4c,1,['Contents','Fortune Cookie','About GWT']);a.a.le(yed,c);return c}else{return b}}
function dOb(a){var b,c;b=Amb(a.a.je(xed),148);if(b==null){c=qmb(UIb,$4c,1,['Download','Examples',Gad,"GWT wit' the program"]);a.a.le(xed,c);return c}else{return b}}
function cOb(a){var b,c;b=Amb(a.a.je(wed),148);if(b==null){c=qmb(UIb,$4c,1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);a.a.le(wed,c);return c}else{return b}}
function vFc(){var a;Ti(this,(Lqc(),qs($doc,acd)));ij(this.cb,'gwt-MenuItemSeparator');a=qs($doc,$7c);Mqc(this.cb,a);Sr(a,V7c,'menuSeparatorInner')}
function fOb(a){var b,c;b=Amb(a.a.je(zed),148);if(b==null){c=qmb(UIb,$4c,1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);a.a.le(zed,c);return c}else{return b}}
function Y1b(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new a2b(a);n=new TEc;n.b=true;Vqc(n.cb,U7c,'500px');n.e=true;q=new UEc(true);p=cOb(a.a);for(k=0;k<p.length;++k){vEc(q,new pFc(p[k],o))}d=new UEc(true);d.e=true;vEc(n,new qFc('File',d));e=bOb(a.a);for(k=0;k<e.length;++k){if(k==3){xEc(d,new vFc);vEc(d,new qFc(e[3],q));xEc(d,new vFc)}else{vEc(d,new pFc(e[k],o))}}b=new UEc(true);vEc(n,new qFc('Edit',b));c=aOb(a.a);for(k=0;k<c.length;++k){vEc(b,new pFc(c[k],o))}f=new UEc(true);vEc(n,new sFc(f));g=dOb(a.a);for(k=0;k<g.length;++k){vEc(f,new pFc(g[k],o))}i=new UEc(true);xEc(n,new vFc);vEc(n,new qFc('Help',i));j=eOb(a.a);for(k=0;k<j.length;++k){vEc(i,new pFc(j[k],o))}$Nc(n.cb,t7c,Aed);REc(n,Aed);return n}
var Aed='cwMenuBar',sed='cwMenuBarEditOptions',ted='cwMenuBarFileOptions',wed='cwMenuBarFileRecents',xed='cwMenuBarGWTOptions',yed='cwMenuBarHelpOptions',zed='cwMenuBarPrompts';_Jb(749,1,{},a2b);_.nc=function b2b(){Brc(this.b[this.a]);this.a=(this.a+1)%this.b.length};_.a=0;_Jb(750,1,N5c);_.lc=function f2b(){KMb(this.b,Y1b(this.a))};_Jb(1147,102,a5c,TEc);_Jb(1154,103,{99:1,104:1,118:1},pFc,qFc,sFc);_Jb(1155,103,{99:1,105:1,118:1},vFc);var $xb=ZVc(Vcd,'CwMenuBar$1',749),RDb=ZVc(Tcd,'MenuItemSeparator',1155);A6c(In)(7);