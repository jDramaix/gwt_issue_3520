function dH(){}
function Y$b(a,b){nC(a.b,b)}
function csb(a,b){this.c=a;this.b=b}
function fsb(a,b){this.c=a;this.b=b}
function cH(){cH=Soc;bH=new dH}
function CH(a){return g3(nH,a)}
function Wrb(a,b){GSb(b,'Selected: '+a.hg()+Ysc+a.ig())}
function J7b(b){try{return b.selectionStart}catch(a){return 0}}
function K7b(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function j_b(){e_b();i_b.call(this,Zr($doc,'password'),'gwt-PasswordTextBox')}
function Urb(a,b){var c,d;c=new oXb;HKb();Rr(c.f,Ivc,4);lXb(c,a);if(b){d=new KSb('Selected: 0, 0');rj(a,new csb(a,d),(Jy(),Jy(),Iy));rj(a,new fsb(a,d),(ey(),ey(),dy));lXb(c,d)}return c}
function Vrb(){var a,b,c,d,e,f;f=new B6b;HKb();Rr(f.f,Ivc,5);d=new h_b;c6b(d.db,rrc,'cwBasicText-textbox');Y$b(d,(cH(),cH(),bH));b=new h_b;c6b(b.db,rrc,'cwBasicText-textbox-disabled');Z$b(b,wyc);Qr(b.db,rxc,true);y6b(f,new PSb('<b>Normal text box:<\/b>'));y6b(f,Urb(d,true));y6b(f,Urb(b,false));c=new j_b;c6b(c.db,rrc,'cwBasicText-password');a=new j_b;c6b(a.db,rrc,'cwBasicText-password-disabled');Z$b(a,wyc);Qr(a.db,rxc,true);y6b(f,new PSb('<br><br><b>Password text box:<\/b>'));y6b(f,Urb(c,true));y6b(f,Urb(a,false));e=new q4b;c6b(e.db,rrc,'cwBasicText-textarea');e.db.rows=5;y6b(f,new PSb('<br><br><b>Text area:<\/b>'));y6b(f,Urb(e,true));return f}
var wyc='read only';t2(361,362,{},dH);_.Cd=function eH(a){return CH((wH(),a))?(DE(),CE):(DE(),BE)};var bH;t2(746,1,Lpc);_.mc=function asb(){Z4(this.b,Vrb())};t2(747,1,tpc,csb);_.Fc=function dsb(a){Wrb(this.c,this.b)};t2(748,1,Ipc,fsb);_.Dc=function gsb(a){Wrb(this.c,this.b)};t2(1089,969,$oc);_.hg=function _$b(){return J7b(this.db)};_.ig=function a_b(){return K7b(this.db)};t2(1086,1087,$oc,j_b);t2(1142,1088,$oc);_.hg=function r4b(){return J7b(this.db)};_.ig=function s4b(){return K7b(this.db)};var DT=Xdc(Bwc,'CwBasicText$2',747),ET=Xdc(Bwc,'CwBasicText$3',748),AY=Xdc(vwc,'PasswordTextBox',1086),$N=Xdc(Xwc,'AnyRtlDirectionEstimator',361);yqc(Jn)(18);