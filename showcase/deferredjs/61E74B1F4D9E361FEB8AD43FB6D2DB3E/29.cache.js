function Elb(a){this.a=a}
function Blb(a,b){this.a=a;this.b=b}
function xlb(a){var b,c,d;b=$fc((vLb(),Hr(a.a.cb,iyc)));c=$fc(Hr(a.b.cb,iyc));d=$fc(Hr(a.c.cb,iyc));lTb(a.d,"User '"+b+"' has security clearance '"+c+"' and cannot access '"+d+muc)}
function wlb(a){var b,c,d,e,f,g;d=new $Vb;b=RI(d.j,97);vLb();Rr(d.o,owc,5);g=b5(DS);e=new GOb(g);qj(e,new Blb(a,g),(uy(),uy(),ty));f=new RXb;Rr(f.e,owc,3);OXb(f,new uTb(eBc));OXb(f,e);UVb(d,0,0,f);Rr(hWb(b,0),hyc,2);RVb(d,1,0,fBc);RVb(d,1,1,"User '{0}' has security clearance '{1}' and cannot access '{2}'");a.a=new K_b;A_b(a.a,'amelie');RVb(d,2,0,gBc);UVb(d,2,1,a.a);a.b=new K_b;A_b(a.b,'guest');RVb(d,3,0,hBc);UVb(d,3,1,a.b);a.c=new K_b;A_b(a.c,'/secure/blueprints.xml');RVb(d,4,0,iBc);UVb(d,4,1,a.c);a.d=new sTb;RVb(d,5,0,oBc);UVb(d,5,1,a.d);mWb(b,5,0,(lXb(),kXb));c=new Elb(a);qj(a.a,c,(Zy(),Zy(),Yy));qj(a.b,c,Yy);qj(a.c,c,Yy);xlb(a);return d}
L2(644,1,uqc,Blb);_.Dc=function Clb(a){W4(this.a,this.b+mBc)};L2(645,1,fqc,Elb);_.Fc=function Flb(a){xlb(this.a)};L2(646,1,xqc);_.lc=function Jlb(){u5(this.b,wlb(this.a))};var DS=Lec(mxc,'ErrorMessages'),qS=Jec(mxc,'CwMessagesExample$1',644),rS=Jec(mxc,'CwMessagesExample$2',645);krc(In)(29);