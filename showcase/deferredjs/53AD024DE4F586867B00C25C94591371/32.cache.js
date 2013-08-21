function HF(){HF=XBc;GF=new Azc}
function K6b(a,b,c,d){var e;a.b.Zg(b,c);e=M6b(a.b.j,b,c);kj(e,d,true)}
function IF(d,a){var b=d.b;for(var c in b){b.hasOwnProperty(c)&&a.oe(c)}}
function KF(d,a){a=String(a);var b=d.b;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.Sd(a);return String(c)}
function MF(){HF();var a;a=fV(GF.je(aOc),60);if(!a){a=new LF;GF.le(aOc,a)}return a}
function JF(c,b){try{typeof $wnd[b]!='object'&&OF(b);c.b=$wnd[b]}catch(a){OF(b)}}
function OF(a){throw new BAc(HGc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function LF(){this.c='Dictionary userInfo';JF(this,aOc);if(!this.b){throw new BAc("Cannot find JavaScript object with the name 'userInfo'")}}
function Xxb(){var a,b,c,d,e,f,g,i,j,k,n;f=new Gjc;g=new T3b('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.db.dir=_Fc;Ts(g.db.style,'textAlign',tGc);Djc(f,new T3b('<b>Cet exemple interagit avec le JavaScript variable suivant:<\/b>'));Djc(f,g);j=new C6b;b=j.k;i=MF();e=(n=new Izc,IF(i,n),n);a=0;for(d=Dwc(JI(e.b));d.b.ue();){c=fV(Jwc(d),1);k=KF(i,c);t6b(j,0,a,c);K6b(b,0,a,'cw-DictionaryExample-header');t6b(j,1,a,k);K6b(b,1,a,'cw-DictionaryExample-data');++a}Djc(f,new T3b('<br><br>'));Djc(f,j);return f}
var aOc='userInfo';xfb(350,1,{60:1},LF);_.Sd=function NF(a){var b;b="Cannot find '"+a+"' in "+this;throw new BAc(b)};_.tS=function PF(){return this.c};var GF;xfb(664,1,QCc);_.mc=function byb(){bib(this.b,Xxb())};var y$=arc(VJc,'Dictionary',350);DDc(Jn)(32);