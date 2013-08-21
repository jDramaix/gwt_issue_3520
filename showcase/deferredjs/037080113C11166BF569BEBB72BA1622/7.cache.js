function _Zb(){a$b.call(this,false)}
function x$b(a,b){z$b.call(this,a,false);this.c=b}
function y$b(a,b){z$b.call(this,a,false);w$b(this,b)}
function A$b(a){z$b.call(this,'GWT',true);w$b(this,a)}
function knb(a){this.d=a;this.c=p7(this.d.b)}
function EZb(a,b){return MZb(a,b,a.b.c)}
function _b(a,b){lc((we(),re),a,bJ(c2,lqc,132,[(Qec(),b?Pec:Oec)]))}
function w$b(a,b){a.e=b;!!a.d&&$Zb(a.d,a);if(b){As((RWb(),b.db),-1);Mf();_b(a.db,true)}else{Mf();_b(a.db,false)}}
function MZb(a,b,c){if(c<0||c>a.b.c){throw new Hec}a.p&&(CLb(),xs(b.db,Wyc,2));DZb(a,c,b.db);klc(a.b,c,b);return b}
function l7(a){var b,c;b=lJ(a.b.ud(szc),146);if(b==null){c=bJ(h2,mqc,1,['New','Open',tzc,uzc,'Exit']);a.b.wd(szc,c);return c}else{return b}}
function k7(a){var b,c;b=lJ(a.b.ud(rzc),146);if(b==null){c=bJ(h2,mqc,1,['Undo','Redo','Cut','Copy','Paste']);a.b.wd(rzc,c);return c}else{return b}}
function o7(a){var b,c;b=lJ(a.b.ud(xzc),146);if(b==null){c=bJ(h2,mqc,1,['Contents','Fortune Cookie','About GWT']);a.b.wd(xzc,c);return c}else{return b}}
function n7(a){var b,c;b=lJ(a.b.ud(wzc),146);if(b==null){c=bJ(h2,mqc,1,['Download','Examples',Cvc,"GWT wit' the program"]);a.b.wd(wzc,c);return c}else{return b}}
function m7(a){var b,c;b=lJ(a.b.ud(vzc),146);if(b==null){c=bJ(h2,mqc,1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);a.b.wd(vzc,c);return c}else{return b}}
function D$b(){var a;dj(this,(CLb(),$doc.createElement(axc)));vj(this.db,'gwt-MenuItemSeparator');a=$doc.createElement(mtc);DLb(this.db,a);ys(a,itc,'menuSeparatorInner')}
function p7(a){var b,c;b=lJ(a.b.ud(yzc),146);if(b==null){c=bJ(h2,mqc,1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);a.b.wd(yzc,c);return c}else{return b}}
function gnb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new knb(a);n=new _Zb;n.c=true;MLb(n.db,htc,'500px');n.f=true;q=new a$b(true);p=m7(a.b);for(k=0;k<p.length;++k){CZb(q,new x$b(p[k],o))}d=new a$b(true);d.f=true;CZb(n,new y$b('File',d));e=l7(a.b);for(k=0;k<e.length;++k){if(k==3){EZb(d,new D$b);CZb(d,new y$b(e[3],q));EZb(d,new D$b)}else{CZb(d,new x$b(e[k],o))}}b=new a$b(true);CZb(n,new y$b('Edit',b));c=k7(a.b);for(k=0;k<c.length;++k){CZb(b,new x$b(c[k],o))}f=new a$b(true);CZb(n,new A$b(f));g=n7(a.b);for(k=0;k<g.length;++k){CZb(f,new x$b(g[k],o))}i=new a$b(true);EZb(n,new D$b);CZb(n,new y$b('Help',i));j=o7(a.b);for(k=0;k<j.length;++k){CZb(i,new x$b(j[k],o))}b7b(n.db,Isc,zzc);ZZb(n,zzc);return n}
var zzc='cwMenuBar',rzc='cwMenuBarEditOptions',szc='cwMenuBarFileOptions',vzc='cwMenuBarFileRecents',wzc='cwMenuBarGWTOptions',xzc='cwMenuBarHelpOptions',yzc='cwMenuBarPrompts';o3(664,1,{},knb);_.sc=function lnb(){vMb(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.b=0;o3(665,1,_qc);_.qc=function pnb(){U5(this.c,gnb(this.b))};o3(1062,104,oqc,_Zb);o3(1069,105,{97:1,102:1,116:1},x$b,y$b,A$b);o3(1070,105,{97:1,103:1,116:1},D$b);var kT=jfc(Uxc,'CwMenuBar$1',664),cZ=jfc(Sxc,'MenuItemSeparator',1070);Orc(Vn)(7);