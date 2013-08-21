function YF(){YF=LCc;XF=new oAc}
function ZF(d,a){var b=d.a;for(var c in b){b.hasOwnProperty(c)&&a.oe(c)}}
function k7b(a,b,c,d){var e;a.a.Zg(b,c);e=m7b(a.a.i,b,c);jj(e,d,true)}
function bG(){YF();var a;a=wV(XF.je(MOc),60);if(!a){a=new aG;XF.le(MOc,a)}return a}
function $F(c,b){try{typeof $wnd[b]!='object'&&dG(b);c.a=$wnd[b]}catch(a){dG(b)}}
function dG(a){throw new pBc(uHc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function _F(d,a){a=String(a);var b=d.a;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.Sd(a);return String(c)}
function aG(){this.b='Dictionary userInfo';$F(this,MOc);if(!this.a){throw new pBc("Cannot find JavaScript object with the name 'userInfo'")}}
function syb(){var a,b,c,d,e,f,g,i,j,k,n;f=new lkc;g=new y4b('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.cb.dir=PGc;gt(g.cb.style,'textAlign',hHc);ikc(f,new y4b('<b>Cet exemple interagit avec le JavaScript variable suivant:<\/b>'));ikc(f,g);j=new c7b;b=j.j;i=bG();e=(n=new wAc,ZF(i,n),n);a=0;for(d=rxc($I(e.a));d.a.ue();){c=wV(xxc(d),1);k=_F(i,c);V6b(j,0,a,c);k7b(b,0,a,'cw-DictionaryExample-header');V6b(j,1,a,k);k7b(b,1,a,'cw-DictionaryExample-data');++a}ikc(f,new y4b('<br><br>'));ikc(f,j);return f}
var MOc='userInfo';Pfb(352,1,{60:1},aG);_.Sd=function cG(a){var b;b="Cannot find '"+a+"' in "+this;throw new pBc(b)};_.tS=function eG(){return this.b};var XF;Pfb(667,1,EDc);_.lc=function yyb(){yib(this.a,syb())};var O$=Qrc(FKc,'Dictionary',352);rEc(In)(32);