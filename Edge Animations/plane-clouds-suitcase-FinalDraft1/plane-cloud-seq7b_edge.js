
(function($,Edge,compId){var _=null,y=true,n=false,or='-webkit-transform-origin',qw='swing',e33='${_waves5}',qt='easeInOutElastic',b='block',a='Base State',e42='${_bjs_plane_01}',x29='hidden',s='style',xw='max-width',e56='${_RectangleUpLeft}',i='none',lf='left',e35='${_homePageHeader}',e70='${symbolSelector}',x67='goldClouds2',e69='${_goldClouds2_02Copy}',e43='${_openingImage}',e54='${_waves7}',bg='background-color',x26='@@0@@% @@1@@%',e44='${_Partial-open2-suitcase}',om='-ms-transform-origin',e68='${_goldClouds2_01Copy}',e57='${_grayWorld2}',x27='rgba(255,255,255,1)',tp='top',x64='goldClouds2_02Copy',e52='${_arch}',ov='overflow',xc='rgba(0,0,0,1)',e55='${_ramp-ground}',t='transform',zy='scaleY',e31='${_wine-shopCopy}',x22='rgba(255,255,255,0.00)',x62='auto',c='color',x3='rgba(0,0,0,0)',x60='512px',e32='${_open-suitcase}',zx='scaleX',e38='${_RectangleLowleft}',e39='${_wine-shop}',e51='${_ramp}',e41='${_wavesGroup}',x65='511px',x1='1.5.0',qoq='easeOutQuad',x58='goldClouds2_01Copy',oz='-moz-transform-origin',e48='${_goldClouds2Home}',e30='${_EllipseClose}',x23='solid',m='rect',x59='0px',qir='easeInQuart',h='height',g='image',x2='1.5.0.217',d='display',e49='${_RectangleUpRight}',qiq='easeInQuad',rz='rotateZ',p='px',on='msTransformOrigin',r='deg',x24='rgba(0,0,0,1.00)',oo='-o-transform-origin',e36='${_Closed-suitcase_only}',e34='${_skymtns}',qoc='easeOutCubic',e37='${_hillscape}',e40='${_Trade-Route-Wines-Type}',e45='${_RectangleLowRight}',x25='stage',e47='${_goldClouds4}',e46='${_gray_clouds4}',w='width',e50='${_Partial-open-suitcase}',x61='304px',ql='linear',e53='${_circleCloseGroup}',e28='${_Stage}',o='opacity',dt='Default Timeline';var im='images/';var g5='homePageHeader.jpg',g6='grayWorld2.gif',g15='arch.png',g12='goldClouds4.png',g20='Partial-open2-suitcase.png',g17='hillscape.png',g4='skymtns.jpg',g66='goldClouds2_02.png',g19='Partial-open-suitcase.png',g8='waves5.png',g18='Closed-suitcase_only.png',g9='wine-shop.png',g11='bjs_plane_01.png',g16='ramp.jpg',g7='waves7.jpg',g63='goldClouds2_01.png',g21='open-suitcase.png',g14='Trade-Route-Wines-Type.png',g10='clouds4.jpg',g13='openingImage.jpg';var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:'skymtns',v:i,t:g,r:['0','0','1000px','473px','auto','auto'],f:[x3,im+g4,'0px','0px']},{id:'homePageHeader',v:i,t:g,r:['0px','0','1000px','296px','auto','auto'],f:[x3,im+g5,'0px','0px']},{id:'grayWorld2',v:i,t:g,r:['39','241','667px','400px','auto','auto'],f:[x3,im+g6,'0px','0px']},{id:'wavesGroup',t:'group',r:['-84','465px','1133','154','auto','auto'],c:[{id:'waves7',t:g,r:['84px','0px','1024px','135px','auto','auto'],f:[x3,im+g7,'0px','0px']},{id:'waves5',t:g,r:['78px','0px','1024px','79px','auto','auto'],f:[x3,im+g8,'0px','0px']}]},{id:'wine-shop',v:i,t:g,r:['402px','329','209px','23px','auto','auto'],f:[x3,im+g9,'0px','0px']},{id:'gray_clouds4',t:g,r:['-110','-87','914px','390px','auto','auto'],f:[x3,im+g10,'0px','0px']},{id:'bjs_plane_01',t:g,r:['-298','350','304px','135px','auto','auto'],f:[x3,im+g11,'0px','0px']},{id:'goldClouds4',t:g,r:['1px','0','985px','393px','auto','auto'],f:[x3,im+g12,'0px','0px']},{id:'goldClouds2Home',t:m,r:['180px','54px','auto','auto','auto','auto'],o:0.6328125,tf:[[],[],[],['1.048','1.045']]},{id:'openingImage',t:g,r:['0','0','1000px','600px','auto','auto'],f:[x3,im+g13,'0px','0px']},{id:'Trade-Route-Wines-Type',v:i,t:g,r:['288px','342px','405px','57px','auto','auto'],f:[x3,im+g14,'0px','0px']},{id:'ramp-ground',v:i,t:'group',r:['0','192','1000','491','auto','auto'],c:[{id:'arch',v:i,t:g,r:['0px','0px','1000px','491px','auto','auto'],f:[x3,im+g15,'0px','0px']},{id:'ramp',v:i,t:g,r:['0','267px','1010px','141px','auto','auto'],f:[x3,im+g16,'0px','0px']},{id:'hillscape',v:i,t:g,r:['0px','75px','1000px','195px','auto','auto'],f:[x3,im+g17,'0px','0px']}]},{id:'wine-shopCopy',v:i,t:g,r:['402px','329','209px','23px','auto','auto'],f:[x3,im+g9,'0px','0px']},{id:'Closed-suitcase_only',v:i,t:g,r:['313px','359px','500px','300px','auto','auto'],f:[x3,im+g18,'0px','0px']},{id:'Partial-open-suitcase',v:i,t:g,r:['328px','354px','357px','195px','auto','auto'],o:0.5650634765625,f:[x3,im+g19,'0px','0px']},{id:'Partial-open2-suitcase',v:i,t:g,r:['329px','275px','357px','276px','auto','auto'],o:1,f:[x3,im+g20,'0px','0px']},{id:'open-suitcase',v:i,t:g,r:['330px','152px','357px','400px','auto','auto'],o:1,f:[x3,im+g21,'0px','0px']},{id:'circleCloseGroup',v:i,t:'group',r:['-40px','-31px','1093','738','auto','auto'],c:[{id:'EllipseClose',v:i,t:'ellipse',r:['38px','22px','800px','490px','auto','auto'],br:["50%","50%","50%","50%"],f:[x22],s:[100,xc,x23]},{id:'RectangleLowleft',v:i,t:m,r:['-72px','654px','102px','28px','auto','auto'],f:[x24],s:[42,"rgb(0, 0, 0)",i]},{id:'RectangleUpLeft',v:i,t:m,r:['-72px','654px','102px','28px','auto','auto'],f:[x24],s:[42,"rgb(0, 0, 0)",i]},{id:'RectangleLowRight',v:i,t:m,r:['-72px','654px','102px','28px','auto','auto'],f:[x24],s:[42,"rgb(0, 0, 0)",i]},{id:'RectangleUpRight',v:i,t:m,r:['-72px','654px','102px','28px','auto','auto'],f:[x24],s:[42,"rgb(0, 0, 0)",i]}]}],sI:[{id:'goldClouds2Home',sN:'goldClouds2'}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:22683,a:y,l:{"mapStart":6841,"startMap":7290,"mapTransitionsEnd":9581,"mapFadeBegins":11616,"mapFadeEnds":12905,"everythingOff":21837},tt:[]}}},"goldClouds2":{v:x1,mv:x1,b:x2,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x58,t:g,r:[x59,x59,x60,x61,x62,x62],f:[x3,im+g63,x59,x59]},{id:x64,t:g,r:[x60,x59,x65,x61,x62,x62],f:[x3,im+g66,x59,x59]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}}};var S1=symbols[x25];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e28).P(bg,x27,c).P(ov,x29).P(h,600).P(xw,1000).P(w,1000);A1.A(e30).P(bg,x22,c).P("border-style",x23).P(tp,-162).T(19.006,13,1.008,qoq).P(d,i).T(18.323,b).P(h,995).T(19.006,0,1.008).P(lf,-253).T(19.006,19,1.011,_,-243).P("border-width",42).T(19.006,359,1.008).P(w,1485).T(19.006,336,1.008);A1.A(e31).P(d,i).T(16.067,b).T(18.782,b).T(21.837,i).P(o,0.94,_,_,"").T(16.064,1,1.041,ql).P(lf,396,_,_,p).T(16.064,139,0.099).T(16.163,121,0.127).T(16.29,750,0.815).P(tp,370).T(16.064,352,0.099).T(16.163,284,0.127).T(16.29,160,0.815);A1.A(e32).P(tp,152).P(o,1,_,_,"").P(d,i).T(15.59,b).T(18.782,b).T(21.837,i).P(lf,331,_,_,p).T(15.59,331);A1.A(e33).P(d,b).T(1.801,b).T(11.562,i).T(18.782,i).P(o,1,_,_,"").T(7.265,0,4.293,qw).P(lf,84,_,_,p).T(1.801,61,2.602,qoq).T(4.403,78,2.862,qw).T(7.265,80,1.822).T(9.087,84,1.561,ql).P(tp,0).T(7.265,80,3.235,qw);A1.A(e34).P(tp,0).P(h,482).P(lf,0).P(w,1000).P(d,i).T(1.02,i).T(1.801,b).T(9.347,i).T(18.782,i).P(o,1,_,_,"").T(5.964,0,3.383,ql);A1.A(e35).P(lf,0).P(d,i).T(9.087,b).T(18.782,b).T(21.856,i).P(o,0,_,_,"").T(9.087,1,1.561,qoq);A1.A(e36).P(zy,1,t,_,"").P(zx,1,t).P(tp,601,_,_,p).T(13.463,338,1.789,qt).T(15.252,339,0.039).P(h,300).T(13.463,214,1.828).P(d,i).T(13.463,b).T(15.289,i).P(o,0.5,_,_,"").T(13.463,1,1.828).P(lf,270,_,_,p).T(13.463,330,1.828).P(w,500).T(13.463,357,1.828);A1.A(e37).P(tp,75).P(lf,0).P(d,i).T(10.59,b).T(18.782,b).T(21.837,i).P(o,0,_,_,"").T(12.5,1,2.25,ql);A1.A(e38).P(bg,x24,c).P("border-style",i).P(tp,694).T(19.139,448,0.88,qoq).P(d,i).T(19.128,b).P(h,112).T(19.139,275,0.88).P(lf,-60).T(19.139,4,0.88).P(w,115).T(19.139,475,0.88);A1.A(e39).P(tp,370).P(o,0,_,_,"").P(lf,396,_,_,p).P(d,i).T(18.782,b).T(21.837,i);A1.A(e40).P(lf,288).P(tp,343).T(10.6,62,1.998,qir).P(o,0.09,_,_,"").T(10.6,1,0.904).P(d,i).T(10.605,b).T(18.782,b).T(21.837,i);A1.A(e41).P(d,b).T(18.782,i);A1.A(e42).P(or,[50,46],_,x26).P(oz,[50,46],_,x26).P(om,[50,46],_,x26).P(on,[50,46],_,x26).P(oo,[50,46],_,x26).P(tp,231).T(0.527,94,8.56,ql).P(d,b).T(18.782,i).P(rz,13,t,_,r).T(0.527,0,8.56).P(h,119,_,_,p).T(0.527,62,8.56).P(o,1,_,_,"").T(9.347,0,0.52).P(lf,-525,_,_,p).T(0.527,782,8.56).P(w,267).T(0.527,139,8.56);A1.A(e43).P(d,b).T(0,b).T(2.49,i).T(18.782,i).P(o,1,_,_,"").T(0,0,2.49,qiq);A1.A(e44).P(tp,275).P(o,1,_,_,"").P(lf,329,_,_,p).P(d,i).T(0,i).T(15.452,b).T(15.59,i);A1.A(e45).P(bg,x24,c).P("border-style",i).P(tp,678).T(19.129,444,0.88,qoq).P(h,114).T(19.129,275,0.88).P(d,i).T(19.115,b).T(20.009,b).P(lf,1027).T(19.129,598,0.88).P(w,118).T(19.129,475,0.88);A1.A(e46).P(h,390).P(w,914).P(tp,-31).T(1.675,-28,6.016,ql).T(7.691,0,0.09).P(o,1,_,_,"").T(1.675,0,4.854).P(lf,0,_,_,p).T(1.675,-256,6.016).T(7.691,-179,0.09).P(d,b).T(0,b).T(1.02,b).T(7.781,i).T(18.782,i);A1.A(e47).P(tp,0).T(0,-97,7.765,qiq).P(d,b).T(1.02,b).T(9.347,i).T(18.782,i).P(h,393).T(0,491,7.765).P(o,1,_,_,"").T(1.801,0.88,0.641,qoq).T(2.442,1,0.591).T(3.033,0,6.054).P(lf,0,_,_,p).T(0,-232,7.765,qiq).P(w,985).T(0,1232,7.765);A1.A(e48).P(h,304).P(w,1023).P(tp,50).T(1.801,-3,7.286,qiq).P(zy,1.38,t,_,"").T(1.801,1.05,7.286).P(zx,1.38,t).T(1.801,1.05,7.286).P(o,1).T(0.5,0.48,6.784).T(7.284,0,2.584).P(lf,168,_,_,p).T(1.801,-80,7.286).P(d,b).T(9.867,i).T(18.782,i);A1.A(e49).P(bg,x24,c).P("border-style",i).P(tp,-50).T(19.129,0,0.88,qoq).P(d,i).T(19.117,b).T(20.009,b).P(h,111).T(19.129,275,0.88).P(lf,1027).T(19.129,596,0.88).P(w,118).T(19.129,475,0.88);A1.A(e50).P(tp,354).P(h,195).P(lf,328).P(w,357).P(d,i).T(0,i).T(15.29,b,_,_,b).T(15.452,i).T(15.59,i).P(o,1,_,_,"").T(15.29,1).T(15.452,1);A1.A(e51).P(tp,267).P(w,1010).P(d,i).T(10.59,b).T(18.782,b).T(21.837,i).P(o,0,_,_,"").T(13.5,1,1.25,ql);A1.A(e52).P(h,491).P(lf,0).P(d,i).T(10.59,b).T(18.782,b).T(21.837,i).P(tp,408).T(11.75,0,1,ql);A1.A(e53).P(tp,-31).P(lf,-40).P(d,i).T(18.991,b).P(o,1,_,_,"").T(21.636,0,1.047,qiq);A1.A(e54).P(tp,0).T(1.801,0).T(7.265,80,3.235,qw).P(d,b).T(1.801,b).T(12.295,i).T(18.782,i).P(h,135).T(1.801,191,5.464,ql).T(7.265,171,1.822).P(o,1,_,_,"").T(8,0,4.293,qoq).P(lf,84,_,_,p).T(1.801,-135,5.464,qiq).T(7.265,-69,1.822,ql).P(w,1013).T(1.801,1409,5.464).T(7.265,1257,1.822);A1.A(e55).P(d,i).T(10.59,b).T(18.782,b).T(21.837,i);A1.A(e56).P(bg,x24,c).P("border-style",i).P(tp,-50).T(19.139,0,0.88,qoq).P(d,i).T(19.131,b).T(20.019,b).P(h,111).T(19.139,274,0.88).P(lf,-60).T(19.139,4,0.88).P(w,115).T(19.139,475,0.88);A1.A(e57).P(tp,230).T(6.841,148,2.74,qoq).P(h,528).T(6.841,339,2.74).P(d,i).T(6.813,b).T(12.905,i).P(o,0,_,_,"").T(6.841,1,4.772).T(11.613,0,1.292).P(lf,39,_,_,p).T(6.841,157,2.74).P(w,937).T(6.841,626,2.74);var S2=symbols[x67];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e68).P(lf,0).P(tp,0);A2.A(e69).P(lf,512).P(tp,0);A2.A(e70).P(h,304).P(w,1023);Edge.registerCompositionDefn(compId,symbols,fonts,resources);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-88638607");