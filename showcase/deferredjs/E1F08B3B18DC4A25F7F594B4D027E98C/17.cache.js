function S6b(a){this.b=a}
function V6b(a){this.b=a}
function dBc(a,b){Xpc();(a.b.Zg(0,1),YAc(a.b.j,0,1))[hed]=b}
function O6b(a){var b;b=a.j.rows.length;if(b>1){AAc(a,b-1);dBc(jmb(a.k,97),b-1)}}
function M6b(a){var b;b=a.j.rows.length;IAc(a,b,0,new epc((tOb(),iOb)));IAc(a,b,1,new epc(iOb));dBc(jmb(a.k,97),b+1)}
function N6b(){var a,b,c,d,e;d=new OAc;c=jmb(d.k,97);kj(d.db,'cw-FlexTable',true);fqc(d.db,h7c,'32em');Xpc();Rr(d.p,xbd,5);Rr(d.p,ybd,3);$Ac(c,1,(UBc(),QBc));FAc(d,0,0,'This is a FlexTable that supports <B>colspans<\/B> and <B>rowspans<\/B>.  You can use it to format your page or as a special purpose table.');Rr(XAc(c,0),odd,2);a=new Ltc('Add a row',new S6b(d));kj(a.db,ked,true);e=new Ltc('Remove a row',new V6b(d));kj(e.db,ked,true);b=new SNc;jj(b.db,'cw-FlexTable-buttonPanel');PNc(b,a);PNc(b,e);IAc(d,0,1,b);aBc(c,0,1,(_Bc(),$Bc));M6b(d);M6b(d);yAc(d,'cwFlexTable');return d}
JJb(827,1,Z4c,S6b);_.Dc=function T6b(a){M6b(this.b)};JJb(828,1,Z4c,V6b);_.Dc=function W6b(a){O6b(this.b)};JJb(829,1,a5c);_.mc=function $6b(){nMb(this.b,N6b())};var Myb=mVc(pcd,'CwFlexTable$1',827),Nyb=mVc(pcd,'CwFlexTable$2',828);P5c(Jn)(17);