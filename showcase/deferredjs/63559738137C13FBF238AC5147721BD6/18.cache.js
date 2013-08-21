function jH(){}
function h_b(a,b){nC(a.b,b)}
function msb(a,b){this.c=a;this.b=b}
function psb(a,b){this.c=a;this.b=b}
function iH(){iH=bpc;hH=new jH}
function IH(a){return r3(tH,a)}
function U7b(b){try{return b.selectionStart}catch(a){return 0}}
function V7b(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function esb(a,b){QSb(b,'\u5DF2\u9009\u62E9: '+a.cg()+htc+a.dg())}
function u_b(){p_b();t_b.call(this,Zr($doc,'password'),'gwt-PasswordTextBox')}
function csb(a,b){var c,d;c=new zXb;RKb();Rr(c.f,Svc,4);wXb(c,a);if(b){d=new USb('\u5DF2\u9009\u62E9: 0, 0');rj(a,new msb(a,d),(Jy(),Jy(),Iy));rj(a,new psb(a,d),(ey(),ey(),dy));wXb(c,d)}return c}
function dsb(){var a,b,c,d,e,f;f=new M6b;RKb();Rr(f.f,Svc,5);d=new s_b;n6b(d.db,Crc,'cwBasicText-textbox');h_b(d,(iH(),iH(),hH));b=new s_b;n6b(b.db,Crc,'cwBasicText-textbox-disabled');i_b(b,Hyc);Qr(b.db,zxc,true);J6b(f,new ZSb('<b>\u5E38\u89C4\u6587\u672C\u6846:<\/b>'));J6b(f,csb(d,true));J6b(f,csb(b,false));c=new u_b;n6b(c.db,Crc,'cwBasicText-password');a=new u_b;n6b(a.db,Crc,'cwBasicText-password-disabled');i_b(a,Hyc);Qr(a.db,zxc,true);J6b(f,new ZSb('<br><br><b>\u5BC6\u7801\u6587\u672C\u6846:<\/b>'));J6b(f,csb(c,true));J6b(f,csb(a,false));e=new B4b;n6b(e.db,Crc,'cwBasicText-textarea');e.db.rows=5;J6b(f,new ZSb('<br><br><b>\u6587\u672C\u533A\u57DF:<\/b>'));J6b(f,csb(e,true));return f}
var Hyc='\u53EA\u8BFB';E2(365,366,{},jH);_.xd=function kH(a){return IH((CH(),a))?(NE(),ME):(NE(),LE)};var hH;E2(749,1,Wpc);_.mc=function ksb(){i5(this.b,dsb())};E2(750,1,Epc,msb);_.Fc=function nsb(a){esb(this.c,this.b)};E2(751,1,Tpc,psb);_.Dc=function qsb(a){esb(this.c,this.b)};E2(1092,972,jpc);_.cg=function k_b(){return U7b(this.db)};_.dg=function l_b(){return V7b(this.db)};E2(1089,1090,jpc,u_b);E2(1145,1091,jpc);_.cg=function C4b(){return U7b(this.db)};_.dg=function D4b(){return V7b(this.db)};var OT=gec(Lwc,'CwBasicText$2',750),PT=gec(Lwc,'CwBasicText$3',751),LY=gec(Fwc,'PasswordTextBox',1089),jO=gec(fxc,'AnyRtlDirectionEstimator',365);Jqc(Jn)(18);