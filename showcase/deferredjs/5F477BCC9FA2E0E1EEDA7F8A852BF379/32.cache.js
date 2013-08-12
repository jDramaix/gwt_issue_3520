function GE(){GE=Bpc;FE=new enc}
function HE(d,a){var b=d.a;for(var c in b){b.hasOwnProperty(c)&&a.md(c)}}
function fWb(a,b,c,d){var e;a.a.Yf(b,c);e=hWb(a.a.i,b,c);kj(e,d,true)}
function LE(){GE();var a;a=NI(FE.gd(mBc),60);if(!a){a=new KE;FE.jd(mBc,a)}return a}
function IE(c,b){try{typeof $wnd[b]!='object'&&NE(b);c.a=$wnd[b]}catch(a){NE(b)}}
function NE(a){throw new foc(iuc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function JE(d,a){a=String(a);var b=d.a;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.cd(a);return String(c)}
function KE(){this.b='Dictionary userInfo';IE(this,mBc);if(!this.a){throw new foc("Cannot find JavaScript object with the name 'userInfo'")}}
function qlb(){var a,b,c,d,e,f,g,i,j,k,n;f=new g7b;g=new tTb('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.cb.dir=Ctc;Ys(g.cb.style,'textAlign',Wtc);d7b(f,new tTb('<b>\u8FD9\u4E2A\u4F8B\u5B50\u4F7F\u7528\u4E0B\u5217Javascript\u7684\u53D8\u91CF\uFF1A <\/b>'));d7b(f,g);j=new ZVb;b=j.j;i=LE();e=(n=new mnc,HE(i,n),n);a=0;for(d=hkc(MF(e.a));d.a.sd();){c=NI(nkc(d),1);k=JE(i,c);QVb(j,0,a,c);fWb(b,0,a,'cw-DictionaryExample-header');QVb(j,1,a,k);fWb(b,1,a,'cw-DictionaryExample-data');++a}d7b(f,new tTb('<br><br>'));d7b(f,j);return f}
var mBc='userInfo';N2(348,1,{60:1},KE);_.cd=function ME(a){var b;b="Cannot find '"+a+"' in "+this;throw new foc(b)};_.tS=function OE(){return this.b};var FE;N2(647,1,uqc);_.lc=function wlb(){w5(this.a,qlb())};var _N=Gec(qxc,'Dictionary',348);hrc(Jn)(32);