function bZb(){cZb.call(this,false)}
function zZb(a,b){BZb.call(this,a,false);this.c=b}
function AZb(a,b){BZb.call(this,a,false);yZb(this,b)}
function CZb(a){BZb.call(this,'GWT',true);yZb(this,a)}
function pmb(a){this.d=a;this.c=u6(this.d.b)}
function HYb(a,b){return OYb(a,b,a.b.c)}
function Pb(a,b){_b((ke(),fe),a,qI(h1,Yoc,132,[(Ddc(),b?Cdc:Bdc)]))}
function yZb(a,b){a.e=b;!!a.d&&aZb(a.d,a);if(b){Ur(b.db,-1);Af();Pb(a.db,true)}else{Af();Pb(a.db,false)}}
function OYb(a,b,c){if(c<0||c>a.b.c){throw new udc}a.p&&(HKb(),Rr(b.db,Axc,2));GYb(a,c,b.db);Yjc(a.b,c,b);return b}
function q6(a){var b,c;b=AI(a.b.md(Yxc),146);if(b==null){c=qI(m1,Zoc,1,['New','Open',Zxc,$xc,'Exit']);a.b.od(Yxc,c);return c}else{return b}}
function p6(a){var b,c;b=AI(a.b.md(Xxc),146);if(b==null){c=qI(m1,Zoc,1,['Undo','Redo','Cut','Copy','Paste']);a.b.od(Xxc,c);return c}else{return b}}
function t6(a){var b,c;b=AI(a.b.md(byc),146);if(b==null){c=qI(m1,Zoc,1,['Contents','Fortune Cookie','About GWT']);a.b.od(byc,c);return c}else{return b}}
function s6(a){var b,c;b=AI(a.b.md(ayc),146);if(b==null){c=qI(m1,Zoc,1,['Download','Examples',guc,"GWT wit' the program"]);a.b.od(ayc,c);return c}else{return b}}
function r6(a){var b,c;b=AI(a.b.md(_xc),146);if(b==null){c=qI(m1,Zoc,1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);a.b.od(_xc,c);return c}else{return b}}
function FZb(){var a;Ti(this,(HKb(),$doc.createElement(Hvc)));jj(this.db,'gwt-MenuItemSeparator');a=$doc.createElement(Yrc);IKb(this.db,a);Sr(a,Urc,'menuSeparatorInner')}
function u6(a){var b,c;b=AI(a.b.md(cyc),146);if(b==null){c=qI(m1,Zoc,1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);a.b.od(cyc,c);return c}else{return b}}
function lmb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q;o=new pmb(a);n=new bZb;n.c=true;RKb(n.db,Trc,'500px');n.f=true;q=new cZb(true);p=r6(a.b);for(k=0;k<p.length;++k){FYb(q,new zZb(p[k],o))}d=new cZb(true);d.f=true;FYb(n,new AZb('File',d));e=q6(a.b);for(k=0;k<e.length;++k){if(k==3){HYb(d,new FZb);FYb(d,new AZb(e[3],q));HYb(d,new FZb)}else{FYb(d,new zZb(e[k],o))}}b=new cZb(true);FYb(n,new AZb('Edit',b));c=p6(a.b);for(k=0;k<c.length;++k){FYb(b,new zZb(c[k],o))}f=new cZb(true);FYb(n,new CZb(f));g=s6(a.b);for(k=0;k<g.length;++k){FYb(f,new zZb(g[k],o))}i=new cZb(true);HYb(n,new FZb);FYb(n,new AZb('Help',i));j=t6(a.b);for(k=0;k<j.length;++k){FYb(i,new zZb(j[k],o))}d6b(n.db,src,dyc);_Yb(n,dyc);return n}
var dyc='cwMenuBar',Xxc='cwMenuBarEditOptions',Yxc='cwMenuBarFileOptions',_xc='cwMenuBarFileRecents',ayc='cwMenuBarGWTOptions',byc='cwMenuBarHelpOptions',cyc='cwMenuBarPrompts';t2(659,1,{},pmb);_.oc=function qmb(){ALb(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.b=0;t2(660,1,Mpc);_.mc=function umb(){Z4(this.c,lmb(this.b))};t2(1055,102,_oc,bZb);t2(1062,103,{97:1,102:1,116:1},zZb,AZb,CZb);t2(1063,103,{97:1,103:1,116:1},FZb);var tS=Ydc(ywc,'CwMenuBar$1',659),kY=Ydc(wwc,'MenuItemSeparator',1063);zqc(Jn)(7);