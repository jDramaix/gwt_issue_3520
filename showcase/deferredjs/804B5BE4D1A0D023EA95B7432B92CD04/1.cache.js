function $6(a){var b,c;b=$I(a.b.qd(dyc),146);if(b==null){c=QI(Q1,Qpc,1,[eyc,fyc,gyc,hyc]);a.b.sd(dyc,c);return c}else{return b}}
function _6(a){var b,c;b=$I(a.b.qd(iyc),146);if(b==null){c=QI(Q1,Qpc,1,[jyc,kyc,lyc,myc,nyc,oyc]);a.b.sd(iyc,c);return c}else{return b}}
function Lub(a){var b,c,d,e,f,g,i;i=new h7b;e7b(i,new zTb('<b>Select your favorite color:<\/b>'));c=$6(a.b);for(d=0;d<c.length;++d){b=c[d];e=new e1b(Suc,b);nPb(e,'cwRadioButton-color-'+b);d==2&&(nt(e.d,true),gj(e,oj(e.db)+fvc,true));e7b(i,e)}e7b(i,new zTb('<br><b>Select your favorite sport:<\/b>'));g=_6(a.b);for(d=0;d<g.length;++d){f=g[d];e=new e1b('sport',f);nPb(e,'cwRadioButton-sport-'+$fc(f,vrc,jsc));d==2&&pPb(e,(tec(),tec(),sec));e7b(i,e)}return i}
var dyc='cwRadioButtonColors',iyc='cwRadioButtonSports';X2(788,1,Dqc);_.qc=function Rub(){B5(this.c,Lub(this.b))};qrc(Vn)(1);