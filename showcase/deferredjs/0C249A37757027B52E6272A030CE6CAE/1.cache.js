function hOb(a){var b,c;b=Amb(a.a.je(Hdd),148);if(b==null){c=qmb(UIb,c5c,1,[Idd,Jdd,Kdd,Ldd]);a.a.le(Hdd,c);return c}else{return b}}
function iOb(a){var b,c;b=Amb(a.a.je(Mdd),148);if(b==null){c=qmb(UIb,c5c,1,[Ndd,Odd,Pdd,Qdd,Rdd,Sdd]);a.a.le(Mdd,c);return c}else{return b}}
function U9b(a){var b,c,d,e,f,g,i;i=new yOc;vOc(i,new Kyc('<b>Select your favorite color:<\/b>'));c=hOb(a.a);for(d=0;d<c.length;++d){b=c[d];e=new qIc(Ead,b);yuc(e,'cwRadioButton-color-'+b);d==2&&(bt(e.c,true),Xi(e,cj(e.cb)+Tad,true));vOc(i,e)}vOc(i,new Kyc('<br><b>Select your favorite sport:<\/b>'));g=iOb(a.a);for(d=0;d<g.length;++d){f=g[d];e=new qIc('sport',f);yuc(e,'cwRadioButton-sport-'+nXc(f,J6c,x7c));d==2&&Auc(e,(IVc(),IVc(),HVc));vOc(i,e)}return i}
var Hdd='cwRadioButtonColors',Mdd='cwRadioButtonSports';_Jb(877,1,R5c);_.lc=function $9b(){KMb(this.b,U9b(this.a))};E6c(In)(1);