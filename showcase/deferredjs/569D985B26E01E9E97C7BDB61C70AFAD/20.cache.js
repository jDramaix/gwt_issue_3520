function UUb(){}
function Utb(a){this.b=a}
function OUb(){PUb.call(this,Zr($doc,'file'));jj(this.db,'gwt-FileUpload')}
function PUb(a){Ti(this,a);this.b=new UUb;this.b.d=this;this._==-1?TKb(this.db,4096|(HKb(),$Lb(this.db))):(this._|=4096)}
function TUb(a,b){switch(HKb(),YLb(b.type)){case 1024:if(!a.b){a.c=true;return false}break;case 4096:if(a.c){a.b=true;us(a.d.db,rs($doc,Fsc,false,true));a.b=false;a.c=false}}return true}
t2(782,1,Ipc,Utb);_.Dc=function Vtb(a){var b;b=this.b.db.value;b.length==0?ALb('You must select a file to upload'):ALb('File uploaded!')};t2(783,1,Lpc);_.mc=function Ztb(){var a,b,c;Z4(this.b,(a=new B6b,y6b(a,new PSb('<b>Select a file:<\/b>')),b=new OUb,c6b(b.db,rrc,'cwFileUpload'),y6b(a,b),c=new uOb('Upload File'),rj(c,new Utb(b),(ey(),ey(),dy)),y6b(a,new PSb('<br>')),y6b(a,c),a))};t2(1023,102,$oc,OUb);_.Rb=function QUb(a){TUb(this.b,a)&&wj(this,a)};t2(1024,1,{});t2(1025,1024,{},UUb);_.b=false;_.c=false;var TT=Xdc(wwc,'CwFileUpload$1',782),wX=Xdc(vwc,'FileUpload',1023),vX=Xdc(vwc,'FileUpload$FileUploadImpl',1024),uX=Xdc(vwc,'FileUpload$FileUploadImplOpera',1025);yqc(Jn)(20);