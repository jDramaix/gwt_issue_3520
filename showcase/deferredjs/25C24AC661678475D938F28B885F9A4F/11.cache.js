function SVb(){}
function WVb(){}
function LVb(a,b){a.c=b}
function MVb(a){if(a==BVb){return true}DF();return a==EVb}
function NVb(a){if(a==AVb){return true}DF();return a==zVb}
function UVb(a){this.c=(LXb(),GXb).b;this.e=(SXb(),RXb).b;this.b=a}
function JVb(a,b){var c;c=rJ(a.bb,95);c.c=b.b;!!c.d&&IPb(c.d,b)}
function KVb(a,b){var c;c=rJ(a.bb,95);c.e=b.b;!!c.d&&WLb(c.d,hxc,b.b)}
function OVb(){FVb();KPb.call(this);this.c=(LXb(),GXb);this.d=(SXb(),RXb);MLb();xs(this.f,ixc,0);xs(this.f,jxc,0)}
function FVb(){FVb=mqc;yVb=new SVb;BVb=new SVb;AVb=new SVb;zVb=new SVb;CVb=new SVb;DVb=new SVb;EVb=new SVb}
function GVb(a,b,c){var d;if(c==yVb){if(b==a.b){return}else if(a.b){throw new Gfc('Only one CENTER widget may be added')}}Kj(b);O7b(a.k,b);c==yVb&&(a.b=b);d=new UVb(c);b.bb=d;JVb(b,a.c);KVb(b,a.d);IVb(a);Mj(b,a)}
function HVb(a,b){var c,d,e,f,g,i,j;l7b(a.db,Psc,b);i=new Rnc;j=new Z7b(a.k);while(j.c<j.d.d){c=X7b(j);g=rJ(c.bb,95).b;e=rJ(i.pd(g),141);d=!e?1:e.b;f=g==CVb?'north'+d:g==DVb?'south'+d:g==EVb?'west'+d:g==zVb?'east'+d:g==BVb?'linestart'+d:g==AVb?'lineend'+d:Zwc;l7b((MLb(),Ss(c.db)),b,f);i.rd(g,Wfc(d+1))}}
function IVb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;b=a.e;while((MLb(),xNb(b))>0){ds(b,wNb(b,0))}q=1;e=1;for(i=new Z7b(a.k);i.c<i.d.d;){d=X7b(i);f=rJ(d.bb,95).b;f==CVb||f==DVb?++q:(f==zVb||f==EVb||f==BVb||f==AVb)&&++e}r=gJ(h2,sqc,96,q,0);for(g=0;g<q;++g){r[g]=new WVb;r[g].c=$doc.createElement(fxc);NLb(b,r[g].c)}k=0;n=e-1;o=0;s=q-1;c=null;for(i=new Z7b(a.k);i.c<i.d.d;){d=X7b(i);j=rJ(d.bb,95);t=$doc.createElement(gxc);j.d=t;ys(j.d,Rwc,j.c);WLb(j.d,hxc,j.e);ys(j.d,otc,Psc);ys(j.d,ntc,Psc);if(j.b==CVb){PLb(r[o].c,t,r[o].b);NLb(t,d.db);xs(t,$yc,n-k+1);++o}else if(j.b==DVb){PLb(r[s].c,t,r[s].b);NLb(t,d.db);xs(t,$yc,n-k+1);--s}else if(j.b==yVb){c=t}else if(MVb(j.b)){p=r[o];PLb(p.c,t,p.b++);NLb(t,d.db);xs(t,Xzc,s-o+1);++k}else if(NVb(j.b)){p=r[o];PLb(p.c,t,p.b);NLb(t,d.db);xs(t,Xzc,s-o+1);--n}}if(a.b){p=r[o];PLb(p.c,c,p.b);NLb(c,a.b.db)}}
z3(727,1,grc);_.qc=function grb(){var a,b,c;d6(this.b,(a=new OVb,vj(a.db,'cw-DockPanel'),MLb(),xs(a.f,ixc,4),LVb(a,(LXb(),FXb)),GVb(a,new ZTb(Pzc),(FVb(),CVb)),GVb(a,new ZTb(Qzc),DVb),GVb(a,new ZTb(Rzc),zVb),GVb(a,new ZTb(Szc),EVb),GVb(a,new ZTb(Tzc),CVb),GVb(a,new ZTb(Uzc),DVb),b=new ZTb('\u8FD9\u4E2A\u793A\u4F8B\u4E2D\u5728<code>DockPanel<\/code> \u7684\u4E2D\u95F4\u4F4D\u7F6E\u6709\u4E00\u4E2A<code>ScrollPanel<\/code>\u3002\u5982\u679C\u5728\u4E2D\u95F4\u653E\u5165\u5F88\u591A\u5185\u5BB9\uFF0C\u5B83\u5C31\u4F1A\u53D8\u6210\u9875\u9762\u5185\u7684\u53EF\u6EDA\u52A8\u533A\u57DF\uFF0C\u65E0\u9700\u4F7F\u7528IFRAME\u3002<br><br>\u6B64\u5904\u4F7F\u7528\u4E86\u76F8\u5F53\u591A\u65E0\u610F\u4E49\u7684\u6587\u5B57\uFF0C\u4E3B\u8981\u662F\u4E3A\u4E86\u53EF\u4EE5\u6EDA\u52A8\u81F3\u53EF\u89C6\u533A\u57DF\u7684\u5E95\u90E8\u3002\u5426\u5219\uFF0C\u60A8\u6050\u6015\u4E0D\u5F97\u4E0D\u628A\u5B83\u7F29\u5230\u5F88\u5C0F\u624D\u80FD\u770B\u5230\u90A3\u5C0F\u5DE7\u7684\u6EDA\u52A8\u6761\u3002'),c=new SQb(b),WLb(c.db,otc,Vzc),WLb(c.db,ntc,Wzc),GVb(a,c,yVb),HVb(a,'cwDockPanel'),a))};z3(1030,986,wqc,OVb);_.Ib=function PVb(a){HVb(this,a)};_._b=function QVb(a){var b;b=uOb(this,a);if(b){a==this.b&&(this.b=null);IVb(this)}return b};var yVb,zVb,AVb,BVb,CVb,DVb,EVb;z3(1031,1,{},SVb);z3(1032,1,{95:1},UVb);z3(1033,1,{96:1},WVb);_.b=0;var yY=qfc(Yxc,'DockPanel',1030),xY=qfc(Yxc,'DockPanel$TmpRow',1033),h2=pfc(dyc,'DockPanel$TmpRow;',1364,xY),vY=qfc(Yxc,'DockPanel$DockLayoutConstant',1031),wY=qfc(Yxc,'DockPanel$LayoutData',1032);Vrc(Vn)(11);