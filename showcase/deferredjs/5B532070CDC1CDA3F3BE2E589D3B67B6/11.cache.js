function sVb(){}
function wVb(){}
function lVb(a,b){a.c=b}
function mVb(a){if(a==bVb){return true}gF();return a==eVb}
function nVb(a){if(a==aVb){return true}gF();return a==_Ub}
function uVb(a){this.c=(jXb(),eXb).b;this.e=(qXb(),pXb).b;this.b=a}
function jVb(a,b){var c;c=$I(a.bb,94);c.c=b.b;!!c.d&&iPb(c.d,b)}
function kVb(a,b){var c;c=$I(a.bb,94);c.e=b.b;!!c.d&&wLb(c.d,Bwc,b.b)}
function oVb(){fVb();kPb.call(this);this.c=(jXb(),eXb);this.d=(qXb(),pXb);mLb();ds(this.f,Cwc,0);ds(this.f,Dwc,0)}
function fVb(){fVb=Gpc;$Ub=new sVb;bVb=new sVb;aVb=new sVb;_Ub=new sVb;cVb=new sVb;dVb=new sVb;eVb=new sVb}
function gVb(a,b,c){var d;if(c==$Ub){if(b==a.b){return}else if(a.b){throw new _ec('Only one CENTER widget may be added')}}Jj(b);l7b(a.k,b);c==$Ub&&(a.b=b);d=new uVb(c);b.bb=d;jVb(b,a.c);kVb(b,a.d);iVb(a);Lj(b,a)}
function hVb(a,b){var c,d,e,f,g,i,j;K6b(a.db,gsc,b);i=new jnc;j=new w7b(a.k);while(j.c<j.d.d){c=u7b(j);g=$I(c.bb,94).b;e=$I(i.qd(g),140);d=!e?1:e.b;f=g==cVb?'north'+d:g==dVb?'south'+d:g==eVb?'west'+d:g==_Ub?'east'+d:g==bVb?'linestart'+d:g==aVb?'lineend'+d:pwc;K6b((mLb(),ys(c.db)),b,f);i.sd(g,pfc(d+1))}}
function iVb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;b=a.e;while((mLb(),$Mb(b))>0){Jr(b,ZMb(b,0))}q=1;e=1;for(i=new w7b(a.k);i.c<i.d.d;){d=u7b(i);f=$I(d.bb,94).b;f==cVb||f==dVb?++q:(f==_Ub||f==eVb||f==bVb||f==aVb)&&++e}r=PI(F1,Mpc,95,q,0);for(g=0;g<q;++g){r[g]=new wVb;r[g].c=$doc.createElement(zwc);nLb(b,r[g].c)}k=0;n=e-1;o=0;s=q-1;c=null;for(i=new w7b(a.k);i.c<i.d.d;){d=u7b(i);j=$I(d.bb,94);t=$doc.createElement(Awc);j.d=t;es(j.d,hwc,j.c);wLb(j.d,Bwc,j.e);es(j.d,Hsc,gsc);es(j.d,Gsc,gsc);if(j.b==cVb){pLb(r[o].c,t,r[o].b);nLb(t,d.db);ds(t,uyc,n-k+1);++o}else if(j.b==dVb){pLb(r[s].c,t,r[s].b);nLb(t,d.db);ds(t,uyc,n-k+1);--s}else if(j.b==$Ub){c=t}else if(mVb(j.b)){p=r[o];pLb(p.c,t,p.b++);nLb(t,d.db);ds(t,nzc,s-o+1);++k}else if(nVb(j.b)){p=r[o];pLb(p.c,t,p.b);nLb(t,d.db);ds(t,nzc,s-o+1);--n}}if(a.b){p=r[o];pLb(p.c,c,p.b);nLb(c,a.b.db)}}
X2(720,1,Aqc);_.qc=function Fqb(){var a,b,c;B5(this.b,(a=new oVb,uj(a.db,'cw-DockPanel'),mLb(),ds(a.f,Cwc,4),lVb(a,(jXb(),dXb)),gVb(a,new zTb('This is the first north component'),(fVb(),cVb)),gVb(a,new zTb('This is the first south component'),dVb),gVb(a,new zTb('This is the east component'),_Ub),gVb(a,new zTb('This is the west component'),eVb),gVb(a,new zTb('This is the second north component'),cVb),gVb(a,new zTb('This is the second south component'),dVb),b=new zTb("This is a <code>ScrollPanel<\/code> contained at the center of a <code>DockPanel<\/code>.  By putting some fairly large contents in the middle and setting its size explicitly, it becomes a scrollable area within the page, but without requiring the use of an IFRAME.<br><br>Here's quite a bit more meaningless text that will serve primarily to make this thing scroll off the bottom of its visible area.  Otherwise, you might have to make it really, really small in order to see the nifty scroll bars!"),c=new sQb(b),wLb(c.db,Hsc,lzc),wLb(c.db,Gsc,mzc),gVb(a,c,$Ub),hVb(a,'cwDockPanel'),a))};X2(1023,979,Qpc,oVb);_.Ib=function pVb(a){hVb(this,a)};_._b=function qVb(a){var b;b=ZNb(this,a);if(b){a==this.b&&(this.b=null);iVb(this)}return b};var $Ub,_Ub,aVb,bVb,cVb,dVb,eVb;X2(1024,1,{},sVb);X2(1025,1,{94:1},uVb);X2(1026,1,{95:1},wVb);_.b=0;var YX=Lec(qxc,'DockPanel',1023),XX=Lec(qxc,'DockPanel$TmpRow',1026),F1=Kec(xxc,'DockPanel$TmpRow;',1356,XX),VX=Lec(qxc,'DockPanel$DockLayoutConstant',1024),WX=Lec(qxc,'DockPanel$LayoutData',1025);nrc(Vn)(11);