function _T(){}
function Dcc(a,b){EC(a.a,b)}
function DFb(a,b){this.b=a;this.a=b}
function GFb(a,b){this.b=a;this.a=b}
function yU(a){return Hgb(jU,a)}
function $T(){$T=ICc;ZT=new _T}
function vFb(a,b){p4b(b,'S\xE9lectionn\xE9: '+a.eh()+OGc+a.fh())}
function Qcc(){Lcc();Pcc.call(this,Zr($doc,'password'),'gwt-PasswordTextBox')}
function Blc(b){try{var c=b.document.selection.createRange();if(c.parentElement()!==b)return 0;return c.text.length}catch(a){return 0}}
function Alc(b){try{var c=b.document.selection.createRange();if(c.parentElement()!==b)return -1;return -c.move(pMc,-65535)}catch(a){return 0}}
function tFb(a,b){var c,d;c=new V8b;zYb();Rr(c.e,wJc,4);S8b(c,a);if(b){d=new t4b('S\xE9lectionn\xE9: 0, 0');qj(a,new DFb(a,d),(Zy(),Zy(),Yy));qj(a,new GFb(a,d),(uy(),uy(),ty));S8b(c,d)}return c}
function Dlc(b){try{var c=b.document.selection.createRange();if(c.parentElement()!==b)return 0;var d=c.text.length;var e=0;var f=c.duplicate();f.moveEnd(pMc,-1);var g=f.text.length;while(g==d&&f.parentElement()==b&&c.compareEndPoints('StartToEnd',f)<=0){e+=2;f.moveEnd(pMc,-1);g=f.text.length}return d+e}catch(a){return 0}}
function Clc(b){try{var c=b.document.selection.createRange();if(c.parentElement()!==b)return -1;var d=c.duplicate();d.moveToElementText(b);d.setEndPoint('EndToStart',c);var e=d.text.length;var f=0;var g=d.duplicate();g.moveEnd(pMc,-1);var i=g.text.length;while(i==e&&g.parentElement()==b){f+=2;g.moveEnd(pMc,-1);i=g.text.length}return e+f}catch(a){return 0}}
function uFb(){var a,b,c,d,e,f;f=new lkc;zYb();Rr(f.e,wJc,5);d=new Occ;Ojc(d.cb,hFc,'cwBasicText-textbox');Dcc(d,($T(),$T(),ZT));b=new Occ;Ojc(b.cb,hFc,'cwBasicText-textbox-disabled');Ecc(b,oMc);Qr(b.cb,dLc,true);ikc(f,new y4b('<b>Zone de texte normale:<\/b>'));ikc(f,tFb(d,true));ikc(f,tFb(b,false));c=new Qcc;Ojc(c.cb,hFc,'cwBasicText-password');a=new Qcc;Ojc(a.cb,hFc,'cwBasicText-password-disabled');Ecc(a,oMc);Qr(a.cb,dLc,true);ikc(f,new y4b('<br><br><b>Zone de texte &laquo;mot de passe&raquo;:<\/b>'));ikc(f,tFb(c,true));ikc(f,tFb(a,false));e=new _hc;Ojc(e.cb,hFc,'cwBasicText-textarea');e.cb.rows=5;ikc(f,new y4b('<br><br><b>Zone de texte:<\/b>'));ikc(f,tFb(e,true));return f}
var pMc='character',oMc='lecture seulement';Pfb(388,389,{},_T);_.ze=function aU(a){return yU((sU(),a))?(kG(),jG):(kG(),iG)};var ZT;Pfb(774,1,BDc);_.lc=function BFb(){yib(this.a,uFb())};Pfb(775,1,jDc,DFb);_.Fc=function EFb(a){vFb(this.b,this.a)};Pfb(776,1,yDc,GFb);_.Dc=function HFb(a){vFb(this.b,this.a)};Pfb(1119,1001,QCc);_.eh=function Gcc(){return Alc(this.cb)};_.fh=function Hcc(){return Blc(this.cb)};Pfb(1116,1117,QCc,Qcc);Pfb(1172,1118,QCc);_.eh=function aic(){return Clc(this.cb)};_.fh=function bic(){return Dlc(this.cb)};var Y4=Nrc(rKc,'CwBasicText$2',775),Z4=Nrc(rKc,'CwBasicText$3',776),V9=Nrc(lKc,'PasswordTextBox',1116),s_=Nrc(NKc,'AnyRtlDirectionEstimator',388);oEc(In)(18);