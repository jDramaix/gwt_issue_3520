function Crb(a){this.b=a}
function Frb(a){this.b=a}
function PVb(a,b){HKb();(a.b.ag(0,1),IVb(a.b.j,0,1))[tyc]=b}
function yrb(a){var b;b=a.j.rows.length;if(b>1){kVb(a,b-1);PVb(AI(a.k,96),b-1)}}
function wrb(a){var b;b=a.j.rows.length;sVb(a,b,0,new QJb((d7(),U6)));sVb(a,b,1,new QJb(U6));PVb(AI(a.k,96),b+1)}
function xrb(){var a,b,c,d,e;d=new yVb;c=AI(d.k,96);kj(d.db,'cw-FlexTable',true);RKb(d.db,Trc,'32em');HKb();Rr(d.p,Jvc,5);Rr(d.p,Kvc,3);KVb(c,1,(EWb(),AWb));pVb(d,0,0,'This is a FlexTable that supports <B>colspans<\/B> and <B>rowspans<\/B>.  You can use it to format your page or as a special purpose table.');Rr(HVb(c,0),Axc,2);a=new vOb('Add a row',new Crb(d));kj(a.db,wyc,true);e=new vOb('Remove a row',new Frb(d));kj(e.db,wyc,true);b=new C6b;jj(b.db,'cw-FlexTable-buttonPanel');z6b(b,a);z6b(b,e);sVb(d,0,1,b);MVb(c,0,1,(LWb(),KWb));wrb(d);wrb(d);iVb(d,'cwFlexTable');return d}
t2(740,1,Jpc,Crb);_.Dc=function Drb(a){wrb(this.b)};t2(741,1,Jpc,Frb);_.Dc=function Grb(a){yrb(this.b)};t2(742,1,Mpc);_.mc=function Krb(){Z4(this.b,xrb())};var wT=Ydc(Bwc,'CwFlexTable$1',740),xT=Ydc(Bwc,'CwFlexTable$2',741);zqc(Jn)(17);