function vU(){}
function adc(a,b){$C(a.b,b)}
function bGb(a,b){this.c=a;this.b=b}
function eGb(a,b){this.c=a;this.b=b}
function uU(){uU=kDc;tU=new vU}
function UU(a){return fhb(FU,a)}
function amc(b){try{return b.selectionStart}catch(a){return 0}}
function bmc(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function VFb(a,b){K4b(b,'S\xE9lectionn\xE9: '+a.mh()+CHc+a.nh())}
function ndc(){idc();mdc.call(this,Fs($doc,'password'),'gwt-PasswordTextBox')}
function TFb(a,b){var c,d;c=new r9b;GYb();xs(c.f,lKc,4);o9b(c,a);if(b){d=new O4b('S\xE9lectionn\xE9: 0, 0');Dj(a,new bGb(a,d),(uz(),uz(),tz));Dj(a,new eGb(a,d),(Ry(),Ry(),Qy));o9b(c,d)}return c}
function UFb(){var a,b,c,d,e,f;f=new Fkc;GYb();xs(f.f,lKc,5);d=new ldc;gkc(d.db,NFc,'cwBasicText-textbox');adc(d,(uU(),uU(),tU));b=new ldc;gkc(b.db,NFc,'cwBasicText-textbox-disabled');bdc(b,cNc);ws(b.db,TLc,true);Ckc(f,new T4b('<b>Zone de texte normale:<\/b>'));Ckc(f,TFb(d,true));Ckc(f,TFb(b,false));c=new ndc;gkc(c.db,NFc,'cwBasicText-password');a=new ndc;gkc(a.db,NFc,'cwBasicText-password-disabled');bdc(a,cNc);ws(a.db,TLc,true);Ckc(f,new T4b('<br><br><b>Zone de texte &laquo;mot de passe&raquo;:<\/b>'));Ckc(f,TFb(c,true));Ckc(f,TFb(a,false));e=new uic;gkc(e.db,NFc,'cwBasicText-textarea');e.db.rows=5;Ckc(f,new T4b('<br><br><b>Zone de texte:<\/b>'));Ckc(f,TFb(e,true));return f}
var cNc='lecture seulement';sgb(391,392,{},vU);_.He=function wU(a){return UU((OU(),a))?(GG(),FG):(GG(),EG)};var tU;sgb(776,1,eEc);_.qc=function _Fb(){Yib(this.b,UFb())};sgb(777,1,ODc,bGb);_.Nc=function cGb(a){VFb(this.c,this.b)};sgb(778,1,bEc,eGb);_.Lc=function fGb(a){VFb(this.c,this.b)};sgb(1121,1002,tDc);_.mh=function ddc(){return amc(this.db)};_.nh=function edc(){return bmc(this.db)};sgb(1118,1119,tDc,ndc);sgb(1174,1120,tDc);_.mh=function vic(){return amc(this.db)};_.nh=function wic(){return bmc(this.db)};var y5=osc(fLc,'CwBasicText$2',777),z5=osc(fLc,'CwBasicText$3',778),wab=osc(_Kc,'PasswordTextBox',1118),V_=osc(BLc,'AnyRtlDirectionEstimator',391);TEc(Vn)(18);