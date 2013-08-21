function Vkb(){}
function FGc(a,b){uC(a.a,b)}
function G7b(a,b){this.b=a;this.a=b}
function J7b(a,b){this.b=a;this.a=b}
function slb(a){return KKb(dlb,a)}
function Ukb(){Ukb=L4c;Tkb=new Vkb}
function y7b(a,b){qyc(b,'Selected: '+a.fh()+O8c+a.gh())}
function CPc(b){try{return b.selectionStart}catch(a){return 0}}
function DPc(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function SGc(){NGc();RGc.call(this,$r($doc,'password'),'gwt-PasswordTextBox')}
function w7b(a,b){var c,d;c=new XCc;oqc();Sr(c.e,Wbd,4);UCc(c,a);if(b){d=new uyc('Selected: 0, 0');rj(a,new G7b(a,d),(Py(),Py(),Oy));rj(a,new J7b(a,d),(ky(),ky(),jy));UCc(c,d)}return c}
function x7b(){var a,b,c,d,e,f;f=new nOc;oqc();Sr(f.e,Wbd,5);d=new QGc;QNc(d.cb,k7c,'cwBasicText-textbox');FGc(d,(Ukb(),Ukb(),Tkb));b=new QGc;QNc(b.cb,k7c,'cwBasicText-textbox-disabled');GGc(b,Led);Rr(b.cb,Gdd,true);kOc(f,new zyc('<b>Normal text box:<\/b>'));kOc(f,w7b(d,true));kOc(f,w7b(b,false));c=new SGc;QNc(c.cb,k7c,'cwBasicText-password');a=new SGc;QNc(a.cb,k7c,'cwBasicText-password-disabled');GGc(a,Led);Rr(a.cb,Gdd,true);kOc(f,new zyc('<br><br><b>Password text box:<\/b>'));kOc(f,w7b(c,true));kOc(f,w7b(a,false));e=new bMc;QNc(e.cb,k7c,'cwBasicText-textarea');e.cb.rows=5;kOc(f,new zyc('<br><br><b>Text area:<\/b>'));kOc(f,w7b(e,true));return f}
var Led='read only';SJb(451,452,{},Vkb);_.ze=function Wkb(a){return slb((mlb(),a))?(hH(),gH):(hH(),fH)};var Tkb;SJb(837,1,E5c);_.lc=function E7b(){BMb(this.a,x7b())};SJb(838,1,m5c,G7b);_.Fc=function H7b(a){y7b(this.b,this.a)};SJb(839,1,B5c,J7b);_.Dc=function K7b(a){y7b(this.b,this.a)};SJb(1183,1065,T4c);_.fh=function IGc(){return CPc(this.cb)};_.gh=function JGc(){return DPc(this.cb)};SJb(1180,1181,T4c,SGc);SJb(1236,1182,T4c);_.fh=function cMc(){return CPc(this.cb)};_.gh=function dMc(){return DPc(this.cb)};var $yb=QVc(Qcd,'CwBasicText$2',838),_yb=QVc(Qcd,'CwBasicText$3',839),YDb=QVc(Kcd,'PasswordTextBox',1180),utb=QVc(kdd,'AnyRtlDirectionEstimator',451);r6c(Jn)(18);