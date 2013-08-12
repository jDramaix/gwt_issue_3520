function Mac(){Nac.call(this,false)}
function ibc(a,b){kbc.call(this,a,false);this.c=b}
function jbc(a,b){kbc.call(this,a,false);hbc(this,b)}
function lbc(a){kbc.call(this,'GWT',true);hbc(this,a)}
function Xzb(a){this.d=a;this.c=akb(this.d.b)}
function qac(a,b){return xac(a,b,a.b.c)}
function $b(a,b){kc((ve(),qe),a,vV(Peb,QCc,133,[(urc(),b?trc:src)]))}
function hbc(a,b){a.e=b;!!a.d&&Lac(a.d,a);if(b){gs(b.db,-1);Lf();$b(a.db,true)}else{Lf();$b(a.db,false)}}
function xac(a,b,c){if(c<0||c>a.b.c){throw new lrc}a.p&&(qYb(),ds(b.db,yLc,2));pac(a,c,b.db);Pxc(a.b,c,b);return b}
function Xjb(a){var b,c;b=FV(a.b.ne(VLc),147);if(b==null){c=vV(Ueb,RCc,1,[WLc,'R\xE9tablir','Couper','Copier','Coller']);a.b.pe(VLc,c);return c}else{return b}}
function Yjb(a){var b,c;b=FV(a.b.ne(XLc),147);if(b==null){c=vV(Ueb,RCc,1,['Nouveau','Ouvrir',YLc,'R\xE9cent','Quitter']);a.b.pe(XLc,c);return c}else{return b}}
function _jb(a){var b,c;b=FV(a.b.ne(_Lc),147);if(b==null){c=vV(Ueb,RCc,1,['Contenu','Biscuit de fortune','\xC0 propos de GWT']);a.b.pe(_Lc,c);return c}else{return b}}
function $jb(a){var b,c;b=FV(a.b.ne($Lc),147);if(b==null){c=vV(Ueb,RCc,1,['T\xE9l\xE9charger','Exemples',eIc,'GWiTtez avec le programme']);a.b.pe($Lc,c);return c}else{return b}}
function Zjb(a){var b,c;b=FV(a.b.ne(ZLc),147);if(b==null){c=vV(Ueb,RCc,1,['P\xEAcher dans le d\xE9sert.txt','Comment apprivoiser un perroquet sauvage',"L'\xE9levage des \xE9meus pour les nuls"]);a.b.pe(ZLc,c);return c}else{return b}}
function obc(){var a;cj(this,(qYb(),$doc.createElement(IJc)));uj(this.db,'gwt-MenuItemSeparator');a=$doc.createElement(QFc);rYb(this.db,a);es(a,MFc,'menuSeparatorInner')}
function akb(a){var b,c;b=FV(a.b.ne(aMc),147);if(b==null){c=vV(Ueb,RCc,1,["Merci d'avoir s\xE9lectionn\xE9 une option de menu",'Une s\xE9lection vraiment pertinente',"N'avez-vous rien de mieux \xE0 faire que de s\xE9lectionner des options de menu?","Essayez quelque chose d'autre","ceci n'est qu'un menu!",'Un autre clic gaspill\xE9']);a.b.pe(aMc,c);return c}else{return b}}
function Tzb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new Xzb(a);n=new Mac;n.c=true;AYb(n.db,LFc,'500px');n.f=true;q=new Nac(true);p=Zjb(a.b);for(k=0;k<p.length;++k){oac(q,new ibc(p[k],o))}d=new Nac(true);d.f=true;oac(n,new jbc('Fichier',d));e=Yjb(a.b);for(k=0;k<e.length;++k){if(k==3){qac(d,new obc);oac(d,new jbc(e[3],q));qac(d,new obc)}else{oac(d,new ibc(e[k],o))}}b=new Nac(true);oac(n,new jbc('\xC9dition',b));c=Xjb(a.b);for(k=0;k<c.length;++k){oac(b,new ibc(c[k],o))}f=new Nac(true);oac(n,new lbc(f));g=$jb(a.b);for(k=0;k<g.length;++k){oac(f,new ibc(g[k],o))}i=new Nac(true);qac(n,new obc);oac(n,new jbc('Aide',i));j=_jb(a.b);for(k=0;k<j.length;++k){oac(i,new ibc(j[k],o))}Ojc(n.db,kFc,bMc);Kac(n,bMc);return n}
var bMc='cwMenuBar',VLc='cwMenuBarEditOptions',XLc='cwMenuBarFileOptions',ZLc='cwMenuBarFileRecents',$Lc='cwMenuBarGWTOptions',_Lc='cwMenuBarHelpOptions',aMc='cwMenuBarPrompts';_fb(685,1,{},Xzb);_.sc=function Yzb(){jZb(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.b=0;_fb(686,1,EDc);_.qc=function aAb(){Fib(this.c,Tzb(this.b))};_fb(1082,104,TCc,Mac);_fb(1089,105,{98:1,103:1,117:1},ibc,jbc,lbc);_fb(1090,105,{98:1,104:1,117:1},obc);var Z3=Prc(AKc,'CwMenuBar$1',685),R9=Prc(yKc,'MenuItemSeparator',1090);rEc(Vn)(7);