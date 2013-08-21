function mlb(){}
function UGc(a,b){NC(a.b,b)}
function W7b(a,b){this.c=a;this.b=b}
function Z7b(a,b){this.c=a;this.b=b}
function Llb(a){return $Kb(wlb,a)}
function llb(){llb=Z4c;klb=new mlb}
function O7b(a,b){Gyc(b,'Selected: '+a.ih()+d9c+a.jh())}
function QPc(b){try{return b.selectionStart}catch(a){return 0}}
function RPc(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function fHc(){aHc();eHc.call(this,ls($doc,'password'),'gwt-PasswordTextBox')}
function M7b(a,b){var c,d;c=new kDc;Cqc();ds(c.f,tcd,4);hDc(c,a);if(b){d=new Kyc('Selected: 0, 0');Cj(a,new W7b(a,d),(hz(),hz(),gz));Cj(a,new Z7b(a,d),(Ey(),Ey(),Dy));hDc(c,d)}return c}
function N7b(){var a,b,c,d,e,f;f=new xOc;Cqc();ds(f.f,tcd,5);d=new dHc;$Nc(d.db,z7c,'cwBasicText-textbox');UGc(d,(llb(),llb(),klb));b=new dHc;$Nc(b.db,z7c,'cwBasicText-textbox-disabled');VGc(b,ifd);cs(b.db,ded,true);uOc(f,new Pyc('<b>Normal text box:<\/b>'));uOc(f,M7b(d,true));uOc(f,M7b(b,false));c=new fHc;$Nc(c.db,z7c,'cwBasicText-password');a=new fHc;$Nc(a.db,z7c,'cwBasicText-password-disabled');VGc(a,ifd);cs(a.db,ded,true);uOc(f,new Pyc('<br><br><b>Password text box:<\/b>'));uOc(f,M7b(c,true));uOc(f,M7b(a,false));e=new mMc;$Nc(e.db,z7c,'cwBasicText-textarea');e.db.rows=5;uOc(f,new Pyc('<br><br><b>Text area:<\/b>'));uOc(f,M7b(e,true));return f}
var ifd='read only';lKb(449,450,{},mlb);_.De=function nlb(a){return Llb((Flb(),a))?(AH(),zH):(AH(),yH)};var klb;lKb(834,1,T5c);_.qc=function U7b(){RMb(this.b,N7b())};lKb(835,1,B5c,W7b);_.Jc=function X7b(a){O7b(this.c,this.b)};lKb(836,1,Q5c,Z7b);_.Hc=function $7b(a){O7b(this.c,this.b)};lKb(1178,1060,g5c);_.ih=function XGc(){return QPc(this.db)};_.jh=function YGc(){return RPc(this.db)};lKb(1175,1176,g5c,fHc);lKb(1231,1177,g5c);_.ih=function nMc(){return QPc(this.db)};_.jh=function oMc(){return RPc(this.db)};var tzb=cWc(ndd,'CwBasicText$2',835),uzb=cWc(ndd,'CwBasicText$3',836),rEb=cWc(hdd,'PasswordTextBox',1175),Qtb=cWc(Jdd,'AnyRtlDirectionEstimator',449);G6c(Vn)(18);