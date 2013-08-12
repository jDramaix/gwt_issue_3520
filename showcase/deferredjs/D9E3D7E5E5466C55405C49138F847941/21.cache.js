function UCb(a){this.a=a}
function XCb(a){this.a=a}
function QAc(a){this.a=a}
function WAc(a){this.c=a;this.b=a.a.b.a}
function NAc(a){OAc.call(this,a,null,null)}
function rAc(a,b){return a.c.ge(b)}
function uAc(a,b){if(a.a){MAc(b);LAc(b)}}
function MAc(a){a.a.b=a.b;a.b.a=a.a;a.a=a.b=null}
function LAc(a){var b;b=a.c.b.b;a.b=b;a.a=a.c.b;b.a=a.c.b.b=a}
function VAc(a){if(a.b==a.c.a.b){throw new bBc}a.a=a.b;a.b=a.b.a;return a.a}
function sAc(a,b){var c;c=mV(a.c.je(b),156);if(c){uAc(a,c);return c.e}return null}
function OAc(a,b,c){this.c=a;HAc.call(this,b,c);this.a=this.b=null}
function vAc(){$zc.call(this);this.b=new NAc(this);this.c=new $zc;this.b.b=this.b;this.b.a=this.b}
function zjb(a){var b,c;b=mV(a.a.je(KMc),148);if(b==null){c=cV(zeb,BCc,1,['Bonjour le monde',LMc,MMc]);a.a.le(KMc,c);return c}else{return b}}
function tAc(a,b,c){var d,e,f;e=mV(a.c.je(b),156);if(!e){d=new OAc(a,b,c);a.c.le(b,d);LAc(d);return null}else{f=e.e;GAc(e,c);uAc(a,e);return f}}
function HCb(b){var c,d,e,f;e=M9b(b.d,b.d.cb.selectedIndex);c=mV(sAc(b.f,e),120);try{f=Nrc((cYb(),Ir(b.e.cb,_Kc)));d=Nrc(Ir(b.c.cb,_Kc));X$b(b.a,c,d,f)}catch(a){a=Jeb(a);if(oV(a,144)){return}else throw Ieb(a)}}
function FCb(a){var b,c,d,e;d=new T6b;a.e=new Dcc;Zi(a.e,NMc);tcc(a.e,'100');a.c=new Dcc;Zi(a.c,NMc);tcc(a.c,'60');a.d=new S9b;K6b(d,0,0,'<b>Points \xE0 circuler:<\/b>');N6b(d,0,1,a.d);K6b(d,1,0,'<b>Bord du dessus:<\/b>');N6b(d,1,1,a.e);K6b(d,2,0,'<b>Bord gauche:<\/b>');N6b(d,2,1,a.c);for(c=bxc(QI(a.f));c.a.ue();){b=mV(hxc(c),1);N9b(a.d,b)}rj(a.d,new UCb(a),(ay(),ay(),_x));e=new XCb(a);rj(a.e,e,(Py(),Py(),Oy));rj(a.c,e,Oy);return d}
function GCb(a){var b,c,d,e,f,g,i,j;a.f=new vAc;a.a=new Z$b;Vi(a.a,OMc,OMc);Pi(a.a,PMc);j=zjb(a.b);i=new n4b('Hello World');S$b(a.a,i,10,20);tAc(a.f,j[0],i);c=new U_b('Cliquez-moi!');S$b(a.a,c,80,45);tAc(a.f,j[1],c);d=new u7b(2,3);cYb();Tr(d.o,LHc,bJc);for(e=0;e<3;++e){K6b(d,0,e,e+WEc);N6b(d,1,e,new lXb((wkb(),lkb)))}S$b(a.a,d,60,100);tAc(a.f,j[2],d);b=new y3b;Sj(b,a.a);g=new y3b;Sj(g,FCb(a));f=new K8b;Sr(f.e,kJc,10);H8b(f,g);H8b(f,b);return f}
var NMc='3em',KMc='cwAbsolutePanelWidgetNames';Gfb(740,1,oDc);_.lc=function SCb(){pib(this.b,GCb(this.a))};Gfb(741,1,mDc,UCb);_.Cc=function VCb(a){ICb(this.a)};Gfb(742,1,YCc,XCb);_.Fc=function YCb(a){HCb(this.a)};Gfb(1330,1328,_Dc,vAc);_.Hh=function wAc(){this.c.Hh();this.b.b=this.b;this.b.a=this.b};_.ge=function xAc(a){return rAc(this,a)};_.he=function yAc(a){var b;b=this.b.a;while(b!=this.b){if(uCc(b.e,a)){return true}b=b.a}return false};_.ie=function zAc(){return new QAc(this)};_.je=function AAc(a){return sAc(this,a)};_.le=function BAc(a,b){return tAc(this,a,b)};_.me=function CAc(a){var b;b=mV(this.c.me(a),156);if(b){MAc(b);return b.e}return null};_.ne=function DAc(){return this.c.ne()};_.a=false;Gfb(1331,1332,{156:1,159:1},NAc,OAc);Gfb(1333,367,bDc,QAc);_.qe=function RAc(a){var b,c,d;if(!oV(a,159)){return false}b=mV(a,159);c=b.xe();if(rAc(this.a,c)){d=sAc(this.a,c);return uCc(b.Lc(),d)}return false};_.Zb=function SAc(){return new WAc(this)};_.ne=function TAc(){return this.a.c.ne()};Gfb(1334,1,{},WAc);_.ue=function XAc(){return this.b!=this.c.a.b};_.ve=function YAc(){return VAc(this)};_.we=function ZAc(){if(!this.a){throw new Trc('No current entry')}MAc(this.a);this.c.a.c.me(this.a.d);this.a=null};var f4=Arc(bKc,'CwAbsolutePanel$3',741),g4=Arc(bKc,'CwAbsolutePanel$4',742),Bdb=Arc(oKc,'LinkedHashMap',1330),ydb=Arc(oKc,'LinkedHashMap$ChainEntry',1331),Adb=Arc(oKc,'LinkedHashMap$EntrySet',1333),zdb=Arc(oKc,'LinkedHashMap$EntrySet$EntryIterator',1334);bEc(Jn)(21);