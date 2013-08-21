function YF(){YF=MCc;XF=new pAc}
function l7b(a,b,c,d){var e;a.a.Zg(b,c);e=n7b(a.a.i,b,c);jj(e,d,true)}
function ZF(d,a){var b=d.a;for(var c in b){b.hasOwnProperty(c)&&a.oe(c)}}
function _F(d,a){a=String(a);var b=d.a;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.Sd(a);return String(c)}
function bG(){YF();var a;a=wV(XF.je(NOc),60);if(!a){a=new aG;XF.le(NOc,a)}return a}
function $F(c,b){try{typeof $wnd[b]!='object'&&dG(b);c.a=$wnd[b]}catch(a){dG(b)}}
function dG(a){throw new qBc(vHc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function aG(){this.b='Dictionary userInfo';$F(this,NOc);if(!this.a){throw new qBc("Cannot find JavaScript object with the name 'userInfo'")}}
function syb(){var a,b,c,d,e,f,g,i,j,k,n;f=new mkc;g=new y4b('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.cb.dir=QGc;gt(g.cb.style,'textAlign',iHc);jkc(f,new y4b('<b>Cet exemple interagit avec le JavaScript variable suivant:<\/b>'));jkc(f,g);j=new d7b;b=j.j;i=bG();e=(n=new xAc,ZF(i,n),n);a=0;for(d=sxc($I(e.a));d.a.ue();){c=wV(yxc(d),1);k=_F(i,c);W6b(j,0,a,c);l7b(b,0,a,'cw-DictionaryExample-header');W6b(j,1,a,k);l7b(b,1,a,'cw-DictionaryExample-data');++a}jkc(f,new y4b('<br><br>'));jkc(f,j);return f}
var NOc='userInfo';Pfb(352,1,{60:1},aG);_.Sd=function cG(a){var b;b="Cannot find '"+a+"' in "+this;throw new qBc(b)};_.tS=function eG(){return this.b};var XF;Pfb(667,1,FDc);_.lc=function yyb(){yib(this.a,syb())};var O$=Rrc(GKc,'Dictionary',352);sEc(In)(32);