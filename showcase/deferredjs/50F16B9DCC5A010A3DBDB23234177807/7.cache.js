function xac(){yac.call(this,false)}
function Vac(a,b){Xac.call(this,a,false);this.b=b}
function Wac(a,b){Xac.call(this,a,false);Uac(this,b)}
function Yac(a){Xac.call(this,'GWT',true);Uac(this,a)}
function Hzb(a){this.c=a;this.b=Mjb(this.c.a)}
function bac(a,b){return iac(a,b,a.a.b)}
function Pb(a,b){_b((ke(),fe),a,cV(ueb,ECc,134,[(jrc(),b?irc:hrc)]))}
function Uac(a,b){a.d=b;!!a.c&&wac(a.c,a);if(b){Vr(b.cb,-1);Af();Pb(a.cb,true)}else{Af();Pb(a.cb,false)}}
function iac(a,b,c){if(c<0||c>a.a.b){throw new arc}a.o&&(cYb(),Sr(b.cb,cLc,2));aac(a,c,b.cb);Exc(a.a,c,b);return b}
function Hjb(a){var b,c;b=mV(a.a.je(zLc),148);if(b==null){c=cV(zeb,FCc,1,[ALc,'R\xE9tablir','Couper','Copier','Coller']);a.a.le(zLc,c);return c}else{return b}}
function Ijb(a){var b,c;b=mV(a.a.je(BLc),148);if(b==null){c=cV(zeb,FCc,1,['Nouveau','Ouvrir',CLc,'R\xE9cent','Quitter']);a.a.le(BLc,c);return c}else{return b}}
function Ljb(a){var b,c;b=mV(a.a.je(FLc),148);if(b==null){c=cV(zeb,FCc,1,['Contenu','Biscuit de fortune','\xC0 propos de GWT']);a.a.le(FLc,c);return c}else{return b}}
function Kjb(a){var b,c;b=mV(a.a.je(ELc),148);if(b==null){c=cV(zeb,FCc,1,['T\xE9l\xE9charger','Exemples',SHc,'GWiTtez avec le programme']);a.a.le(ELc,c);return c}else{return b}}
function Jjb(a){var b,c;b=mV(a.a.je(DLc),148);if(b==null){c=cV(zeb,FCc,1,['P\xEAcher dans le d\xE9sert.txt','Comment apprivoiser un perroquet sauvage',"L'\xE9levage des \xE9meus pour les nuls"]);a.a.le(DLc,c);return c}else{return b}}
function _ac(){var a;Ti(this,(cYb(),$doc.createElement(mJc)));jj(this.cb,'gwt-MenuItemSeparator');a=$doc.createElement(EFc);dYb(this.cb,a);Tr(a,AFc,'menuSeparatorInner')}
function Mjb(a){var b,c;b=mV(a.a.je(GLc),148);if(b==null){c=cV(zeb,FCc,1,["Merci d'avoir s\xE9lectionn\xE9 une option de menu",'Une s\xE9lection vraiment pertinente',"N'avez-vous rien de mieux \xE0 faire que de s\xE9lectionner des options de menu?","Essayez quelque chose d'autre","ceci n'est qu'un menu!",'Un autre clic gaspill\xE9']);a.a.le(GLc,c);return c}else{return b}}
function Dzb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new Hzb(a);n=new xac;n.b=true;mYb(n.cb,zFc,'500px');n.e=true;q=new yac(true);p=Jjb(a.a);for(k=0;k<p.length;++k){_9b(q,new Vac(p[k],o))}d=new yac(true);d.e=true;_9b(n,new Wac('Fichier',d));e=Ijb(a.a);for(k=0;k<e.length;++k){if(k==3){bac(d,new _ac);_9b(d,new Wac(e[3],q));bac(d,new _ac)}else{_9b(d,new Vac(e[k],o))}}b=new yac(true);_9b(n,new Wac('\xC9dition',b));c=Hjb(a.a);for(k=0;k<c.length;++k){_9b(b,new Vac(c[k],o))}f=new yac(true);_9b(n,new Yac(f));g=Kjb(a.a);for(k=0;k<g.length;++k){_9b(f,new Vac(g[k],o))}i=new yac(true);bac(n,new _ac);_9b(n,new Wac('Aide',i));j=Ljb(a.a);for(k=0;k<j.length;++k){_9b(i,new Vac(j[k],o))}Ejc(n.cb,$Ec,HLc);vac(n,HLc);return n}
var HLc='cwMenuBar',zLc='cwMenuBarEditOptions',BLc='cwMenuBarFileOptions',DLc='cwMenuBarFileRecents',ELc='cwMenuBarGWTOptions',FLc='cwMenuBarHelpOptions',GLc='cwMenuBarPrompts';Gfb(688,1,{},Hzb);_.nc=function Izb(){VYb(this.b[this.a]);this.a=(this.a+1)%this.b.length};_.a=0;Gfb(689,1,sDc);_.lc=function Mzb(){pib(this.b,Dzb(this.a))};Gfb(1087,102,HCc,xac);Gfb(1094,103,{99:1,104:1,118:1},Vac,Wac,Yac);Gfb(1095,103,{99:1,105:1,118:1},_ac);var E3=Erc(eKc,'CwMenuBar$1',688),w9=Erc(cKc,'MenuItemSeparator',1095);fEc(Jn)(7);