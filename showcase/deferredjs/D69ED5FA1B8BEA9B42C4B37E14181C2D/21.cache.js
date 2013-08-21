function BDb(a){this.b=a}
function EDb(a){this.b=a}
function EBc(a){this.b=a}
function fBc(a,b){return a.d.oe(b)}
function iBc(a,b){if(a.b){ABc(b);zBc(b)}}
function KBc(a){this.d=a;this.c=a.b.c.b}
function BBc(a){CBc.call(this,a,null,null)}
function ABc(a){a.b.c=a.c;a.c.b=a.b;a.b=a.c=null}
function zBc(a){var b;b=a.d.c.c;a.c=b;a.b=a.d.c;b.b=a.d.c.c=a}
function CBc(a,b,c){this.d=a;vBc.call(this,b,c);this.b=this.c=null}
function gBc(a,b){var c;c=SV(a.d.re(b),155);if(c){iBc(a,c);return c.f}return null}
function JBc(a){if(a.c==a.d.b.c){throw new RBc}a.b=a.c;a.c=a.c.b;return a.b}
function jBc(){OAc.call(this);this.c=new BBc(this);this.d=new OAc;this.c.c=this.c;this.c.b=this.c}
function gkb(a){var b,c;b=SV(a.b.re(LNc),147);if(b==null){c=IV(lfb,qDc,1,['Bonjour le monde',MNc,NNc]);a.b.te(LNc,c);return c}else{return b}}
function hBc(a,b,c){var d,e,f;e=SV(a.d.re(b),155);if(!e){d=new CBc(a,b,c);a.d.te(b,d);zBc(d);return null}else{f=e.f;uBc(e,c);iBc(a,e);return f}}
function oDb(b){var c,d,e,f;e=sac(b.e,b.e.db.selectedIndex);c=SV(gBc(b.g,e),119);try{f=Asc((GYb(),ns(b.f.db,_Lc)));d=Asc(ns(b.d.db,_Lc));y_b(b.b,c,d,f)}catch(a){a=vfb(a);if(UV(a,143)){return}else throw ufb(a)}}
function mDb(a){var b,c,d,e;d=new x7b;a.f=new kdc;jj(a.f,ONc);adc(a.f,'100');a.d=new kdc;jj(a.d,ONc);adc(a.d,'60');a.e=new yac;o7b(d,0,0,'<b>Points \xE0 circuler:<\/b>');r7b(d,0,1,a.e);o7b(d,1,0,'<b>Bord du dessus:<\/b>');r7b(d,1,1,a.f);o7b(d,2,0,'<b>Bord gauche:<\/b>');r7b(d,2,1,a.d);for(c=Rxc(uJ(a.g));c.b.Ce();){b=SV(Xxc(c),1);tac(a.e,b)}Dj(a.e,new BDb(a),(Hy(),Hy(),Gy));e=new EDb(a);Dj(a.f,e,(uz(),uz(),tz));Dj(a.d,e,tz);return d}
function nDb(a){var b,c,d,e,f,g,i,j;a.g=new jBc;a.b=new A_b;fj(a.b,PNc,PNc);_i(a.b,QNc);j=gkb(a.c);i=new T4b('Hello World');t_b(a.b,i,10,20);hBc(a.g,j[0],i);c=new y0b('Cliquez-moi!');t_b(a.b,c,80,45);hBc(a.g,j[1],c);d=new a8b(2,3);GYb();ys(d.p,KIc,$Jc);for(e=0;e<3;++e){o7b(d,0,e,e+MFc);r7b(d,1,e,new PXb((dlb(),Ukb)))}t_b(a.b,d,60,100);hBc(a.g,j[2],d);b=new c4b;ck(b,a.b);g=new c4b;ck(g,mDb(a));f=new q9b;xs(f.f,kKc,10);n9b(f,g);n9b(f,b);return f}
var ONc='3em',LNc='cwAbsolutePanelWidgetNames';sgb(741,1,dEc);_.qc=function zDb(){Yib(this.c,nDb(this.b))};sgb(742,1,bEc,BDb);_.Kc=function CDb(a){pDb(this.b)};sgb(743,1,NDc,EDb);_.Nc=function FDb(a){oDb(this.b)};sgb(1330,1328,QEc,jBc);_.Oh=function kBc(){this.d.Oh();this.c.c=this.c;this.c.b=this.c};_.oe=function lBc(a){return fBc(this,a)};_.pe=function mBc(a){var b;b=this.c.b;while(b!=this.c){if(iDc(b.f,a)){return true}b=b.b}return false};_.qe=function nBc(){return new EBc(this)};_.re=function oBc(a){return gBc(this,a)};_.te=function pBc(a,b){return hBc(this,a,b)};_.ue=function qBc(a){var b;b=SV(this.d.ue(a),155);if(b){ABc(b);return b.f}return null};_.ve=function rBc(){return this.d.ve()};_.b=false;sgb(1331,1332,{155:1,158:1},BBc,CBc);sgb(1333,369,SDc,EBc);_.ye=function FBc(a){var b,c,d;if(!UV(a,158)){return false}b=SV(a,158);c=b.Fe();if(fBc(this.b,c)){d=gBc(this.b,c);return iDc(b.Tc(),d)}return false};_.cc=function GBc(){return new KBc(this)};_.ve=function HBc(){return this.b.d.ve()};sgb(1334,1,{},KBc);_.Ce=function LBc(){return this.c!=this.d.b.c};_.De=function MBc(){return JBc(this)};_.Ee=function NBc(){if(!this.b){throw new Gsc('No current entry')}ABc(this.b);this.d.b.d.ue(this.b.e);this.b=null};var R4=nsc(bLc,'CwAbsolutePanel$3',742),S4=nsc(bLc,'CwAbsolutePanel$4',743),neb=nsc(oLc,'LinkedHashMap',1330),keb=nsc(oLc,'LinkedHashMap$ChainEntry',1331),meb=nsc(oLc,'LinkedHashMap$EntrySet',1333),leb=nsc(oLc,'LinkedHashMap$EntrySet$EntryIterator',1334);SEc(Vn)(21);