function sAc(){}
function wAc(){}
function lAc(a,b){a.b=b}
function mAc(a){if(a==bAc){return true}mH();return a==eAc}
function nAc(a){if(a==aAc){return true}mH();return a==_zc}
function uAc(a){this.b=(kCc(),fCc).a;this.d=(rCc(),qCc).a;this.a=a}
function jAc(a,b){var c;c=qmb(a.ab,96);c.b=b.a;!!c.c&&iuc(c.c,b)}
function kAc(a,b){var c;c=qmb(a.ab,96);c.d=b.a;!!c.c&&yqc(c.c,Vbd,b.a)}
function oAc(){fAc();kuc.call(this);this.b=(kCc(),fCc);this.c=(rCc(),qCc);oqc();Sr(this.e,Wbd,0);Sr(this.e,Xbd,0)}
function fAc(){fAc=L4c;$zc=new sAc;bAc=new sAc;aAc=new sAc;_zc=new sAc;cAc=new sAc;dAc=new sAc;eAc=new sAc}
function gAc(a,b,c){var d;if(c==$zc){if(b==a.a){return}else if(a.a){throw new eWc('Only one CENTER widget may be added')}}yj(b);rOc(a.j,b);c==$zc&&(a.a=b);d=new uAc(c);b.ab=d;jAc(b,a.b);kAc(b,a.c);iAc(a);Aj(b,a)}
function hAc(a,b){var c,d,e,f,g,i,j;QNc(a.cb,k7c,b);i=new o2c;j=new COc(a.j);while(j.b<j.c.c){c=AOc(j);g=qmb(c.ab,96).a;e=qmb(i.je(g),142);d=!e?1:e.a;f=g==cAc?'north'+d:g==dAc?'south'+d:g==eAc?'west'+d:g==_zc?'east'+d:g==bAc?'linestart'+d:g==aAc?'lineend'+d:Obd;QNc((oqc(),ls(c.cb)),b,f);i.le(g,uWc(d+1))}}
function iAc(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;b=a.d;while((oqc(),asc(b))>0){yr(b,_rc(b,0))}q=1;e=1;for(i=new COc(a.j);i.b<i.c.c;){d=AOc(i);f=qmb(d.ab,96).a;f==cAc||f==dAc?++q:(f==_zc||f==eAc||f==bAc||f==aAc)&&++e}r=fmb(AIb,Q4c,97,q,0);for(g=0;g<q;++g){r[g]=new wAc;r[g].b=$doc.createElement(Tbd);pqc(b,r[g].b)}k=0;n=e-1;o=0;s=q-1;c=null;for(i=new COc(a.j);i.b<i.c.c;){d=AOc(i);j=qmb(d.ab,96);t=$doc.createElement(Ubd);j.c=t;Tr(j.c,Gbd,j.b);yqc(j.c,Vbd,j.d);Tr(j.c,L7c,k7c);Tr(j.c,K7c,k7c);if(j.a==cAc){rqc(r[o].b,t,r[o].a);pqc(t,d.cb);Sr(t,Odd,n-k+1);++o}else if(j.a==dAc){rqc(r[s].b,t,r[s].a);pqc(t,d.cb);Sr(t,Odd,n-k+1);--s}else if(j.a==$zc){c=t}else if(mAc(j.a)){p=r[o];rqc(p.b,t,p.a++);pqc(t,d.cb);Sr(t,Hed,s-o+1);++k}else if(nAc(j.a)){p=r[o];rqc(p.b,t,p.a);pqc(t,d.cb);Sr(t,Hed,s-o+1);--n}}if(a.a){p=r[o];rqc(p.b,c,p.a);pqc(c,a.a.cb)}}
SJb(810,1,E5c);_.lc=function F5b(){var a,b,c;BMb(this.a,(a=new oAc,jj(a.cb,'cw-DockPanel'),oqc(),Sr(a.e,Wbd,4),lAc(a,(kCc(),eCc)),gAc(a,new zyc('This is the first north component'),(fAc(),cAc)),gAc(a,new zyc('This is the first south component'),dAc),gAc(a,new zyc('This is the east component'),_zc),gAc(a,new zyc('This is the west component'),eAc),gAc(a,new zyc('This is the second north component'),cAc),gAc(a,new zyc('This is the second south component'),dAc),b=new zyc("This is a <code>ScrollPanel<\/code> contained at the center of a <code>DockPanel<\/code>.  By putting some fairly large contents in the middle and setting its size explicitly, it becomes a scrollable area within the page, but without requiring the use of an IFRAME.<br><br>Here's quite a bit more meaningless text that will serve primarily to make this thing scroll off the bottom of its visible area.  Otherwise, you might have to make it really, really small in order to see the nifty scroll bars!"),c=new svc(b),yqc(c.cb,L7c,Fed),yqc(c.cb,K7c,Ged),gAc(a,c,$zc),hAc(a,'cwDockPanel'),a))};SJb(1115,1071,U4c,oAc);_.Db=function pAc(a){hAc(this,a)};_.Wb=function qAc(a){var b;b=Zsc(this,a);if(b){a==this.a&&(this.a=null);iAc(this)}return b};var $zc,_zc,aAc,bAc,cAc,dAc,eAc;SJb(1116,1,{},sAc);SJb(1117,1,{96:1},uAc);SJb(1118,1,{97:1},wAc);_.a=0;var TCb=QVc(Kcd,'DockPanel',1115),SCb=QVc(Kcd,'DockPanel$TmpRow',1118),AIb=PVc(Rcd,'DockPanel$TmpRow;',1448,SCb),QCb=QVc(Kcd,'DockPanel$DockLayoutConstant',1116),RCb=QVc(Kcd,'DockPanel$LayoutData',1117);r6c(Jn)(11);