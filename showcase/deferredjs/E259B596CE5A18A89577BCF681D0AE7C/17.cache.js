function esb(a){this.b=a}
function hsb(a){this.b=a}
function vWb(a,b){mLb();(a.b.eg(0,1),oWb(a.b.j,0,1))[rzc]=b}
function asb(a){var b;b=a.j.rows.length;if(b>1){SVb(a,b-1);vWb($I(a.k,96),b-1)}}
function $rb(a){var b;b=a.j.rows.length;$Vb(a,b,0,new vKb((H7(),w7)));$Vb(a,b,1,new vKb(w7));vWb($I(a.k,96),b+1)}
function _rb(){var a,b,c,d,e;d=new eWb;c=$I(d.k,96);vj(d.db,'cw-FlexTable',true);wLb(d.db,Lsc,'32em');mLb();ds(d.p,Gwc,5);ds(d.p,Hwc,3);qWb(c,1,(kXb(),gXb));XVb(d,0,0,'This is a FlexTable that supports <B>colspans<\/B> and <B>rowspans<\/B>.  You can use it to format your page or as a special purpose table.');ds(nWb(c,0),yyc,2);a=new fPb('Add a row',new esb(d));vj(a.db,uzc,true);e=new fPb('Remove a row',new hsb(d));vj(e.db,uzc,true);b=new i7b;uj(b.db,'cw-FlexTable-buttonPanel');f7b(b,a);f7b(b,e);$Vb(d,0,1,b);sWb(c,0,1,(rXb(),qXb));$rb(d);$rb(d);QVb(d,'cwFlexTable');return d}
X2(741,1,Bqc,esb);_.Hc=function fsb(a){$rb(this.b)};X2(742,1,Bqc,hsb);_.Hc=function isb(a){asb(this.b)};X2(743,1,Eqc);_.qc=function msb(){B5(this.b,_rb())};var YT=Pec(zxc,'CwFlexTable$1',741),ZT=Pec(zxc,'CwFlexTable$2',742);rrc(Vn)(17);