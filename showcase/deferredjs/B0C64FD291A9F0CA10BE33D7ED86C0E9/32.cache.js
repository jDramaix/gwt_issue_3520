function GE(){GE=Fpc;FE=new inc}
function gWb(a,b,c,d){var e;a.a.Yf(b,c);e=iWb(a.a.i,b,c);kj(e,d,true)}
function HE(d,a){var b=d.a;for(var c in b){b.hasOwnProperty(c)&&a.md(c)}}
function JE(d,a){a=String(a);var b=d.a;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.cd(a);return String(c)}
function LE(){GE();var a;a=NI(FE.gd(qBc),60);if(!a){a=new KE;FE.jd(qBc,a)}return a}
function IE(c,b){try{typeof $wnd[b]!='object'&&NE(b);c.a=$wnd[b]}catch(a){NE(b)}}
function NE(a){throw new joc(muc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function KE(){this.b='Dictionary userInfo';IE(this,qBc);if(!this.a){throw new joc("Cannot find JavaScript object with the name 'userInfo'")}}
function qlb(){var a,b,c,d,e,f,g,i,j,k,n;f=new h7b;g=new tTb('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.cb.dir=Gtc;Ys(g.cb.style,'textAlign',$tc);e7b(f,new tTb('<b>\u8FD9\u4E2A\u4F8B\u5B50\u4F7F\u7528\u4E0B\u5217Javascript\u7684\u53D8\u91CF\uFF1A <\/b>'));e7b(f,g);j=new $Vb;b=j.j;i=LE();e=(n=new qnc,HE(i,n),n);a=0;for(d=lkc(MF(e.a));d.a.sd();){c=NI(rkc(d),1);k=JE(i,c);RVb(j,0,a,c);gWb(b,0,a,'cw-DictionaryExample-header');RVb(j,1,a,k);gWb(b,1,a,'cw-DictionaryExample-data');++a}e7b(f,new tTb('<br><br>'));e7b(f,j);return f}
var qBc='userInfo';N2(348,1,{60:1},KE);_.cd=function ME(a){var b;b="Cannot find '"+a+"' in "+this;throw new joc(b)};_.tS=function OE(){return this.b};var FE;N2(647,1,yqc);_.lc=function wlb(){w5(this.a,qlb())};var _N=Kec(uxc,'Dictionary',348);lrc(Jn)(32);