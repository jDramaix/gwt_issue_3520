function rXb(){}
function vXb(){}
function kXb(a,b){a.b=b}
function lXb(a){if(a==aXb){return true}gF();return a==dXb}
function mXb(a){if(a==_Wb){return true}gF();return a==$Wb}
function tXb(a){this.b=(iZb(),dZb).a;this.d=(pZb(),oZb).a;this.a=a}
function iXb(a,b){var c;c=$I(a.ab,96);c.b=b.a;!!c.c&&eRb(c.c,b)}
function jXb(a,b){var c;c=$I(a.ab,96);c.d=b.a;!!c.c&&tNb(c.c,eJc,b.a)}
function nXb(){eXb();gRb.call(this);this.b=(iZb(),dZb);this.c=(pZb(),oZb);iNb();Sr(this.e,fJc,0);Sr(this.e,gJc,0)}
function eXb(){eXb=esc;ZWb=new rXb;aXb=new rXb;_Wb=new rXb;$Wb=new rXb;bXb=new rXb;cXb=new rXb;dXb=new rXb}
function fXb(a,b,c){var d;if(c==ZWb){if(b==a.a){return}else if(a.a){throw new zhc(q0c)}}yj(b);y9b(a.j,b);c==ZWb&&(a.a=b);d=new tXb(c);b.ab=d;iXb(b,a.b);jXb(b,a.c);hXb(a);Aj(b,a)}
function gXb(a,b){var c,d,e,f,g,i,j;X8b(a.cb,Huc,b);i=new Jpc;j=new J9b(a.j);while(j.b<j.c.c){c=H9b(j);g=$I(c.ab,96).a;e=$I(i.nd(g),142);d=!e?1:e.a;f=g==bXb?r0c+d:g==cXb?s0c+d:g==dXb?t0c+d:g==$Wb?u0c+d:g==aXb?v0c+d:g==_Wb?w0c+d:RIc;X8b((iNb(),ks(c.cb)),b,f);i.pd(g,Phc(d+1))}}
function hXb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;b=a.d;while((iNb(),b.children.length)>0){yr(b,b.children[0])}q=1;e=1;for(i=new J9b(a.j);i.b<i.c.c;){d=H9b(i);f=$I(d.ab,96).a;f==bXb||f==cXb?++q:(f==$Wb||f==dXb||f==aXb||f==_Wb)&&++e}r=PI(L1,jsc,97,q,0);for(g=0;g<q;++g){r[g]=new vXb;r[g].b=qs($doc,cJc);jNb(b,r[g].b)}k=0;n=e-1;o=0;s=q-1;c=null;for(i=new J9b(a.j);i.b<i.c.c;){d=H9b(i);j=$I(d.ab,96);t=qs($doc,dJc);j.c=t;Tr(j.c,BIc,j.b);tNb(j.c,eJc,j.d);Tr(j.c,Ovc,Huc);Tr(j.c,Nvc,Huc);if(j.a==bXb){lNb(r[o].b,t,r[o].a);jNb(t,d.cb);Sr(t,AYc,n-k+1);++o}else if(j.a==cXb){lNb(r[s].b,t,r[s].a);jNb(t,d.cb);Sr(t,AYc,n-k+1);--s}else if(j.a==ZWb){c=t}else if(lXb(j.a)){p=r[o];lNb(p.b,t,p.a++);jNb(t,d.cb);Sr(t,x0c,s-o+1);++k}else if(mXb(j.a)){p=r[o];lNb(p.b,t,p.a);jNb(t,d.cb);Sr(t,x0c,s-o+1);--n}}if(a.a){p=r[o];lNb(p.b,c,p.a);jNb(c,a.a.cb)}}
var y0c='DockPanel',B0c='DockPanel$DockLayoutConstant',C0c='DockPanel$LayoutData',z0c='DockPanel$TmpRow',A0c='DockPanel$TmpRow;',q0c='Only one CENTER widget may be added',m0c="This is a <code>ScrollPanel<\/code> contained at the center of a <code>DockPanel<\/code>.  By putting some fairly large contents in the middle and setting its size explicitly, it becomes a scrollable area within the page, but without requiring the use of an IFRAME.<br><br>Here's quite a bit more meaningless text that will serve primarily to make this thing scroll off the bottom of its visible area.  Otherwise, you might have to make it really, really small in order to see the nifty scroll bars!",i0c='This is the east component',g0c='This is the first north component',h0c='This is the first south component',k0c='This is the second north component',l0c='This is the second south component',j0c='This is the west component',f0c='cw-DockPanel',p0c='cwDockPanel',u0c='east',w0c='lineend',v0c='linestart',r0c='north',s0c='south',t0c='west';b3(726,1,$sc);_.mc=function Irb(){var a,b,c;k6(this.a,(a=new nXb,jj(a.cb,f0c),iNb(),Sr(a.e,fJc,4),kXb(a,(iZb(),cZb)),fXb(a,new vVb(g0c),(eXb(),bXb)),fXb(a,new vVb(h0c),cXb),fXb(a,new vVb(i0c),$Wb),fXb(a,new vVb(j0c),dXb),fXb(a,new vVb(k0c),bXb),fXb(a,new vVb(l0c),cXb),b=new vVb(m0c),c=new oSb(b),tNb(c.cb,Ovc,n0c),tNb(c.cb,Nvc,o0c),fXb(a,c,ZWb),gXb(a,p0c),a))};b3(1031,987,nsc,nXb);_.Eb=function oXb(a){gXb(this,a)};_.Xb=function pXb(a){var b;b=VPb(this,a);if(b){a==this.a&&(this.a=null);hXb(this)}return b};var ZWb,$Wb,_Wb,aXb,bXb,cXb,dXb;b3(1032,1,{},rXb);b3(1033,1,{96:1},tXb);b3(1034,1,{97:1},vXb);_.a=0;var ZX=jhc(fMc,y0c,1031),YX=jhc(fMc,z0c,1034),L1=ihc(sNc,A0c,1370,YX),WX=jhc(fMc,B0c,1032),XX=jhc(fMc,C0c,1033);Mtc(Jn)(11);