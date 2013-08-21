function RT(){}
function tcc(a,b){uC(a.a,b)}
function uFb(a,b){this.b=a;this.a=b}
function xFb(a,b){this.b=a;this.a=b}
function oU(a){return ygb(_T,a)}
function QT(){QT=zCc;PT=new RT}
function qlc(b){try{return b.selectionStart}catch(a){return 0}}
function rlc(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function mFb(a,b){e4b(b,'S\xE9lectionn\xE9: '+a.fh()+CGc+a.gh())}
function Gcc(){Bcc();Fcc.call(this,$r($doc,'password'),'gwt-PasswordTextBox')}
function kFb(a,b){var c,d;c=new L8b;cYb();Sr(c.e,oJc,4);I8b(c,a);if(b){d=new i4b('S\xE9lectionn\xE9: 0, 0');rj(a,new uFb(a,d),(Py(),Py(),Oy));rj(a,new xFb(a,d),(ky(),ky(),jy));I8b(c,d)}return c}
function lFb(){var a,b,c,d,e,f;f=new bkc;cYb();Sr(f.e,oJc,5);d=new Ecc;Ejc(d.cb,$Ec,'cwBasicText-textbox');tcc(d,(QT(),QT(),PT));b=new Ecc;Ejc(b.cb,$Ec,'cwBasicText-textbox-disabled');ucc(b,fMc);Rr(b.cb,WKc,true);$jc(f,new n4b('<b>Zone de texte normale:<\/b>'));$jc(f,kFb(d,true));$jc(f,kFb(b,false));c=new Gcc;Ejc(c.cb,$Ec,'cwBasicText-password');a=new Gcc;Ejc(a.cb,$Ec,'cwBasicText-password-disabled');ucc(a,fMc);Rr(a.cb,WKc,true);$jc(f,new n4b('<br><br><b>Zone de texte &laquo;mot de passe&raquo;:<\/b>'));$jc(f,kFb(c,true));$jc(f,kFb(a,false));e=new Rhc;Ejc(e.cb,$Ec,'cwBasicText-textarea');e.cb.rows=5;$jc(f,new n4b('<br><br><b>Zone de texte:<\/b>'));$jc(f,kFb(e,true));return f}
var fMc='lecture seulement';Gfb(389,390,{},RT);_.ze=function ST(a){return oU((iU(),a))?(aG(),_F):(aG(),$F)};var PT;Gfb(775,1,sDc);_.lc=function sFb(){pib(this.a,lFb())};Gfb(776,1,aDc,uFb);_.Fc=function vFb(a){mFb(this.b,this.a)};Gfb(777,1,pDc,xFb);_.Dc=function yFb(a){mFb(this.b,this.a)};Gfb(1121,1003,HCc);_.fh=function wcc(){return qlc(this.cb)};_.gh=function xcc(){return rlc(this.cb)};Gfb(1118,1119,HCc,Gcc);Gfb(1174,1120,HCc);_.fh=function Shc(){return qlc(this.cb)};_.gh=function Thc(){return rlc(this.cb)};var O4=Erc(iKc,'CwBasicText$2',776),P4=Erc(iKc,'CwBasicText$3',777),M9=Erc(cKc,'PasswordTextBox',1118),i_=Erc(EKc,'AnyRtlDirectionEstimator',389);fEc(Jn)(18);