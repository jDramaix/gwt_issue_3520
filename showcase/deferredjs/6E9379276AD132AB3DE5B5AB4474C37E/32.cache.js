function VG(){VG=K4c;UG=new n2c}
function lBc(a,b,c,d){var e;a.a.$g(b,c);e=nBc(a.a.i,b,c);kj(e,d,true)}
function WG(d,a){var b=d.a;for(var c in b){b.hasOwnProperty(c)&&a.oe(c)}}
function YG(d,a){a=String(a);var b=d.a;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.Sd(a);return String(c)}
function $G(){VG();var a;a=qmb(UG.je(chd),60);if(!a){a=new ZG;UG.le(chd,a)}return a}
function XG(c,b){try{typeof $wnd[b]!='object'&&aH(b);c.a=$wnd[b]}catch(a){aH(b)}}
function aH(a){throw new o3c(r9c+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function ZG(){this.b='Dictionary userInfo';XG(this,chd);if(!this.a){throw new o3c("Cannot find JavaScript object with the name 'userInfo'")}}
function v0b(){var a,b,c,d,e,f,g,i,j,k,n;f=new mOc;g=new zyc('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.cb.dir=L8c;Ys(g.cb.style,'textAlign',d9c);jOc(f,new zyc('<b>This example interacts with the following JavaScript variable:<\/b>'));jOc(f,g);j=new dBc;b=j.j;i=$G();e=(n=new v2c,WG(i,n),n);a=0;for(d=q_c(sO(e.a));d.a.ue();){c=qmb(w_c(d),1);k=YG(i,c);WAc(j,0,a,c);lBc(b,0,a,'cw-DictionaryExample-header');WAc(j,1,a,k);lBc(b,1,a,'cw-DictionaryExample-data');++a}jOc(f,new zyc('<br><br>'));jOc(f,j);return f}
var chd='userInfo';SJb(368,1,{60:1},ZG);_.Sd=function _G(a){var b;b="Cannot find '"+a+"' in "+this;throw new o3c(b)};_.tS=function bH(){return this.b};var UG;SJb(730,1,D5c);_.lc=function B0b(){BMb(this.a,v0b())};var Xrb=PVc($cd,zad,368);q6c(Jn)(32);