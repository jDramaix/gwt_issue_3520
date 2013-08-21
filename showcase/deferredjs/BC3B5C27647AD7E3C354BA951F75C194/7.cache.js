function Hac(){Iac.call(this,false)}
function dbc(a,b){fbc.call(this,a,false);this.b=b}
function ebc(a,b){fbc.call(this,a,false);cbc(this,b)}
function gbc(a){fbc.call(this,'GWT',true);cbc(this,a)}
function Qzb(a){this.c=a;this.b=Vjb(this.c.a)}
function lac(a,b){return sac(a,b,a.a.b)}
function Pb(a,b){_b((ke(),fe),a,mV(Deb,QCc,134,[(vrc(),b?urc:trc)]))}
function cbc(a,b){a.d=b;!!a.c&&Gac(a.c,a);if(b){Ur(b.cb,-1);Af();Pb(a.cb,true)}else{Af();Pb(a.cb,false)}}
function sac(a,b,c){if(c<0||c>a.a.b){throw new mrc}a.o&&(zYb(),Rr(b.cb,oLc,2));kac(a,c,b.cb);Qxc(a.a,c,b);return b}
function jbc(){var a;Ti(this,(zYb(),qs($doc,xJc)));ij(this.cb,'gwt-MenuItemSeparator');a=qs($doc,RFc);AYb(this.cb,a);Sr(a,MFc,'menuSeparatorInner')}
function Qjb(a){var b,c;b=wV(a.a.je(LLc),148);if(b==null){c=mV(Ieb,RCc,1,[MLc,'R\xE9tablir','Couper','Copier','Coller']);a.a.le(LLc,c);return c}else{return b}}
function Rjb(a){var b,c;b=wV(a.a.je(NLc),148);if(b==null){c=mV(Ieb,RCc,1,['Nouveau','Ouvrir',OLc,'R\xE9cent','Quitter']);a.a.le(NLc,c);return c}else{return b}}
function Ujb(a){var b,c;b=wV(a.a.je(RLc),148);if(b==null){c=mV(Ieb,RCc,1,['Contenu','Biscuit de fortune','\xC0 propos de GWT']);a.a.le(RLc,c);return c}else{return b}}
function Tjb(a){var b,c;b=wV(a.a.je(QLc),148);if(b==null){c=mV(Ieb,RCc,1,['T\xE9l\xE9charger','Exemples',eIc,'GWiTtez avec le programme']);a.a.le(QLc,c);return c}else{return b}}
function Sjb(a){var b,c;b=wV(a.a.je(PLc),148);if(b==null){c=mV(Ieb,RCc,1,['P\xEAcher dans le d\xE9sert.txt','Comment apprivoiser un perroquet sauvage',"L'\xE9levage des \xE9meus pour les nuls"]);a.a.le(PLc,c);return c}else{return b}}
function Vjb(a){var b,c;b=wV(a.a.je(SLc),148);if(b==null){c=mV(Ieb,RCc,1,["Merci d'avoir s\xE9lectionn\xE9 une option de menu",'Une s\xE9lection vraiment pertinente',"N'avez-vous rien de mieux \xE0 faire que de s\xE9lectionner des options de menu?","Essayez quelque chose d'autre","ceci n'est qu'un menu!",'Un autre clic gaspill\xE9']);a.a.le(SLc,c);return c}else{return b}}
function Mzb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new Qzb(a);n=new Hac;n.b=true;JYb(n.cb,LFc,'500px');n.e=true;q=new Iac(true);p=Sjb(a.a);for(k=0;k<p.length;++k){jac(q,new dbc(p[k],o))}d=new Iac(true);d.e=true;jac(n,new ebc('Fichier',d));e=Rjb(a.a);for(k=0;k<e.length;++k){if(k==3){lac(d,new jbc);jac(d,new ebc(e[3],q));lac(d,new jbc)}else{jac(d,new dbc(e[k],o))}}b=new Iac(true);jac(n,new ebc('\xC9dition',b));c=Qjb(a.a);for(k=0;k<c.length;++k){jac(b,new dbc(c[k],o))}f=new Iac(true);jac(n,new gbc(f));g=Tjb(a.a);for(k=0;k<g.length;++k){jac(f,new dbc(g[k],o))}i=new Iac(true);lac(n,new jbc);jac(n,new ebc('Aide',i));j=Ujb(a.a);for(k=0;k<j.length;++k){jac(i,new dbc(j[k],o))}Ojc(n.cb,kFc,TLc);Fac(n,TLc);return n}
var TLc='cwMenuBar',LLc='cwMenuBarEditOptions',NLc='cwMenuBarFileOptions',PLc='cwMenuBarFileRecents',QLc='cwMenuBarGWTOptions',RLc='cwMenuBarHelpOptions',SLc='cwMenuBarPrompts';Pfb(687,1,{},Qzb);_.nc=function Rzb(){pZb(this.b[this.a]);this.a=(this.a+1)%this.b.length};_.a=0;Pfb(688,1,EDc);_.lc=function Vzb(){yib(this.b,Mzb(this.a))};Pfb(1085,102,TCc,Hac);Pfb(1092,103,{99:1,104:1,118:1},dbc,ebc,gbc);Pfb(1093,103,{99:1,105:1,118:1},jbc);var O3=Qrc(qKc,'CwMenuBar$1',687),F9=Qrc(oKc,'MenuItemSeparator',1093);rEc(In)(7);