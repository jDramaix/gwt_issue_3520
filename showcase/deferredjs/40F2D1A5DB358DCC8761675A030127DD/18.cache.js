function iU(){}
function Lec(a,b){NC(a.a,b)}
function NGb(a,b){this.b=a;this.a=b}
function QGb(a,b){this.b=a;this.a=b}
function HU(a){return xhb(sU,a)}
function hU(){hU=jFc;gU=new iU}
function FGb(a,b){q6b(b,Ked+a.lh()+KLc+a.mh())}
function Yec(){Tec();Xec.call(this,$r($doc,Led),Med)}
function _nc(b){try{var c=b.document.selection.createRange();if(c.parentElement()!==b)return 0;return c.text.length}catch(a){return 0}}
function $nc(b){try{var c=b.document.selection.createRange();if(c.parentElement()!==b)return -1;return -c.move(Ned,-65535)}catch(a){return 0}}
function DGb(a,b){var c,d;c=new $ac;m$b();Sr(c.e,lWc,4);Xac(c,a);if(b){d=new u6b(Aed);rj(a,new NGb(a,d),(gz(),gz(),fz));rj(a,new QGb(a,d),(Dy(),Dy(),Cy));Xac(c,d)}return c}
function boc(b){try{var c=b.document.selection.createRange();if(c.parentElement()!==b)return 0;var d=c.text.length;var e=0;var f=c.duplicate();f.moveEnd(Ned,-1);var g=f.text.length;while(g==d&&f.parentElement()==b&&c.compareEndPoints(Ped,f)<=0){e+=2;f.moveEnd(Ned,-1);g=f.text.length}return d+e}catch(a){return 0}}
function aoc(b){try{var c=b.document.selection.createRange();if(c.parentElement()!==b)return -1;var d=c.duplicate();d.moveToElementText(b);d.setEndPoint(Oed,c);var e=d.text.length;var f=0;var g=d.duplicate();g.moveEnd(Ned,-1);var i=g.text.length;while(i==e&&g.parentElement()==b){f+=2;g.moveEnd(Ned,-1);i=g.text.length}return e+f}catch(a){return 0}}
function EGb(){var a,b,c,d,e,f;f=new zmc;m$b();Sr(f.e,lWc,5);d=new Wec;amc(d.cb,MHc,Bed);Lec(d,(hU(),hU(),gU));b=new Wec;amc(b.cb,MHc,Ced);Mec(b,Ded);Rr(b.cb,w7c,true);wmc(f,new z6b(Eed));wmc(f,DGb(d,true));wmc(f,DGb(b,false));c=new Yec;amc(c.cb,MHc,Fed);a=new Yec;amc(a.cb,MHc,Ged);Mec(a,Ded);Rr(a.cb,w7c,true);wmc(f,new z6b(Hed));wmc(f,DGb(c,true));wmc(f,DGb(a,false));e=new lkc;amc(e.cb,MHc,Ied);e.cb.rows=5;wmc(f,new z6b(Jed));wmc(f,DGb(e,true));return f}
var Eed='<b>Zone de texte normale:<\/b>',Hed='<br><br><b>Zone de texte &laquo;mot de passe&raquo;:<\/b>',Jed='<br><br><b>Zone de texte:<\/b>',Ted='AnyRtlDirectionEstimator',Qed='CwBasicText$2',Red='CwBasicText$3',Oed='EndToStart',Sed='PasswordTextBox',Ped='StartToEnd',Ked='S\xE9lectionn\xE9: ',Aed='S\xE9lectionn\xE9: 0, 0',Ned='character',Fed='cwBasicText-password',Ged='cwBasicText-password-disabled',Ied='cwBasicText-textarea',Bed='cwBasicText-textbox',Ced='cwBasicText-textbox-disabled',Med='gwt-PasswordTextBox',Ded='lecture seulement',Led='password';fgb(389,390,{},iU);_.Ae=function jU(a){return HU((BU(),a))?(tG(),sG):(tG(),rG)};var gU;fgb(778,1,dGc);_.mc=function LGb(){ojb(this.a,EGb())};fgb(779,1,MFc,NGb);_.Gc=function OGb(a){FGb(this.b,this.a)};fgb(780,1,aGc,QGb);_.Ec=function RGb(a){FGb(this.b,this.a)};fgb(1124,1006,rFc);_.lh=function Oec(){return $nc(this.cb)};_.mh=function Pec(){return _nc(this.cb)};fgb(1121,1122,rFc,Yec);fgb(1179,1123,rFc);_.lh=function mkc(){return aoc(this.cb)};_.mh=function nkc(){return boc(this.cb)};var i5=ouc(j$c,Qed,779),j5=ouc(j$c,Red,780),gab=ouc(lZc,Sed,1121),B_=ouc(E3c,Ted,389);RGc(Jn)(18);