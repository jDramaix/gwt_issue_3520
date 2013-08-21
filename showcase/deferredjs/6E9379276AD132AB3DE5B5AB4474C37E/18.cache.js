function Vkb(){}
function EGc(a,b){uC(a.a,b)}
function G7b(a,b){this.b=a;this.a=b}
function J7b(a,b){this.b=a;this.a=b}
function slb(a){return KKb(dlb,a)}
function Ukb(){Ukb=K4c;Tkb=new Vkb}
function y7b(a,b){qyc(b,'Selected: '+a.fh()+N8c+a.gh())}
function BPc(b){try{return b.selectionStart}catch(a){return 0}}
function CPc(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function RGc(){MGc();QGc.call(this,$r($doc,'password'),'gwt-PasswordTextBox')}
function w7b(a,b){var c,d;c=new WCc;oqc();Sr(c.e,Vbd,4);TCc(c,a);if(b){d=new uyc('Selected: 0, 0');rj(a,new G7b(a,d),(Py(),Py(),Oy));rj(a,new J7b(a,d),(ky(),ky(),jy));TCc(c,d)}return c}
function x7b(){var a,b,c,d,e,f;f=new mOc;oqc();Sr(f.e,Vbd,5);d=new PGc;PNc(d.cb,j7c,'cwBasicText-textbox');EGc(d,(Ukb(),Ukb(),Tkb));b=new PGc;PNc(b.cb,j7c,'cwBasicText-textbox-disabled');FGc(b,Ked);Rr(b.cb,Fdd,true);jOc(f,new zyc('<b>Normal text box:<\/b>'));jOc(f,w7b(d,true));jOc(f,w7b(b,false));c=new RGc;PNc(c.cb,j7c,'cwBasicText-password');a=new RGc;PNc(a.cb,j7c,'cwBasicText-password-disabled');FGc(a,Ked);Rr(a.cb,Fdd,true);jOc(f,new zyc('<br><br><b>Password text box:<\/b>'));jOc(f,w7b(c,true));jOc(f,w7b(a,false));e=new aMc;PNc(e.cb,j7c,'cwBasicText-textarea');e.cb.rows=5;jOc(f,new zyc('<br><br><b>Text area:<\/b>'));jOc(f,w7b(e,true));return f}
var Ked='read only';SJb(451,452,{},Vkb);_.ze=function Wkb(a){return slb((mlb(),a))?(hH(),gH):(hH(),fH)};var Tkb;SJb(837,1,D5c);_.lc=function E7b(){BMb(this.a,x7b())};SJb(838,1,l5c,G7b);_.Fc=function H7b(a){y7b(this.b,this.a)};SJb(839,1,A5c,J7b);_.Dc=function K7b(a){y7b(this.b,this.a)};SJb(1183,1065,S4c);_.fh=function HGc(){return BPc(this.cb)};_.gh=function IGc(){return CPc(this.cb)};SJb(1180,1181,S4c,RGc);SJb(1236,1182,S4c);_.fh=function bMc(){return BPc(this.cb)};_.gh=function cMc(){return CPc(this.cb)};var $yb=PVc(Pcd,'CwBasicText$2',838),_yb=PVc(Pcd,'CwBasicText$3',839),YDb=PVc(Jcd,'PasswordTextBox',1180),utb=PVc(jdd,'AnyRtlDirectionEstimator',451);q6c(Jn)(18);