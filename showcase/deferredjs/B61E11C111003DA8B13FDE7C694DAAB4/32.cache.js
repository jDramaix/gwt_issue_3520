function mH(){mH=Z4c;lH=new C2c}
function BBc(a,b,c,d){var e;a.b.bh(b,c);e=DBc(a.b.j,b,c);vj(e,d,true)}
function nH(d,a){var b=d.b;for(var c in b){b.hasOwnProperty(c)&&a.se(c)}}
function pH(d,a){a=String(a);var b=d.b;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.Wd(a);return String(c)}
function rH(){mH();var a;a=Jmb(lH.ne(Dhd),60);if(!a){a=new qH;lH.pe(Dhd,a)}return a}
function oH(c,b){try{typeof $wnd[b]!='object'&&tH(b);c.b=$wnd[b]}catch(a){tH(b)}}
function tH(a){throw new D3c(J9c+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function qH(){this.c='Dictionary userInfo';oH(this,Dhd);if(!this.b){throw new D3c("Cannot find JavaScript object with the name 'userInfo'")}}
function L0b(){var a,b,c,d,e,f,g,i,j,k,n;f=new xOc;g=new Pyc('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.db.dir=b9c;rt(g.db.style,'textAlign',v9c);uOc(f,new Pyc('<b>This example interacts with the following JavaScript variable:<\/b>'));uOc(f,g);j=new tBc;b=j.k;i=rH();e=(n=new K2c,nH(i,n),n);a=0;for(d=F_c(LO(e.b));d.b.ye();){c=Jmb(L_c(d),1);k=pH(i,c);kBc(j,0,a,c);BBc(b,0,a,'cw-DictionaryExample-header');kBc(j,1,a,k);BBc(b,1,a,'cw-DictionaryExample-data');++a}uOc(f,new Pyc('<br><br>'));uOc(f,j);return f}
var Dhd='userInfo';lKb(366,1,{60:1},qH);_.Wd=function sH(a){var b;b="Cannot find '"+a+"' in "+this;throw new D3c(b)};_.tS=function uH(){return this.c};var lH;lKb(727,1,T5c);_.qc=function R0b(){RMb(this.b,L0b())};var rsb=cWc(ydd,Rad,366);G6c(Vn)(32);