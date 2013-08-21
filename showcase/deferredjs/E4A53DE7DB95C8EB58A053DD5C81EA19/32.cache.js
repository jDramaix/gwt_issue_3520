function IG(){IG=ETc;HG=new hRc}
function goc(a,b,c,d){var e;a.b.bh(b,c);e=ioc(a.b.j,b,c);vj(e,d,true)}
function JG(d,a){var b=d.b;for(var c in b){b.hasOwnProperty(c)&&a.se(c)}}
function LG(d,a){a=String(a);var b=d.b;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.Wd(a);return String(c)}
function NG(){IG();var a;a=F9(HG.ne($3c),60);if(!a){a=new MG;HG.pe($3c,a)}return a}
function KG(c,b){try{typeof $wnd[b]!='object'&&PG(b);c.b=$wnd[b]}catch(a){PG(b)}}
function PG(a){throw new iSc(oYc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function MG(){this.c='Dictionary userInfo';KG(this,$3c);if(!this.b){throw new iSc("Cannot find JavaScript object with the name 'userInfo'")}}
function qPb(){var a,b,c,d,e,f,g,i,j,k,n;f=new cBc;g=new ulc('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.db.dir=IXc;rt(g.db.style,'textAlign',aYc);_Ac(f,new ulc('<b>\u0647\u0630\u0627 \u0627\u0644\u0645\u062B\u0627\u0644 \u064A\u062A\u0641\u0627\u0639\u0644 \u0645\u0639 \u0645\u062A\u063A\u064A\u0631\u0627\u062A \u062C\u0627\u0641\u0627\u0633\u0643\u0631\u064A\u0628\u062A \u0627\u0644\u062A\u0627\u0644\u064A\u0629 :<\/b>'));_Ac(f,g);j=new $nc;b=j.k;i=NG();e=(n=new pRc,JG(i,n),n);a=0;for(d=kOc(TM(e.b));d.b.ye();){c=F9(qOc(d),1);k=LG(i,c);Rnc(j,0,a,c);goc(b,0,a,'cw-DictionaryExample-header');Rnc(j,1,a,k);goc(b,1,a,'cw-DictionaryExample-data');++a}_Ac(f,new ulc('<br><br>'));_Ac(f,j);return f}
var $3c='userInfo';Swb(361,1,{60:1},MG);_.Wd=function OG(a){var b;b="Cannot find '"+a+"' in "+this;throw new iSc(b)};_.tS=function QG(){return this.c};var HG;Swb(710,1,yUc);_.qc=function wPb(){wzb(this.b,qPb())};var ifb=JIc(T_c,'Dictionary',361);lVc(Vn)(32);