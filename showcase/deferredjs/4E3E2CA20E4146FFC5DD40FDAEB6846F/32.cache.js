function VG(){VG=L4c;UG=new o2c}
function WG(d,a){var b=d.a;for(var c in b){b.hasOwnProperty(c)&&a.oe(c)}}
function mBc(a,b,c,d){var e;a.a.$g(b,c);e=oBc(a.a.i,b,c);kj(e,d,true)}
function $G(){VG();var a;a=qmb(UG.je(dhd),60);if(!a){a=new ZG;UG.le(dhd,a)}return a}
function XG(c,b){try{typeof $wnd[b]!='object'&&aH(b);c.a=$wnd[b]}catch(a){aH(b)}}
function aH(a){throw new p3c(s9c+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function YG(d,a){a=String(a);var b=d.a;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.Sd(a);return String(c)}
function ZG(){this.b='Dictionary userInfo';XG(this,dhd);if(!this.a){throw new p3c("Cannot find JavaScript object with the name 'userInfo'")}}
function v0b(){var a,b,c,d,e,f,g,i,j,k,n;f=new nOc;g=new zyc('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.cb.dir=M8c;Ys(g.cb.style,'textAlign',e9c);kOc(f,new zyc('<b>This example interacts with the following JavaScript variable:<\/b>'));kOc(f,g);j=new eBc;b=j.j;i=$G();e=(n=new w2c,WG(i,n),n);a=0;for(d=r_c(sO(e.a));d.a.ue();){c=qmb(x_c(d),1);k=YG(i,c);XAc(j,0,a,c);mBc(b,0,a,'cw-DictionaryExample-header');XAc(j,1,a,k);mBc(b,1,a,'cw-DictionaryExample-data');++a}kOc(f,new zyc('<br><br>'));kOc(f,j);return f}
var dhd='userInfo';SJb(368,1,{60:1},ZG);_.Sd=function _G(a){var b;b="Cannot find '"+a+"' in "+this;throw new p3c(b)};_.tS=function bH(){return this.b};var UG;SJb(730,1,E5c);_.lc=function B0b(){BMb(this.a,v0b())};var Xrb=QVc(_cd,Aad,368);r6c(Jn)(32);