function PE(){PE=Kpc;OE=new nnc}
function QE(d,a){var b=d.b;for(var c in b){b.hasOwnProperty(c)&&a.vd(c)}}
function mWb(a,b,c,d){var e;a.b.eg(b,c);e=oWb(a.b.j,b,c);vj(e,d,true)}
function UE(){PE();var a;a=$I(OE.qd(LBc),59);if(!a){a=new TE;OE.sd(LBc,a)}return a}
function RE(c,b){try{typeof $wnd[b]!='object'&&WE(b);c.b=$wnd[b]}catch(a){WE(b)}}
function WE(a){throw new ooc(tuc+a+"' is not a JavaScript object and cannot be used as a Dictionary")}
function SE(d,a){a=String(a);var b=d.b;var c=b[a];(c==null||!b.hasOwnProperty(a))&&d.md(a);return String(c)}
function TE(){this.c='Dictionary userInfo';RE(this,LBc);if(!this.b){throw new ooc("Cannot find JavaScript object with the name 'userInfo'")}}
function vlb(){var a,b,c,d,e,f,g,i,j,k,n;f=new i7b;g=new zTb('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');g.db.dir=Otc;rt(g.db.style,'textAlign',fuc);f7b(f,new zTb('<b>This example interacts with the following JavaScript variable:<\/b>'));f7b(f,g);j=new eWb;b=j.k;i=UE();e=(n=new vnc,QE(i,n),n);a=0;for(d=qkc(VF(e.b));d.b.Bd();){c=$I(wkc(d),1);k=SE(i,c);XVb(j,0,a,c);mWb(b,0,a,'cw-DictionaryExample-header');XVb(j,1,a,k);mWb(b,1,a,'cw-DictionaryExample-data');++a}f7b(f,new zTb('<br><br>'));f7b(f,j);return f}
var LBc='userInfo';X2(343,1,{59:1},TE);_.md=function VE(a){var b;b="Cannot find '"+a+"' in "+this;throw new ooc(b)};_.tS=function XE(){return this.c};var OE;X2(640,1,Eqc);_.qc=function Blb(){B5(this.b,vlb())};var lO=Pec(Lxc,cvc,343);rrc(Vn)(32);