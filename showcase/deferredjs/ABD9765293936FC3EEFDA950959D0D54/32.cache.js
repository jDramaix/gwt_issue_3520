function mH(){mH=$4c;lH=new D2c}
function CBc(a,b,c,d){var e;a.b.bh(b,c);e=EBc(a.b.j,b,c);vj(e,d,true)}
function nH(d,a){var b=d.b;for(var c in b){b.hasOwnProperty(c)&&a.se(c)}}
function pH(d,a){a=String(a);var b=d.b;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.Wd(a);return String(c)}
function rH(){mH();var a;a=Jmb(lH.ne(Ehd),60);if(!a){a=new qH;lH.pe(Ehd,a)}return a}
function oH(c,b){try{typeof $wnd[b]!='object'&&tH(b);c.b=$wnd[b]}catch(a){tH(b)}}
function tH(a){throw new E3c(K9c+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function qH(){this.c='Dictionary userInfo';oH(this,Ehd);if(!this.b){throw new E3c("Cannot find JavaScript object with the name 'userInfo'")}}
function L0b(){var a,b,c,d,e,f,g,i,j,k,n;f=new yOc;g=new Pyc('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.db.dir=c9c;rt(g.db.style,'textAlign',w9c);vOc(f,new Pyc('<b>This example interacts with the following JavaScript variable:<\/b>'));vOc(f,g);j=new uBc;b=j.k;i=rH();e=(n=new L2c,nH(i,n),n);a=0;for(d=G_c(LO(e.b));d.b.ye();){c=Jmb(M_c(d),1);k=pH(i,c);lBc(j,0,a,c);CBc(b,0,a,'cw-DictionaryExample-header');lBc(j,1,a,k);CBc(b,1,a,'cw-DictionaryExample-data');++a}vOc(f,new Pyc('<br><br>'));vOc(f,j);return f}
var Ehd='userInfo';lKb(366,1,{60:1},qH);_.Wd=function sH(a){var b;b="Cannot find '"+a+"' in "+this;throw new E3c(b)};_.tS=function uH(){return this.c};var lH;lKb(727,1,U5c);_.qc=function R0b(){RMb(this.b,L0b())};var rsb=dWc(zdd,Sad,366);H6c(Vn)(32);