function vlb(a){this.a=a}
function slb(a,b){this.a=a;this.b=b}
function olb(a){var b,c,d;b=Qfc(($Kb(),Ir(a.a.cb,$xc)));c=Qfc(Ir(a.b.cb,$xc));d=Qfc(Ir(a.c.cb,$xc));aTb(a.d,"User '"+b+"' has security clearance '"+c+"' and cannot access '"+d+auc)}
function nlb(a){var b,c,d,e,f,g;d=new PVb;b=HI(d.j,97);$Kb();Sr(d.o,fwc,5);g=U4(tS);e=new vOb(g);rj(e,new slb(a,g),(ky(),ky(),jy));f=new GXb;Sr(f.e,fwc,3);DXb(f,new jTb(VAc));DXb(f,e);JVb(d,0,0,f);Sr(YVb(b,0),Zxc,2);GVb(d,1,0,WAc);GVb(d,1,1,"User '{0}' has security clearance '{1}' and cannot access '{2}'");a.a=new z_b;p_b(a.a,'amelie');GVb(d,2,0,XAc);JVb(d,2,1,a.a);a.b=new z_b;p_b(a.b,'guest');GVb(d,3,0,YAc);JVb(d,3,1,a.b);a.c=new z_b;p_b(a.c,'/secure/blueprints.xml');GVb(d,4,0,ZAc);JVb(d,4,1,a.c);a.d=new hTb;GVb(d,5,0,dBc);JVb(d,5,1,a.d);bWb(b,5,0,(aXb(),_Wb));c=new vlb(a);rj(a.a,c,(Py(),Py(),Oy));rj(a.b,c,Oy);rj(a.c,c,Oy);olb(a);return d}
C2(645,1,kqc,slb);_.Dc=function tlb(a){N4(this.a,this.b+bBc)};C2(646,1,Xpc,vlb);_.Fc=function wlb(a){olb(this.a)};C2(647,1,nqc);_.lc=function Alb(){l5(this.b,nlb(this.a))};var tS=Bec(cxc,'ErrorMessages'),gS=zec(cxc,'CwMessagesExample$1',645),hS=zec(cxc,'CwMessagesExample$2',646);arc(Jn)(29);