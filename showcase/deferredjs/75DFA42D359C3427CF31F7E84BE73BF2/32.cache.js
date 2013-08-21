function VG(){VG=bUc;UG=new GRc}
function xoc(a,b,c,d){var e;a.b.fh(b,c);e=zoc(a.b.j,b,c);wj(e,d,true)}
function WG(d,a){var b=d.b;for(var c in b){b.hasOwnProperty(c)&&a.we(c)}}
function YG(d,a){a=String(a);var b=d.b;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.$d(a);return String(c)}
function $G(){VG();var a;a=S9(UG.re(y4c),60);if(!a){a=new ZG;UG.te(y4c,a)}return a}
function XG(c,b){try{typeof $wnd[b]!='object'&&aH(b);c.b=$wnd[b]}catch(a){aH(b)}}
function aH(a){throw new HSc(VYc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function ZG(){this.c='Dictionary userInfo';XG(this,y4c);if(!this.b){throw new HSc("Cannot find JavaScript object with the name 'userInfo'")}}
function JPb(){var a,b,c,d,e,f,g,i,j,k,n;f=new wBc;g=new Klc('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.db.dir=rYc;Et(g.db.style,'textAlign',HYc);tBc(f,new Klc('<b>\u0647\u0630\u0627 \u0627\u0644\u0645\u062B\u0627\u0644 \u064A\u062A\u0641\u0627\u0639\u0644 \u0645\u0639 \u0645\u062A\u063A\u064A\u0631\u0627\u062A \u062C\u0627\u0641\u0627\u0633\u0643\u0631\u064A\u0628\u062A \u0627\u0644\u062A\u0627\u0644\u064A\u0629 :<\/b>'));tBc(f,g);j=new poc;b=j.k;i=$G();e=(n=new ORc,WG(i,n),n);a=0;for(d=JOc(eN(e.b));d.b.Ce();){c=S9(POc(d),1);k=YG(i,c);goc(j,0,a,c);xoc(b,0,a,'cw-DictionaryExample-header');goc(j,1,a,k);xoc(b,1,a,'cw-DictionaryExample-data');++a}tBc(f,new Klc('<br><br>'));tBc(f,j);return f}
var y4c='userInfo';jxb(365,1,{60:1},ZG);_.$d=function _G(a){var b;b="Cannot find '"+a+"' in "+this;throw new HSc(b)};_.tS=function bH(){return this.c};var UG;jxb(714,1,XUc);_.qc=function PPb(){Pzb(this.b,JPb())};var zfb=fJc(r0c,'Dictionary',365);KVc(Vn)(32);