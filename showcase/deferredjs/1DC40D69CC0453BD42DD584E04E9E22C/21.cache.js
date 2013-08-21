function iDb(a){this.b=a}
function lDb(a){this.b=a}
function gBc(a){this.b=a}
function mBc(a){this.d=a;this.c=a.b.c.b}
function dBc(a){eBc.call(this,a,null,null)}
function cBc(a){a.b.c=a.c;a.c.b=a.b;a.b=a.c=null}
function bBc(a){var b;b=a.d.c.c;a.c=b;a.b=a.d.c;b.b=a.d.c.c=a}
function MAc(a,b){if(a.b){cBc(b);bBc(b)}}
function JAc(a,b){return a.d.ke(b)}
function eBc(a,b,c){this.d=a;ZAc.call(this,b,c);this.b=this.c=null}
function lBc(a){if(a.c==a.d.b.c){throw new tBc}a.b=a.c;a.c=a.c.b;return a.b}
function KAc(a,b){var c;c=FV(a.d.ne(b),155);if(c){MAc(a,c);return c.f}return null}
function NAc(){qAc.call(this);this.c=new dBc(this);this.d=new qAc;this.c.c=this.c;this.c.b=this.c}
function Pjb(a){var b,c;b=FV(a.b.ne(mNc),147);if(b==null){c=vV(Ueb,UCc,1,['Bonjour le monde',nNc,oNc]);a.b.pe(mNc,c);return c}else{return b}}
function LAc(a,b,c){var d,e,f;e=FV(a.d.ne(b),155);if(!e){d=new eBc(a,b,c);a.d.pe(b,d);bBc(d);return null}else{f=e.f;YAc(e,c);MAc(a,e);return f}}
function XCb(b){var c,d,e,f;e=aac(b.e,b.e.db.selectedIndex);c=FV(KAc(b.g,e),119);try{f=dsc((qYb(),Vr(b.f.db,CLc)));d=dsc(Vr(b.d.db,CLc));l_b(b.b,c,d,f)}catch(a){a=cfb(a);if(HV(a,143)){return}else throw bfb(a)}}
function VCb(a){var b,c,d,e;d=new h7b;a.f=new Tcc;ij(a.f,pNc);Jcc(a.f,'100');a.d=new Tcc;ij(a.d,pNc);Jcc(a.d,'60');a.e=new gac;$6b(d,0,0,'<b>Points \xE0 circuler:<\/b>');b7b(d,0,1,a.e);$6b(d,1,0,'<b>Bord du dessus:<\/b>');b7b(d,1,1,a.f);$6b(d,2,0,'<b>Bord gauche:<\/b>');b7b(d,2,1,a.d);for(c=txc(hJ(a.g));c.b.ye();){b=FV(zxc(c),1);bac(a.e,b)}Cj(a.e,new iDb(a),(uy(),uy(),ty));e=new lDb(a);Cj(a.f,e,(hz(),hz(),gz));Cj(a.d,e,gz);return d}
function WCb(a){var b,c,d,e,f,g,i,j;a.g=new NAc;a.b=new n_b;ej(a.b,qNc,qNc);$i(a.b,rNc);j=Pjb(a.c);i=new D4b('Hello World');g_b(a.b,i,10,20);LAc(a.g,j[0],i);c=new i0b('Cliquez-moi!');g_b(a.b,c,80,45);LAc(a.g,j[1],c);d=new K7b(2,3);qYb();es(d.p,eIc,zJc);for(e=0;e<3;++e){$6b(d,0,e,e+nFc);b7b(d,1,e,new zXb((Mkb(),Bkb)))}g_b(a.b,d,60,100);LAc(a.g,j[2],d);b=new O3b;bk(b,a.b);g=new O3b;bk(g,VCb(a));f=new $8b;ds(f.f,NJc,10);X8b(f,g);X8b(f,b);return f}
var pNc='3em',mNc='cwAbsolutePanelWidgetNames';_fb(737,1,HDc);_.qc=function gDb(){Fib(this.c,WCb(this.b))};_fb(738,1,FDc,iDb);_.Gc=function jDb(a){YCb(this.b)};_fb(739,1,pDc,lDb);_.Jc=function mDb(a){XCb(this.b)};_fb(1325,1323,sEc,NAc);_.Jh=function OAc(){this.d.Jh();this.c.c=this.c;this.c.b=this.c};_.ke=function PAc(a){return JAc(this,a)};_.le=function QAc(a){var b;b=this.c.b;while(b!=this.c){if(MCc(b.f,a)){return true}b=b.b}return false};_.me=function RAc(){return new gBc(this)};_.ne=function SAc(a){return KAc(this,a)};_.pe=function TAc(a,b){return LAc(this,a,b)};_.qe=function UAc(a){var b;b=FV(this.d.qe(a),155);if(b){cBc(b);return b.f}return null};_.re=function VAc(){return this.d.re()};_.b=false;_fb(1326,1327,{155:1,158:1},dBc,eBc);_fb(1328,365,uDc,gBc);_.ue=function hBc(a){var b,c,d;if(!HV(a,158)){return false}b=FV(a,158);c=b.Be();if(JAc(this.b,c)){d=KAc(this.b,c);return MCc(b.Pc(),d)}return false};_.cc=function iBc(){return new mBc(this)};_.re=function jBc(){return this.b.d.re()};_fb(1329,1,{},mBc);_.ye=function nBc(){return this.c!=this.d.b.c};_.ze=function oBc(){return lBc(this)};_.Ae=function pBc(){if(!this.b){throw new jsc('No current entry')}cBc(this.b);this.d.b.d.qe(this.b.e);this.b=null};var A4=Src(EKc,'CwAbsolutePanel$3',738),B4=Src(EKc,'CwAbsolutePanel$4',739),Wdb=Src(RKc,'LinkedHashMap',1325),Tdb=Src(RKc,'LinkedHashMap$ChainEntry',1326),Vdb=Src(RKc,'LinkedHashMap$EntrySet',1328),Udb=Src(RKc,'LinkedHashMap$EntrySet$EntryIterator',1329);uEc(Vn)(21);