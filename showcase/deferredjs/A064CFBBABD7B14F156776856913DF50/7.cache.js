function ebc(){fbc.call(this,false)}
function Cbc(a,b){Ebc.call(this,a,false);this.c=b}
function Dbc(a,b){Ebc.call(this,a,false);Bbc(this,b)}
function Fbc(a){Ebc.call(this,'GWT',true);Bbc(this,a)}
function oAb(a){this.d=a;this.c=tkb(this.d.b)}
function Jac(a,b){return Rac(a,b,a.b.c)}
function _b(a,b){lc((we(),re),a,IV(gfb,qDc,133,[(Vrc(),b?Urc:Trc)]))}
function Bbc(a,b){a.e=b;!!a.d&&dbc(a.d,a);if(b){As((W7b(),b.db),-1);Mf();_b(a.db,true)}else{Mf();_b(a.db,false)}}
function Rac(a,b,c){if(c<0||c>a.b.c){throw new Mrc}a.p&&(GYb(),xs(b.db,_Lc,2));Iac(a,c,b.db);pyc(a.b,c,b);return b}
function okb(a){var b,c;b=SV(a.b.re(wMc),147);if(b==null){c=IV(lfb,rDc,1,[xMc,'R\xE9tablir','Couper','Copier','Coller']);a.b.te(wMc,c);return c}else{return b}}
function pkb(a){var b,c;b=SV(a.b.re(yMc),147);if(b==null){c=IV(lfb,rDc,1,['Nouveau','Ouvrir',zMc,'R\xE9cent','Quitter']);a.b.te(yMc,c);return c}else{return b}}
function skb(a){var b,c;b=SV(a.b.re(CMc),147);if(b==null){c=IV(lfb,rDc,1,['Contenu','Biscuit de fortune','\xC0 propos de GWT']);a.b.te(CMc,c);return c}else{return b}}
function rkb(a){var b,c;b=SV(a.b.re(BMc),147);if(b==null){c=IV(lfb,rDc,1,['T\xE9l\xE9charger','Exemples',OIc,'GWiTtez avec le programme']);a.b.te(BMc,c);return c}else{return b}}
function qkb(a){var b,c;b=SV(a.b.re(AMc),147);if(b==null){c=IV(lfb,rDc,1,['P\xEAcher dans le d\xE9sert.txt','Comment apprivoiser un perroquet sauvage',"L'\xE9levage des \xE9meus pour les nuls"]);a.b.te(AMc,c);return c}else{return b}}
function Ibc(){var a;dj(this,(GYb(),$doc.createElement(jKc)));vj(this.db,'gwt-MenuItemSeparator');a=$doc.createElement(rGc);HYb(this.db,a);ys(a,nGc,'menuSeparatorInner')}
function tkb(a){var b,c;b=SV(a.b.re(DMc),147);if(b==null){c=IV(lfb,rDc,1,["Merci d'avoir s\xE9lectionn\xE9 une option de menu",'Une s\xE9lection vraiment pertinente',"N'avez-vous rien de mieux \xE0 faire que de s\xE9lectionner des options de menu?","Essayez quelque chose d'autre","ceci n'est qu'un menu!",'Un autre clic gaspill\xE9']);a.b.te(DMc,c);return c}else{return b}}
function kAb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new oAb(a);n=new ebc;n.c=true;QYb(n.db,mGc,'500px');n.f=true;q=new fbc(true);p=qkb(a.b);for(k=0;k<p.length;++k){Hac(q,new Cbc(p[k],o))}d=new fbc(true);d.f=true;Hac(n,new Dbc('Fichier',d));e=pkb(a.b);for(k=0;k<e.length;++k){if(k==3){Jac(d,new Ibc);Hac(d,new Dbc(e[3],q));Jac(d,new Ibc)}else{Hac(d,new Cbc(e[k],o))}}b=new fbc(true);Hac(n,new Dbc('\xC9dition',b));c=okb(a.b);for(k=0;k<c.length;++k){Hac(b,new Cbc(c[k],o))}f=new fbc(true);Hac(n,new Fbc(f));g=rkb(a.b);for(k=0;k<g.length;++k){Hac(f,new Cbc(g[k],o))}i=new fbc(true);Jac(n,new Ibc);Hac(n,new Dbc('Aide',i));j=skb(a.b);for(k=0;k<j.length;++k){Hac(i,new Cbc(j[k],o))}gkc(n.db,NFc,EMc);cbc(n,EMc);return n}
var EMc='cwMenuBar',wMc='cwMenuBarEditOptions',yMc='cwMenuBarFileOptions',AMc='cwMenuBarFileRecents',BMc='cwMenuBarGWTOptions',CMc='cwMenuBarHelpOptions',DMc='cwMenuBarPrompts';sgb(689,1,{},oAb);_.sc=function pAb(){zZb(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.b=0;sgb(690,1,eEc);_.qc=function tAb(){Yib(this.c,kAb(this.b))};sgb(1087,104,tDc,ebc);sgb(1094,105,{98:1,103:1,117:1},Cbc,Dbc,Fbc);sgb(1095,105,{98:1,104:1,117:1},Ibc);var o4=osc(bLc,'CwMenuBar$1',689),gab=osc(_Kc,'MenuItemSeparator',1095);TEc(Vn)(7);