function PE(){PE=Gpc;OE=new jnc}
function lWb(a,b,c,d){var e;a.b.eg(b,c);e=nWb(a.b.j,b,c);vj(e,d,true)}
function QE(d,a){var b=d.b;for(var c in b){b.hasOwnProperty(c)&&a.vd(c)}}
function SE(d,a){a=String(a);var b=d.b;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.md(a);return String(c)}
function UE(){PE();var a;a=$I(OE.qd(HBc),59);if(!a){a=new TE;OE.sd(HBc,a)}return a}
function RE(c,b){try{typeof $wnd[b]!='object'&&WE(b);c.b=$wnd[b]}catch(a){WE(b)}}
function WE(a){throw new koc(puc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function TE(){this.c='Dictionary userInfo';RE(this,HBc);if(!this.b){throw new koc("Cannot find JavaScript object with the name 'userInfo'")}}
function vlb(){var a,b,c,d,e,f,g,i,j,k,n;f=new h7b;g=new zTb('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.db.dir=Ktc;rt(g.db.style,'textAlign',buc);e7b(f,new zTb('<b>This example interacts with the following JavaScript variable:<\/b>'));e7b(f,g);j=new dWb;b=j.k;i=UE();e=(n=new rnc,QE(i,n),n);a=0;for(d=mkc(VF(e.b));d.b.Bd();){c=$I(skc(d),1);k=SE(i,c);WVb(j,0,a,c);lWb(b,0,a,'cw-DictionaryExample-header');WVb(j,1,a,k);lWb(b,1,a,'cw-DictionaryExample-data');++a}e7b(f,new zTb('<br><br>'));e7b(f,j);return f}
var HBc='userInfo';X2(343,1,{59:1},TE);_.md=function VE(a){var b;b="Cannot find '"+a+"' in "+this;throw new koc(b)};_.tS=function XE(){return this.c};var OE;X2(640,1,Aqc);_.qc=function Blb(){B5(this.b,vlb())};var lO=Lec(Hxc,$uc,343);nrc(Vn)(32);