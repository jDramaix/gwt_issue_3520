function DZb(){EZb.call(this,false)}
function _Zb(a,b){b$b.call(this,a,false);this.b=b}
function a$b(a,b){b$b.call(this,a,false);$Zb(this,b)}
function c$b(a){b$b.call(this,'GWT',true);$Zb(this,a)}
function Mmb(a){this.c=a;this.b=R6(this.c.a)}
function hZb(a,b){return oZb(a,b,a.a.b)}
function Pb(a,b){_b((ke(),fe),a,HI(z1,Jpc,133,[(oec(),b?nec:mec)]))}
function $Zb(a,b){a.d=b;!!a.c&&CZb(a.c,a);if(b){Ur(b.cb,-1);Af();Pb(a.cb,true)}else{Af();Pb(a.cb,false)}}
function oZb(a,b,c){if(c<0||c>a.a.b){throw new fec}a.o&&(vLb(),Rr(b.cb,hyc,2));gZb(a,c,b.cb);Jkc(a.a,c,b);return b}
function N6(a){var b,c;b=RI(a.a.md(Fyc),147);if(b==null){c=HI(E1,Kpc,1,['New','Open',Gyc,Hyc,'Exit']);a.a.od(Fyc,c);return c}else{return b}}
function M6(a){var b,c;b=RI(a.a.md(Eyc),147);if(b==null){c=HI(E1,Kpc,1,['Undo','Redo','Cut','Copy','Paste']);a.a.od(Eyc,c);return c}else{return b}}
function Q6(a){var b,c;b=RI(a.a.md(Kyc),147);if(b==null){c=HI(E1,Kpc,1,['Contents','Fortune Cookie','About GWT']);a.a.od(Kyc,c);return c}else{return b}}
function P6(a){var b,c;b=RI(a.a.md(Jyc),147);if(b==null){c=HI(E1,Kpc,1,['Download','Examples',Suc,"GWT wit' the program"]);a.a.od(Jyc,c);return c}else{return b}}
function O6(a){var b,c;b=RI(a.a.md(Iyc),147);if(b==null){c=HI(E1,Kpc,1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);a.a.od(Iyc,c);return c}else{return b}}
function f$b(){var a;Ti(this,(vLb(),qs($doc,mwc)));ij(this.cb,'gwt-MenuItemSeparator');a=qs($doc,Ksc);wLb(this.cb,a);Sr(a,Fsc,'menuSeparatorInner')}
function R6(a){var b,c;b=RI(a.a.md(Lyc),147);if(b==null){c=HI(E1,Kpc,1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);a.a.od(Lyc,c);return c}else{return b}}
function Imb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new Mmb(a);n=new DZb;n.b=true;FLb(n.cb,Esc,'500px');n.e=true;q=new EZb(true);p=O6(a.a);for(k=0;k<p.length;++k){fZb(q,new _Zb(p[k],o))}d=new EZb(true);d.e=true;fZb(n,new a$b('File',d));e=N6(a.a);for(k=0;k<e.length;++k){if(k==3){hZb(d,new f$b);fZb(d,new a$b(e[3],q));hZb(d,new f$b)}else{fZb(d,new _Zb(e[k],o))}}b=new EZb(true);fZb(n,new a$b('Edit',b));c=M6(a.a);for(k=0;k<c.length;++k){fZb(b,new _Zb(c[k],o))}f=new EZb(true);fZb(n,new c$b(f));g=P6(a.a);for(k=0;k<g.length;++k){fZb(f,new _Zb(g[k],o))}i=new EZb(true);hZb(n,new f$b);fZb(n,new a$b('Help',i));j=Q6(a.a);for(k=0;k<j.length;++k){fZb(i,new _Zb(j[k],o))}K6b(n.cb,dsc,Myc);BZb(n,Myc);return n}
var Myc='cwMenuBar',Eyc='cwMenuBarEditOptions',Fyc='cwMenuBarFileOptions',Iyc='cwMenuBarFileRecents',Jyc='cwMenuBarGWTOptions',Kyc='cwMenuBarHelpOptions',Lyc='cwMenuBarPrompts';L2(662,1,{},Mmb);_.nc=function Nmb(){lMb(this.b[this.a]);this.a=(this.a+1)%this.b.length};_.a=0;L2(663,1,xqc);_.lc=function Rmb(){u5(this.b,Imb(this.a))};L2(1060,102,Mpc,DZb);L2(1067,103,{98:1,103:1,117:1},_Zb,a$b,c$b);L2(1068,103,{98:1,104:1,117:1},f$b);var KS=Jec(fxc,'CwMenuBar$1',662),BY=Jec(dxc,'MenuItemSeparator',1068);krc(In)(7);