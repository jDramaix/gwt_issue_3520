function UEb(a){this.a=a}
function XEb(a){this.a=a}
function i7b(a,b){cYb();(a.a.$g(0,1),b7b(a.a.i,0,1))[ZLc]=b}
function QEb(a){var b;b=a.i.rows.length;if(b>1){F6b(a,b-1);i7b(mV(a.j,98),b-1)}}
function OEb(a){var b;b=a.i.rows.length;N6b(a,b,0,new lXb((vkb(),kkb)));N6b(a,b,1,new lXb(kkb));i7b(mV(a.j,98),b+1)}
function PEb(){var a,b,c,d,e;d=new T6b;c=mV(d.j,98);kj(d.cb,'cw-FlexTable',true);mYb(d.cb,vFc,'32em');cYb();Sr(d.o,kJc,5);Sr(d.o,lJc,3);d7b(c,1,(Z7b(),V7b));K6b(d,0,0,"Ceci est un tableau flexible qui prend en charge les <B>plages de colonne<\/B> et les <B>plages de ligne<\/B>. Vous pouvez l'utiliser pour mettre en forme votre page ou en tant que tableau r\xE9serv\xE9 \xE0 un but pr\xE9cis.");Sr(a7b(c,0),$Kc,2);a=new V_b('Ajouter une ligne',new UEb(d));kj(a.cb,aMc,true);e=new V_b('Supprimer une ligne',new XEb(d));kj(e.cb,aMc,true);b=new akc;jj(b.cb,'cw-FlexTable-buttonPanel');Zjc(b,a);Zjc(b,e);N6b(d,0,1,b);f7b(c,0,1,(e8b(),d8b));OEb(d);OEb(d);D6b(d,'cwFlexTable');return d}
Gfb(769,1,lDc,UEb);_.Dc=function VEb(a){OEb(this.a)};Gfb(770,1,lDc,XEb);_.Dc=function YEb(a){QEb(this.a)};Gfb(771,1,oDc);_.lc=function aFb(){pib(this.a,PEb())};var H4=Arc(dKc,'CwFlexTable$1',769),I4=Arc(dKc,'CwFlexTable$2',770);bEc(Jn)(17);