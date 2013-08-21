function UCb(a){this.a=a}
function XCb(a){this.a=a}
function UAc(a){this.a=a}
function $Ac(a){this.c=a;this.b=a.a.b.a}
function RAc(a){SAc.call(this,a,null,null)}
function vAc(a,b){return a.c.ge(b)}
function yAc(a,b){if(a.a){QAc(b);PAc(b)}}
function QAc(a){a.a.b=a.b;a.b.a=a.a;a.a=a.b=null}
function PAc(a){var b;b=a.c.b.b;a.b=b;a.a=a.c.b;b.a=a.c.b.b=a}
function ZAc(a){if(a.b==a.c.a.b){throw new fBc}a.a=a.b;a.b=a.b.a;return a.a}
function wAc(a,b){var c;c=mV(a.c.je(b),156);if(c){yAc(a,c);return c.e}return null}
function SAc(a,b,c){this.c=a;LAc.call(this,b,c);this.a=this.b=null}
function zAc(){cAc.call(this);this.b=new RAc(this);this.c=new cAc;this.b.b=this.b;this.b.a=this.b}
function zjb(a){var b,c;b=mV(a.a.je(OMc),148);if(b==null){c=cV(zeb,FCc,1,['Bonjour le monde',PMc,QMc]);a.a.le(OMc,c);return c}else{return b}}
function xAc(a,b,c){var d,e,f;e=mV(a.c.je(b),156);if(!e){d=new SAc(a,b,c);a.c.le(b,d);PAc(d);return null}else{f=e.e;KAc(e,c);yAc(a,e);return f}}
function HCb(b){var c,d,e,f;e=N9b(b.d,b.d.cb.selectedIndex);c=mV(wAc(b.f,e),120);try{f=Rrc((cYb(),Ir(b.e.cb,dLc)));d=Rrc(Ir(b.c.cb,dLc));X$b(b.a,c,d,f)}catch(a){a=Jeb(a);if(oV(a,144)){return}else throw Ieb(a)}}
function FCb(a){var b,c,d,e;d=new U6b;a.e=new Ecc;Zi(a.e,RMc);ucc(a.e,'100');a.c=new Ecc;Zi(a.c,RMc);ucc(a.c,'60');a.d=new T9b;L6b(d,0,0,'<b>Points \xE0 circuler:<\/b>');O6b(d,0,1,a.d);L6b(d,1,0,'<b>Bord du dessus:<\/b>');O6b(d,1,1,a.e);L6b(d,2,0,'<b>Bord gauche:<\/b>');O6b(d,2,1,a.c);for(c=fxc(QI(a.f));c.a.ue();){b=mV(lxc(c),1);O9b(a.d,b)}rj(a.d,new UCb(a),(ay(),ay(),_x));e=new XCb(a);rj(a.e,e,(Py(),Py(),Oy));rj(a.c,e,Oy);return d}
function GCb(a){var b,c,d,e,f,g,i,j;a.f=new zAc;a.a=new Z$b;Vi(a.a,SMc,SMc);Pi(a.a,TMc);j=zjb(a.b);i=new n4b('Hello World');S$b(a.a,i,10,20);xAc(a.f,j[0],i);c=new U_b('Cliquez-moi!');S$b(a.a,c,80,45);xAc(a.f,j[1],c);d=new v7b(2,3);cYb();Tr(d.o,PHc,fJc);for(e=0;e<3;++e){L6b(d,0,e,e+$Ec);O6b(d,1,e,new lXb((wkb(),lkb)))}S$b(a.a,d,60,100);xAc(a.f,j[2],d);b=new y3b;Sj(b,a.a);g=new y3b;Sj(g,FCb(a));f=new L8b;Sr(f.e,oJc,10);I8b(f,g);I8b(f,b);return f}
var RMc='3em',OMc='cwAbsolutePanelWidgetNames';Gfb(740,1,sDc);_.lc=function SCb(){pib(this.b,GCb(this.a))};Gfb(741,1,qDc,UCb);_.Cc=function VCb(a){ICb(this.a)};Gfb(742,1,aDc,XCb);_.Fc=function YCb(a){HCb(this.a)};Gfb(1330,1328,dEc,zAc);_.Hh=function AAc(){this.c.Hh();this.b.b=this.b;this.b.a=this.b};_.ge=function BAc(a){return vAc(this,a)};_.he=function CAc(a){var b;b=this.b.a;while(b!=this.b){if(yCc(b.e,a)){return true}b=b.a}return false};_.ie=function DAc(){return new UAc(this)};_.je=function EAc(a){return wAc(this,a)};_.le=function FAc(a,b){return xAc(this,a,b)};_.me=function GAc(a){var b;b=mV(this.c.me(a),156);if(b){QAc(b);return b.e}return null};_.ne=function HAc(){return this.c.ne()};_.a=false;Gfb(1331,1332,{156:1,159:1},RAc,SAc);Gfb(1333,367,fDc,UAc);_.qe=function VAc(a){var b,c,d;if(!oV(a,159)){return false}b=mV(a,159);c=b.xe();if(vAc(this.a,c)){d=wAc(this.a,c);return yCc(b.Lc(),d)}return false};_.Zb=function WAc(){return new $Ac(this)};_.ne=function XAc(){return this.a.c.ne()};Gfb(1334,1,{},$Ac);_.ue=function _Ac(){return this.b!=this.c.a.b};_.ve=function aBc(){return ZAc(this)};_.we=function bBc(){if(!this.a){throw new Xrc('No current entry')}QAc(this.a);this.c.a.c.me(this.a.d);this.a=null};var f4=Erc(fKc,'CwAbsolutePanel$3',741),g4=Erc(fKc,'CwAbsolutePanel$4',742),Bdb=Erc(sKc,'LinkedHashMap',1330),ydb=Erc(sKc,'LinkedHashMap$ChainEntry',1331),Adb=Erc(sKc,'LinkedHashMap$EntrySet',1333),zdb=Erc(sKc,'LinkedHashMap$EntrySet$EntryIterator',1334);fEc(Jn)(21);