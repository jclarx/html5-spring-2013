
(function($,Edge,compId){var _=null,y=true,n=false,or='-webkit-transform-origin',qw='swing',e28='${_waves5}',qt='easeInOutElastic',b='block',a='Base State',e37='${_bjs_plane_01}',x26='hidden',dt='Default Timeline',xw='max-width',i='none',lf='left',e30='${_homePageHeader}',x57='goldClouds2',e42='${_openingImage}',e35='${_waves7}',bg='background-color',x23='@@0@@% @@1@@%',e36='${_Partial-open2-suitcase}',om='-ms-transform-origin',x24='rgba(255,255,255,1)',tp='top',ov='overflow',e25='${_Stage}',e45='${_ramp-ground}',zy='scaleY',t='transform',e60='${symbolSelector}',e59='${_goldClouds2_02Copy}',x3='rgba(0,0,0,0)',e58='${_goldClouds2_01Copy}',x52='auto',zx='scaleX',x54='goldClouds2_02Copy',e33='${_wine-shop}',e47='${_wavesGroup}',x55='511px',e27='${_open-suitcase}',qoq='easeOutQuad',x48='goldClouds2_01Copy',oz='-moz-transform-origin',e39='${_goldClouds2Home}',x50='512px',e46='${_ramp}',m='rect',x49='0px',qir='easeInQuart',h='height',x2='1.5.0.217',e43='${_grayWorld2}',x1='1.5.0',e40='${_homePageMockUp}',d='display',p='px',on='msTransformOrigin',rz='rotateZ',e29='${_skymtns}',oo='-o-transform-origin',e31='${_Closed-suitcase_only}',r='deg',qoc='easeOutCubic',qiq='easeInQuad',e34='${_Trade-Route-Wines-Type}',e32='${_hillscape}',qod='easeOutCirc',g='image',e38='${_goldClouds4}',e44='${_gray_clouds4}',w='width',e41='${_Partial-open-suitcase}',x51='304px',ql='linear',s='style',o='opacity',c='color',x22='stage';var im='images/';var g6='homePageHeader.jpg',g7='grayWorld2.gif',g12='goldClouds4.png',g20='Partial-open2-suitcase.png',g16='hillscape.png',g4='skymtns.jpg',g19='Partial-open-suitcase.png',g5='homePageMockUp.jpg',g56='goldClouds2_02.png',g18='Closed-suitcase_only.png',g14='Trade-Route-Wines-Type.png',g17='wine-shop.png',g11='bjs_plane_01.png',g9='waves5.png',g15='ramp.jpg',g8='waves7.jpg',g53='goldClouds2_01.png',g21='open-suitcase.png',g10='clouds4.jpg',g13='openingImage.jpg';var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:'skymtns',v:i,t:g,r:['0','0','1000px','473px','auto','auto'],f:[x3,im+g4,'0px','0px']},{id:'homePageMockUp',v:i,t:g,r:['0px','0px','1000px','600px','auto','auto'],o:0.52682495117188,f:[x3,im+g5,'0px','0px'],tf:[]},{id:'homePageHeader',v:i,t:g,r:['0px','0px','1000px','296px','auto','auto'],f:[x3,im+g6,'0px','0px'],tf:[]},{id:'grayWorld2',v:i,t:g,r:['39','241','667px','400px','auto','auto'],f:[x3,im+g7,'0px','0px']},{id:'wavesGroup',t:'group',r:['-84','465px','1133','154','auto','auto'],c:[{id:'waves7',t:g,r:['84px','0px','1024px','135px','auto','auto'],f:[x3,im+g8,'0px','0px']},{id:'waves5',t:g,r:['78px','0px','1024px','79px','auto','auto'],f:[x3,im+g9,'0px','0px']}]},{id:'gray_clouds4',t:g,r:['-110','-87','914px','390px','auto','auto'],f:[x3,im+g10,'0px','0px']},{id:'bjs_plane_01',t:g,r:['-298','350','304px','135px','auto','auto'],f:[x3,im+g11,'0px','0px']},{id:'goldClouds4',t:g,r:['1px','0','985px','393px','auto','auto'],f:[x3,im+g12,'0px','0px']},{id:'goldClouds2Home',t:m,r:['180px','54px','auto','auto','auto','auto'],o:0.6328125,tf:[[],[],[],['1.048','1.045']]},{id:'openingImage',t:g,r:['0','0','1000px','600px','auto','auto'],f:[x3,im+g13,'0px','0px']},{id:'Trade-Route-Wines-Type',v:i,t:g,r:['322px','342px','398px','56px','auto','auto'],f:[x3,im+g14,'0px','0px']},{id:'ramp-ground',v:i,t:'group',r:['0','192px','1000','491','auto','auto'],c:[{id:'ramp',v:i,t:g,r:['0','267px','1010px','141px','auto','auto'],f:[x3,im+g15,'0px','0px']},{id:'hillscape',v:i,t:g,r:['0px','75px','1000px','195px','auto','auto'],f:[x3,im+g16,'0px','0px']}]},{id:'wine-shop',v:i,t:g,r:['402px','329','218px','24px','auto','auto'],f:[x3,im+g17,'0px','0px']},{id:'Closed-suitcase_only',v:i,t:g,r:['313px','359px','500px','300px','auto','auto'],f:[x3,im+g18,'0px','0px']},{id:'Partial-open-suitcase',v:i,t:g,r:['328px','354px','357px','195px','auto','auto'],o:0.5650634765625,f:[x3,im+g19,'0px','0px']},{id:'Partial-open2-suitcase',v:i,t:g,r:['329px','275px','357px','276px','auto','auto'],o:1,f:[x3,im+g20,'0px','0px']},{id:'open-suitcase',v:i,t:g,r:['330px','152px','357px','400px','auto','auto'],o:1,f:[x3,im+g21,'0px','0px']}],sI:[{id:'goldClouds2Home',sN:'goldClouds2'}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:21856,a:y,l:{"mapStart":6841,"startMap":7290,"mapTransitionsEnd":6739,"mapFadeBegins":11616,"mapFadeEnds":12905,"lastChange":17105,"everythingOff":20714},tt:[]}}},"goldClouds2":{v:x1,mv:x1,b:x2,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x48,t:g,r:[x49,x49,x50,x51,x52,x52],f:[x3,im+g53,x49,x49]},{id:x54,t:g,r:[x50,x49,x55,x51,x52,x52],f:[x3,im+g56,x49,x49]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}}};var S1=symbols[x22];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e25).P(bg,x24,c).P(ov,x26).P(h,600).P(xw,1000).P(w,1000);A1.A(e27).P(tp,152).P(d,i).T(15.59,b).T(19.664,i).P(o,1,_,_,"").T(17.105,0,2.532,ql).P(lf,331,_,_,p).T(15.59,331);A1.A(e28).P(d,b).T(1.801,b).T(11.562,i).P(o,1,_,_,"").T(7.265,0,4.293,qw).P(lf,84,_,_,p).T(1.801,61,2.602,qoq).T(4.403,78,2.862,qw).T(7.265,80,1.822).T(9.087,84,1.561,ql).P(tp,0).T(7.265,80,3.235,qw);A1.A(e29).P(tp,0).P(h,482).P(lf,0).P(w,1000).P(d,i).T(1.02,i).T(1.801,b).T(9.347,i).P(o,1,_,_,"").T(5.964,0,3.383,ql);A1.A(e30).P(tp,0).P(zx,1,t,_,"").P(zy,1,t).P(h,296,_,_,p).P(lf,0).P(w,1000).P(d,i).T(9.087,b).T(21.856,i).P(o,0,_,_,"").T(9.087,1,1.561,ql).T(19.958,0,0.541);A1.A(e31).P(zy,1,t,_,"").P(zx,1,t).P(tp,601,_,_,p).T(13.463,338,1.789,qt).T(15.252,339,0.039).P(h,300).T(13.463,214,1.828).P(d,i).T(13.463,b).T(15.289,i).P(o,0.5,_,_,"").T(13.463,1,1.828).P(lf,270,_,_,p).T(13.463,330,1.828).P(w,500).T(13.463,357,1.828);A1.A(e32).P(tp,75).P(lf,0).P(d,i).T(10.59,b).T(21.837,i).P(o,0,_,_,"").T(12.5,1,2.25,ql);A1.A(e33).P(h,24).P(w,218).P(d,i).T(16.065,b).T(21.837,i).P(o,1,_,_,"").T(19.958,0,0.541,ql).P(lf,396,_,_,p).T(16.064,749,0.426,qod).P(tp,370).T(16.064,168,0.426,ql);A1.A(e34).P(h,56).P(lf,322).P(w,398).P(d,i).T(10.605,b).T(21.837,i).P(o,0.09,_,_,"").T(10.6,1,0.904,qir).T(19.958,0,0.541,ql).P(tp,343,_,_,p).T(10.6,73,1.998,qir);A1.A(e35).P(tp,0).T(1.801,0).T(7.265,80,3.235,qw).P(h,135).T(1.801,191,5.464,ql).T(7.265,171,1.822).P(d,b).T(1.801,b).T(12.295,i).P(o,1,_,_,"").T(8,0,4.293,qoq).P(lf,84,_,_,p).T(1.801,-135,5.464,qiq).T(7.265,-69,1.822,ql).P(w,1013).T(1.801,1409,5.464).T(7.265,1257,1.822);A1.A(e36).P(tp,275).P(o,1,_,_,"").P(lf,329,_,_,p).P(d,i).T(0,i).T(15.452,b).T(15.59,i);A1.A(e37).P(or,[50,46],_,x23).P(oz,[50,46],_,x23).P(om,[50,46],_,x23).P(on,[50,46],_,x23).P(oo,[50,46],_,x23).P(tp,231).T(0.527,93,8.56,ql).P(d,b).T(9.976,i).P(rz,13,t,_,r).T(0.527,0,8.56).P(h,119,_,_,p).T(0.527,62,8.56).P(o,1,_,_,"").T(9.087,0,0.52).P(lf,-525,_,_,p).T(0.527,782,8.56).P(w,267).T(0.527,140,8.56);A1.A(e38).P(tp,0).T(0,-97,7.765,qiq).P(h,393).T(0,491,7.765).P(d,b).T(1.02,b).T(9.347,i).P(o,1,_,_,"").T(1.801,0.88,0.641,qoq).T(2.442,1,0.591).T(3.033,0,6.054).P(lf,0,_,_,p).T(0,-232,7.765,qiq).P(w,985).T(0,1232,7.765);A1.A(e39).P(h,304).P(w,1023).P(tp,50).T(1.801,-3,7.286,qiq).P(zy,1.38,t,_,"").T(1.801,1.05,7.286).P(d,b).T(9.867,i).P(o,1).T(0.5,0.48,6.784).T(7.284,0,2.584).P(lf,168,_,_,p).T(1.801,-80,7.286).P(zx,1.38,t,_,"").T(1.801,1.05,7.286);A1.A(e40).P(tp,0).P(zy,1,t,_,"").P(zx,1,t).P(h,600,_,_,p).P(lf,0).P(w,1000).P(d,i).T(20.268,b).P(o,0.53,_,_,"").T(20.267,0,0.001,ql).T(20.692,1,1.06);A1.A(e41).P(tp,354).P(h,195).P(lf,328).P(w,357).P(d,i).T(0,i).T(15.29,b,_,_,b).T(15.452,i).T(15.59,i).P(o,1,_,_,"").T(15.29,1).T(15.452,1);A1.A(e42).P(d,b).T(0,b).T(2.49,i).P(o,1,_,_,"").T(0,0,2.49,qiq);A1.A(e43).P(tp,230).T(6.841,148,2.74,qoq).P(h,528).T(6.841,339,2.74).P(d,i).T(6.813,b).T(12.905,i).P(o,0,_,_,"").T(6.841,1,4.772).T(11.613,0,1.292).P(lf,39,_,_,p).T(6.841,157,2.74).P(w,937).T(6.841,626,2.74);A1.A(e44).P(h,390).P(w,914).P(tp,-31).T(1.675,-28,6.016,ql).T(7.691,0,0.09).P(o,1,_,_,"").T(1.675,0,4.854).P(lf,0,_,_,p).T(1.675,-256,6.016).T(7.691,-179,0.09).P(d,b).T(0,b).T(1.02,b).T(7.781,i);A1.A(e45).P(d,i).T(10.59,b).T(19.674,i).P(o,1,_,_,"").T(17.105,0,2.532,qoq);A1.A(e46).P(tp,267).P(w,1010).P(d,i).T(10.59,b).T(21.837,i).P(o,0,_,_,"").T(13.5,1,1.25,ql);A1.A(e47).P(d,b).T(12.967,i);var S2=symbols[x57];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e58).P(lf,0).P(tp,0);A2.A(e59).P(lf,512).P(tp,0);A2.A(e60).P(h,304).P(w,1023);Edge.registerCompositionDefn(compId,symbols,fonts,resources);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-88638607");