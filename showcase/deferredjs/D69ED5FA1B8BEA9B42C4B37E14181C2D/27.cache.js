function Mxb(a){this.b=a}
function Jxb(a,b){this.b=a;this.c=b}
function zU(a,b){var c;c=TU((OU(),b));return AU(a,c,b,false)}
function Fxb(a){var b,c,d;b=Ftc((GYb(),ns(a.b.db,_Lc)));c=Ftc(ns(a.c.db,_Lc));d=Ftc(ns(a.d.db,_Lc));K4b(a.g,ePc+b+fPc+c+gPc+d+bIc);P4b(a.e,ePc+zU(a.f,b)+fPc+Yhb(c)+gPc+zU(a.f,d)+bIc)}
function Exb(a){var b,c,d,e,f,g;d=new x7b;b=SV(d.k,97);GYb();xs(d.p,kKc,5);g=Fib(z3);e=new d0b(g);Dj(e,new Jxb(a,g),(Ry(),Ry(),Qy));f=new q9b;xs(f.f,kKc,3);n9b(f,new T4b("Cet exemple interagit avec l'interface \uFFFDchantillon:"));n9b(f,e);r7b(d,0,0,f);xs(G7b(b,0),$Lc,2);o7b(d,1,0,'<b>Mod\uFFFDle de message:<\/b>');o7b(d,1,1,"Utilisateur {0} ({1}  postes) a ajout\xE9 un commentaire sur '{2}'");a.b=new kdc;adc(a.b,(LG(),'\u05EA\u05D5\u05DE\u05E8 \u05D2\u05E8\u05D9\u05DF'));o7b(d,2,0,'<b>Argument {0}:<\/b>');r7b(d,2,1,a.b);a.c=new kdc;adc(a.c,'16');o7b(d,3,0,'<b>Argument {1}:<\/b>');r7b(d,3,1,a.c);a.d=new kdc;adc(a.d,'\u05DB\u05DE\u05D4 \u05D7\u05D5\u05DC \u05D9\u05E9 \u05D1\u05D7\u05D5\u05E3?');o7b(d,4,0,'<b>Argument {2}:<\/b>');r7b(d,4,1,a.d);a.g=new R4b;o7b(d,5,0,'<b>Message mis en forme sans BidiFormatter:<\/b>');r7b(d,5,1,a.g);L7b(b,5,0,(M8b(),L8b));a.e=new R4b;o7b(d,6,0,'<b>Message mis en forme avec BidiFormatter:<\/b>');r7b(d,6,1,a.e);L7b(b,6,0,L8b);c=new Mxb(a);Dj(a.b,c,(uz(),uz(),tz));Dj(a.c,c,tz);Dj(a.d,c,tz);Fxb(a);return d}
var gPc="  postes) a ajout\xE9 un commentaire sur '",ePc='Utilisateur ';sgb(651,1,aEc,Jxb);_.Lc=function Kxb(a){yib(this.b,this.c+hPc)};sgb(652,1,NDc,Mxb);_.Nc=function Nxb(a){Fxb(this.b)};sgb(653,1,dEc);_.qc=function Rxb(){Yib(this.c,Exb(this.b))};var z3=psc(hLc,'BlogMessages'),C3=nsc(hLc,'CwBidiFormatting$1',651),D3=nsc(hLc,'CwBidiFormatting$2',652);SEc(Vn)(27);