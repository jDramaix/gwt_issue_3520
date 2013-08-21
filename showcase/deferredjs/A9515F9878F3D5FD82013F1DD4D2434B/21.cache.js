function UCb(a){this.a=a}
function XCb(a){this.a=a}
function TAc(a){this.a=a}
function ZAc(a){this.c=a;this.b=a.a.b.a}
function QAc(a){RAc.call(this,a,null,null)}
function uAc(a,b){return a.c.ge(b)}
function xAc(a,b){if(a.a){PAc(b);OAc(b)}}
function PAc(a){a.a.b=a.b;a.b.a=a.a;a.a=a.b=null}
function OAc(a){var b;b=a.c.b.b;a.b=b;a.a=a.c.b;b.a=a.c.b.b=a}
function YAc(a){if(a.b==a.c.a.b){throw new eBc}a.a=a.b;a.b=a.b.a;return a.a}
function vAc(a,b){var c;c=mV(a.c.je(b),156);if(c){xAc(a,c);return c.e}return null}
function RAc(a,b,c){this.c=a;KAc.call(this,b,c);this.a=this.b=null}
function yAc(){bAc.call(this);this.b=new QAc(this);this.c=new bAc;this.b.b=this.b;this.b.a=this.b}
function zjb(a){var b,c;b=mV(a.a.je(NMc),148);if(b==null){c=cV(zeb,ECc,1,['Bonjour le monde',OMc,PMc]);a.a.le(NMc,c);return c}else{return b}}
function wAc(a,b,c){var d,e,f;e=mV(a.c.je(b),156);if(!e){d=new RAc(a,b,c);a.c.le(b,d);OAc(d);return null}else{f=e.e;JAc(e,c);xAc(a,e);return f}}
function HCb(b){var c,d,e,f;e=M9b(b.d,b.d.cb.selectedIndex);c=mV(vAc(b.f,e),120);try{f=Qrc((cYb(),Ir(b.e.cb,cLc)));d=Qrc(Ir(b.c.cb,cLc));X$b(b.a,c,d,f)}catch(a){a=Jeb(a);if(oV(a,144)){return}else throw Ieb(a)}}
function FCb(a){var b,c,d,e;d=new T6b;a.e=new Dcc;Zi(a.e,QMc);tcc(a.e,'100');a.c=new Dcc;Zi(a.c,QMc);tcc(a.c,'60');a.d=new S9b;K6b(d,0,0,'<b>Points \xE0 circuler:<\/b>');N6b(d,0,1,a.d);K6b(d,1,0,'<b>Bord du dessus:<\/b>');N6b(d,1,1,a.e);K6b(d,2,0,'<b>Bord gauche:<\/b>');N6b(d,2,1,a.c);for(c=exc(QI(a.f));c.a.ue();){b=mV(kxc(c),1);N9b(a.d,b)}rj(a.d,new UCb(a),(ay(),ay(),_x));e=new XCb(a);rj(a.e,e,(Py(),Py(),Oy));rj(a.c,e,Oy);return d}
function GCb(a){var b,c,d,e,f,g,i,j;a.f=new yAc;a.a=new Z$b;Vi(a.a,RMc,RMc);Pi(a.a,SMc);j=zjb(a.b);i=new n4b('Hello World');S$b(a.a,i,10,20);wAc(a.f,j[0],i);c=new U_b('Cliquez-moi!');S$b(a.a,c,80,45);wAc(a.f,j[1],c);d=new u7b(2,3);cYb();Tr(d.o,OHc,eJc);for(e=0;e<3;++e){K6b(d,0,e,e+ZEc);N6b(d,1,e,new lXb((wkb(),lkb)))}S$b(a.a,d,60,100);wAc(a.f,j[2],d);b=new y3b;Sj(b,a.a);g=new y3b;Sj(g,FCb(a));f=new K8b;Sr(f.e,nJc,10);H8b(f,g);H8b(f,b);return f}
var QMc='3em',NMc='cwAbsolutePanelWidgetNames';Gfb(740,1,rDc);_.lc=function SCb(){pib(this.b,GCb(this.a))};Gfb(741,1,pDc,UCb);_.Cc=function VCb(a){ICb(this.a)};Gfb(742,1,_Cc,XCb);_.Fc=function YCb(a){HCb(this.a)};Gfb(1330,1328,cEc,yAc);_.Hh=function zAc(){this.c.Hh();this.b.b=this.b;this.b.a=this.b};_.ge=function AAc(a){return uAc(this,a)};_.he=function BAc(a){var b;b=this.b.a;while(b!=this.b){if(xCc(b.e,a)){return true}b=b.a}return false};_.ie=function CAc(){return new TAc(this)};_.je=function DAc(a){return vAc(this,a)};_.le=function EAc(a,b){return wAc(this,a,b)};_.me=function FAc(a){var b;b=mV(this.c.me(a),156);if(b){PAc(b);return b.e}return null};_.ne=function GAc(){return this.c.ne()};_.a=false;Gfb(1331,1332,{156:1,159:1},QAc,RAc);Gfb(1333,367,eDc,TAc);_.qe=function UAc(a){var b,c,d;if(!oV(a,159)){return false}b=mV(a,159);c=b.xe();if(uAc(this.a,c)){d=vAc(this.a,c);return xCc(b.Lc(),d)}return false};_.Zb=function VAc(){return new ZAc(this)};_.ne=function WAc(){return this.a.c.ne()};Gfb(1334,1,{},ZAc);_.ue=function $Ac(){return this.b!=this.c.a.b};_.ve=function _Ac(){return YAc(this)};_.we=function aBc(){if(!this.a){throw new Wrc('No current entry')}PAc(this.a);this.c.a.c.me(this.a.d);this.a=null};var f4=Drc(eKc,'CwAbsolutePanel$3',741),g4=Drc(eKc,'CwAbsolutePanel$4',742),Bdb=Drc(rKc,'LinkedHashMap',1330),ydb=Drc(rKc,'LinkedHashMap$ChainEntry',1331),Adb=Drc(rKc,'LinkedHashMap$EntrySet',1333),zdb=Drc(rKc,'LinkedHashMap$EntrySet$EntryIterator',1334);eEc(Jn)(21);