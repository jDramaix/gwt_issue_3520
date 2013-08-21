function JH(){}
function P_b(a,b){NC(a.b,b)}
function Qsb(a,b){this.c=a;this.b=b}
function Tsb(a,b){this.c=a;this.b=b}
function IH(){IH=Upc;HH=new JH}
function gI(a){return V3(TH,a)}
function L8b(b){try{return b.selectionStart}catch(a){return 0}}
function M8b(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function Isb(a,b){ATb(b,'\u5DF2\u9009\u62E9: '+a.gg()+$tc+a.hg())}
function a0b(){X_b();__b.call(this,ls($doc,'password'),'gwt-PasswordTextBox')}
function Gsb(a,b){var c,d;c=new fYb;wLb();ds(c.f,Pwc,4);cYb(c,a);if(b){d=new ETb('\u5DF2\u9009\u62E9: 0, 0');Cj(a,new Qsb(a,d),(hz(),hz(),gz));Cj(a,new Tsb(a,d),(Ey(),Ey(),Dy));cYb(c,d)}return c}
function Hsb(){var a,b,c,d,e,f;f=new s7b;wLb();ds(f.f,Pwc,5);d=new $_b;V6b(d.db,usc,'cwBasicText-textbox');P_b(d,(IH(),IH(),HH));b=new $_b;V6b(b.db,usc,'cwBasicText-textbox-disabled');Q_b(b,Fzc);cs(b.db,xyc,true);p7b(f,new JTb('<b>\u5E38\u89C4\u6587\u672C\u6846:<\/b>'));p7b(f,Gsb(d,true));p7b(f,Gsb(b,false));c=new a0b;V6b(c.db,usc,'cwBasicText-password');a=new a0b;V6b(a.db,usc,'cwBasicText-password-disabled');Q_b(a,Fzc);cs(a.db,xyc,true);p7b(f,new JTb('<br><br><b>\u5BC6\u7801\u6587\u672C\u6846:<\/b>'));p7b(f,Gsb(c,true));p7b(f,Gsb(a,false));e=new h5b;V6b(e.db,usc,'cwBasicText-textarea');e.db.rows=5;p7b(f,new JTb('<br><br><b>\u6587\u672C\u533A\u57DF:<\/b>'));p7b(f,Gsb(e,true));return f}
var Fzc='\u53EA\u8BFB';g3(366,367,{},JH);_.Bd=function KH(a){return gI((aI(),a))?(lF(),kF):(lF(),jF)};var HH;g3(750,1,Oqc);_.qc=function Osb(){M5(this.b,Hsb())};g3(751,1,wqc,Qsb);_.Jc=function Rsb(a){Isb(this.c,this.b)};g3(752,1,Lqc,Tsb);_.Hc=function Usb(a){Isb(this.c,this.b)};g3(1094,976,bqc);_.gg=function S_b(){return L8b(this.db)};_.hg=function T_b(){return M8b(this.db)};g3(1091,1092,bqc,a0b);g3(1147,1093,bqc);_.gg=function i5b(){return L8b(this.db)};_.hg=function j5b(){return M8b(this.db)};var oU=Zec(Jxc,'CwBasicText$2',751),pU=Zec(Jxc,'CwBasicText$3',752),mZ=Zec(Dxc,'PasswordTextBox',1091),LO=Zec(dyc,'AnyRtlDirectionEstimator',366);Brc(Vn)(18);