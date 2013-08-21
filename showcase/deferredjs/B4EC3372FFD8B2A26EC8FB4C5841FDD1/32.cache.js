function QE(){QE=Spc;PE=new vnc}
function rWb(a,b,c,d){var e;a.a.Xf(b,c);e=tWb(a.a.i,b,c);jj(e,d,true)}
function RE(d,a){var b=d.a;for(var c in b){b.hasOwnProperty(c)&&a.md(c)}}
function TE(d,a){a=String(a);var b=d.a;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.cd(a);return String(c)}
function VE(){QE();var a;a=XI(PE.gd(EBc),60);if(!a){a=new UE;PE.jd(EBc,a)}return a}
function SE(c,b){try{typeof $wnd[b]!='object'&&XE(b);c.a=$wnd[b]}catch(a){XE(b)}}
function XE(a){throw new woc(Buc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function UE(){this.b='Dictionary userInfo';SE(this,EBc);if(!this.a){throw new woc("Cannot find JavaScript object with the name 'userInfo'")}}
function zlb(){var a,b,c,d,e,f,g,i,j,k,n;f=new s7b;g=new ETb('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.cb.dir=Wtc;gt(g.cb.style,'textAlign',ouc);p7b(f,new ETb('<b>\u8FD9\u4E2A\u4F8B\u5B50\u4F7F\u7528\u4E0B\u5217Javascript\u7684\u53D8\u91CF\uFF1A <\/b>'));p7b(f,g);j=new jWb;b=j.j;i=VE();e=(n=new Dnc,RE(i,n),n);a=0;for(d=ykc(WF(e.a));d.a.sd();){c=XI(Ekc(d),1);k=TE(i,c);aWb(j,0,a,c);rWb(b,0,a,'cw-DictionaryExample-header');aWb(j,1,a,k);rWb(b,1,a,'cw-DictionaryExample-data');++a}p7b(f,new ETb('<br><br>'));p7b(f,j);return f}
var EBc='userInfo';W2(347,1,{60:1},UE);_.cd=function WE(a){var b;b="Cannot find '"+a+"' in "+this;throw new woc(b)};_.tS=function YE(){return this.b};var PE;W2(646,1,Lqc);_.lc=function Flb(){F5(this.a,zlb())};var jO=Xec(Hxc,'Dictionary',347);yrc(In)(32);