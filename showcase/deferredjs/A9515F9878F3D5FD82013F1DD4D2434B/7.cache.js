function wac(){xac.call(this,false)}
function Uac(a,b){Wac.call(this,a,false);this.b=b}
function Vac(a,b){Wac.call(this,a,false);Tac(this,b)}
function Xac(a){Wac.call(this,'GWT',true);Tac(this,a)}
function Hzb(a){this.c=a;this.b=Mjb(this.c.a)}
function aac(a,b){return hac(a,b,a.a.b)}
function Pb(a,b){_b((ke(),fe),a,cV(ueb,DCc,134,[(irc(),b?hrc:grc)]))}
function Tac(a,b){a.d=b;!!a.c&&vac(a.c,a);if(b){Vr(b.cb,-1);Af();Pb(a.cb,true)}else{Af();Pb(a.cb,false)}}
function hac(a,b,c){if(c<0||c>a.a.b){throw new _qc}a.o&&(cYb(),Sr(b.cb,bLc,2));_9b(a,c,b.cb);Dxc(a.a,c,b);return b}
function Hjb(a){var b,c;b=mV(a.a.je(yLc),148);if(b==null){c=cV(zeb,ECc,1,[zLc,'R\xE9tablir','Couper','Copier','Coller']);a.a.le(yLc,c);return c}else{return b}}
function Ijb(a){var b,c;b=mV(a.a.je(ALc),148);if(b==null){c=cV(zeb,ECc,1,['Nouveau','Ouvrir',BLc,'R\xE9cent','Quitter']);a.a.le(ALc,c);return c}else{return b}}
function Ljb(a){var b,c;b=mV(a.a.je(ELc),148);if(b==null){c=cV(zeb,ECc,1,['Contenu','Biscuit de fortune','\xC0 propos de GWT']);a.a.le(ELc,c);return c}else{return b}}
function Kjb(a){var b,c;b=mV(a.a.je(DLc),148);if(b==null){c=cV(zeb,ECc,1,['T\xE9l\xE9charger','Exemples',RHc,'GWiTtez avec le programme']);a.a.le(DLc,c);return c}else{return b}}
function Jjb(a){var b,c;b=mV(a.a.je(CLc),148);if(b==null){c=cV(zeb,ECc,1,['P\xEAcher dans le d\xE9sert.txt','Comment apprivoiser un perroquet sauvage',"L'\xE9levage des \xE9meus pour les nuls"]);a.a.le(CLc,c);return c}else{return b}}
function $ac(){var a;Ti(this,(cYb(),$doc.createElement(lJc)));jj(this.cb,'gwt-MenuItemSeparator');a=$doc.createElement(DFc);dYb(this.cb,a);Tr(a,zFc,'menuSeparatorInner')}
function Mjb(a){var b,c;b=mV(a.a.je(FLc),148);if(b==null){c=cV(zeb,ECc,1,["Merci d'avoir s\xE9lectionn\xE9 une option de menu",'Une s\xE9lection vraiment pertinente',"N'avez-vous rien de mieux \xE0 faire que de s\xE9lectionner des options de menu?","Essayez quelque chose d'autre","ceci n'est qu'un menu!",'Un autre clic gaspill\xE9']);a.a.le(FLc,c);return c}else{return b}}
function Dzb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new Hzb(a);n=new wac;n.b=true;mYb(n.cb,yFc,'500px');n.e=true;q=new xac(true);p=Jjb(a.a);for(k=0;k<p.length;++k){$9b(q,new Uac(p[k],o))}d=new xac(true);d.e=true;$9b(n,new Vac('Fichier',d));e=Ijb(a.a);for(k=0;k<e.length;++k){if(k==3){aac(d,new $ac);$9b(d,new Vac(e[3],q));aac(d,new $ac)}else{$9b(d,new Uac(e[k],o))}}b=new xac(true);$9b(n,new Vac('\xC9dition',b));c=Hjb(a.a);for(k=0;k<c.length;++k){$9b(b,new Uac(c[k],o))}f=new xac(true);$9b(n,new Xac(f));g=Kjb(a.a);for(k=0;k<g.length;++k){$9b(f,new Uac(g[k],o))}i=new xac(true);aac(n,new $ac);$9b(n,new Vac('Aide',i));j=Ljb(a.a);for(k=0;k<j.length;++k){$9b(i,new Uac(j[k],o))}Djc(n.cb,ZEc,GLc);uac(n,GLc);return n}
var GLc='cwMenuBar',yLc='cwMenuBarEditOptions',ALc='cwMenuBarFileOptions',CLc='cwMenuBarFileRecents',DLc='cwMenuBarGWTOptions',ELc='cwMenuBarHelpOptions',FLc='cwMenuBarPrompts';Gfb(688,1,{},Hzb);_.nc=function Izb(){VYb(this.b[this.a]);this.a=(this.a+1)%this.b.length};_.a=0;Gfb(689,1,rDc);_.lc=function Mzb(){pib(this.b,Dzb(this.a))};Gfb(1087,102,GCc,wac);Gfb(1094,103,{99:1,104:1,118:1},Uac,Vac,Xac);Gfb(1095,103,{99:1,105:1,118:1},$ac);var E3=Drc(dKc,'CwMenuBar$1',688),w9=Drc(bKc,'MenuItemSeparator',1095);eEc(Jn)(7);