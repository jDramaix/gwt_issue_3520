function IEc(){JEc.call(this,false)}
function eFc(a,b){gFc.call(this,a,false);this.b=b}
function fFc(a,b){gFc.call(this,a,false);dFc(this,b)}
function hFc(a){gFc.call(this,'GWT',true);dFc(this,a)}
function T1b(a){this.c=a;this.b=YNb(this.c.a)}
function mEc(a,b){return tEc(a,b,a.a.b)}
function Pb(a,b){_b((ke(),fe),a,gmb(GIb,P4c,134,[(uVc(),b?tVc:sVc)]))}
function dFc(a,b){a.d=b;!!a.c&&HEc(a.c,a);if(b){Vr(b.cb,-1);Af();Pb(a.cb,true)}else{Af();Pb(a.cb,false)}}
function tEc(a,b,c){if(c<0||c>a.a.b){throw new lVc}a.o&&(oqc(),Sr(b.cb,Ndd,2));lEc(a,c,b.cb);P_c(a.a,c,b);return b}
function UNb(a){var b,c;b=qmb(a.a.je(jed),148);if(b==null){c=gmb(LIb,Q4c,1,['New','Open',ked,led,'Exit']);a.a.le(jed,c);return c}else{return b}}
function TNb(a){var b,c;b=qmb(a.a.je(ied),148);if(b==null){c=gmb(LIb,Q4c,1,['Undo','Redo','Cut','Copy','Paste']);a.a.le(ied,c);return c}else{return b}}
function XNb(a){var b,c;b=qmb(a.a.je(oed),148);if(b==null){c=gmb(LIb,Q4c,1,['Contents','Fortune Cookie','About GWT']);a.a.le(oed,c);return c}else{return b}}
function WNb(a){var b,c;b=qmb(a.a.je(ned),148);if(b==null){c=gmb(LIb,Q4c,1,['Download','Examples',uad,"GWT wit' the program"]);a.a.le(ned,c);return c}else{return b}}
function VNb(a){var b,c;b=qmb(a.a.je(med),148);if(b==null){c=gmb(LIb,Q4c,1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);a.a.le(med,c);return c}else{return b}}
function kFc(){var a;Ti(this,(oqc(),$doc.createElement(Tbd)));jj(this.cb,'gwt-MenuItemSeparator');a=$doc.createElement(P7c);pqc(this.cb,a);Tr(a,L7c,'menuSeparatorInner')}
function YNb(a){var b,c;b=qmb(a.a.je(ped),148);if(b==null){c=gmb(LIb,Q4c,1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);a.a.le(ped,c);return c}else{return b}}
function P1b(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new T1b(a);n=new IEc;n.b=true;yqc(n.cb,K7c,'500px');n.e=true;q=new JEc(true);p=VNb(a.a);for(k=0;k<p.length;++k){kEc(q,new eFc(p[k],o))}d=new JEc(true);d.e=true;kEc(n,new fFc('File',d));e=UNb(a.a);for(k=0;k<e.length;++k){if(k==3){mEc(d,new kFc);kEc(d,new fFc(e[3],q));mEc(d,new kFc)}else{kEc(d,new eFc(e[k],o))}}b=new JEc(true);kEc(n,new fFc('Edit',b));c=TNb(a.a);for(k=0;k<c.length;++k){kEc(b,new eFc(c[k],o))}f=new JEc(true);kEc(n,new hFc(f));g=WNb(a.a);for(k=0;k<g.length;++k){kEc(f,new eFc(g[k],o))}i=new JEc(true);mEc(n,new kFc);kEc(n,new fFc('Help',i));j=XNb(a.a);for(k=0;k<j.length;++k){kEc(i,new eFc(j[k],o))}PNc(n.cb,j7c,qed);GEc(n,qed);return n}
var qed='cwMenuBar',ied='cwMenuBarEditOptions',jed='cwMenuBarFileOptions',med='cwMenuBarFileRecents',ned='cwMenuBarGWTOptions',oed='cwMenuBarHelpOptions',ped='cwMenuBarPrompts';SJb(750,1,{},T1b);_.nc=function U1b(){frc(this.b[this.a]);this.a=(this.a+1)%this.b.length};_.a=0;SJb(751,1,D5c);_.lc=function Y1b(){BMb(this.b,P1b(this.a))};SJb(1149,102,S4c,IEc);SJb(1156,103,{99:1,104:1,118:1},eFc,fFc,hFc);SJb(1157,103,{99:1,105:1,118:1},kFc);var Qxb=PVc(Lcd,'CwMenuBar$1',750),IDb=PVc(Jcd,'MenuItemSeparator',1157);q6c(Jn)(7);