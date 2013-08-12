function vU(){}
function _cc(a,b){$C(a.b,b)}
function bGb(a,b){this.c=a;this.b=b}
function eGb(a,b){this.c=a;this.b=b}
function uU(){uU=gDc;tU=new vU}
function UU(a){return fhb(FU,a)}
function _lc(b){try{return b.selectionStart}catch(a){return 0}}
function amc(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function VFb(a,b){K4b(b,'S\xE9lectionn\xE9: '+a.mh()+yHc+a.nh())}
function mdc(){hdc();ldc.call(this,Fs($doc,'password'),'gwt-PasswordTextBox')}
function TFb(a,b){var c,d;c=new q9b;GYb();xs(c.f,hKc,4);n9b(c,a);if(b){d=new O4b('S\xE9lectionn\xE9: 0, 0');Dj(a,new bGb(a,d),(uz(),uz(),tz));Dj(a,new eGb(a,d),(Ry(),Ry(),Qy));n9b(c,d)}return c}
function UFb(){var a,b,c,d,e,f;f=new Ekc;GYb();xs(f.f,hKc,5);d=new kdc;fkc(d.db,JFc,'cwBasicText-textbox');_cc(d,(uU(),uU(),tU));b=new kdc;fkc(b.db,JFc,'cwBasicText-textbox-disabled');adc(b,$Mc);ws(b.db,PLc,true);Bkc(f,new T4b('<b>Zone de texte normale:<\/b>'));Bkc(f,TFb(d,true));Bkc(f,TFb(b,false));c=new mdc;fkc(c.db,JFc,'cwBasicText-password');a=new mdc;fkc(a.db,JFc,'cwBasicText-password-disabled');adc(a,$Mc);ws(a.db,PLc,true);Bkc(f,new T4b('<br><br><b>Zone de texte &laquo;mot de passe&raquo;:<\/b>'));Bkc(f,TFb(c,true));Bkc(f,TFb(a,false));e=new tic;fkc(e.db,JFc,'cwBasicText-textarea');e.db.rows=5;Bkc(f,new T4b('<br><br><b>Zone de texte:<\/b>'));Bkc(f,TFb(e,true));return f}
var $Mc='lecture seulement';sgb(391,392,{},vU);_.He=function wU(a){return UU((OU(),a))?(GG(),FG):(GG(),EG)};var tU;sgb(776,1,aEc);_.qc=function _Fb(){Yib(this.b,UFb())};sgb(777,1,KDc,bGb);_.Nc=function cGb(a){VFb(this.c,this.b)};sgb(778,1,ZDc,eGb);_.Lc=function fGb(a){VFb(this.c,this.b)};sgb(1121,1002,pDc);_.mh=function cdc(){return _lc(this.db)};_.nh=function ddc(){return amc(this.db)};sgb(1118,1119,pDc,mdc);sgb(1174,1120,pDc);_.mh=function uic(){return _lc(this.db)};_.nh=function vic(){return amc(this.db)};var y5=ksc(bLc,'CwBasicText$2',777),z5=ksc(bLc,'CwBasicText$3',778),wab=ksc(XKc,'PasswordTextBox',1118),V_=ksc(xLc,'AnyRtlDirectionEstimator',391);PEc(Vn)(18);