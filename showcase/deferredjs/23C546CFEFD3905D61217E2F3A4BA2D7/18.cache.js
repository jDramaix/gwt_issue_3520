function qH(){}
function y_b(a,b){uC(a.a,b)}
function Asb(a,b){this.b=a;this.a=b}
function Dsb(a,b){this.b=a;this.a=b}
function PH(a){return F3(AH,a)}
function pH(){pH=Epc;oH=new qH}
function v8b(b){try{return b.selectionStart}catch(a){return 0}}
function w8b(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function ssb(a,b){kTb(b,'\u5DF2\u9009\u62E9: '+a.dg()+Htc+a.eg())}
function L_b(){G_b();K_b.call(this,$r($doc,'password'),'gwt-PasswordTextBox')}
function qsb(a,b){var c,d;c=new QXb;iLb();Sr(c.e,owc,4);NXb(c,a);if(b){d=new oTb('\u5DF2\u9009\u62E9: 0, 0');rj(a,new Asb(a,d),(Py(),Py(),Oy));rj(a,new Dsb(a,d),(ky(),ky(),jy));NXb(c,d)}return c}
function rsb(){var a,b,c,d,e,f;f=new g7b;iLb();Sr(f.e,owc,5);d=new J_b;J6b(d.cb,dsc,'cwBasicText-textbox');y_b(d,(pH(),pH(),oH));b=new J_b;J6b(b.cb,dsc,'cwBasicText-textbox-disabled');z_b(b,ezc);Rr(b.cb,Yxc,true);d7b(f,new tTb('<b>\u5E38\u89C4\u6587\u672C\u6846:<\/b>'));d7b(f,qsb(d,true));d7b(f,qsb(b,false));c=new L_b;J6b(c.cb,dsc,'cwBasicText-password');a=new L_b;J6b(a.cb,dsc,'cwBasicText-password-disabled');z_b(a,ezc);Rr(a.cb,Yxc,true);d7b(f,new tTb('<br><br><b>\u5BC6\u7801\u6587\u672C\u6846:<\/b>'));d7b(f,qsb(c,true));d7b(f,qsb(a,false));e=new W4b;J6b(e.cb,dsc,'cwBasicText-textarea');e.cb.rows=5;d7b(f,new tTb('<br><br><b>\u6587\u672C\u533A\u57DF:<\/b>'));d7b(f,qsb(e,true));return f}
var ezc='\u53EA\u8BFB';N2(368,369,{},qH);_.xd=function rH(a){return PH((JH(),a))?(UE(),TE):(UE(),SE)};var oH;N2(753,1,xqc);_.lc=function ysb(){w5(this.a,rsb())};N2(754,1,fqc,Asb);_.Fc=function Bsb(a){ssb(this.b,this.a)};N2(755,1,uqc,Dsb);_.Dc=function Esb(a){ssb(this.b,this.a)};N2(1099,981,Mpc);_.dg=function B_b(){return v8b(this.cb)};_.eg=function C_b(){return w8b(this.cb)};N2(1096,1097,Mpc,L_b);N2(1152,1098,Mpc);_.dg=function X4b(){return v8b(this.cb)};_.eg=function Y4b(){return w8b(this.cb)};var VT=Jec(ixc,'CwBasicText$2',754),WT=Jec(ixc,'CwBasicText$3',755),TY=Jec(cxc,'PasswordTextBox',1096),pO=Jec(Exc,'AnyRtlDirectionEstimator',368);krc(Jn)(18);