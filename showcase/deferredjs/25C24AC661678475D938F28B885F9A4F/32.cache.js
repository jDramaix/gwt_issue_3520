function kF(){kF=mqc;jF=new Rnc}
function LWb(a,b,c,d){var e;a.b.dg(b,c);e=NWb(a.b.j,b,c);wj(e,d,true)}
function lF(d,a){var b=d.b;for(var c in b){b.hasOwnProperty(c)&&a.ud(c)}}
function nF(d,a){a=String(a);var b=d.b;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.ld(a);return String(c)}
function pF(){kF();var a;a=rJ(jF.pd(kCc),60);if(!a){a=new oF;jF.rd(kCc,a)}return a}
function mF(c,b){try{typeof $wnd[b]!='object'&&rF(b);c.b=$wnd[b]}catch(a){rF(b)}}
function rF(a){throw new Soc(evc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function oF(){this.c='Dictionary userInfo';mF(this,kCc);if(!this.b){throw new Soc("Cannot find JavaScript object with the name 'userInfo'")}}
function Zlb(){var a,b,c,d,e,f,g,i,j,k,n;f=new K7b;g=new ZTb('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.db.dir=Cuc;Et(g.db.style,'textAlign',Suc);H7b(f,new ZTb('<b>\u8FD9\u4E2A\u4F8B\u5B50\u4F7F\u7528\u4E0B\u5217Javascript\u7684\u53D8\u91CF\uFF1A <\/b>'));H7b(f,g);j=new DWb;b=j.k;i=pF();e=(n=new Znc,lF(i,n),n);a=0;for(d=Ukc(qG(e.b));d.b.Ad();){c=rJ($kc(d),1);k=nF(i,c);uWb(j,0,a,c);LWb(b,0,a,'cw-DictionaryExample-header');uWb(j,1,a,k);LWb(b,1,a,'cw-DictionaryExample-data');++a}H7b(f,new ZTb('<br><br>'));H7b(f,j);return f}
var kCc='userInfo';z3(350,1,{60:1},oF);_.ld=function qF(a){var b;b="Cannot find '"+a+"' in "+this;throw new Soc(b)};_.tS=function sF(){return this.c};var jF;z3(648,1,grc);_.qc=function dmb(){d6(this.b,Zlb())};var MO=qfc(nyc,'Dictionary',350);Vrc(Vn)(32);