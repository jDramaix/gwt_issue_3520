function zJ(a){this.a=a}
function FJ(a){this.b=a}
function ozb(){this.a=new $zc}
function KJ(){throw new Ktc}
function bJ(b,a){return b.b[OFc+a]}
function LJ(a,b){this.a=a;this.b=b}
function vxb(a,b){this.a=a;this.b=b}
function aJ(a,b){return oV(b,1)?bJ(a,mV(b,1)):null}
function cJ(a,b){var c;this.a=a;this.b={};for(c=0;c<a.length;++c){this.b[OFc+a[c]]=b[c]}}
function EJ(a){var b;if(a.a>=a.b.a.a.length){throw new bBc}b=a.b.a.a[a.a++];return new LJ(b,bJ(a.b.a,b))}
function nzb(a){var b;b=mV(a.a.je(kOc),158);if(!b){b=new cJ(cV(zeb,BCc,1,[gMc,dMc,jMc,fMc,kMc,iMc,lOc,mOc]),cV(zeb,BCc,1,[nOc,oOc,pOc,qOc,rOc,sOc,tOc,uOc]));a.a.le(kOc,b)}return b}
function rxb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r;f=new ozb;n=new T6b;i=mV(n.j,98);cYb();Sr(n.o,kJc,5);q=Yhb(z3);o=new z_b(q);rj(o,new vxb(a,q),(ky(),ky(),jy));p=new K8b;Sr(p.e,kJc,3);H8b(p,new n4b("Cet exemple interagit avec l'\xE9chatillon de l'interface:"));H8b(p,o);N6b(n,0,0,p);Sr(a7b(i,0),$Kc,2);g=new Dcc;Tr(g.cb,_Kc,'Amelie');tC(g.a);mYb(g.cb,vFc,XNc);K6b(n,1,0,'<b>Pr\xE9nom:<\/b>');N6b(n,1,1,g);k=new Dcc;Tr(k.cb,_Kc,'Crutcher');tC(k.a);mYb(k.cb,vFc,XNc);K6b(n,2,0,'<b>Nom:<\/b>');N6b(n,2,1,k);b=new S9b;c=nzb(f);for(e=c.ie().Zb();e.ue();){d=mV(e.ve(),159);j=mV(d.xe(),1);r=mV(d.Lc(),1);O9b(b,r,j,-1)}K6b(n,3,0,'<b>Couleur Pr\xE9f\xE9r\xE9e:<\/b>');N6b(n,3,1,b);return n}
var kOc='colorMap';Gfb(364,365,_Cc,cJ);_.ge=function dJ(a){return (oV(a,1)?bJ(this,mV(a,1)):null)!=null};_.ie=function eJ(){return new zJ(this)};_.je=function fJ(a){return oV(a,1)?bJ(this,mV(a,1)):null};_.ne=function gJ(){return this.a.length};Gfb(366,367,bDc,zJ);_.qe=function AJ(a){var b,c;if(!oV(a,159)){return false}b=mV(a,159);c=aJ(this.a,b.xe());if(c!=null&&Esc(c,b.Lc())){return true}return false};_.Zb=function BJ(){return new FJ(this)};_.ne=function CJ(){return this.a.a.length};Gfb(369,1,{},FJ);_.ue=function GJ(){return this.a<this.b.a.a.length};_.ve=function HJ(){return EJ(this)};_.we=function IJ(){throw new Ktc};_.a=0;Gfb(370,1,cDc,LJ);_.eQ=function MJ(a){var b;if(oV(a,159)){b=mV(a,159);if(Esc(this.a,b.xe())&&Esc(this.b,b.Lc())){return true}}return false};_.xe=function NJ(){return this.a};_.Lc=function OJ(){return this.b};_.hC=function PJ(){var a,b;a=0;b=0;this.a!=null&&(a=itc(this.a));this.b!=null&&(b=itc(this.b));return a^b};_.ye=function QJ(a){return KJ(mV(a,1))};_.tS=function RJ(){return this.a+zGc+this.b};Gfb(656,1,lDc,vxb);_.Dc=function wxb(a){Rhb(this.a,this.b+gOc)};Gfb(657,1,oDc);_.lc=function Axb(){pib(this.b,rxb(this.a))};Gfb(682,1,{},ozb);var z3=Crc(hKc,'ExampleConstants'),Y2=Arc(hKc,'CwConstantsExample$1',656),y3=Arc(hKc,'ExampleConstants_fr',682),S$=Arc(wKc,'ConstantMap',364),R$=Arc(wKc,'ConstantMap$EntryImpl',370),Q$=Arc(wKc,'ConstantMap$1',366),P$=Arc(wKc,'ConstantMap$1$1',369);bEc(Jn)(30);