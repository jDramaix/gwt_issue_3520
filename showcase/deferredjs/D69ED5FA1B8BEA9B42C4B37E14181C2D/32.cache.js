function sG(){sG=jDc;rG=new OAc}
function F7b(a,b,c,d){var e;a.b.fh(b,c);e=H7b(a.b.j,b,c);wj(e,d,true)}
function tG(d,a){var b=d.b;for(var c in b){b.hasOwnProperty(c)&&a.we(c)}}
function vG(d,a){a=String(a);var b=d.b;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.$d(a);return String(c)}
function xG(){sG();var a;a=SV(rG.re(wPc),60);if(!a){a=new wG;rG.te(wPc,a)}return a}
function uG(c,b){try{typeof $wnd[b]!='object'&&zG(b);c.b=$wnd[b]}catch(a){zG(b)}}
function zG(a){throw new PBc(bIc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function wG(){this.c='Dictionary userInfo';uG(this,wPc);if(!this.b){throw new PBc("Cannot find JavaScript object with the name 'userInfo'")}}
function Syb(){var a,b,c,d,e,f,g,i,j,k,n;f=new Ekc;g=new T4b('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.db.dir=zHc;Et(g.db.style,'textAlign',PHc);Bkc(f,new T4b('<b>Cet exemple interagit avec le JavaScript variable suivant:<\/b>'));Bkc(f,g);j=new x7b;b=j.k;i=xG();e=(n=new WAc,tG(i,n),n);a=0;for(d=Rxc(uJ(e.b));d.b.Ce();){c=SV(Xxc(d),1);k=vG(i,c);o7b(j,0,a,c);F7b(b,0,a,'cw-DictionaryExample-header');o7b(j,1,a,k);F7b(b,1,a,'cw-DictionaryExample-data');++a}Bkc(f,new T4b('<br><br>'));Bkc(f,j);return f}
var wPc='userInfo';sgb(355,1,{60:1},wG);_.$d=function yG(a){var b;b="Cannot find '"+a+"' in "+this;throw new PBc(b)};_.tS=function AG(){return this.c};var rG;sgb(669,1,dEc);_.qc=function Yyb(){Yib(this.b,Syb())};var p_=nsc(pLc,'Dictionary',355);SEc(Vn)(32);