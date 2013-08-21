function zlb(){}
function lHc(a,b){$C(a.b,b)}
function n8b(a,b){this.c=a;this.b=b}
function q8b(a,b){this.c=a;this.b=b}
function Ylb(a){return rLb(Jlb,a)}
function ylb(){ylb=v5c;xlb=new zlb}
function f8b(a,b){Wyc(b,'Selected: '+a.mh()+N9c+a.nh())}
function lQc(b){try{return b.selectionStart}catch(a){return 0}}
function mQc(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function yHc(){tHc();xHc.call(this,Fs($doc,'password'),'gwt-PasswordTextBox')}
function d8b(a,b){var c,d;c=new CDc;Sqc();xs(c.f,Scd,4);zDc(c,a);if(b){d=new $yc('Selected: 0, 0');Dj(a,new n8b(a,d),(uz(),uz(),tz));Dj(a,new q8b(a,d),(Ry(),Ry(),Qy));zDc(c,d)}return c}
function e8b(){var a,b,c,d,e,f;f=new QOc;Sqc();xs(f.f,Scd,5);d=new wHc;rOc(d.db,Y7c,'cwBasicText-textbox');lHc(d,(ylb(),ylb(),xlb));b=new wHc;rOc(b.db,Y7c,'cwBasicText-textbox-disabled');mHc(b,Hfd);ws(b.db,Ced,true);NOc(f,new dzc('<b>Normal text box:<\/b>'));NOc(f,d8b(d,true));NOc(f,d8b(b,false));c=new yHc;rOc(c.db,Y7c,'cwBasicText-password');a=new yHc;rOc(a.db,Y7c,'cwBasicText-password-disabled');mHc(a,Hfd);ws(a.db,Ced,true);NOc(f,new dzc('<br><br><b>Password text box:<\/b>'));NOc(f,d8b(c,true));NOc(f,d8b(a,false));e=new FMc;rOc(e.db,Y7c,'cwBasicText-textarea');e.db.rows=5;NOc(f,new dzc('<br><br><b>Text area:<\/b>'));NOc(f,d8b(e,true));return f}
var Hfd='read only';EKb(453,454,{},zlb);_.He=function Alb(a){return Ylb((Slb(),a))?(NH(),MH):(NH(),LH)};var xlb;EKb(838,1,p6c);_.qc=function l8b(){iNb(this.b,e8b())};EKb(839,1,Z5c,n8b);_.Nc=function o8b(a){f8b(this.c,this.b)};EKb(840,1,m6c,q8b);_.Lc=function r8b(a){f8b(this.c,this.b)};EKb(1183,1064,E5c);_.mh=function oHc(){return lQc(this.db)};_.nh=function pHc(){return mQc(this.db)};EKb(1180,1181,E5c,yHc);EKb(1236,1182,E5c);_.mh=function GMc(){return lQc(this.db)};_.nh=function HMc(){return mQc(this.db)};var Kzb=zWc(Mdd,'CwBasicText$2',839),Lzb=zWc(Mdd,'CwBasicText$3',840),IEb=zWc(Gdd,'PasswordTextBox',1180),fub=zWc(ged,'AnyRtlDirectionEstimator',453);c7c(Vn)(18);