function KT(){}
function acc(a,b){nC(a.b,b)}
function gFb(a,b){this.c=a;this.b=b}
function jFb(a,b){this.c=a;this.b=b}
function JT(){JT=TBc;IT=new KT}
function hU(a){return kgb(UT,a)}
function Nkc(b){try{return b.selectionStart}catch(a){return 0}}
function Okc(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function $Eb(a,b){K3b(b,'S\xE9lectionn\xE9: '+a.eh()+ZFc+a.fh())}
function ncc(){icc();mcc.call(this,Zr($doc,'password'),'gwt-PasswordTextBox')}
function YEb(a,b){var c,d;c=new s8b;LXb();Rr(c.f,NIc,4);p8b(c,a);if(b){d=new O3b('S\xE9lectionn\xE9: 0, 0');rj(a,new gFb(a,d),(Jy(),Jy(),Iy));rj(a,new jFb(a,d),(ey(),ey(),dy));p8b(c,d)}return c}
function ZEb(){var a,b,c,d,e,f;f=new Fjc;LXb();Rr(f.f,NIc,5);d=new lcc;gjc(d.db,sEc,'cwBasicText-textbox');acc(d,(JT(),JT(),IT));b=new lcc;gjc(b.db,sEc,'cwBasicText-textbox-disabled');bcc(b,DLc);Qr(b.db,sKc,true);Cjc(f,new T3b('<b>Zone de texte normale:<\/b>'));Cjc(f,YEb(d,true));Cjc(f,YEb(b,false));c=new ncc;gjc(c.db,sEc,'cwBasicText-password');a=new ncc;gjc(a.db,sEc,'cwBasicText-password-disabled');bcc(a,DLc);Qr(a.db,sKc,true);Cjc(f,new T3b('<br><br><b>Zone de texte &laquo;mot de passe&raquo;:<\/b>'));Cjc(f,YEb(c,true));Cjc(f,YEb(a,false));e=new uhc;gjc(e.db,sEc,'cwBasicText-textarea');e.db.rows=5;Cjc(f,new T3b('<br><br><b>Zone de texte:<\/b>'));Cjc(f,YEb(e,true));return f}
var DLc='lecture seulement';xfb(386,387,{},KT);_.ze=function LT(a){return hU((bU(),a))?(VF(),UF):(VF(),TF)};var IT;xfb(771,1,MCc);_.mc=function eFb(){bib(this.b,ZEb())};xfb(772,1,uCc,gFb);_.Fc=function hFb(a){$Eb(this.c,this.b)};xfb(773,1,JCc,jFb);_.Dc=function kFb(a){$Eb(this.c,this.b)};xfb(1114,994,_Bc);_.eh=function dcc(){return Nkc(this.db)};_.fh=function ecc(){return Okc(this.db)};xfb(1111,1112,_Bc,ncc);xfb(1167,1113,_Bc);_.eh=function vhc(){return Nkc(this.db)};_.fh=function whc(){return Okc(this.db)};var H4=Yqc(GJc,'CwBasicText$2',772),I4=Yqc(GJc,'CwBasicText$3',773),E9=Yqc(AJc,'PasswordTextBox',1111),c_=Yqc(aKc,'AnyRtlDirectionEstimator',386);zDc(Jn)(18);