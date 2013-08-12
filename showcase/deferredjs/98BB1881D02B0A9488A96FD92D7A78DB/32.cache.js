function iG(){iG=KSc;hG=new nQc}
function Anc(a,b,c,d){var e;a.b.Zg(b,c);e=Cnc(a.b.j,b,c);kj(e,d,true)}
function jG(d,a){var b=d.b;for(var c in b){b.hasOwnProperty(c)&&a.oe(c)}}
function lG(d,a){a=String(a);var b=d.b;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.Sd(a);return String(c)}
function nG(){iG();var a;a=f9(hG.je(Z2c),60);if(!a){a=new mG;hG.le(Z2c,a)}return a}
function kG(c,b){try{typeof $wnd[b]!='object'&&pG(b);c.b=$wnd[b]}catch(a){pG(b)}}
function pG(a){throw new oRc(uXc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function mG(){this.c='Dictionary userInfo';kG(this,Z2c);if(!this.b){throw new oRc("Cannot find JavaScript object with the name 'userInfo'")}}
function OOb(){var a,b,c,d,e,f,g,i,j,k,n;f=new wAc;g=new Kkc('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.db.dir=OWc;Ts(g.db.style,'textAlign',gXc);tAc(f,new Kkc('<b>\u0647\u0630\u0627 \u0627\u0644\u0645\u062B\u0627\u0644 \u064A\u062A\u0641\u0627\u0639\u0644 \u0645\u0639 \u0645\u062A\u063A\u064A\u0631\u0627\u062A \u062C\u0627\u0641\u0627\u0633\u0643\u0631\u064A\u0628\u062A \u0627\u0644\u062A\u0627\u0644\u064A\u0629 :<\/b>'));tAc(f,g);j=new snc;b=j.k;i=nG();e=(n=new vQc,jG(i,n),n);a=0;for(d=qNc(sM(e.b));d.b.ue();){c=f9(wNc(d),1);k=lG(i,c);jnc(j,0,a,c);Anc(b,0,a,'cw-DictionaryExample-header');jnc(j,1,a,k);Anc(b,1,a,'cw-DictionaryExample-data');++a}tAc(f,new Kkc('<br><br>'));tAc(f,j);return f}
var Z2c='userInfo';owb(360,1,{60:1},mG);_.Sd=function oG(a){var b;b="Cannot find '"+a+"' in "+this;throw new oRc(b)};_.tS=function qG(){return this.c};var hG;owb(709,1,DTc);_.mc=function UOb(){Uyb(this.b,OOb())};var Ieb=PHc(S$c,'Dictionary',360);qUc(Jn)(32);