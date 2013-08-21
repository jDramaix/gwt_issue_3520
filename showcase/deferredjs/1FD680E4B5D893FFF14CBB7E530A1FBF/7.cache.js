function DZb(){EZb.call(this,false)}
function _Zb(a,b){b$b.call(this,a,false);this.b=b}
function a$b(a,b){b$b.call(this,a,false);$Zb(this,b)}
function c$b(a){b$b.call(this,'GWT',true);$Zb(this,a)}
function Mmb(a){this.c=a;this.b=R6(this.c.a)}
function hZb(a,b){return oZb(a,b,a.a.b)}
function Pb(a,b){_b((ke(),fe),a,HI(z1,Mpc,133,[(rec(),b?qec:pec)]))}
function $Zb(a,b){a.d=b;!!a.c&&CZb(a.c,a);if(b){Ur(b.cb,-1);Af();Pb(a.cb,true)}else{Af();Pb(a.cb,false)}}
function oZb(a,b,c){if(c<0||c>a.a.b){throw new iec}a.o&&(vLb(),Rr(b.cb,kyc,2));gZb(a,c,b.cb);Mkc(a.a,c,b);return b}
function N6(a){var b,c;b=RI(a.a.md(Iyc),147);if(b==null){c=HI(E1,Npc,1,['New','Open',Jyc,Kyc,'Exit']);a.a.od(Iyc,c);return c}else{return b}}
function M6(a){var b,c;b=RI(a.a.md(Hyc),147);if(b==null){c=HI(E1,Npc,1,['Undo','Redo','Cut','Copy','Paste']);a.a.od(Hyc,c);return c}else{return b}}
function Q6(a){var b,c;b=RI(a.a.md(Nyc),147);if(b==null){c=HI(E1,Npc,1,['Contents','Fortune Cookie','About GWT']);a.a.od(Nyc,c);return c}else{return b}}
function P6(a){var b,c;b=RI(a.a.md(Myc),147);if(b==null){c=HI(E1,Npc,1,['Download','Examples',Vuc,"GWT wit' the program"]);a.a.od(Myc,c);return c}else{return b}}
function O6(a){var b,c;b=RI(a.a.md(Lyc),147);if(b==null){c=HI(E1,Npc,1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);a.a.od(Lyc,c);return c}else{return b}}
function f$b(){var a;Ti(this,(vLb(),qs($doc,pwc)));ij(this.cb,'gwt-MenuItemSeparator');a=qs($doc,Nsc);wLb(this.cb,a);Sr(a,Isc,'menuSeparatorInner')}
function R6(a){var b,c;b=RI(a.a.md(Oyc),147);if(b==null){c=HI(E1,Npc,1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);a.a.od(Oyc,c);return c}else{return b}}
function Imb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new Mmb(a);n=new DZb;n.b=true;FLb(n.cb,Hsc,'500px');n.e=true;q=new EZb(true);p=O6(a.a);for(k=0;k<p.length;++k){fZb(q,new _Zb(p[k],o))}d=new EZb(true);d.e=true;fZb(n,new a$b('File',d));e=N6(a.a);for(k=0;k<e.length;++k){if(k==3){hZb(d,new f$b);fZb(d,new a$b(e[3],q));hZb(d,new f$b)}else{fZb(d,new _Zb(e[k],o))}}b=new EZb(true);fZb(n,new a$b('Edit',b));c=M6(a.a);for(k=0;k<c.length;++k){fZb(b,new _Zb(c[k],o))}f=new EZb(true);fZb(n,new c$b(f));g=P6(a.a);for(k=0;k<g.length;++k){fZb(f,new _Zb(g[k],o))}i=new EZb(true);hZb(n,new f$b);fZb(n,new a$b('Help',i));j=Q6(a.a);for(k=0;k<j.length;++k){fZb(i,new _Zb(j[k],o))}K6b(n.cb,gsc,Pyc);BZb(n,Pyc);return n}
var Pyc='cwMenuBar',Hyc='cwMenuBarEditOptions',Iyc='cwMenuBarFileOptions',Lyc='cwMenuBarFileRecents',Myc='cwMenuBarGWTOptions',Nyc='cwMenuBarHelpOptions',Oyc='cwMenuBarPrompts';L2(662,1,{},Mmb);_.nc=function Nmb(){lMb(this.b[this.a]);this.a=(this.a+1)%this.b.length};_.a=0;L2(663,1,Aqc);_.lc=function Rmb(){u5(this.b,Imb(this.a))};L2(1060,102,Ppc,DZb);L2(1067,103,{98:1,103:1,117:1},_Zb,a$b,c$b);L2(1068,103,{98:1,104:1,117:1},f$b);var KS=Mec(ixc,'CwMenuBar$1',662),BY=Mec(gxc,'MenuItemSeparator',1068);nrc(In)(7);