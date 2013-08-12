function VG(){VG=ZTc;UG=new CRc}
function woc(a,b,c,d){var e;a.b.fh(b,c);e=yoc(a.b.j,b,c);wj(e,d,true)}
function WG(d,a){var b=d.b;for(var c in b){b.hasOwnProperty(c)&&a.we(c)}}
function YG(d,a){a=String(a);var b=d.b;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.$d(a);return String(c)}
function $G(){VG();var a;a=S9(UG.re(u4c),60);if(!a){a=new ZG;UG.te(u4c,a)}return a}
function XG(c,b){try{typeof $wnd[b]!='object'&&aH(b);c.b=$wnd[b]}catch(a){aH(b)}}
function aH(a){throw new DSc(RYc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function ZG(){this.c='Dictionary userInfo';XG(this,u4c);if(!this.b){throw new DSc("Cannot find JavaScript object with the name 'userInfo'")}}
function JPb(){var a,b,c,d,e,f,g,i,j,k,n;f=new vBc;g=new Klc('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.db.dir=nYc;Et(g.db.style,'textAlign',DYc);sBc(f,new Klc('<b>\u0647\u0630\u0627 \u0627\u0644\u0645\u062B\u0627\u0644 \u064A\u062A\u0641\u0627\u0639\u0644 \u0645\u0639 \u0645\u062A\u063A\u064A\u0631\u0627\u062A \u062C\u0627\u0641\u0627\u0633\u0643\u0631\u064A\u0628\u062A \u0627\u0644\u062A\u0627\u0644\u064A\u0629 :<\/b>'));sBc(f,g);j=new ooc;b=j.k;i=$G();e=(n=new KRc,WG(i,n),n);a=0;for(d=FOc(eN(e.b));d.b.Ce();){c=S9(LOc(d),1);k=YG(i,c);foc(j,0,a,c);woc(b,0,a,'cw-DictionaryExample-header');foc(j,1,a,k);woc(b,1,a,'cw-DictionaryExample-data');++a}sBc(f,new Klc('<br><br>'));sBc(f,j);return f}
var u4c='userInfo';jxb(365,1,{60:1},ZG);_.$d=function _G(a){var b;b="Cannot find '"+a+"' in "+this;throw new DSc(b)};_.tS=function bH(){return this.c};var UG;jxb(714,1,TUc);_.qc=function PPb(){Pzb(this.b,JPb())};var zfb=bJc(n0c,'Dictionary',365);GVc(Vn)(32);