function iDb(a){this.b=a}
function lDb(a){this.b=a}
function dBc(a){this.b=a}
function jBc(a){this.d=a;this.c=a.b.c.b}
function aBc(a){bBc.call(this,a,null,null)}
function _Ac(a){a.b.c=a.c;a.c.b=a.b;a.b=a.c=null}
function $Ac(a){var b;b=a.d.c.c;a.c=b;a.b=a.d.c;b.b=a.d.c.c=a}
function JAc(a,b){if(a.b){_Ac(b);$Ac(b)}}
function GAc(a,b){return a.d.ke(b)}
function bBc(a,b,c){this.d=a;WAc.call(this,b,c);this.b=this.c=null}
function iBc(a){if(a.c==a.d.b.c){throw new qBc}a.b=a.c;a.c=a.c.b;return a.b}
function HAc(a,b){var c;c=FV(a.d.ne(b),155);if(c){JAc(a,c);return c.f}return null}
function KAc(){nAc.call(this);this.c=new aBc(this);this.d=new nAc;this.c.c=this.c;this.c.b=this.c}
function Pjb(a){var b,c;b=FV(a.b.ne(jNc),147);if(b==null){c=vV(Ueb,RCc,1,['Bonjour le monde',kNc,lNc]);a.b.pe(jNc,c);return c}else{return b}}
function IAc(a,b,c){var d,e,f;e=FV(a.d.ne(b),155);if(!e){d=new bBc(a,b,c);a.d.pe(b,d);$Ac(d);return null}else{f=e.f;VAc(e,c);JAc(a,e);return f}}
function XCb(b){var c,d,e,f;e=aac(b.e,b.e.db.selectedIndex);c=FV(HAc(b.g,e),119);try{f=asc((qYb(),Vr(b.f.db,zLc)));d=asc(Vr(b.d.db,zLc));l_b(b.b,c,d,f)}catch(a){a=cfb(a);if(HV(a,143)){return}else throw bfb(a)}}
function VCb(a){var b,c,d,e;d=new h7b;a.f=new Tcc;ij(a.f,mNc);Jcc(a.f,'100');a.d=new Tcc;ij(a.d,mNc);Jcc(a.d,'60');a.e=new gac;$6b(d,0,0,'<b>Points \xE0 circuler:<\/b>');b7b(d,0,1,a.e);$6b(d,1,0,'<b>Bord du dessus:<\/b>');b7b(d,1,1,a.f);$6b(d,2,0,'<b>Bord gauche:<\/b>');b7b(d,2,1,a.d);for(c=qxc(hJ(a.g));c.b.ye();){b=FV(wxc(c),1);bac(a.e,b)}Cj(a.e,new iDb(a),(uy(),uy(),ty));e=new lDb(a);Cj(a.f,e,(hz(),hz(),gz));Cj(a.d,e,gz);return d}
function WCb(a){var b,c,d,e,f,g,i,j;a.g=new KAc;a.b=new n_b;ej(a.b,nNc,nNc);$i(a.b,oNc);j=Pjb(a.c);i=new D4b('Hello World');g_b(a.b,i,10,20);IAc(a.g,j[0],i);c=new i0b('Cliquez-moi!');g_b(a.b,c,80,45);IAc(a.g,j[1],c);d=new K7b(2,3);qYb();es(d.p,bIc,wJc);for(e=0;e<3;++e){$6b(d,0,e,e+kFc);b7b(d,1,e,new zXb((Mkb(),Bkb)))}g_b(a.b,d,60,100);IAc(a.g,j[2],d);b=new O3b;bk(b,a.b);g=new O3b;bk(g,VCb(a));f=new $8b;ds(f.f,KJc,10);X8b(f,g);X8b(f,b);return f}
var mNc='3em',jNc='cwAbsolutePanelWidgetNames';_fb(737,1,EDc);_.qc=function gDb(){Fib(this.c,WCb(this.b))};_fb(738,1,CDc,iDb);_.Gc=function jDb(a){YCb(this.b)};_fb(739,1,mDc,lDb);_.Jc=function mDb(a){XCb(this.b)};_fb(1325,1323,pEc,KAc);_.Jh=function LAc(){this.d.Jh();this.c.c=this.c;this.c.b=this.c};_.ke=function MAc(a){return GAc(this,a)};_.le=function NAc(a){var b;b=this.c.b;while(b!=this.c){if(JCc(b.f,a)){return true}b=b.b}return false};_.me=function OAc(){return new dBc(this)};_.ne=function PAc(a){return HAc(this,a)};_.pe=function QAc(a,b){return IAc(this,a,b)};_.qe=function RAc(a){var b;b=FV(this.d.qe(a),155);if(b){_Ac(b);return b.f}return null};_.re=function SAc(){return this.d.re()};_.b=false;_fb(1326,1327,{155:1,158:1},aBc,bBc);_fb(1328,365,rDc,dBc);_.ue=function eBc(a){var b,c,d;if(!HV(a,158)){return false}b=FV(a,158);c=b.Be();if(GAc(this.b,c)){d=HAc(this.b,c);return JCc(b.Pc(),d)}return false};_.cc=function fBc(){return new jBc(this)};_.re=function gBc(){return this.b.d.re()};_fb(1329,1,{},jBc);_.ye=function kBc(){return this.c!=this.d.b.c};_.ze=function lBc(){return iBc(this)};_.Ae=function mBc(){if(!this.b){throw new gsc('No current entry')}_Ac(this.b);this.d.b.d.qe(this.b.e);this.b=null};var A4=Prc(BKc,'CwAbsolutePanel$3',738),B4=Prc(BKc,'CwAbsolutePanel$4',739),Wdb=Prc(OKc,'LinkedHashMap',1325),Tdb=Prc(OKc,'LinkedHashMap$ChainEntry',1326),Vdb=Prc(OKc,'LinkedHashMap$EntrySet',1328),Udb=Prc(OKc,'LinkedHashMap$EntrySet$EntryIterator',1329);rEc(Vn)(21);