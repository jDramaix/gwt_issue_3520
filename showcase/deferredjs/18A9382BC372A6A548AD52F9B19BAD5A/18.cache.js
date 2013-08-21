function dH(){}
function Z$b(a,b){nC(a.b,b)}
function csb(a,b){this.c=a;this.b=b}
function fsb(a,b){this.c=a;this.b=b}
function cH(){cH=Toc;bH=new dH}
function CH(a){return g3(nH,a)}
function Wrb(a,b){GSb(b,'Selected: '+a.hg()+Zsc+a.ig())}
function K7b(b){try{return b.selectionStart}catch(a){return 0}}
function L7b(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function k_b(){f_b();j_b.call(this,Zr($doc,'password'),'gwt-PasswordTextBox')}
function Urb(a,b){var c,d;c=new pXb;HKb();Rr(c.f,Jvc,4);mXb(c,a);if(b){d=new KSb('Selected: 0, 0');rj(a,new csb(a,d),(Jy(),Jy(),Iy));rj(a,new fsb(a,d),(ey(),ey(),dy));mXb(c,d)}return c}
function Vrb(){var a,b,c,d,e,f;f=new C6b;HKb();Rr(f.f,Jvc,5);d=new i_b;d6b(d.db,src,'cwBasicText-textbox');Z$b(d,(cH(),cH(),bH));b=new i_b;d6b(b.db,src,'cwBasicText-textbox-disabled');$$b(b,xyc);Qr(b.db,sxc,true);z6b(f,new PSb('<b>Normal text box:<\/b>'));z6b(f,Urb(d,true));z6b(f,Urb(b,false));c=new k_b;d6b(c.db,src,'cwBasicText-password');a=new k_b;d6b(a.db,src,'cwBasicText-password-disabled');$$b(a,xyc);Qr(a.db,sxc,true);z6b(f,new PSb('<br><br><b>Password text box:<\/b>'));z6b(f,Urb(c,true));z6b(f,Urb(a,false));e=new r4b;d6b(e.db,src,'cwBasicText-textarea');e.db.rows=5;z6b(f,new PSb('<br><br><b>Text area:<\/b>'));z6b(f,Urb(e,true));return f}
var xyc='read only';t2(361,362,{},dH);_.Cd=function eH(a){return CH((wH(),a))?(DE(),CE):(DE(),BE)};var bH;t2(746,1,Mpc);_.mc=function asb(){Z4(this.b,Vrb())};t2(747,1,upc,csb);_.Fc=function dsb(a){Wrb(this.c,this.b)};t2(748,1,Jpc,fsb);_.Dc=function gsb(a){Wrb(this.c,this.b)};t2(1089,969,_oc);_.hg=function a_b(){return K7b(this.db)};_.ig=function b_b(){return L7b(this.db)};t2(1086,1087,_oc,k_b);t2(1142,1088,_oc);_.hg=function s4b(){return K7b(this.db)};_.ig=function t4b(){return L7b(this.db)};var DT=Ydc(Cwc,'CwBasicText$2',747),ET=Ydc(Cwc,'CwBasicText$3',748),AY=Ydc(wwc,'PasswordTextBox',1086),$N=Ydc(Ywc,'AnyRtlDirectionEstimator',361);zqc(Jn)(18);