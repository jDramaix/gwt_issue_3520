function dH(){dH=Y4c;cH=new B2c}
function xBc(a,b,c,d){var e;a.a.Zg(b,c);e=zBc(a.a.i,b,c);jj(e,d,true)}
function eH(d,a){var b=d.a;for(var c in b){b.hasOwnProperty(c)&&a.oe(c)}}
function gH(d,a){a=String(a);var b=d.a;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.Sd(a);return String(c)}
function iH(){dH();var a;a=Amb(cH.je(rhd),60);if(!a){a=new hH;cH.le(rhd,a)}return a}
function fH(c,b){try{typeof $wnd[b]!='object'&&kH(b);c.a=$wnd[b]}catch(a){kH(b)}}
function kH(a){throw new C3c(H9c+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function hH(){this.b='Dictionary userInfo';fH(this,rhd);if(!this.a){throw new C3c("Cannot find JavaScript object with the name 'userInfo'")}}
function E0b(){var a,b,c,d,e,f,g,i,j,k,n;f=new yOc;g=new Kyc('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.cb.dir=a9c;gt(g.cb.style,'textAlign',u9c);vOc(f,new Kyc('<b>This example interacts with the following JavaScript variable:<\/b>'));vOc(f,g);j=new pBc;b=j.j;i=iH();e=(n=new J2c,eH(i,n),n);a=0;for(d=E_c(CO(e.a));d.a.ue();){c=Amb(K_c(d),1);k=gH(i,c);gBc(j,0,a,c);xBc(b,0,a,'cw-DictionaryExample-header');gBc(j,1,a,k);xBc(b,1,a,'cw-DictionaryExample-data');++a}vOc(f,new Kyc('<br><br>'));vOc(f,j);return f}
var rhd='userInfo';_Jb(367,1,{60:1},hH);_.Sd=function jH(a){var b;b="Cannot find '"+a+"' in "+this;throw new C3c(b)};_.tS=function lH(){return this.b};var cH;_Jb(729,1,R5c);_.lc=function K0b(){KMb(this.a,E0b())};var fsb=bWc(mdd,Pad,367);E6c(In)(32);