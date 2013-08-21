function QH(){}
function Y_b(a,b){$C(a.b,b)}
function Zsb(a,b){this.c=a;this.b=b}
function atb(a,b){this.c=a;this.b=b}
function PH(){PH=gqc;OH=new QH}
function nI(a){return b4($H,a)}
function Rsb(a,b){GTb(b,'Selected: '+a.pg()+yuc+a.qg())}
function Y8b(b){try{return b.selectionStart}catch(a){return 0}}
function Z8b(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function j0b(){e0b();i0b.call(this,Fs($doc,'password'),'gwt-PasswordTextBox')}
function Psb(a,b){var c,d;c=new nYb;CLb();xs(c.f,dxc,4);kYb(c,a);if(b){d=new KTb('Selected: 0, 0');Dj(a,new Zsb(a,d),(uz(),uz(),tz));Dj(a,new atb(a,d),(Ry(),Ry(),Qy));kYb(c,d)}return c}
function Qsb(){var a,b,c,d,e,f;f=new B7b;CLb();xs(f.f,dxc,5);d=new h0b;c7b(d.db,Jsc,'cwBasicText-textbox');Y_b(d,(PH(),PH(),OH));b=new h0b;c7b(b.db,Jsc,'cwBasicText-textbox-disabled');Z_b(b,Uzc);ws(b.db,Pyc,true);y7b(f,new PTb('<b>Normal text box:<\/b>'));y7b(f,Psb(d,true));y7b(f,Psb(b,false));c=new j0b;c7b(c.db,Jsc,'cwBasicText-password');a=new j0b;c7b(a.db,Jsc,'cwBasicText-password-disabled');Z_b(a,Uzc);ws(a.db,Pyc,true);y7b(f,new PTb('<br><br><b>Password text box:<\/b>'));y7b(f,Psb(c,true));y7b(f,Psb(a,false));e=new q5b;c7b(e.db,Jsc,'cwBasicText-textarea');e.db.rows=5;y7b(f,new PTb('<br><br><b>Text area:<\/b>'));y7b(f,Psb(e,true));return f}
var Uzc='read only';o3(366,367,{},QH);_.Kd=function RH(a){return nI((hI(),a))?(oF(),nF):(oF(),mF)};var OH;o3(751,1,arc);_.qc=function Xsb(){U5(this.b,Qsb())};o3(752,1,Kqc,Zsb);_.Nc=function $sb(a){Rsb(this.c,this.b)};o3(753,1,Zqc,atb);_.Lc=function btb(a){Rsb(this.c,this.b)};o3(1096,977,pqc);_.pg=function __b(){return Y8b(this.db)};_.qg=function a0b(){return Z8b(this.db)};o3(1093,1094,pqc,j0b);o3(1149,1095,pqc);_.pg=function r5b(){return Y8b(this.db)};_.qg=function s5b(){return Z8b(this.db)};var uU=kfc(Zxc,'CwBasicText$2',752),vU=kfc(Zxc,'CwBasicText$3',753),sZ=kfc(Txc,'PasswordTextBox',1093),RO=kfc(tyc,'AnyRtlDirectionEstimator',366);Prc(Vn)(18);