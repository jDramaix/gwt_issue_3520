function oOb(a){var b,c;b=Jmb(a.b.ne(Udd),147);if(b==null){c=zmb(eJb,f5c,1,[Vdd,Wdd,Xdd,Ydd]);a.b.pe(Udd,c);return c}else{return b}}
function pOb(a){var b,c;b=Jmb(a.b.ne(Zdd),147);if(b==null){c=zmb(eJb,f5c,1,[$dd,_dd,aed,bed,ced,ded]);a.b.pe(Zdd,c);return c}else{return b}}
function _9b(a){var b,c,d,e,f,g,i;i=new yOc;vOc(i,new Pyc('<b>Select your favorite color:<\/b>'));c=oOb(a.b);for(d=0;d<c.length;++d){b=c[d];e=new vIc(Had,b);Duc(e,'cwRadioButton-color-'+b);d==2&&(nt(e.d,true),gj(e,oj(e.db)+Wad,true));vOc(i,e)}vOc(i,new Pyc('<br><b>Select your favorite sport:<\/b>'));g=pOb(a.b);for(d=0;d<g.length;++d){f=g[d];e=new vIc('sport',f);Duc(e,'cwRadioButton-sport-'+pXc(f,M6c,A7c));d==2&&Fuc(e,(KVc(),KVc(),JVc));vOc(i,e)}return i}
var Udd='cwRadioButtonColors',Zdd='cwRadioButtonSports';lKb(875,1,U5c);_.qc=function fac(){RMb(this.c,_9b(this.b))};H6c(Vn)(1);