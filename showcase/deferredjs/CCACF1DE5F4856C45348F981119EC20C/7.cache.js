function Nac(){Oac.call(this,false)}
function jbc(a,b){lbc.call(this,a,false);this.c=b}
function kbc(a,b){lbc.call(this,a,false);ibc(this,b)}
function mbc(a){lbc.call(this,'GWT',true);ibc(this,a)}
function Xzb(a){this.d=a;this.c=akb(this.d.b)}
function rac(a,b){return yac(a,b,a.b.c)}
function $b(a,b){kc((ve(),qe),a,vV(Peb,UCc,133,[(yrc(),b?xrc:wrc)]))}
function ibc(a,b){a.e=b;!!a.d&&Mac(a.d,a);if(b){gs(b.db,-1);Lf();$b(a.db,true)}else{Lf();$b(a.db,false)}}
function yac(a,b,c){if(c<0||c>a.b.c){throw new prc}a.p&&(qYb(),ds(b.db,CLc,2));qac(a,c,b.db);Txc(a.b,c,b);return b}
function Xjb(a){var b,c;b=FV(a.b.ne(ZLc),147);if(b==null){c=vV(Ueb,VCc,1,[$Lc,'R\xE9tablir','Couper','Copier','Coller']);a.b.pe(ZLc,c);return c}else{return b}}
function Yjb(a){var b,c;b=FV(a.b.ne(_Lc),147);if(b==null){c=vV(Ueb,VCc,1,['Nouveau','Ouvrir',aMc,'R\xE9cent','Quitter']);a.b.pe(_Lc,c);return c}else{return b}}
function _jb(a){var b,c;b=FV(a.b.ne(dMc),147);if(b==null){c=vV(Ueb,VCc,1,['Contenu','Biscuit de fortune','\xC0 propos de GWT']);a.b.pe(dMc,c);return c}else{return b}}
function $jb(a){var b,c;b=FV(a.b.ne(cMc),147);if(b==null){c=vV(Ueb,VCc,1,['T\xE9l\xE9charger','Exemples',iIc,'GWiTtez avec le programme']);a.b.pe(cMc,c);return c}else{return b}}
function Zjb(a){var b,c;b=FV(a.b.ne(bMc),147);if(b==null){c=vV(Ueb,VCc,1,['P\xEAcher dans le d\xE9sert.txt','Comment apprivoiser un perroquet sauvage',"L'\xE9levage des \xE9meus pour les nuls"]);a.b.pe(bMc,c);return c}else{return b}}
function pbc(){var a;cj(this,(qYb(),$doc.createElement(MJc)));uj(this.db,'gwt-MenuItemSeparator');a=$doc.createElement(UFc);rYb(this.db,a);es(a,QFc,'menuSeparatorInner')}
function akb(a){var b,c;b=FV(a.b.ne(eMc),147);if(b==null){c=vV(Ueb,VCc,1,["Merci d'avoir s\xE9lectionn\xE9 une option de menu",'Une s\xE9lection vraiment pertinente',"N'avez-vous rien de mieux \xE0 faire que de s\xE9lectionner des options de menu?","Essayez quelque chose d'autre","ceci n'est qu'un menu!",'Un autre clic gaspill\xE9']);a.b.pe(eMc,c);return c}else{return b}}
function Tzb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new Xzb(a);n=new Nac;n.c=true;AYb(n.db,PFc,'500px');n.f=true;q=new Oac(true);p=Zjb(a.b);for(k=0;k<p.length;++k){pac(q,new jbc(p[k],o))}d=new Oac(true);d.f=true;pac(n,new kbc('Fichier',d));e=Yjb(a.b);for(k=0;k<e.length;++k){if(k==3){rac(d,new pbc);pac(d,new kbc(e[3],q));rac(d,new pbc)}else{pac(d,new jbc(e[k],o))}}b=new Oac(true);pac(n,new kbc('\xC9dition',b));c=Xjb(a.b);for(k=0;k<c.length;++k){pac(b,new jbc(c[k],o))}f=new Oac(true);pac(n,new mbc(f));g=$jb(a.b);for(k=0;k<g.length;++k){pac(f,new jbc(g[k],o))}i=new Oac(true);rac(n,new pbc);pac(n,new kbc('Aide',i));j=_jb(a.b);for(k=0;k<j.length;++k){pac(i,new jbc(j[k],o))}Pjc(n.db,oFc,fMc);Lac(n,fMc);return n}
var fMc='cwMenuBar',ZLc='cwMenuBarEditOptions',_Lc='cwMenuBarFileOptions',bMc='cwMenuBarFileRecents',cMc='cwMenuBarGWTOptions',dMc='cwMenuBarHelpOptions',eMc='cwMenuBarPrompts';_fb(685,1,{},Xzb);_.sc=function Yzb(){jZb(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.b=0;_fb(686,1,IDc);_.qc=function aAb(){Fib(this.c,Tzb(this.b))};_fb(1082,104,XCc,Nac);_fb(1089,105,{98:1,103:1,117:1},jbc,kbc,mbc);_fb(1090,105,{98:1,104:1,117:1},pbc);var Z3=Trc(EKc,'CwMenuBar$1',685),R9=Trc(CKc,'MenuItemSeparator',1090);vEc(Vn)(7);