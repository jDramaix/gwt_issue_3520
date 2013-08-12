function wE(){wE=rpc;vE=new Wmc}
function xE(d,a){var b=d.a;for(var c in b){b.hasOwnProperty(c)&&a.rd(c)}}
function XVb(a,b,c,d){var e;a.a.bg(b,c);e=ZVb(a.a.i,b,c);kj(e,d,true)}
function BE(){wE();var a;a=HI(vE.md(gBc),59);if(!a){a=new AE;vE.od(gBc,a)}return a}
function yE(c,b){try{typeof $wnd[b]!='object'&&DE(b);c.a=$wnd[b]}catch(a){DE(b)}}
function DE(a){throw new Xnc(Ztc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function zE(d,a){a=String(a);var b=d.a;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.hd(a);return String(c)}
function AE(){this.b='Dictionary userInfo';yE(this,gBc);if(!this.a){throw new Xnc("Cannot find JavaScript object with the name 'userInfo'")}}
function flb(){var a,b,c,d,e,f,g,i,j,k,n;f=new Y6b;g=new jTb('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.cb.dir=stc;Ys(g.cb.style,'textAlign',Ltc);V6b(f,new jTb('<b>This example interacts with the following JavaScript variable:<\/b>'));V6b(f,g);j=new PVb;b=j.j;i=BE();e=(n=new cnc,xE(i,n),n);a=0;for(d=Zjc(CF(e.a));d.a.xd();){c=HI(dkc(d),1);k=zE(i,c);GVb(j,0,a,c);XVb(b,0,a,'cw-DictionaryExample-header');GVb(j,1,a,k);XVb(b,1,a,'cw-DictionaryExample-data');++a}V6b(f,new jTb('<br><br>'));V6b(f,j);return f}
var gBc='userInfo';C2(345,1,{59:1},AE);_.hd=function CE(a){var b;b="Cannot find '"+a+"' in "+this;throw new Xnc(b)};_.tS=function EE(){return this.b};var vE;C2(643,1,kqc);_.lc=function llb(){l5(this.a,flb())};var RN=wec(hxc,Iuc,345);Zqc(Jn)(32);