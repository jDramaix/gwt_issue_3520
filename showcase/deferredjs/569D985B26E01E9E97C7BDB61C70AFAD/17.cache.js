function Crb(a){this.b=a}
function Frb(a){this.b=a}
function OVb(a,b){HKb();(a.b.ag(0,1),HVb(a.b.j,0,1))[syc]=b}
function yrb(a){var b;b=a.j.rows.length;if(b>1){jVb(a,b-1);OVb(AI(a.k,96),b-1)}}
function wrb(a){var b;b=a.j.rows.length;rVb(a,b,0,new QJb((d7(),U6)));rVb(a,b,1,new QJb(U6));OVb(AI(a.k,96),b+1)}
function xrb(){var a,b,c,d,e;d=new xVb;c=AI(d.k,96);kj(d.db,'cw-FlexTable',true);RKb(d.db,Src,'32em');HKb();Rr(d.p,Ivc,5);Rr(d.p,Jvc,3);JVb(c,1,(DWb(),zWb));oVb(d,0,0,'This is a FlexTable that supports <B>colspans<\/B> and <B>rowspans<\/B>.  You can use it to format your page or as a special purpose table.');Rr(GVb(c,0),zxc,2);a=new vOb('Add a row',new Crb(d));kj(a.db,vyc,true);e=new vOb('Remove a row',new Frb(d));kj(e.db,vyc,true);b=new B6b;jj(b.db,'cw-FlexTable-buttonPanel');y6b(b,a);y6b(b,e);rVb(d,0,1,b);LVb(c,0,1,(KWb(),JWb));wrb(d);wrb(d);hVb(d,'cwFlexTable');return d}
t2(740,1,Ipc,Crb);_.Dc=function Drb(a){wrb(this.b)};t2(741,1,Ipc,Frb);_.Dc=function Grb(a){yrb(this.b)};t2(742,1,Lpc);_.mc=function Krb(){Z4(this.b,xrb())};var wT=Xdc(Awc,'CwFlexTable$1',740),xT=Xdc(Awc,'CwFlexTable$2',741);yqc(Jn)(17);