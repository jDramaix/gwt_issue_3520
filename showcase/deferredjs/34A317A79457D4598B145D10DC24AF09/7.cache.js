function aZb(){bZb.call(this,false)}
function yZb(a,b){AZb.call(this,a,false);this.c=b}
function zZb(a,b){AZb.call(this,a,false);xZb(this,b)}
function BZb(a){AZb.call(this,'GWT',true);xZb(this,a)}
function pmb(a){this.d=a;this.c=u6(this.d.b)}
function GYb(a,b){return NYb(a,b,a.b.c)}
function Pb(a,b){_b((ke(),fe),a,qI(h1,Uoc,132,[(zdc(),b?ydc:xdc)]))}
function xZb(a,b){a.e=b;!!a.d&&_Yb(a.d,a);if(b){Ur(b.db,-1);Af();Pb(a.db,true)}else{Af();Pb(a.db,false)}}
function NYb(a,b,c){if(c<0||c>a.b.c){throw new qdc}a.p&&(HKb(),Rr(b.db,wxc,2));FYb(a,c,b.db);Ujc(a.b,c,b);return b}
function q6(a){var b,c;b=AI(a.b.md(Uxc),146);if(b==null){c=qI(m1,Voc,1,['New','Open',Vxc,Wxc,'Exit']);a.b.od(Uxc,c);return c}else{return b}}
function p6(a){var b,c;b=AI(a.b.md(Txc),146);if(b==null){c=qI(m1,Voc,1,['Undo','Redo','Cut','Copy','Paste']);a.b.od(Txc,c);return c}else{return b}}
function t6(a){var b,c;b=AI(a.b.md(Zxc),146);if(b==null){c=qI(m1,Voc,1,['Contents','Fortune Cookie','About GWT']);a.b.od(Zxc,c);return c}else{return b}}
function s6(a){var b,c;b=AI(a.b.md(Yxc),146);if(b==null){c=qI(m1,Voc,1,['Download','Examples',cuc,"GWT wit' the program"]);a.b.od(Yxc,c);return c}else{return b}}
function r6(a){var b,c;b=AI(a.b.md(Xxc),146);if(b==null){c=qI(m1,Voc,1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);a.b.od(Xxc,c);return c}else{return b}}
function EZb(){var a;Ti(this,(HKb(),$doc.createElement(Dvc)));jj(this.db,'gwt-MenuItemSeparator');a=$doc.createElement(Urc);IKb(this.db,a);Sr(a,Qrc,'menuSeparatorInner')}
function u6(a){var b,c;b=AI(a.b.md($xc),146);if(b==null){c=qI(m1,Voc,1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);a.b.od($xc,c);return c}else{return b}}
function lmb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new pmb(a);n=new aZb;n.c=true;RKb(n.db,Prc,'500px');n.f=true;q=new bZb(true);p=r6(a.b);for(k=0;k<p.length;++k){EYb(q,new yZb(p[k],o))}d=new bZb(true);d.f=true;EYb(n,new zZb('File',d));e=q6(a.b);for(k=0;k<e.length;++k){if(k==3){GYb(d,new EZb);EYb(d,new zZb(e[3],q));GYb(d,new EZb)}else{EYb(d,new yZb(e[k],o))}}b=new bZb(true);EYb(n,new zZb('Edit',b));c=p6(a.b);for(k=0;k<c.length;++k){EYb(b,new yZb(c[k],o))}f=new bZb(true);EYb(n,new BZb(f));g=s6(a.b);for(k=0;k<g.length;++k){EYb(f,new yZb(g[k],o))}i=new bZb(true);GYb(n,new EZb);EYb(n,new zZb('Help',i));j=t6(a.b);for(k=0;k<j.length;++k){EYb(i,new yZb(j[k],o))}c6b(n.db,orc,_xc);$Yb(n,_xc);return n}
var _xc='cwMenuBar',Txc='cwMenuBarEditOptions',Uxc='cwMenuBarFileOptions',Xxc='cwMenuBarFileRecents',Yxc='cwMenuBarGWTOptions',Zxc='cwMenuBarHelpOptions',$xc='cwMenuBarPrompts';t2(659,1,{},pmb);_.oc=function qmb(){ALb(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.b=0;t2(660,1,Ipc);_.mc=function umb(){Z4(this.c,lmb(this.b))};t2(1055,102,Xoc,aZb);t2(1062,103,{97:1,102:1,116:1},yZb,zZb,BZb);t2(1063,103,{97:1,103:1,116:1},EZb);var tS=Udc(uwc,'CwMenuBar$1',659),kY=Udc(swc,'MenuItemSeparator',1063);vqc(Jn)(7);