function dK(a){this.b=a}
function jK(a){this.c=a}
function Xzb(){this.b=new PAc}
function oK(){throw new zuc}
function pK(a,b){this.b=a;this.c=b}
function cyb(a,b){this.b=a;this.c=b}
function HJ(b,a){return b.c[GGc+a]}
function GJ(a,b){return UV(b,1)?HJ(a,SV(b,1)):null}
function IJ(a,b){var c;this.b=a;this.c={};for(c=0;c<a.length;++c){this.c[GGc+a[c]]=b[c]}}
function iK(a){var b;if(a.b>=a.c.b.b.length){throw new SBc}b=a.c.b.b[a.b++];return new pK(b,HJ(a.c.b,b))}
function Wzb(a){var b;b=SV(a.b.re(mPc),157);if(!b){b=new IJ(IV(lfb,rDc,1,[hNc,eNc,kNc,gNc,lNc,jNc,nPc,oPc]),IV(lfb,rDc,1,[pPc,qPc,rPc,sPc,tPc,uPc,vPc,wPc]));a.b.te(mPc,b)}return b}
function $xb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r;f=new Xzb;n=new y7b;i=SV(n.k,97);GYb();xs(n.p,lKc,5);q=Fib(j4);o=new d0b(q);Dj(o,new cyb(a,q),(Ry(),Ry(),Qy));p=new r9b;xs(p.f,lKc,3);o9b(p,new T4b("Cet exemple interagit avec l'\xE9chatillon de l'interface:"));o9b(p,o);s7b(n,0,0,p);xs(H7b(i,0),_Lc,2);g=new ldc;ys(g.db,aMc,'Amelie');ZC(g.b);QYb(g.db,mGc,ZOc);p7b(n,1,0,'<b>Pr\xE9nom:<\/b>');s7b(n,1,1,g);k=new ldc;ys(k.db,aMc,'Crutcher');ZC(k.b);QYb(k.db,mGc,ZOc);p7b(n,2,0,'<b>Nom:<\/b>');s7b(n,2,1,k);b=new zac;c=Wzb(f);for(e=c.qe().cc();e.Ce();){d=SV(e.De(),158);j=SV(d.Fe(),1);r=SV(d.Tc(),1);vac(b,r,j,-1)}p7b(n,3,0,'<b>Couleur Pr\xE9f\xE9r\xE9e:<\/b>');s7b(n,3,1,b);return n}
var mPc='colorMap';sgb(366,367,RDc,IJ);_.oe=function JJ(a){return (UV(a,1)?HJ(this,SV(a,1)):null)!=null};_.qe=function KJ(){return new dK(this)};_.re=function LJ(a){return UV(a,1)?HJ(this,SV(a,1)):null};_.ve=function MJ(){return this.b.length};sgb(368,369,TDc,dK);_.ye=function eK(a){var b,c;if(!UV(a,158)){return false}b=SV(a,158);c=GJ(this.b,b.Fe());if(c!=null&&stc(c,b.Tc())){return true}return false};_.cc=function fK(){return new jK(this)};_.ve=function gK(){return this.b.b.length};sgb(371,1,{},jK);_.Ce=function kK(){return this.b<this.c.b.b.length};_.De=function lK(){return iK(this)};_.Ee=function mK(){throw new zuc};_.b=0;sgb(372,1,UDc,pK);_.eQ=function qK(a){var b;if(UV(a,158)){b=SV(a,158);if(stc(this.b,b.Fe())&&stc(this.c,b.Tc())){return true}}return false};_.Fe=function rK(){return this.b};_.Tc=function sK(){return this.c};_.hC=function tK(){var a,b;a=0;b=0;this.b!=null&&(a=Ztc(this.b));this.c!=null&&(b=Ztc(this.c));return a^b};_.Ge=function uK(a){return oK(SV(a,1))};_.tS=function vK(){return this.b+DHc+this.c};sgb(657,1,bEc,cyb);_.Lc=function dyb(a){yib(this.b,this.c+iPc)};sgb(658,1,eEc);_.qc=function hyb(){Yib(this.c,$xb(this.b))};sgb(683,1,{},Xzb);var j4=qsc(iLc,'ExampleConstants'),I3=osc(iLc,'CwConstantsExample$1',657),i4=osc(iLc,'ExampleConstants_fr',683),D_=osc(xLc,'ConstantMap',366),C_=osc(xLc,'ConstantMap$EntryImpl',372),B_=osc(xLc,'ConstantMap$1',368),A_=osc(xLc,'ConstantMap$1$1',371);TEc(Vn)(30);