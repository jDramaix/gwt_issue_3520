function BDb(a){this.b=a}
function EDb(a){this.b=a}
function FBc(a){this.b=a}
function gBc(a,b){return a.d.oe(b)}
function jBc(a,b){if(a.b){BBc(b);ABc(b)}}
function LBc(a){this.d=a;this.c=a.b.c.b}
function CBc(a){DBc.call(this,a,null,null)}
function BBc(a){a.b.c=a.c;a.c.b=a.b;a.b=a.c=null}
function ABc(a){var b;b=a.d.c.c;a.c=b;a.b=a.d.c;b.b=a.d.c.c=a}
function DBc(a,b,c){this.d=a;wBc.call(this,b,c);this.b=this.c=null}
function KBc(a){if(a.c==a.d.b.c){throw new SBc}a.b=a.c;a.c=a.c.b;return a.b}
function hBc(a,b){var c;c=SV(a.d.re(b),155);if(c){jBc(a,c);return c.f}return null}
function iBc(a,b,c){var d,e,f;e=SV(a.d.re(b),155);if(!e){d=new DBc(a,b,c);a.d.te(b,d);ABc(d);return null}else{f=e.f;vBc(e,c);jBc(a,e);return f}}
function gkb(a){var b,c;b=SV(a.b.re(MNc),147);if(b==null){c=IV(lfb,rDc,1,['Bonjour le monde',NNc,ONc]);a.b.te(MNc,c);return c}else{return b}}
function kBc(){PAc.call(this);this.c=new CBc(this);this.d=new PAc;this.c.c=this.c;this.c.b=this.c}
function oDb(b){var c,d,e,f;e=tac(b.e,b.e.db.selectedIndex);c=SV(hBc(b.g,e),119);try{f=Bsc((GYb(),ns(b.f.db,aMc)));d=Bsc(ns(b.d.db,aMc));y_b(b.b,c,d,f)}catch(a){a=vfb(a);if(UV(a,143)){return}else throw ufb(a)}}
function mDb(a){var b,c,d,e;d=new y7b;a.f=new ldc;jj(a.f,PNc);bdc(a.f,'100');a.d=new ldc;jj(a.d,PNc);bdc(a.d,'60');a.e=new zac;p7b(d,0,0,'<b>Points \xE0 circuler:<\/b>');s7b(d,0,1,a.e);p7b(d,1,0,'<b>Bord du dessus:<\/b>');s7b(d,1,1,a.f);p7b(d,2,0,'<b>Bord gauche:<\/b>');s7b(d,2,1,a.d);for(c=Sxc(uJ(a.g));c.b.Ce();){b=SV(Yxc(c),1);uac(a.e,b)}Dj(a.e,new BDb(a),(Hy(),Hy(),Gy));e=new EDb(a);Dj(a.f,e,(uz(),uz(),tz));Dj(a.d,e,tz);return d}
function nDb(a){var b,c,d,e,f,g,i,j;a.g=new kBc;a.b=new A_b;fj(a.b,QNc,QNc);_i(a.b,RNc);j=gkb(a.c);i=new T4b('Hello World');t_b(a.b,i,10,20);iBc(a.g,j[0],i);c=new y0b('Cliquez-moi!');t_b(a.b,c,80,45);iBc(a.g,j[1],c);d=new b8b(2,3);GYb();ys(d.p,LIc,_Jc);for(e=0;e<3;++e){p7b(d,0,e,e+NFc);s7b(d,1,e,new PXb((dlb(),Ukb)))}t_b(a.b,d,60,100);iBc(a.g,j[2],d);b=new c4b;ck(b,a.b);g=new c4b;ck(g,mDb(a));f=new r9b;xs(f.f,lKc,10);o9b(f,g);o9b(f,b);return f}
var PNc='3em',MNc='cwAbsolutePanelWidgetNames';sgb(741,1,eEc);_.qc=function zDb(){Yib(this.c,nDb(this.b))};sgb(742,1,cEc,BDb);_.Kc=function CDb(a){pDb(this.b)};sgb(743,1,ODc,EDb);_.Nc=function FDb(a){oDb(this.b)};sgb(1330,1328,REc,kBc);_.Oh=function lBc(){this.d.Oh();this.c.c=this.c;this.c.b=this.c};_.oe=function mBc(a){return gBc(this,a)};_.pe=function nBc(a){var b;b=this.c.b;while(b!=this.c){if(jDc(b.f,a)){return true}b=b.b}return false};_.qe=function oBc(){return new FBc(this)};_.re=function pBc(a){return hBc(this,a)};_.te=function qBc(a,b){return iBc(this,a,b)};_.ue=function rBc(a){var b;b=SV(this.d.ue(a),155);if(b){BBc(b);return b.f}return null};_.ve=function sBc(){return this.d.ve()};_.b=false;sgb(1331,1332,{155:1,158:1},CBc,DBc);sgb(1333,369,TDc,FBc);_.ye=function GBc(a){var b,c,d;if(!UV(a,158)){return false}b=SV(a,158);c=b.Fe();if(gBc(this.b,c)){d=hBc(this.b,c);return jDc(b.Tc(),d)}return false};_.cc=function HBc(){return new LBc(this)};_.ve=function IBc(){return this.b.d.ve()};sgb(1334,1,{},LBc);_.Ce=function MBc(){return this.c!=this.d.b.c};_.De=function NBc(){return KBc(this)};_.Ee=function OBc(){if(!this.b){throw new Hsc('No current entry')}BBc(this.b);this.d.b.d.ue(this.b.e);this.b=null};var R4=osc(cLc,'CwAbsolutePanel$3',742),S4=osc(cLc,'CwAbsolutePanel$4',743),neb=osc(pLc,'LinkedHashMap',1330),keb=osc(pLc,'LinkedHashMap$ChainEntry',1331),meb=osc(pLc,'LinkedHashMap$EntrySet',1333),leb=osc(pLc,'LinkedHashMap$EntrySet$EntryIterator',1334);TEc(Vn)(21);