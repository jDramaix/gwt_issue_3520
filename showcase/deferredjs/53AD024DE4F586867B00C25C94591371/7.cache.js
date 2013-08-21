function fac(){gac.call(this,false)}
function Dac(a,b){Fac.call(this,a,false);this.c=b}
function Eac(a,b){Fac.call(this,a,false);Cac(this,b)}
function Gac(a){Fac.call(this,'GWT',true);Cac(this,a)}
function tzb(a){this.d=a;this.c=yjb(this.d.b)}
function L9b(a,b){return S9b(a,b,a.b.c)}
function Pb(a,b){_b((ke(),fe),a,XU(leb,aCc,133,[(Hqc(),b?Gqc:Fqc)]))}
function Cac(a,b){a.e=b;!!a.d&&eac(a.d,a);if(b){Ur(b.db,-1);Af();Pb(a.db,true)}else{Af();Pb(a.db,false)}}
function S9b(a,b,c){if(c<0||c>a.b.c){throw new yqc}a.p&&(LXb(),Rr(b.db,EKc,2));K9b(a,c,b.db);axc(a.b,c,b);return b}
function tjb(a){var b,c;b=fV(a.b.je(_Kc),147);if(b==null){c=XU(qeb,bCc,1,[aLc,'R\xE9tablir','Couper','Copier','Coller']);a.b.le(_Kc,c);return c}else{return b}}
function ujb(a){var b,c;b=fV(a.b.je(bLc),147);if(b==null){c=XU(qeb,bCc,1,['Nouveau','Ouvrir',cLc,'R\xE9cent','Quitter']);a.b.le(bLc,c);return c}else{return b}}
function xjb(a){var b,c;b=fV(a.b.je(fLc),147);if(b==null){c=XU(qeb,bCc,1,['Contenu','Biscuit de fortune','\xC0 propos de GWT']);a.b.le(fLc,c);return c}else{return b}}
function wjb(a){var b,c;b=fV(a.b.je(eLc),147);if(b==null){c=XU(qeb,bCc,1,['T\xE9l\xE9charger','Exemples',rHc,'GWiTtez avec le programme']);a.b.le(eLc,c);return c}else{return b}}
function vjb(a){var b,c;b=fV(a.b.je(dLc),147);if(b==null){c=XU(qeb,bCc,1,['P\xEAcher dans le d\xE9sert.txt','Comment apprivoiser un perroquet sauvage',"L'\xE9levage des \xE9meus pour les nuls"]);a.b.le(dLc,c);return c}else{return b}}
function Jac(){var a;Ti(this,(LXb(),$doc.createElement(PIc)));jj(this.db,'gwt-MenuItemSeparator');a=$doc.createElement(aFc);MXb(this.db,a);Sr(a,YEc,'menuSeparatorInner')}
function yjb(a){var b,c;b=fV(a.b.je(gLc),147);if(b==null){c=XU(qeb,bCc,1,["Merci d'avoir s\xE9lectionn\xE9 une option de menu",'Une s\xE9lection vraiment pertinente',"N'avez-vous rien de mieux \xE0 faire que de s\xE9lectionner des options de menu?","Essayez quelque chose d'autre","ceci n'est qu'un menu!",'Un autre clic gaspill\xE9']);a.b.le(gLc,c);return c}else{return b}}
function pzb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new tzb(a);n=new fac;n.c=true;VXb(n.db,XEc,'500px');n.f=true;q=new gac(true);p=vjb(a.b);for(k=0;k<p.length;++k){J9b(q,new Dac(p[k],o))}d=new gac(true);d.f=true;J9b(n,new Eac('Fichier',d));e=ujb(a.b);for(k=0;k<e.length;++k){if(k==3){L9b(d,new Jac);J9b(d,new Eac(e[3],q));L9b(d,new Jac)}else{J9b(d,new Dac(e[k],o))}}b=new gac(true);J9b(n,new Eac('\xC9dition',b));c=tjb(a.b);for(k=0;k<c.length;++k){J9b(b,new Dac(c[k],o))}f=new gac(true);J9b(n,new Gac(f));g=wjb(a.b);for(k=0;k<g.length;++k){J9b(f,new Dac(g[k],o))}i=new gac(true);L9b(n,new Jac);J9b(n,new Eac('Aide',i));j=xjb(a.b);for(k=0;k<j.length;++k){J9b(i,new Dac(j[k],o))}hjc(n.db,wEc,hLc);dac(n,hLc);return n}
var hLc='cwMenuBar',_Kc='cwMenuBarEditOptions',bLc='cwMenuBarFileOptions',dLc='cwMenuBarFileRecents',eLc='cwMenuBarGWTOptions',fLc='cwMenuBarHelpOptions',gLc='cwMenuBarPrompts';xfb(684,1,{},tzb);_.oc=function uzb(){EYb(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.b=0;xfb(685,1,QCc);_.mc=function yzb(){bib(this.c,pzb(this.b))};xfb(1080,102,dCc,fac);xfb(1087,103,{98:1,103:1,117:1},Dac,Eac,Gac);xfb(1088,103,{98:1,104:1,117:1},Jac);var x3=arc(GJc,'CwMenuBar$1',684),o9=arc(EJc,'MenuItemSeparator',1088);DDc(Jn)(7);