"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var PIXI = require("pixi.js");
var dat = require("dat.gui");
var Filters = require("pixi-filters");
var Gradients = require("@pixi-essentials/gradients");
var oldWindowHeight;
var load = function (app) {
    return new Promise(function (resolve) {
        app.loader.add('assets/sunflower.png')
            .add('assets/stem.png')
            .load(function () {
            resolve();
        });
    });
};
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var app, myFilter, skyTexture, colorStops, renderer, sky, graphics, flowers, flowerPosX, flowerPosY, flowerScale, flower, dateSlider, gui, context;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                app = new PIXI.Application();
                // Display application properly
                document.body.style.margin = '0';
                app.renderer.view.style.position = 'absolute';
                app.renderer.view.style.display = 'block';
                // View size = windows
                app.renderer.resize(window.innerWidth, window.innerHeight);
                // Load assets
                return [4 /*yield*/, load(app)];
            case 1:
                // Load assets
                _a.sent();
                myFilter = new Filters.PixelateFilter();
                myFilter.size = 5;
                app.stage.filters = [myFilter];
                skyTexture = PIXI.RenderTexture.create({ width: window.innerWidth,
                    height: window.innerHeight });
                colorStops = [{ offset: 0, color: 0x90dffe },
                    { offset: 1, color: 0x38a3d1 }];
                renderer = app.renderer;
                if (app.renderer instanceof PIXI.Renderer) {
                    Gradients.GradientFactory.createLinearGradient(app.renderer, skyTexture, { x0: 0, y0: 0, x1: window.innerWidth, y1: window.innerHeight,
                        colorStops: colorStops });
                }
                sky = new PIXI.Sprite(skyTexture);
                app.stage.addChild(sky);
                graphics = new PIXI.Graphics();
                graphics.beginFill(0x1a2b0f);
                graphics.drawRect(0, window.innerHeight, window.innerWidth * 10, -180);
                app.stage.addChild(graphics);
                flowers = [];
                flowerPosX = -window.innerWidth;
                flowerPosY = window.innerHeight;
                flowerScale = 0.7;
                while (flowerPosY < window.innerHeight * 1.5) {
                    flowerPosX = 0;
                    while (flowerPosX < window.innerWidth * 3) {
                        flower = new PIXI.Sprite(app.loader.resources['assets/sunflower.png'].texture);
                        flower.scale.set(0.25 * flowerScale, 0.15 * flowerScale);
                        flower.anchor.set(0.5, 0.5);
                        flower.position.set(flowerPosX - (flower.width / 3) + getRandom(-10, 10), flowerPosY - (flower.height * 3.5) + getRandom(-10, 10));
                        flowers.push(flower);
                        app.stage.addChild(flower);
                        flowerPosX += flower.width - 20;
                    }
                    flowerScale += 0.1;
                    flowerPosY += flowers[flowers.length - 1].height + 10;
                }
                oldWindowHeight = window.innerHeight;
                dateSlider = { time: 0 };
                gui = new dat.GUI();
                gui.add(dateSlider, 'time', 0, 1410);
                // Handle window resizing
                window.addEventListener('resize', function (_e) {
                    app.renderer.resize(window.innerWidth, window.innerHeight);
                    if (window.innerHeight != oldWindowHeight) {
                        for (var i = 0; i < flowers.length; i++) {
                            flowers[i].y = flowers[i].y - (-window.innerHeight + oldWindowHeight);
                        }
                        oldWindowHeight = window.innerHeight;
                    }
                });
                document.body.appendChild(app.view);
                document.body.appendChild(gui.domElement);
                context = {
                    flowers: flowers,
                    dateSlider: dateSlider,
                    renderer: renderer,
                    skyTexture: skyTexture
                };
                app.ticker.add(update, context);
                return [2 /*return*/];
        }
    });
}); };
function updateFlowers(flowers, modifier) {
    var d = new Date();
    var hr = (d.getHours() + modifier / 60) % 24;
    var min = d.getMinutes() + modifier % 60;
    var newAngle = (360 * (hr / 24) + 15 * (min / 60));
    if (newAngle < -90) {
        newAngle += 180;
    }
    if (newAngle > 90) {
        newAngle -= 180;
    }
    for (var i = 0; i < flowers.length; i++) {
        flowers[i].angle = newAngle;
    }
}
function updateGradient(renderer, skyTexture, timeOffset) {
    var d = new Date();
    var hr = (d.getHours() + timeOffset / 60) % 24;
    var colorStops = [{ offset: 0, color: 0x1e528e },
        { offset: 1, color: 0x38a3d1 }];
    if (Math.floor(hr) == 0) {
        colorStops = [{ offset: 0, color: 0x020111 }, { offset: 0.85, color: 0x020111 }, { offset: 1, color: 0x191621 }];
    }
    else if (Math.floor(hr) == 1) {
        colorStops = [{ offset: 0, color: 0x020111 }, { offset: 0.6, color: 0x020111 }, { offset: 1, color: 0x20202c }];
    }
    else if (Math.floor(hr) == 2) {
        colorStops = [{ offset: 0, color: 0x020111 }, { offset: 0.1, color: 0x020111 }, { offset: 1, color: 0x3a3a52 }];
    }
    else if (Math.floor(hr) == 3) {
        colorStops = [{ offset: 0, color: 0x20202c }, { offset: 1, color: 0x515175 }];
    }
    else if (Math.floor(hr) == 4) {
        colorStops = [{ offset: 0, color: 0x40405c }, { offset: 0.8, color: 0x6f71aa }, { offset: 1, color: 0x8a76ab }];
    }
    else if (Math.floor(hr) == 5) {
        colorStops = [{ offset: 0, color: 0x4a4969 }, { offset: 0.5, color: 0x7072ab }, { offset: 1, color: 0xcd82a0 }];
    }
    else if (Math.floor(hr) == 6) {
        colorStops = [{ offset: 0, color: 0x757abf }, { offset: 0.6, color: 0x8583be }, { offset: 1, color: 0xeab0d1 }];
    }
    else if (Math.floor(hr) == 7) {
        colorStops = [{ offset: 0, color: 0x82addb }, { offset: 1, color: 0xebb2b1 }];
    }
    else if (Math.floor(hr) == 8) {
        colorStops = [{ offset: 0, color: 0x94c5f8 }, { offset: 0.7, color: 0xa6e6ff }, { offset: 1, color: 0xb1b5ea }];
    }
    else if (Math.floor(hr) == 9) {
        colorStops = [{ offset: 0, color: 0xb7eaff }, { offset: 1, color: 0x94dfff }];
    }
    else if (Math.floor(hr) == 10) {
        colorStops = [{ offset: 0, color: 0x9be2fe }, { offset: 1, color: 0x67d1fb }];
    }
    else if (Math.floor(hr) == 11) {
        colorStops = [{ offset: 0, color: 0x90dffe }, { offset: 1, color: 0x38a3d1 }];
    }
    else if (Math.floor(hr) == 12) {
        colorStops = [{ offset: 0, color: 0x57c1eb }, { offset: 1, color: 0x246fa8 }];
    }
    else if (Math.floor(hr) == 13) {
        colorStops = [{ offset: 0, color: 0x2d91c2 }, { offset: 1, color: 0x1e528e }];
    }
    else if (Math.floor(hr) == 14) {
        colorStops = [{ offset: 0, color: 0x2473ab }, { offset: 0.7, color: 0x1e528e }, { offset: 1, color: 0x5b7983 }];
    }
    else if (Math.floor(hr) == 15) {
        colorStops = [{ offset: 0, color: 0x1e528e }, { offset: 0.5, color: 0x265889 }, { offset: 1, color: 0x9da671 }];
    }
    else if (Math.floor(hr) == 16) {
        colorStops = [{ offset: 0, color: 0x1e528e }, { offset: 0.5, color: 0x728a7c }, { offset: 1, color: 0xe9ce5d }];
    }
    else if (Math.floor(hr) == 17) {
        colorStops = [{ offset: 0, color: 0x154277 }, { offset: 0.3, color: 0x576e71 }, { offset: 0.7, color: 0xe1c45e }, { offset: 1, color: 0xb26339 }];
    }
    else if (Math.floor(hr) == 18) {
        colorStops = [{ offset: 0, color: 0x163C52 }, { offset: 0.3, color: 0x4F4F47 }, { offset: 0.6, color: 0xC5752D }, { offset: 0.8, color: 0xB7490F }, { offset: 1, color: 0x2F1107 }];
    }
    else if (Math.floor(hr) == 19) {
        colorStops = [{ offset: 0, color: 0x071B26 }, { offset: 0.3, color: 0x071B26 }, { offset: 0.8, color: 0x8A3B12 }, { offset: 1, color: 0x240E03 }];
    }
    else if (Math.floor(hr) == 20) {
        colorStops = [{ offset: 0, color: 0x010A10 }, { offset: 0.3, color: 0x010A10 }, { offset: 0.8, color: 0x59230B }, { offset: 1, color: 0x2F1107 }];
    }
    else if (Math.floor(hr) == 21) {
        colorStops = [{ offset: 0, color: 0x090401 }, { offset: 0.5, color: 0x090401 }, { offset: 1, color: 0x4B1D06 }];
    }
    else if (Math.floor(hr) == 22) {
        colorStops = [{ offset: 0, color: 0x00000c }, { offset: 0.8, color: 0x00000c }, { offset: 1, color: 0x150800 }];
    }
    else if (Math.floor(hr) > 23) {
        colorStops = [{ offset: 0, color: 0x00000c }, { offset: 1, color: 0x00000c }];
    }
    Gradients.GradientFactory.createLinearGradient(renderer, skyTexture, { x0: 0, y0: 0, x1: window.innerWidth, y1: window.innerHeight,
        colorStops: colorStops });
}
function update() {
    updateFlowers(this.flowers, this.dateSlider.time);
    if (this.renderer instanceof PIXI.Renderer) {
        updateGradient(this.renderer, this.skyTexture, this.dateSlider.time);
    }
}
;
main();
