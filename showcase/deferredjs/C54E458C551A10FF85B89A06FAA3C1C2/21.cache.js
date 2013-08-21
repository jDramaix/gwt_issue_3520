function bDb(a){this.a=a}
function eDb(a){this.a=a}
function fBc(a){this.a=a}
function lBc(a){this.c=a;this.b=a.a.b.a}
function cBc(a){dBc.call(this,a,null,null)}
function IAc(a,b){return a.c.ge(b)}
function LAc(a,b){if(a.a){bBc(b);aBc(b)}}
function bBc(a){a.a.b=a.b;a.b.a=a.a;a.a=a.b=null}
function aBc(a){var b;b=a.c.b.b;a.b=b;a.a=a.c.b;b.a=a.c.b.b=a}
function kBc(a){if(a.b==a.c.a.b){throw new sBc}a.a=a.b;a.b=a.b.a;return a.a}
function dBc(a,b,c){this.c=a;YAc.call(this,b,c);this.a=this.b=null}
function JAc(a,b){var c;c=wV(a.c.je(b),156);if(c){LAc(a,c);return c.e}return null}
function MAc(){pAc.call(this);this.b=new cBc(this);this.c=new pAc;this.b.b=this.b;this.b.a=this.b}
function Ijb(a){var b,c;b=wV(a.a.je(aNc),148);if(b==null){c=mV(Ieb,SCc,1,['Bonjour le monde',bNc,cNc]);a.a.le(aNc,c);return c}else{return b}}
function KAc(a,b,c){var d,e,f;e=wV(a.c.je(b),156);if(!e){d=new dBc(a,b,c);a.c.le(b,d);aBc(d);return null}else{f=e.e;XAc(e,c);LAc(a,e);return f}}
function QCb(b){var c,d,e,f;e=Y9b(b.d,b.d.cb.selectedIndex);c=wV(JAc(b.f,e),120);try{f=csc((zYb(),Hr(b.e.cb,qLc)));d=csc(Hr(b.c.cb,qLc));g_b(b.a,c,d,f)}catch(a){a=Seb(a);if(yV(a,144)){return}else throw Reb(a)}}
function OCb(a){var b,c,d,e;d=new d7b;a.e=new Pcc;Zi(a.e,dNc);Fcc(a.e,'100');a.c=new Pcc;Zi(a.c,dNc);Fcc(a.c,'60');a.d=new cac;W6b(d,0,0,'<b>Points \xE0 circuler:<\/b>');Z6b(d,0,1,a.d);W6b(d,1,0,'<b>Bord du dessus:<\/b>');Z6b(d,1,1,a.e);W6b(d,2,0,'<b>Bord gauche:<\/b>');Z6b(d,2,1,a.c);for(c=sxc($I(a.f));c.a.ue();){b=wV(yxc(c),1);Z9b(a.d,b)}qj(a.d,new bDb(a),(ky(),ky(),jy));e=new eDb(a);qj(a.e,e,(Zy(),Zy(),Yy));qj(a.c,e,Yy);return d}
function PCb(a){var b,c,d,e,f,g,i,j;a.f=new MAc;a.a=new i_b;Vi(a.a,eNc,eNc);Pi(a.a,fNc);j=Ijb(a.b);i=new y4b('Hello World');b_b(a.a,i,10,20);KAc(a.f,j[0],i);c=new d0b('Cliquez-moi!');b_b(a.a,c,80,45);KAc(a.f,j[1],c);d=new G7b(2,3);zYb();Sr(d.o,cIc,rJc);for(e=0;e<3;++e){W6b(d,0,e,e+lFc);Z6b(d,1,e,new IXb((Fkb(),ukb)))}b_b(a.a,d,60,100);KAc(a.f,j[2],d);b=new J3b;Rj(b,a.a);g=new J3b;Rj(g,OCb(a));f=new W8b;Rr(f.e,AJc,10);T8b(f,g);T8b(f,b);return f}
var dNc='3em',aNc='cwAbsolutePanelWidgetNames';Pfb(739,1,FDc);_.lc=function _Cb(){yib(this.b,PCb(this.a))};Pfb(740,1,DDc,bDb);_.Cc=function cDb(a){RCb(this.a)};Pfb(741,1,nDc,eDb);_.Fc=function fDb(a){QCb(this.a)};Pfb(1329,1327,qEc,MAc);_.Gh=function NAc(){this.c.Gh();this.b.b=this.b;this.b.a=this.b};_.ge=function OAc(a){return IAc(this,a)};_.he=function PAc(a){var b;b=this.b.a;while(b!=this.b){if(LCc(b.e,a)){return true}b=b.a}return false};_.ie=function QAc(){return new fBc(this)};_.je=function RAc(a){return JAc(this,a)};_.le=function SAc(a,b){return KAc(this,a,b)};_.me=function TAc(a){var b;b=wV(this.c.me(a),156);if(b){bBc(b);return b.e}return null};_.ne=function UAc(){return this.c.ne()};_.a=false;Pfb(1330,1331,{156:1,159:1},cBc,dBc);Pfb(1332,366,sDc,fBc);_.qe=function gBc(a){var b,c,d;if(!yV(a,159)){return false}b=wV(a,159);c=b.xe();if(IAc(this.a,c)){d=JAc(this.a,c);return LCc(b.Lc(),d)}return false};_.Zb=function hBc(){return new lBc(this)};_.ne=function iBc(){return this.a.c.ne()};Pfb(1333,1,{},lBc);_.ue=function mBc(){return this.b!=this.c.a.b};_.ve=function nBc(){return kBc(this)};_.we=function oBc(){if(!this.a){throw new isc('No current entry')}bBc(this.a);this.c.a.c.me(this.a.d);this.a=null};var p4=Rrc(sKc,'CwAbsolutePanel$3',740),q4=Rrc(sKc,'CwAbsolutePanel$4',741),Kdb=Rrc(FKc,'LinkedHashMap',1329),Hdb=Rrc(FKc,'LinkedHashMap$ChainEntry',1330),Jdb=Rrc(FKc,'LinkedHashMap$EntrySet',1332),Idb=Rrc(FKc,'LinkedHashMap$EntrySet$EntryIterator',1333);sEc(In)(21);