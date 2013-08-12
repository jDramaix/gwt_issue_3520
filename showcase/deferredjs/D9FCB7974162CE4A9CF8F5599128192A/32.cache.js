function zE(){zE=Zoc;yE=new Cmc}
function AE(d,a){var b=d.b;for(var c in b){b.hasOwnProperty(c)&&a.md(c)}}
function PVb(a,b,c,d){var e;a.b.Xf(b,c);e=RVb(a.b.j,b,c);kj(e,d,true)}
function EE(){zE();var a;a=GI(yE.gd(PAc),60);if(!a){a=new DE;yE.jd(PAc,a)}return a}
function BE(c,b){try{typeof $wnd[b]!='object'&&GE(b);c.b=$wnd[b]}catch(a){GE(b)}}
function GE(a){throw new Dnc(Jtc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function CE(d,a){a=String(a);var b=d.b;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.cd(a);return String(c)}
function DE(){this.c='Dictionary userInfo';BE(this,PAc);if(!this.b){throw new Dnc("Cannot find JavaScript object with the name 'userInfo'")}}
function clb(){var a,b,c,d,e,f,g,i,j,k,n;f=new L6b;g=new ZSb('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.db.dir=btc;Ts(g.db.style,'textAlign',vtc);I6b(f,new ZSb('<b>\u8FD9\u4E2A\u4F8B\u5B50\u4F7F\u7528\u4E0B\u5217Javascript\u7684\u53D8\u91CF\uFF1A <\/b>'));I6b(f,g);j=new HVb;b=j.k;i=EE();e=(n=new Kmc,AE(i,n),n);a=0;for(d=Fjc(FF(e.b));d.b.sd();){c=GI(Ljc(d),1);k=CE(i,c);yVb(j,0,a,c);PVb(b,0,a,'cw-DictionaryExample-header');yVb(j,1,a,k);PVb(b,1,a,'cw-DictionaryExample-data');++a}I6b(f,new ZSb('<br><br>'));I6b(f,j);return f}
var PAc='userInfo';E2(345,1,{60:1},DE);_.cd=function FE(a){var b;b="Cannot find '"+a+"' in "+this;throw new Dnc(b)};_.tS=function HE(){return this.c};var yE;E2(643,1,Spc);_.mc=function ilb(){i5(this.b,clb())};var VN=cec(Swc,'Dictionary',345);Fqc(Jn)(32);