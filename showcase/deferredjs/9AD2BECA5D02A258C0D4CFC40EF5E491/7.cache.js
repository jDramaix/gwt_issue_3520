function a$b(){b$b.call(this,false)}
function y$b(a,b){A$b.call(this,a,false);this.c=b}
function z$b(a,b){A$b.call(this,a,false);x$b(this,b)}
function B$b(a){A$b.call(this,'GWT',true);x$b(this,a)}
function knb(a){this.d=a;this.c=p7(this.d.b)}
function FZb(a,b){return NZb(a,b,a.b.c)}
function _b(a,b){lc((we(),re),a,bJ(c2,mqc,132,[(Rec(),b?Qec:Pec)]))}
function x$b(a,b){a.e=b;!!a.d&&_Zb(a.d,a);if(b){As((SWb(),b.db),-1);Mf();_b(a.db,true)}else{Mf();_b(a.db,false)}}
function NZb(a,b,c){if(c<0||c>a.b.c){throw new Iec}a.p&&(CLb(),xs(b.db,Xyc,2));EZb(a,c,b.db);llc(a.b,c,b);return b}
function l7(a){var b,c;b=lJ(a.b.ud(tzc),146);if(b==null){c=bJ(h2,nqc,1,['New','Open',uzc,vzc,'Exit']);a.b.wd(tzc,c);return c}else{return b}}
function k7(a){var b,c;b=lJ(a.b.ud(szc),146);if(b==null){c=bJ(h2,nqc,1,['Undo','Redo','Cut','Copy','Paste']);a.b.wd(szc,c);return c}else{return b}}
function o7(a){var b,c;b=lJ(a.b.ud(yzc),146);if(b==null){c=bJ(h2,nqc,1,['Contents','Fortune Cookie','About GWT']);a.b.wd(yzc,c);return c}else{return b}}
function n7(a){var b,c;b=lJ(a.b.ud(xzc),146);if(b==null){c=bJ(h2,nqc,1,['Download','Examples',Dvc,"GWT wit' the program"]);a.b.wd(xzc,c);return c}else{return b}}
function m7(a){var b,c;b=lJ(a.b.ud(wzc),146);if(b==null){c=bJ(h2,nqc,1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);a.b.wd(wzc,c);return c}else{return b}}
function E$b(){var a;dj(this,(CLb(),$doc.createElement(bxc)));vj(this.db,'gwt-MenuItemSeparator');a=$doc.createElement(ntc);DLb(this.db,a);ys(a,jtc,'menuSeparatorInner')}
function p7(a){var b,c;b=lJ(a.b.ud(zzc),146);if(b==null){c=bJ(h2,nqc,1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);a.b.wd(zzc,c);return c}else{return b}}
function gnb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new knb(a);n=new a$b;n.c=true;MLb(n.db,itc,'500px');n.f=true;q=new b$b(true);p=m7(a.b);for(k=0;k<p.length;++k){DZb(q,new y$b(p[k],o))}d=new b$b(true);d.f=true;DZb(n,new z$b('File',d));e=l7(a.b);for(k=0;k<e.length;++k){if(k==3){FZb(d,new E$b);DZb(d,new z$b(e[3],q));FZb(d,new E$b)}else{DZb(d,new y$b(e[k],o))}}b=new b$b(true);DZb(n,new z$b('Edit',b));c=k7(a.b);for(k=0;k<c.length;++k){DZb(b,new y$b(c[k],o))}f=new b$b(true);DZb(n,new B$b(f));g=n7(a.b);for(k=0;k<g.length;++k){DZb(f,new y$b(g[k],o))}i=new b$b(true);FZb(n,new E$b);DZb(n,new z$b('Help',i));j=o7(a.b);for(k=0;k<j.length;++k){DZb(i,new y$b(j[k],o))}c7b(n.db,Jsc,Azc);$Zb(n,Azc);return n}
var Azc='cwMenuBar',szc='cwMenuBarEditOptions',tzc='cwMenuBarFileOptions',wzc='cwMenuBarFileRecents',xzc='cwMenuBarGWTOptions',yzc='cwMenuBarHelpOptions',zzc='cwMenuBarPrompts';o3(664,1,{},knb);_.sc=function lnb(){vMb(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.b=0;o3(665,1,arc);_.qc=function pnb(){U5(this.c,gnb(this.b))};o3(1062,104,pqc,a$b);o3(1069,105,{97:1,102:1,116:1},y$b,z$b,B$b);o3(1070,105,{97:1,103:1,116:1},E$b);var kT=kfc(Vxc,'CwMenuBar$1',664),cZ=kfc(Txc,'MenuItemSeparator',1070);Prc(Vn)(7);