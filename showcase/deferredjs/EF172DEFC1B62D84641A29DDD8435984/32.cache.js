function zH(){zH=w5c;yH=new _2c}
function SBc(a,b,c,d){var e;a.b.fh(b,c);e=UBc(a.b.j,b,c);wj(e,d,true)}
function AH(d,a){var b=d.b;for(var c in b){b.hasOwnProperty(c)&&a.we(c)}}
function CH(d,a){a=String(a);var b=d.b;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.$d(a);return String(c)}
function EH(){zH();var a;a=Wmb(yH.re(bid),60);if(!a){a=new DH;yH.te(bid,a)}return a}
function BH(c,b){try{typeof $wnd[b]!='object'&&GH(b);c.b=$wnd[b]}catch(a){GH(b)}}
function GH(a){throw new a4c(oad+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function DH(){this.c='Dictionary userInfo';BH(this,bid);if(!this.b){throw new a4c("Cannot find JavaScript object with the name 'userInfo'")}}
function c1b(){var a,b,c,d,e,f,g,i,j,k,n;f=new ROc;g=new dzc('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.db.dir=M9c;Et(g.db.style,'textAlign',aad);OOc(f,new dzc('<b>This example interacts with the following JavaScript variable:<\/b>'));OOc(f,g);j=new KBc;b=j.k;i=EH();e=(n=new h3c,AH(i,n),n);a=0;for(d=c0c(YO(e.b));d.b.Ce();){c=Wmb(i0c(d),1);k=CH(i,c);BBc(j,0,a,c);SBc(b,0,a,'cw-DictionaryExample-header');BBc(j,1,a,k);SBc(b,1,a,'cw-DictionaryExample-data');++a}OOc(f,new dzc('<br><br>'));OOc(f,j);return f}
var bid='userInfo';EKb(370,1,{60:1},DH);_.$d=function FH(a){var b;b="Cannot find '"+a+"' in "+this;throw new a4c(b)};_.tS=function HH(){return this.c};var yH;EKb(731,1,q6c);_.qc=function i1b(){iNb(this.b,c1b())};var Isb=AWc(Ydd,wbd,370);d7c(Vn)(32);