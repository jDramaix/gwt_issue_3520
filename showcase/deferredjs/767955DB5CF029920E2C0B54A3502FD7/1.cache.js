function hOb(a){var b,c;b=Amb(a.a.je(Ddd),148);if(b==null){c=qmb(UIb,$4c,1,[Edd,Fdd,Gdd,Hdd]);a.a.le(Ddd,c);return c}else{return b}}
function iOb(a){var b,c;b=Amb(a.a.je(Idd),148);if(b==null){c=qmb(UIb,$4c,1,[Jdd,Kdd,Ldd,Mdd,Ndd,Odd]);a.a.le(Idd,c);return c}else{return b}}
function U9b(a){var b,c,d,e,f,g,i;i=new xOc;uOc(i,new Kyc('<b>Select your favorite color:<\/b>'));c=hOb(a.a);for(d=0;d<c.length;++d){b=c[d];e=new pIc(Aad,b);yuc(e,'cwRadioButton-color-'+b);d==2&&(bt(e.c,true),Xi(e,cj(e.cb)+Pad,true));uOc(i,e)}uOc(i,new Kyc('<br><b>Select your favorite sport:<\/b>'));g=iOb(a.a);for(d=0;d<g.length;++d){f=g[d];e=new pIc('sport',f);yuc(e,'cwRadioButton-sport-'+jXc(f,F6c,t7c));d==2&&Auc(e,(EVc(),EVc(),DVc));uOc(i,e)}return i}
var Ddd='cwRadioButtonColors',Idd='cwRadioButtonSports';_Jb(877,1,N5c);_.lc=function $9b(){KMb(this.b,U9b(this.a))};A6c(In)(1);