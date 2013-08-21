function u7b(a){this.b=a}
function x7b(a){this.b=a}
function KBc(a,b){Cqc();(a.b.bh(0,1),DBc(a.b.j,0,1))[efd]=b}
function q7b(a){var b;b=a.j.rows.length;if(b>1){fBc(a,b-1);KBc(Jmb(a.k,97),b-1)}}
function o7b(a){var b;b=a.j.rows.length;nBc(a,b,0,new Lpc((XOb(),MOb)));nBc(a,b,1,new Lpc(MOb));KBc(Jmb(a.k,97),b+1)}
function p7b(){var a,b,c,d,e;d=new tBc;c=Jmb(d.k,97);vj(d.db,'cw-FlexTable',true);Mqc(d.db,$7c,'32em');Cqc();ds(d.p,tcd,5);ds(d.p,ucd,3);FBc(c,1,(zCc(),vCc));kBc(d,0,0,'This is a FlexTable that supports <B>colspans<\/B> and <B>rowspans<\/B>.  You can use it to format your page or as a special purpose table.');ds(CBc(c,0),led,2);a=new vuc('Add a row',new u7b(d));vj(a.db,hfd,true);e=new vuc('Remove a row',new x7b(d));vj(e.db,hfd,true);b=new xOc;uj(b.db,'cw-FlexTable-buttonPanel');uOc(b,a);uOc(b,e);nBc(d,0,1,b);HBc(c,0,1,(GCc(),FCc));o7b(d);o7b(d);dBc(d,'cwFlexTable');return d}
lKb(828,1,Q5c,u7b);_.Hc=function v7b(a){o7b(this.b)};lKb(829,1,Q5c,x7b);_.Hc=function y7b(a){q7b(this.b)};lKb(830,1,T5c);_.qc=function C7b(){RMb(this.b,p7b())};var mzb=cWc(mdd,'CwFlexTable$1',828),nzb=cWc(mdd,'CwFlexTable$2',829);G6c(Vn)(17);