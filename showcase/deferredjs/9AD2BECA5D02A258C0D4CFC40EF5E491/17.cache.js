function xsb(a){this.b=a}
function Asb(a){this.b=a}
function LWb(a,b){CLb();(a.b.ig(0,1),EWb(a.b.j,0,1))[Qzc]=b}
function tsb(a){var b;b=a.j.rows.length;if(b>1){gWb(a,b-1);LWb(lJ(a.k,96),b-1)}}
function rsb(a){var b;b=a.j.rows.length;oWb(a,b,0,new LKb(($7(),P7)));oWb(a,b,1,new LKb(P7));LWb(lJ(a.k,96),b+1)}
function ssb(){var a,b,c,d,e;d=new uWb;c=lJ(d.k,96);wj(d.db,'cw-FlexTable',true);MLb(d.db,itc,'32em');CLb();xs(d.p,dxc,5);xs(d.p,exc,3);GWb(c,1,(CXb(),yXb));lWb(d,0,0,'This is a FlexTable that supports <B>colspans<\/B> and <B>rowspans<\/B>.  You can use it to format your page or as a special purpose table.');xs(DWb(c,0),Xyc,2);a=new vPb('Add a row',new xsb(d));wj(a.db,Tzc,true);e=new vPb('Remove a row',new Asb(d));wj(e.db,Tzc,true);b=new B7b;vj(b.db,'cw-FlexTable-buttonPanel');y7b(b,a);y7b(b,e);oWb(d,0,1,b);IWb(c,0,1,(JXb(),IXb));rsb(d);rsb(d);eWb(d,'cwFlexTable');return d}
o3(745,1,Zqc,xsb);_.Lc=function ysb(a){rsb(this.b)};o3(746,1,Zqc,Asb);_.Lc=function Bsb(a){tsb(this.b)};o3(747,1,arc);_.qc=function Fsb(){U5(this.b,ssb())};var nU=kfc(Yxc,'CwFlexTable$1',745),oU=kfc(Yxc,'CwFlexTable$2',746);Prc(Vn)(17);