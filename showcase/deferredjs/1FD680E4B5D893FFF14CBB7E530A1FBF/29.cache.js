function Elb(a){this.a=a}
function Blb(a,b){this.a=a;this.b=b}
function xlb(a){var b,c,d;b=bgc((vLb(),Hr(a.a.cb,lyc)));c=bgc(Hr(a.b.cb,lyc));d=bgc(Hr(a.c.cb,lyc));lTb(a.d,"User '"+b+"' has security clearance '"+c+"' and cannot access '"+d+puc)}
function wlb(a){var b,c,d,e,f,g;d=new $Vb;b=RI(d.j,97);vLb();Rr(d.o,rwc,5);g=b5(DS);e=new GOb(g);qj(e,new Blb(a,g),(uy(),uy(),ty));f=new RXb;Rr(f.e,rwc,3);OXb(f,new uTb(hBc));OXb(f,e);UVb(d,0,0,f);Rr(hWb(b,0),kyc,2);RVb(d,1,0,iBc);RVb(d,1,1,"User '{0}' has security clearance '{1}' and cannot access '{2}'");a.a=new K_b;A_b(a.a,'amelie');RVb(d,2,0,jBc);UVb(d,2,1,a.a);a.b=new K_b;A_b(a.b,'guest');RVb(d,3,0,kBc);UVb(d,3,1,a.b);a.c=new K_b;A_b(a.c,'/secure/blueprints.xml');RVb(d,4,0,lBc);UVb(d,4,1,a.c);a.d=new sTb;RVb(d,5,0,rBc);UVb(d,5,1,a.d);mWb(b,5,0,(lXb(),kXb));c=new Elb(a);qj(a.a,c,(Zy(),Zy(),Yy));qj(a.b,c,Yy);qj(a.c,c,Yy);xlb(a);return d}
L2(644,1,xqc,Blb);_.Dc=function Clb(a){W4(this.a,this.b+pBc)};L2(645,1,iqc,Elb);_.Fc=function Flb(a){xlb(this.a)};L2(646,1,Aqc);_.lc=function Jlb(){u5(this.b,wlb(this.a))};var DS=Oec(pxc,'ErrorMessages'),qS=Mec(pxc,'CwMessagesExample$1',644),rS=Mec(pxc,'CwMessagesExample$2',645);nrc(In)(29);