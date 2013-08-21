function fG(){fG=jFc;eG=new OCc}
function mG(a){throw new PDc(ONc+a+Ukd)}
function jG(){this.b=Rkd;hG(this,Skd);if(!this.a){throw new PDc(Tkd)}}
function gG(d,a){var b=d.a;for(var c in b){b.hasOwnProperty(c)&&a.pe(c)}}
function p9b(a,b,c,d){var e;a.a.eh(b,c);e=r9b(a.a.i,b,c);kj(e,d,true)}
function hG(c,b){try{typeof $wnd[b]!=Qkd&&mG(b);c.a=$wnd[b]}catch(a){mG(b)}}
function kG(){fG();var a;a=FV(eG.ke(Skd),60);if(!a){a=new jG;eG.me(Skd,a)}return a}
function iG(d,a){a=String(a);var b=d.a;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.Td(a);return String(c)}
function wzb(){var a,b,c,d,e,f,g,i,j,k,n;f=new zmc;g=new z6b(Xkd);g.cb.dir=ELc;pt(g.cb.style,Ykd,yNc);wmc(f,new z6b(Zkd));wmc(f,g);j=new h9b;b=j.j;i=kG();e=(n=new WCc,gG(i,n),n);a=0;for(d=Rzc(hJ(e.a));d.a.ve();){c=FV(Xzc(d),1);k=iG(i,c);$8b(j,0,a,c);p9b(b,0,a,$kd);$8b(j,1,a,k);p9b(b,1,a,_kd);++a}wmc(f,new z6b(ald));wmc(f,j);return f}
var Wkd="' in ",Ukd="' is not a JavaScript object and cannot be used as a Dictionary",Zkd='<b>Cet exemple interagit avec le JavaScript variable suivant:<\/b>',ald='<br><br>',Xkd='<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n',Vkd="Cannot find '",Tkd="Cannot find JavaScript object with the name 'userInfo'",bld='Dictionary',Rkd='Dictionary userInfo',_kd='cw-DictionaryExample-data',$kd='cw-DictionaryExample-header',Qkd='object',Ykd='textAlign',Skd='userInfo';fgb(353,1,{60:1},jG);_.Td=function lG(a){var b;b=Vkd+a+Wkd+this;throw new PDc(b)};_.tS=function nG(){return this.b};var eG;fgb(671,1,dGc);_.mc=function Czb(){ojb(this.a,wzb())};var X$=ouc(G0c,bld,353);RGc(Jn)(32);