function M5b(){}
function Q5b(){}
function F5b(a,b){a.c=b}
function G5b(a){if(a==v5b){return true}$F();return a==y5b}
function H5b(a){if(a==u5b){return true}$F();return a==t5b}
function O5b(a){this.c=(H7b(),C7b).b;this.e=(O7b(),N7b).b;this.b=a}
function D5b(a,b){var c;c=fV(a.bb,95);c.c=b.b;!!c.d&&C_b(c.d,b)}
function E5b(a,b){var c;c=fV(a.bb,95);c.e=b.b;!!c.d&&VXb(c.d,PIc,b.b)}
function I5b(){z5b();E_b.call(this);this.c=(H7b(),C7b);this.d=(O7b(),N7b);LXb();Rr(this.f,QIc,0);Rr(this.f,RIc,0)}
function z5b(){z5b=WBc;s5b=new M5b;v5b=new M5b;u5b=new M5b;t5b=new M5b;w5b=new M5b;x5b=new M5b;y5b=new M5b}
function A5b(a,b,c){var d;if(c==s5b){if(b==a.b){return}else if(a.b){throw new prc('Only one CENTER widget may be added')}}yj(b);Jjc(a.k,b);c==s5b&&(a.b=b);d=new O5b(c);b.bb=d;D5b(b,a.c);E5b(b,a.d);C5b(a);Aj(b,a)}
function B5b(a,b){var c,d,e,f,g,i,j;gjc(a.db,vEc,b);i=new zzc;j=new Ujc(a.k);while(j.c<j.d.d){c=Sjc(j);g=fV(c.bb,95).b;e=fV(i.je(g),141);d=!e?1:e.b;f=g==w5b?'north'+d:g==x5b?'south'+d:g==y5b?'west'+d:g==t5b?'east'+d:g==v5b?'linestart'+d:g==u5b?'lineend'+d:EIc;gjc((LXb(),ks(c.db)),b,f);i.le(g,Frc(d+1))}}
function C5b(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;b=a.e;while((LXb(),xZb(b))>0){xr(b,wZb(b,0))}q=1;e=1;for(i=new Ujc(a.k);i.c<i.d.d;){d=Sjc(i);f=fV(d.bb,95).b;f==w5b||f==x5b?++q:(f==t5b||f==y5b||f==v5b||f==u5b)&&++e}r=WU(feb,_Bc,96,q,0);for(g=0;g<q;++g){r[g]=new Q5b;r[g].c=$doc.createElement(NIc);MXb(b,r[g].c)}k=0;n=e-1;o=0;s=q-1;c=null;for(i=new Ujc(a.k);i.c<i.d.d;){d=Sjc(i);j=fV(d.bb,95);t=$doc.createElement(OIc);j.d=t;Sr(j.d,wIc,j.c);VXb(j.d,PIc,j.e);Sr(j.d,WEc,vEc);Sr(j.d,VEc,vEc);if(j.b==w5b){OXb(r[o].c,t,r[o].b);MXb(t,d.db);Rr(t,DKc,n-k+1);++o}else if(j.b==x5b){OXb(r[s].c,t,r[s].b);MXb(t,d.db);Rr(t,DKc,n-k+1);--s}else if(j.b==s5b){c=t}else if(G5b(j.b)){p=r[o];OXb(p.c,t,p.b++);MXb(t,d.db);Rr(t,CLc,s-o+1);++k}else if(H5b(j.b)){p=r[o];OXb(p.c,t,p.b);MXb(t,d.db);Rr(t,CLc,s-o+1);--n}}if(a.b){p=r[o];OXb(p.c,c,p.b);MXb(c,a.b.db)}}
xfb(744,1,PCc);_.mc=function fDb(){var a,b,c;bib(this.b,(a=new I5b,jj(a.db,'cw-DockPanel'),LXb(),Rr(a.f,QIc,4),F5b(a,(H7b(),B7b)),A5b(a,new T3b(uLc),(z5b(),w5b)),A5b(a,new T3b(vLc),x5b),A5b(a,new T3b(wLc),t5b),A5b(a,new T3b(xLc),y5b),A5b(a,new T3b(yLc),w5b),A5b(a,new T3b(zLc),x5b),b=new T3b("Voici un <code>panneau de d\xE9filement<\/code> situ\xE9 au centre d'un <code>panneau d'ancrage<\/code>. Si des contenus relativement volumineux sont ins\xE9r\xE9s au milieu de ce panneau \xE0 d\xE9filement et si sa taille est d\xE9finie, il prend la forme d'une zone dot\xE9e d'une fonction de d\xE9filement \xE0 l'int\xE9rieur de la page, sans l'utilisation d'un IFRAME.<br><br>Voici un texte encore plus obscur qui va surtout servir \xE0 faire d\xE9filer cet \xE9l\xE9ment jusqu'en bas de sa zone visible. Sinon, il vous faudra r\xE9duire ce panneau \xE0 une taille minuscule pour pouvoir afficher ces formidables barres de d\xE9filement!"),c=new M0b(b),VXb(c.db,WEc,ALc),VXb(c.db,VEc,BLc),A5b(a,c,s5b),B5b(a,'cwDockPanel'),a))};xfb(1044,1000,dCc,I5b);_.Eb=function J5b(a){B5b(this,a)};_.Xb=function K5b(a){var b;b=r$b(this,a);if(b){a==this.b&&(this.b=null);C5b(this)}return b};var s5b,t5b,u5b,v5b,w5b,x5b,y5b;xfb(1045,1,{},M5b);xfb(1046,1,{95:1},O5b);xfb(1047,1,{96:1},Q5b);_.b=0;var x8=_qc(DJc,'DockPanel',1044),w8=_qc(DJc,'DockPanel$TmpRow',1047),feb=$qc(KJc,'DockPanel$TmpRow;',1377,w8),u8=_qc(DJc,'DockPanel$DockLayoutConstant',1045),v8=_qc(DJc,'DockPanel$LayoutData',1046);CDc(Jn)(11);