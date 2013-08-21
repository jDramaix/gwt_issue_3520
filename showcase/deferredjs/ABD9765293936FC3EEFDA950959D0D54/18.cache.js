function mlb(){}
function VGc(a,b){NC(a.b,b)}
function W7b(a,b){this.c=a;this.b=b}
function Z7b(a,b){this.c=a;this.b=b}
function Llb(a){return $Kb(wlb,a)}
function llb(){llb=$4c;klb=new mlb}
function O7b(a,b){Gyc(b,'Selected: '+a.ih()+e9c+a.jh())}
function RPc(b){try{return b.selectionStart}catch(a){return 0}}
function SPc(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function gHc(){bHc();fHc.call(this,ls($doc,'password'),'gwt-PasswordTextBox')}
function M7b(a,b){var c,d;c=new lDc;Cqc();ds(c.f,ucd,4);iDc(c,a);if(b){d=new Kyc('Selected: 0, 0');Cj(a,new W7b(a,d),(hz(),hz(),gz));Cj(a,new Z7b(a,d),(Ey(),Ey(),Dy));iDc(c,d)}return c}
function N7b(){var a,b,c,d,e,f;f=new yOc;Cqc();ds(f.f,ucd,5);d=new eHc;_Nc(d.db,A7c,'cwBasicText-textbox');VGc(d,(llb(),llb(),klb));b=new eHc;_Nc(b.db,A7c,'cwBasicText-textbox-disabled');WGc(b,jfd);cs(b.db,eed,true);vOc(f,new Pyc('<b>Normal text box:<\/b>'));vOc(f,M7b(d,true));vOc(f,M7b(b,false));c=new gHc;_Nc(c.db,A7c,'cwBasicText-password');a=new gHc;_Nc(a.db,A7c,'cwBasicText-password-disabled');WGc(a,jfd);cs(a.db,eed,true);vOc(f,new Pyc('<br><br><b>Password text box:<\/b>'));vOc(f,M7b(c,true));vOc(f,M7b(a,false));e=new nMc;_Nc(e.db,A7c,'cwBasicText-textarea');e.db.rows=5;vOc(f,new Pyc('<br><br><b>Text area:<\/b>'));vOc(f,M7b(e,true));return f}
var jfd='read only';lKb(449,450,{},mlb);_.De=function nlb(a){return Llb((Flb(),a))?(AH(),zH):(AH(),yH)};var klb;lKb(834,1,U5c);_.qc=function U7b(){RMb(this.b,N7b())};lKb(835,1,C5c,W7b);_.Jc=function X7b(a){O7b(this.c,this.b)};lKb(836,1,R5c,Z7b);_.Hc=function $7b(a){O7b(this.c,this.b)};lKb(1178,1060,h5c);_.ih=function YGc(){return RPc(this.db)};_.jh=function ZGc(){return SPc(this.db)};lKb(1175,1176,h5c,gHc);lKb(1231,1177,h5c);_.ih=function oMc(){return RPc(this.db)};_.jh=function pMc(){return SPc(this.db)};var tzb=dWc(odd,'CwBasicText$2',835),uzb=dWc(odd,'CwBasicText$3',836),rEb=dWc(idd,'PasswordTextBox',1175),Qtb=dWc(Kdd,'AnyRtlDirectionEstimator',449);H6c(Vn)(18);