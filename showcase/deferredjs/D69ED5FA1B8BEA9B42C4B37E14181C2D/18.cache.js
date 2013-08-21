function vU(){}
function _cc(a,b){$C(a.b,b)}
function bGb(a,b){this.c=a;this.b=b}
function eGb(a,b){this.c=a;this.b=b}
function uU(){uU=jDc;tU=new vU}
function UU(a){return fhb(FU,a)}
function _lc(b){try{return b.selectionStart}catch(a){return 0}}
function amc(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function VFb(a,b){K4b(b,'S\xE9lectionn\xE9: '+a.mh()+BHc+a.nh())}
function mdc(){hdc();ldc.call(this,Fs($doc,'password'),'gwt-PasswordTextBox')}
function TFb(a,b){var c,d;c=new q9b;GYb();xs(c.f,kKc,4);n9b(c,a);if(b){d=new O4b('S\xE9lectionn\xE9: 0, 0');Dj(a,new bGb(a,d),(uz(),uz(),tz));Dj(a,new eGb(a,d),(Ry(),Ry(),Qy));n9b(c,d)}return c}
function UFb(){var a,b,c,d,e,f;f=new Ekc;GYb();xs(f.f,kKc,5);d=new kdc;fkc(d.db,MFc,'cwBasicText-textbox');_cc(d,(uU(),uU(),tU));b=new kdc;fkc(b.db,MFc,'cwBasicText-textbox-disabled');adc(b,bNc);ws(b.db,SLc,true);Bkc(f,new T4b('<b>Zone de texte normale:<\/b>'));Bkc(f,TFb(d,true));Bkc(f,TFb(b,false));c=new mdc;fkc(c.db,MFc,'cwBasicText-password');a=new mdc;fkc(a.db,MFc,'cwBasicText-password-disabled');adc(a,bNc);ws(a.db,SLc,true);Bkc(f,new T4b('<br><br><b>Zone de texte &laquo;mot de passe&raquo;:<\/b>'));Bkc(f,TFb(c,true));Bkc(f,TFb(a,false));e=new tic;fkc(e.db,MFc,'cwBasicText-textarea');e.db.rows=5;Bkc(f,new T4b('<br><br><b>Zone de texte:<\/b>'));Bkc(f,TFb(e,true));return f}
var bNc='lecture seulement';sgb(391,392,{},vU);_.He=function wU(a){return UU((OU(),a))?(GG(),FG):(GG(),EG)};var tU;sgb(776,1,dEc);_.qc=function _Fb(){Yib(this.b,UFb())};sgb(777,1,NDc,bGb);_.Nc=function cGb(a){VFb(this.c,this.b)};sgb(778,1,aEc,eGb);_.Lc=function fGb(a){VFb(this.c,this.b)};sgb(1121,1002,sDc);_.mh=function cdc(){return _lc(this.db)};_.nh=function ddc(){return amc(this.db)};sgb(1118,1119,sDc,mdc);sgb(1174,1120,sDc);_.mh=function uic(){return _lc(this.db)};_.nh=function vic(){return amc(this.db)};var y5=nsc(eLc,'CwBasicText$2',777),z5=nsc(eLc,'CwBasicText$3',778),wab=nsc($Kc,'PasswordTextBox',1118),V_=nsc(ALc,'AnyRtlDirectionEstimator',391);SEc(Vn)(18);