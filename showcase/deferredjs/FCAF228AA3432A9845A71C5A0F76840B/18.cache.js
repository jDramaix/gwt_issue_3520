function JH(){}
function Q1b(a,b){NC(a.a,b)}
function Ttb(a,b){this.b=a;this.a=b}
function Wtb(a,b){this.b=a;this.a=b}
function gI(a){return E4(TH,a)}
function IH(){IH=lsc;HH=new JH}
function Ltb(a,b){wVb(b,K1c+a.jg()+Myc+a.kg())}
function b2b(){Y1b();a2b.call(this,$r($doc,L1c),M1c)}
function ebc(b){try{var c=b.document.selection.createRange();if(c.parentElement()!==b)return 0;return c.text.length}catch(a){return 0}}
function dbc(b){try{var c=b.document.selection.createRange();if(c.parentElement()!==b)return -1;return -c.move(N1c,-65535)}catch(a){return 0}}
function Jtb(a,b){var c,d;c=new d$b;sNb();Sr(c.e,nJc,4);a$b(c,a);if(b){d=new AVb(A1c);rj(a,new Ttb(a,d),(gz(),gz(),fz));rj(a,new Wtb(a,d),(Dy(),Dy(),Cy));a$b(c,d)}return c}
function gbc(b){try{var c=b.document.selection.createRange();if(c.parentElement()!==b)return 0;var d=c.text.length;var e=0;var f=c.duplicate();f.moveEnd(N1c,-1);var g=f.text.length;while(g==d&&f.parentElement()==b&&c.compareEndPoints(P1c,f)<=0){e+=2;f.moveEnd(N1c,-1);g=f.text.length}return d+e}catch(a){return 0}}
function fbc(b){try{var c=b.document.selection.createRange();if(c.parentElement()!==b)return -1;var d=c.duplicate();d.moveToElementText(b);d.setEndPoint(O1c,c);var e=d.text.length;var f=0;var g=d.duplicate();g.moveEnd(N1c,-1);var i=g.text.length;while(i==e&&g.parentElement()==b){f+=2;g.moveEnd(N1c,-1);i=g.text.length}return e+f}catch(a){return 0}}
function Ktb(){var a,b,c,d,e,f;f=new E9b;sNb();Sr(f.e,nJc,5);d=new _1b;f9b(d.cb,Ouc,B1c);Q1b(d,(IH(),IH(),HH));b=new _1b;f9b(b.cb,Ouc,C1c);R1b(b,D1c);Rr(b.cb,xWc,true);B9b(f,new FVb(E1c));B9b(f,Jtb(d,true));B9b(f,Jtb(b,false));c=new b2b;f9b(c.cb,Ouc,F1c);a=new b2b;f9b(a.cb,Ouc,G1c);R1b(a,D1c);Rr(a.cb,xWc,true);B9b(f,new FVb(H1c));B9b(f,Jtb(c,true));B9b(f,Jtb(a,false));e=new q7b;f9b(e.cb,Ouc,I1c);e.cb.rows=5;B9b(f,new FVb(J1c));B9b(f,Jtb(e,true));return f}
var E1c='<b>\u5E38\u89C4\u6587\u672C\u6846:<\/b>',H1c='<br><br><b>\u5BC6\u7801\u6587\u672C\u6846:<\/b>',J1c='<br><br><b>\u6587\u672C\u533A\u57DF:<\/b>',T1c='AnyRtlDirectionEstimator',Q1c='CwBasicText$2',R1c='CwBasicText$3',O1c='EndToStart',S1c='PasswordTextBox',P1c='StartToEnd',N1c='character',F1c='cwBasicText-password',G1c='cwBasicText-password-disabled',I1c='cwBasicText-textarea',B1c='cwBasicText-textbox',C1c='cwBasicText-textbox-disabled',M1c='gwt-PasswordTextBox',L1c='password',D1c='\u53EA\u8BFB',K1c='\u5DF2\u9009\u62E9: ',A1c='\u5DF2\u9009\u62E9: 0, 0';m3(368,369,{},JH);_.yd=function KH(a){return gI((aI(),a))?(lF(),kF):(lF(),jF)};var HH;m3(756,1,ftc);_.mc=function Rtb(){v6(this.a,Ktb())};m3(757,1,Osc,Ttb);_.Gc=function Utb(a){Ltb(this.b,this.a)};m3(758,1,ctc,Wtb);_.Ec=function Xtb(a){Ltb(this.b,this.a)};m3(1102,984,tsc);_.jg=function T1b(){return dbc(this.cb)};_.kg=function U1b(){return ebc(this.cb)};m3(1099,1100,tsc,b2b);m3(1157,1101,tsc);_.jg=function r7b(){return fbc(this.cb)};_.kg=function s7b(){return gbc(this.cb)};var pU=qhc(lNc,Q1c,757),qU=qhc(lNc,R1c,758),nZ=qhc(nMc,S1c,1099),IO=qhc(GSc,T1c,368);Ttc(Jn)(18);