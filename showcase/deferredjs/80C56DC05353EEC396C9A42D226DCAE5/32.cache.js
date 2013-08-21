function pG(){pG=pTc;oG=new UQc}
function Snc(a,b,c,d){var e;a.a.$g(b,c);e=Unc(a.a.i,b,c);kj(e,d,true)}
function qG(d,a){var b=d.a;for(var c in b){b.hasOwnProperty(c)&&a.oe(c)}}
function sG(d,a){a=String(a);var b=d.a;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.Sd(a);return String(c)}
function uG(){pG();var a;a=m9(oG.je(z3c),60);if(!a){a=new tG;oG.le(z3c,a)}return a}
function rG(c,b){try{typeof $wnd[b]!='object'&&wG(b);c.a=$wnd[b]}catch(a){wG(b)}}
function wG(a){throw new VRc(YXc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function tG(){this.b='Dictionary userInfo';rG(this,z3c);if(!this.a){throw new VRc("Cannot find JavaScript object with the name 'userInfo'")}}
function aPb(){var a,b,c,d,e,f,g,i,j,k,n;f=new TAc;g=new elc('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.cb.dir=qXc;Ys(g.cb.style,'textAlign',KXc);QAc(f,new elc('<b>\u0647\u0630\u0627 \u0627\u0644\u0645\u062B\u0627\u0644 \u064A\u062A\u0641\u0627\u0639\u0644 \u0645\u0639 \u0645\u062A\u063A\u064A\u0631\u0627\u062A \u062C\u0627\u0641\u0627\u0633\u0643\u0631\u064A\u0628\u062A \u0627\u0644\u062A\u0627\u0644\u064A\u0629 :<\/b>'));QAc(f,g);j=new Knc;b=j.j;i=uG();e=(n=new aRc,qG(i,n),n);a=0;for(d=XNc(AM(e.a));d.a.ue();){c=m9(bOc(d),1);k=sG(i,c);Bnc(j,0,a,c);Snc(b,0,a,'cw-DictionaryExample-header');Bnc(j,1,a,k);Snc(b,1,a,'cw-DictionaryExample-data');++a}QAc(f,new elc('<br><br>'));QAc(f,j);return f}
var z3c='userInfo';xwb(363,1,{60:1},tG);_.Sd=function vG(a){var b;b="Cannot find '"+a+"' in "+this;throw new VRc(b)};_.tS=function xG(){return this.b};var oG;xwb(713,1,iUc);_.lc=function gPb(){gzb(this.a,aPb())};var Oeb=uIc(t_c,'Dictionary',363);XUc(Jn)(32);