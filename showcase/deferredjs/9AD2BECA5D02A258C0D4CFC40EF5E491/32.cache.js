function aF(){aF=gqc;_E=new Lnc}
function CWb(a,b,c,d){var e;a.b.ig(b,c);e=EWb(a.b.j,b,c);wj(e,d,true)}
function bF(d,a){var b=d.b;for(var c in b){b.hasOwnProperty(c)&&a.zd(c)}}
function dF(d,a){a=String(a);var b=d.b;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.qd(a);return String(c)}
function fF(){aF();var a;a=lJ(_E.ud(iCc),59);if(!a){a=new eF;_E.wd(iCc,a)}return a}
function cF(c,b){try{typeof $wnd[b]!='object'&&hF(b);c.b=$wnd[b]}catch(a){hF(b)}}
function hF(a){throw new Moc(Zuc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function eF(){this.c='Dictionary userInfo';cF(this,iCc);if(!this.b){throw new Moc("Cannot find JavaScript object with the name 'userInfo'")}}
function Olb(){var a,b,c,d,e,f,g,i,j,k,n;f=new B7b;g=new PTb('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.db.dir=wuc;Et(g.db.style,'textAlign',Luc);y7b(f,new PTb('<b>This example interacts with the following JavaScript variable:<\/b>'));y7b(f,g);j=new uWb;b=j.k;i=fF();e=(n=new Tnc,bF(i,n),n);a=0;for(d=Okc(gG(e.b));d.b.Fd();){c=lJ(Ukc(d),1);k=dF(i,c);lWb(j,0,a,c);CWb(b,0,a,'cw-DictionaryExample-header');lWb(j,1,a,k);CWb(b,1,a,'cw-DictionaryExample-data');++a}y7b(f,new PTb('<br><br>'));y7b(f,j);return f}
var iCc='userInfo';o3(347,1,{59:1},eF);_.qd=function gF(a){var b;b="Cannot find '"+a+"' in "+this;throw new Moc(b)};_.tS=function iF(){return this.c};var _E;o3(644,1,arc);_.qc=function Ulb(){U5(this.b,Olb())};var CO=kfc(iyc,Ivc,347);Prc(Vn)(32);