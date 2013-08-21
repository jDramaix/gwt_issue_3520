function ZEc(){$Ec.call(this,false)}
function vFc(a,b){xFc.call(this,a,false);this.c=b}
function wFc(a,b){xFc.call(this,a,false);uFc(this,b)}
function yFc(a){xFc.call(this,'GWT',true);uFc(this,a)}
function h2b(a){this.d=a;this.c=mOb(this.d.b)}
function DEc(a,b){return KEc(a,b,a.b.c)}
function $b(a,b){kc((ve(),qe),a,zmb(_Ib,e5c,133,[(KVc(),b?JVc:IVc)]))}
function uFc(a,b){a.e=b;!!a.d&&YEc(a.d,a);if(b){gs(b.db,-1);Lf();$b(a.db,true)}else{Lf();$b(a.db,false)}}
function KEc(a,b,c){if(c<0||c>a.b.c){throw new BVc}a.p&&(Cqc(),ds(b.db,med,2));CEc(a,c,b.db);d0c(a.b,c,b);return b}
function iOb(a){var b,c;b=Jmb(a.b.ne(Ked),147);if(b==null){c=zmb(eJb,f5c,1,['New','Open',Led,Med,'Exit']);a.b.pe(Ked,c);return c}else{return b}}
function hOb(a){var b,c;b=Jmb(a.b.ne(Jed),147);if(b==null){c=zmb(eJb,f5c,1,['Undo','Redo','Cut','Copy','Paste']);a.b.pe(Jed,c);return c}else{return b}}
function lOb(a){var b,c;b=Jmb(a.b.ne(Ped),147);if(b==null){c=zmb(eJb,f5c,1,['Contents','Fortune Cookie','About GWT']);a.b.pe(Ped,c);return c}else{return b}}
function kOb(a){var b,c;b=Jmb(a.b.ne(Oed),147);if(b==null){c=zmb(eJb,f5c,1,['Download','Examples',Nad,"GWT wit' the program"]);a.b.pe(Oed,c);return c}else{return b}}
function jOb(a){var b,c;b=Jmb(a.b.ne(Ned),147);if(b==null){c=zmb(eJb,f5c,1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);a.b.pe(Ned,c);return c}else{return b}}
function BFc(){var a;cj(this,(Cqc(),$doc.createElement(scd)));uj(this.db,'gwt-MenuItemSeparator');a=$doc.createElement(e8c);Dqc(this.db,a);es(a,a8c,'menuSeparatorInner')}
function mOb(a){var b,c;b=Jmb(a.b.ne(Qed),147);if(b==null){c=zmb(eJb,f5c,1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);a.b.pe(Qed,c);return c}else{return b}}
function d2b(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new h2b(a);n=new ZEc;n.c=true;Mqc(n.db,_7c,'500px');n.f=true;q=new $Ec(true);p=jOb(a.b);for(k=0;k<p.length;++k){BEc(q,new vFc(p[k],o))}d=new $Ec(true);d.f=true;BEc(n,new wFc('File',d));e=iOb(a.b);for(k=0;k<e.length;++k){if(k==3){DEc(d,new BFc);BEc(d,new wFc(e[3],q));DEc(d,new BFc)}else{BEc(d,new vFc(e[k],o))}}b=new $Ec(true);BEc(n,new wFc('Edit',b));c=hOb(a.b);for(k=0;k<c.length;++k){BEc(b,new vFc(c[k],o))}f=new $Ec(true);BEc(n,new yFc(f));g=kOb(a.b);for(k=0;k<g.length;++k){BEc(f,new vFc(g[k],o))}i=new $Ec(true);DEc(n,new BFc);BEc(n,new wFc('Help',i));j=lOb(a.b);for(k=0;k<j.length;++k){BEc(i,new vFc(j[k],o))}_Nc(n.db,A7c,Red);XEc(n,Red);return n}
var Red='cwMenuBar',Jed='cwMenuBarEditOptions',Ked='cwMenuBarFileOptions',Ned='cwMenuBarFileRecents',Oed='cwMenuBarGWTOptions',Ped='cwMenuBarHelpOptions',Qed='cwMenuBarPrompts';lKb(747,1,{},h2b);_.sc=function i2b(){vrc(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.b=0;lKb(748,1,U5c);_.qc=function m2b(){RMb(this.c,d2b(this.b))};lKb(1144,104,h5c,ZEc);lKb(1151,105,{98:1,103:1,117:1},vFc,wFc,yFc);lKb(1152,105,{98:1,104:1,117:1},BFc);var jyb=dWc(kdd,'CwMenuBar$1',747),bEb=dWc(idd,'MenuItemSeparator',1152);H6c(Vn)(7);