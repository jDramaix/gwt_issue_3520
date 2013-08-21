function Qrb(a){this.a=a}
function Trb(a){this.a=a}
function fWb(a,b){$Kb();(a.a.bg(0,1),$Vb(a.a.i,0,1))[Tyc]=b}
function Mrb(a){var b;b=a.i.rows.length;if(b>1){CVb(a,b-1);fWb(HI(a.j,97),b-1)}}
function Krb(a){var b;b=a.i.rows.length;KVb(a,b,0,new hKb((r7(),g7)));KVb(a,b,1,new hKb(g7));fWb(HI(a.j,97),b+1)}
function Lrb(){var a,b,c,d,e;d=new QVb;c=HI(d.j,97);kj(d.cb,'cw-FlexTable',true);iLb(d.cb,vsc,'32em');$Kb();Sr(d.o,gwc,5);Sr(d.o,hwc,3);aWb(c,1,(WWb(),SWb));HVb(d,0,0,'This is a FlexTable that supports <B>colspans<\/B> and <B>rowspans<\/B>.  You can use it to format your page or as a special purpose table.');Sr(ZVb(c,0),$xc,2);a=new ROb('Add a row',new Qrb(d));kj(a.cb,Wyc,true);e=new ROb('Remove a row',new Trb(d));kj(e.cb,Wyc,true);b=new Z6b;jj(b.cb,'cw-FlexTable-buttonPanel');W6b(b,a);W6b(b,e);KVb(d,0,1,b);cWb(c,0,1,(bXb(),aXb));Krb(d);Krb(d);AVb(d,'cwFlexTable');return d}
C2(744,1,lqc,Qrb);_.Dc=function Rrb(a){Krb(this.a)};C2(745,1,lqc,Trb);_.Dc=function Urb(a){Mrb(this.a)};C2(746,1,oqc);_.lc=function Yrb(){l5(this.a,Lrb())};var DT=Aec(_wc,'CwFlexTable$1',744),ET=Aec(_wc,'CwFlexTable$2',745);brc(Jn)(17);