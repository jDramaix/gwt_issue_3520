function UEc(){VEc.call(this,false)}
function qFc(a,b){sFc.call(this,a,false);this.b=b}
function rFc(a,b){sFc.call(this,a,false);pFc(this,b)}
function tFc(a){sFc.call(this,'GWT',true);pFc(this,a)}
function a2b(a){this.c=a;this.b=fOb(this.c.a)}
function yEc(a,b){return FEc(a,b,a.a.b)}
function Pb(a,b){_b((ke(),fe),a,qmb(PIb,b5c,134,[(IVc(),b?HVc:GVc)]))}
function pFc(a,b){a.d=b;!!a.c&&TEc(a.c,a);if(b){Ur(b.cb,-1);Af();Pb(a.cb,true)}else{Af();Pb(a.cb,false)}}
function FEc(a,b,c){if(c<0||c>a.a.b){throw new zVc}a.o&&(Lqc(),Rr(b.cb,_dd,2));xEc(a,c,b.cb);b0c(a.a,c,b);return b}
function bOb(a){var b,c;b=Amb(a.a.je(xed),148);if(b==null){c=qmb(UIb,c5c,1,['New','Open',yed,zed,'Exit']);a.a.le(xed,c);return c}else{return b}}
function aOb(a){var b,c;b=Amb(a.a.je(wed),148);if(b==null){c=qmb(UIb,c5c,1,['Undo','Redo','Cut','Copy','Paste']);a.a.le(wed,c);return c}else{return b}}
function eOb(a){var b,c;b=Amb(a.a.je(Ced),148);if(b==null){c=qmb(UIb,c5c,1,['Contents','Fortune Cookie','About GWT']);a.a.le(Ced,c);return c}else{return b}}
function dOb(a){var b,c;b=Amb(a.a.je(Bed),148);if(b==null){c=qmb(UIb,c5c,1,['Download','Examples',Kad,"GWT wit' the program"]);a.a.le(Bed,c);return c}else{return b}}
function cOb(a){var b,c;b=Amb(a.a.je(Aed),148);if(b==null){c=qmb(UIb,c5c,1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);a.a.le(Aed,c);return c}else{return b}}
function wFc(){var a;Ti(this,(Lqc(),qs($doc,ecd)));ij(this.cb,'gwt-MenuItemSeparator');a=qs($doc,c8c);Mqc(this.cb,a);Sr(a,Z7c,'menuSeparatorInner')}
function fOb(a){var b,c;b=Amb(a.a.je(Ded),148);if(b==null){c=qmb(UIb,c5c,1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);a.a.le(Ded,c);return c}else{return b}}
function Y1b(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new a2b(a);n=new UEc;n.b=true;Vqc(n.cb,Y7c,'500px');n.e=true;q=new VEc(true);p=cOb(a.a);for(k=0;k<p.length;++k){wEc(q,new qFc(p[k],o))}d=new VEc(true);d.e=true;wEc(n,new rFc('File',d));e=bOb(a.a);for(k=0;k<e.length;++k){if(k==3){yEc(d,new wFc);wEc(d,new rFc(e[3],q));yEc(d,new wFc)}else{wEc(d,new qFc(e[k],o))}}b=new VEc(true);wEc(n,new rFc('Edit',b));c=aOb(a.a);for(k=0;k<c.length;++k){wEc(b,new qFc(c[k],o))}f=new VEc(true);wEc(n,new tFc(f));g=dOb(a.a);for(k=0;k<g.length;++k){wEc(f,new qFc(g[k],o))}i=new VEc(true);yEc(n,new wFc);wEc(n,new rFc('Help',i));j=eOb(a.a);for(k=0;k<j.length;++k){wEc(i,new qFc(j[k],o))}_Nc(n.cb,x7c,Eed);SEc(n,Eed);return n}
var Eed='cwMenuBar',wed='cwMenuBarEditOptions',xed='cwMenuBarFileOptions',Aed='cwMenuBarFileRecents',Bed='cwMenuBarGWTOptions',Ced='cwMenuBarHelpOptions',Ded='cwMenuBarPrompts';_Jb(749,1,{},a2b);_.nc=function b2b(){Brc(this.b[this.a]);this.a=(this.a+1)%this.b.length};_.a=0;_Jb(750,1,R5c);_.lc=function f2b(){KMb(this.b,Y1b(this.a))};_Jb(1147,102,e5c,UEc);_Jb(1154,103,{99:1,104:1,118:1},qFc,rFc,tFc);_Jb(1155,103,{99:1,105:1,118:1},wFc);var $xb=bWc(Zcd,'CwMenuBar$1',749),RDb=bWc(Xcd,'MenuItemSeparator',1155);E6c(In)(7);