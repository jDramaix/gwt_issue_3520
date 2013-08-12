function BDb(a){this.b=a}
function EDb(a){this.b=a}
function BBc(a){this.b=a}
function cBc(a,b){return a.d.oe(b)}
function fBc(a,b){if(a.b){xBc(b);wBc(b)}}
function HBc(a){this.d=a;this.c=a.b.c.b}
function yBc(a){zBc.call(this,a,null,null)}
function xBc(a){a.b.c=a.c;a.c.b=a.b;a.b=a.c=null}
function wBc(a){var b;b=a.d.c.c;a.c=b;a.b=a.d.c;b.b=a.d.c.c=a}
function zBc(a,b,c){this.d=a;sBc.call(this,b,c);this.b=this.c=null}
function GBc(a){if(a.c==a.d.b.c){throw new OBc}a.b=a.c;a.c=a.c.b;return a.b}
function dBc(a,b){var c;c=SV(a.d.re(b),155);if(c){fBc(a,c);return c.f}return null}
function eBc(a,b,c){var d,e,f;e=SV(a.d.re(b),155);if(!e){d=new zBc(a,b,c);a.d.te(b,d);wBc(d);return null}else{f=e.f;rBc(e,c);fBc(a,e);return f}}
function gkb(a){var b,c;b=SV(a.b.re(INc),147);if(b==null){c=IV(lfb,nDc,1,['Bonjour le monde',JNc,KNc]);a.b.te(INc,c);return c}else{return b}}
function gBc(){LAc.call(this);this.c=new yBc(this);this.d=new LAc;this.c.c=this.c;this.c.b=this.c}
function oDb(b){var c,d,e,f;e=sac(b.e,b.e.db.selectedIndex);c=SV(dBc(b.g,e),119);try{f=xsc((GYb(),ns(b.f.db,YLc)));d=xsc(ns(b.d.db,YLc));y_b(b.b,c,d,f)}catch(a){a=vfb(a);if(UV(a,143)){return}else throw ufb(a)}}
function mDb(a){var b,c,d,e;d=new x7b;a.f=new kdc;jj(a.f,LNc);adc(a.f,'100');a.d=new kdc;jj(a.d,LNc);adc(a.d,'60');a.e=new yac;o7b(d,0,0,'<b>Points \xE0 circuler:<\/b>');r7b(d,0,1,a.e);o7b(d,1,0,'<b>Bord du dessus:<\/b>');r7b(d,1,1,a.f);o7b(d,2,0,'<b>Bord gauche:<\/b>');r7b(d,2,1,a.d);for(c=Oxc(uJ(a.g));c.b.Ce();){b=SV(Uxc(c),1);tac(a.e,b)}Dj(a.e,new BDb(a),(Hy(),Hy(),Gy));e=new EDb(a);Dj(a.f,e,(uz(),uz(),tz));Dj(a.d,e,tz);return d}
function nDb(a){var b,c,d,e,f,g,i,j;a.g=new gBc;a.b=new A_b;fj(a.b,MNc,MNc);_i(a.b,NNc);j=gkb(a.c);i=new T4b('Hello World');t_b(a.b,i,10,20);eBc(a.g,j[0],i);c=new y0b('Cliquez-moi!');t_b(a.b,c,80,45);eBc(a.g,j[1],c);d=new a8b(2,3);GYb();ys(d.p,HIc,XJc);for(e=0;e<3;++e){o7b(d,0,e,e+JFc);r7b(d,1,e,new PXb((dlb(),Ukb)))}t_b(a.b,d,60,100);eBc(a.g,j[2],d);b=new c4b;ck(b,a.b);g=new c4b;ck(g,mDb(a));f=new q9b;xs(f.f,hKc,10);n9b(f,g);n9b(f,b);return f}
var LNc='3em',INc='cwAbsolutePanelWidgetNames';sgb(741,1,aEc);_.qc=function zDb(){Yib(this.c,nDb(this.b))};sgb(742,1,$Dc,BDb);_.Kc=function CDb(a){pDb(this.b)};sgb(743,1,KDc,EDb);_.Nc=function FDb(a){oDb(this.b)};sgb(1330,1328,NEc,gBc);_.Oh=function hBc(){this.d.Oh();this.c.c=this.c;this.c.b=this.c};_.oe=function iBc(a){return cBc(this,a)};_.pe=function jBc(a){var b;b=this.c.b;while(b!=this.c){if(fDc(b.f,a)){return true}b=b.b}return false};_.qe=function kBc(){return new BBc(this)};_.re=function lBc(a){return dBc(this,a)};_.te=function mBc(a,b){return eBc(this,a,b)};_.ue=function nBc(a){var b;b=SV(this.d.ue(a),155);if(b){xBc(b);return b.f}return null};_.ve=function oBc(){return this.d.ve()};_.b=false;sgb(1331,1332,{155:1,158:1},yBc,zBc);sgb(1333,369,PDc,BBc);_.ye=function CBc(a){var b,c,d;if(!UV(a,158)){return false}b=SV(a,158);c=b.Fe();if(cBc(this.b,c)){d=dBc(this.b,c);return fDc(b.Tc(),d)}return false};_.cc=function DBc(){return new HBc(this)};_.ve=function EBc(){return this.b.d.ve()};sgb(1334,1,{},HBc);_.Ce=function IBc(){return this.c!=this.d.b.c};_.De=function JBc(){return GBc(this)};_.Ee=function KBc(){if(!this.b){throw new Dsc('No current entry')}xBc(this.b);this.d.b.d.ue(this.b.e);this.b=null};var R4=ksc($Kc,'CwAbsolutePanel$3',742),S4=ksc($Kc,'CwAbsolutePanel$4',743),neb=ksc(lLc,'LinkedHashMap',1330),keb=ksc(lLc,'LinkedHashMap$ChainEntry',1331),meb=ksc(lLc,'LinkedHashMap$EntrySet',1333),leb=ksc(lLc,'LinkedHashMap$EntrySet$EntryIterator',1334);PEc(Vn)(21);