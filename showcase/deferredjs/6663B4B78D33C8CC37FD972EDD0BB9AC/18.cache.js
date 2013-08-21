function KT(){}
function acc(a,b){nC(a.b,b)}
function gFb(a,b){this.c=a;this.b=b}
function jFb(a,b){this.c=a;this.b=b}
function JT(){JT=WBc;IT=new KT}
function hU(a){return kgb(UT,a)}
function Nkc(b){try{return b.selectionStart}catch(a){return 0}}
function Okc(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function $Eb(a,b){K3b(b,'S\xE9lectionn\xE9: '+a.eh()+aGc+a.fh())}
function ncc(){icc();mcc.call(this,Zr($doc,'password'),'gwt-PasswordTextBox')}
function YEb(a,b){var c,d;c=new s8b;LXb();Rr(c.f,QIc,4);p8b(c,a);if(b){d=new O3b('S\xE9lectionn\xE9: 0, 0');rj(a,new gFb(a,d),(Jy(),Jy(),Iy));rj(a,new jFb(a,d),(ey(),ey(),dy));p8b(c,d)}return c}
function ZEb(){var a,b,c,d,e,f;f=new Fjc;LXb();Rr(f.f,QIc,5);d=new lcc;gjc(d.db,vEc,'cwBasicText-textbox');acc(d,(JT(),JT(),IT));b=new lcc;gjc(b.db,vEc,'cwBasicText-textbox-disabled');bcc(b,GLc);Qr(b.db,vKc,true);Cjc(f,new T3b('<b>Zone de texte normale:<\/b>'));Cjc(f,YEb(d,true));Cjc(f,YEb(b,false));c=new ncc;gjc(c.db,vEc,'cwBasicText-password');a=new ncc;gjc(a.db,vEc,'cwBasicText-password-disabled');bcc(a,GLc);Qr(a.db,vKc,true);Cjc(f,new T3b('<br><br><b>Zone de texte &laquo;mot de passe&raquo;:<\/b>'));Cjc(f,YEb(c,true));Cjc(f,YEb(a,false));e=new uhc;gjc(e.db,vEc,'cwBasicText-textarea');e.db.rows=5;Cjc(f,new T3b('<br><br><b>Zone de texte:<\/b>'));Cjc(f,YEb(e,true));return f}
var GLc='lecture seulement';xfb(386,387,{},KT);_.ze=function LT(a){return hU((bU(),a))?(VF(),UF):(VF(),TF)};var IT;xfb(771,1,PCc);_.mc=function eFb(){bib(this.b,ZEb())};xfb(772,1,xCc,gFb);_.Fc=function hFb(a){$Eb(this.c,this.b)};xfb(773,1,MCc,jFb);_.Dc=function kFb(a){$Eb(this.c,this.b)};xfb(1114,994,cCc);_.eh=function dcc(){return Nkc(this.db)};_.fh=function ecc(){return Okc(this.db)};xfb(1111,1112,cCc,ncc);xfb(1167,1113,cCc);_.eh=function vhc(){return Nkc(this.db)};_.fh=function whc(){return Okc(this.db)};var H4=_qc(JJc,'CwBasicText$2',772),I4=_qc(JJc,'CwBasicText$3',773),E9=_qc(DJc,'PasswordTextBox',1111),c_=_qc(dKc,'AnyRtlDirectionEstimator',386);CDc(Jn)(18);