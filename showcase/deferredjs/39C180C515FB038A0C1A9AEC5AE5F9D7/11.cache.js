function xVb(){}
function BVb(){}
function qVb(a,b){a.b=b}
function rVb(a){if(a==gVb){return true}hF();return a==jVb}
function sVb(a){if(a==fVb){return true}hF();return a==eVb}
function zVb(a){this.b=(oXb(),jXb).a;this.d=(vXb(),uXb).a;this.a=a}
function oVb(a,b){var c;c=XI(a.ab,96);c.b=b.a;!!c.c&&nPb(c.c,b)}
function pVb(a,b){var c;c=XI(a.ab,96);c.d=b.a;!!c.c&&PLb(c.c,zwc,b.a)}
function tVb(){kVb();pPb.call(this);this.b=(oXb(),jXb);this.c=(vXb(),uXb);FLb();Rr(this.e,Awc,0);Rr(this.e,Bwc,0)}
function kVb(){kVb=Rpc;dVb=new xVb;gVb=new xVb;fVb=new xVb;eVb=new xVb;hVb=new xVb;iVb=new xVb;jVb=new xVb}
function lVb(a,b,c){var d;if(c==dVb){if(b==a.a){return}else if(a.a){throw new kfc('Only one CENTER widget may be added')}}xj(b);v7b(a.j,b);c==dVb&&(a.a=b);d=new zVb(c);b.ab=d;oVb(b,a.b);pVb(b,a.c);nVb(a);zj(b,a)}
function mVb(a,b){var c,d,e,f,g,i,j;U6b(a.cb,qsc,b);i=new unc;j=new G7b(a.j);while(j.b<j.c.c){c=E7b(j);g=XI(c.ab,96).a;e=XI(i.gd(g),142);d=!e?1:e.a;f=g==hVb?'north'+d:g==iVb?'south'+d:g==jVb?'west'+d:g==eVb?'east'+d:g==gVb?'linestart'+d:g==fVb?'lineend'+d:swc;U6b((FLb(),js(c.cb)),b,f);i.jd(g,Afc(d+1))}}
function nVb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;b=a.d;while((FLb(),b.children.length)>0){xr(b,b.children[0])}q=1;e=1;for(i=new G7b(a.j);i.b<i.c.c;){d=E7b(i);f=XI(d.ab,96).a;f==hVb||f==iVb?++q:(f==eVb||f==jVb||f==gVb||f==fVb)&&++e}r=MI(E1,Wpc,97,q,0);for(g=0;g<q;++g){r[g]=new BVb;r[g].b=qs($doc,xwc);GLb(b,r[g].b)}k=0;n=e-1;o=0;s=q-1;c=null;for(i=new G7b(a.j);i.b<i.c.c;){d=E7b(i);j=XI(d.ab,96);t=qs($doc,ywc);j.c=t;Sr(j.c,lwc,j.b);PLb(j.c,zwc,j.d);Sr(j.c,Rsc,qsc);Sr(j.c,Qsc,qsc);if(j.a==hVb){ILb(r[o].b,t,r[o].a);GLb(t,d.cb);Rr(t,ryc,n-k+1);++o}else if(j.a==iVb){ILb(r[s].b,t,r[s].a);GLb(t,d.cb);Rr(t,ryc,n-k+1);--s}else if(j.a==dVb){c=t}else if(rVb(j.a)){p=r[o];ILb(p.b,t,p.a++);GLb(t,d.cb);Rr(t,ozc,s-o+1);++k}else if(sVb(j.a)){p=r[o];ILb(p.b,t,p.a);GLb(t,d.cb);Rr(t,ozc,s-o+1);--n}}if(a.a){p=r[o];ILb(p.b,c,p.a);GLb(c,a.a.cb)}}
W2(725,1,Kqc);_.lc=function Iqb(){var a,b,c;F5(this.a,(a=new tVb,ij(a.cb,'cw-DockPanel'),FLb(),Rr(a.e,Awc,4),qVb(a,(oXb(),iXb)),lVb(a,new ETb(gzc),(kVb(),hVb)),lVb(a,new ETb(hzc),iVb),lVb(a,new ETb(izc),eVb),lVb(a,new ETb(jzc),jVb),lVb(a,new ETb(kzc),hVb),lVb(a,new ETb(lzc),iVb),b=new ETb('\u8FD9\u4E2A\u793A\u4F8B\u4E2D\u5728<code>DockPanel<\/code> \u7684\u4E2D\u95F4\u4F4D\u7F6E\u6709\u4E00\u4E2A<code>ScrollPanel<\/code>\u3002\u5982\u679C\u5728\u4E2D\u95F4\u653E\u5165\u5F88\u591A\u5185\u5BB9\uFF0C\u5B83\u5C31\u4F1A\u53D8\u6210\u9875\u9762\u5185\u7684\u53EF\u6EDA\u52A8\u533A\u57DF\uFF0C\u65E0\u9700\u4F7F\u7528IFRAME\u3002<br><br>\u6B64\u5904\u4F7F\u7528\u4E86\u76F8\u5F53\u591A\u65E0\u610F\u4E49\u7684\u6587\u5B57\uFF0C\u4E3B\u8981\u662F\u4E3A\u4E86\u53EF\u4EE5\u6EDA\u52A8\u81F3\u53EF\u89C6\u533A\u57DF\u7684\u5E95\u90E8\u3002\u5426\u5219\uFF0C\u60A8\u6050\u6015\u4E0D\u5F97\u4E0D\u628A\u5B83\u7F29\u5230\u5F88\u5C0F\u624D\u80FD\u770B\u5230\u90A3\u5C0F\u5DE7\u7684\u6EDA\u52A8\u6761\u3002'),c=new xQb(b),PLb(c.cb,Rsc,mzc),PLb(c.cb,Qsc,nzc),lVb(a,c,dVb),mVb(a,'cwDockPanel'),a))};W2(1029,985,$pc,tVb);_.Db=function uVb(a){mVb(this,a)};_.Wb=function vVb(a){var b;b=cOb(this,a);if(b){a==this.a&&(this.a=null);nVb(this)}return b};var dVb,eVb,fVb,gVb,hVb,iVb,jVb;W2(1030,1,{},xVb);W2(1031,1,{96:1},zVb);W2(1032,1,{97:1},BVb);_.a=0;var XX=Wec(pxc,'DockPanel',1029),WX=Wec(pxc,'DockPanel$TmpRow',1032),E1=Vec(wxc,'DockPanel$TmpRow;',1363,WX),UX=Wec(pxc,'DockPanel$DockLayoutConstant',1030),VX=Wec(pxc,'DockPanel$LayoutData',1031);xrc(In)(11);