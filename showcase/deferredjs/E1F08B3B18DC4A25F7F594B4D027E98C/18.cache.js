function Okb(){}
function nGc(a,b){nC(a.b,b)}
function llb(a){return wKb(Ykb,a)}
function Nkb(){Nkb=h4c;Mkb=new Okb}
function s7b(a,b){this.c=a;this.b=b}
function v7b(a,b){this.c=a;this.b=b}
function k7b(a,b){Wxc(b,'Selected: '+a.eh()+n8c+a.fh())}
function $Oc(b){try{return b.selectionStart}catch(a){return 0}}
function _Oc(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function AGc(){vGc();zGc.call(this,Zr($doc,'password'),'gwt-PasswordTextBox')}
function i7b(a,b){var c,d;c=new FCc;Xpc();Rr(c.f,xbd,4);CCc(c,a);if(b){d=new $xc('Selected: 0, 0');rj(a,new s7b(a,d),(Jy(),Jy(),Iy));rj(a,new v7b(a,d),(ey(),ey(),dy));CCc(c,d)}return c}
function j7b(){var a,b,c,d,e,f;f=new SNc;Xpc();Rr(f.f,xbd,5);d=new yGc;tNc(d.db,I6c,'cwBasicText-textbox');nGc(d,(Nkb(),Nkb(),Mkb));b=new yGc;tNc(b.db,I6c,'cwBasicText-textbox-disabled');oGc(b,led);Qr(b.db,gdd,true);PNc(f,new dyc('<b>Normal text box:<\/b>'));PNc(f,i7b(d,true));PNc(f,i7b(b,false));c=new AGc;tNc(c.db,I6c,'cwBasicText-password');a=new AGc;tNc(a.db,I6c,'cwBasicText-password-disabled');oGc(a,led);Qr(a.db,gdd,true);PNc(f,new dyc('<br><br><b>Password text box:<\/b>'));PNc(f,i7b(c,true));PNc(f,i7b(a,false));e=new HLc;tNc(e.db,I6c,'cwBasicText-textarea');e.db.rows=5;PNc(f,new dyc('<br><br><b>Text area:<\/b>'));PNc(f,i7b(e,true));return f}
var led='read only';JJb(448,449,{},Okb);_.ze=function Pkb(a){return llb((flb(),a))?(aH(),_G):(aH(),$G)};var Mkb;JJb(833,1,a5c);_.mc=function q7b(){nMb(this.b,j7b())};JJb(834,1,K4c,s7b);_.Fc=function t7b(a){k7b(this.c,this.b)};JJb(835,1,Z4c,v7b);_.Dc=function w7b(a){k7b(this.c,this.b)};JJb(1176,1056,p4c);_.eh=function qGc(){return $Oc(this.db)};_.fh=function rGc(){return _Oc(this.db)};JJb(1173,1174,p4c,AGc);JJb(1229,1175,p4c);_.eh=function ILc(){return $Oc(this.db)};_.fh=function JLc(){return _Oc(this.db)};var Tyb=mVc(qcd,'CwBasicText$2',834),Uyb=mVc(qcd,'CwBasicText$3',835),QDb=mVc(kcd,'PasswordTextBox',1173),otb=mVc(Mcd,'AnyRtlDirectionEstimator',448);P5c(Jn)(18);