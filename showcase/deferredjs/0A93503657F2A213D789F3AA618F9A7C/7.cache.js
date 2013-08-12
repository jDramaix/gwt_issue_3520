function YEc(){ZEc.call(this,false)}
function uFc(a,b){wFc.call(this,a,false);this.c=b}
function vFc(a,b){wFc.call(this,a,false);tFc(this,b)}
function xFc(a){wFc.call(this,'GWT',true);tFc(this,a)}
function h2b(a){this.d=a;this.c=mOb(this.d.b)}
function CEc(a,b){return JEc(a,b,a.b.c)}
function $b(a,b){kc((ve(),qe),a,zmb(_Ib,a5c,133,[(GVc(),b?FVc:EVc)]))}
function tFc(a,b){a.e=b;!!a.d&&XEc(a.d,a);if(b){gs(b.db,-1);Lf();$b(a.db,true)}else{Lf();$b(a.db,false)}}
function JEc(a,b,c){if(c<0||c>a.b.c){throw new xVc}a.p&&(Cqc(),ds(b.db,ied,2));BEc(a,c,b.db);__c(a.b,c,b);return b}
function iOb(a){var b,c;b=Jmb(a.b.ne(Ged),147);if(b==null){c=zmb(eJb,b5c,1,['New','Open',Hed,Ied,'Exit']);a.b.pe(Ged,c);return c}else{return b}}
function hOb(a){var b,c;b=Jmb(a.b.ne(Fed),147);if(b==null){c=zmb(eJb,b5c,1,['Undo','Redo','Cut','Copy','Paste']);a.b.pe(Fed,c);return c}else{return b}}
function lOb(a){var b,c;b=Jmb(a.b.ne(Led),147);if(b==null){c=zmb(eJb,b5c,1,['Contents','Fortune Cookie','About GWT']);a.b.pe(Led,c);return c}else{return b}}
function kOb(a){var b,c;b=Jmb(a.b.ne(Ked),147);if(b==null){c=zmb(eJb,b5c,1,['Download','Examples',Jad,"GWT wit' the program"]);a.b.pe(Ked,c);return c}else{return b}}
function jOb(a){var b,c;b=Jmb(a.b.ne(Jed),147);if(b==null){c=zmb(eJb,b5c,1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);a.b.pe(Jed,c);return c}else{return b}}
function AFc(){var a;cj(this,(Cqc(),$doc.createElement(ocd)));uj(this.db,'gwt-MenuItemSeparator');a=$doc.createElement(a8c);Dqc(this.db,a);es(a,Y7c,'menuSeparatorInner')}
function mOb(a){var b,c;b=Jmb(a.b.ne(Med),147);if(b==null){c=zmb(eJb,b5c,1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);a.b.pe(Med,c);return c}else{return b}}
function d2b(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new h2b(a);n=new YEc;n.c=true;Mqc(n.db,X7c,'500px');n.f=true;q=new ZEc(true);p=jOb(a.b);for(k=0;k<p.length;++k){AEc(q,new uFc(p[k],o))}d=new ZEc(true);d.f=true;AEc(n,new vFc('File',d));e=iOb(a.b);for(k=0;k<e.length;++k){if(k==3){CEc(d,new AFc);AEc(d,new vFc(e[3],q));CEc(d,new AFc)}else{AEc(d,new uFc(e[k],o))}}b=new ZEc(true);AEc(n,new vFc('Edit',b));c=hOb(a.b);for(k=0;k<c.length;++k){AEc(b,new uFc(c[k],o))}f=new ZEc(true);AEc(n,new xFc(f));g=kOb(a.b);for(k=0;k<g.length;++k){AEc(f,new uFc(g[k],o))}i=new ZEc(true);CEc(n,new AFc);AEc(n,new vFc('Help',i));j=lOb(a.b);for(k=0;k<j.length;++k){AEc(i,new uFc(j[k],o))}$Nc(n.db,w7c,Ned);WEc(n,Ned);return n}
var Ned='cwMenuBar',Fed='cwMenuBarEditOptions',Ged='cwMenuBarFileOptions',Jed='cwMenuBarFileRecents',Ked='cwMenuBarGWTOptions',Led='cwMenuBarHelpOptions',Med='cwMenuBarPrompts';lKb(747,1,{},h2b);_.sc=function i2b(){vrc(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.b=0;lKb(748,1,Q5c);_.qc=function m2b(){RMb(this.c,d2b(this.b))};lKb(1144,104,d5c,YEc);lKb(1151,105,{98:1,103:1,117:1},uFc,vFc,xFc);lKb(1152,105,{98:1,104:1,117:1},AFc);var jyb=_Vc(gdd,'CwMenuBar$1',747),bEb=_Vc(edd,'MenuItemSeparator',1152);D6c(Vn)(7);