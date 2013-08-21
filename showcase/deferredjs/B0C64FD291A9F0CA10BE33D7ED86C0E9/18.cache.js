function qH(){}
function z_b(a,b){uC(a.a,b)}
function Asb(a,b){this.b=a;this.a=b}
function Dsb(a,b){this.b=a;this.a=b}
function PH(a){return F3(AH,a)}
function pH(){pH=Fpc;oH=new qH}
function w8b(b){try{return b.selectionStart}catch(a){return 0}}
function x8b(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function ssb(a,b){kTb(b,'\u5DF2\u9009\u62E9: '+a.dg()+Itc+a.eg())}
function M_b(){H_b();L_b.call(this,$r($doc,'password'),'gwt-PasswordTextBox')}
function qsb(a,b){var c,d;c=new RXb;iLb();Sr(c.e,pwc,4);OXb(c,a);if(b){d=new oTb('\u5DF2\u9009\u62E9: 0, 0');rj(a,new Asb(a,d),(Py(),Py(),Oy));rj(a,new Dsb(a,d),(ky(),ky(),jy));OXb(c,d)}return c}
function rsb(){var a,b,c,d,e,f;f=new h7b;iLb();Sr(f.e,pwc,5);d=new K_b;K6b(d.cb,esc,'cwBasicText-textbox');z_b(d,(pH(),pH(),oH));b=new K_b;K6b(b.cb,esc,'cwBasicText-textbox-disabled');A_b(b,fzc);Rr(b.cb,Zxc,true);e7b(f,new tTb('<b>\u5E38\u89C4\u6587\u672C\u6846:<\/b>'));e7b(f,qsb(d,true));e7b(f,qsb(b,false));c=new M_b;K6b(c.cb,esc,'cwBasicText-password');a=new M_b;K6b(a.cb,esc,'cwBasicText-password-disabled');A_b(a,fzc);Rr(a.cb,Zxc,true);e7b(f,new tTb('<br><br><b>\u5BC6\u7801\u6587\u672C\u6846:<\/b>'));e7b(f,qsb(c,true));e7b(f,qsb(a,false));e=new X4b;K6b(e.cb,esc,'cwBasicText-textarea');e.cb.rows=5;e7b(f,new tTb('<br><br><b>\u6587\u672C\u533A\u57DF:<\/b>'));e7b(f,qsb(e,true));return f}
var fzc='\u53EA\u8BFB';N2(368,369,{},qH);_.xd=function rH(a){return PH((JH(),a))?(UE(),TE):(UE(),SE)};var oH;N2(753,1,yqc);_.lc=function ysb(){w5(this.a,rsb())};N2(754,1,gqc,Asb);_.Fc=function Bsb(a){ssb(this.b,this.a)};N2(755,1,vqc,Dsb);_.Dc=function Esb(a){ssb(this.b,this.a)};N2(1099,981,Npc);_.dg=function C_b(){return w8b(this.cb)};_.eg=function D_b(){return x8b(this.cb)};N2(1096,1097,Npc,M_b);N2(1152,1098,Npc);_.dg=function Y4b(){return w8b(this.cb)};_.eg=function Z4b(){return x8b(this.cb)};var VT=Kec(jxc,'CwBasicText$2',754),WT=Kec(jxc,'CwBasicText$3',755),TY=Kec(dxc,'PasswordTextBox',1096),pO=Kec(Fxc,'AnyRtlDirectionEstimator',368);lrc(Jn)(18);