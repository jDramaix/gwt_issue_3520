function JEc(){KEc.call(this,false)}
function fFc(a,b){hFc.call(this,a,false);this.b=b}
function gFc(a,b){hFc.call(this,a,false);eFc(this,b)}
function iFc(a){hFc.call(this,'GWT',true);eFc(this,a)}
function T1b(a){this.c=a;this.b=YNb(this.c.a)}
function nEc(a,b){return uEc(a,b,a.a.b)}
function Pb(a,b){_b((ke(),fe),a,gmb(GIb,Q4c,134,[(vVc(),b?uVc:tVc)]))}
function eFc(a,b){a.d=b;!!a.c&&IEc(a.c,a);if(b){Vr(b.cb,-1);Af();Pb(a.cb,true)}else{Af();Pb(a.cb,false)}}
function uEc(a,b,c){if(c<0||c>a.a.b){throw new mVc}a.o&&(oqc(),Sr(b.cb,Odd,2));mEc(a,c,b.cb);Q_c(a.a,c,b);return b}
function UNb(a){var b,c;b=qmb(a.a.je(ked),148);if(b==null){c=gmb(LIb,R4c,1,['New','Open',led,med,'Exit']);a.a.le(ked,c);return c}else{return b}}
function TNb(a){var b,c;b=qmb(a.a.je(jed),148);if(b==null){c=gmb(LIb,R4c,1,['Undo','Redo','Cut','Copy','Paste']);a.a.le(jed,c);return c}else{return b}}
function XNb(a){var b,c;b=qmb(a.a.je(ped),148);if(b==null){c=gmb(LIb,R4c,1,['Contents','Fortune Cookie','About GWT']);a.a.le(ped,c);return c}else{return b}}
function WNb(a){var b,c;b=qmb(a.a.je(oed),148);if(b==null){c=gmb(LIb,R4c,1,['Download','Examples',vad,"GWT wit' the program"]);a.a.le(oed,c);return c}else{return b}}
function VNb(a){var b,c;b=qmb(a.a.je(ned),148);if(b==null){c=gmb(LIb,R4c,1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);a.a.le(ned,c);return c}else{return b}}
function lFc(){var a;Ti(this,(oqc(),$doc.createElement(Ubd)));jj(this.cb,'gwt-MenuItemSeparator');a=$doc.createElement(Q7c);pqc(this.cb,a);Tr(a,M7c,'menuSeparatorInner')}
function YNb(a){var b,c;b=qmb(a.a.je(qed),148);if(b==null){c=gmb(LIb,R4c,1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);a.a.le(qed,c);return c}else{return b}}
function P1b(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new T1b(a);n=new JEc;n.b=true;yqc(n.cb,L7c,'500px');n.e=true;q=new KEc(true);p=VNb(a.a);for(k=0;k<p.length;++k){lEc(q,new fFc(p[k],o))}d=new KEc(true);d.e=true;lEc(n,new gFc('File',d));e=UNb(a.a);for(k=0;k<e.length;++k){if(k==3){nEc(d,new lFc);lEc(d,new gFc(e[3],q));nEc(d,new lFc)}else{lEc(d,new fFc(e[k],o))}}b=new KEc(true);lEc(n,new gFc('Edit',b));c=TNb(a.a);for(k=0;k<c.length;++k){lEc(b,new fFc(c[k],o))}f=new KEc(true);lEc(n,new iFc(f));g=WNb(a.a);for(k=0;k<g.length;++k){lEc(f,new fFc(g[k],o))}i=new KEc(true);nEc(n,new lFc);lEc(n,new gFc('Help',i));j=XNb(a.a);for(k=0;k<j.length;++k){lEc(i,new fFc(j[k],o))}QNc(n.cb,k7c,red);HEc(n,red);return n}
var red='cwMenuBar',jed='cwMenuBarEditOptions',ked='cwMenuBarFileOptions',ned='cwMenuBarFileRecents',oed='cwMenuBarGWTOptions',ped='cwMenuBarHelpOptions',qed='cwMenuBarPrompts';SJb(750,1,{},T1b);_.nc=function U1b(){frc(this.b[this.a]);this.a=(this.a+1)%this.b.length};_.a=0;SJb(751,1,E5c);_.lc=function Y1b(){BMb(this.b,P1b(this.a))};SJb(1149,102,T4c,JEc);SJb(1156,103,{99:1,104:1,118:1},fFc,gFc,iFc);SJb(1157,103,{99:1,105:1,118:1},lFc);var Qxb=QVc(Mcd,'CwMenuBar$1',750),IDb=QVc(Kcd,'MenuItemSeparator',1157);r6c(Jn)(7);