function iG(){iG=OSc;hG=new rQc}
function Bnc(a,b,c,d){var e;a.b.Zg(b,c);e=Dnc(a.b.j,b,c);kj(e,d,true)}
function jG(d,a){var b=d.b;for(var c in b){b.hasOwnProperty(c)&&a.oe(c)}}
function lG(d,a){a=String(a);var b=d.b;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.Sd(a);return String(c)}
function nG(){iG();var a;a=f9(hG.je(b3c),60);if(!a){a=new mG;hG.le(b3c,a)}return a}
function kG(c,b){try{typeof $wnd[b]!='object'&&pG(b);c.b=$wnd[b]}catch(a){pG(b)}}
function pG(a){throw new sRc(yXc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function mG(){this.c='Dictionary userInfo';kG(this,b3c);if(!this.b){throw new sRc("Cannot find JavaScript object with the name 'userInfo'")}}
function OOb(){var a,b,c,d,e,f,g,i,j,k,n;f=new xAc;g=new Kkc('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.db.dir=SWc;Ts(g.db.style,'textAlign',kXc);uAc(f,new Kkc('<b>\u0647\u0630\u0627 \u0627\u0644\u0645\u062B\u0627\u0644 \u064A\u062A\u0641\u0627\u0639\u0644 \u0645\u0639 \u0645\u062A\u063A\u064A\u0631\u0627\u062A \u062C\u0627\u0641\u0627\u0633\u0643\u0631\u064A\u0628\u062A \u0627\u0644\u062A\u0627\u0644\u064A\u0629 :<\/b>'));uAc(f,g);j=new tnc;b=j.k;i=nG();e=(n=new zQc,jG(i,n),n);a=0;for(d=uNc(sM(e.b));d.b.ue();){c=f9(ANc(d),1);k=lG(i,c);knc(j,0,a,c);Bnc(b,0,a,'cw-DictionaryExample-header');knc(j,1,a,k);Bnc(b,1,a,'cw-DictionaryExample-data');++a}uAc(f,new Kkc('<br><br>'));uAc(f,j);return f}
var b3c='userInfo';owb(360,1,{60:1},mG);_.Sd=function oG(a){var b;b="Cannot find '"+a+"' in "+this;throw new sRc(b)};_.tS=function qG(){return this.c};var hG;owb(709,1,HTc);_.mc=function UOb(){Uyb(this.b,OOb())};var Ieb=THc(W$c,'Dictionary',360);uUc(Jn)(32);