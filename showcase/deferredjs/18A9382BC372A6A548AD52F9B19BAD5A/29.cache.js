function hlb(a){this.b=a}
function elb(a,b){this.b=a;this.c=b}
function alb(a){var b,c,d;b=nfc((HKb(),Hr(a.b.db,Bxc)));c=nfc(Hr(a.c.db,Bxc));d=nfc(Hr(a.d.db,Bxc));GSb(a.e,"User '"+b+"' has security clearance '"+c+"' and cannot access '"+d+Ctc)}
function _kb(a){var b,c,d,e,f,g;d=new yVb;b=AI(d.k,96);HKb();Rr(d.p,Jvc,5);g=G4(mS);e=new _Nb(g);rj(e,new elb(a,g),(ey(),ey(),dy));f=new pXb;Rr(f.f,Jvc,3);mXb(f,new PSb(xAc));mXb(f,e);sVb(d,0,0,f);Rr(HVb(b,0),Axc,2);pVb(d,1,0,yAc);pVb(d,1,1,"User '{0}' has security clearance '{1}' and cannot access '{2}'");a.b=new i_b;$$b(a.b,'amelie');pVb(d,2,0,zAc);sVb(d,2,1,a.b);a.c=new i_b;$$b(a.c,'guest');pVb(d,3,0,AAc);sVb(d,3,1,a.c);a.d=new i_b;$$b(a.d,'/secure/blueprints.xml');pVb(d,4,0,BAc);sVb(d,4,1,a.d);a.e=new NSb;pVb(d,5,0,HAc);sVb(d,5,1,a.e);MVb(b,5,0,(LWb(),KWb));c=new hlb(a);rj(a.b,c,(Jy(),Jy(),Iy));rj(a.c,c,Iy);rj(a.d,c,Iy);alb(a);return d}
t2(641,1,Jpc,elb);_.Dc=function flb(a){z4(this.b,this.c+FAc)};t2(642,1,upc,hlb);_.Fc=function ilb(a){alb(this.b)};t2(643,1,Mpc);_.mc=function mlb(){Z4(this.c,_kb(this.b))};var mS=$dc(Fwc,'ErrorMessages'),_R=Ydc(Fwc,'CwMessagesExample$1',641),aS=Ydc(Fwc,'CwMessagesExample$2',642);zqc(Jn)(29);