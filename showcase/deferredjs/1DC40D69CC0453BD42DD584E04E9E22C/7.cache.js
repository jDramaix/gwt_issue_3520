function Mac(){Nac.call(this,false)}
function ibc(a,b){kbc.call(this,a,false);this.c=b}
function jbc(a,b){kbc.call(this,a,false);hbc(this,b)}
function lbc(a){kbc.call(this,'GWT',true);hbc(this,a)}
function Xzb(a){this.d=a;this.c=akb(this.d.b)}
function qac(a,b){return xac(a,b,a.b.c)}
function $b(a,b){kc((ve(),qe),a,vV(Peb,TCc,133,[(xrc(),b?wrc:vrc)]))}
function hbc(a,b){a.e=b;!!a.d&&Lac(a.d,a);if(b){gs(b.db,-1);Lf();$b(a.db,true)}else{Lf();$b(a.db,false)}}
function xac(a,b,c){if(c<0||c>a.b.c){throw new orc}a.p&&(qYb(),ds(b.db,BLc,2));pac(a,c,b.db);Sxc(a.b,c,b);return b}
function Xjb(a){var b,c;b=FV(a.b.ne(YLc),147);if(b==null){c=vV(Ueb,UCc,1,[ZLc,'R\xE9tablir','Couper','Copier','Coller']);a.b.pe(YLc,c);return c}else{return b}}
function Yjb(a){var b,c;b=FV(a.b.ne($Lc),147);if(b==null){c=vV(Ueb,UCc,1,['Nouveau','Ouvrir',_Lc,'R\xE9cent','Quitter']);a.b.pe($Lc,c);return c}else{return b}}
function _jb(a){var b,c;b=FV(a.b.ne(cMc),147);if(b==null){c=vV(Ueb,UCc,1,['Contenu','Biscuit de fortune','\xC0 propos de GWT']);a.b.pe(cMc,c);return c}else{return b}}
function $jb(a){var b,c;b=FV(a.b.ne(bMc),147);if(b==null){c=vV(Ueb,UCc,1,['T\xE9l\xE9charger','Exemples',hIc,'GWiTtez avec le programme']);a.b.pe(bMc,c);return c}else{return b}}
function Zjb(a){var b,c;b=FV(a.b.ne(aMc),147);if(b==null){c=vV(Ueb,UCc,1,['P\xEAcher dans le d\xE9sert.txt','Comment apprivoiser un perroquet sauvage',"L'\xE9levage des \xE9meus pour les nuls"]);a.b.pe(aMc,c);return c}else{return b}}
function obc(){var a;cj(this,(qYb(),$doc.createElement(LJc)));uj(this.db,'gwt-MenuItemSeparator');a=$doc.createElement(TFc);rYb(this.db,a);es(a,PFc,'menuSeparatorInner')}
function akb(a){var b,c;b=FV(a.b.ne(dMc),147);if(b==null){c=vV(Ueb,UCc,1,["Merci d'avoir s\xE9lectionn\xE9 une option de menu",'Une s\xE9lection vraiment pertinente',"N'avez-vous rien de mieux \xE0 faire que de s\xE9lectionner des options de menu?","Essayez quelque chose d'autre","ceci n'est qu'un menu!",'Un autre clic gaspill\xE9']);a.b.pe(dMc,c);return c}else{return b}}
function Tzb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new Xzb(a);n=new Mac;n.c=true;AYb(n.db,OFc,'500px');n.f=true;q=new Nac(true);p=Zjb(a.b);for(k=0;k<p.length;++k){oac(q,new ibc(p[k],o))}d=new Nac(true);d.f=true;oac(n,new jbc('Fichier',d));e=Yjb(a.b);for(k=0;k<e.length;++k){if(k==3){qac(d,new obc);oac(d,new jbc(e[3],q));qac(d,new obc)}else{oac(d,new ibc(e[k],o))}}b=new Nac(true);oac(n,new jbc('\xC9dition',b));c=Xjb(a.b);for(k=0;k<c.length;++k){oac(b,new ibc(c[k],o))}f=new Nac(true);oac(n,new lbc(f));g=$jb(a.b);for(k=0;k<g.length;++k){oac(f,new ibc(g[k],o))}i=new Nac(true);qac(n,new obc);oac(n,new jbc('Aide',i));j=_jb(a.b);for(k=0;k<j.length;++k){oac(i,new ibc(j[k],o))}Ojc(n.db,nFc,eMc);Kac(n,eMc);return n}
var eMc='cwMenuBar',YLc='cwMenuBarEditOptions',$Lc='cwMenuBarFileOptions',aMc='cwMenuBarFileRecents',bMc='cwMenuBarGWTOptions',cMc='cwMenuBarHelpOptions',dMc='cwMenuBarPrompts';_fb(685,1,{},Xzb);_.sc=function Yzb(){jZb(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.b=0;_fb(686,1,HDc);_.qc=function aAb(){Fib(this.c,Tzb(this.b))};_fb(1082,104,WCc,Mac);_fb(1089,105,{98:1,103:1,117:1},ibc,jbc,lbc);_fb(1090,105,{98:1,104:1,117:1},obc);var Z3=Src(DKc,'CwMenuBar$1',685),R9=Src(BKc,'MenuItemSeparator',1090);uEc(Vn)(7);