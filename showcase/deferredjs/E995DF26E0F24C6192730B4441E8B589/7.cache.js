function sZb(){tZb.call(this,false)}
function QZb(a,b){SZb.call(this,a,false);this.b=b}
function RZb(a,b){SZb.call(this,a,false);PZb(this,b)}
function TZb(a){SZb.call(this,'GWT',true);PZb(this,a)}
function Dmb(a){this.c=a;this.b=I6(this.c.a)}
function YYb(a,b){return dZb(a,b,a.a.b)}
function Pb(a,b){_b((ke(),fe),a,xI(q1,wpc,133,[(bec(),b?aec:_dc)]))}
function PZb(a,b){a.d=b;!!a.c&&rZb(a.c,a);if(b){Vr(b.cb,-1);Af();Pb(a.cb,true)}else{Af();Pb(a.cb,false)}}
function dZb(a,b,c){if(c<0||c>a.a.b){throw new Udc}a.o&&($Kb(),Sr(b.cb,Wxc,2));XYb(a,c,b.cb);wkc(a.a,c,b);return b}
function E6(a){var b,c;b=HI(a.a.md(syc),147);if(b==null){c=xI(v1,xpc,1,['New','Open',tyc,uyc,'Exit']);a.a.od(syc,c);return c}else{return b}}
function D6(a){var b,c;b=HI(a.a.md(ryc),147);if(b==null){c=xI(v1,xpc,1,['Undo','Redo','Cut','Copy','Paste']);a.a.od(ryc,c);return c}else{return b}}
function H6(a){var b,c;b=HI(a.a.md(xyc),147);if(b==null){c=xI(v1,xpc,1,['Contents','Fortune Cookie','About GWT']);a.a.od(xyc,c);return c}else{return b}}
function G6(a){var b,c;b=HI(a.a.md(wyc),147);if(b==null){c=xI(v1,xpc,1,['Download','Examples',Duc,"GWT wit' the program"]);a.a.od(wyc,c);return c}else{return b}}
function F6(a){var b,c;b=HI(a.a.md(vyc),147);if(b==null){c=xI(v1,xpc,1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);a.a.od(vyc,c);return c}else{return b}}
function WZb(){var a;Ti(this,($Kb(),$doc.createElement(awc)));jj(this.cb,'gwt-MenuItemSeparator');a=$doc.createElement(wsc);_Kb(this.cb,a);Tr(a,ssc,'menuSeparatorInner')}
function I6(a){var b,c;b=HI(a.a.md(yyc),147);if(b==null){c=xI(v1,xpc,1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);a.a.od(yyc,c);return c}else{return b}}
function zmb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new Dmb(a);n=new sZb;n.b=true;iLb(n.cb,rsc,'500px');n.e=true;q=new tZb(true);p=F6(a.a);for(k=0;k<p.length;++k){WYb(q,new QZb(p[k],o))}d=new tZb(true);d.e=true;WYb(n,new RZb('File',d));e=E6(a.a);for(k=0;k<e.length;++k){if(k==3){YYb(d,new WZb);WYb(d,new RZb(e[3],q));YYb(d,new WZb)}else{WYb(d,new QZb(e[k],o))}}b=new tZb(true);WYb(n,new RZb('Edit',b));c=D6(a.a);for(k=0;k<c.length;++k){WYb(b,new QZb(c[k],o))}f=new tZb(true);WYb(n,new TZb(f));g=G6(a.a);for(k=0;k<g.length;++k){WYb(f,new QZb(g[k],o))}i=new tZb(true);YYb(n,new WZb);WYb(n,new RZb('Help',i));j=H6(a.a);for(k=0;k<j.length;++k){WYb(i,new QZb(j[k],o))}z6b(n.cb,Src,zyc);qZb(n,zyc);return n}
var zyc='cwMenuBar',ryc='cwMenuBarEditOptions',syc='cwMenuBarFileOptions',vyc='cwMenuBarFileRecents',wyc='cwMenuBarGWTOptions',xyc='cwMenuBarHelpOptions',yyc='cwMenuBarPrompts';C2(663,1,{},Dmb);_.nc=function Emb(){RLb(this.b[this.a]);this.a=(this.a+1)%this.b.length};_.a=0;C2(664,1,kqc);_.lc=function Imb(){l5(this.b,zmb(this.a))};C2(1062,102,zpc,sZb);C2(1069,103,{98:1,103:1,117:1},QZb,RZb,TZb);C2(1070,103,{98:1,104:1,117:1},WZb);var AS=wec(Uwc,'CwMenuBar$1',663),sY=wec(Swc,'MenuItemSeparator',1070);Zqc(Jn)(7);