function IUb(){}
function MUb(){}
function BUb(a,b){a.c=b}
function CUb(a){if(a==rUb){return true}IE();return a==uUb}
function DUb(a){if(a==qUb){return true}IE();return a==pUb}
function KUb(a){this.c=(DWb(),yWb).b;this.e=(KWb(),JWb).b;this.b=a}
function zUb(a,b){var c;c=AI(a.bb,94);c.c=b.b;!!c.d&&yOb(c.d,b)}
function AUb(a,b){var c;c=AI(a.bb,94);c.e=b.b;!!c.d&&RKb(c.d,Hvc,b.b)}
function EUb(){vUb();AOb.call(this);this.c=(DWb(),yWb);this.d=(KWb(),JWb);HKb();Rr(this.f,Ivc,0);Rr(this.f,Jvc,0)}
function vUb(){vUb=Soc;oUb=new IUb;rUb=new IUb;qUb=new IUb;pUb=new IUb;sUb=new IUb;tUb=new IUb;uUb=new IUb}
function wUb(a,b,c){var d;if(c==oUb){if(b==a.b){return}else if(a.b){throw new lec('Only one CENTER widget may be added')}}yj(b);F6b(a.k,b);c==oUb&&(a.b=b);d=new KUb(c);b.bb=d;zUb(b,a.c);AUb(b,a.d);yUb(a);Aj(b,a)}
function xUb(a,b){var c,d,e,f,g,i,j;c6b(a.db,rrc,b);i=new vmc;j=new Q6b(a.k);while(j.c<j.d.d){c=O6b(j);g=AI(c.bb,94).b;e=AI(i.md(g),140);d=!e?1:e.b;f=g==sUb?'north'+d:g==tUb?'south'+d:g==uUb?'west'+d:g==pUb?'east'+d:g==rUb?'linestart'+d:g==qUb?'lineend'+d:wvc;c6b((HKb(),ks(c.db)),b,f);i.od(g,Bec(d+1))}}
function yUb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;b=a.e;while((HKb(),tMb(b))>0){xr(b,sMb(b,0))}q=1;e=1;for(i=new Q6b(a.k);i.c<i.d.d;){d=O6b(i);f=AI(d.bb,94).b;f==sUb||f==tUb?++q:(f==pUb||f==uUb||f==rUb||f==qUb)&&++e}r=pI(b1,Xoc,95,q,0);for(g=0;g<q;++g){r[g]=new MUb;r[g].c=$doc.createElement(Fvc);IKb(b,r[g].c)}k=0;n=e-1;o=0;s=q-1;c=null;for(i=new Q6b(a.k);i.c<i.d.d;){d=O6b(i);j=AI(d.bb,94);t=$doc.createElement(Gvc);j.d=t;Sr(j.d,ovc,j.c);RKb(j.d,Hvc,j.e);Sr(j.d,Src,rrc);Sr(j.d,Rrc,rrc);if(j.b==sUb){KKb(r[o].c,t,r[o].b);IKb(t,d.db);Rr(t,zxc,n-k+1);++o}else if(j.b==tUb){KKb(r[s].c,t,r[s].b);IKb(t,d.db);Rr(t,zxc,n-k+1);--s}else if(j.b==oUb){c=t}else if(CUb(j.b)){p=r[o];KKb(p.c,t,p.b++);IKb(t,d.db);Rr(t,syc,s-o+1);++k}else if(DUb(j.b)){p=r[o];KKb(p.c,t,p.b);IKb(t,d.db);Rr(t,syc,s-o+1);--n}}if(a.b){p=r[o];KKb(p.c,c,p.b);IKb(c,a.b.db)}}
t2(719,1,Lpc);_.mc=function bqb(){var a,b,c;Z4(this.b,(a=new EUb,jj(a.db,'cw-DockPanel'),HKb(),Rr(a.f,Ivc,4),BUb(a,(DWb(),xWb)),wUb(a,new PSb('This is the first north component'),(vUb(),sUb)),wUb(a,new PSb('This is the first south component'),tUb),wUb(a,new PSb('This is the east component'),pUb),wUb(a,new PSb('This is the west component'),uUb),wUb(a,new PSb('This is the second north component'),sUb),wUb(a,new PSb('This is the second south component'),tUb),b=new PSb("This is a <code>ScrollPanel<\/code> contained at the center of a <code>DockPanel<\/code>.  By putting some fairly large contents in the middle and setting its size explicitly, it becomes a scrollable area within the page, but without requiring the use of an IFRAME.<br><br>Here's quite a bit more meaningless text that will serve primarily to make this thing scroll off the bottom of its visible area.  Otherwise, you might have to make it really, really small in order to see the nifty scroll bars!"),c=new IPb(b),RKb(c.db,Src,qyc),RKb(c.db,Rrc,ryc),wUb(a,c,oUb),xUb(a,'cwDockPanel'),a))};t2(1019,975,_oc,EUb);_.Eb=function FUb(a){xUb(this,a)};_.Xb=function GUb(a){var b;b=nNb(this,a);if(b){a==this.b&&(this.b=null);yUb(this)}return b};var oUb,pUb,qUb,rUb,sUb,tUb,uUb;t2(1020,1,{},IUb);t2(1021,1,{94:1},KUb);t2(1022,1,{95:1},MUb);_.b=0;var tX=Xdc(vwc,'DockPanel',1019),sX=Xdc(vwc,'DockPanel$TmpRow',1022),b1=Wdc(Cwc,'DockPanel$TmpRow;',1352,sX),qX=Xdc(vwc,'DockPanel$DockLayoutConstant',1020),rX=Xdc(vwc,'DockPanel$LayoutData',1021);yqc(Jn)(11);