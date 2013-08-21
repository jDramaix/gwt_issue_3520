function tZb(){uZb.call(this,false)}
function RZb(a,b){TZb.call(this,a,false);this.b=b}
function SZb(a,b){TZb.call(this,a,false);QZb(this,b)}
function UZb(a){TZb.call(this,'GWT',true);QZb(this,a)}
function Dmb(a){this.c=a;this.b=I6(this.c.a)}
function ZYb(a,b){return eZb(a,b,a.a.b)}
function Pb(a,b){_b((ke(),fe),a,xI(q1,Apc,133,[(fec(),b?eec:dec)]))}
function QZb(a,b){a.d=b;!!a.c&&sZb(a.c,a);if(b){Vr(b.cb,-1);Af();Pb(a.cb,true)}else{Af();Pb(a.cb,false)}}
function eZb(a,b,c){if(c<0||c>a.a.b){throw new Ydc}a.o&&($Kb(),Sr(b.cb,$xc,2));YYb(a,c,b.cb);Akc(a.a,c,b);return b}
function E6(a){var b,c;b=HI(a.a.md(wyc),147);if(b==null){c=xI(v1,Bpc,1,['New','Open',xyc,yyc,'Exit']);a.a.od(wyc,c);return c}else{return b}}
function D6(a){var b,c;b=HI(a.a.md(vyc),147);if(b==null){c=xI(v1,Bpc,1,['Undo','Redo','Cut','Copy','Paste']);a.a.od(vyc,c);return c}else{return b}}
function H6(a){var b,c;b=HI(a.a.md(Byc),147);if(b==null){c=xI(v1,Bpc,1,['Contents','Fortune Cookie','About GWT']);a.a.od(Byc,c);return c}else{return b}}
function G6(a){var b,c;b=HI(a.a.md(Ayc),147);if(b==null){c=xI(v1,Bpc,1,['Download','Examples',Huc,"GWT wit' the program"]);a.a.od(Ayc,c);return c}else{return b}}
function F6(a){var b,c;b=HI(a.a.md(zyc),147);if(b==null){c=xI(v1,Bpc,1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);a.a.od(zyc,c);return c}else{return b}}
function XZb(){var a;Ti(this,($Kb(),$doc.createElement(ewc)));jj(this.cb,'gwt-MenuItemSeparator');a=$doc.createElement(Asc);_Kb(this.cb,a);Tr(a,wsc,'menuSeparatorInner')}
function I6(a){var b,c;b=HI(a.a.md(Cyc),147);if(b==null){c=xI(v1,Bpc,1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);a.a.od(Cyc,c);return c}else{return b}}
function zmb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new Dmb(a);n=new tZb;n.b=true;iLb(n.cb,vsc,'500px');n.e=true;q=new uZb(true);p=F6(a.a);for(k=0;k<p.length;++k){XYb(q,new RZb(p[k],o))}d=new uZb(true);d.e=true;XYb(n,new SZb('File',d));e=E6(a.a);for(k=0;k<e.length;++k){if(k==3){ZYb(d,new XZb);XYb(d,new SZb(e[3],q));ZYb(d,new XZb)}else{XYb(d,new RZb(e[k],o))}}b=new uZb(true);XYb(n,new SZb('Edit',b));c=D6(a.a);for(k=0;k<c.length;++k){XYb(b,new RZb(c[k],o))}f=new uZb(true);XYb(n,new UZb(f));g=G6(a.a);for(k=0;k<g.length;++k){XYb(f,new RZb(g[k],o))}i=new uZb(true);ZYb(n,new XZb);XYb(n,new SZb('Help',i));j=H6(a.a);for(k=0;k<j.length;++k){XYb(i,new RZb(j[k],o))}A6b(n.cb,Wrc,Dyc);rZb(n,Dyc);return n}
var Dyc='cwMenuBar',vyc='cwMenuBarEditOptions',wyc='cwMenuBarFileOptions',zyc='cwMenuBarFileRecents',Ayc='cwMenuBarGWTOptions',Byc='cwMenuBarHelpOptions',Cyc='cwMenuBarPrompts';C2(663,1,{},Dmb);_.nc=function Emb(){RLb(this.b[this.a]);this.a=(this.a+1)%this.b.length};_.a=0;C2(664,1,oqc);_.lc=function Imb(){l5(this.b,zmb(this.a))};C2(1062,102,Dpc,tZb);C2(1069,103,{98:1,103:1,117:1},RZb,SZb,UZb);C2(1070,103,{98:1,104:1,117:1},XZb);var AS=Aec(Ywc,'CwMenuBar$1',663),sY=Aec(Wwc,'MenuItemSeparator',1070);brc(Jn)(7);