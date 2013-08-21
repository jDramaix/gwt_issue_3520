function fG(){fG=NCc;eG=new qAc}
function p7b(a,b,c,d){var e;a.b.bh(b,c);e=r7b(a.b.j,b,c);vj(e,d,true)}
function gG(d,a){var b=d.b;for(var c in b){b.hasOwnProperty(c)&&a.se(c)}}
function iG(d,a){a=String(a);var b=d.b;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.Wd(a);return String(c)}
function kG(){fG();var a;a=FV(eG.ne(ZOc),60);if(!a){a=new jG;eG.pe(ZOc,a)}return a}
function hG(c,b){try{typeof $wnd[b]!='object'&&mG(b);c.b=$wnd[b]}catch(a){mG(b)}}
function mG(a){throw new rBc(xHc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function jG(){this.c='Dictionary userInfo';hG(this,ZOc);if(!this.b){throw new rBc("Cannot find JavaScript object with the name 'userInfo'")}}
function zyb(){var a,b,c,d,e,f,g,i,j,k,n;f=new lkc;g=new D4b('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.db.dir=RGc;rt(g.db.style,'textAlign',jHc);ikc(f,new D4b('<b>Cet exemple interagit avec le JavaScript variable suivant:<\/b>'));ikc(f,g);j=new h7b;b=j.k;i=kG();e=(n=new yAc,gG(i,n),n);a=0;for(d=txc(hJ(e.b));d.b.ye();){c=FV(zxc(d),1);k=iG(i,c);$6b(j,0,a,c);p7b(b,0,a,'cw-DictionaryExample-header');$6b(j,1,a,k);p7b(b,1,a,'cw-DictionaryExample-data');++a}ikc(f,new D4b('<br><br>'));ikc(f,j);return f}
var ZOc='userInfo';_fb(351,1,{60:1},jG);_.Wd=function lG(a){var b;b="Cannot find '"+a+"' in "+this;throw new rBc(b)};_.tS=function nG(){return this.c};var eG;_fb(665,1,HDc);_.qc=function Fyb(){Fib(this.b,zyb())};var $$=Src(SKc,'Dictionary',351);uEc(Vn)(32);