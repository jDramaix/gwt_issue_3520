function zyb(a){this.a=a}
function wyb(a,b){this.a=a;this.b=b}
function syb(a){var b,c,d;b=Vsc((cYb(),Ir(a.a.cb,dLc)));c=Vsc(Ir(a.b.cb,dLc));d=Vsc(Ir(a.c.cb,dLc));e4b(a.d,"Utilisateur '"+b+"' a de s\xE9curit\xE9 '"+c+"' et ne peuvent acc\xE9der aux '"+d+gHc)}
function ryb(a){var b,c,d,e,f,g;d=new U6b;b=mV(d.j,98);cYb();Sr(d.o,oJc,5);g=Yhb(x3);e=new z_b(g);rj(e,new wyb(a,g),(ky(),ky(),jy));f=new L8b;Sr(f.e,oJc,3);I8b(f,new n4b(mOc));I8b(f,e);O6b(d,0,0,f);Sr(b7b(b,0),cLc,2);L6b(d,1,0,'<b>Message mod\xE8le:<\/b>');L6b(d,1,1,"Utilisateur '{0}' a de s\xE9curit\xE9 '{1}' et ne peuvent acc\xE9der aux '{2}'");a.a=new Ecc;ucc(a.a,'amelie');L6b(d,2,0,nOc);O6b(d,2,1,a.a);a.b=new Ecc;ucc(a.b,'guest');L6b(d,3,0,'<b>Param\xE8tre {1}:<\/b>');O6b(d,3,1,a.b);a.c=new Ecc;ucc(a.c,'/secure/blueprints.xml');L6b(d,4,0,'<b>Param\xE8tre {2}:<\/b>');O6b(d,4,1,a.c);a.d=new l4b;L6b(d,5,0,cOc);O6b(d,5,1,a.d);g7b(b,5,0,(f8b(),e8b));c=new zyb(a);rj(a.a,c,(Py(),Py(),Oy));rj(a.b,c,Oy);rj(a.c,c,Oy);syb(a);return d}
Gfb(670,1,pDc,wyb);_.Dc=function xyb(a){Rhb(this.a,this.b+kOc)};Gfb(671,1,aDc,zyb);_.Fc=function Ayb(a){syb(this.a)};Gfb(672,1,sDc);_.lc=function Eyb(){pib(this.b,ryb(this.a))};var x3=Grc(lKc,'ErrorMessages'),k3=Erc(lKc,'CwMessagesExample$1',670),l3=Erc(lKc,'CwMessagesExample$2',671);fEc(Jn)(29);