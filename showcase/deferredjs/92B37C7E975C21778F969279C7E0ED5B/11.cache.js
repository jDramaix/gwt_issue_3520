function v8b(){}
function z8b(){}
function o8b(a,b){a.b=b}
function p8b(a){if(a==e8b){return true}yG();return a==h8b}
function q8b(a){if(a==d8b){return true}yG();return a==c8b}
function x8b(a){this.b=(mac(),hac).a;this.d=(tac(),sac).a;this.a=a}
function m8b(a,b){var c;c=FV(a.ab,97);c.b=b.a;!!c.c&&i2b(c.c,b)}
function n8b(a,b){var c;c=FV(a.ab,97);c.d=b.a;!!c.c&&x$b(c.c,jWc,b.a)}
function r8b(){i8b();k2b.call(this);this.b=(mac(),hac);this.c=(tac(),sac);m$b();Sr(this.e,kWc,0);Sr(this.e,lWc,0)}
function i8b(){i8b=iFc;b8b=new v8b;e8b=new v8b;d8b=new v8b;c8b=new v8b;f8b=new v8b;g8b=new v8b;h8b=new v8b}
function j8b(a,b,c){var d;if(c==b8b){if(b==a.a){return}else if(a.a){throw new Duc(vdd)}}yj(b);Cmc(a.j,b);c==b8b&&(a.a=b);d=new x8b(c);b.ab=d;m8b(b,a.b);n8b(b,a.c);l8b(a);Aj(b,a)}
function k8b(a,b){var c,d,e,f,g,i,j;_lc(a.cb,LHc,b);i=new NCc;j=new Nmc(a.j);while(j.b<j.c.c){c=Lmc(j);g=FV(c.ab,97).a;e=FV(i.ke(g),143);d=!e?1:e.a;f=g==f8b?wdd+d:g==g8b?xdd+d:g==h8b?ydd+d:g==c8b?zdd+d:g==e8b?Add+d:g==d8b?Bdd+d:WVc;_lc((m$b(),ks(c.cb)),b,f);i.me(g,Tuc(d+1))}}
function l8b(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;b=a.d;while((m$b(),b.children.length)>0){yr(b,b.children[0])}q=1;e=1;for(i=new Nmc(a.j);i.b<i.c.c;){d=Lmc(i);f=FV(d.ab,97).a;f==f8b||f==g8b?++q:(f==c8b||f==h8b||f==e8b||f==d8b)&&++e}r=uV(Peb,nFc,98,q,0);for(g=0;g<q;++g){r[g]=new z8b;r[g].b=qs($doc,hWc);n$b(b,r[g].b)}k=0;n=e-1;o=0;s=q-1;c=null;for(i=new Nmc(a.j);i.b<i.c.c;){d=Lmc(i);j=FV(d.ab,97);t=qs($doc,iWc);j.c=t;Tr(j.c,GVc,j.b);x$b(j.c,jWc,j.d);Tr(j.c,SIc,LHc);Tr(j.c,RIc,LHc);if(j.a==f8b){p$b(r[o].b,t,r[o].a);n$b(t,d.cb);Sr(t,F9c,n-k+1);++o}else if(j.a==g8b){p$b(r[s].b,t,r[s].a);n$b(t,d.cb);Sr(t,F9c,n-k+1);--s}else if(j.a==b8b){c=t}else if(p8b(j.a)){p=r[o];p$b(p.b,t,p.a++);n$b(t,d.cb);Sr(t,Cdd,s-o+1);++k}else if(q8b(j.a)){p=r[o];p$b(p.b,t,p.a);n$b(t,d.cb);Sr(t,Cdd,s-o+1);--n}}if(a.a){p=r[o];p$b(p.b,c,p.a);n$b(c,a.a.cb)}}
var Ddd='DockPanel',Gdd='DockPanel$DockLayoutConstant',Hdd='DockPanel$LayoutData',Edd='DockPanel$TmpRow',Fdd='DockPanel$TmpRow;',vdd='Only one CENTER widget may be added',rdd="Voici un <code>panneau de d\xE9filement<\/code> situ\xE9 au centre d'un <code>panneau d'ancrage<\/code>. Si des contenus relativement volumineux sont ins\xE9r\xE9s au milieu de ce panneau \xE0 d\xE9filement et si sa taille est d\xE9finie, il prend la forme d'une zone dot\xE9e d'une fonction de d\xE9filement \xE0 l'int\xE9rieur de la page, sans l'utilisation d'un IFRAME.<br><br>Voici un texte encore plus obscur qui va surtout servir \xE0 faire d\xE9filer cet \xE9l\xE9ment jusqu'en bas de sa zone visible. Sinon, il vous faudra r\xE9duire ce panneau \xE0 une taille minuscule pour pouvoir afficher ces formidables barres de d\xE9filement!",kdd='cw-DockPanel',udd='cwDockPanel',zdd='east',Bdd='lineend',Add='linestart',wdd='north',xdd='south',ydd='west';fgb(751,1,cGc);_.mc=function MEb(){var a,b,c;ojb(this.a,(a=new r8b,jj(a.cb,kdd),m$b(),Sr(a.e,kWc,4),o8b(a,(mac(),gac)),j8b(a,new z6b(ldd),(i8b(),f8b)),j8b(a,new z6b(mdd),g8b),j8b(a,new z6b(ndd),c8b),j8b(a,new z6b(odd),h8b),j8b(a,new z6b(pdd),f8b),j8b(a,new z6b(qdd),g8b),b=new z6b(rdd),c=new s3b(b),x$b(c.cb,SIc,sdd),x$b(c.cb,RIc,tdd),j8b(a,c,b8b),k8b(a,udd),a))};fgb(1056,1012,rFc,r8b);_.Eb=function s8b(a){k8b(this,a)};_.Xb=function t8b(a){var b;b=Z0b(this,a);if(b){a==this.a&&(this.a=null);l8b(this)}return b};var b8b,c8b,d8b,e8b,f8b,g8b,h8b;fgb(1057,1,{},v8b);fgb(1058,1,{97:1},x8b);fgb(1059,1,{98:1},z8b);_.a=0;var b9=nuc(kZc,Ddd,1056),a9=nuc(kZc,Edd,1059),Peb=muc(x$c,Fdd,1395,a9),$8=nuc(kZc,Gdd,1057),_8=nuc(kZc,Hdd,1058);QGc(Jn)(11);