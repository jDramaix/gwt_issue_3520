function smb(a){this.b=a}
function pmb(a,b){this.b=a;this.c=b}
function lmb(b){var c;try{c=Yec(agc((mLb(),Vr(b.b.db,vyc))));qTb(b.c,Bmb(c))}catch(a){a=$1(a);if(!aJ(a,142))throw Z1(a)}}
function Bmb(a){var b,c;c=null;b=a==1?1:0;switch(a){case 0:c='You have no trees';break;default:b==1&&(c='You have one tree.');}if(c!=null){return c}return 'You have '+a+' trees.'}
function kmb(a){var b,c,d,e,f,g;d=new dWb;b=$I(d.k,96);mLb();ds(d.p,Cwc,5);g=i5(RS);e=new LOb(g);Cj(e,new pmb(a,g),(Ey(),Ey(),Dy));f=new WXb;ds(f.f,Cwc,3);TXb(f,new zTb(rBc));TXb(f,e);ZVb(d,0,0,f);ds(mWb(b,0),uyc,2);a.b=new P_b;F_b(a.b,'13');WVb(d,2,0,tBc);ZVb(d,2,1,a.b);a.c=new sTb;WVb(d,5,0,BBc);ZVb(d,5,1,a.c);rWb(b,5,0,(qXb(),pXb));c=new smb(a);Cj(a.b,c,(hz(),hz(),gz));lmb(a);return d}
X2(651,1,xqc,pmb);_.Hc=function qmb(a){b5(this.b,this.c+zBc)};X2(652,1,iqc,smb);_.Jc=function tmb(a){lmb(this.b)};X2(653,1,Aqc);_.qc=function xmb(){B5(this.c,kmb(this.b))};var RS=Nec(zxc,'PluralMessages'),KS=Lec(zxc,'CwPluralFormsExample$1',651),LS=Lec(zxc,'CwPluralFormsExample$2',652);nrc(Vn)(36);