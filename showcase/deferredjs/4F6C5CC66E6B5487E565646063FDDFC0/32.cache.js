function zH(){zH=s5c;yH=new X2c}
function RBc(a,b,c,d){var e;a.b.fh(b,c);e=TBc(a.b.j,b,c);wj(e,d,true)}
function AH(d,a){var b=d.b;for(var c in b){b.hasOwnProperty(c)&&a.we(c)}}
function CH(d,a){a=String(a);var b=d.b;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.$d(a);return String(c)}
function EH(){zH();var a;a=Wmb(yH.re(Zhd),60);if(!a){a=new DH;yH.te(Zhd,a)}return a}
function BH(c,b){try{typeof $wnd[b]!='object'&&GH(b);c.b=$wnd[b]}catch(a){GH(b)}}
function GH(a){throw new Y3c(kad+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function DH(){this.c='Dictionary userInfo';BH(this,Zhd);if(!this.b){throw new Y3c("Cannot find JavaScript object with the name 'userInfo'")}}
function c1b(){var a,b,c,d,e,f,g,i,j,k,n;f=new QOc;g=new dzc('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.db.dir=I9c;Et(g.db.style,'textAlign',Y9c);NOc(f,new dzc('<b>This example interacts with the following JavaScript variable:<\/b>'));NOc(f,g);j=new JBc;b=j.k;i=EH();e=(n=new d3c,AH(i,n),n);a=0;for(d=$_c(YO(e.b));d.b.Ce();){c=Wmb(e0c(d),1);k=CH(i,c);ABc(j,0,a,c);RBc(b,0,a,'cw-DictionaryExample-header');ABc(j,1,a,k);RBc(b,1,a,'cw-DictionaryExample-data');++a}NOc(f,new dzc('<br><br>'));NOc(f,j);return f}
var Zhd='userInfo';EKb(370,1,{60:1},DH);_.$d=function FH(a){var b;b="Cannot find '"+a+"' in "+this;throw new Y3c(b)};_.tS=function HH(){return this.c};var yH;EKb(731,1,m6c);_.qc=function i1b(){iNb(this.b,c1b())};var Isb=wWc(Udd,sbd,370);_6c(Vn)(32);