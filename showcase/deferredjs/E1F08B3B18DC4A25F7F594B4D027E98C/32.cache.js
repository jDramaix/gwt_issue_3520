function OG(){OG=h4c;NG=new M1c}
function WAc(a,b,c,d){var e;a.b.Zg(b,c);e=YAc(a.b.j,b,c);kj(e,d,true)}
function PG(d,a){var b=d.b;for(var c in b){b.hasOwnProperty(c)&&a.oe(c)}}
function RG(d,a){a=String(a);var b=d.b;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.Sd(a);return String(c)}
function TG(){OG();var a;a=jmb(NG.je(Ggd),60);if(!a){a=new SG;NG.le(Ggd,a)}return a}
function QG(c,b){try{typeof $wnd[b]!='object'&&VG(b);c.b=$wnd[b]}catch(a){VG(b)}}
function VG(a){throw new N2c(T8c+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function SG(){this.c='Dictionary userInfo';QG(this,Ggd);if(!this.b){throw new N2c("Cannot find JavaScript object with the name 'userInfo'")}}
function h0b(){var a,b,c,d,e,f,g,i,j,k,n;f=new SNc;g=new dyc('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.db.dir=l8c;Ts(g.db.style,'textAlign',F8c);PNc(f,new dyc('<b>This example interacts with the following JavaScript variable:<\/b>'));PNc(f,g);j=new OAc;b=j.k;i=TG();e=(n=new U1c,PG(i,n),n);a=0;for(d=P$c(lO(e.b));d.b.ue();){c=jmb(V$c(d),1);k=RG(i,c);FAc(j,0,a,c);WAc(b,0,a,'cw-DictionaryExample-header');FAc(j,1,a,k);WAc(b,1,a,'cw-DictionaryExample-data');++a}PNc(f,new dyc('<br><br>'));PNc(f,j);return f}
var Ggd='userInfo';JJb(365,1,{60:1},SG);_.Sd=function UG(a){var b;b="Cannot find '"+a+"' in "+this;throw new N2c(b)};_.tS=function WG(){return this.c};var NG;JJb(726,1,a5c);_.mc=function n0b(){nMb(this.b,h0b())};var Rrb=mVc(Bcd,_9c,365);P5c(Jn)(32);