function IVb(){}
function MVb(){}
function BVb(a,b){a.c=b}
function CVb(a){if(a==rVb){return true}tF();return a==uVb}
function DVb(a){if(a==qVb){return true}tF();return a==pVb}
function KVb(a){this.c=(BXb(),wXb).b;this.e=(IXb(),HXb).b;this.b=a}
function zVb(a,b){var c;c=lJ(a.bb,94);c.c=b.b;!!c.d&&yPb(c.d,b)}
function AVb(a,b){var c;c=lJ(a.bb,94);c.e=b.b;!!c.d&&MLb(c.d,bxc,b.b)}
function EVb(){vVb();APb.call(this);this.c=(BXb(),wXb);this.d=(IXb(),HXb);CLb();xs(this.f,cxc,0);xs(this.f,dxc,0)}
function vVb(){vVb=fqc;oVb=new IVb;rVb=new IVb;qVb=new IVb;pVb=new IVb;sVb=new IVb;tVb=new IVb;uVb=new IVb}
function wVb(a,b,c){var d;if(c==oVb){if(b==a.b){return}else if(a.b){throw new zfc('Only one CENTER widget may be added')}}Kj(b);E7b(a.k,b);c==oVb&&(a.b=b);d=new KVb(c);b.bb=d;zVb(b,a.c);AVb(b,a.d);yVb(a);Mj(b,a)}
function xVb(a,b){var c,d,e,f,g,i,j;b7b(a.db,Isc,b);i=new Knc;j=new P7b(a.k);while(j.c<j.d.d){c=N7b(j);g=lJ(c.bb,94).b;e=lJ(i.ud(g),140);d=!e?1:e.b;f=g==sVb?'north'+d:g==tVb?'south'+d:g==uVb?'west'+d:g==pVb?'east'+d:g==rVb?'linestart'+d:g==qVb?'lineend'+d:Twc;b7b((CLb(),Ss(c.db)),b,f);i.wd(g,Pfc(d+1))}}
function yVb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;b=a.e;while((CLb(),nNb(b))>0){ds(b,mNb(b,0))}q=1;e=1;for(i=new P7b(a.k);i.c<i.d.d;){d=N7b(i);f=lJ(d.bb,94).b;f==sVb||f==tVb?++q:(f==pVb||f==uVb||f==rVb||f==qVb)&&++e}r=aJ(Y1,lqc,95,q,0);for(g=0;g<q;++g){r[g]=new MVb;r[g].c=$doc.createElement(_wc);DLb(b,r[g].c)}k=0;n=e-1;o=0;s=q-1;c=null;for(i=new P7b(a.k);i.c<i.d.d;){d=N7b(i);j=lJ(d.bb,94);t=$doc.createElement(axc);j.d=t;ys(j.d,Lwc,j.c);MLb(j.d,bxc,j.e);ys(j.d,htc,Isc);ys(j.d,gtc,Isc);if(j.b==sVb){FLb(r[o].c,t,r[o].b);DLb(t,d.db);xs(t,Wyc,n-k+1);++o}else if(j.b==tVb){FLb(r[s].c,t,r[s].b);DLb(t,d.db);xs(t,Wyc,n-k+1);--s}else if(j.b==oVb){c=t}else if(CVb(j.b)){p=r[o];FLb(p.c,t,p.b++);DLb(t,d.db);xs(t,Pzc,s-o+1);++k}else if(DVb(j.b)){p=r[o];FLb(p.c,t,p.b);DLb(t,d.db);xs(t,Pzc,s-o+1);--n}}if(a.b){p=r[o];FLb(p.c,c,p.b);DLb(c,a.b.db)}}
o3(724,1,_qc);_.qc=function Yqb(){var a,b,c;U5(this.b,(a=new EVb,vj(a.db,'cw-DockPanel'),CLb(),xs(a.f,cxc,4),BVb(a,(BXb(),vXb)),wVb(a,new PTb('This is the first north component'),(vVb(),sVb)),wVb(a,new PTb('This is the first south component'),tVb),wVb(a,new PTb('This is the east component'),pVb),wVb(a,new PTb('This is the west component'),uVb),wVb(a,new PTb('This is the second north component'),sVb),wVb(a,new PTb('This is the second south component'),tVb),b=new PTb("This is a <code>ScrollPanel<\/code> contained at the center of a <code>DockPanel<\/code>.  By putting some fairly large contents in the middle and setting its size explicitly, it becomes a scrollable area within the page, but without requiring the use of an IFRAME.<br><br>Here's quite a bit more meaningless text that will serve primarily to make this thing scroll off the bottom of its visible area.  Otherwise, you might have to make it really, really small in order to see the nifty scroll bars!"),c=new IQb(b),MLb(c.db,htc,Nzc),MLb(c.db,gtc,Ozc),wVb(a,c,oVb),xVb(a,'cwDockPanel'),a))};o3(1027,983,pqc,EVb);_.Ib=function FVb(a){xVb(this,a)};_._b=function GVb(a){var b;b=kOb(this,a);if(b){a==this.b&&(this.b=null);yVb(this)}return b};var oVb,pVb,qVb,rVb,sVb,tVb,uVb;o3(1028,1,{},IVb);o3(1029,1,{94:1},KVb);o3(1030,1,{95:1},MVb);_.b=0;var nY=jfc(Sxc,'DockPanel',1027),mY=jfc(Sxc,'DockPanel$TmpRow',1030),Y1=ifc(Zxc,'DockPanel$TmpRow;',1361,mY),kY=jfc(Sxc,'DockPanel$DockLayoutConstant',1028),lY=jfc(Sxc,'DockPanel$LayoutData',1029);Orc(Vn)(11);