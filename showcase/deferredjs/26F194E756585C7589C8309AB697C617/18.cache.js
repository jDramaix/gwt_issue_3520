function kH(){}
function o_b(a,b){uC(a.a,b)}
function qsb(a,b){this.b=a;this.a=b}
function tsb(a,b){this.b=a;this.a=b}
function JH(a){return u3(uH,a)}
function jH(){jH=upc;iH=new kH}
function isb(a,b){aTb(b,'Selected: '+a.ig()+xtc+a.jg())}
function l8b(b){try{return b.selectionStart}catch(a){return 0}}
function m8b(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function B_b(){w_b();A_b.call(this,$r($doc,'password'),'gwt-PasswordTextBox')}
function gsb(a,b){var c,d;c=new GXb;$Kb();Sr(c.e,fwc,4);DXb(c,a);if(b){d=new eTb('Selected: 0, 0');rj(a,new qsb(a,d),(Py(),Py(),Oy));rj(a,new tsb(a,d),(ky(),ky(),jy));DXb(c,d)}return c}
function hsb(){var a,b,c,d,e,f;f=new Y6b;$Kb();Sr(f.e,fwc,5);d=new z_b;z6b(d.cb,Vrc,'cwBasicText-textbox');o_b(d,(jH(),jH(),iH));b=new z_b;z6b(b.cb,Vrc,'cwBasicText-textbox-disabled');p_b(b,Wyc);Rr(b.cb,Rxc,true);V6b(f,new jTb('<b>Normal text box:<\/b>'));V6b(f,gsb(d,true));V6b(f,gsb(b,false));c=new B_b;z6b(c.cb,Vrc,'cwBasicText-password');a=new B_b;z6b(a.cb,Vrc,'cwBasicText-password-disabled');p_b(a,Wyc);Rr(a.cb,Rxc,true);V6b(f,new jTb('<br><br><b>Password text box:<\/b>'));V6b(f,gsb(c,true));V6b(f,gsb(a,false));e=new M4b;z6b(e.cb,Vrc,'cwBasicText-textarea');e.cb.rows=5;V6b(f,new jTb('<br><br><b>Text area:<\/b>'));V6b(f,gsb(e,true));return f}
var Wyc='read only';C2(364,365,{},kH);_.Cd=function lH(a){return JH((DH(),a))?(KE(),JE):(KE(),IE)};var iH;C2(750,1,nqc);_.lc=function osb(){l5(this.a,hsb())};C2(751,1,Xpc,qsb);_.Fc=function rsb(a){isb(this.b,this.a)};C2(752,1,kqc,tsb);_.Dc=function usb(a){isb(this.b,this.a)};C2(1096,978,Cpc);_.ig=function r_b(){return l8b(this.cb)};_.jg=function s_b(){return m8b(this.cb)};C2(1093,1094,Cpc,B_b);C2(1149,1095,Cpc);_.ig=function N4b(){return l8b(this.cb)};_.jg=function O4b(){return m8b(this.cb)};var KT=zec(_wc,'CwBasicText$2',751),LT=zec(_wc,'CwBasicText$3',752),IY=zec(Vwc,'PasswordTextBox',1093),eO=zec(vxc,'AnyRtlDirectionEstimator',364);arc(Jn)(18);