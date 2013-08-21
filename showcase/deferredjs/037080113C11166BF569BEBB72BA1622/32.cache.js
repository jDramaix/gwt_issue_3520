function aF(){aF=fqc;_E=new Knc}
function bF(d,a){var b=d.b;for(var c in b){b.hasOwnProperty(c)&&a.zd(c)}}
function BWb(a,b,c,d){var e;a.b.ig(b,c);e=DWb(a.b.j,b,c);wj(e,d,true)}
function fF(){aF();var a;a=lJ(_E.ud(hCc),59);if(!a){a=new eF;_E.wd(hCc,a)}return a}
function cF(c,b){try{typeof $wnd[b]!='object'&&hF(b);c.b=$wnd[b]}catch(a){hF(b)}}
function hF(a){throw new Loc(Yuc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function dF(d,a){a=String(a);var b=d.b;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.qd(a);return String(c)}
function eF(){this.c='Dictionary userInfo';cF(this,hCc);if(!this.b){throw new Loc("Cannot find JavaScript object with the name 'userInfo'")}}
function Olb(){var a,b,c,d,e,f,g,i,j,k,n;f=new A7b;g=new PTb('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.db.dir=vuc;Et(g.db.style,'textAlign',Kuc);x7b(f,new PTb('<b>This example interacts with the following JavaScript variable:<\/b>'));x7b(f,g);j=new tWb;b=j.k;i=fF();e=(n=new Snc,bF(i,n),n);a=0;for(d=Nkc(gG(e.b));d.b.Fd();){c=lJ(Tkc(d),1);k=dF(i,c);kWb(j,0,a,c);BWb(b,0,a,'cw-DictionaryExample-header');kWb(j,1,a,k);BWb(b,1,a,'cw-DictionaryExample-data');++a}x7b(f,new PTb('<br><br>'));x7b(f,j);return f}
var hCc='userInfo';o3(347,1,{59:1},eF);_.qd=function gF(a){var b;b="Cannot find '"+a+"' in "+this;throw new Loc(b)};_.tS=function iF(){return this.c};var _E;o3(644,1,_qc);_.qc=function Ulb(){U5(this.b,Olb())};var CO=jfc(hyc,Hvc,347);Orc(Vn)(32);