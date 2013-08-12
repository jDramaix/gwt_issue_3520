function esb(a){this.b=a}
function hsb(a){this.b=a}
function uWb(a,b){mLb();(a.b.eg(0,1),nWb(a.b.j,0,1))[nzc]=b}
function asb(a){var b;b=a.j.rows.length;if(b>1){RVb(a,b-1);uWb($I(a.k,96),b-1)}}
function $rb(a){var b;b=a.j.rows.length;ZVb(a,b,0,new vKb((H7(),w7)));ZVb(a,b,1,new vKb(w7));uWb($I(a.k,96),b+1)}
function _rb(){var a,b,c,d,e;d=new dWb;c=$I(d.k,96);vj(d.db,'cw-FlexTable',true);wLb(d.db,Hsc,'32em');mLb();ds(d.p,Cwc,5);ds(d.p,Dwc,3);pWb(c,1,(jXb(),fXb));WVb(d,0,0,'This is a FlexTable that supports <B>colspans<\/B> and <B>rowspans<\/B>.  You can use it to format your page or as a special purpose table.');ds(mWb(c,0),uyc,2);a=new fPb('Add a row',new esb(d));vj(a.db,qzc,true);e=new fPb('Remove a row',new hsb(d));vj(e.db,qzc,true);b=new h7b;uj(b.db,'cw-FlexTable-buttonPanel');e7b(b,a);e7b(b,e);ZVb(d,0,1,b);rWb(c,0,1,(qXb(),pXb));$rb(d);$rb(d);PVb(d,'cwFlexTable');return d}
X2(741,1,xqc,esb);_.Hc=function fsb(a){$rb(this.b)};X2(742,1,xqc,hsb);_.Hc=function isb(a){asb(this.b)};X2(743,1,Aqc);_.qc=function msb(){B5(this.b,_rb())};var YT=Lec(vxc,'CwFlexTable$1',741),ZT=Lec(vxc,'CwFlexTable$2',742);nrc(Vn)(17);