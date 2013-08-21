function jH(){}
function g_b(a,b){nC(a.b,b)}
function msb(a,b){this.c=a;this.b=b}
function psb(a,b){this.c=a;this.b=b}
function iH(){iH=apc;hH=new jH}
function IH(a){return r3(tH,a)}
function T7b(b){try{return b.selectionStart}catch(a){return 0}}
function U7b(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function esb(a,b){QSb(b,'\u5DF2\u9009\u62E9: '+a.cg()+gtc+a.dg())}
function t_b(){o_b();s_b.call(this,Zr($doc,'password'),'gwt-PasswordTextBox')}
function csb(a,b){var c,d;c=new yXb;RKb();Rr(c.f,Rvc,4);vXb(c,a);if(b){d=new USb('\u5DF2\u9009\u62E9: 0, 0');rj(a,new msb(a,d),(Jy(),Jy(),Iy));rj(a,new psb(a,d),(ey(),ey(),dy));vXb(c,d)}return c}
function dsb(){var a,b,c,d,e,f;f=new L6b;RKb();Rr(f.f,Rvc,5);d=new r_b;m6b(d.db,Brc,'cwBasicText-textbox');g_b(d,(iH(),iH(),hH));b=new r_b;m6b(b.db,Brc,'cwBasicText-textbox-disabled');h_b(b,Gyc);Qr(b.db,yxc,true);I6b(f,new ZSb('<b>\u5E38\u89C4\u6587\u672C\u6846:<\/b>'));I6b(f,csb(d,true));I6b(f,csb(b,false));c=new t_b;m6b(c.db,Brc,'cwBasicText-password');a=new t_b;m6b(a.db,Brc,'cwBasicText-password-disabled');h_b(a,Gyc);Qr(a.db,yxc,true);I6b(f,new ZSb('<br><br><b>\u5BC6\u7801\u6587\u672C\u6846:<\/b>'));I6b(f,csb(c,true));I6b(f,csb(a,false));e=new A4b;m6b(e.db,Brc,'cwBasicText-textarea');e.db.rows=5;I6b(f,new ZSb('<br><br><b>\u6587\u672C\u533A\u57DF:<\/b>'));I6b(f,csb(e,true));return f}
var Gyc='\u53EA\u8BFB';E2(365,366,{},jH);_.xd=function kH(a){return IH((CH(),a))?(NE(),ME):(NE(),LE)};var hH;E2(749,1,Vpc);_.mc=function ksb(){i5(this.b,dsb())};E2(750,1,Dpc,msb);_.Fc=function nsb(a){esb(this.c,this.b)};E2(751,1,Spc,psb);_.Dc=function qsb(a){esb(this.c,this.b)};E2(1092,972,ipc);_.cg=function j_b(){return T7b(this.db)};_.dg=function k_b(){return U7b(this.db)};E2(1089,1090,ipc,t_b);E2(1145,1091,ipc);_.cg=function B4b(){return T7b(this.db)};_.dg=function C4b(){return U7b(this.db)};var OT=fec(Kwc,'CwBasicText$2',750),PT=fec(Kwc,'CwBasicText$3',751),LY=fec(Ewc,'PasswordTextBox',1089),jO=fec(exc,'AnyRtlDirectionEstimator',365);Iqc(Jn)(18);