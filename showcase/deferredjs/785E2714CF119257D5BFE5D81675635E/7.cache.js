function EZb(){FZb.call(this,false)}
function a$b(a,b){c$b.call(this,a,false);this.b=b}
function b$b(a,b){c$b.call(this,a,false);_Zb(this,b)}
function d$b(a){c$b.call(this,'GWT',true);_Zb(this,a)}
function Mmb(a){this.c=a;this.b=R6(this.c.a)}
function iZb(a,b){return pZb(a,b,a.a.b)}
function Pb(a,b){_b((ke(),fe),a,HI(z1,Npc,133,[(sec(),b?rec:qec)]))}
function _Zb(a,b){a.d=b;!!a.c&&DZb(a.c,a);if(b){Ur(b.cb,-1);Af();Pb(a.cb,true)}else{Af();Pb(a.cb,false)}}
function pZb(a,b,c){if(c<0||c>a.a.b){throw new jec}a.o&&(vLb(),Rr(b.cb,lyc,2));hZb(a,c,b.cb);Nkc(a.a,c,b);return b}
function N6(a){var b,c;b=RI(a.a.md(Jyc),147);if(b==null){c=HI(E1,Opc,1,['New','Open',Kyc,Lyc,'Exit']);a.a.od(Jyc,c);return c}else{return b}}
function M6(a){var b,c;b=RI(a.a.md(Iyc),147);if(b==null){c=HI(E1,Opc,1,['Undo','Redo','Cut','Copy','Paste']);a.a.od(Iyc,c);return c}else{return b}}
function Q6(a){var b,c;b=RI(a.a.md(Oyc),147);if(b==null){c=HI(E1,Opc,1,['Contents','Fortune Cookie','About GWT']);a.a.od(Oyc,c);return c}else{return b}}
function P6(a){var b,c;b=RI(a.a.md(Nyc),147);if(b==null){c=HI(E1,Opc,1,['Download','Examples',Wuc,"GWT wit' the program"]);a.a.od(Nyc,c);return c}else{return b}}
function O6(a){var b,c;b=RI(a.a.md(Myc),147);if(b==null){c=HI(E1,Opc,1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);a.a.od(Myc,c);return c}else{return b}}
function g$b(){var a;Ti(this,(vLb(),qs($doc,qwc)));ij(this.cb,'gwt-MenuItemSeparator');a=qs($doc,Osc);wLb(this.cb,a);Sr(a,Jsc,'menuSeparatorInner')}
function R6(a){var b,c;b=RI(a.a.md(Pyc),147);if(b==null){c=HI(E1,Opc,1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);a.a.od(Pyc,c);return c}else{return b}}
function Imb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new Mmb(a);n=new EZb;n.b=true;FLb(n.cb,Isc,'500px');n.e=true;q=new FZb(true);p=O6(a.a);for(k=0;k<p.length;++k){gZb(q,new a$b(p[k],o))}d=new FZb(true);d.e=true;gZb(n,new b$b('File',d));e=N6(a.a);for(k=0;k<e.length;++k){if(k==3){iZb(d,new g$b);gZb(d,new b$b(e[3],q));iZb(d,new g$b)}else{gZb(d,new a$b(e[k],o))}}b=new FZb(true);gZb(n,new b$b('Edit',b));c=M6(a.a);for(k=0;k<c.length;++k){gZb(b,new a$b(c[k],o))}f=new FZb(true);gZb(n,new d$b(f));g=P6(a.a);for(k=0;k<g.length;++k){gZb(f,new a$b(g[k],o))}i=new FZb(true);iZb(n,new g$b);gZb(n,new b$b('Help',i));j=Q6(a.a);for(k=0;k<j.length;++k){gZb(i,new a$b(j[k],o))}L6b(n.cb,hsc,Qyc);CZb(n,Qyc);return n}
var Qyc='cwMenuBar',Iyc='cwMenuBarEditOptions',Jyc='cwMenuBarFileOptions',Myc='cwMenuBarFileRecents',Nyc='cwMenuBarGWTOptions',Oyc='cwMenuBarHelpOptions',Pyc='cwMenuBarPrompts';L2(662,1,{},Mmb);_.nc=function Nmb(){lMb(this.b[this.a]);this.a=(this.a+1)%this.b.length};_.a=0;L2(663,1,Bqc);_.lc=function Rmb(){u5(this.b,Imb(this.a))};L2(1060,102,Qpc,EZb);L2(1067,103,{98:1,103:1,117:1},a$b,b$b,d$b);L2(1068,103,{98:1,104:1,117:1},g$b);var KS=Nec(jxc,'CwMenuBar$1',662),BY=Nec(hxc,'MenuItemSeparator',1068);orc(In)(7);