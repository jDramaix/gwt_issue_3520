function UUb(){}
function Utb(a){this.b=a}
function OUb(){PUb.call(this,Zr($doc,'file'));jj(this.db,'gwt-FileUpload')}
function PUb(a){Ti(this,a);this.b=new UUb;this.b.d=this;this._==-1?TKb(this.db,4096|(HKb(),$Lb(this.db))):(this._|=4096)}
function TUb(a,b){switch(HKb(),YLb(b.type)){case 1024:if(!a.b){a.c=true;return false}break;case 4096:if(a.c){a.b=true;us(a.d.db,rs($doc,Gsc,false,true));a.b=false;a.c=false}}return true}
t2(782,1,Jpc,Utb);_.Dc=function Vtb(a){var b;b=this.b.db.value;b.length==0?ALb('You must select a file to upload'):ALb('File uploaded!')};t2(783,1,Mpc);_.mc=function Ztb(){var a,b,c;Z4(this.b,(a=new C6b,z6b(a,new PSb('<b>Select a file:<\/b>')),b=new OUb,d6b(b.db,src,'cwFileUpload'),z6b(a,b),c=new uOb('Upload File'),rj(c,new Utb(b),(ey(),ey(),dy)),z6b(a,new PSb('<br>')),z6b(a,c),a))};t2(1023,102,_oc,OUb);_.Rb=function QUb(a){TUb(this.b,a)&&wj(this,a)};t2(1024,1,{});t2(1025,1024,{},UUb);_.b=false;_.c=false;var TT=Ydc(xwc,'CwFileUpload$1',782),wX=Ydc(wwc,'FileUpload',1023),vX=Ydc(wwc,'FileUpload$FileUploadImpl',1024),uX=Ydc(wwc,'FileUpload$FileUploadImplOpera',1025);zqc(Jn)(20);