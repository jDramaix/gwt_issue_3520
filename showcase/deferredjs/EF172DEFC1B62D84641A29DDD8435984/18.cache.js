function zlb(){}
function mHc(a,b){$C(a.b,b)}
function n8b(a,b){this.c=a;this.b=b}
function q8b(a,b){this.c=a;this.b=b}
function Ylb(a){return rLb(Jlb,a)}
function ylb(){ylb=w5c;xlb=new zlb}
function f8b(a,b){Wyc(b,'Selected: '+a.mh()+O9c+a.nh())}
function mQc(b){try{return b.selectionStart}catch(a){return 0}}
function nQc(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function zHc(){uHc();yHc.call(this,Fs($doc,'password'),'gwt-PasswordTextBox')}
function d8b(a,b){var c,d;c=new DDc;Sqc();xs(c.f,Tcd,4);ADc(c,a);if(b){d=new $yc('Selected: 0, 0');Dj(a,new n8b(a,d),(uz(),uz(),tz));Dj(a,new q8b(a,d),(Ry(),Ry(),Qy));ADc(c,d)}return c}
function e8b(){var a,b,c,d,e,f;f=new ROc;Sqc();xs(f.f,Tcd,5);d=new xHc;sOc(d.db,Z7c,'cwBasicText-textbox');mHc(d,(ylb(),ylb(),xlb));b=new xHc;sOc(b.db,Z7c,'cwBasicText-textbox-disabled');nHc(b,Ifd);ws(b.db,Ded,true);OOc(f,new dzc('<b>Normal text box:<\/b>'));OOc(f,d8b(d,true));OOc(f,d8b(b,false));c=new zHc;sOc(c.db,Z7c,'cwBasicText-password');a=new zHc;sOc(a.db,Z7c,'cwBasicText-password-disabled');nHc(a,Ifd);ws(a.db,Ded,true);OOc(f,new dzc('<br><br><b>Password text box:<\/b>'));OOc(f,d8b(c,true));OOc(f,d8b(a,false));e=new GMc;sOc(e.db,Z7c,'cwBasicText-textarea');e.db.rows=5;OOc(f,new dzc('<br><br><b>Text area:<\/b>'));OOc(f,d8b(e,true));return f}
var Ifd='read only';EKb(453,454,{},zlb);_.He=function Alb(a){return Ylb((Slb(),a))?(NH(),MH):(NH(),LH)};var xlb;EKb(838,1,q6c);_.qc=function l8b(){iNb(this.b,e8b())};EKb(839,1,$5c,n8b);_.Nc=function o8b(a){f8b(this.c,this.b)};EKb(840,1,n6c,q8b);_.Lc=function r8b(a){f8b(this.c,this.b)};EKb(1183,1064,F5c);_.mh=function pHc(){return mQc(this.db)};_.nh=function qHc(){return nQc(this.db)};EKb(1180,1181,F5c,zHc);EKb(1236,1182,F5c);_.mh=function HMc(){return mQc(this.db)};_.nh=function IMc(){return nQc(this.db)};var Kzb=AWc(Ndd,'CwBasicText$2',839),Lzb=AWc(Ndd,'CwBasicText$3',840),IEb=AWc(Hdd,'PasswordTextBox',1180),fub=AWc(hed,'AnyRtlDirectionEstimator',453);d7c(Vn)(18);