function w6b(){}
function A6b(){}
function p6b(a,b){a.c=b}
function q6b(a){if(a==f6b){return true}yG();return a==i6b}
function r6b(a){if(a==e6b){return true}yG();return a==d6b}
function y6b(a){this.c=(o8b(),j8b).b;this.e=(v8b(),u8b).b;this.b=a}
function n6b(a,b){var c;c=FV(a.bb,95);c.c=b.b;!!c.d&&m0b(c.d,b)}
function o6b(a,b){var c;c=FV(a.bb,95);c.e=b.b;!!c.d&&AYb(c.d,NJc,b.b)}
function s6b(){j6b();o0b.call(this);this.c=(o8b(),j8b);this.d=(v8b(),u8b);qYb();ds(this.f,OJc,0);ds(this.f,PJc,0)}
function j6b(){j6b=OCc;c6b=new w6b;f6b=new w6b;e6b=new w6b;d6b=new w6b;g6b=new w6b;h6b=new w6b;i6b=new w6b}
function k6b(a,b,c){var d;if(c==c6b){if(b==a.b){return}else if(a.b){throw new hsc('Only one CENTER widget may be added')}}Jj(b);qkc(a.k,b);c==c6b&&(a.b=b);d=new y6b(c);b.bb=d;n6b(b,a.c);o6b(b,a.d);m6b(a);Lj(b,a)}
function l6b(a,b){var c,d,e,f,g,i,j;Pjc(a.db,oFc,b);i=new rAc;j=new Bkc(a.k);while(j.c<j.d.d){c=zkc(j);g=FV(c.bb,95).b;e=FV(i.ne(g),141);d=!e?1:e.b;f=g==g6b?'north'+d:g==h6b?'south'+d:g==i6b?'west'+d:g==d6b?'east'+d:g==f6b?'linestart'+d:g==e6b?'lineend'+d:BJc;Pjc((qYb(),ys(c.db)),b,f);i.pe(g,xsc(d+1))}}
function m6b(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;b=a.e;while((qYb(),c$b(b))>0){Jr(b,b$b(b,0))}q=1;e=1;for(i=new Bkc(a.k);i.c<i.d.d;){d=zkc(i);f=FV(d.bb,95).b;f==g6b||f==h6b?++q:(f==d6b||f==i6b||f==f6b||f==e6b)&&++e}r=uV(Jeb,UCc,96,q,0);for(g=0;g<q;++g){r[g]=new A6b;r[g].c=$doc.createElement(LJc);rYb(b,r[g].c)}k=0;n=e-1;o=0;s=q-1;c=null;for(i=new Bkc(a.k);i.c<i.d.d;){d=zkc(i);j=FV(d.bb,95);t=$doc.createElement(MJc);j.d=t;es(j.d,tJc,j.c);AYb(j.d,NJc,j.e);es(j.d,PFc,oFc);es(j.d,OFc,oFc);if(j.b==g6b){tYb(r[o].c,t,r[o].b);rYb(t,d.db);ds(t,CLc,n-k+1);++o}else if(j.b==h6b){tYb(r[s].c,t,r[s].b);rYb(t,d.db);ds(t,CLc,n-k+1);--s}else if(j.b==c6b){c=t}else if(q6b(j.b)){p=r[o];tYb(p.c,t,p.b++);rYb(t,d.db);ds(t,BMc,s-o+1);++k}else if(r6b(j.b)){p=r[o];tYb(p.c,t,p.b);rYb(t,d.db);ds(t,BMc,s-o+1);--n}}if(a.b){p=r[o];tYb(p.c,c,p.b);rYb(c,a.b.db)}}
_fb(745,1,IDc);_.qc=function JDb(){var a,b,c;Fib(this.b,(a=new s6b,uj(a.db,'cw-DockPanel'),qYb(),ds(a.f,OJc,4),p6b(a,(o8b(),i8b)),k6b(a,new D4b(tMc),(j6b(),g6b)),k6b(a,new D4b(uMc),h6b),k6b(a,new D4b(vMc),d6b),k6b(a,new D4b(wMc),i6b),k6b(a,new D4b(xMc),g6b),k6b(a,new D4b(yMc),h6b),b=new D4b("Voici un <code>panneau de d\xE9filement<\/code> situ\xE9 au centre d'un <code>panneau d'ancrage<\/code>. Si des contenus relativement volumineux sont ins\xE9r\xE9s au milieu de ce panneau \xE0 d\xE9filement et si sa taille est d\xE9finie, il prend la forme d'une zone dot\xE9e d'une fonction de d\xE9filement \xE0 l'int\xE9rieur de la page, sans l'utilisation d'un IFRAME.<br><br>Voici un texte encore plus obscur qui va surtout servir \xE0 faire d\xE9filer cet \xE9l\xE9ment jusqu'en bas de sa zone visible. Sinon, il vous faudra r\xE9duire ce panneau \xE0 une taille minuscule pour pouvoir afficher ces formidables barres de d\xE9filement!"),c=new w1b(b),AYb(c.db,PFc,zMc),AYb(c.db,OFc,AMc),k6b(a,c,c6b),l6b(a,'cwDockPanel'),a))};_fb(1048,1004,YCc,s6b);_.Ib=function t6b(a){l6b(this,a)};_._b=function u6b(a){var b;b=b_b(this,a);if(b){a==this.b&&(this.b=null);m6b(this)}return b};var c6b,d6b,e6b,f6b,g6b,h6b,i6b;_fb(1049,1,{},w6b);_fb(1050,1,{95:1},y6b);_fb(1051,1,{96:1},A6b);_.b=0;var a9=Trc(CKc,'DockPanel',1048),_8=Trc(CKc,'DockPanel$TmpRow',1051),Jeb=Src(JKc,'DockPanel$TmpRow;',1381,_8),Z8=Trc(CKc,'DockPanel$DockLayoutConstant',1049),$8=Trc(CKc,'DockPanel$LayoutData',1050);vEc(Vn)(11);