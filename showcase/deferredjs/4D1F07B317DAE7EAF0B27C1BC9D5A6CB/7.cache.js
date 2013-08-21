function TEc(){UEc.call(this,false)}
function pFc(a,b){rFc.call(this,a,false);this.b=b}
function qFc(a,b){rFc.call(this,a,false);oFc(this,b)}
function sFc(a){rFc.call(this,'GWT',true);oFc(this,a)}
function a2b(a){this.c=a;this.b=fOb(this.c.a)}
function xEc(a,b){return EEc(a,b,a.a.b)}
function Pb(a,b){_b((ke(),fe),a,qmb(PIb,a5c,134,[(HVc(),b?GVc:FVc)]))}
function oFc(a,b){a.d=b;!!a.c&&SEc(a.c,a);if(b){Ur(b.cb,-1);Af();Pb(a.cb,true)}else{Af();Pb(a.cb,false)}}
function EEc(a,b,c){if(c<0||c>a.a.b){throw new yVc}a.o&&(Lqc(),Rr(b.cb,$dd,2));wEc(a,c,b.cb);a0c(a.a,c,b);return b}
function bOb(a){var b,c;b=Amb(a.a.je(wed),148);if(b==null){c=qmb(UIb,b5c,1,['New','Open',xed,yed,'Exit']);a.a.le(wed,c);return c}else{return b}}
function aOb(a){var b,c;b=Amb(a.a.je(ved),148);if(b==null){c=qmb(UIb,b5c,1,['Undo','Redo','Cut','Copy','Paste']);a.a.le(ved,c);return c}else{return b}}
function eOb(a){var b,c;b=Amb(a.a.je(Bed),148);if(b==null){c=qmb(UIb,b5c,1,['Contents','Fortune Cookie','About GWT']);a.a.le(Bed,c);return c}else{return b}}
function dOb(a){var b,c;b=Amb(a.a.je(Aed),148);if(b==null){c=qmb(UIb,b5c,1,['Download','Examples',Jad,"GWT wit' the program"]);a.a.le(Aed,c);return c}else{return b}}
function cOb(a){var b,c;b=Amb(a.a.je(zed),148);if(b==null){c=qmb(UIb,b5c,1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);a.a.le(zed,c);return c}else{return b}}
function vFc(){var a;Ti(this,(Lqc(),qs($doc,dcd)));ij(this.cb,'gwt-MenuItemSeparator');a=qs($doc,b8c);Mqc(this.cb,a);Sr(a,Y7c,'menuSeparatorInner')}
function fOb(a){var b,c;b=Amb(a.a.je(Ced),148);if(b==null){c=qmb(UIb,b5c,1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);a.a.le(Ced,c);return c}else{return b}}
function Y1b(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new a2b(a);n=new TEc;n.b=true;Vqc(n.cb,X7c,'500px');n.e=true;q=new UEc(true);p=cOb(a.a);for(k=0;k<p.length;++k){vEc(q,new pFc(p[k],o))}d=new UEc(true);d.e=true;vEc(n,new qFc('File',d));e=bOb(a.a);for(k=0;k<e.length;++k){if(k==3){xEc(d,new vFc);vEc(d,new qFc(e[3],q));xEc(d,new vFc)}else{vEc(d,new pFc(e[k],o))}}b=new UEc(true);vEc(n,new qFc('Edit',b));c=aOb(a.a);for(k=0;k<c.length;++k){vEc(b,new pFc(c[k],o))}f=new UEc(true);vEc(n,new sFc(f));g=dOb(a.a);for(k=0;k<g.length;++k){vEc(f,new pFc(g[k],o))}i=new UEc(true);xEc(n,new vFc);vEc(n,new qFc('Help',i));j=eOb(a.a);for(k=0;k<j.length;++k){vEc(i,new pFc(j[k],o))}$Nc(n.cb,w7c,Ded);REc(n,Ded);return n}
var Ded='cwMenuBar',ved='cwMenuBarEditOptions',wed='cwMenuBarFileOptions',zed='cwMenuBarFileRecents',Aed='cwMenuBarGWTOptions',Bed='cwMenuBarHelpOptions',Ced='cwMenuBarPrompts';_Jb(749,1,{},a2b);_.nc=function b2b(){Brc(this.b[this.a]);this.a=(this.a+1)%this.b.length};_.a=0;_Jb(750,1,Q5c);_.lc=function f2b(){KMb(this.b,Y1b(this.a))};_Jb(1147,102,d5c,TEc);_Jb(1154,103,{99:1,104:1,118:1},pFc,qFc,sFc);_Jb(1155,103,{99:1,105:1,118:1},vFc);var $xb=aWc(Ycd,'CwMenuBar$1',749),RDb=aWc(Wcd,'MenuItemSeparator',1155);D6c(In)(7);