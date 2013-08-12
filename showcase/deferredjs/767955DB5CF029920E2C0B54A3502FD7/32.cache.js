function dH(){dH=U4c;cH=new x2c}
function wBc(a,b,c,d){var e;a.a.Zg(b,c);e=yBc(a.a.i,b,c);jj(e,d,true)}
function eH(d,a){var b=d.a;for(var c in b){b.hasOwnProperty(c)&&a.oe(c)}}
function gH(d,a){a=String(a);var b=d.a;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.Sd(a);return String(c)}
function iH(){dH();var a;a=Amb(cH.je(nhd),60);if(!a){a=new hH;cH.le(nhd,a)}return a}
function fH(c,b){try{typeof $wnd[b]!='object'&&kH(b);c.a=$wnd[b]}catch(a){kH(b)}}
function kH(a){throw new y3c(D9c+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function hH(){this.b='Dictionary userInfo';fH(this,nhd);if(!this.a){throw new y3c("Cannot find JavaScript object with the name 'userInfo'")}}
function E0b(){var a,b,c,d,e,f,g,i,j,k,n;f=new xOc;g=new Kyc('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.cb.dir=Y8c;gt(g.cb.style,'textAlign',q9c);uOc(f,new Kyc('<b>This example interacts with the following JavaScript variable:<\/b>'));uOc(f,g);j=new oBc;b=j.j;i=iH();e=(n=new F2c,eH(i,n),n);a=0;for(d=A_c(CO(e.a));d.a.ue();){c=Amb(G_c(d),1);k=gH(i,c);fBc(j,0,a,c);wBc(b,0,a,'cw-DictionaryExample-header');fBc(j,1,a,k);wBc(b,1,a,'cw-DictionaryExample-data');++a}uOc(f,new Kyc('<br><br>'));uOc(f,j);return f}
var nhd='userInfo';_Jb(367,1,{60:1},hH);_.Sd=function jH(a){var b;b="Cannot find '"+a+"' in "+this;throw new y3c(b)};_.tS=function lH(){return this.b};var cH;_Jb(729,1,N5c);_.lc=function K0b(){KMb(this.a,E0b())};var fsb=ZVc(idd,Lad,367);A6c(In)(32);