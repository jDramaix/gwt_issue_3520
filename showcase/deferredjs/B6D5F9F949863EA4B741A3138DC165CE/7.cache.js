function eac(){fac.call(this,false)}
function Cac(a,b){Eac.call(this,a,false);this.c=b}
function Dac(a,b){Eac.call(this,a,false);Bac(this,b)}
function Fac(a){Eac.call(this,'GWT',true);Bac(this,a)}
function tzb(a){this.d=a;this.c=yjb(this.d.b)}
function K9b(a,b){return R9b(a,b,a.b.c)}
function Pb(a,b){_b((ke(),fe),a,XU(leb,YBc,133,[(Dqc(),b?Cqc:Bqc)]))}
function Bac(a,b){a.e=b;!!a.d&&dac(a.d,a);if(b){Ur(b.db,-1);Af();Pb(a.db,true)}else{Af();Pb(a.db,false)}}
function R9b(a,b,c){if(c<0||c>a.b.c){throw new uqc}a.p&&(LXb(),Rr(b.db,AKc,2));J9b(a,c,b.db);Ywc(a.b,c,b);return b}
function tjb(a){var b,c;b=fV(a.b.je(XKc),147);if(b==null){c=XU(qeb,ZBc,1,[YKc,'R\xE9tablir','Couper','Copier','Coller']);a.b.le(XKc,c);return c}else{return b}}
function ujb(a){var b,c;b=fV(a.b.je(ZKc),147);if(b==null){c=XU(qeb,ZBc,1,['Nouveau','Ouvrir',$Kc,'R\xE9cent','Quitter']);a.b.le(ZKc,c);return c}else{return b}}
function xjb(a){var b,c;b=fV(a.b.je(bLc),147);if(b==null){c=XU(qeb,ZBc,1,['Contenu','Biscuit de fortune','\xC0 propos de GWT']);a.b.le(bLc,c);return c}else{return b}}
function wjb(a){var b,c;b=fV(a.b.je(aLc),147);if(b==null){c=XU(qeb,ZBc,1,['T\xE9l\xE9charger','Exemples',nHc,'GWiTtez avec le programme']);a.b.le(aLc,c);return c}else{return b}}
function vjb(a){var b,c;b=fV(a.b.je(_Kc),147);if(b==null){c=XU(qeb,ZBc,1,['P\xEAcher dans le d\xE9sert.txt','Comment apprivoiser un perroquet sauvage',"L'\xE9levage des \xE9meus pour les nuls"]);a.b.le(_Kc,c);return c}else{return b}}
function Iac(){var a;Ti(this,(LXb(),$doc.createElement(LIc)));jj(this.db,'gwt-MenuItemSeparator');a=$doc.createElement(YEc);MXb(this.db,a);Sr(a,UEc,'menuSeparatorInner')}
function yjb(a){var b,c;b=fV(a.b.je(cLc),147);if(b==null){c=XU(qeb,ZBc,1,["Merci d'avoir s\xE9lectionn\xE9 une option de menu",'Une s\xE9lection vraiment pertinente',"N'avez-vous rien de mieux \xE0 faire que de s\xE9lectionner des options de menu?","Essayez quelque chose d'autre","ceci n'est qu'un menu!",'Un autre clic gaspill\xE9']);a.b.le(cLc,c);return c}else{return b}}
function pzb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new tzb(a);n=new eac;n.c=true;VXb(n.db,TEc,'500px');n.f=true;q=new fac(true);p=vjb(a.b);for(k=0;k<p.length;++k){I9b(q,new Cac(p[k],o))}d=new fac(true);d.f=true;I9b(n,new Dac('Fichier',d));e=ujb(a.b);for(k=0;k<e.length;++k){if(k==3){K9b(d,new Iac);I9b(d,new Dac(e[3],q));K9b(d,new Iac)}else{I9b(d,new Cac(e[k],o))}}b=new fac(true);I9b(n,new Dac('\xC9dition',b));c=tjb(a.b);for(k=0;k<c.length;++k){I9b(b,new Cac(c[k],o))}f=new fac(true);I9b(n,new Fac(f));g=wjb(a.b);for(k=0;k<g.length;++k){I9b(f,new Cac(g[k],o))}i=new fac(true);K9b(n,new Iac);I9b(n,new Dac('Aide',i));j=xjb(a.b);for(k=0;k<j.length;++k){I9b(i,new Cac(j[k],o))}gjc(n.db,sEc,dLc);cac(n,dLc);return n}
var dLc='cwMenuBar',XKc='cwMenuBarEditOptions',ZKc='cwMenuBarFileOptions',_Kc='cwMenuBarFileRecents',aLc='cwMenuBarGWTOptions',bLc='cwMenuBarHelpOptions',cLc='cwMenuBarPrompts';xfb(684,1,{},tzb);_.oc=function uzb(){EYb(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.b=0;xfb(685,1,MCc);_.mc=function yzb(){bib(this.c,pzb(this.b))};xfb(1080,102,_Bc,eac);xfb(1087,103,{98:1,103:1,117:1},Cac,Dac,Fac);xfb(1088,103,{98:1,104:1,117:1},Iac);var x3=Yqc(CJc,'CwMenuBar$1',684),o9=Yqc(AJc,'MenuItemSeparator',1088);zDc(Jn)(7);