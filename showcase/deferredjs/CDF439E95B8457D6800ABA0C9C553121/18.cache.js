function _7(){}
function utc(a,b){FC(a.a,b)}
function uWb(a,b){this.b=a;this.a=b}
function xWb(a,b){this.b=a;this.a=b}
function y8(a){return yxb(j8,a)}
function $7(){$7=zTc;Z7=new _7}
function Htc(){Ctc();Gtc.call(this,Zr($doc,'password'),'gwt-PasswordTextBox')}
function mWb(a,b){glc(b,'\u0645\u062E\u062A\u0627\u0631\u0629: '+a.eh()+FXc+a.fh())}
function sCc(b){try{var c=b.document.selection.createRange();if(c.parentElement()!==b)return 0;return c.text.length}catch(a){return 0}}
function rCc(b){try{var c=b.document.selection.createRange();if(c.parentElement()!==b)return -1;return -c.move(o1c,-65535)}catch(a){return 0}}
function kWb(a,b){var c,d;c=new Mpc;qdc();Rr(c.e,x$c,4);Jpc(c,a);if(b){d=new klc('\u0645\u062E\u062A\u0627\u0631\u0629: 0, 0');qj(a,new uWb(a,d),($y(),$y(),Zy));qj(a,new xWb(a,d),(vy(),vy(),uy));Jpc(c,d)}return c}
function uCc(b){try{var c=b.document.selection.createRange();if(c.parentElement()!==b)return 0;var d=c.text.length;var e=0;var f=c.duplicate();f.moveEnd(o1c,-1);var g=f.text.length;while(g==d&&f.parentElement()==b&&c.compareEndPoints('StartToEnd',f)<=0){e+=2;f.moveEnd(o1c,-1);g=f.text.length}return d+e}catch(a){return 0}}
function tCc(b){try{var c=b.document.selection.createRange();if(c.parentElement()!==b)return -1;var d=c.duplicate();d.moveToElementText(b);d.setEndPoint('EndToStart',c);var e=d.text.length;var f=0;var g=d.duplicate();g.moveEnd(o1c,-1);var i=g.text.length;while(i==e&&g.parentElement()==b){f+=2;g.moveEnd(o1c,-1);i=g.text.length}return e+f}catch(a){return 0}}
function lWb(){var a,b,c,d,e,f;f=new cBc;qdc();Rr(f.e,x$c,5);d=new Ftc;FAc(d.cb,$Vc,'cwBasicText-textbox');utc(d,($7(),$7(),Z7));b=new Ftc;FAc(b.cb,$Vc,'cwBasicText-textbox-disabled');vtc(b,n1c);Qr(b.cb,d0c,true);_Ac(f,new plc('<b>\u0645\u0631\u0628\u0639 \u0646\u0635 \u0639\u0627\u062F\u064A:<\/b>'));_Ac(f,kWb(d,true));_Ac(f,kWb(b,false));c=new Htc;FAc(c.cb,$Vc,'cwBasicText-password');a=new Htc;FAc(a.cb,$Vc,'cwBasicText-password-disabled');vtc(a,n1c);Qr(a.cb,d0c,true);_Ac(f,new plc('<br><br><b>\u0645\u0631\u0628\u0639 \u0646\u0635 \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631:<\/b>'));_Ac(f,kWb(c,true));_Ac(f,kWb(a,false));e=new Syc;FAc(e.cb,$Vc,'cwBasicText-textarea');e.cb.rows=5;_Ac(f,new plc('<br><br><b>\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0646\u0635:<\/b>'));_Ac(f,kWb(e,true));return f}
var o1c='character',n1c='\u0642\u0631\u0627\u0621\u0629 \u0641\u0642\u0637';Gwb(433,434,{},_7);_.ze=function a8(a){return y8((s8(),a))?(NG(),MG):(NG(),LG)};var Z7;Gwb(819,1,sUc);_.lc=function sWb(){pzb(this.a,lWb())};Gwb(820,1,aUc,uWb);_.Fc=function vWb(a){mWb(this.b,this.a)};Gwb(821,1,pUc,xWb);_.Dc=function yWb(a){mWb(this.b,this.a)};Gwb(1164,1046,HTc);_.eh=function xtc(){return rCc(this.cb)};_.fh=function ytc(){return sCc(this.cb)};Gwb(1161,1162,HTc,Htc);Gwb(1217,1163,HTc);_.eh=function Tyc(){return tCc(this.cb)};_.fh=function Uyc(){return uCc(this.cb)};var Plb=EIc(s_c,'CwBasicText$2',820),Qlb=EIc(s_c,'CwBasicText$3',821),Mqb=EIc(m_c,'PasswordTextBox',1161),jgb=EIc(O_c,'AnyRtlDirectionEstimator',433);fVc(In)(18);