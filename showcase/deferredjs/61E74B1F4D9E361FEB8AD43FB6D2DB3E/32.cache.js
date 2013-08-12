function GE(){GE=Epc;FE=new hnc}
function HE(d,a){var b=d.a;for(var c in b){b.hasOwnProperty(c)&&a.rd(c)}}
function gWb(a,b,c,d){var e;a.a.ag(b,c);e=iWb(a.a.i,b,c);jj(e,d,true)}
function LE(){GE();var a;a=RI(FE.md(uBc),59);if(!a){a=new KE;FE.od(uBc,a)}return a}
function IE(c,b){try{typeof $wnd[b]!='object'&&NE(b);c.a=$wnd[b]}catch(a){NE(b)}}
function NE(a){throw new ioc(muc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function JE(d,a){a=String(a);var b=d.a;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.hd(a);return String(c)}
function KE(){this.b='Dictionary userInfo';IE(this,uBc);if(!this.a){throw new ioc("Cannot find JavaScript object with the name 'userInfo'")}}
function olb(){var a,b,c,d,e,f,g,i,j,k,n;f=new h7b;g=new uTb('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.cb.dir=Itc;gt(g.cb.style,'textAlign',_tc);e7b(f,new uTb('<b>This example interacts with the following JavaScript variable:<\/b>'));e7b(f,g);j=new $Vb;b=j.j;i=LE();e=(n=new pnc,HE(i,n),n);a=0;for(d=kkc(MF(e.a));d.a.xd();){c=RI(qkc(d),1);k=JE(i,c);RVb(j,0,a,c);gWb(b,0,a,'cw-DictionaryExample-header');RVb(j,1,a,k);gWb(b,1,a,'cw-DictionaryExample-data');++a}e7b(f,new uTb('<br><br>'));e7b(f,j);return f}
var uBc='userInfo';L2(344,1,{59:1},KE);_.hd=function ME(a){var b;b="Cannot find '"+a+"' in "+this;throw new ioc(b)};_.tS=function OE(){return this.b};var FE;L2(642,1,xqc);_.lc=function ulb(){u5(this.a,olb())};var _N=Jec(uxc,Xuc,344);krc(In)(32);