function KT(){}
function bcc(a,b){nC(a.b,b)}
function gFb(a,b){this.c=a;this.b=b}
function jFb(a,b){this.c=a;this.b=b}
function JT(){JT=XBc;IT=new KT}
function hU(a){return kgb(UT,a)}
function Okc(b){try{return b.selectionStart}catch(a){return 0}}
function Pkc(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function $Eb(a,b){K3b(b,'S\xE9lectionn\xE9: '+a.eh()+bGc+a.fh())}
function occ(){jcc();ncc.call(this,Zr($doc,'password'),'gwt-PasswordTextBox')}
function YEb(a,b){var c,d;c=new t8b;LXb();Rr(c.f,RIc,4);q8b(c,a);if(b){d=new O3b('S\xE9lectionn\xE9: 0, 0');rj(a,new gFb(a,d),(Jy(),Jy(),Iy));rj(a,new jFb(a,d),(ey(),ey(),dy));q8b(c,d)}return c}
function ZEb(){var a,b,c,d,e,f;f=new Gjc;LXb();Rr(f.f,RIc,5);d=new mcc;hjc(d.db,wEc,'cwBasicText-textbox');bcc(d,(JT(),JT(),IT));b=new mcc;hjc(b.db,wEc,'cwBasicText-textbox-disabled');ccc(b,HLc);Qr(b.db,wKc,true);Djc(f,new T3b('<b>Zone de texte normale:<\/b>'));Djc(f,YEb(d,true));Djc(f,YEb(b,false));c=new occ;hjc(c.db,wEc,'cwBasicText-password');a=new occ;hjc(a.db,wEc,'cwBasicText-password-disabled');ccc(a,HLc);Qr(a.db,wKc,true);Djc(f,new T3b('<br><br><b>Zone de texte &laquo;mot de passe&raquo;:<\/b>'));Djc(f,YEb(c,true));Djc(f,YEb(a,false));e=new vhc;hjc(e.db,wEc,'cwBasicText-textarea');e.db.rows=5;Djc(f,new T3b('<br><br><b>Zone de texte:<\/b>'));Djc(f,YEb(e,true));return f}
var HLc='lecture seulement';xfb(386,387,{},KT);_.ze=function LT(a){return hU((bU(),a))?(VF(),UF):(VF(),TF)};var IT;xfb(771,1,QCc);_.mc=function eFb(){bib(this.b,ZEb())};xfb(772,1,yCc,gFb);_.Fc=function hFb(a){$Eb(this.c,this.b)};xfb(773,1,NCc,jFb);_.Dc=function kFb(a){$Eb(this.c,this.b)};xfb(1114,994,dCc);_.eh=function ecc(){return Okc(this.db)};_.fh=function fcc(){return Pkc(this.db)};xfb(1111,1112,dCc,occ);xfb(1167,1113,dCc);_.eh=function whc(){return Okc(this.db)};_.fh=function xhc(){return Pkc(this.db)};var H4=arc(KJc,'CwBasicText$2',772),I4=arc(KJc,'CwBasicText$3',773),E9=arc(EJc,'PasswordTextBox',1111),c_=arc(eKc,'AnyRtlDirectionEstimator',386);DDc(Jn)(18);