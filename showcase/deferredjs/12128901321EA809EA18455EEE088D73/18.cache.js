function QH(){}
function X_b(a,b){$C(a.b,b)}
function Zsb(a,b){this.c=a;this.b=b}
function atb(a,b){this.c=a;this.b=b}
function PH(){PH=cqc;OH=new QH}
function nI(a){return b4($H,a)}
function Rsb(a,b){GTb(b,'Selected: '+a.pg()+uuc+a.qg())}
function X8b(b){try{return b.selectionStart}catch(a){return 0}}
function Y8b(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function i0b(){d0b();h0b.call(this,Fs($doc,'password'),'gwt-PasswordTextBox')}
function Psb(a,b){var c,d;c=new mYb;CLb();xs(c.f,_wc,4);jYb(c,a);if(b){d=new KTb('Selected: 0, 0');Dj(a,new Zsb(a,d),(uz(),uz(),tz));Dj(a,new atb(a,d),(Ry(),Ry(),Qy));jYb(c,d)}return c}
function Qsb(){var a,b,c,d,e,f;f=new A7b;CLb();xs(f.f,_wc,5);d=new g0b;b7b(d.db,Fsc,'cwBasicText-textbox');X_b(d,(PH(),PH(),OH));b=new g0b;b7b(b.db,Fsc,'cwBasicText-textbox-disabled');Y_b(b,Qzc);ws(b.db,Lyc,true);x7b(f,new PTb('<b>Normal text box:<\/b>'));x7b(f,Psb(d,true));x7b(f,Psb(b,false));c=new i0b;b7b(c.db,Fsc,'cwBasicText-password');a=new i0b;b7b(a.db,Fsc,'cwBasicText-password-disabled');Y_b(a,Qzc);ws(a.db,Lyc,true);x7b(f,new PTb('<br><br><b>Password text box:<\/b>'));x7b(f,Psb(c,true));x7b(f,Psb(a,false));e=new p5b;b7b(e.db,Fsc,'cwBasicText-textarea');e.db.rows=5;x7b(f,new PTb('<br><br><b>Text area:<\/b>'));x7b(f,Psb(e,true));return f}
var Qzc='read only';o3(366,367,{},QH);_.Kd=function RH(a){return nI((hI(),a))?(oF(),nF):(oF(),mF)};var OH;o3(751,1,Yqc);_.qc=function Xsb(){U5(this.b,Qsb())};o3(752,1,Gqc,Zsb);_.Nc=function $sb(a){Rsb(this.c,this.b)};o3(753,1,Vqc,atb);_.Lc=function btb(a){Rsb(this.c,this.b)};o3(1096,977,lqc);_.pg=function $_b(){return X8b(this.db)};_.qg=function __b(){return Y8b(this.db)};o3(1093,1094,lqc,i0b);o3(1149,1095,lqc);_.pg=function q5b(){return X8b(this.db)};_.qg=function r5b(){return Y8b(this.db)};var uU=gfc(Vxc,'CwBasicText$2',752),vU=gfc(Vxc,'CwBasicText$3',753),sZ=gfc(Pxc,'PasswordTextBox',1093),RO=gfc(pyc,'AnyRtlDirectionEstimator',366);Lrc(Vn)(18);