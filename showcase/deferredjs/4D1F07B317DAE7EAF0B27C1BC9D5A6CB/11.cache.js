function DAc(){}
function HAc(){}
function wAc(a,b){a.b=b}
function xAc(a){if(a==mAc){return true}wH();return a==pAc}
function yAc(a){if(a==lAc){return true}wH();return a==kAc}
function FAc(a){this.b=(uCc(),pCc).a;this.d=(BCc(),ACc).a;this.a=a}
function uAc(a,b){var c;c=Amb(a.ab,96);c.b=b.a;!!c.c&&tuc(c.c,b)}
function vAc(a,b){var c;c=Amb(a.ab,96);c.d=b.a;!!c.c&&Vqc(c.c,ecd,b.a)}
function zAc(){qAc();vuc.call(this);this.b=(uCc(),pCc);this.c=(BCc(),ACc);Lqc();Rr(this.e,fcd,0);Rr(this.e,gcd,0)}
function qAc(){qAc=X4c;jAc=new DAc;mAc=new DAc;lAc=new DAc;kAc=new DAc;nAc=new DAc;oAc=new DAc;pAc=new DAc}
function rAc(a,b,c){var d;if(c==jAc){if(b==a.a){return}else if(a.a){throw new qWc('Only one CENTER widget may be added')}}xj(b);BOc(a.j,b);c==jAc&&(a.a=b);d=new FAc(c);b.ab=d;uAc(b,a.b);vAc(b,a.c);tAc(a);zj(b,a)}
function sAc(a,b){var c,d,e,f,g,i,j;$Nc(a.cb,w7c,b);i=new A2c;j=new MOc(a.j);while(j.b<j.c.c){c=KOc(j);g=Amb(c.ab,96).a;e=Amb(i.je(g),142);d=!e?1:e.a;f=g==nAc?'north'+d:g==oAc?'south'+d:g==pAc?'west'+d:g==kAc?'east'+d:g==mAc?'linestart'+d:g==lAc?'lineend'+d:Zbd;$Nc((Lqc(),js(c.cb)),b,f);i.le(g,GWc(d+1))}}
function tAc(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;b=a.d;while((Lqc(),b.children.length)>0){xr(b,b.children[0])}q=1;e=1;for(i=new MOc(a.j);i.b<i.c.c;){d=KOc(i);f=Amb(d.ab,96).a;f==nAc||f==oAc?++q:(f==kAc||f==pAc||f==mAc||f==lAc)&&++e}r=pmb(JIb,a5c,97,q,0);for(g=0;g<q;++g){r[g]=new HAc;r[g].b=qs($doc,ccd);Mqc(b,r[g].b)}k=0;n=e-1;o=0;s=q-1;c=null;for(i=new MOc(a.j);i.b<i.c.c;){d=KOc(i);j=Amb(d.ab,96);t=qs($doc,dcd);j.c=t;Sr(j.c,Sbd,j.b);Vqc(j.c,ecd,j.d);Sr(j.c,X7c,w7c);Sr(j.c,W7c,w7c);if(j.a==nAc){Oqc(r[o].b,t,r[o].a);Mqc(t,d.cb);Rr(t,$dd,n-k+1);++o}else if(j.a==oAc){Oqc(r[s].b,t,r[s].a);Mqc(t,d.cb);Rr(t,$dd,n-k+1);--s}else if(j.a==jAc){c=t}else if(xAc(j.a)){p=r[o];Oqc(p.b,t,p.a++);Mqc(t,d.cb);Rr(t,Ted,s-o+1);++k}else if(yAc(j.a)){p=r[o];Oqc(p.b,t,p.a);Mqc(t,d.cb);Rr(t,Ted,s-o+1);--n}}if(a.a){p=r[o];Oqc(p.b,c,p.a);Mqc(c,a.a.cb)}}
_Jb(809,1,Q5c);_.lc=function O5b(){var a,b,c;KMb(this.a,(a=new zAc,ij(a.cb,'cw-DockPanel'),Lqc(),Rr(a.e,fcd,4),wAc(a,(uCc(),oCc)),rAc(a,new Kyc('This is the first north component'),(qAc(),nAc)),rAc(a,new Kyc('This is the first south component'),oAc),rAc(a,new Kyc('This is the east component'),kAc),rAc(a,new Kyc('This is the west component'),pAc),rAc(a,new Kyc('This is the second north component'),nAc),rAc(a,new Kyc('This is the second south component'),oAc),b=new Kyc("This is a <code>ScrollPanel<\/code> contained at the center of a <code>DockPanel<\/code>.  By putting some fairly large contents in the middle and setting its size explicitly, it becomes a scrollable area within the page, but without requiring the use of an IFRAME.<br><br>Here's quite a bit more meaningless text that will serve primarily to make this thing scroll off the bottom of its visible area.  Otherwise, you might have to make it really, really small in order to see the nifty scroll bars!"),c=new Dvc(b),Vqc(c.cb,X7c,Red),Vqc(c.cb,W7c,Sed),rAc(a,c,jAc),sAc(a,'cwDockPanel'),a))};_Jb(1113,1069,e5c,zAc);_.Db=function AAc(a){sAc(this,a)};_.Wb=function BAc(a){var b;b=itc(this,a);if(b){a==this.a&&(this.a=null);tAc(this)}return b};var jAc,kAc,lAc,mAc,nAc,oAc,pAc;_Jb(1114,1,{},DAc);_Jb(1115,1,{96:1},FAc);_Jb(1116,1,{97:1},HAc);_.a=0;var aDb=aWc(Wcd,'DockPanel',1113),_Cb=aWc(Wcd,'DockPanel$TmpRow',1116),JIb=_Vc(bdd,'DockPanel$TmpRow;',1447,_Cb),ZCb=aWc(Wcd,'DockPanel$DockLayoutConstant',1114),$Cb=aWc(Wcd,'DockPanel$LayoutData',1115);D6c(In)(11);