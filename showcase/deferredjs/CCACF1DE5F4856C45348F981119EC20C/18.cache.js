function iU(){}
function Jcc(a,b){NC(a.b,b)}
function KFb(a,b){this.c=a;this.b=b}
function NFb(a,b){this.c=a;this.b=b}
function HU(a){return Ogb(sU,a)}
function hU(){hU=OCc;gU=new iU}
function Flc(b){try{return b.selectionStart}catch(a){return 0}}
function Glc(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function CFb(a,b){u4b(b,'S\xE9lectionn\xE9: '+a.ih()+UGc+a.jh())}
function Wcc(){Rcc();Vcc.call(this,ls($doc,'password'),'gwt-PasswordTextBox')}
function AFb(a,b){var c,d;c=new _8b;qYb();ds(c.f,OJc,4);Y8b(c,a);if(b){d=new y4b('S\xE9lectionn\xE9: 0, 0');Cj(a,new KFb(a,d),(hz(),hz(),gz));Cj(a,new NFb(a,d),(Ey(),Ey(),Dy));Y8b(c,d)}return c}
function BFb(){var a,b,c,d,e,f;f=new mkc;qYb();ds(f.f,OJc,5);d=new Ucc;Pjc(d.db,oFc,'cwBasicText-textbox');Jcc(d,(hU(),hU(),gU));b=new Ucc;Pjc(b.db,oFc,'cwBasicText-textbox-disabled');Kcc(b,FMc);cs(b.db,uLc,true);jkc(f,new D4b('<b>Zone de texte normale:<\/b>'));jkc(f,AFb(d,true));jkc(f,AFb(b,false));c=new Wcc;Pjc(c.db,oFc,'cwBasicText-password');a=new Wcc;Pjc(a.db,oFc,'cwBasicText-password-disabled');Kcc(a,FMc);cs(a.db,uLc,true);jkc(f,new D4b('<br><br><b>Zone de texte &laquo;mot de passe&raquo;:<\/b>'));jkc(f,AFb(c,true));jkc(f,AFb(a,false));e=new bic;Pjc(e.db,oFc,'cwBasicText-textarea');e.db.rows=5;jkc(f,new D4b('<br><br><b>Zone de texte:<\/b>'));jkc(f,AFb(e,true));return f}
var FMc='lecture seulement';_fb(387,388,{},iU);_.De=function jU(a){return HU((BU(),a))?(tG(),sG):(tG(),rG)};var gU;_fb(772,1,IDc);_.qc=function IFb(){Fib(this.b,BFb())};_fb(773,1,qDc,KFb);_.Jc=function LFb(a){CFb(this.c,this.b)};_fb(774,1,FDc,NFb);_.Hc=function OFb(a){CFb(this.c,this.b)};_fb(1116,998,XCc);_.ih=function Mcc(){return Flc(this.db)};_.jh=function Ncc(){return Glc(this.db)};_fb(1113,1114,XCc,Wcc);_fb(1169,1115,XCc);_.ih=function cic(){return Flc(this.db)};_.jh=function dic(){return Glc(this.db)};var h5=Trc(IKc,'CwBasicText$2',773),i5=Trc(IKc,'CwBasicText$3',774),fab=Trc(CKc,'PasswordTextBox',1113),E_=Trc(cLc,'AnyRtlDirectionEstimator',387);vEc(Vn)(18);