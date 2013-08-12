function fG(){fG=fFc;eG=new KCc}
function mG(a){throw new LDc(KNc+a+Qkd)}
function jG(){this.b=Nkd;hG(this,Okd);if(!this.a){throw new LDc(Pkd)}}
function gG(d,a){var b=d.a;for(var c in b){b.hasOwnProperty(c)&&a.pe(c)}}
function o9b(a,b,c,d){var e;a.a.eh(b,c);e=q9b(a.a.i,b,c);kj(e,d,true)}
function hG(c,b){try{typeof $wnd[b]!=Mkd&&mG(b);c.a=$wnd[b]}catch(a){mG(b)}}
function kG(){fG();var a;a=FV(eG.ke(Okd),60);if(!a){a=new jG;eG.me(Okd,a)}return a}
function iG(d,a){a=String(a);var b=d.a;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.Td(a);return String(c)}
function wzb(){var a,b,c,d,e,f,g,i,j,k,n;f=new ymc;g=new z6b(Tkd);g.cb.dir=ALc;pt(g.cb.style,Ukd,uNc);vmc(f,new z6b(Vkd));vmc(f,g);j=new g9b;b=j.j;i=kG();e=(n=new SCc,gG(i,n),n);a=0;for(d=Nzc(hJ(e.a));d.a.ve();){c=FV(Tzc(d),1);k=iG(i,c);Z8b(j,0,a,c);o9b(b,0,a,Wkd);Z8b(j,1,a,k);o9b(b,1,a,Xkd);++a}vmc(f,new z6b(Ykd));vmc(f,j);return f}
var Skd="' in ",Qkd="' is not a JavaScript object and cannot be used as a Dictionary",Vkd='<b>Cet exemple interagit avec le JavaScript variable suivant:<\/b>',Ykd='<br><br>',Tkd='<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n',Rkd="Cannot find '",Pkd="Cannot find JavaScript object with the name 'userInfo'",Zkd='Dictionary',Nkd='Dictionary userInfo',Xkd='cw-DictionaryExample-data',Wkd='cw-DictionaryExample-header',Mkd='object',Ukd='textAlign',Okd='userInfo';fgb(353,1,{60:1},jG);_.Td=function lG(a){var b;b=Rkd+a+Skd+this;throw new LDc(b)};_.tS=function nG(){return this.b};var eG;fgb(671,1,_Fc);_.mc=function Czb(){ojb(this.a,wzb())};var X$=kuc(C0c,Zkd,353);NGc(Jn)(32);