function MNb(a){var b,c;b=jmb(a.b.je(Scd),147);if(b==null){c=_lb(CIb,j4c,1,[Tcd,Ucd,Vcd,Wcd]);a.b.le(Scd,c);return c}else{return b}}
function NNb(a){var b,c;b=jmb(a.b.je(Xcd),147);if(b==null){c=_lb(CIb,j4c,1,[Ycd,Zcd,$cd,_cd,add,bdd]);a.b.le(Xcd,c);return c}else{return b}}
function x9b(a){var b,c,d,e,f,g,i;i=new RNc;ONc(i,new dyc('<b>Select your favorite color:<\/b>'));c=MNb(a.b);for(d=0;d<c.length;++d){b=c[d];e=new OHc(M9c,b);Ttc(e,'cwRadioButton-color-'+b);d==2&&(Ps(e.d,true),Xi(e,dj(e.db)+_9c,true));ONc(i,e)}ONc(i,new dyc('<br><b>Select your favorite sport:<\/b>'));g=NNb(a.b);for(d=0;d<g.length;++d){f=g[d];e=new OHc('sport',f);Ttc(e,'cwRadioButton-sport-'+uWc(f,Q5c,E6c));d==2&&Vtc(e,(PUc(),PUc(),OUc));ONc(i,e)}return i}
var Scd='cwRadioButtonColors',Xcd='cwRadioButtonSports';JJb(874,1,Y4c);_.mc=function D9b(){nMb(this.c,x9b(this.b))};L5c(Jn)(1);