function Xy(){}
function cz(){}
function vz(){}
function Nj(a,b){Aj(b,a)}
function Wy(a,b){ASb(b.a,a)}
function bz(a,b){BSb(b.a,a)}
function uz(a,b){CSb(b.a,a)}
function Arb(a){this.a=a}
function Hrb(a){this.a=a}
function USb(a){this.a=a}
function mTb(a){this.a=a}
function ISb(a){a.f=false;eLb(a.cb)}
function KSb(){LSb.call(this,new kTb)}
function ASb(a,b){GSb(a,(a.a,hy(b)),iy(b))}
function BSb(a,b){HSb(a,(a.a,hy(b)),iy(b))}
function CSb(a,b){ISb(a,(a.a,hy(b),iy(b)))}
function JSb(a){!a.g&&(a.g=QLb(new USb(a)));sk(a)}
function az(){az=upc;_y=new vy(Gvc,new cz)}
function tz(){tz=upc;sz=new vy(Jvc,new vz)}
function Vy(){Vy=upc;Uy=new vy(kvc,new Xy)}
function DSb(a,b){if(a.g){Ldc(a.g.a);a.g=null}fk(a,b)}
function kTb(){_Sb();hTb.call(this);jj(this.cb,'Caption')}
function VOb(a,b,c){var d;d=TOb(a,b);!!d&&($Kb(),Tr(d,Rvc,c.a))}
function tSb(a,b){var c,d;d=($Kb(),LMb(a.b,b));c=LMb(d,1);return js(c)}
function GSb(a,b,c){if(!($Kb(),$Kb(),ZKb)){a.f=true;fLb(a.cb);a.d=b;a.e=c}}
function FSb(a,b){z6b(a.cb,Vrc,b);Pi(a.a,b+'-caption');z6b(tSb(a.j,1),b,Gyc)}
function ESb(a,b){var c;c=b.target;if(Xr(c)){return Hs(ls(tSb(a.j,0)),c)}return false}
function hy(a){var b,c;b=a.b;if(b){return c=a.a,bs(c)-zs(b)+Ds(b)+(b.ownerDocument,$wnd.pageXOffset)}return bs(a.a)}
function iy(a){var b,c;b=a.b;if(b){return c=a.a,cs(c)-(Bs(b)+$wnd.pageYOffset)+Kr(b)+(b.ownerDocument,$wnd.pageYOffset)}return cs(a.a)}
function HSb(a,b,c){var d,e;if(a.f){d=b+($Kb(),zs(a.cb));e=c+(Bs(a.cb)+$wnd.pageYOffset);if(d<a.b||d>=a.i||e<a.c){return}mk(a,d-a.d,e-a.e)}}
function lk(a){a.w=true;if(!a.s){a.s=$doc.createElement(zsc);Pr(a.s,'gwt-PopupPanelGlass');a.s.style[Ltc]=(yv(),Mtc);a.s.style[Otc]=0+(yw(),dtc);a.s.style[Ptc]=Qtc}}
function LSb(a){var b,c;QRb.call(this,false,true,prc);yj(a);this.a=a;c=tSb(this.j,0);_Kb(c,this.a.cb);Nj(this,this.a);jj(ls(($Kb(),js(this.cb))),'gwt-DialogBox');this.i=Ks($doc);this.b=0;this.c=0;b=new mTb(this);rj(this,b,(Vy(),Vy(),Uy));rj(this,b,(tz(),tz(),sz));rj(this,b,(az(),az(),_y));rj(this,b,(nz(),nz(),mz));rj(this,b,(hz(),hz(),gz))}
function wrb(){var a,b,c,d,e,f,g,i,j,k,n;a=(g=new KSb,FSb(g,'cwDialogBox'),aTb(g.a,'Sample DialogBox'),i=new Y6b,$Kb(),Sr(i.e,fwc,4),Sj(g.j,i),gk(g),j=new jTb('This is an example of a standard dialog box component.'),V6b(i,j),VOb(i,j,(VWb(),PWb)),k=new hKb((t7(),i7)),V6b(i,k),VOb(i,k,PWb),n=new ROb(wyc,new Hrb(g)),V6b(i,n),PE(),VOb(i,n,UWb),g);lk(a);a.v=true;e=new ROb('Show Dialog Box',new Arb(a));d=new jTb('<br><br><br>This list box demonstrates that you can drag the popup over it. This obscure corner case renders incorrectly for many other libraries.');c=new OYb;Xs(c.cb,1);for(b=10;b>0;--b){KYb(c,Uyc+b,Uyc+b,-1)}f=new Y6b;Sr(f.e,fwc,8);V6b(f,e);V6b(f,d);V6b(f,c);return f}
var Uyc='item ';C2(293,282,{},Xy);_.xc=function Yy(a){Wy(this,HI(a,37))};_.Ac=function Zy(){return Uy};var Uy;C2(294,282,{},cz);_.xc=function dz(a){bz(this,HI(a,38))};_.Ac=function ez(){return _y};var _y;C2(297,282,{},vz);_.xc=function wz(a){uz(this,HI(a,41))};_.Ac=function xz(){return sz};var sz;C2(740,1,kqc,Arb);_.Dc=function Brb(a){ak(this.a);JSb(this.a)};C2(741,1,nqc);_.lc=function Frb(){l5(this.a,wrb())};C2(742,1,kqc,Hrb);_.Dc=function Irb(a){DSb(this.a,false)};C2(1008,1004,Epc,KSb);_.Lb=function MSb(){try{vj(this.j)}finally{vj(this.a)}};_.Mb=function NSb(){try{xj(this.j)}finally{xj(this.a)}};_._b=function OSb(a){DSb(this,a)};_.Qb=function PSb(a){switch($Kb(),oMb(a.type)){case 4:case 8:case 64:case 16:case 32:if(!this.f&&!ESb(this,a)){return}}wj(this,a)};_.Db=function QSb(a){FSb(this,a)};_.ac=function RSb(a){var b;b=a.d;!a.a&&nLb(a.d)==4&&ESb(this,b)&&vs(b);a.c&&(a.d,false)&&(a.a=true)};_.bc=function SSb(){JSb(this)};_.b=0;_.c=0;_.d=0;_.e=0;_.f=false;_.i=0;C2(1009,1,vqc,USb);_.Kc=function VSb(a){this.a.i=a.a};C2(1010,1011,Cpc,kTb);C2(1014,1,{37:1,38:1,39:1,40:1,41:1,53:1},mTb);_.Gc=function nTb(a){};_.Hc=function oTb(a){};var zT=zec(Zwc,'CwDialogBox$1',740),BT=zec(Zwc,'CwDialogBox$3',742),pX=zec(Vwc,'DialogBox',1008),nX=zec(Vwc,'DialogBox$CaptionImpl',1010),oX=zec(Vwc,'DialogBox$MouseHandler',1014),mX=zec(Vwc,'DialogBox$1',1009),cN=zec(txc,'MouseDownEvent',293),hN=zec(txc,'MouseUpEvent',297),eN=zec(txc,'MouseMoveEvent',294);arc(Jn)(15);