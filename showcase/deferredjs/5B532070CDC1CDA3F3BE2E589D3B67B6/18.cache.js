function DH(){}
function E_b(a,b){NC(a.b,b)}
function Gsb(a,b){this.c=a;this.b=b}
function Jsb(a,b){this.c=a;this.b=b}
function CH(){CH=Gpc;BH=new DH}
function aI(a){return K3(NH,a)}
function ysb(a,b){qTb(b,'Selected: '+a.lg()+Mtc+a.mg())}
function A8b(b){try{return b.selectionStart}catch(a){return 0}}
function B8b(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function R_b(){M_b();Q_b.call(this,ls($doc,'password'),'gwt-PasswordTextBox')}
function wsb(a,b){var c,d;c=new WXb;mLb();ds(c.f,Cwc,4);TXb(c,a);if(b){d=new uTb('Selected: 0, 0');Cj(a,new Gsb(a,d),(hz(),hz(),gz));Cj(a,new Jsb(a,d),(Ey(),Ey(),Dy));TXb(c,d)}return c}
function xsb(){var a,b,c,d,e,f;f=new h7b;mLb();ds(f.f,Cwc,5);d=new P_b;K6b(d.db,gsc,'cwBasicText-textbox');E_b(d,(CH(),CH(),BH));b=new P_b;K6b(b.db,gsc,'cwBasicText-textbox-disabled');F_b(b,rzc);cs(b.db,myc,true);e7b(f,new zTb('<b>Normal text box:<\/b>'));e7b(f,wsb(d,true));e7b(f,wsb(b,false));c=new R_b;K6b(c.db,gsc,'cwBasicText-password');a=new R_b;K6b(a.db,gsc,'cwBasicText-password-disabled');F_b(a,rzc);cs(a.db,myc,true);e7b(f,new zTb('<br><br><b>Password text box:<\/b>'));e7b(f,wsb(c,true));e7b(f,wsb(a,false));e=new Y4b;K6b(e.db,gsc,'cwBasicText-textarea');e.db.rows=5;e7b(f,new zTb('<br><br><b>Text area:<\/b>'));e7b(f,wsb(e,true));return f}
var rzc='read only';X2(362,363,{},DH);_.Gd=function EH(a){return aI((WH(),a))?(bF(),aF):(bF(),_E)};var BH;X2(747,1,Aqc);_.qc=function Esb(){B5(this.b,xsb())};X2(748,1,iqc,Gsb);_.Jc=function Hsb(a){ysb(this.c,this.b)};X2(749,1,xqc,Jsb);_.Hc=function Ksb(a){ysb(this.c,this.b)};X2(1091,973,Ppc);_.lg=function H_b(){return A8b(this.db)};_.mg=function I_b(){return B8b(this.db)};X2(1088,1089,Ppc,R_b);X2(1144,1090,Ppc);_.lg=function Z4b(){return A8b(this.db)};_.mg=function $4b(){return B8b(this.db)};var dU=Lec(wxc,'CwBasicText$2',748),eU=Lec(wxc,'CwBasicText$3',749),bZ=Lec(qxc,'PasswordTextBox',1088),AO=Lec(Sxc,'AnyRtlDirectionEstimator',362);nrc(Vn)(18);