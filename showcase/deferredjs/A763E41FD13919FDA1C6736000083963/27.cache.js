function mxb(a){this.a=a}
function jxb(a,b){this.a=a;this.b=b}
function dU(a,b){var c;c=xU((sU(),b));return eU(a,c,b,false)}
function fxb(a){var b,c,d;b=ctc((zYb(),Hr(a.a.cb,mLc)));c=ctc(Hr(a.b.cb,mLc));d=ctc(Hr(a.c.cb,mLc));p4b(a.f,rOc+b+sOc+c+tOc+d+rHc);u4b(a.d,rOc+dU(a.e,b)+sOc+yhb(c)+tOc+dU(a.e,d)+rHc)}
function exb(a){var b,c,d,e,f,g;d=new c7b;b=wV(d.j,98);zYb();Rr(d.o,wJc,5);g=fib(Z2);e=new K_b(g);qj(e,new jxb(a,g),(uy(),uy(),ty));f=new V8b;Rr(f.e,wJc,3);S8b(f,new y4b("Cet exemple interagit avec l'interface \uFFFDchantillon:"));S8b(f,e);Y6b(d,0,0,f);Rr(l7b(b,0),lLc,2);V6b(d,1,0,'<b>Mod\uFFFDle de message:<\/b>');V6b(d,1,1,"Utilisateur {0} ({1}  postes) a ajout\xE9 un commentaire sur '{2}'");a.a=new Occ;Ecc(a.a,(pG(),'\u05EA\u05D5\u05DE\u05E8 \u05D2\u05E8\u05D9\u05DF'));V6b(d,2,0,'<b>Argument {0}:<\/b>');Y6b(d,2,1,a.a);a.b=new Occ;Ecc(a.b,'16');V6b(d,3,0,'<b>Argument {1}:<\/b>');Y6b(d,3,1,a.b);a.c=new Occ;Ecc(a.c,'\u05DB\u05DE\u05D4 \u05D7\u05D5\u05DC \u05D9\u05E9 \u05D1\u05D7\u05D5\u05E3?');V6b(d,4,0,'<b>Argument {2}:<\/b>');Y6b(d,4,1,a.c);a.f=new w4b;V6b(d,5,0,'<b>Message mis en forme sans BidiFormatter:<\/b>');Y6b(d,5,1,a.f);q7b(b,5,0,(p8b(),o8b));a.d=new w4b;V6b(d,6,0,'<b>Message mis en forme avec BidiFormatter:<\/b>');Y6b(d,6,1,a.d);q7b(b,6,0,o8b);c=new mxb(a);qj(a.a,c,(Zy(),Zy(),Yy));qj(a.b,c,Yy);qj(a.c,c,Yy);fxb(a);return d}
var tOc="  postes) a ajout\xE9 un commentaire sur '",rOc='Utilisateur ';Pfb(649,1,yDc,jxb);_.Dc=function kxb(a){$hb(this.a,this.b+uOc)};Pfb(650,1,jDc,mxb);_.Fc=function nxb(a){fxb(this.a)};Pfb(651,1,BDc);_.lc=function rxb(){yib(this.b,exb(this.a))};var Z2=Prc(uKc,'BlogMessages'),a3=Nrc(uKc,'CwBidiFormatting$1',649),b3=Nrc(uKc,'CwBidiFormatting$2',650);oEc(In)(27);