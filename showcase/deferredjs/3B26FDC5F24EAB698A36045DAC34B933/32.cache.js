function zG(){zG=DTc;yG=new gRc}
function coc(a,b,c,d){var e;a.a.Zg(b,c);e=eoc(a.a.i,b,c);jj(e,d,true)}
function AG(d,a){var b=d.a;for(var c in b){b.hasOwnProperty(c)&&a.oe(c)}}
function CG(d,a){a=String(a);var b=d.a;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.Sd(a);return String(c)}
function EG(){zG();var a;a=w9(yG.je(O3c),60);if(!a){a=new DG;yG.le(O3c,a)}return a}
function BG(c,b){try{typeof $wnd[b]!='object'&&GG(b);c.a=$wnd[b]}catch(a){GG(b)}}
function GG(a){throw new hSc(mYc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function DG(){this.b='Dictionary userInfo';BG(this,O3c);if(!this.a){throw new hSc("Cannot find JavaScript object with the name 'userInfo'")}}
function jPb(){var a,b,c,d,e,f,g,i,j,k,n;f=new dBc;g=new plc('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.cb.dir=HXc;gt(g.cb.style,'textAlign',_Xc);aBc(f,new plc('<b>\u0647\u0630\u0627 \u0627\u0644\u0645\u062B\u0627\u0644 \u064A\u062A\u0641\u0627\u0639\u0644 \u0645\u0639 \u0645\u062A\u063A\u064A\u0631\u0627\u062A \u062C\u0627\u0641\u0627\u0633\u0643\u0631\u064A\u0628\u062A \u0627\u0644\u062A\u0627\u0644\u064A\u0629 :<\/b>'));aBc(f,g);j=new Wnc;b=j.j;i=EG();e=(n=new oRc,AG(i,n),n);a=0;for(d=jOc(KM(e.a));d.a.ue();){c=w9(pOc(d),1);k=CG(i,c);Nnc(j,0,a,c);coc(b,0,a,'cw-DictionaryExample-header');Nnc(j,1,a,k);coc(b,1,a,'cw-DictionaryExample-data');++a}aBc(f,new plc('<br><br>'));aBc(f,j);return f}
var O3c='userInfo';Gwb(362,1,{60:1},DG);_.Sd=function FG(a){var b;b="Cannot find '"+a+"' in "+this;throw new hSc(b)};_.tS=function HG(){return this.b};var yG;Gwb(712,1,wUc);_.lc=function pPb(){pzb(this.a,jPb())};var Yeb=IIc(H_c,'Dictionary',362);jVc(In)(32);