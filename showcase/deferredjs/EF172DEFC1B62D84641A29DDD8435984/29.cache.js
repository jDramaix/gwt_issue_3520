function s1b(a){this.b=a}
function p1b(a,b){this.b=a;this.c=b}
function l1b(a){var b,c,d;b=SXc((Sqc(),ns(a.b.db,Med)));c=SXc(ns(a.c.db,Med));d=SXc(ns(a.d.db,Med));Wyc(a.e,"User '"+b+"' has security clearance '"+c+"' and cannot access '"+d+oad)}
function k1b(a){var b,c,d,e,f,g;d=new KBc;b=Wmb(d.k,97);Sqc();xs(d.p,Tcd,5);g=RMb(tyb);e=new puc(g);Dj(e,new p1b(a,g),(Ry(),Ry(),Qy));f=new DDc;xs(f.f,Tcd,3);ADc(f,new dzc(Nhd));ADc(f,e);EBc(d,0,0,f);xs(TBc(b,0),Led,2);BBc(d,1,0,Ohd);BBc(d,1,1,"User '{0}' has security clearance '{1}' and cannot access '{2}'");a.b=new xHc;nHc(a.b,'amelie');BBc(d,2,0,Phd);EBc(d,2,1,a.b);a.c=new xHc;nHc(a.c,'guest');BBc(d,3,0,Qhd);EBc(d,3,1,a.c);a.d=new xHc;nHc(a.d,'/secure/blueprints.xml');BBc(d,4,0,Rhd);EBc(d,4,1,a.d);a.e=new bzc;BBc(d,5,0,Xhd);EBc(d,5,1,a.e);YBc(b,5,0,(ZCc(),YCc));c=new s1b(a);Dj(a.b,c,(uz(),uz(),tz));Dj(a.c,c,tz);Dj(a.d,c,tz);l1b(a);return d}
EKb(733,1,n6c,p1b);_.Lc=function q1b(a){KMb(this.b,this.c+Vhd)};EKb(734,1,$5c,s1b);_.Nc=function t1b(a){l1b(this.b)};EKb(735,1,q6c);_.qc=function x1b(){iNb(this.c,k1b(this.b))};var tyb=CWc(Qdd,'ErrorMessages'),gyb=AWc(Qdd,'CwMessagesExample$1',733),hyb=AWc(Qdd,'CwMessagesExample$2',734);d7c(Vn)(29);