function Zrb(a){this.a=a}
function asb(a){this.a=a}
function pWb(a,b){vLb();(a.a.ag(0,1),iWb(a.a.i,0,1))[azc]=b}
function Vrb(a){var b;b=a.i.rows.length;if(b>1){MVb(a,b-1);pWb(RI(a.j,97),b-1)}}
function Trb(a){var b;b=a.i.rows.length;UVb(a,b,0,new EKb((A7(),p7)));UVb(a,b,1,new EKb(p7));pWb(RI(a.j,97),b+1)}
function Urb(){var a,b,c,d,e;d=new $Vb;c=RI(d.j,97);jj(d.cb,'cw-FlexTable',true);FLb(d.cb,Esc,'32em');vLb();Rr(d.o,owc,5);Rr(d.o,pwc,3);kWb(c,1,(eXb(),aXb));RVb(d,0,0,'This is a FlexTable that supports <B>colspans<\/B> and <B>rowspans<\/B>.  You can use it to format your page or as a special purpose table.');Rr(hWb(c,0),hyc,2);a=new aPb('Add a row',new Zrb(d));jj(a.cb,dzc,true);e=new aPb('Remove a row',new asb(d));jj(e.cb,dzc,true);b=new h7b;ij(b.cb,'cw-FlexTable-buttonPanel');e7b(b,a);e7b(b,e);UVb(d,0,1,b);mWb(c,0,1,(lXb(),kXb));Trb(d);Trb(d);KVb(d,'cwFlexTable');return d}
L2(743,1,uqc,Zrb);_.Dc=function $rb(a){Trb(this.a)};L2(744,1,uqc,asb);_.Dc=function bsb(a){Vrb(this.a)};L2(745,1,xqc);_.lc=function fsb(){u5(this.a,Urb())};var NT=Jec(ixc,'CwFlexTable$1',743),OT=Jec(ixc,'CwFlexTable$2',744);krc(In)(17);