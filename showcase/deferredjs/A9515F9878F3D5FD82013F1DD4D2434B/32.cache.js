function OF(){OF=yCc;NF=new bAc}
function _6b(a,b,c,d){var e;a.a.$g(b,c);e=b7b(a.a.i,b,c);kj(e,d,true)}
function PF(d,a){var b=d.a;for(var c in b){b.hasOwnProperty(c)&&a.oe(c)}}
function RF(d,a){a=String(a);var b=d.a;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.Sd(a);return String(c)}
function TF(){OF();var a;a=mV(NF.je(yOc),60);if(!a){a=new SF;NF.le(yOc,a)}return a}
function QF(c,b){try{typeof $wnd[b]!='object'&&VF(b);c.a=$wnd[b]}catch(a){VF(b)}}
function VF(a){throw new cBc(fHc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function SF(){this.b='Dictionary userInfo';QF(this,yOc);if(!this.a){throw new cBc("Cannot find JavaScript object with the name 'userInfo'")}}
function jyb(){var a,b,c,d,e,f,g,i,j,k,n;f=new akc;g=new n4b('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.cb.dir=zGc;Ys(g.cb.style,'textAlign',TGc);Zjc(f,new n4b('<b>Cet exemple interagit avec le JavaScript variable suivant:<\/b>'));Zjc(f,g);j=new T6b;b=j.j;i=TF();e=(n=new jAc,PF(i,n),n);a=0;for(d=exc(QI(e.a));d.a.ue();){c=mV(kxc(d),1);k=RF(i,c);K6b(j,0,a,c);_6b(b,0,a,'cw-DictionaryExample-header');K6b(j,1,a,k);_6b(b,1,a,'cw-DictionaryExample-data');++a}Zjc(f,new n4b('<br><br>'));Zjc(f,j);return f}
var yOc='userInfo';Gfb(353,1,{60:1},SF);_.Sd=function UF(a){var b;b="Cannot find '"+a+"' in "+this;throw new cBc(b)};_.tS=function WF(){return this.b};var NF;Gfb(668,1,rDc);_.lc=function pyb(){pib(this.a,jyb())};var E$=Drc(sKc,'Dictionary',353);eEc(Jn)(32);