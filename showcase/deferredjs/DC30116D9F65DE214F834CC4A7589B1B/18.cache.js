function kH(){}
function p_b(a,b){uC(a.a,b)}
function qsb(a,b){this.b=a;this.a=b}
function tsb(a,b){this.b=a;this.a=b}
function JH(a){return u3(uH,a)}
function jH(){jH=vpc;iH=new kH}
function isb(a,b){aTb(b,'Selected: '+a.ig()+ytc+a.jg())}
function m8b(b){try{return b.selectionStart}catch(a){return 0}}
function n8b(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function C_b(){x_b();B_b.call(this,$r($doc,'password'),'gwt-PasswordTextBox')}
function gsb(a,b){var c,d;c=new HXb;$Kb();Sr(c.e,gwc,4);EXb(c,a);if(b){d=new eTb('Selected: 0, 0');rj(a,new qsb(a,d),(Py(),Py(),Oy));rj(a,new tsb(a,d),(ky(),ky(),jy));EXb(c,d)}return c}
function hsb(){var a,b,c,d,e,f;f=new Z6b;$Kb();Sr(f.e,gwc,5);d=new A_b;A6b(d.cb,Wrc,'cwBasicText-textbox');p_b(d,(jH(),jH(),iH));b=new A_b;A6b(b.cb,Wrc,'cwBasicText-textbox-disabled');q_b(b,Xyc);Rr(b.cb,Sxc,true);W6b(f,new jTb('<b>Normal text box:<\/b>'));W6b(f,gsb(d,true));W6b(f,gsb(b,false));c=new C_b;A6b(c.cb,Wrc,'cwBasicText-password');a=new C_b;A6b(a.cb,Wrc,'cwBasicText-password-disabled');q_b(a,Xyc);Rr(a.cb,Sxc,true);W6b(f,new jTb('<br><br><b>Password text box:<\/b>'));W6b(f,gsb(c,true));W6b(f,gsb(a,false));e=new N4b;A6b(e.cb,Wrc,'cwBasicText-textarea');e.cb.rows=5;W6b(f,new jTb('<br><br><b>Text area:<\/b>'));W6b(f,gsb(e,true));return f}
var Xyc='read only';C2(364,365,{},kH);_.Cd=function lH(a){return JH((DH(),a))?(KE(),JE):(KE(),IE)};var iH;C2(750,1,oqc);_.lc=function osb(){l5(this.a,hsb())};C2(751,1,Ypc,qsb);_.Fc=function rsb(a){isb(this.b,this.a)};C2(752,1,lqc,tsb);_.Dc=function usb(a){isb(this.b,this.a)};C2(1096,978,Dpc);_.ig=function s_b(){return m8b(this.cb)};_.jg=function t_b(){return n8b(this.cb)};C2(1093,1094,Dpc,C_b);C2(1149,1095,Dpc);_.ig=function O4b(){return m8b(this.cb)};_.jg=function P4b(){return n8b(this.cb)};var KT=Aec(axc,'CwBasicText$2',751),LT=Aec(axc,'CwBasicText$3',752),IY=Aec(Wwc,'PasswordTextBox',1093),eO=Aec(wxc,'AnyRtlDirectionEstimator',364);brc(Jn)(18);