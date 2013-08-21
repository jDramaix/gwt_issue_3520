function qFc(){rFc.call(this,false)}
function OFc(a,b){QFc.call(this,a,false);this.c=b}
function PFc(a,b){QFc.call(this,a,false);NFc(this,b)}
function RFc(a){QFc.call(this,'GWT',true);NFc(this,a)}
function A2b(a){this.d=a;this.c=FOb(this.d.b)}
function VEc(a,b){return bFc(a,b,a.b.c)}
function _b(a,b){lc((we(),re),a,Mmb(sJb,C5c,133,[(fWc(),b?eWc:dWc)]))}
function NFc(a,b){a.e=b;!!a.d&&pFc(a.d,a);if(b){As((gCc(),b.db),-1);Mf();_b(a.db,true)}else{Mf();_b(a.db,false)}}
function bFc(a,b,c){if(c<0||c>a.b.c){throw new YVc}a.p&&(Sqc(),xs(b.db,Led,2));UEc(a,c,b.db);B0c(a.b,c,b);return b}
function BOb(a){var b,c;b=Wmb(a.b.re(hfd),147);if(b==null){c=Mmb(xJb,D5c,1,['New','Open',ifd,jfd,'Exit']);a.b.te(hfd,c);return c}else{return b}}
function AOb(a){var b,c;b=Wmb(a.b.re(gfd),147);if(b==null){c=Mmb(xJb,D5c,1,['Undo','Redo','Cut','Copy','Paste']);a.b.te(gfd,c);return c}else{return b}}
function EOb(a){var b,c;b=Wmb(a.b.re(mfd),147);if(b==null){c=Mmb(xJb,D5c,1,['Contents','Fortune Cookie','About GWT']);a.b.te(mfd,c);return c}else{return b}}
function DOb(a){var b,c;b=Wmb(a.b.re(lfd),147);if(b==null){c=Mmb(xJb,D5c,1,['Download','Examples',rbd,"GWT wit' the program"]);a.b.te(lfd,c);return c}else{return b}}
function COb(a){var b,c;b=Wmb(a.b.re(kfd),147);if(b==null){c=Mmb(xJb,D5c,1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);a.b.te(kfd,c);return c}else{return b}}
function UFc(){var a;dj(this,(Sqc(),$doc.createElement(Rcd)));vj(this.db,'gwt-MenuItemSeparator');a=$doc.createElement(D8c);Tqc(this.db,a);ys(a,z8c,'menuSeparatorInner')}
function FOb(a){var b,c;b=Wmb(a.b.re(nfd),147);if(b==null){c=Mmb(xJb,D5c,1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);a.b.te(nfd,c);return c}else{return b}}
function w2b(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new A2b(a);n=new qFc;n.c=true;arc(n.db,y8c,'500px');n.f=true;q=new rFc(true);p=COb(a.b);for(k=0;k<p.length;++k){TEc(q,new OFc(p[k],o))}d=new rFc(true);d.f=true;TEc(n,new PFc('File',d));e=BOb(a.b);for(k=0;k<e.length;++k){if(k==3){VEc(d,new UFc);TEc(d,new PFc(e[3],q));VEc(d,new UFc)}else{TEc(d,new OFc(e[k],o))}}b=new rFc(true);TEc(n,new PFc('Edit',b));c=AOb(a.b);for(k=0;k<c.length;++k){TEc(b,new OFc(c[k],o))}f=new rFc(true);TEc(n,new RFc(f));g=DOb(a.b);for(k=0;k<g.length;++k){TEc(f,new OFc(g[k],o))}i=new rFc(true);VEc(n,new UFc);TEc(n,new PFc('Help',i));j=EOb(a.b);for(k=0;k<j.length;++k){TEc(i,new OFc(j[k],o))}sOc(n.db,Z7c,ofd);oFc(n,ofd);return n}
var ofd='cwMenuBar',gfd='cwMenuBarEditOptions',hfd='cwMenuBarFileOptions',kfd='cwMenuBarFileRecents',lfd='cwMenuBarGWTOptions',mfd='cwMenuBarHelpOptions',nfd='cwMenuBarPrompts';EKb(751,1,{},A2b);_.sc=function B2b(){Lrc(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.b=0;EKb(752,1,q6c);_.qc=function F2b(){iNb(this.c,w2b(this.b))};EKb(1149,104,F5c,qFc);EKb(1156,105,{98:1,103:1,117:1},OFc,PFc,RFc);EKb(1157,105,{98:1,104:1,117:1},UFc);var Ayb=AWc(Jdd,'CwMenuBar$1',751),sEb=AWc(Hdd,'MenuItemSeparator',1157);d7c(Vn)(7);