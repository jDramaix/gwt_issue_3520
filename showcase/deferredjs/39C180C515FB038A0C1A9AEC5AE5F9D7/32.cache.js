function QE(){QE=Rpc;PE=new unc}
function qWb(a,b,c,d){var e;a.a.Xf(b,c);e=sWb(a.a.i,b,c);jj(e,d,true)}
function RE(d,a){var b=d.a;for(var c in b){b.hasOwnProperty(c)&&a.md(c)}}
function TE(d,a){a=String(a);var b=d.a;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.cd(a);return String(c)}
function VE(){QE();var a;a=XI(PE.gd(DBc),60);if(!a){a=new UE;PE.jd(DBc,a)}return a}
function SE(c,b){try{typeof $wnd[b]!='object'&&XE(b);c.a=$wnd[b]}catch(a){XE(b)}}
function XE(a){throw new voc(Auc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function UE(){this.b='Dictionary userInfo';SE(this,DBc);if(!this.a){throw new voc("Cannot find JavaScript object with the name 'userInfo'")}}
function zlb(){var a,b,c,d,e,f,g,i,j,k,n;f=new r7b;g=new ETb('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.cb.dir=Vtc;gt(g.cb.style,'textAlign',nuc);o7b(f,new ETb('<b>\u8FD9\u4E2A\u4F8B\u5B50\u4F7F\u7528\u4E0B\u5217Javascript\u7684\u53D8\u91CF\uFF1A <\/b>'));o7b(f,g);j=new iWb;b=j.j;i=VE();e=(n=new Cnc,RE(i,n),n);a=0;for(d=xkc(WF(e.a));d.a.sd();){c=XI(Dkc(d),1);k=TE(i,c);_Vb(j,0,a,c);qWb(b,0,a,'cw-DictionaryExample-header');_Vb(j,1,a,k);qWb(b,1,a,'cw-DictionaryExample-data');++a}o7b(f,new ETb('<br><br>'));o7b(f,j);return f}
var DBc='userInfo';W2(347,1,{60:1},UE);_.cd=function WE(a){var b;b="Cannot find '"+a+"' in "+this;throw new voc(b)};_.tS=function YE(){return this.b};var PE;W2(646,1,Kqc);_.lc=function Flb(){F5(this.a,zlb())};var jO=Wec(Gxc,'Dictionary',347);xrc(In)(32);