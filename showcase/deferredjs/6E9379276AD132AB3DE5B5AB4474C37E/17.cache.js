function e7b(a){this.a=a}
function h7b(a){this.a=a}
function uBc(a,b){oqc();(a.a.$g(0,1),nBc(a.a.i,0,1))[Ged]=b}
function a7b(a){var b;b=a.i.rows.length;if(b>1){RAc(a,b-1);uBc(qmb(a.j,98),b-1)}}
function $6b(a){var b;b=a.i.rows.length;ZAc(a,b,0,new xpc((HOb(),wOb)));ZAc(a,b,1,new xpc(wOb));uBc(qmb(a.j,98),b+1)}
function _6b(){var a,b,c,d,e;d=new dBc;c=qmb(d.j,98);kj(d.cb,'cw-FlexTable',true);yqc(d.cb,K7c,'32em');oqc();Sr(d.o,Vbd,5);Sr(d.o,Wbd,3);pBc(c,1,(jCc(),fCc));WAc(d,0,0,'This is a FlexTable that supports <B>colspans<\/B> and <B>rowspans<\/B>.  You can use it to format your page or as a special purpose table.');Sr(mBc(c,0),Ndd,2);a=new fuc('Add a row',new e7b(d));kj(a.cb,Jed,true);e=new fuc('Remove a row',new h7b(d));kj(e.cb,Jed,true);b=new mOc;jj(b.cb,'cw-FlexTable-buttonPanel');jOc(b,a);jOc(b,e);ZAc(d,0,1,b);rBc(c,0,1,(qCc(),pCc));$6b(d);$6b(d);PAc(d,'cwFlexTable');return d}
SJb(831,1,A5c,e7b);_.Dc=function f7b(a){$6b(this.a)};SJb(832,1,A5c,h7b);_.Dc=function i7b(a){a7b(this.a)};SJb(833,1,D5c);_.lc=function m7b(){BMb(this.a,_6b())};var Tyb=PVc(Ocd,'CwFlexTable$1',831),Uyb=PVc(Ocd,'CwFlexTable$2',832);q6c(Jn)(17);