function uH(){}
function A_b(a,b){EC(a.a,b)}
function zsb(a,b){this.b=a;this.a=b}
function Csb(a,b){this.b=a;this.a=b}
function TH(a){return D3(EH,a)}
function tH(){tH=Ipc;sH=new uH}
function rsb(a,b){lTb(b,'Selected: '+a.hg()+Otc+a.ig())}
function N_b(){I_b();M_b.call(this,Zr($doc,'password'),'gwt-PasswordTextBox')}
function y8b(b){try{var c=b.document.selection.createRange();if(c.parentElement()!==b)return 0;return c.text.length}catch(a){return 0}}
function x8b(b){try{var c=b.document.selection.createRange();if(c.parentElement()!==b)return -1;return -c.move(jzc,-65535)}catch(a){return 0}}
function psb(a,b){var c,d;c=new SXb;vLb();Rr(c.e,swc,4);PXb(c,a);if(b){d=new pTb('Selected: 0, 0');qj(a,new zsb(a,d),(Zy(),Zy(),Yy));qj(a,new Csb(a,d),(uy(),uy(),ty));PXb(c,d)}return c}
function A8b(b){try{var c=b.document.selection.createRange();if(c.parentElement()!==b)return 0;var d=c.text.length;var e=0;var f=c.duplicate();f.moveEnd(jzc,-1);var g=f.text.length;while(g==d&&f.parentElement()==b&&c.compareEndPoints('StartToEnd',f)<=0){e+=2;f.moveEnd(jzc,-1);g=f.text.length}return d+e}catch(a){return 0}}
function z8b(b){try{var c=b.document.selection.createRange();if(c.parentElement()!==b)return -1;var d=c.duplicate();d.moveToElementText(b);d.setEndPoint('EndToStart',c);var e=d.text.length;var f=0;var g=d.duplicate();g.moveEnd(jzc,-1);var i=g.text.length;while(i==e&&g.parentElement()==b){f+=2;g.moveEnd(jzc,-1);i=g.text.length}return e+f}catch(a){return 0}}
function qsb(){var a,b,c,d,e,f;f=new i7b;vLb();Rr(f.e,swc,5);d=new L_b;L6b(d.cb,hsc,'cwBasicText-textbox');A_b(d,(tH(),tH(),sH));b=new L_b;L6b(b.cb,hsc,'cwBasicText-textbox-disabled');B_b(b,izc);Qr(b.cb,dyc,true);f7b(f,new uTb('<b>Normal text box:<\/b>'));f7b(f,psb(d,true));f7b(f,psb(b,false));c=new N_b;L6b(c.cb,hsc,'cwBasicText-password');a=new N_b;L6b(a.cb,hsc,'cwBasicText-password-disabled');B_b(a,izc);Qr(a.cb,dyc,true);f7b(f,new uTb('<br><br><b>Password text box:<\/b>'));f7b(f,psb(c,true));f7b(f,psb(a,false));e=new Y4b;L6b(e.cb,hsc,'cwBasicText-textarea');e.cb.rows=5;f7b(f,new uTb('<br><br><b>Text area:<\/b>'));f7b(f,psb(e,true));return f}
var jzc='character',izc='read only';L2(363,364,{},uH);_.Cd=function vH(a){return TH((NH(),a))?(UE(),TE):(UE(),SE)};var sH;L2(749,1,Bqc);_.lc=function xsb(){u5(this.a,qsb())};L2(750,1,jqc,zsb);_.Fc=function Asb(a){rsb(this.b,this.a)};L2(751,1,yqc,Csb);_.Dc=function Dsb(a){rsb(this.b,this.a)};L2(1094,976,Qpc);_.hg=function D_b(){return x8b(this.cb)};_.ig=function E_b(){return y8b(this.cb)};L2(1091,1092,Qpc,N_b);L2(1147,1093,Qpc);_.hg=function Z4b(){return z8b(this.cb)};_.ig=function $4b(){return A8b(this.cb)};var UT=Nec(nxc,'CwBasicText$2',750),VT=Nec(nxc,'CwBasicText$3',751),RY=Nec(hxc,'PasswordTextBox',1091),oO=Nec(Jxc,'AnyRtlDirectionEstimator',363);orc(In)(18);