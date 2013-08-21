function fG(){fG=OCc;eG=new rAc}
function q7b(a,b,c,d){var e;a.b.bh(b,c);e=s7b(a.b.j,b,c);vj(e,d,true)}
function gG(d,a){var b=d.b;for(var c in b){b.hasOwnProperty(c)&&a.se(c)}}
function iG(d,a){a=String(a);var b=d.b;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.Wd(a);return String(c)}
function kG(){fG();var a;a=FV(eG.ne($Oc),60);if(!a){a=new jG;eG.pe($Oc,a)}return a}
function hG(c,b){try{typeof $wnd[b]!='object'&&mG(b);c.b=$wnd[b]}catch(a){mG(b)}}
function mG(a){throw new sBc(yHc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function jG(){this.c='Dictionary userInfo';hG(this,$Oc);if(!this.b){throw new sBc("Cannot find JavaScript object with the name 'userInfo'")}}
function zyb(){var a,b,c,d,e,f,g,i,j,k,n;f=new mkc;g=new D4b('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.db.dir=SGc;rt(g.db.style,'textAlign',kHc);jkc(f,new D4b('<b>Cet exemple interagit avec le JavaScript variable suivant:<\/b>'));jkc(f,g);j=new i7b;b=j.k;i=kG();e=(n=new zAc,gG(i,n),n);a=0;for(d=uxc(hJ(e.b));d.b.ye();){c=FV(Axc(d),1);k=iG(i,c);_6b(j,0,a,c);q7b(b,0,a,'cw-DictionaryExample-header');_6b(j,1,a,k);q7b(b,1,a,'cw-DictionaryExample-data');++a}jkc(f,new D4b('<br><br>'));jkc(f,j);return f}
var $Oc='userInfo';_fb(351,1,{60:1},jG);_.Wd=function lG(a){var b;b="Cannot find '"+a+"' in "+this;throw new sBc(b)};_.tS=function nG(){return this.c};var eG;_fb(665,1,IDc);_.qc=function Fyb(){Fib(this.b,zyb())};var $$=Trc(TKc,'Dictionary',351);vEc(Vn)(32);