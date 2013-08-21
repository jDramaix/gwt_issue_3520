function Okb(){}
function mGc(a,b){nC(a.b,b)}
function llb(a){return wKb(Ykb,a)}
function Nkb(){Nkb=g4c;Mkb=new Okb}
function s7b(a,b){this.c=a;this.b=b}
function v7b(a,b){this.c=a;this.b=b}
function k7b(a,b){Wxc(b,'Selected: '+a.eh()+m8c+a.fh())}
function ZOc(b){try{return b.selectionStart}catch(a){return 0}}
function $Oc(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function zGc(){uGc();yGc.call(this,Zr($doc,'password'),'gwt-PasswordTextBox')}
function i7b(a,b){var c,d;c=new ECc;Xpc();Rr(c.f,wbd,4);BCc(c,a);if(b){d=new $xc('Selected: 0, 0');rj(a,new s7b(a,d),(Jy(),Jy(),Iy));rj(a,new v7b(a,d),(ey(),ey(),dy));BCc(c,d)}return c}
function j7b(){var a,b,c,d,e,f;f=new RNc;Xpc();Rr(f.f,wbd,5);d=new xGc;sNc(d.db,H6c,'cwBasicText-textbox');mGc(d,(Nkb(),Nkb(),Mkb));b=new xGc;sNc(b.db,H6c,'cwBasicText-textbox-disabled');nGc(b,ked);Qr(b.db,fdd,true);ONc(f,new dyc('<b>Normal text box:<\/b>'));ONc(f,i7b(d,true));ONc(f,i7b(b,false));c=new zGc;sNc(c.db,H6c,'cwBasicText-password');a=new zGc;sNc(a.db,H6c,'cwBasicText-password-disabled');nGc(a,ked);Qr(a.db,fdd,true);ONc(f,new dyc('<br><br><b>Password text box:<\/b>'));ONc(f,i7b(c,true));ONc(f,i7b(a,false));e=new GLc;sNc(e.db,H6c,'cwBasicText-textarea');e.db.rows=5;ONc(f,new dyc('<br><br><b>Text area:<\/b>'));ONc(f,i7b(e,true));return f}
var ked='read only';JJb(448,449,{},Okb);_.ze=function Pkb(a){return llb((flb(),a))?(aH(),_G):(aH(),$G)};var Mkb;JJb(833,1,_4c);_.mc=function q7b(){nMb(this.b,j7b())};JJb(834,1,J4c,s7b);_.Fc=function t7b(a){k7b(this.c,this.b)};JJb(835,1,Y4c,v7b);_.Dc=function w7b(a){k7b(this.c,this.b)};JJb(1176,1056,o4c);_.eh=function pGc(){return ZOc(this.db)};_.fh=function qGc(){return $Oc(this.db)};JJb(1173,1174,o4c,zGc);JJb(1229,1175,o4c);_.eh=function HLc(){return ZOc(this.db)};_.fh=function ILc(){return $Oc(this.db)};var Tyb=lVc(pcd,'CwBasicText$2',834),Uyb=lVc(pcd,'CwBasicText$3',835),QDb=lVc(jcd,'PasswordTextBox',1173),otb=lVc(Lcd,'AnyRtlDirectionEstimator',448);O5c(Jn)(18);