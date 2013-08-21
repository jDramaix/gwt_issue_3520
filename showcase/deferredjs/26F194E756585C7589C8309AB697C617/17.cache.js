function Qrb(a){this.a=a}
function Trb(a){this.a=a}
function eWb(a,b){$Kb();(a.a.bg(0,1),ZVb(a.a.i,0,1))[Syc]=b}
function Mrb(a){var b;b=a.i.rows.length;if(b>1){BVb(a,b-1);eWb(HI(a.j,97),b-1)}}
function Krb(a){var b;b=a.i.rows.length;JVb(a,b,0,new hKb((r7(),g7)));JVb(a,b,1,new hKb(g7));eWb(HI(a.j,97),b+1)}
function Lrb(){var a,b,c,d,e;d=new PVb;c=HI(d.j,97);kj(d.cb,'cw-FlexTable',true);iLb(d.cb,usc,'32em');$Kb();Sr(d.o,fwc,5);Sr(d.o,gwc,3);_Vb(c,1,(VWb(),RWb));GVb(d,0,0,'This is a FlexTable that supports <B>colspans<\/B> and <B>rowspans<\/B>.  You can use it to format your page or as a special purpose table.');Sr(YVb(c,0),Zxc,2);a=new ROb('Add a row',new Qrb(d));kj(a.cb,Vyc,true);e=new ROb('Remove a row',new Trb(d));kj(e.cb,Vyc,true);b=new Y6b;jj(b.cb,'cw-FlexTable-buttonPanel');V6b(b,a);V6b(b,e);JVb(d,0,1,b);bWb(c,0,1,(aXb(),_Wb));Krb(d);Krb(d);zVb(d,'cwFlexTable');return d}
C2(744,1,kqc,Qrb);_.Dc=function Rrb(a){Krb(this.a)};C2(745,1,kqc,Trb);_.Dc=function Urb(a){Mrb(this.a)};C2(746,1,nqc);_.lc=function Yrb(){l5(this.a,Lrb())};var DT=zec($wc,'CwFlexTable$1',744),ET=zec($wc,'CwFlexTable$2',745);arc(Jn)(17);