function inc(){}
function mnc(){}
function bnc(a,b){a.b=b}
function cnc(a){if(a==Tmc){return true}SG();return a==Rmc}
function dnc(a){if(a==Smc){return true}SG();return a==Wmc}
function knc(a){this.b=(apc(),Xoc).a;this.d=(hpc(),gpc).a;this.a=a}
function anc(a,b){var c;c=w9(a.ab,96);c.d=b.a;!!c.c&&Adc(c.c,A$c,b.a)}
function _mc(a,b){var c;c=w9(a.ab,96);c.b=b.a;!!c.c&&$gc(c.c,b)}
function Xmc(){Xmc=DTc;Qmc=new inc;Tmc=new inc;Smc=new inc;Rmc=new inc;Umc=new inc;Vmc=new inc;Wmc=new inc}
function enc(){Xmc();ahc.call(this);this.b=(apc(),Xoc);this.c=(hpc(),gpc);qdc();Rr(this.e,B$c,0);Rr(this.e,C$c,0)}
function Ymc(a,b,c){var d;if(c==Qmc){if(b==a.a){return}else if(a.a){throw new YIc('Only one CENTER widget may be added')}}xj(b);hBc(a.j,b);c==Qmc&&(a.a=b);d=new knc(c);b.ab=d;_mc(b,a.b);anc(b,a.c);$mc(a);zj(b,a)}
function Zmc(a,b){var c,d,e,f,g,i,j;GAc(a.cb,cWc,b);i=new gRc;j=new sBc(a.j);while(j.b<j.c.c){c=qBc(j);g=w9(c.ab,96).a;e=w9(i.je(g),142);d=!e?1:e.a;f=g==Umc?'north'+d:g==Vmc?'south'+d:g==Wmc?'west'+d:g==Rmc?'east'+d:g==Tmc?'linestart'+d:g==Smc?'lineend'+d:t$c;GAc((qdc(),js(c.cb)),b,f);i.le(g,mJc(d+1))}}
function $mc(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;b=a.d;while((qdc(),b.children.length)>0){xr(b,b.children[0])}q=1;e=1;for(i=new sBc(a.j);i.b<i.c.c;){d=qBc(i);f=w9(d.ab,96).a;f==Umc||f==Vmc?++q:(f==Rmc||f==Wmc||f==Tmc||f==Smc)&&++e}r=l9(ovb,ITc,97,q,0);for(g=0;g<q;++g){r[g]=new mnc;r[g].b=qs($doc,y$c);rdc(b,r[g].b)}k=0;n=e-1;o=0;s=q-1;c=null;for(i=new sBc(a.j);i.b<i.c.c;){d=qBc(i);j=w9(d.ab,96);t=qs($doc,z$c);j.c=t;Sr(j.c,eZc,j.b);Adc(j.c,A$c,j.d);Sr(j.c,DWc,cWc);Sr(j.c,CWc,cWc);if(j.a==Umc){tdc(r[o].b,t,r[o].a);rdc(t,d.cb);Rr(t,p0c,n-k+1);++o}else if(j.a==Vmc){tdc(r[s].b,t,r[s].a);rdc(t,d.cb);Rr(t,p0c,n-k+1);--s}else if(j.a==Qmc){c=t}else if(cnc(j.a)){p=r[o];tdc(p.b,t,p.a++);rdc(t,d.cb);Rr(t,o1c,s-o+1);++k}else if(dnc(j.a)){p=r[o];tdc(p.b,t,p.a);rdc(t,d.cb);Rr(t,o1c,s-o+1);--n}}if(a.a){p=r[o];tdc(p.b,c,p.a);rdc(c,a.a.cb)}}
Gwb(792,1,wUc);_.lc=function tUb(){var a,b,c;pzb(this.a,(a=new enc,ij(a.cb,'cw-DockPanel'),qdc(),Rr(a.e,B$c,4),bnc(a,(apc(),Woc)),Ymc(a,new plc(g1c),(Xmc(),Umc)),Ymc(a,new plc(h1c),Vmc),Ymc(a,new plc(i1c),Rmc),Ymc(a,new plc(j1c),Wmc),Ymc(a,new plc(k1c),Umc),Ymc(a,new plc(l1c),Vmc),b=new plc('\u0647\u0630\u0627 \u0647\u0648 <code>scrollpanel<\/code> \u0627\u0644\u0645\u062F\u0648\u0646\u0647 \u0627\u0644\u0648\u0627\u0631\u062F\u0629 \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u0645\u0631\u0643\u0632 \u0645\u0646 <code>dockpanel<\/code> \u0627\u0644\u0645\u062F\u0648\u0646\u0647>. \u0645\u0646 \u062E\u0644\u0627\u0644 \u0648\u0636\u0639 \u0628\u0639\u0636 \u0627\u0644\u0645\u062D\u062A\u0648\u064A\u0627\u062A \u0627\u0644\u0649 \u062D\u062F \u0643\u0628\u064A\u0631 \u0641\u064A \u062E\u0637 \u0627\u0644\u0648\u0633\u0637 \u0648\u062A\u062D\u062F\u064A\u062F \u062D\u062C\u0645\u0647 \u0635\u0631\u0627\u062D\u0629 , \u0641\u0627\u0646\u0647 \u064A\u0635\u0628\u062D \u0627\u0644\u0645\u062C\u0627\u0644 \u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u062F\u0631\u062C \u0636\u0645\u0646 \u0635\u0641\u062D\u0629 , \u0648\u0644\u0643\u0646 \u062F\u0648\u0646 \u0627\u0646 \u064A\u062A\u0637\u0644\u0628 \u0630\u0644\u0643 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0648\u0633\u064A\u0644\u0629 iframe. <br><br>\u0627\u0644\u064A\u0643 \u0644\u0627 \u0628\u0623\u0633 \u0628\u0647 \u0627\u0643\u062B\u0631 \u0645\u0639\u0646\u0649 \u0627\u0644\u0646\u0635 \u0645\u0646 \u0634\u0623\u0646\u0647 \u0627\u0646 \u064A\u062E\u062F\u0645 \u0641\u064A \u0627\u0644\u0645\u0642\u0627\u0645 \u0627\u0644\u0627\u0648\u0644 \u0644\u062C\u0639\u0644 \u0647\u0630\u0627 \u0627\u0644\u0634\u064A\u0621 \u0644\u0641\u064A\u0641\u0647 \u0645\u0646 \u0627\u0633\u0641\u0644 \u0645\u0646\u0637\u0642\u0629 \u0627\u0639\u0645\u0627\u0644\u0647\u0627 \u0644\u0644\u0639\u064A\u0627\u0646. \u062E\u0644\u0627\u0641 \u0630\u0644\u0643 , \u0627\u0646\u0643 \u0642\u062F \u062A\u0636\u0637\u0631 \u0627\u0644\u0649 \u062C\u0639\u0644\u0647\u0627 \u062D\u0642\u0627 , \u062D\u0642\u0627 \u0627\u0644\u0635\u063A\u064A\u0631\u0629 \u0643\u064A \u0646\u0631\u0649 nifty \u0641\u064A\u0641\u0647 \u0627\u0644\u0642\u0636\u0628\u0627\u0646!'),c=new iic(b),Adc(c.cb,DWc,m1c),Adc(c.cb,CWc,n1c),Ymc(a,c,Qmc),Zmc(a,'cwDockPanel'),a))};Gwb(1096,1052,MTc,enc);_.Db=function fnc(a){Zmc(this,a)};_.Wb=function gnc(a){var b;b=Pfc(this,a);if(b){a==this.a&&(this.a=null);$mc(this)}return b};var Qmc,Rmc,Smc,Tmc,Umc,Vmc,Wmc;Gwb(1097,1,{},inc);Gwb(1098,1,{96:1},knc);Gwb(1099,1,{97:1},mnc);_.a=0;var Hpb=IIc(q_c,'DockPanel',1096),Gpb=IIc(q_c,'DockPanel$TmpRow',1099),ovb=HIc(x_c,'DockPanel$TmpRow;',1430,Gpb),Epb=IIc(q_c,'DockPanel$DockLayoutConstant',1097),Fpb=IIc(q_c,'DockPanel$LayoutData',1098);jVc(In)(11);