function bDb(a){this.a=a}
function eDb(a){this.a=a}
function bBc(a){this.a=a}
function hBc(a){this.c=a;this.b=a.a.b.a}
function $Ac(a){_Ac.call(this,a,null,null)}
function EAc(a,b){return a.c.ge(b)}
function HAc(a,b){if(a.a){ZAc(b);YAc(b)}}
function ZAc(a){a.a.b=a.b;a.b.a=a.a;a.a=a.b=null}
function YAc(a){var b;b=a.c.b.b;a.b=b;a.a=a.c.b;b.a=a.c.b.b=a}
function gBc(a){if(a.b==a.c.a.b){throw new oBc}a.a=a.b;a.b=a.b.a;return a.a}
function FAc(a,b){var c;c=wV(a.c.je(b),156);if(c){HAc(a,c);return c.e}return null}
function _Ac(a,b,c){this.c=a;UAc.call(this,b,c);this.a=this.b=null}
function IAc(){lAc.call(this);this.b=new $Ac(this);this.c=new lAc;this.b.b=this.b;this.b.a=this.b}
function Ijb(a){var b,c;b=wV(a.a.je(YMc),148);if(b==null){c=mV(Ieb,OCc,1,['Bonjour le monde',ZMc,$Mc]);a.a.le(YMc,c);return c}else{return b}}
function GAc(a,b,c){var d,e,f;e=wV(a.c.je(b),156);if(!e){d=new _Ac(a,b,c);a.c.le(b,d);YAc(d);return null}else{f=e.e;TAc(e,c);HAc(a,e);return f}}
function QCb(b){var c,d,e,f;e=X9b(b.d,b.d.cb.selectedIndex);c=wV(FAc(b.f,e),120);try{f=$rc((zYb(),Hr(b.e.cb,mLc)));d=$rc(Hr(b.c.cb,mLc));g_b(b.a,c,d,f)}catch(a){a=Seb(a);if(yV(a,144)){return}else throw Reb(a)}}
function OCb(a){var b,c,d,e;d=new c7b;a.e=new Occ;Zi(a.e,_Mc);Ecc(a.e,'100');a.c=new Occ;Zi(a.c,_Mc);Ecc(a.c,'60');a.d=new bac;V6b(d,0,0,'<b>Points \xE0 circuler:<\/b>');Y6b(d,0,1,a.d);V6b(d,1,0,'<b>Bord du dessus:<\/b>');Y6b(d,1,1,a.e);V6b(d,2,0,'<b>Bord gauche:<\/b>');Y6b(d,2,1,a.c);for(c=oxc($I(a.f));c.a.ue();){b=wV(uxc(c),1);Y9b(a.d,b)}qj(a.d,new bDb(a),(ky(),ky(),jy));e=new eDb(a);qj(a.e,e,(Zy(),Zy(),Yy));qj(a.c,e,Yy);return d}
function PCb(a){var b,c,d,e,f,g,i,j;a.f=new IAc;a.a=new i_b;Vi(a.a,aNc,aNc);Pi(a.a,bNc);j=Ijb(a.b);i=new y4b('Hello World');b_b(a.a,i,10,20);GAc(a.f,j[0],i);c=new d0b('Cliquez-moi!');b_b(a.a,c,80,45);GAc(a.f,j[1],c);d=new F7b(2,3);zYb();Sr(d.o,$Hc,nJc);for(e=0;e<3;++e){V6b(d,0,e,e+hFc);Y6b(d,1,e,new IXb((Fkb(),ukb)))}b_b(a.a,d,60,100);GAc(a.f,j[2],d);b=new J3b;Rj(b,a.a);g=new J3b;Rj(g,OCb(a));f=new V8b;Rr(f.e,wJc,10);S8b(f,g);S8b(f,b);return f}
var _Mc='3em',YMc='cwAbsolutePanelWidgetNames';Pfb(739,1,BDc);_.lc=function _Cb(){yib(this.b,PCb(this.a))};Pfb(740,1,zDc,bDb);_.Cc=function cDb(a){RCb(this.a)};Pfb(741,1,jDc,eDb);_.Fc=function fDb(a){QCb(this.a)};Pfb(1329,1327,mEc,IAc);_.Gh=function JAc(){this.c.Gh();this.b.b=this.b;this.b.a=this.b};_.ge=function KAc(a){return EAc(this,a)};_.he=function LAc(a){var b;b=this.b.a;while(b!=this.b){if(HCc(b.e,a)){return true}b=b.a}return false};_.ie=function MAc(){return new bBc(this)};_.je=function NAc(a){return FAc(this,a)};_.le=function OAc(a,b){return GAc(this,a,b)};_.me=function PAc(a){var b;b=wV(this.c.me(a),156);if(b){ZAc(b);return b.e}return null};_.ne=function QAc(){return this.c.ne()};_.a=false;Pfb(1330,1331,{156:1,159:1},$Ac,_Ac);Pfb(1332,366,oDc,bBc);_.qe=function cBc(a){var b,c,d;if(!yV(a,159)){return false}b=wV(a,159);c=b.xe();if(EAc(this.a,c)){d=FAc(this.a,c);return HCc(b.Lc(),d)}return false};_.Zb=function dBc(){return new hBc(this)};_.ne=function eBc(){return this.a.c.ne()};Pfb(1333,1,{},hBc);_.ue=function iBc(){return this.b!=this.c.a.b};_.ve=function jBc(){return gBc(this)};_.we=function kBc(){if(!this.a){throw new esc('No current entry')}ZAc(this.a);this.c.a.c.me(this.a.d);this.a=null};var p4=Nrc(oKc,'CwAbsolutePanel$3',740),q4=Nrc(oKc,'CwAbsolutePanel$4',741),Kdb=Nrc(BKc,'LinkedHashMap',1329),Hdb=Nrc(BKc,'LinkedHashMap$ChainEntry',1330),Jdb=Nrc(BKc,'LinkedHashMap$EntrySet',1332),Idb=Nrc(BKc,'LinkedHashMap$EntrySet$EntryIterator',1333);oEc(In)(21);