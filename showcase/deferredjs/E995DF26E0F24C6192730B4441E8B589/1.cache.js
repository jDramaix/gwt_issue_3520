function K6(a){var b,c;b=HI(a.a.md(Cxc),147);if(b==null){c=xI(v1,xpc,1,[Dxc,Exc,Fxc,Gxc]);a.a.od(Cxc,c);return c}else{return b}}
function L6(a){var b,c;b=HI(a.a.md(Hxc),147);if(b==null){c=xI(v1,xpc,1,[Ixc,Jxc,Kxc,Lxc,Mxc,Nxc]);a.a.od(Hxc,c);return c}else{return b}}
function vub(a){var b,c,d,e,f,g,i;i=new Y6b;V6b(i,new jTb('<b>Select your favorite color:<\/b>'));c=K6(a.a);for(d=0;d<c.length;++d){b=c[d];e=new Q0b(xuc,b);ZOb(e,'cwRadioButton-color-'+b);d==2&&(Us(e.c,true),Xi(e,dj(e.cb)+Muc,true));V6b(i,e)}V6b(i,new jTb('<br><b>Select your favorite sport:<\/b>'));g=L6(a.a);for(d=0;d<g.length;++d){f=g[d];e=new Q0b('sport',f);ZOb(e,'cwRadioButton-sport-'+Ifc(f,crc,Src));d==2&&_Ob(e,(bec(),bec(),aec));V6b(i,e)}return i}
var Cxc='cwRadioButtonColors',Hxc='cwRadioButtonSports';C2(791,1,kqc);_.lc=function Bub(){l5(this.b,vub(this.a))};Zqc(Jn)(1);