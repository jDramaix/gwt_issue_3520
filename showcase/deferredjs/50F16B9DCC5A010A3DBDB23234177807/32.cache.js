function OF(){OF=zCc;NF=new cAc}
function PF(d,a){var b=d.a;for(var c in b){b.hasOwnProperty(c)&&a.oe(c)}}
function a7b(a,b,c,d){var e;a.a.$g(b,c);e=c7b(a.a.i,b,c);kj(e,d,true)}
function TF(){OF();var a;a=mV(NF.je(zOc),60);if(!a){a=new SF;NF.le(zOc,a)}return a}
function QF(c,b){try{typeof $wnd[b]!='object'&&VF(b);c.a=$wnd[b]}catch(a){VF(b)}}
function VF(a){throw new dBc(gHc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function RF(d,a){a=String(a);var b=d.a;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.Sd(a);return String(c)}
function SF(){this.b='Dictionary userInfo';QF(this,zOc);if(!this.a){throw new dBc("Cannot find JavaScript object with the name 'userInfo'")}}
function jyb(){var a,b,c,d,e,f,g,i,j,k,n;f=new bkc;g=new n4b('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.cb.dir=AGc;Ys(g.cb.style,'textAlign',UGc);$jc(f,new n4b('<b>Cet exemple interagit avec le JavaScript variable suivant:<\/b>'));$jc(f,g);j=new U6b;b=j.j;i=TF();e=(n=new kAc,PF(i,n),n);a=0;for(d=fxc(QI(e.a));d.a.ue();){c=mV(lxc(d),1);k=RF(i,c);L6b(j,0,a,c);a7b(b,0,a,'cw-DictionaryExample-header');L6b(j,1,a,k);a7b(b,1,a,'cw-DictionaryExample-data');++a}$jc(f,new n4b('<br><br>'));$jc(f,j);return f}
var zOc='userInfo';Gfb(353,1,{60:1},SF);_.Sd=function UF(a){var b;b="Cannot find '"+a+"' in "+this;throw new dBc(b)};_.tS=function WF(){return this.b};var NF;Gfb(668,1,sDc);_.lc=function pyb(){pib(this.a,jyb())};var E$=Erc(tKc,'Dictionary',353);fEc(Jn)(32);