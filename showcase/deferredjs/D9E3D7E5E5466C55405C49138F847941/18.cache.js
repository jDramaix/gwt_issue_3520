function RT(){}
function scc(a,b){uC(a.a,b)}
function uFb(a,b){this.b=a;this.a=b}
function xFb(a,b){this.b=a;this.a=b}
function oU(a){return ygb(_T,a)}
function QT(){QT=vCc;PT=new RT}
function plc(b){try{return b.selectionStart}catch(a){return 0}}
function qlc(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function mFb(a,b){e4b(b,'S\xE9lectionn\xE9: '+a.fh()+yGc+a.gh())}
function Fcc(){Acc();Ecc.call(this,$r($doc,'password'),'gwt-PasswordTextBox')}
function kFb(a,b){var c,d;c=new K8b;cYb();Sr(c.e,kJc,4);H8b(c,a);if(b){d=new i4b('S\xE9lectionn\xE9: 0, 0');rj(a,new uFb(a,d),(Py(),Py(),Oy));rj(a,new xFb(a,d),(ky(),ky(),jy));H8b(c,d)}return c}
function lFb(){var a,b,c,d,e,f;f=new akc;cYb();Sr(f.e,kJc,5);d=new Dcc;Djc(d.cb,WEc,'cwBasicText-textbox');scc(d,(QT(),QT(),PT));b=new Dcc;Djc(b.cb,WEc,'cwBasicText-textbox-disabled');tcc(b,bMc);Rr(b.cb,SKc,true);Zjc(f,new n4b('<b>Zone de texte normale:<\/b>'));Zjc(f,kFb(d,true));Zjc(f,kFb(b,false));c=new Fcc;Djc(c.cb,WEc,'cwBasicText-password');a=new Fcc;Djc(a.cb,WEc,'cwBasicText-password-disabled');tcc(a,bMc);Rr(a.cb,SKc,true);Zjc(f,new n4b('<br><br><b>Zone de texte &laquo;mot de passe&raquo;:<\/b>'));Zjc(f,kFb(c,true));Zjc(f,kFb(a,false));e=new Qhc;Djc(e.cb,WEc,'cwBasicText-textarea');e.cb.rows=5;Zjc(f,new n4b('<br><br><b>Zone de texte:<\/b>'));Zjc(f,kFb(e,true));return f}
var bMc='lecture seulement';Gfb(389,390,{},RT);_.ze=function ST(a){return oU((iU(),a))?(aG(),_F):(aG(),$F)};var PT;Gfb(775,1,oDc);_.lc=function sFb(){pib(this.a,lFb())};Gfb(776,1,YCc,uFb);_.Fc=function vFb(a){mFb(this.b,this.a)};Gfb(777,1,lDc,xFb);_.Dc=function yFb(a){mFb(this.b,this.a)};Gfb(1121,1003,DCc);_.fh=function vcc(){return plc(this.cb)};_.gh=function wcc(){return qlc(this.cb)};Gfb(1118,1119,DCc,Fcc);Gfb(1174,1120,DCc);_.fh=function Rhc(){return plc(this.cb)};_.gh=function Shc(){return qlc(this.cb)};var O4=Arc(eKc,'CwBasicText$2',776),P4=Arc(eKc,'CwBasicText$3',777),M9=Arc($Jc,'PasswordTextBox',1118),i_=Arc(AKc,'AnyRtlDirectionEstimator',389);bEc(Jn)(18);