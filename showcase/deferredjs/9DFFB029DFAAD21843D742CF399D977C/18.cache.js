function iU(){}
function Icc(a,b){NC(a.b,b)}
function KFb(a,b){this.c=a;this.b=b}
function NFb(a,b){this.c=a;this.b=b}
function HU(a){return Ogb(sU,a)}
function hU(){hU=KCc;gU=new iU}
function Elc(b){try{return b.selectionStart}catch(a){return 0}}
function Flc(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function CFb(a,b){u4b(b,'S\xE9lectionn\xE9: '+a.ih()+QGc+a.jh())}
function Vcc(){Qcc();Ucc.call(this,ls($doc,'password'),'gwt-PasswordTextBox')}
function AFb(a,b){var c,d;c=new $8b;qYb();ds(c.f,KJc,4);X8b(c,a);if(b){d=new y4b('S\xE9lectionn\xE9: 0, 0');Cj(a,new KFb(a,d),(hz(),hz(),gz));Cj(a,new NFb(a,d),(Ey(),Ey(),Dy));X8b(c,d)}return c}
function BFb(){var a,b,c,d,e,f;f=new lkc;qYb();ds(f.f,KJc,5);d=new Tcc;Ojc(d.db,kFc,'cwBasicText-textbox');Icc(d,(hU(),hU(),gU));b=new Tcc;Ojc(b.db,kFc,'cwBasicText-textbox-disabled');Jcc(b,BMc);cs(b.db,qLc,true);ikc(f,new D4b('<b>Zone de texte normale:<\/b>'));ikc(f,AFb(d,true));ikc(f,AFb(b,false));c=new Vcc;Ojc(c.db,kFc,'cwBasicText-password');a=new Vcc;Ojc(a.db,kFc,'cwBasicText-password-disabled');Jcc(a,BMc);cs(a.db,qLc,true);ikc(f,new D4b('<br><br><b>Zone de texte &laquo;mot de passe&raquo;:<\/b>'));ikc(f,AFb(c,true));ikc(f,AFb(a,false));e=new aic;Ojc(e.db,kFc,'cwBasicText-textarea');e.db.rows=5;ikc(f,new D4b('<br><br><b>Zone de texte:<\/b>'));ikc(f,AFb(e,true));return f}
var BMc='lecture seulement';_fb(387,388,{},iU);_.De=function jU(a){return HU((BU(),a))?(tG(),sG):(tG(),rG)};var gU;_fb(772,1,EDc);_.qc=function IFb(){Fib(this.b,BFb())};_fb(773,1,mDc,KFb);_.Jc=function LFb(a){CFb(this.c,this.b)};_fb(774,1,BDc,NFb);_.Hc=function OFb(a){CFb(this.c,this.b)};_fb(1116,998,TCc);_.ih=function Lcc(){return Elc(this.db)};_.jh=function Mcc(){return Flc(this.db)};_fb(1113,1114,TCc,Vcc);_fb(1169,1115,TCc);_.ih=function bic(){return Elc(this.db)};_.jh=function cic(){return Flc(this.db)};var h5=Prc(EKc,'CwBasicText$2',773),i5=Prc(EKc,'CwBasicText$3',774),fab=Prc(yKc,'PasswordTextBox',1113),E_=Prc($Kc,'AnyRtlDirectionEstimator',387);rEc(Vn)(18);