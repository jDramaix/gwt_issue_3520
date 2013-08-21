function sZb(){tZb.call(this,false)}
function QZb(a,b){SZb.call(this,a,false);this.b=b}
function RZb(a,b){SZb.call(this,a,false);PZb(this,b)}
function TZb(a){SZb.call(this,'GWT',true);PZb(this,a)}
function Dmb(a){this.c=a;this.b=I6(this.c.a)}
function YYb(a,b){return dZb(a,b,a.a.b)}
function Pb(a,b){_b((ke(),fe),a,xI(q1,zpc,133,[(eec(),b?dec:cec)]))}
function PZb(a,b){a.d=b;!!a.c&&rZb(a.c,a);if(b){Vr(b.cb,-1);Af();Pb(a.cb,true)}else{Af();Pb(a.cb,false)}}
function dZb(a,b,c){if(c<0||c>a.a.b){throw new Xdc}a.o&&($Kb(),Sr(b.cb,Zxc,2));XYb(a,c,b.cb);zkc(a.a,c,b);return b}
function E6(a){var b,c;b=HI(a.a.md(vyc),147);if(b==null){c=xI(v1,Apc,1,['New','Open',wyc,xyc,'Exit']);a.a.od(vyc,c);return c}else{return b}}
function D6(a){var b,c;b=HI(a.a.md(uyc),147);if(b==null){c=xI(v1,Apc,1,['Undo','Redo','Cut','Copy','Paste']);a.a.od(uyc,c);return c}else{return b}}
function H6(a){var b,c;b=HI(a.a.md(Ayc),147);if(b==null){c=xI(v1,Apc,1,['Contents','Fortune Cookie','About GWT']);a.a.od(Ayc,c);return c}else{return b}}
function G6(a){var b,c;b=HI(a.a.md(zyc),147);if(b==null){c=xI(v1,Apc,1,['Download','Examples',Guc,"GWT wit' the program"]);a.a.od(zyc,c);return c}else{return b}}
function F6(a){var b,c;b=HI(a.a.md(yyc),147);if(b==null){c=xI(v1,Apc,1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);a.a.od(yyc,c);return c}else{return b}}
function WZb(){var a;Ti(this,($Kb(),$doc.createElement(dwc)));jj(this.cb,'gwt-MenuItemSeparator');a=$doc.createElement(zsc);_Kb(this.cb,a);Tr(a,vsc,'menuSeparatorInner')}
function I6(a){var b,c;b=HI(a.a.md(Byc),147);if(b==null){c=xI(v1,Apc,1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);a.a.od(Byc,c);return c}else{return b}}
function zmb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new Dmb(a);n=new sZb;n.b=true;iLb(n.cb,usc,'500px');n.e=true;q=new tZb(true);p=F6(a.a);for(k=0;k<p.length;++k){WYb(q,new QZb(p[k],o))}d=new tZb(true);d.e=true;WYb(n,new RZb('File',d));e=E6(a.a);for(k=0;k<e.length;++k){if(k==3){YYb(d,new WZb);WYb(d,new RZb(e[3],q));YYb(d,new WZb)}else{WYb(d,new QZb(e[k],o))}}b=new tZb(true);WYb(n,new RZb('Edit',b));c=D6(a.a);for(k=0;k<c.length;++k){WYb(b,new QZb(c[k],o))}f=new tZb(true);WYb(n,new TZb(f));g=G6(a.a);for(k=0;k<g.length;++k){WYb(f,new QZb(g[k],o))}i=new tZb(true);YYb(n,new WZb);WYb(n,new RZb('Help',i));j=H6(a.a);for(k=0;k<j.length;++k){WYb(i,new QZb(j[k],o))}z6b(n.cb,Vrc,Cyc);qZb(n,Cyc);return n}
var Cyc='cwMenuBar',uyc='cwMenuBarEditOptions',vyc='cwMenuBarFileOptions',yyc='cwMenuBarFileRecents',zyc='cwMenuBarGWTOptions',Ayc='cwMenuBarHelpOptions',Byc='cwMenuBarPrompts';C2(663,1,{},Dmb);_.nc=function Emb(){RLb(this.b[this.a]);this.a=(this.a+1)%this.b.length};_.a=0;C2(664,1,nqc);_.lc=function Imb(){l5(this.b,zmb(this.a))};C2(1062,102,Cpc,sZb);C2(1069,103,{98:1,103:1,117:1},QZb,RZb,TZb);C2(1070,103,{98:1,104:1,117:1},WZb);var AS=zec(Xwc,'CwMenuBar$1',663),sY=zec(Vwc,'MenuItemSeparator',1070);arc(Jn)(7);