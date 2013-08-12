function JH(){}
function O_b(a,b){NC(a.b,b)}
function Qsb(a,b){this.c=a;this.b=b}
function Tsb(a,b){this.c=a;this.b=b}
function IH(){IH=Qpc;HH=new JH}
function gI(a){return V3(TH,a)}
function K8b(b){try{return b.selectionStart}catch(a){return 0}}
function L8b(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function Isb(a,b){ATb(b,'\u5DF2\u9009\u62E9: '+a.gg()+Wtc+a.hg())}
function __b(){W_b();$_b.call(this,ls($doc,'password'),'gwt-PasswordTextBox')}
function Gsb(a,b){var c,d;c=new eYb;wLb();ds(c.f,Lwc,4);bYb(c,a);if(b){d=new ETb('\u5DF2\u9009\u62E9: 0, 0');Cj(a,new Qsb(a,d),(hz(),hz(),gz));Cj(a,new Tsb(a,d),(Ey(),Ey(),Dy));bYb(c,d)}return c}
function Hsb(){var a,b,c,d,e,f;f=new r7b;wLb();ds(f.f,Lwc,5);d=new Z_b;U6b(d.db,qsc,'cwBasicText-textbox');O_b(d,(IH(),IH(),HH));b=new Z_b;U6b(b.db,qsc,'cwBasicText-textbox-disabled');P_b(b,Bzc);cs(b.db,tyc,true);o7b(f,new JTb('<b>\u5E38\u89C4\u6587\u672C\u6846:<\/b>'));o7b(f,Gsb(d,true));o7b(f,Gsb(b,false));c=new __b;U6b(c.db,qsc,'cwBasicText-password');a=new __b;U6b(a.db,qsc,'cwBasicText-password-disabled');P_b(a,Bzc);cs(a.db,tyc,true);o7b(f,new JTb('<br><br><b>\u5BC6\u7801\u6587\u672C\u6846:<\/b>'));o7b(f,Gsb(c,true));o7b(f,Gsb(a,false));e=new g5b;U6b(e.db,qsc,'cwBasicText-textarea');e.db.rows=5;o7b(f,new JTb('<br><br><b>\u6587\u672C\u533A\u57DF:<\/b>'));o7b(f,Gsb(e,true));return f}
var Bzc='\u53EA\u8BFB';g3(366,367,{},JH);_.Bd=function KH(a){return gI((aI(),a))?(lF(),kF):(lF(),jF)};var HH;g3(750,1,Kqc);_.qc=function Osb(){M5(this.b,Hsb())};g3(751,1,sqc,Qsb);_.Jc=function Rsb(a){Isb(this.c,this.b)};g3(752,1,Hqc,Tsb);_.Hc=function Usb(a){Isb(this.c,this.b)};g3(1094,976,Zpc);_.gg=function R_b(){return K8b(this.db)};_.hg=function S_b(){return L8b(this.db)};g3(1091,1092,Zpc,__b);g3(1147,1093,Zpc);_.gg=function h5b(){return K8b(this.db)};_.hg=function i5b(){return L8b(this.db)};var oU=Vec(Fxc,'CwBasicText$2',751),pU=Vec(Fxc,'CwBasicText$3',752),mZ=Vec(zxc,'PasswordTextBox',1091),LO=Vec(_xc,'AnyRtlDirectionEstimator',366);xrc(Vn)(18);