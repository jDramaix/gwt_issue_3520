function BFb(a){this.b=a}
function EFb(a){this.b=a}
function P7b(a,b){GYb();(a.b.fh(0,1),I7b(a.b.j,0,1))[$Mc]=b}
function xFb(a){var b;b=a.j.rows.length;if(b>1){k7b(a,b-1);P7b(SV(a.k,97),b-1)}}
function vFb(a){var b;b=a.j.rows.length;s7b(a,b,0,new PXb((clb(),Tkb)));s7b(a,b,1,new PXb(Tkb));P7b(SV(a.k,97),b+1)}
function wFb(){var a,b,c,d,e;d=new y7b;c=SV(d.k,97);wj(d.db,'cw-FlexTable',true);QYb(d.db,mGc,'32em');GYb();xs(d.p,lKc,5);xs(d.p,mKc,3);K7b(c,1,(G8b(),C8b));p7b(d,0,0,"Ceci est un tableau flexible qui prend en charge les <B>plages de colonne<\/B> et les <B>plages de ligne<\/B>. Vous pouvez l'utiliser pour mettre en forme votre page ou en tant que tableau r\xE9serv\xE9 \xE0 un but pr\xE9cis.");xs(H7b(c,0),_Lc,2);a=new z0b('Ajouter une ligne',new BFb(d));wj(a.db,bNc,true);e=new z0b('Supprimer une ligne',new EFb(d));wj(e.db,bNc,true);b=new Fkc;vj(b.db,'cw-FlexTable-buttonPanel');Ckc(b,a);Ckc(b,e);s7b(d,0,1,b);M7b(c,0,1,(N8b(),M8b));vFb(d);vFb(d);i7b(d,'cwFlexTable');return d}
sgb(770,1,bEc,BFb);_.Lc=function CFb(a){vFb(this.b)};sgb(771,1,bEc,EFb);_.Lc=function FFb(a){xFb(this.b)};sgb(772,1,eEc);_.qc=function JFb(){Yib(this.b,wFb())};var r5=osc(eLc,'CwFlexTable$1',770),s5=osc(eLc,'CwFlexTable$2',771);TEc(Vn)(17);