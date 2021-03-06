/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'skymtns',
            display:'none',
            type:'image',
            rect:['0','0','1000px','473px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"skymtns.jpg",'0px','0px']
         },
         {
            id:'homePageMockUp',
            display:'none',
            type:'image',
            rect:['0px','-2px','1000px','600px','auto','auto'],
            opacity:0.52682495117188,
            fill:["rgba(0,0,0,0)",im+"homePageMockUp.jpg",'0px','0px'],
            transform:[]
         },
         {
            id:'homePageHeader',
            display:'none',
            type:'image',
            rect:['0px','0px','1000px','296px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"homePageHeader.jpg",'0px','0px'],
            transform:[]
         },
         {
            id:'grayWorld2',
            display:'none',
            type:'image',
            rect:['39','241','667px','400px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"grayWorld2.gif",'0px','0px']
         },
         {
            id:'wavesGroup',
            type:'group',
            rect:['-84','465px','1133','154','auto','auto'],
            c:[
            {
               id:'waves7',
               type:'image',
               rect:['84px','0px','1024px','135px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"waves7.jpg",'0px','0px']
            },
            {
               id:'waves5',
               type:'image',
               rect:['78px','0px','1024px','79px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"waves5.png",'0px','0px']
            }]
         },
         {
            id:'gray_clouds4',
            display:'none',
            type:'image',
            rect:['-110','-87','914px','390px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"clouds4.jpg",'0px','0px']
         },
         {
            id:'bjs_plane_01',
            type:'image',
            rect:['-298','350','304px','135px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bjs_plane_01.png",'0px','0px']
         },
         {
            id:'goldClouds4',
            type:'image',
            rect:['1px','0','985px','393px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"goldClouds4.png",'0px','0px']
         },
         {
            id:'goldClouds2Home',
            type:'rect',
            rect:['180px','54px','auto','auto','auto','auto'],
            opacity:0.6328125,
            transform:[[],[],[],['1.048','1.045']]
         },
         {
            id:'openingImage',
            type:'image',
            rect:['0','0','1000px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"openingImage.jpg",'0px','0px']
         },
         {
            id:'Trade-Route-Wines-Type',
            display:'none',
            type:'image',
            rect:['311px','342px','398px','56px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Trade-Route-Wines-Type.png",'0px','0px'],
            filter:[0,0,1,1,0,0,0,0,"rgba(0,0,0,0)",0,0,0],
            transform:[[],[],[],['1.02','1.02']]
         },
         {
            id:'ramp-ground',
            display:'none',
            type:'group',
            rect:['0','192px','1000','491','auto','auto'],
            c:[
            {
               id:'ramp',
               display:'none',
               type:'image',
               rect:['0','267px','1010px','141px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"ramp.jpg",'0px','0px']
            },
            {
               id:'hillscape',
               display:'none',
               type:'image',
               rect:['0px','75px','1000px','195px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"hillscape.png",'0px','0px']
            }]
         },
         {
            id:'wine-shop',
            display:'none',
            type:'image',
            rect:['402px','329','218px','24px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"wine-shop.png",'0px','0px'],
            transform:[[],[],[],['0.96','0.96']]
         },
         {
            id:'Closed-suitcase_only',
            display:'none',
            type:'image',
            rect:['313px','359px','500px','300px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Closed-suitcase_only.png",'0px','0px']
         },
         {
            id:'Partial-open-suitcase',
            display:'none',
            type:'image',
            rect:['328px','354px','357px','195px','auto','auto'],
            opacity:0.5650634765625,
            fill:["rgba(0,0,0,0)",im+"Partial-open-suitcase.png",'0px','0px']
         },
         {
            id:'Partial-open2-suitcase',
            display:'none',
            type:'image',
            rect:['329px','275px','357px','276px','auto','auto'],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"Partial-open2-suitcase.png",'0px','0px']
         },
         {
            id:'open-suitcase',
            display:'none',
            type:'image',
            rect:['330px','152px','357px','400px','auto','auto'],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"open-suitcase.png",'0px','0px']
         },
         {
            id:'open-suitcase2',
            display:'none',
            type:'image',
            rect:['331px','152px','357px','400px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"open-suitcase2.png",'0px','0px']
         }],
         symbolInstances: [
         {
            id:'goldClouds2Home',
            symbolName:'goldClouds2'
         }
         ]
      },
   states: {
      "Base State": {
         "${_open-suitcase}": [
            ["style", "top", '152px'],
            ["style", "opacity", '1'],
            ["style", "left", '331px'],
            ["style", "display", 'none']
         ],
         "${_waves5}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '84px'],
            ["style", "display", 'block']
         ],
         "${_skymtns}": [
            ["style", "top", '0px'],
            ["style", "height", '482px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '1000px']
         ],
         "${_homePageHeader}": [
            ["style", "top", '0px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "height", '296px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '1000px']
         ],
         "${_Closed-suitcase_only}": [
            ["style", "top", '601px'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '1'],
            ["style", "height", '300px'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0.5'],
            ["style", "left", '270px'],
            ["style", "width", '500px']
         ],
         "${_hillscape}": [
            ["style", "top", '409px'],
            ["style", "height", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '1000px']
         ],
         "${_wine-shop}": [
            ["style", "top", '370px'],
            ["transform", "scaleX", '0.96'],
            ["transform", "scaleY", '0.96'],
            ["style", "display", 'none'],
            ["style", "height", '24px'],
            ["style", "opacity", '1'],
            ["style", "left", '396px'],
            ["style", "width", '218px']
         ],
         "${_openingImage}": [
            ["style", "display", 'block'],
            ["style", "opacity", '1']
         ],
         "${_waves7}": [
            ["style", "top", '0px'],
            ["style", "height", '135px'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "left", '84px'],
            ["style", "width", '1013px']
         ],
         "${_open-suitcase2}": [
            ["style", "top", '152px'],
            ["style", "height", '400px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '331px'],
            ["style", "width", '357px']
         ],
         "${_Partial-open2-suitcase}": [
            ["style", "top", '275px'],
            ["style", "opacity", '1'],
            ["style", "left", '329px'],
            ["style", "display", 'none']
         ],
         "${_bjs_plane_01}": [
            ["style", "top", '231px'],
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "display", 'block'],
            ["transform", "rotateZ", '13deg'],
            ["style", "height", '119px'],
            ["style", "opacity", '1'],
            ["style", "left", '-525px'],
            ["style", "width", '267px']
         ],
         "${_goldClouds4}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "height", '393px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '985px']
         ],
         "${_ramp}": [
            ["style", "top", '416px'],
            ["style", "height", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '-4px'],
            ["style", "width", '1010px']
         ],
         "${_homePageMockUp}": [
            ["style", "top", '-2px'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '1'],
            ["style", "height", '600px'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '1000px']
         ],
         "${_Partial-open-suitcase}": [
            ["style", "top", '354px'],
            ["style", "display", 'none'],
            ["style", "height", '195px'],
            ["style", "opacity", '1'],
            ["style", "left", '328px'],
            ["style", "width", '357px']
         ],
         "${_goldClouds2Home}": [
            ["style", "top", '50px'],
            ["style", "display", 'block'],
            ["transform", "scaleY", '1.38'],
            ["style", "height", '304px'],
            ["transform", "scaleX", '1.38'],
            ["style", "opacity", '1'],
            ["style", "left", '168px'],
            ["style", "width", '1023px']
         ],
         "${_Trade-Route-Wines-Type}": [
            ["transform", "scaleX", '1.02'],
            ["style", "opacity", '0'],
            ["style", "left", '311px'],
            ["subproperty", "filter.saturate", '10'],
            ["style", "top", '403px'],
            ["transform", "scaleY", '1.02'],
            ["style", "height", '56px'],
            ["style", "display", 'none'],
            ["style", "width", '398px']
         ],
         "${_grayWorld2}": [
            ["style", "top", '230px'],
            ["style", "display", 'none'],
            ["style", "height", '528px'],
            ["style", "opacity", '0'],
            ["style", "left", '39px'],
            ["style", "width", '937px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '600px'],
            ["style", "max-width", '1000px'],
            ["style", "width", '1000px']
         ],
         "${_ramp-ground}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1']
         ],
         "${_gray_clouds4}": [
            ["style", "top", '-31px'],
            ["subproperty", "filter.saturate", '1'],
            ["subproperty", "filter.contrast", '1'],
            ["style", "height", '390px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '914px']
         ],
         "${_wavesGroup}": [
            ["style", "display", 'block']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 21402,
         autoPlay: true,
         labels: {
            "0%mockup": 20550
         },
         timeline: [
            { id: "eid1499", tween: [ "style", "${_ramp}", "top", '260px', { fromValue: '416px'}], position: 12559, duration: 1058 },
            { id: "eid203", tween: [ "style", "${_waves7}", "display", 'block', { fromValue: 'block'}], position: 1801, duration: 0 },
            { id: "eid204", tween: [ "style", "${_waves7}", "display", 'none', { fromValue: 'block'}], position: 12295, duration: 0 },
            { id: "eid981", tween: [ "style", "${_goldClouds4}", "width", '1232px', { fromValue: '985px'}], position: 0, duration: 7765, easing: "easeInQuad" },
            { id: "eid978", tween: [ "style", "${_goldClouds4}", "height", '491px', { fromValue: '393px'}], position: 0, duration: 7765, easing: "easeInQuad" },
            { id: "eid188", tween: [ "style", "${_bjs_plane_01}", "left", '782px', { fromValue: '-525px'}], position: 527, duration: 8560 },
            { id: "eid984", tween: [ "style", "${_wine-shop}", "left", '746px', { fromValue: '396px'}], position: 15693, duration: 426, easing: "easeOutCirc" },
            { id: "eid1522", tween: [ "style", "${_open-suitcase2}", "display", 'block', { fromValue: 'none'}], position: 15507, duration: 0, easing: "easeInOutElastic" },
            { id: "eid1606", tween: [ "style", "${_open-suitcase2}", "display", 'block', { fromValue: 'block'}], position: 19364, duration: 0 },
            { id: "eid1438", tween: [ "style", "${_bjs_plane_01}", "display", 'none', { fromValue: 'block'}], position: 9976, duration: 0, easing: "easeInOutElastic" },
            { id: "eid1360", tween: [ "style", "${_wavesGroup}", "display", 'none', { fromValue: 'block'}], position: 12967, duration: 0 },
            { id: "eid380", tween: [ "style", "${_goldClouds2Home}", "opacity", '0.4755840003490448', { fromValue: '1'}], position: 500, duration: 6784, easing: "easeInQuad" },
            { id: "eid1207", tween: [ "style", "${_goldClouds2Home}", "opacity", '0', { fromValue: '0.4755840003490448'}], position: 7284, duration: 2584, easing: "easeInQuad" },
            { id: "eid202", tween: [ "style", "${_waves7}", "height", '191px', { fromValue: '135px'}], position: 1801, duration: 5464 },
            { id: "eid772", tween: [ "style", "${_waves7}", "height", '171px', { fromValue: '191px'}], position: 7265, duration: 1822 },
            { id: "eid1519", tween: [ "style", "${_Trade-Route-Wines-Type}", "top", '71px', { fromValue: '403px'}], position: 9411, duration: 2972 },
            { id: "eid1607", tween: [ "style", "${_Trade-Route-Wines-Type}", "top", '69px', { fromValue: '71px'}], position: 12383, duration: 237 },
            { id: "eid1379", tween: [ "style", "${_grayWorld2}", "opacity", '1', { fromValue: '0'}], position: 6841, duration: 4926, easing: "easeOutQuad" },
            { id: "eid1380", tween: [ "style", "${_grayWorld2}", "opacity", '0', { fromValue: '1'}], position: 11767, duration: 3215, easing: "easeOutQuad" },
            { id: "eid1386", tween: [ "style", "${_grayWorld2}", "left", '157px', { fromValue: '39px'}], position: 6841, duration: 2740, easing: "easeOutQuad" },
            { id: "eid980", tween: [ "style", "${_goldClouds4}", "left", '-232px', { fromValue: '0px'}], position: 0, duration: 7765, easing: "easeInQuad" },
            { id: "eid31", tween: [ "style", "${_waves5}", "left", '61px', { fromValue: '84px'}], position: 1801, duration: 2602, easing: "easeOutQuad" },
            { id: "eid33", tween: [ "style", "${_waves5}", "left", '78px', { fromValue: '61px'}], position: 4403, duration: 2862, easing: "swing" },
            { id: "eid739", tween: [ "style", "${_waves5}", "left", '80px', { fromValue: '78px'}], position: 7265, duration: 1822, easing: "swing" },
            { id: "eid38", tween: [ "style", "${_waves5}", "left", '84px', { fromValue: '80px'}], position: 9087, duration: 1561 },
            { id: "eid1589", tween: [ "style", "${_open-suitcase2}", "opacity", '0', { fromValue: '1'}], position: 17072, duration: 2059 },
            { id: "eid804", tween: [ "style", "${_hillscape}", "opacity", '1', { fromValue: '0.000000'}], position: 11746, duration: 3307 },
            { id: "eid1546", tween: [ "style", "${_hillscape}", "opacity", '0', { fromValue: '1'}], position: 16491, duration: 2118 },
            { id: "eid441", tween: [ "style", "${_Closed-suitcase_only}", "width", '357px', { fromValue: '500px'}], position: 12819, duration: 1828, easing: "easeInOutElastic" },
            { id: "eid410", tween: [ "style", "${_Closed-suitcase_only}", "top", '338px', { fromValue: '601px'}], position: 12819, duration: 1830, easing: "easeInOutElastic" },
            { id: "eid1383", tween: [ "style", "${_grayWorld2}", "display", 'block', { fromValue: 'none'}], position: 6813, duration: 0, easing: "easeOutQuad" },
            { id: "eid1422", tween: [ "style", "${_grayWorld2}", "display", 'none', { fromValue: 'block'}], position: 14941, duration: 0, easing: "easeOutQuad" },
            { id: "eid187", tween: [ "style", "${_bjs_plane_01}", "height", '62px', { fromValue: '119px'}], position: 527, duration: 8560 },
            { id: "eid413", tween: [ "style", "${_Closed-suitcase_only}", "opacity", '1', { fromValue: '0.5'}], position: 12819, duration: 1828, easing: "easeInOutElastic" },
            { id: "eid1377", tween: [ "style", "${_grayWorld2}", "top", '148px', { fromValue: '230px'}], position: 6841, duration: 2740, easing: "easeOutQuad" },
            { id: "eid1577", tween: [ "style", "${_open-suitcase2}", "width", '398px', { fromValue: '357px'}], position: 16358, duration: 622 },
            { id: "eid374", tween: [ "transform", "${_goldClouds2Home}", "scaleY", '1.04549', { fromValue: '1.38'}], position: 1801, duration: 7286, easing: "easeInQuad" },
            { id: "eid210", tween: [ "style", "${_waves7}", "left", '-135px', { fromValue: '84px'}], position: 1801, duration: 5464, easing: "easeInQuad" },
            { id: "eid774", tween: [ "style", "${_waves7}", "left", '-69px', { fromValue: '-135px'}], position: 7265, duration: 1822 },
            { id: "eid1425", tween: [ "style", "${_ramp}", "display", 'block', { fromValue: 'none'}], position: 11746, duration: 0, easing: "easeOutQuad" },
            { id: "eid1431", tween: [ "style", "${_ramp}", "display", 'none', { fromValue: 'block'}], position: 18758, duration: 0, easing: "easeOutQuad" },
            { id: "eid449", tween: [ "style", "${_Partial-open-suitcase}", "display", 'block', { fromValue: 'none'}], position: 14649, duration: 0, easing: "easeOutQuad" },
            { id: "eid821", tween: [ "style", "${_Partial-open-suitcase}", "display", 'none', { fromValue: 'block'}], position: 14825, duration: 0, easing: "easeOutQuad" },
            { id: "eid1028", tween: [ "style", "${_Trade-Route-Wines-Type}", "display", 'block', { fromValue: 'none'}], position: 9303, duration: 0, easing: "easeOutCubic" },
            { id: "eid1433", tween: [ "style", "${_Trade-Route-Wines-Type}", "display", 'none', { fromValue: 'block'}], position: 20521, duration: 0, easing: "easeOutQuad" },
            { id: "eid1598", tween: [ "subproperty", "${_Trade-Route-Wines-Type}", "filter.saturate", '1', { fromValue: '10'}], position: 9411, duration: 2085 },
            { id: "eid1378", tween: [ "style", "${_grayWorld2}", "height", '339px', { fromValue: '528px'}], position: 6841, duration: 2740, easing: "easeOutQuad" },
            { id: "eid185", tween: [ "transform", "${_bjs_plane_01}", "rotateZ", '0deg', { fromValue: '13deg'}], position: 527, duration: 8560 },
            { id: "eid1578", tween: [ "style", "${_open-suitcase2}", "left", '308px', { fromValue: '331px'}], position: 16358, duration: 622 },
            { id: "eid440", tween: [ "style", "${_Closed-suitcase_only}", "height", '214px', { fromValue: '300px'}], position: 12819, duration: 1828, easing: "easeInOutElastic" },
            { id: "eid196", tween: [ "style", "${_bjs_plane_01}", "opacity", '0', { fromValue: '1'}], position: 9087, duration: 520 },
            { id: "eid834", tween: [ "style", "${_open-suitcase}", "display", 'block', { fromValue: 'none'}], position: 14974, duration: 0, easing: "easeOutQuad" },
            { id: "eid1521", tween: [ "style", "${_open-suitcase}", "display", 'none', { fromValue: 'block'}], position: 15510, duration: 0 },
            { id: "eid98", tween: [ "style", "${_waves5}", "display", 'block', { fromValue: 'block'}], position: 1801, duration: 0 },
            { id: "eid99", tween: [ "style", "${_waves5}", "display", 'none', { fromValue: 'block'}], position: 11562, duration: 0 },
            { id: "eid313", tween: [ "style", "${_skymtns}", "display", 'none', { fromValue: 'none'}], position: 1020, duration: 0 },
            { id: "eid298", tween: [ "style", "${_skymtns}", "display", 'block', { fromValue: 'none'}], position: 1801, duration: 0 },
            { id: "eid321", tween: [ "style", "${_skymtns}", "display", 'none', { fromValue: 'block'}], position: 9347, duration: 0 },
            { id: "eid1452", tween: [ "style", "${_homePageMockUp}", "opacity", '1', { fromValue: '0'}], position: 20404, duration: 998 },
            { id: "eid1576", tween: [ "style", "${_open-suitcase2}", "height", '446px', { fromValue: '400px'}], position: 16358, duration: 622 },
            { id: "eid189", tween: [ "style", "${_bjs_plane_01}", "top", '93px', { fromValue: '231px'}], position: 527, duration: 8560 },
            { id: "eid1338", tween: [ "style", "${_open-suitcase}", "left", '331px', { fromValue: '331px'}], position: 14974, duration: 0, easing: "easeOutQuad" },
            { id: "eid285", tween: [ "style", "${_gray_clouds4}", "top", '-73px', { fromValue: '-31px'}], position: 1675, duration: 6106 },
            { id: "eid186", tween: [ "style", "${_bjs_plane_01}", "width", '140px', { fromValue: '267px'}], position: 527, duration: 8560 },
            { id: "eid383", tween: [ "style", "${_goldClouds2Home}", "display", 'none', { fromValue: 'block'}], position: 9867, duration: 0, easing: "easeOutQuad" },
            { id: "eid1512", tween: [ "style", "${_ramp}", "height", '148px', { fromValue: '0px'}], position: 12551, duration: 1057 },
            { id: "eid219", tween: [ "style", "${_openingImage}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 2490, easing: "easeInQuad" },
            { id: "eid1423", tween: [ "style", "${_ramp-ground}", "display", 'block', { fromValue: 'none'}], position: 11707, duration: 0, easing: "easeOutQuad" },
            { id: "eid1429", tween: [ "style", "${_ramp-ground}", "display", 'none', { fromValue: 'block'}], position: 18760, duration: 0, easing: "easeOutQuad" },
            { id: "eid364", tween: [ "style", "${_goldClouds2Home}", "top", '-3px', { fromValue: '50px'}], position: 1801, duration: 7286, easing: "easeInQuad" },
            { id: "eid207", tween: [ "style", "${_waves7}", "width", '1409px', { fromValue: '1013px'}], position: 1801, duration: 5464 },
            { id: "eid773", tween: [ "style", "${_waves7}", "width", '1257px', { fromValue: '1409px'}], position: 7265, duration: 1822 },
            { id: "eid982", tween: [ "style", "${_wine-shop}", "top", '162px', { fromValue: '370px'}], position: 15693, duration: 426 },
            { id: "eid920", tween: [ "style", "${_goldClouds4}", "opacity", '0.87957763671875', { fromValue: '1'}], position: 1801, duration: 641, easing: "easeOutQuad" },
            { id: "eid921", tween: [ "style", "${_goldClouds4}", "opacity", '1', { fromValue: '0.87957763671875'}], position: 2442, duration: 591, easing: "easeOutQuad" },
            { id: "eid917", tween: [ "style", "${_goldClouds4}", "opacity", '0', { fromValue: '1'}], position: 3033, duration: 6054, easing: "easeOutQuad" },
            { id: "eid284", tween: [ "style", "${_gray_clouds4}", "left", '-252px', { fromValue: '0px'}], position: 1675, duration: 6106 },
            { id: "eid1424", tween: [ "style", "${_hillscape}", "display", 'block', { fromValue: 'none'}], position: 11734, duration: 0, easing: "easeOutQuad" },
            { id: "eid1430", tween: [ "style", "${_hillscape}", "display", 'none', { fromValue: 'block'}], position: 18783, duration: 0, easing: "easeOutQuad" },
            { id: "eid223", tween: [ "style", "${_goldClouds4}", "display", 'block', { fromValue: 'block'}], position: 1020, duration: 0, easing: "easeOutQuad" },
            { id: "eid228", tween: [ "style", "${_goldClouds4}", "display", 'none', { fromValue: 'block'}], position: 9347, duration: 0, easing: "easeOutQuad" },
            { id: "eid218", tween: [ "style", "${_openingImage}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid222", tween: [ "style", "${_openingImage}", "display", 'none', { fromValue: 'block'}], position: 2490, duration: 0, easing: "easeInQuad" },
            { id: "eid1447", tween: [ "style", "${_homePageHeader}", "opacity", '1', { fromValue: '0'}], position: 9087, duration: 1561 },
            { id: "eid1456", tween: [ "style", "${_homePageHeader}", "opacity", '0', { fromValue: '1'}], position: 19958, duration: 541 },
            { id: "eid299", tween: [ "style", "${_skymtns}", "opacity", '0', { fromValue: '1'}], position: 5964, duration: 3383 },
            { id: "eid443", tween: [ "style", "${_Closed-suitcase_only}", "left", '330px', { fromValue: '270px'}], position: 12819, duration: 1828, easing: "easeInOutElastic" },
            { id: "eid205", tween: [ "style", "${_waves7}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 4293, easing: "easeOutQuad" },
            { id: "eid1449", tween: [ "style", "${_homePageMockUp}", "display", 'block', { fromValue: 'none'}], position: 20329, duration: 0 },
            { id: "eid831", tween: [ "style", "${_Partial-open2-suitcase}", "display", 'none', { fromValue: 'none'}], position: 1676, duration: 0, easing: "easeOutQuad" },
            { id: "eid820", tween: [ "style", "${_Partial-open2-suitcase}", "display", 'block', { fromValue: 'none'}], position: 14829, duration: 0, easing: "easeOutQuad" },
            { id: "eid832", tween: [ "style", "${_Partial-open2-suitcase}", "display", 'none', { fromValue: 'block'}], position: 14971, duration: 0, easing: "easeOutQuad" },
            { id: "eid1505", tween: [ "style", "${_hillscape}", "height", '195px', { fromValue: '0px'}], position: 11753, duration: 1869 },
            { id: "eid376", tween: [ "transform", "${_goldClouds2Home}", "scaleX", '1.05', { fromValue: '1.38'}], position: 1801, duration: 7286, easing: "easeInQuad" },
            { id: "eid1502", tween: [ "style", "${_hillscape}", "left", '0px', { fromValue: '0px'}], position: 11758, duration: 0 },
            { id: "eid1503", tween: [ "style", "${_hillscape}", "left", '0px', { fromValue: '0px'}], position: 13581, duration: 0 },
            { id: "eid1594", tween: [ "style", "${_wine-shop}", "opacity", '0', { fromValue: '1'}], position: 19958, duration: 541 },
            { id: "eid809", tween: [ "style", "${_Closed-suitcase_only}", "display", 'block', { fromValue: 'none'}], position: 12819, duration: 0, easing: "easeOutQuad" },
            { id: "eid445", tween: [ "style", "${_Closed-suitcase_only}", "display", 'none', { fromValue: 'block'}], position: 14645, duration: 0, easing: "easeOutQuad" },
            { id: "eid36", tween: [ "style", "${_waves5}", "opacity", '0', { fromValue: '1'}], position: 7265, duration: 4293, easing: "swing" },
            { id: "eid979", tween: [ "style", "${_goldClouds4}", "top", '-97px', { fromValue: '0px'}], position: 0, duration: 7765, easing: "easeInQuad" },
            { id: "eid1500", tween: [ "style", "${_hillscape}", "width", '1000px', { fromValue: '1000px'}], position: 11757, duration: 0 },
            { id: "eid1501", tween: [ "style", "${_hillscape}", "width", '1000px', { fromValue: '1000px'}], position: 13581, duration: 0 },
            { id: "eid995", tween: [ "style", "${_wine-shop}", "display", 'block', { fromValue: 'none'}], position: 15661, duration: 0 },
            { id: "eid1428", tween: [ "style", "${_wine-shop}", "display", 'none', { fromValue: 'block'}], position: 20858, duration: 0, easing: "easeOutQuad" },
            { id: "eid322", tween: [ "style", "${_homePageHeader}", "display", 'block', { fromValue: 'none'}], position: 9087, duration: 0, easing: "easeOutQuad" },
            { id: "eid1435", tween: [ "style", "${_homePageHeader}", "display", 'none', { fromValue: 'block'}], position: 20518, duration: 0, easing: "easeOutQuad" },
            { id: "eid781", tween: [ "style", "${_waves5}", "top", '80px', { fromValue: '0px'}], position: 7265, duration: 3235, easing: "swing" },
            { id: "eid363", tween: [ "style", "${_goldClouds2Home}", "left", '-80px', { fromValue: '168px'}], position: 1801, duration: 7286, easing: "easeInQuad" },
            { id: "eid808", tween: [ "style", "${_ramp}", "opacity", '1', { fromValue: '0.000000'}], position: 12559, duration: 2348 },
            { id: "eid1548", tween: [ "style", "${_ramp}", "opacity", '0', { fromValue: '1'}], position: 16491, duration: 2151 },
            { id: "eid283", tween: [ "style", "${_gray_clouds4}", "opacity", '0', { fromValue: '1'}], position: 1675, duration: 4541 },
            { id: "eid1382", tween: [ "style", "${_grayWorld2}", "width", '626px', { fromValue: '937px'}], position: 6841, duration: 2740, easing: "easeOutQuad" },
            { id: "eid289", tween: [ "style", "${_gray_clouds4}", "display", 'block', { fromValue: 'none'}], position: 498, duration: 0 },
            { id: "eid282", tween: [ "style", "${_gray_clouds4}", "display", 'none', { fromValue: 'block'}], position: 7781, duration: 0 },
            { id: "eid1517", tween: [ "style", "${_Trade-Route-Wines-Type}", "opacity", '1', { fromValue: '0'}], position: 9411, duration: 1463 },
            { id: "eid1593", tween: [ "style", "${_Trade-Route-Wines-Type}", "opacity", '0', { fromValue: '1'}], position: 19958, duration: 541 },
            { id: "eid780", tween: [ "style", "${_waves7}", "top", '0px', { fromValue: '0px'}], position: 1801, duration: 0, easing: "swing" },
            { id: "eid779", tween: [ "style", "${_waves7}", "top", '80px', { fromValue: '0px'}], position: 7265, duration: 3235, easing: "swing" },
            { id: "eid1575", tween: [ "style", "${_open-suitcase2}", "top", '142px', { fromValue: '152px'}], position: 16358, duration: 622 },
            { id: "eid1485", tween: [ "style", "${_hillscape}", "top", '75px', { fromValue: '409px'}], position: 11757, duration: 1825 }         ]
      }
   }
},
"goldClouds2": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'goldClouds2_01',
      type: 'image',
      rect: ['0px','0px','512px','304px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/goldClouds2_01.png','0px','0px']
   },
   {
      id: 'goldClouds2_02',
      type: 'image',
      rect: ['512px','0px','511px','304px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/goldClouds2_02.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_goldClouds2_02}": [
            ["style", "left", '512px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '304px'],
            ["style", "width", '1023px']
         ],
         "${_goldClouds2_01}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-88638607");
