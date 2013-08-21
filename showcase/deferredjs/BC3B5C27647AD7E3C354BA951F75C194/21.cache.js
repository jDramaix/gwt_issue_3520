function bDb(a){this.a=a}
function eDb(a){this.a=a}
function eBc(a){this.a=a}
function kBc(a){this.c=a;this.b=a.a.b.a}
function bBc(a){cBc.call(this,a,null,null)}
function HAc(a,b){return a.c.ge(b)}
function KAc(a,b){if(a.a){aBc(b);_Ac(b)}}
function aBc(a){a.a.b=a.b;a.b.a=a.a;a.a=a.b=null}
function _Ac(a){var b;b=a.c.b.b;a.b=b;a.a=a.c.b;b.a=a.c.b.b=a}
function jBc(a){if(a.b==a.c.a.b){throw new rBc}a.a=a.b;a.b=a.b.a;return a.a}
function cBc(a,b,c){this.c=a;XAc.call(this,b,c);this.a=this.b=null}
function IAc(a,b){var c;c=wV(a.c.je(b),156);if(c){KAc(a,c);return c.e}return null}
function LAc(){oAc.call(this);this.b=new bBc(this);this.c=new oAc;this.b.b=this.b;this.b.a=this.b}
function Ijb(a){var b,c;b=wV(a.a.je(_Mc),148);if(b==null){c=mV(Ieb,RCc,1,['Bonjour le monde',aNc,bNc]);a.a.le(_Mc,c);return c}else{return b}}
function JAc(a,b,c){var d,e,f;e=wV(a.c.je(b),156);if(!e){d=new cBc(a,b,c);a.c.le(b,d);_Ac(d);return null}else{f=e.e;WAc(e,c);KAc(a,e);return f}}
function QCb(b){var c,d,e,f;e=X9b(b.d,b.d.cb.selectedIndex);c=wV(IAc(b.f,e),120);try{f=bsc((zYb(),Hr(b.e.cb,pLc)));d=bsc(Hr(b.c.cb,pLc));g_b(b.a,c,d,f)}catch(a){a=Seb(a);if(yV(a,144)){return}else throw Reb(a)}}
function OCb(a){var b,c,d,e;d=new c7b;a.e=new Occ;Zi(a.e,cNc);Ecc(a.e,'100');a.c=new Occ;Zi(a.c,cNc);Ecc(a.c,'60');a.d=new bac;V6b(d,0,0,'<b>Points \xE0 circuler:<\/b>');Y6b(d,0,1,a.d);V6b(d,1,0,'<b>Bord du dessus:<\/b>');Y6b(d,1,1,a.e);V6b(d,2,0,'<b>Bord gauche:<\/b>');Y6b(d,2,1,a.c);for(c=rxc($I(a.f));c.a.ue();){b=wV(xxc(c),1);Y9b(a.d,b)}qj(a.d,new bDb(a),(ky(),ky(),jy));e=new eDb(a);qj(a.e,e,(Zy(),Zy(),Yy));qj(a.c,e,Yy);return d}
function PCb(a){var b,c,d,e,f,g,i,j;a.f=new LAc;a.a=new i_b;Vi(a.a,dNc,dNc);Pi(a.a,eNc);j=Ijb(a.b);i=new y4b('Hello World');b_b(a.a,i,10,20);JAc(a.f,j[0],i);c=new d0b('Cliquez-moi!');b_b(a.a,c,80,45);JAc(a.f,j[1],c);d=new F7b(2,3);zYb();Sr(d.o,bIc,qJc);for(e=0;e<3;++e){V6b(d,0,e,e+kFc);Y6b(d,1,e,new IXb((Fkb(),ukb)))}b_b(a.a,d,60,100);JAc(a.f,j[2],d);b=new J3b;Rj(b,a.a);g=new J3b;Rj(g,OCb(a));f=new V8b;Rr(f.e,zJc,10);S8b(f,g);S8b(f,b);return f}
var cNc='3em',_Mc='cwAbsolutePanelWidgetNames';Pfb(739,1,EDc);_.lc=function _Cb(){yib(this.b,PCb(this.a))};Pfb(740,1,CDc,bDb);_.Cc=function cDb(a){RCb(this.a)};Pfb(741,1,mDc,eDb);_.Fc=function fDb(a){QCb(this.a)};Pfb(1329,1327,pEc,LAc);_.Gh=function MAc(){this.c.Gh();this.b.b=this.b;this.b.a=this.b};_.ge=function NAc(a){return HAc(this,a)};_.he=function OAc(a){var b;b=this.b.a;while(b!=this.b){if(KCc(b.e,a)){return true}b=b.a}return false};_.ie=function PAc(){return new eBc(this)};_.je=function QAc(a){return IAc(this,a)};_.le=function RAc(a,b){return JAc(this,a,b)};_.me=function SAc(a){var b;b=wV(this.c.me(a),156);if(b){aBc(b);return b.e}return null};_.ne=function TAc(){return this.c.ne()};_.a=false;Pfb(1330,1331,{156:1,159:1},bBc,cBc);Pfb(1332,366,rDc,eBc);_.qe=function fBc(a){var b,c,d;if(!yV(a,159)){return false}b=wV(a,159);c=b.xe();if(HAc(this.a,c)){d=IAc(this.a,c);return KCc(b.Lc(),d)}return false};_.Zb=function gBc(){return new kBc(this)};_.ne=function hBc(){return this.a.c.ne()};Pfb(1333,1,{},kBc);_.ue=function lBc(){return this.b!=this.c.a.b};_.ve=function mBc(){return jBc(this)};_.we=function nBc(){if(!this.a){throw new hsc('No current entry')}aBc(this.a);this.c.a.c.me(this.a.d);this.a=null};var p4=Qrc(rKc,'CwAbsolutePanel$3',740),q4=Qrc(rKc,'CwAbsolutePanel$4',741),Kdb=Qrc(EKc,'LinkedHashMap',1329),Hdb=Qrc(EKc,'LinkedHashMap$ChainEntry',1330),Jdb=Qrc(EKc,'LinkedHashMap$EntrySet',1332),Idb=Qrc(EKc,'LinkedHashMap$EntrySet$EntryIterator',1333);rEc(In)(21);