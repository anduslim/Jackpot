/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['lobster, serif']='<script src=\"http://use.edgefonts.net/lobster:n4:all.js\"></script>';
    fonts['holtwood-one-sc, sans-serif']='<script src=\"http://use.edgefonts.net/holtwood-one-sc:n4:all.js\"></script>';
    fonts['alfa-slab-one, serif']='<script src=\"http://use.edgefonts.net/alfa-slab-one:n4:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'frame2',
                type: 'image',
                rect: ['-2263px', '-1171px','5443px','3061px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frame.jpg",'0px','0px'],
                transform: [[],[],[],['0.15','0.15']]
            },
            {
                id: 'reels',
                type: 'image',
                rect: ['91px', '160px','730px','380px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"redReelsPerspective.png",'0px','0px','100%','100%']
            },
            {
                id: 'reelContainer',
                type: 'group',
                rect: ['121px', '-2px','667px','700px','auto', 'auto'],
                c: [
                {
                    id: 'reel0',
                    type: 'group',
                    rect: ['34px', '217px','600px','280px','auto', 'auto'],
                    c: [
                    {
                        id: 'faceContainer0',
                        type: 'rect',
                        rect: ['0px', '0px','600px','280px','auto', 'auto'],
                        borderRadius: ["50% 50%", "50% 50%", "50% 50%", "50% 50%"],
                        fill: ["rgba(192,192,192,0)"],
                        stroke: [0,"rgba(18,18,18,1.00)","solid"]
                    }]
                }]
            },
            {
                id: 'frame',
                display: 'block',
                type: 'image',
                rect: ['1px', '0px','1024px','768px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frame2.png",'0px','0px']
            },
            {
                id: 'scorePanel',
                type: 'rect',
                rect: ['364px', '40px','158px','46px','auto', 'auto'],
                borderRadius: ["27px 27px", "27px 27px", "0px", "0px"],
                fill: ["rgba(245,245,245,1.00)"],
                stroke: [11,"rgba(163,25,50,1.00)","solid"]
            },
            {
                id: 'numbersPanel',
                type: 'rect',
                rect: ['141px', '93px','607px','51px','auto', 'auto'],
                borderRadius: ["27px 27px", "27px 27px", "4px 4px", "4px 4px"],
                fill: ["rgba(58,58,60,1.00)"],
                stroke: [11,"rgba(163,25,50,1.00)","solid"]
            },
            {
                id: 'creditScoreText',
                type: 'text',
                rect: ['156px', '110px','600px','41px','auto', 'auto'],
                text: "SPIN TO WIN",
                align: "center",
                font: ['holtwood-one-sc, sans-serif', 28, "rgba(212,55,87,1.00)", "400", "none", ""],
                textShadow: ["rgba(255,255,255,1.00)", 0, 2, 1]
            },
            {
                id: 'scoreLabel',
                type: 'text',
                rect: ['385px', '53px','140px','37px','auto', 'auto'],
                opacity: 1,
                text: "Prize",
                align: "center",
                font: ['alfa-slab-one, serif', 30, "rgba(58,58,60,1.00)", "normal", "none", ""]
            },
            {
                id: 'armbar',
                type: 'rect',
                rect: ['762px', '154px','152px','156px','auto', 'auto'],
                clip: ['rect(101px 200.72998046875px 205.69386291503906px 130.40989685058594px)'],
                borderRadius: ["17px 17px", "17px 17px", "17px 17px", "17px 17px"],
                fill: ["rgba(58,58,60,0.00)"],
                stroke: [23,"rgba(146,151,156,1.00)","solid"],
                transform: [[],[],[],['1.03093','1.03158']]
            },
            {
                id: 'arm',
                type: 'group',
                rect: ['918px', '51px','63','308px','auto', 'auto'],
                c: [
                {
                    id: 'handle',
                    type: 'rect',
                    rect: ['0px', '0px','63px','220px','auto', 'auto'],
                    borderRadius: ["50px 50px", "50px 50px", "50px 50px", "50px 50px"],
                    fill: ["rgba(58,58,60,1)"],
                    stroke: [0,"rgb(163, 25, 50)","solid"]
                },
                {
                    id: 'handleshine',
                    type: 'ellipse',
                    rect: ['17px', '8px','9px','14px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(244,244,244,1.00)"],
                    stroke: [0,"rgb(164, 43, 68)","solid"],
                    transform: [[],['51']]
                }]
            },
            {
                id: 'numbersPanelCopy',
                type: 'rect',
                rect: ['141px', '535px','607px','46px','auto', 'auto'],
                borderRadius: ["4px 4px", "4px 4px", "27px 27px", "27px 27px"],
                fill: ["rgba(58,58,60,1.00)"],
                stroke: [11,"rgba(181,35,64,1.00)","solid"]
            },
            {
                id: 'resultShadowText',
                type: 'text',
                rect: ['152px', '553px','607px','33px','auto', 'auto'],
                text: "LOADING...",
                align: "center",
                font: ['alfa-slab-one, serif', 26, "rgba(183,41,69,1.00)", "normal", "none", ""]
            },
            {
                id: 'resultText',
                type: 'text',
                rect: ['152px', '550px','607px','36px','auto', 'auto'],
                text: "LOADING...",
                align: "center",
                font: ['alfa-slab-one, serif', 26, "rgba(245,245,245,1.00)", "normal", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_frame}": [
                ["style", "top", '0px'],
                ["style", "left", '1px'],
                ["style", "display", 'block']
            ],
            "${_handleshine}": [
                ["style", "top", '8px'],
                ["transform", "rotateZ", '51deg'],
                ["style", "height", '14px'],
                ["color", "background-color", 'rgba(244,244,244,1)'],
                ["style", "left", '17px'],
                ["style", "width", '9px']
            ],
            "${_reels}": [
                ["style", "top", '160px'],
                ["style", "opacity", '1'],
                ["style", "left", '91px'],
                ["style", "width", '730px']
            ],
            "${_resultShadowText}": [
                ["style", "top", '553px'],
                ["style", "width", '607px'],
                ["style", "text-align", 'center'],
                ["style", "height", '33px'],
                ["color", "color", 'rgba(183,41,69,1.00)'],
                ["style", "font-family", 'alfa-slab-one, serif'],
                ["style", "left", '152px'],
                ["style", "font-size", '26px']
            ],
            "${_titleText}": [
                ["style", "top", '-275px']
            ],
            "${_iconText}": [
                ["style", "top", '-80px']
            ],
            "${_arm}": [
                ["style", "height", '308px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '918px'],
                ["style", "top", '51px']
            ],
            "${_reel0}": [
                ["style", "top", '217px'],
                ["style", "bottom", 'auto'],
                ["style", "height", '280px'],
                ["style", "right", 'auto'],
                ["style", "left", '34px'],
                ["style", "width", '600px']
            ],
            "${_resultText}": [
                ["style", "top", '550px'],
                ["style", "font-size", '26px'],
                ["style", "text-align", 'center'],
                ["style", "height", '36px'],
                ["color", "color", 'rgba(245,245,245,1.00)'],
                ["style", "font-family", 'alfa-slab-one, serif'],
                ["style", "left", '152px'],
                ["style", "width", '607px']
            ],
            "${_faceContainer0}": [
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '0px'],
                ["style", "width", '600px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "height", '280px'],
                ["color", "border-color", 'rgba(18,18,18,1.00)'],
                ["style", "border-width", '0px'],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ]
            ],
            "${_scoreLabel}": [
                ["color", "color", 'rgba(58,58,60,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '385px'],
                ["style", "font-size", '30px'],
                ["style", "top", '53px'],
                ["style", "text-align", 'center'],
                ["style", "height", '37px'],
                ["style", "font-family", 'alfa-slab-one, serif'],
                ["style", "width", '140px']
            ],
            "${_scorePanel}": [
                ["color", "background-color", 'rgba(245,245,245,1.00)'],
                ["style", "border-top-left-radius", [27,27], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '11px'],
                ["style", "width", '158px'],
                ["style", "top", '40px'],
                ["style", "height", '46px'],
                ["color", "border-color", 'rgba(163,25,50,1.00)'],
                ["style", "border-top-right-radius", [27,27], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '364px']
            ],
            "${_numbersPanelCopy}": [
                ["color", "background-color", 'rgba(58,58,60,1.00)'],
                ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [27,27], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '11px'],
                ["style", "width", '607px'],
                ["style", "top", '535px'],
                ["style", "border-bottom-left-radius", [27,27], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '46px'],
                ["color", "border-color", 'rgba(181,35,64,1.00)'],
                ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '141px']
            ],
            "${_frame2}": [
                ["style", "top", '-1171px'],
                ["transform", "scaleX", '0.15'],
                ["style", "left", '-2263px'],
                ["transform", "scaleY", '0.15']
            ],
            "${_reelContainer}": [
                ["style", "top", '-2px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '700px'],
                ["style", "left", '121px'],
                ["style", "width", '667px']
            ],
            "${_numbersPanel}": [
                ["color", "background-color", 'rgba(58,58,60,1.00)'],
                ["style", "border-top-left-radius", [27,27], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '11px'],
                ["style", "width", '607px'],
                ["style", "top", '93px'],
                ["style", "border-bottom-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '51px'],
                ["color", "border-color", 'rgba(163,25,50,1.00)'],
                ["style", "left", '141px'],
                ["style", "border-top-right-radius", [27,27], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_resultTextCopy2}": [
                ["style", "top", '306px'],
                ["style", "letter-spacing", '0'],
                ["style", "width", '607px'],
                ["color", "color", 'rgba(245,245,245,1)'],
                ["style", "height", '157px'],
                ["style", "font-family", 'alfa-slab-one, serif'],
                ["style", "left", '31px'],
                ["style", "font-size", '130px']
            ],
            "${_handle}": [
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "width", '63px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '220px'],
                ["style", "border-width", '0px'],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_creditScoreText}": [
                ["subproperty", "textShadow.blur", '1px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(212,55,87,1.00)'],
                ["subproperty", "textShadow.offsetV", '2px'],
                ["style", "left", '156px'],
                ["style", "font-size", '26px'],
                ["style", "top", '110px'],
                ["style", "line-height", '38px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'holtwood-one-sc, sans-serif'],
                ["style", "height", '35px'],
                ["subproperty", "textShadow.color", 'rgba(255,255,255,1.00)'],
                ["style", "width", '600px'],
                ["style", "font-weight", '400']
            ],
            "${_armbar}": [
                ["color", "background-color", 'rgba(58,58,60,0.00)'],
                ["style", "border-top-left-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1.03093'],
                ["style", "border-width", '23px'],
                ["style", "top", '154px'],
                ["style", "border-bottom-left-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '1.03158'],
                ["style", "border-top-right-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["color", "border-color", 'rgba(146,151,156,1.00)'],
                ["style", "clip", [101,200.72998046875,205.69386291503906,130.40989685058594], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '762px']
            ],
            "${_resultTextCopy}": [
                ["style", "top", '550px'],
                ["style", "width", '607px'],
                ["color", "color", 'rgba(245,245,245,1)'],
                ["style", "height", '36px'],
                ["style", "font-family", 'alfa-slab-one, serif'],
                ["style", "left", '152px'],
                ["style", "font-size", '26px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "overflow", 'visible'],
                ["style", "height", '768px'],
                ["style", "max-width", '1024px'],
                ["style", "width", '1024px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
                { id: "eid1792", tween: [ "style", "${_frame}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"FaceSymbol": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '600px', '280px', 'auto', 'auto'],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'bgImage',
                    tag: 'img',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/bar.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '280px'],
                ["style", "width", '600px']
            ],
            "${_bgImage}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"GameOverSymbol": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    id: 'bg',
                    opacity: 0.60162601626016,
                    type: 'rect',
                    fill: ['rgba(26,34,37,1.00)']
                },
                {
                    rect: ['51', '156', '921', '483', 'auto', 'auto'],
                    id: 'mainPanel',
                    display: 'none',
                    type: 'group',
                    c: [
                    {
                        rect: ['0px', '0px', '897px', '459px', 'auto', 'auto'],
                        borderRadius: ['38px 38px', '38px 38px', '38px 38px', '38px 38px'],
                        stroke: [12, 'rgba(255,255,255,1.00)', 'solid'],
                        id: 'bgPanel',
                        opacity: 0.90243902439024,
                        type: 'rect',
                        fill: ['rgba(58,58,60,1.00)']
                    },
                    {
                        font: ['alfa-slab-one, serif', 106, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                        type: 'text',
                        align: 'center',
                        id: 'gameOverText',
                        text: 'GAME OVER',
                        textShadow: ['rgba(164,43,68,1.00)', 0, 4, 0],
                        rect: ['92px', '85px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        font: ['alfa-slab-one, serif', 106, 'rgba(164,43,68,1.00)', 'normal', 'none', ''],
                        type: 'text',
                        align: 'center',
                        id: 'playAgainText',
                        text: 'PLAY AGAIN',
                        textShadow: ['rgba(255,255,255,1.00)', 0, 4, 0],
                        rect: ['86px', '270px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        font: ['alfa-slab-one, serif', 66, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                        type: 'text',
                        align: 'center',
                        id: 'youScoredText',
                        text: 'YOU SCORED XXXXX',
                        textShadow: ['rgba(164,43,68,1.00)', 0, 4, 0],
                        rect: ['62px', '197px', '797px', '90px', 'auto', 'auto']
                    }]
                },
                {
                    rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'cover',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'block',
                    fill: ['rgba(26,34,37,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bgPanel}": [
                ["color", "background-color", 'rgba(58,58,60,1.00)'],
                ["style", "border-top-left-radius", [38,38], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [38,38], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [38,38], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [38,38], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-width", '12px'],
                ["color", "border-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '0px'],
                ["style", "opacity", '0.90243902439024']
            ],
            "${_cover}": [
                ["color", "background-color", 'rgba(26,34,37,1.00)'],
                ["style", "opacity", '0'],
                ["style", "display", 'block']
            ],
            "${_bg}": [
                ["color", "background-color", 'rgba(26,34,37,1.00)'],
                ["style", "opacity", '0.60162601626016']
            ],
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1024px']
            ],
            "${_mainPanel}": [
                ["transform", "scaleX", '0.35'],
                ["transform", "scaleY", '0.35'],
                ["style", "display", 'none']
            ],
            "${_gameOverText}": [
                ["subproperty", "textShadow.blur", '0px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["subproperty", "textShadow.offsetV", '4px'],
                ["style", "left", '92px'],
                ["style", "font-size", '106px'],
                ["style", "top", '85px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'alfa-slab-one, serif'],
                ["subproperty", "textShadow.color", 'rgba(164,43,68,1.00)']
            ],
            "${_playAgainText}": [
                ["subproperty", "textShadow.blur", '0px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(164,43,68,1.00)'],
                ["subproperty", "textShadow.offsetV", '4px'],
                ["style", "left", '86px'],
                ["style", "font-size", '106px'],
                ["style", "top", '270px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'alfa-slab-one, serif'],
                ["subproperty", "textShadow.color", 'rgba(255,255,255,1.00)']
            ],
            "${_youScoredText}": [
                ["subproperty", "textShadow.blur", '0px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["subproperty", "textShadow.offsetV", '4px'],
                ["style", "left", '62px'],
                ["style", "font-size", '66px'],
                ["style", "top", '197px'],
                ["style", "text-align", 'center'],
                ["style", "height", '90px'],
                ["style", "font-family", 'alfa-slab-one, serif'],
                ["subproperty", "textShadow.color", 'rgba(164,43,68,1.00)'],
                ["style", "width", '797px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: true,
            timeline: [
                { id: "eid1810", tween: [ "style", "${_mainPanel}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutExpo" },
                { id: "eid1811", tween: [ "style", "${_mainPanel}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0, easing: "easeOutExpo" },
                { id: "eid1809", tween: [ "transform", "${_mainPanel}", "scaleY", '0.7', { fromValue: '0.35'}], position: 250, duration: 500, easing: "easeOutExpo" },
                { id: "eid1808", tween: [ "transform", "${_mainPanel}", "scaleX", '0.7', { fromValue: '0.35'}], position: 250, duration: 500, easing: "easeOutExpo" },
                { id: "eid1799", tween: [ "style", "${_cover}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-545038043");
