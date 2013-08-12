function pFc(){qFc.call(this,false)}
function NFc(a,b){PFc.call(this,a,false);this.c=b}
function OFc(a,b){PFc.call(this,a,false);MFc(this,b)}
function QFc(a){PFc.call(this,'GWT',true);MFc(this,a)}
function A2b(a){this.d=a;this.c=FOb(this.d.b)}
function UEc(a,b){return aFc(a,b,a.b.c)}
function _b(a,b){lc((we(),re),a,Mmb(sJb,y5c,133,[(bWc(),b?aWc:_Vc)]))}
function MFc(a,b){a.e=b;!!a.d&&oFc(a.d,a);if(b){As((fCc(),b.db),-1);Mf();_b(a.db,true)}else{Mf();_b(a.db,false)}}
function aFc(a,b,c){if(c<0||c>a.b.c){throw new UVc}a.p&&(Sqc(),xs(b.db,Hed,2));TEc(a,c,b.db);x0c(a.b,c,b);return b}
function BOb(a){var b,c;b=Wmb(a.b.re(dfd),147);if(b==null){c=Mmb(xJb,z5c,1,['New','Open',efd,ffd,'Exit']);a.b.te(dfd,c);return c}else{return b}}
function AOb(a){var b,c;b=Wmb(a.b.re(cfd),147);if(b==null){c=Mmb(xJb,z5c,1,['Undo','Redo','Cut','Copy','Paste']);a.b.te(cfd,c);return c}else{return b}}
function EOb(a){var b,c;b=Wmb(a.b.re(ifd),147);if(b==null){c=Mmb(xJb,z5c,1,['Contents','Fortune Cookie','About GWT']);a.b.te(ifd,c);return c}else{return b}}
function DOb(a){var b,c;b=Wmb(a.b.re(hfd),147);if(b==null){c=Mmb(xJb,z5c,1,['Download','Examples',nbd,"GWT wit' the program"]);a.b.te(hfd,c);return c}else{return b}}
function COb(a){var b,c;b=Wmb(a.b.re(gfd),147);if(b==null){c=Mmb(xJb,z5c,1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);a.b.te(gfd,c);return c}else{return b}}
function TFc(){var a;dj(this,(Sqc(),$doc.createElement(Ncd)));vj(this.db,'gwt-MenuItemSeparator');a=$doc.createElement(z8c);Tqc(this.db,a);ys(a,v8c,'menuSeparatorInner')}
function FOb(a){var b,c;b=Wmb(a.b.re(jfd),147);if(b==null){c=Mmb(xJb,z5c,1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);a.b.te(jfd,c);return c}else{return b}}
function w2b(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new A2b(a);n=new pFc;n.c=true;arc(n.db,u8c,'500px');n.f=true;q=new qFc(true);p=COb(a.b);for(k=0;k<p.length;++k){SEc(q,new NFc(p[k],o))}d=new qFc(true);d.f=true;SEc(n,new OFc('File',d));e=BOb(a.b);for(k=0;k<e.length;++k){if(k==3){UEc(d,new TFc);SEc(d,new OFc(e[3],q));UEc(d,new TFc)}else{SEc(d,new NFc(e[k],o))}}b=new qFc(true);SEc(n,new OFc('Edit',b));c=AOb(a.b);for(k=0;k<c.length;++k){SEc(b,new NFc(c[k],o))}f=new qFc(true);SEc(n,new QFc(f));g=DOb(a.b);for(k=0;k<g.length;++k){SEc(f,new NFc(g[k],o))}i=new qFc(true);UEc(n,new TFc);SEc(n,new OFc('Help',i));j=EOb(a.b);for(k=0;k<j.length;++k){SEc(i,new NFc(j[k],o))}rOc(n.db,V7c,kfd);nFc(n,kfd);return n}
var kfd='cwMenuBar',cfd='cwMenuBarEditOptions',dfd='cwMenuBarFileOptions',gfd='cwMenuBarFileRecents',hfd='cwMenuBarGWTOptions',ifd='cwMenuBarHelpOptions',jfd='cwMenuBarPrompts';EKb(751,1,{},A2b);_.sc=function B2b(){Lrc(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.b=0;EKb(752,1,m6c);_.qc=function F2b(){iNb(this.c,w2b(this.b))};EKb(1149,104,B5c,pFc);EKb(1156,105,{98:1,103:1,117:1},NFc,OFc,QFc);EKb(1157,105,{98:1,104:1,117:1},TFc);var Ayb=wWc(Fdd,'CwMenuBar$1',751),sEb=wWc(Ddd,'MenuItemSeparator',1157);_6c(Vn)(7);