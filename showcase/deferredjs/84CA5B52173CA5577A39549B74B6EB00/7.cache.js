function dbc(){ebc.call(this,false)}
function Bbc(a,b){Dbc.call(this,a,false);this.c=b}
function Cbc(a,b){Dbc.call(this,a,false);Abc(this,b)}
function Ebc(a){Dbc.call(this,'GWT',true);Abc(this,a)}
function oAb(a){this.d=a;this.c=tkb(this.d.b)}
function Iac(a,b){return Qac(a,b,a.b.c)}
function _b(a,b){lc((we(),re),a,IV(gfb,mDc,133,[(Rrc(),b?Qrc:Prc)]))}
function Abc(a,b){a.e=b;!!a.d&&cbc(a.d,a);if(b){As((V7b(),b.db),-1);Mf();_b(a.db,true)}else{Mf();_b(a.db,false)}}
function Qac(a,b,c){if(c<0||c>a.b.c){throw new Irc}a.p&&(GYb(),xs(b.db,XLc,2));Hac(a,c,b.db);lyc(a.b,c,b);return b}
function okb(a){var b,c;b=SV(a.b.re(sMc),147);if(b==null){c=IV(lfb,nDc,1,[tMc,'R\xE9tablir','Couper','Copier','Coller']);a.b.te(sMc,c);return c}else{return b}}
function pkb(a){var b,c;b=SV(a.b.re(uMc),147);if(b==null){c=IV(lfb,nDc,1,['Nouveau','Ouvrir',vMc,'R\xE9cent','Quitter']);a.b.te(uMc,c);return c}else{return b}}
function skb(a){var b,c;b=SV(a.b.re(yMc),147);if(b==null){c=IV(lfb,nDc,1,['Contenu','Biscuit de fortune','\xC0 propos de GWT']);a.b.te(yMc,c);return c}else{return b}}
function rkb(a){var b,c;b=SV(a.b.re(xMc),147);if(b==null){c=IV(lfb,nDc,1,['T\xE9l\xE9charger','Exemples',KIc,'GWiTtez avec le programme']);a.b.te(xMc,c);return c}else{return b}}
function qkb(a){var b,c;b=SV(a.b.re(wMc),147);if(b==null){c=IV(lfb,nDc,1,['P\xEAcher dans le d\xE9sert.txt','Comment apprivoiser un perroquet sauvage',"L'\xE9levage des \xE9meus pour les nuls"]);a.b.te(wMc,c);return c}else{return b}}
function Hbc(){var a;dj(this,(GYb(),$doc.createElement(fKc)));vj(this.db,'gwt-MenuItemSeparator');a=$doc.createElement(nGc);HYb(this.db,a);ys(a,jGc,'menuSeparatorInner')}
function tkb(a){var b,c;b=SV(a.b.re(zMc),147);if(b==null){c=IV(lfb,nDc,1,["Merci d'avoir s\xE9lectionn\xE9 une option de menu",'Une s\xE9lection vraiment pertinente',"N'avez-vous rien de mieux \xE0 faire que de s\xE9lectionner des options de menu?","Essayez quelque chose d'autre","ceci n'est qu'un menu!",'Un autre clic gaspill\xE9']);a.b.te(zMc,c);return c}else{return b}}
function kAb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new oAb(a);n=new dbc;n.c=true;QYb(n.db,iGc,'500px');n.f=true;q=new ebc(true);p=qkb(a.b);for(k=0;k<p.length;++k){Gac(q,new Bbc(p[k],o))}d=new ebc(true);d.f=true;Gac(n,new Cbc('Fichier',d));e=pkb(a.b);for(k=0;k<e.length;++k){if(k==3){Iac(d,new Hbc);Gac(d,new Cbc(e[3],q));Iac(d,new Hbc)}else{Gac(d,new Bbc(e[k],o))}}b=new ebc(true);Gac(n,new Cbc('\xC9dition',b));c=okb(a.b);for(k=0;k<c.length;++k){Gac(b,new Bbc(c[k],o))}f=new ebc(true);Gac(n,new Ebc(f));g=rkb(a.b);for(k=0;k<g.length;++k){Gac(f,new Bbc(g[k],o))}i=new ebc(true);Iac(n,new Hbc);Gac(n,new Cbc('Aide',i));j=skb(a.b);for(k=0;k<j.length;++k){Gac(i,new Bbc(j[k],o))}fkc(n.db,JFc,AMc);bbc(n,AMc);return n}
var AMc='cwMenuBar',sMc='cwMenuBarEditOptions',uMc='cwMenuBarFileOptions',wMc='cwMenuBarFileRecents',xMc='cwMenuBarGWTOptions',yMc='cwMenuBarHelpOptions',zMc='cwMenuBarPrompts';sgb(689,1,{},oAb);_.sc=function pAb(){zZb(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.b=0;sgb(690,1,aEc);_.qc=function tAb(){Yib(this.c,kAb(this.b))};sgb(1087,104,pDc,dbc);sgb(1094,105,{98:1,103:1,117:1},Bbc,Cbc,Ebc);sgb(1095,105,{98:1,104:1,117:1},Hbc);var o4=ksc(ZKc,'CwMenuBar$1',689),gab=ksc(XKc,'MenuItemSeparator',1095);PEc(Vn)(7);