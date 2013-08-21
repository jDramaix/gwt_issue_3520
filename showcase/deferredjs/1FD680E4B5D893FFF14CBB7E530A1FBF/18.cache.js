function uH(){}
function z_b(a,b){EC(a.a,b)}
function zsb(a,b){this.b=a;this.a=b}
function Csb(a,b){this.b=a;this.a=b}
function TH(a){return D3(EH,a)}
function tH(){tH=Hpc;sH=new uH}
function rsb(a,b){lTb(b,'Selected: '+a.hg()+Ntc+a.ig())}
function M_b(){H_b();L_b.call(this,Zr($doc,'password'),'gwt-PasswordTextBox')}
function x8b(b){try{var c=b.document.selection.createRange();if(c.parentElement()!==b)return 0;return c.text.length}catch(a){return 0}}
function w8b(b){try{var c=b.document.selection.createRange();if(c.parentElement()!==b)return -1;return -c.move(izc,-65535)}catch(a){return 0}}
function psb(a,b){var c,d;c=new RXb;vLb();Rr(c.e,rwc,4);OXb(c,a);if(b){d=new pTb('Selected: 0, 0');qj(a,new zsb(a,d),(Zy(),Zy(),Yy));qj(a,new Csb(a,d),(uy(),uy(),ty));OXb(c,d)}return c}
function z8b(b){try{var c=b.document.selection.createRange();if(c.parentElement()!==b)return 0;var d=c.text.length;var e=0;var f=c.duplicate();f.moveEnd(izc,-1);var g=f.text.length;while(g==d&&f.parentElement()==b&&c.compareEndPoints('StartToEnd',f)<=0){e+=2;f.moveEnd(izc,-1);g=f.text.length}return d+e}catch(a){return 0}}
function y8b(b){try{var c=b.document.selection.createRange();if(c.parentElement()!==b)return -1;var d=c.duplicate();d.moveToElementText(b);d.setEndPoint('EndToStart',c);var e=d.text.length;var f=0;var g=d.duplicate();g.moveEnd(izc,-1);var i=g.text.length;while(i==e&&g.parentElement()==b){f+=2;g.moveEnd(izc,-1);i=g.text.length}return e+f}catch(a){return 0}}
function qsb(){var a,b,c,d,e,f;f=new h7b;vLb();Rr(f.e,rwc,5);d=new K_b;K6b(d.cb,gsc,'cwBasicText-textbox');z_b(d,(tH(),tH(),sH));b=new K_b;K6b(b.cb,gsc,'cwBasicText-textbox-disabled');A_b(b,hzc);Qr(b.cb,cyc,true);e7b(f,new uTb('<b>Normal text box:<\/b>'));e7b(f,psb(d,true));e7b(f,psb(b,false));c=new M_b;K6b(c.cb,gsc,'cwBasicText-password');a=new M_b;K6b(a.cb,gsc,'cwBasicText-password-disabled');A_b(a,hzc);Qr(a.cb,cyc,true);e7b(f,new uTb('<br><br><b>Password text box:<\/b>'));e7b(f,psb(c,true));e7b(f,psb(a,false));e=new X4b;K6b(e.cb,gsc,'cwBasicText-textarea');e.cb.rows=5;e7b(f,new uTb('<br><br><b>Text area:<\/b>'));e7b(f,psb(e,true));return f}
var izc='character',hzc='read only';L2(363,364,{},uH);_.Cd=function vH(a){return TH((NH(),a))?(UE(),TE):(UE(),SE)};var sH;L2(749,1,Aqc);_.lc=function xsb(){u5(this.a,qsb())};L2(750,1,iqc,zsb);_.Fc=function Asb(a){rsb(this.b,this.a)};L2(751,1,xqc,Csb);_.Dc=function Dsb(a){rsb(this.b,this.a)};L2(1094,976,Ppc);_.hg=function C_b(){return w8b(this.cb)};_.ig=function D_b(){return x8b(this.cb)};L2(1091,1092,Ppc,M_b);L2(1147,1093,Ppc);_.hg=function Y4b(){return y8b(this.cb)};_.ig=function Z4b(){return z8b(this.cb)};var UT=Mec(mxc,'CwBasicText$2',750),VT=Mec(mxc,'CwBasicText$3',751),RY=Mec(gxc,'PasswordTextBox',1091),oO=Mec(Ixc,'AnyRtlDirectionEstimator',363);nrc(In)(18);