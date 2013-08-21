function iDb(a){this.b=a}
function lDb(a){this.b=a}
function hBc(a){this.b=a}
function nBc(a){this.d=a;this.c=a.b.c.b}
function eBc(a){fBc.call(this,a,null,null)}
function dBc(a){a.b.c=a.c;a.c.b=a.b;a.b=a.c=null}
function cBc(a){var b;b=a.d.c.c;a.c=b;a.b=a.d.c;b.b=a.d.c.c=a}
function NAc(a,b){if(a.b){dBc(b);cBc(b)}}
function KAc(a,b){return a.d.ke(b)}
function fBc(a,b,c){this.d=a;$Ac.call(this,b,c);this.b=this.c=null}
function mBc(a){if(a.c==a.d.b.c){throw new uBc}a.b=a.c;a.c=a.c.b;return a.b}
function LAc(a,b){var c;c=FV(a.d.ne(b),155);if(c){NAc(a,c);return c.f}return null}
function OAc(){rAc.call(this);this.c=new eBc(this);this.d=new rAc;this.c.c=this.c;this.c.b=this.c}
function Pjb(a){var b,c;b=FV(a.b.ne(nNc),147);if(b==null){c=vV(Ueb,VCc,1,['Bonjour le monde',oNc,pNc]);a.b.pe(nNc,c);return c}else{return b}}
function MAc(a,b,c){var d,e,f;e=FV(a.d.ne(b),155);if(!e){d=new fBc(a,b,c);a.d.pe(b,d);cBc(d);return null}else{f=e.f;ZAc(e,c);NAc(a,e);return f}}
function XCb(b){var c,d,e,f;e=bac(b.e,b.e.db.selectedIndex);c=FV(LAc(b.g,e),119);try{f=esc((qYb(),Vr(b.f.db,DLc)));d=esc(Vr(b.d.db,DLc));l_b(b.b,c,d,f)}catch(a){a=cfb(a);if(HV(a,143)){return}else throw bfb(a)}}
function VCb(a){var b,c,d,e;d=new i7b;a.f=new Ucc;ij(a.f,qNc);Kcc(a.f,'100');a.d=new Ucc;ij(a.d,qNc);Kcc(a.d,'60');a.e=new hac;_6b(d,0,0,'<b>Points \xE0 circuler:<\/b>');c7b(d,0,1,a.e);_6b(d,1,0,'<b>Bord du dessus:<\/b>');c7b(d,1,1,a.f);_6b(d,2,0,'<b>Bord gauche:<\/b>');c7b(d,2,1,a.d);for(c=uxc(hJ(a.g));c.b.ye();){b=FV(Axc(c),1);cac(a.e,b)}Cj(a.e,new iDb(a),(uy(),uy(),ty));e=new lDb(a);Cj(a.f,e,(hz(),hz(),gz));Cj(a.d,e,gz);return d}
function WCb(a){var b,c,d,e,f,g,i,j;a.g=new OAc;a.b=new n_b;ej(a.b,rNc,rNc);$i(a.b,sNc);j=Pjb(a.c);i=new D4b('Hello World');g_b(a.b,i,10,20);MAc(a.g,j[0],i);c=new i0b('Cliquez-moi!');g_b(a.b,c,80,45);MAc(a.g,j[1],c);d=new L7b(2,3);qYb();es(d.p,fIc,AJc);for(e=0;e<3;++e){_6b(d,0,e,e+oFc);c7b(d,1,e,new zXb((Mkb(),Bkb)))}g_b(a.b,d,60,100);MAc(a.g,j[2],d);b=new O3b;bk(b,a.b);g=new O3b;bk(g,VCb(a));f=new _8b;ds(f.f,OJc,10);Y8b(f,g);Y8b(f,b);return f}
var qNc='3em',nNc='cwAbsolutePanelWidgetNames';_fb(737,1,IDc);_.qc=function gDb(){Fib(this.c,WCb(this.b))};_fb(738,1,GDc,iDb);_.Gc=function jDb(a){YCb(this.b)};_fb(739,1,qDc,lDb);_.Jc=function mDb(a){XCb(this.b)};_fb(1325,1323,tEc,OAc);_.Jh=function PAc(){this.d.Jh();this.c.c=this.c;this.c.b=this.c};_.ke=function QAc(a){return KAc(this,a)};_.le=function RAc(a){var b;b=this.c.b;while(b!=this.c){if(NCc(b.f,a)){return true}b=b.b}return false};_.me=function SAc(){return new hBc(this)};_.ne=function TAc(a){return LAc(this,a)};_.pe=function UAc(a,b){return MAc(this,a,b)};_.qe=function VAc(a){var b;b=FV(this.d.qe(a),155);if(b){dBc(b);return b.f}return null};_.re=function WAc(){return this.d.re()};_.b=false;_fb(1326,1327,{155:1,158:1},eBc,fBc);_fb(1328,365,vDc,hBc);_.ue=function iBc(a){var b,c,d;if(!HV(a,158)){return false}b=FV(a,158);c=b.Be();if(KAc(this.b,c)){d=LAc(this.b,c);return NCc(b.Pc(),d)}return false};_.cc=function jBc(){return new nBc(this)};_.re=function kBc(){return this.b.d.re()};_fb(1329,1,{},nBc);_.ye=function oBc(){return this.c!=this.d.b.c};_.ze=function pBc(){return mBc(this)};_.Ae=function qBc(){if(!this.b){throw new ksc('No current entry')}dBc(this.b);this.d.b.d.qe(this.b.e);this.b=null};var A4=Trc(FKc,'CwAbsolutePanel$3',738),B4=Trc(FKc,'CwAbsolutePanel$4',739),Wdb=Trc(SKc,'LinkedHashMap',1325),Tdb=Trc(SKc,'LinkedHashMap$ChainEntry',1326),Vdb=Trc(SKc,'LinkedHashMap$EntrySet',1328),Udb=Trc(SKc,'LinkedHashMap$EntrySet$EntryIterator',1329);vEc(Vn)(21);