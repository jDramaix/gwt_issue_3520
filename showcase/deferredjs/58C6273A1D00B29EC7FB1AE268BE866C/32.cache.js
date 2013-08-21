function pG(){pG=qTc;oG=new VQc}
function Tnc(a,b,c,d){var e;a.a.$g(b,c);e=Vnc(a.a.i,b,c);kj(e,d,true)}
function qG(d,a){var b=d.a;for(var c in b){b.hasOwnProperty(c)&&a.oe(c)}}
function sG(d,a){a=String(a);var b=d.a;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.Sd(a);return String(c)}
function uG(){pG();var a;a=m9(oG.je(A3c),60);if(!a){a=new tG;oG.le(A3c,a)}return a}
function rG(c,b){try{typeof $wnd[b]!='object'&&wG(b);c.a=$wnd[b]}catch(a){wG(b)}}
function wG(a){throw new WRc(ZXc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function tG(){this.b='Dictionary userInfo';rG(this,A3c);if(!this.a){throw new WRc("Cannot find JavaScript object with the name 'userInfo'")}}
function aPb(){var a,b,c,d,e,f,g,i,j,k,n;f=new UAc;g=new elc('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.cb.dir=rXc;Ys(g.cb.style,'textAlign',LXc);RAc(f,new elc('<b>\u0647\u0630\u0627 \u0627\u0644\u0645\u062B\u0627\u0644 \u064A\u062A\u0641\u0627\u0639\u0644 \u0645\u0639 \u0645\u062A\u063A\u064A\u0631\u0627\u062A \u062C\u0627\u0641\u0627\u0633\u0643\u0631\u064A\u0628\u062A \u0627\u0644\u062A\u0627\u0644\u064A\u0629 :<\/b>'));RAc(f,g);j=new Lnc;b=j.j;i=uG();e=(n=new bRc,qG(i,n),n);a=0;for(d=YNc(AM(e.a));d.a.ue();){c=m9(cOc(d),1);k=sG(i,c);Cnc(j,0,a,c);Tnc(b,0,a,'cw-DictionaryExample-header');Cnc(j,1,a,k);Tnc(b,1,a,'cw-DictionaryExample-data');++a}RAc(f,new elc('<br><br>'));RAc(f,j);return f}
var A3c='userInfo';xwb(363,1,{60:1},tG);_.Sd=function vG(a){var b;b="Cannot find '"+a+"' in "+this;throw new WRc(b)};_.tS=function xG(){return this.b};var oG;xwb(713,1,jUc);_.lc=function gPb(){gzb(this.a,aPb())};var Oeb=vIc(u_c,'Dictionary',363);YUc(Jn)(32);