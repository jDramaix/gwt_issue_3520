function pE(){pE=Poc;oE=new smc}
function qE(d,a){var b=d.b;for(var c in b){b.hasOwnProperty(c)&&a.rd(c)}}
function FVb(a,b,c,d){var e;a.b.ag(b,c);e=HVb(a.b.j,b,c);kj(e,d,true)}
function uE(){pE();var a;a=AI(oE.md(JAc),59);if(!a){a=new tE;oE.od(JAc,a)}return a}
function rE(c,b){try{typeof $wnd[b]!='object'&&wE(b);c.b=$wnd[b]}catch(a){wE(b)}}
function wE(a){throw new tnc(ytc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function sE(d,a){a=String(a);var b=d.b;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.hd(a);return String(c)}
function tE(){this.c='Dictionary userInfo';rE(this,JAc);if(!this.b){throw new tnc("Cannot find JavaScript object with the name 'userInfo'")}}
function Tkb(){var a,b,c,d,e,f,g,i,j,k,n;f=new B6b;g=new PSb('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.db.dir=Tsc;Ts(g.db.style,'textAlign',ktc);y6b(f,new PSb('<b>This example interacts with the following JavaScript variable:<\/b>'));y6b(f,g);j=new xVb;b=j.k;i=uE();e=(n=new Amc,qE(i,n),n);a=0;for(d=vjc(vF(e.b));d.b.xd();){c=AI(Bjc(d),1);k=sE(i,c);oVb(j,0,a,c);FVb(b,0,a,'cw-DictionaryExample-header');oVb(j,1,a,k);FVb(b,1,a,'cw-DictionaryExample-data');++a}y6b(f,new PSb('<br><br>'));y6b(f,j);return f}
var JAc='userInfo';t2(342,1,{59:1},tE);_.hd=function vE(a){var b;b="Cannot find '"+a+"' in "+this;throw new tnc(b)};_.tS=function xE(){return this.c};var oE;t2(639,1,Ipc);_.mc=function Zkb(){Z4(this.b,Tkb())};var LN=Udc(Jwc,huc,342);vqc(Jn)(32);