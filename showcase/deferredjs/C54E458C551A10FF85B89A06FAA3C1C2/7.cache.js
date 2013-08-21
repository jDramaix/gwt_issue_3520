function Iac(){Jac.call(this,false)}
function ebc(a,b){gbc.call(this,a,false);this.b=b}
function fbc(a,b){gbc.call(this,a,false);dbc(this,b)}
function hbc(a){gbc.call(this,'GWT',true);dbc(this,a)}
function Qzb(a){this.c=a;this.b=Vjb(this.c.a)}
function mac(a,b){return tac(a,b,a.a.b)}
function Pb(a,b){_b((ke(),fe),a,mV(Deb,RCc,134,[(wrc(),b?vrc:urc)]))}
function dbc(a,b){a.d=b;!!a.c&&Hac(a.c,a);if(b){Ur(b.cb,-1);Af();Pb(a.cb,true)}else{Af();Pb(a.cb,false)}}
function tac(a,b,c){if(c<0||c>a.a.b){throw new nrc}a.o&&(zYb(),Rr(b.cb,pLc,2));lac(a,c,b.cb);Rxc(a.a,c,b);return b}
function kbc(){var a;Ti(this,(zYb(),qs($doc,yJc)));ij(this.cb,'gwt-MenuItemSeparator');a=qs($doc,SFc);AYb(this.cb,a);Sr(a,NFc,'menuSeparatorInner')}
function Qjb(a){var b,c;b=wV(a.a.je(MLc),148);if(b==null){c=mV(Ieb,SCc,1,[NLc,'R\xE9tablir','Couper','Copier','Coller']);a.a.le(MLc,c);return c}else{return b}}
function Rjb(a){var b,c;b=wV(a.a.je(OLc),148);if(b==null){c=mV(Ieb,SCc,1,['Nouveau','Ouvrir',PLc,'R\xE9cent','Quitter']);a.a.le(OLc,c);return c}else{return b}}
function Ujb(a){var b,c;b=wV(a.a.je(SLc),148);if(b==null){c=mV(Ieb,SCc,1,['Contenu','Biscuit de fortune','\xC0 propos de GWT']);a.a.le(SLc,c);return c}else{return b}}
function Tjb(a){var b,c;b=wV(a.a.je(RLc),148);if(b==null){c=mV(Ieb,SCc,1,['T\xE9l\xE9charger','Exemples',fIc,'GWiTtez avec le programme']);a.a.le(RLc,c);return c}else{return b}}
function Sjb(a){var b,c;b=wV(a.a.je(QLc),148);if(b==null){c=mV(Ieb,SCc,1,['P\xEAcher dans le d\xE9sert.txt','Comment apprivoiser un perroquet sauvage',"L'\xE9levage des \xE9meus pour les nuls"]);a.a.le(QLc,c);return c}else{return b}}
function Vjb(a){var b,c;b=wV(a.a.je(TLc),148);if(b==null){c=mV(Ieb,SCc,1,["Merci d'avoir s\xE9lectionn\xE9 une option de menu",'Une s\xE9lection vraiment pertinente',"N'avez-vous rien de mieux \xE0 faire que de s\xE9lectionner des options de menu?","Essayez quelque chose d'autre","ceci n'est qu'un menu!",'Un autre clic gaspill\xE9']);a.a.le(TLc,c);return c}else{return b}}
function Mzb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new Qzb(a);n=new Iac;n.b=true;JYb(n.cb,MFc,'500px');n.e=true;q=new Jac(true);p=Sjb(a.a);for(k=0;k<p.length;++k){kac(q,new ebc(p[k],o))}d=new Jac(true);d.e=true;kac(n,new fbc('Fichier',d));e=Rjb(a.a);for(k=0;k<e.length;++k){if(k==3){mac(d,new kbc);kac(d,new fbc(e[3],q));mac(d,new kbc)}else{kac(d,new ebc(e[k],o))}}b=new Jac(true);kac(n,new fbc('\xC9dition',b));c=Qjb(a.a);for(k=0;k<c.length;++k){kac(b,new ebc(c[k],o))}f=new Jac(true);kac(n,new hbc(f));g=Tjb(a.a);for(k=0;k<g.length;++k){kac(f,new ebc(g[k],o))}i=new Jac(true);mac(n,new kbc);kac(n,new fbc('Aide',i));j=Ujb(a.a);for(k=0;k<j.length;++k){kac(i,new ebc(j[k],o))}Pjc(n.cb,lFc,ULc);Gac(n,ULc);return n}
var ULc='cwMenuBar',MLc='cwMenuBarEditOptions',OLc='cwMenuBarFileOptions',QLc='cwMenuBarFileRecents',RLc='cwMenuBarGWTOptions',SLc='cwMenuBarHelpOptions',TLc='cwMenuBarPrompts';Pfb(687,1,{},Qzb);_.nc=function Rzb(){pZb(this.b[this.a]);this.a=(this.a+1)%this.b.length};_.a=0;Pfb(688,1,FDc);_.lc=function Vzb(){yib(this.b,Mzb(this.a))};Pfb(1085,102,UCc,Iac);Pfb(1092,103,{99:1,104:1,118:1},ebc,fbc,hbc);Pfb(1093,103,{99:1,105:1,118:1},kbc);var O3=Rrc(rKc,'CwMenuBar$1',687),F9=Rrc(pKc,'MenuItemSeparator',1093);sEc(In)(7);