function OG(){OG=g4c;NG=new L1c}
function VAc(a,b,c,d){var e;a.b.Zg(b,c);e=XAc(a.b.j,b,c);kj(e,d,true)}
function PG(d,a){var b=d.b;for(var c in b){b.hasOwnProperty(c)&&a.oe(c)}}
function RG(d,a){a=String(a);var b=d.b;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.Sd(a);return String(c)}
function TG(){OG();var a;a=jmb(NG.je(Fgd),60);if(!a){a=new SG;NG.le(Fgd,a)}return a}
function QG(c,b){try{typeof $wnd[b]!='object'&&VG(b);c.b=$wnd[b]}catch(a){VG(b)}}
function VG(a){throw new M2c(S8c+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function SG(){this.c='Dictionary userInfo';QG(this,Fgd);if(!this.b){throw new M2c("Cannot find JavaScript object with the name 'userInfo'")}}
function h0b(){var a,b,c,d,e,f,g,i,j,k,n;f=new RNc;g=new dyc('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.db.dir=k8c;Ts(g.db.style,'textAlign',E8c);ONc(f,new dyc('<b>This example interacts with the following JavaScript variable:<\/b>'));ONc(f,g);j=new NAc;b=j.k;i=TG();e=(n=new T1c,PG(i,n),n);a=0;for(d=O$c(lO(e.b));d.b.ue();){c=jmb(U$c(d),1);k=RG(i,c);EAc(j,0,a,c);VAc(b,0,a,'cw-DictionaryExample-header');EAc(j,1,a,k);VAc(b,1,a,'cw-DictionaryExample-data');++a}ONc(f,new dyc('<br><br>'));ONc(f,j);return f}
var Fgd='userInfo';JJb(365,1,{60:1},SG);_.Sd=function UG(a){var b;b="Cannot find '"+a+"' in "+this;throw new M2c(b)};_.tS=function WG(){return this.c};var NG;JJb(726,1,_4c);_.mc=function n0b(){nMb(this.b,h0b())};var Rrb=lVc(Acd,$9c,365);O5c(Jn)(32);