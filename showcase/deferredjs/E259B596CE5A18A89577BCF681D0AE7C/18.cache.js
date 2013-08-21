function DH(){}
function F_b(a,b){NC(a.b,b)}
function Gsb(a,b){this.c=a;this.b=b}
function Jsb(a,b){this.c=a;this.b=b}
function CH(){CH=Kpc;BH=new DH}
function aI(a){return K3(NH,a)}
function ysb(a,b){qTb(b,'Selected: '+a.lg()+Qtc+a.mg())}
function B8b(b){try{return b.selectionStart}catch(a){return 0}}
function C8b(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function S_b(){N_b();R_b.call(this,ls($doc,'password'),'gwt-PasswordTextBox')}
function wsb(a,b){var c,d;c=new XXb;mLb();ds(c.f,Gwc,4);UXb(c,a);if(b){d=new uTb('Selected: 0, 0');Cj(a,new Gsb(a,d),(hz(),hz(),gz));Cj(a,new Jsb(a,d),(Ey(),Ey(),Dy));UXb(c,d)}return c}
function xsb(){var a,b,c,d,e,f;f=new i7b;mLb();ds(f.f,Gwc,5);d=new Q_b;L6b(d.db,ksc,'cwBasicText-textbox');F_b(d,(CH(),CH(),BH));b=new Q_b;L6b(b.db,ksc,'cwBasicText-textbox-disabled');G_b(b,vzc);cs(b.db,qyc,true);f7b(f,new zTb('<b>Normal text box:<\/b>'));f7b(f,wsb(d,true));f7b(f,wsb(b,false));c=new S_b;L6b(c.db,ksc,'cwBasicText-password');a=new S_b;L6b(a.db,ksc,'cwBasicText-password-disabled');G_b(a,vzc);cs(a.db,qyc,true);f7b(f,new zTb('<br><br><b>Password text box:<\/b>'));f7b(f,wsb(c,true));f7b(f,wsb(a,false));e=new Z4b;L6b(e.db,ksc,'cwBasicText-textarea');e.db.rows=5;f7b(f,new zTb('<br><br><b>Text area:<\/b>'));f7b(f,wsb(e,true));return f}
var vzc='read only';X2(362,363,{},DH);_.Gd=function EH(a){return aI((WH(),a))?(bF(),aF):(bF(),_E)};var BH;X2(747,1,Eqc);_.qc=function Esb(){B5(this.b,xsb())};X2(748,1,mqc,Gsb);_.Jc=function Hsb(a){ysb(this.c,this.b)};X2(749,1,Bqc,Jsb);_.Hc=function Ksb(a){ysb(this.c,this.b)};X2(1091,973,Tpc);_.lg=function I_b(){return B8b(this.db)};_.mg=function J_b(){return C8b(this.db)};X2(1088,1089,Tpc,S_b);X2(1144,1090,Tpc);_.lg=function $4b(){return B8b(this.db)};_.mg=function _4b(){return C8b(this.db)};var dU=Pec(Axc,'CwBasicText$2',748),eU=Pec(Axc,'CwBasicText$3',749),bZ=Pec(uxc,'PasswordTextBox',1088),AO=Pec(Wxc,'AnyRtlDirectionEstimator',362);rrc(Vn)(18);