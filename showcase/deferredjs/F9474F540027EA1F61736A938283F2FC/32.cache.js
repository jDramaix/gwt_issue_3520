function ZE(){ZE=Tpc;YE=new wnc}
function $E(d,a){var b=d.b;for(var c in b){b.hasOwnProperty(c)&&a.qd(c)}}
function vWb(a,b,c,d){var e;a.b._f(b,c);e=xWb(a.b.j,b,c);vj(e,d,true)}
function cF(){ZE();var a;a=eJ(YE.ld(QBc),60);if(!a){a=new bF;YE.nd(QBc,a)}return a}
function _E(c,b){try{typeof $wnd[b]!='object'&&eF(b);c.b=$wnd[b]}catch(a){eF(b)}}
function eF(a){throw new xoc(Duc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function aF(d,a){a=String(a);var b=d.b;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.gd(a);return String(c)}
function bF(){this.c='Dictionary userInfo';_E(this,QBc);if(!this.b){throw new xoc("Cannot find JavaScript object with the name 'userInfo'")}}
function Glb(){var a,b,c,d,e,f,g,i,j,k,n;f=new r7b;g=new JTb('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.db.dir=Xtc;rt(g.db.style,'textAlign',puc);o7b(f,new JTb('<b>\u8FD9\u4E2A\u4F8B\u5B50\u4F7F\u7528\u4E0B\u5217Javascript\u7684\u53D8\u91CF\uFF1A <\/b>'));o7b(f,g);j=new nWb;b=j.k;i=cF();e=(n=new Enc,$E(i,n),n);a=0;for(d=zkc(dG(e.b));d.b.wd();){c=eJ(Fkc(d),1);k=aF(i,c);eWb(j,0,a,c);vWb(b,0,a,'cw-DictionaryExample-header');eWb(j,1,a,k);vWb(b,1,a,'cw-DictionaryExample-data');++a}o7b(f,new JTb('<br><br>'));o7b(f,j);return f}
var QBc='userInfo';g3(346,1,{60:1},bF);_.gd=function dF(a){var b;b="Cannot find '"+a+"' in "+this;throw new xoc(b)};_.tS=function fF(){return this.c};var YE;g3(644,1,Nqc);_.qc=function Mlb(){M5(this.b,Glb())};var vO=Yec(Txc,'Dictionary',346);Arc(Vn)(32);