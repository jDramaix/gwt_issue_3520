function JJ(a){this.a=a}
function PJ(a){this.b=a}
function xzb(){this.a=new oAc}
function UJ(){throw new $tc}
function lJ(b,a){return b.b[dGc+a]}
function VJ(a,b){this.a=a;this.b=b}
function Exb(a,b){this.a=a;this.b=b}
function kJ(a,b){return yV(b,1)?lJ(a,wV(b,1)):null}
function mJ(a,b){var c;this.a=a;this.b={};for(c=0;c<a.length;++c){this.b[dGc+a[c]]=b[c]}}
function OJ(a){var b;if(a.a>=a.b.a.a.length){throw new rBc}b=a.b.a.a[a.a++];return new VJ(b,lJ(a.b.a,b))}
function wzb(a){var b;b=wV(a.a.je(BOc),158);if(!b){b=new mJ(mV(Ieb,RCc,1,[xMc,uMc,AMc,wMc,BMc,zMc,COc,DOc]),mV(Ieb,RCc,1,[EOc,FOc,GOc,HOc,IOc,JOc,KOc,LOc]));a.a.le(BOc,b)}return b}
function Axb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r;f=new xzb;n=new c7b;i=wV(n.j,98);zYb();Rr(n.o,zJc,5);q=fib(J3);o=new K_b(q);qj(o,new Exb(a,q),(uy(),uy(),ty));p=new V8b;Rr(p.e,zJc,3);S8b(p,new y4b("Cet exemple interagit avec l'\xE9chatillon de l'interface:"));S8b(p,o);Y6b(n,0,0,p);Rr(l7b(i,0),oLc,2);g=new Occ;Sr(g.cb,pLc,'Amelie');DC(g.a);JYb(g.cb,LFc,mOc);V6b(n,1,0,'<b>Pr\xE9nom:<\/b>');Y6b(n,1,1,g);k=new Occ;Sr(k.cb,pLc,'Crutcher');DC(k.a);JYb(k.cb,LFc,mOc);V6b(n,2,0,'<b>Nom:<\/b>');Y6b(n,2,1,k);b=new bac;c=wzb(f);for(e=c.ie().Zb();e.ue();){d=wV(e.ve(),159);j=wV(d.xe(),1);r=wV(d.Lc(),1);Z9b(b,r,j,-1)}V6b(n,3,0,'<b>Couleur Pr\xE9f\xE9r\xE9e:<\/b>');Y6b(n,3,1,b);return n}
var BOc='colorMap';Pfb(363,364,pDc,mJ);_.ge=function nJ(a){return (yV(a,1)?lJ(this,wV(a,1)):null)!=null};_.ie=function oJ(){return new JJ(this)};_.je=function pJ(a){return yV(a,1)?lJ(this,wV(a,1)):null};_.ne=function qJ(){return this.a.length};Pfb(365,366,rDc,JJ);_.qe=function KJ(a){var b,c;if(!yV(a,159)){return false}b=wV(a,159);c=kJ(this.a,b.xe());if(c!=null&&Usc(c,b.Lc())){return true}return false};_.Zb=function LJ(){return new PJ(this)};_.ne=function MJ(){return this.a.a.length};Pfb(368,1,{},PJ);_.ue=function QJ(){return this.a<this.b.a.a.length};_.ve=function RJ(){return OJ(this)};_.we=function SJ(){throw new $tc};_.a=0;Pfb(369,1,sDc,VJ);_.eQ=function WJ(a){var b;if(yV(a,159)){b=wV(a,159);if(Usc(this.a,b.xe())&&Usc(this.b,b.Lc())){return true}}return false};_.xe=function XJ(){return this.a};_.Lc=function YJ(){return this.b};_.hC=function ZJ(){var a,b;a=0;b=0;this.a!=null&&(a=ytc(this.a));this.b!=null&&(b=ytc(this.b));return a^b};_.ye=function $J(a){return UJ(wV(a,1))};_.tS=function _J(){return this.a+SGc+this.b};Pfb(655,1,BDc,Exb);_.Dc=function Fxb(a){$hb(this.a,this.b+xOc)};Pfb(656,1,EDc);_.lc=function Jxb(){yib(this.b,Axb(this.a))};Pfb(681,1,{},xzb);var J3=Src(xKc,'ExampleConstants'),g3=Qrc(xKc,'CwConstantsExample$1',655),I3=Qrc(xKc,'ExampleConstants_fr',681),a_=Qrc(MKc,'ConstantMap',363),_$=Qrc(MKc,'ConstantMap$EntryImpl',369),$$=Qrc(MKc,'ConstantMap$1',365),Z$=Qrc(MKc,'ConstantMap$1$1',368);rEc(In)(30);