function Yzc(){}
function aAc(){}
function Rzc(a,b){a.c=b}
function Szc(a){if(a==Hzc){return true}fH();return a==Kzc}
function Tzc(a){if(a==Gzc){return true}fH();return a==Fzc}
function $zc(a){this.c=(UBc(),PBc).b;this.e=(_Bc(),$Bc).b;this.b=a}
function Pzc(a,b){var c;c=jmb(a.bb,95);c.c=b.b;!!c.d&&Otc(c.d,b)}
function Qzc(a,b){var c;c=jmb(a.bb,95);c.e=b.b;!!c.d&&fqc(c.d,wbd,b.b)}
function Lzc(){Lzc=h4c;Ezc=new Yzc;Hzc=new Yzc;Gzc=new Yzc;Fzc=new Yzc;Izc=new Yzc;Jzc=new Yzc;Kzc=new Yzc}
function Uzc(){Lzc();Qtc.call(this);this.c=(UBc(),PBc);this.d=(_Bc(),$Bc);Xpc();Rr(this.f,xbd,0);Rr(this.f,ybd,0)}
function Mzc(a,b,c){var d;if(c==Ezc){if(b==a.b){return}else if(a.b){throw new CVc('Only one CENTER widget may be added')}}yj(b);WNc(a.k,b);c==Ezc&&(a.b=b);d=new $zc(c);b.bb=d;Pzc(b,a.c);Qzc(b,a.d);Ozc(a);Aj(b,a)}
function Nzc(a,b){var c,d,e,f,g,i,j;tNc(a.db,I6c,b);i=new M1c;j=new fOc(a.k);while(j.c<j.d.d){c=dOc(j);g=jmb(c.bb,95).b;e=jmb(i.je(g),141);d=!e?1:e.b;f=g==Izc?'north'+d:g==Jzc?'south'+d:g==Kzc?'west'+d:g==Fzc?'east'+d:g==Hzc?'linestart'+d:g==Gzc?'lineend'+d:lbd;tNc((Xpc(),ks(c.db)),b,f);i.le(g,SVc(d+1))}}
function Ozc(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;b=a.e;while((Xpc(),Jrc(b))>0){xr(b,Irc(b,0))}q=1;e=1;for(i=new fOc(a.k);i.c<i.d.d;){d=dOc(i);f=jmb(d.bb,95).b;f==Izc||f==Jzc?++q:(f==Fzc||f==Kzc||f==Hzc||f==Gzc)&&++e}r=$lb(rIb,m4c,96,q,0);for(g=0;g<q;++g){r[g]=new aAc;r[g].c=$doc.createElement(ubd);Ypc(b,r[g].c)}k=0;n=e-1;o=0;s=q-1;c=null;for(i=new fOc(a.k);i.c<i.d.d;){d=dOc(i);j=jmb(d.bb,95);t=$doc.createElement(vbd);j.d=t;Sr(j.d,dbd,j.c);fqc(j.d,wbd,j.e);Sr(j.d,h7c,I6c);Sr(j.d,g7c,I6c);if(j.b==Izc){$pc(r[o].c,t,r[o].b);Ypc(t,d.db);Rr(t,odd,n-k+1);++o}else if(j.b==Jzc){$pc(r[s].c,t,r[s].b);Ypc(t,d.db);Rr(t,odd,n-k+1);--s}else if(j.b==Ezc){c=t}else if(Szc(j.b)){p=r[o];$pc(p.c,t,p.b++);Ypc(t,d.db);Rr(t,hed,s-o+1);++k}else if(Tzc(j.b)){p=r[o];$pc(p.c,t,p.b);Ypc(t,d.db);Rr(t,hed,s-o+1);--n}}if(a.b){p=r[o];$pc(p.c,c,p.b);Ypc(c,a.b.db)}}
JJb(806,1,a5c);_.mc=function r5b(){var a,b,c;nMb(this.b,(a=new Uzc,jj(a.db,'cw-DockPanel'),Xpc(),Rr(a.f,xbd,4),Rzc(a,(UBc(),OBc)),Mzc(a,new dyc('This is the first north component'),(Lzc(),Izc)),Mzc(a,new dyc('This is the first south component'),Jzc),Mzc(a,new dyc('This is the east component'),Fzc),Mzc(a,new dyc('This is the west component'),Kzc),Mzc(a,new dyc('This is the second north component'),Izc),Mzc(a,new dyc('This is the second south component'),Jzc),b=new dyc("This is a <code>ScrollPanel<\/code> contained at the center of a <code>DockPanel<\/code>.  By putting some fairly large contents in the middle and setting its size explicitly, it becomes a scrollable area within the page, but without requiring the use of an IFRAME.<br><br>Here's quite a bit more meaningless text that will serve primarily to make this thing scroll off the bottom of its visible area.  Otherwise, you might have to make it really, really small in order to see the nifty scroll bars!"),c=new Yuc(b),fqc(c.db,h7c,fed),fqc(c.db,g7c,ged),Mzc(a,c,Ezc),Nzc(a,'cwDockPanel'),a))};JJb(1106,1062,q4c,Uzc);_.Eb=function Vzc(a){Nzc(this,a)};_.Xb=function Wzc(a){var b;b=Dsc(this,a);if(b){a==this.b&&(this.b=null);Ozc(this)}return b};var Ezc,Fzc,Gzc,Hzc,Izc,Jzc,Kzc;JJb(1107,1,{},Yzc);JJb(1108,1,{95:1},$zc);JJb(1109,1,{96:1},aAc);_.b=0;var JCb=mVc(kcd,'DockPanel',1106),ICb=mVc(kcd,'DockPanel$TmpRow',1109),rIb=lVc(rcd,'DockPanel$TmpRow;',1439,ICb),GCb=mVc(kcd,'DockPanel$DockLayoutConstant',1107),HCb=mVc(kcd,'DockPanel$LayoutData',1108);P5c(Jn)(11);