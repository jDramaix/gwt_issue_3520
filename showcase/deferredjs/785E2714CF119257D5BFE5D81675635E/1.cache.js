function T6(a){var b,c;b=RI(a.a.md(Txc),147);if(b==null){c=HI(E1,Opc,1,[Uxc,Vxc,Wxc,Xxc]);a.a.od(Txc,c);return c}else{return b}}
function U6(a){var b,c;b=RI(a.a.md(Yxc),147);if(b==null){c=HI(E1,Opc,1,[Zxc,$xc,_xc,ayc,byc,cyc]);a.a.od(Yxc,c);return c}else{return b}}
function Eub(a){var b,c,d,e,f,g,i;i=new i7b;f7b(i,new uTb('<b>Select your favorite color:<\/b>'));c=T6(a.a);for(d=0;d<c.length;++d){b=c[d];e=new a1b(Quc,b);iPb(e,'cwRadioButton-color-'+b);d==2&&(bt(e.c,true),Xi(e,cj(e.cb)+dvc,true));f7b(i,e)}f7b(i,new uTb('<br><b>Select your favorite sport:<\/b>'));g=U6(a.a);for(d=0;d<g.length;++d){f=g[d];e=new a1b('sport',f);iPb(e,'cwRadioButton-sport-'+Zfc(f,trc,hsc));d==2&&kPb(e,(sec(),sec(),rec));f7b(i,e)}return i}
var Txc='cwRadioButtonColors',Yxc='cwRadioButtonSports';L2(790,1,Bqc);_.lc=function Kub(){u5(this.b,Eub(this.a))};orc(In)(1);