function cmb(a){this.b=a}
function _lb(a,b){this.b=a;this.c=b}
function Xlb(a){var b,c,d;b=Bgc((CLb(),ns(a.b.db,Xyc)));c=Bgc(ns(a.c.db,Xyc));d=Bgc(ns(a.d.db,Xyc));GTb(a.e,"User '"+b+"' has security clearance '"+c+"' and cannot access '"+d+Yuc)}
function Wlb(a){var b,c,d,e,f,g;d=new tWb;b=lJ(d.k,96);CLb();xs(d.p,cxc,5);g=B5(dT);e=new _Ob(g);Dj(e,new _lb(a,g),(Ry(),Ry(),Qy));f=new mYb;xs(f.f,cxc,3);jYb(f,new PTb(TBc));jYb(f,e);nWb(d,0,0,f);xs(CWb(b,0),Wyc,2);kWb(d,1,0,UBc);kWb(d,1,1,"User '{0}' has security clearance '{1}' and cannot access '{2}'");a.b=new g0b;Y_b(a.b,'amelie');kWb(d,2,0,VBc);nWb(d,2,1,a.b);a.c=new g0b;Y_b(a.c,'guest');kWb(d,3,0,WBc);nWb(d,3,1,a.c);a.d=new g0b;Y_b(a.d,'/secure/blueprints.xml');kWb(d,4,0,XBc);nWb(d,4,1,a.d);a.e=new NTb;kWb(d,5,0,bCc);nWb(d,5,1,a.e);HWb(b,5,0,(IXb(),HXb));c=new cmb(a);Dj(a.b,c,(uz(),uz(),tz));Dj(a.c,c,tz);Dj(a.d,c,tz);Xlb(a);return d}
o3(646,1,Yqc,_lb);_.Lc=function amb(a){u5(this.b,this.c+_Bc)};o3(647,1,Jqc,cmb);_.Nc=function dmb(a){Xlb(this.b)};o3(648,1,_qc);_.qc=function hmb(){U5(this.c,Wlb(this.b))};var dT=lfc(_xc,'ErrorMessages'),SS=jfc(_xc,'CwMessagesExample$1',646),TS=jfc(_xc,'CwMessagesExample$2',647);Orc(Vn)(29);