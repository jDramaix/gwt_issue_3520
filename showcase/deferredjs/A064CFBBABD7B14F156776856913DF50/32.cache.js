function sG(){sG=kDc;rG=new PAc}
function tG(d,a){var b=d.b;for(var c in b){b.hasOwnProperty(c)&&a.we(c)}}
function G7b(a,b,c,d){var e;a.b.fh(b,c);e=I7b(a.b.j,b,c);wj(e,d,true)}
function xG(){sG();var a;a=SV(rG.re(xPc),60);if(!a){a=new wG;rG.te(xPc,a)}return a}
function uG(c,b){try{typeof $wnd[b]!='object'&&zG(b);c.b=$wnd[b]}catch(a){zG(b)}}
function zG(a){throw new QBc(cIc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function vG(d,a){a=String(a);var b=d.b;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.$d(a);return String(c)}
function wG(){this.c='Dictionary userInfo';uG(this,xPc);if(!this.b){throw new QBc("Cannot find JavaScript object with the name 'userInfo'")}}
function Syb(){var a,b,c,d,e,f,g,i,j,k,n;f=new Fkc;g=new T4b('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.db.dir=AHc;Et(g.db.style,'textAlign',QHc);Ckc(f,new T4b('<b>Cet exemple interagit avec le JavaScript variable suivant:<\/b>'));Ckc(f,g);j=new y7b;b=j.k;i=xG();e=(n=new XAc,tG(i,n),n);a=0;for(d=Sxc(uJ(e.b));d.b.Ce();){c=SV(Yxc(d),1);k=vG(i,c);p7b(j,0,a,c);G7b(b,0,a,'cw-DictionaryExample-header');p7b(j,1,a,k);G7b(b,1,a,'cw-DictionaryExample-data');++a}Ckc(f,new T4b('<br><br>'));Ckc(f,j);return f}
var xPc='userInfo';sgb(355,1,{60:1},wG);_.$d=function yG(a){var b;b="Cannot find '"+a+"' in "+this;throw new QBc(b)};_.tS=function AG(){return this.c};var rG;sgb(669,1,eEc);_.qc=function Yyb(){Yib(this.b,Syb())};var p_=osc(qLc,'Dictionary',355);TEc(Vn)(32);