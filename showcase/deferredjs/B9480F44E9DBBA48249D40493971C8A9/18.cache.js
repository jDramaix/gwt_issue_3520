function DH(){}
function H1b(a,b){NC(a.a,b)}
function Jtb(a,b){this.b=a;this.a=b}
function Mtb(a,b){this.b=a;this.a=b}
function aI(a){return t4(NH,a)}
function CH(){CH=fsc;BH=new DH}
function Btb(a,b){mVb(b,F1c+a.og()+Gyc+a.pg())}
function U1b(){P1b();T1b.call(this,$r($doc,G1c),H1c)}
function Xac(b){try{var c=b.document.selection.createRange();if(c.parentElement()!==b)return 0;return c.text.length}catch(a){return 0}}
function Wac(b){try{var c=b.document.selection.createRange();if(c.parentElement()!==b)return -1;return -c.move(I1c,-65535)}catch(a){return 0}}
function ztb(a,b){var c,d;c=new WZb;iNb();Sr(c.e,gJc,4);TZb(c,a);if(b){d=new qVb(v1c);rj(a,new Jtb(a,d),(gz(),gz(),fz));rj(a,new Mtb(a,d),(Dy(),Dy(),Cy));TZb(c,d)}return c}
function Zac(b){try{var c=b.document.selection.createRange();if(c.parentElement()!==b)return 0;var d=c.text.length;var e=0;var f=c.duplicate();f.moveEnd(I1c,-1);var g=f.text.length;while(g==d&&f.parentElement()==b&&c.compareEndPoints(K1c,f)<=0){e+=2;f.moveEnd(I1c,-1);g=f.text.length}return d+e}catch(a){return 0}}
function Yac(b){try{var c=b.document.selection.createRange();if(c.parentElement()!==b)return -1;var d=c.duplicate();d.moveToElementText(b);d.setEndPoint(J1c,c);var e=d.text.length;var f=0;var g=d.duplicate();g.moveEnd(I1c,-1);var i=g.text.length;while(i==e&&g.parentElement()==b){f+=2;g.moveEnd(I1c,-1);i=g.text.length}return e+f}catch(a){return 0}}
function Atb(){var a,b,c,d,e,f;f=new v9b;iNb();Sr(f.e,gJc,5);d=new S1b;Y8b(d.cb,Iuc,w1c);H1b(d,(CH(),CH(),BH));b=new S1b;Y8b(b.cb,Iuc,x1c);I1b(b,y1c);Rr(b.cb,rWc,true);s9b(f,new vVb(z1c));s9b(f,ztb(d,true));s9b(f,ztb(b,false));c=new U1b;Y8b(c.cb,Iuc,A1c);a=new U1b;Y8b(a.cb,Iuc,B1c);I1b(a,y1c);Rr(a.cb,rWc,true);s9b(f,new vVb(C1c));s9b(f,ztb(c,true));s9b(f,ztb(a,false));e=new h7b;Y8b(e.cb,Iuc,D1c);e.cb.rows=5;s9b(f,new vVb(E1c));s9b(f,ztb(e,true));return f}
var z1c='<b>Normal text box:<\/b>',C1c='<br><br><b>Password text box:<\/b>',E1c='<br><br><b>Text area:<\/b>',O1c='AnyRtlDirectionEstimator',L1c='CwBasicText$2',M1c='CwBasicText$3',J1c='EndToStart',N1c='PasswordTextBox',F1c='Selected: ',v1c='Selected: 0, 0',K1c='StartToEnd',I1c='character',A1c='cwBasicText-password',B1c='cwBasicText-password-disabled',D1c='cwBasicText-textarea',w1c='cwBasicText-textbox',x1c='cwBasicText-textbox-disabled',H1c='gwt-PasswordTextBox',G1c='password',y1c='read only';b3(364,365,{},DH);_.Dd=function EH(a){return aI((WH(),a))?(bF(),aF):(bF(),_E)};var BH;b3(753,1,_sc);_.mc=function Htb(){k6(this.a,Atb())};b3(754,1,Isc,Jtb);_.Gc=function Ktb(a){Btb(this.b,this.a)};b3(755,1,Ysc,Mtb);_.Ec=function Ntb(a){Btb(this.b,this.a)};b3(1099,981,nsc);_.og=function K1b(){return Wac(this.cb)};_.pg=function L1b(){return Xac(this.cb)};b3(1096,1097,nsc,U1b);b3(1154,1098,nsc);_.og=function i7b(){return Yac(this.cb)};_.pg=function j7b(){return Zac(this.cb)};var eU=khc(eNc,L1c,754),fU=khc(eNc,M1c,755),cZ=khc(gMc,N1c,1096),xO=khc(zSc,O1c,364);Ntc(Jn)(18);