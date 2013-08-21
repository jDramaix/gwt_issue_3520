function RT(){}
function scc(a,b){uC(a.a,b)}
function uFb(a,b){this.b=a;this.a=b}
function xFb(a,b){this.b=a;this.a=b}
function oU(a){return ygb(_T,a)}
function QT(){QT=yCc;PT=new RT}
function plc(b){try{return b.selectionStart}catch(a){return 0}}
function qlc(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function mFb(a,b){e4b(b,'S\xE9lectionn\xE9: '+a.fh()+BGc+a.gh())}
function Fcc(){Acc();Ecc.call(this,$r($doc,'password'),'gwt-PasswordTextBox')}
function kFb(a,b){var c,d;c=new K8b;cYb();Sr(c.e,nJc,4);H8b(c,a);if(b){d=new i4b('S\xE9lectionn\xE9: 0, 0');rj(a,new uFb(a,d),(Py(),Py(),Oy));rj(a,new xFb(a,d),(ky(),ky(),jy));H8b(c,d)}return c}
function lFb(){var a,b,c,d,e,f;f=new akc;cYb();Sr(f.e,nJc,5);d=new Dcc;Djc(d.cb,ZEc,'cwBasicText-textbox');scc(d,(QT(),QT(),PT));b=new Dcc;Djc(b.cb,ZEc,'cwBasicText-textbox-disabled');tcc(b,eMc);Rr(b.cb,VKc,true);Zjc(f,new n4b('<b>Zone de texte normale:<\/b>'));Zjc(f,kFb(d,true));Zjc(f,kFb(b,false));c=new Fcc;Djc(c.cb,ZEc,'cwBasicText-password');a=new Fcc;Djc(a.cb,ZEc,'cwBasicText-password-disabled');tcc(a,eMc);Rr(a.cb,VKc,true);Zjc(f,new n4b('<br><br><b>Zone de texte &laquo;mot de passe&raquo;:<\/b>'));Zjc(f,kFb(c,true));Zjc(f,kFb(a,false));e=new Qhc;Djc(e.cb,ZEc,'cwBasicText-textarea');e.cb.rows=5;Zjc(f,new n4b('<br><br><b>Zone de texte:<\/b>'));Zjc(f,kFb(e,true));return f}
var eMc='lecture seulement';Gfb(389,390,{},RT);_.ze=function ST(a){return oU((iU(),a))?(aG(),_F):(aG(),$F)};var PT;Gfb(775,1,rDc);_.lc=function sFb(){pib(this.a,lFb())};Gfb(776,1,_Cc,uFb);_.Fc=function vFb(a){mFb(this.b,this.a)};Gfb(777,1,oDc,xFb);_.Dc=function yFb(a){mFb(this.b,this.a)};Gfb(1121,1003,GCc);_.fh=function vcc(){return plc(this.cb)};_.gh=function wcc(){return qlc(this.cb)};Gfb(1118,1119,GCc,Fcc);Gfb(1174,1120,GCc);_.fh=function Rhc(){return plc(this.cb)};_.gh=function Shc(){return qlc(this.cb)};var O4=Drc(hKc,'CwBasicText$2',776),P4=Drc(hKc,'CwBasicText$3',777),M9=Drc(bKc,'PasswordTextBox',1118),i_=Drc(DKc,'AnyRtlDirectionEstimator',389);eEc(Jn)(18);