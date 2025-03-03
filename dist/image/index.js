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
// @ts-ignore
import fs from "fs";
// @ts-ignore
import path from "path";
// @ts-ignore
import pkg from "canvas";
import { fileURLToPath } from "url";
var loadImage = pkg.loadImage;
import getCanvas from "./getCanvas.js";
import getFont from "./getFont.js";
import drawRoundRect from "./drawRoundRect.js";
import loadImageByUrl from "./loadImageByUrl.js";
import getRandomIcon from "./getRandomIcon.js";
import getRandomColor from "./getRandomIconColor.js";
import colors from "./colors.js";
var generateImage = function (params) {
    return new Promise(function (resolve) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, title, _b, technologies, _c, subtitleLine1, _d, subtitleLine2, _e, iconColor, _f, iconUrl, _g, iconWidth, _h, iconOffsetTop, _j, iconOffsetBottom, _k, iconOffsetLeft, _l, iconOffsetRight, _m, fontName, hash, _o, iconName, _p, titleColor, WIDTH, HEIGHT, _q, canvas, ctx, cnv, iconCanvas, iconCtx, stream, dirname, publicDir, filename, out, iconSelectedColor, iconY, iconH, icon, iconFilename, iconW, iconX, iconGradientW, iconGradientH, iconGradientX, iconGradientY, iconGradient_1, technoHeight, technoY, technoPadding, technoText, technoDim, technoX, textHeight, titlePadding, titleDim, titleY, titleX, gradientX, gradientY, gradientW, gradientH, gradient, subtitleLine1Height, subtitleLine1Padding, subtitleLine1Text, subtitleLine1Dim, subtitleLine1X, subtitleLine1Y, subtitleLine2Height, subtitleLine2Padding, subtitleLine2Text, subtitleLine2Dim, subtitleLine2X, subtitleLine2Y;
        return __generator(this, function (_r) {
            switch (_r.label) {
                case 0:
                    _a = params.title, title = _a === void 0 ? "Sans titre" : _a, _b = params.technologies, technologies = _b === void 0 ? [] : _b, _c = params.subtitleLine1, subtitleLine1 = _c === void 0 ? "" : _c, _d = params.subtitleLine2, subtitleLine2 = _d === void 0 ? "" : _d, _e = params.iconColor, iconColor = _e === void 0 ? [] : _e, _f = params.iconUrl, iconUrl = _f === void 0 ? "" : _f, _g = params.iconWidth, iconWidth = _g === void 0 ? 80 : _g, _h = params.iconOffsetTop, iconOffsetTop = _h === void 0 ? 0 : _h, _j = params.iconOffsetBottom, iconOffsetBottom = _j === void 0 ? 0 : _j, _k = params.iconOffsetLeft, iconOffsetLeft = _k === void 0 ? 0 : _k, _l = params.iconOffsetRight, iconOffsetRight = _l === void 0 ? 0 : _l, _m = params.fontName, fontName = _m === void 0 ? "" : _m, hash = params.hash;
                    _o = params.iconName, iconName = _o === void 0 ? "" : _o, _p = params.titleColor, titleColor = _p === void 0 ? [] : _p;
                    WIDTH = 1280;
                    HEIGHT = 640;
                    getFont(fontName);
                    _q = getCanvas({
                        width: WIDTH,
                        height: HEIGHT,
                    }), canvas = _q.canvas, ctx = _q.ctx;
                    cnv = getCanvas({
                        width: WIDTH,
                        height: HEIGHT,
                    });
                    iconCanvas = cnv.canvas;
                    iconCtx = cnv.ctx;
                    stream = canvas.createPNGStream();
                    dirname = path.dirname(fileURLToPath(import.meta.url));
                    publicDir = path.join(dirname, "../../public");
                    filename = path.join(publicDir, "/images/".concat(hash, ".png"));
                    out = fs.createWriteStream(filename);
                    // Background
                    ctx.fillStyle = "white";
                    drawRoundRect(ctx, 0, 0, WIDTH, HEIGHT, 10, true, false);
                    iconSelectedColor = [];
                    if (titleColor.length > 0) {
                        if (titleColor[0] === "random") {
                            titleColor = getRandomColor();
                        }
                        // if color name is in the named colors
                        if (Object.keys(colors).includes(titleColor[0])) {
                            titleColor = colors[titleColor[0]];
                        }
                        if (iconColor.length === 0) {
                            iconSelectedColor = titleColor;
                        }
                        else {
                            iconSelectedColor = iconColor;
                        }
                    }
                    iconY = 40;
                    iconH = 0;
                    icon = null;
                    if (!iconName.length) return [3 /*break*/, 4];
                    if (!(iconName === "random")) return [3 /*break*/, 2];
                    return [4 /*yield*/, getRandomIcon()];
                case 1:
                    iconName = _r.sent();
                    _r.label = 2;
                case 2:
                    iconFilename = path.join(dirname, "../..", "/public/icons/solid/".concat(iconName, ".svg"));
                    return [4 /*yield*/, loadImage(iconFilename)];
                case 3:
                    icon = _r.sent();
                    _r.label = 4;
                case 4:
                    if (!iconUrl.length) return [3 /*break*/, 6];
                    return [4 /*yield*/, loadImageByUrl(iconUrl)];
                case 5:
                    icon = _r.sent();
                    _r.label = 6;
                case 6:
                    if (icon) {
                        iconW = iconWidth;
                        iconH = (iconW / icon.width) * icon.height;
                        iconX = WIDTH * 0.5 - iconW * 0.5;
                        iconY = 40;
                        iconGradientW = iconW;
                        iconGradientH = iconH;
                        iconGradientX = iconX;
                        iconGradientY = iconY;
                        iconGradient_1 = iconCtx.createLinearGradient(iconGradientX + iconOffsetLeft, iconGradientY, iconGradientX + iconGradientW - iconOffsetRight, iconGradientY);
                        iconSelectedColor.forEach(function (color, index, arr) {
                            return iconGradient_1.addColorStop((1 / arr.length) * index, color);
                        });
                        iconCtx.fillStyle = iconGradient_1;
                        iconCtx.fillRect(iconGradientX, iconGradientY - iconOffsetTop, iconGradientW, iconGradientH);
                        iconCtx.globalCompositeOperation = "destination-atop";
                        iconCtx.drawImage(icon, iconGradientX, iconGradientY - iconOffsetTop, iconGradientW, iconGradientH);
                        iconH -= iconOffsetBottom;
                        ctx.drawImage(iconCanvas, 0, iconOffsetTop, WIDTH, HEIGHT);
                    }
                    ctx.fillStyle = "black";
                    technoHeight = 36;
                    technoY = 0;
                    if (technologies.length) {
                        technoPadding = 120;
                        ctx.font = "".concat(technoHeight, "px title");
                        technoText = technologies.map(function (t) { return "\u25CF  ".concat(t, "  "); }).join("") + "●";
                        if (technologies.length === 1) {
                            technoText = technologies[0];
                        }
                        technoDim = ctx.measureText(technoText);
                        technoX = WIDTH * 0.5 - technoDim.width * 0.5;
                        technoY = iconY + iconH + technoPadding;
                        ctx.fillText(technoText, technoX, technoY);
                    }
                    textHeight = 100;
                    titlePadding = 120;
                    ctx.font = "".concat(textHeight, "px title");
                    titleDim = ctx.measureText(title);
                    titleY = technoY + technoHeight + titlePadding;
                    titleX = WIDTH * 0.5 - titleDim.width * 0.5;
                    gradientX = titleX;
                    gradientY = titleY;
                    gradientW = titleDim.width;
                    gradientH = textHeight;
                    gradient = ctx.createLinearGradient(gradientX, gradientY, gradientX + gradientW, gradientY);
                    titleColor.forEach(function (color, index, arr) {
                        return gradient.addColorStop((1 / arr.length) * index, color);
                    });
                    ctx.fillStyle = gradient;
                    ctx.fillText(title, titleX, titleY);
                    ctx.fillStyle = "black";
                    // Subtitle
                    if (subtitleLine1.length) {
                        subtitleLine1Height = 20;
                        subtitleLine1Padding = 24;
                        ctx.font = "".concat(subtitleLine1Height, "px body");
                        subtitleLine1Text = subtitleLine1;
                        subtitleLine1Dim = ctx.measureText(subtitleLine1Text);
                        subtitleLine1X = WIDTH * 0.5 - subtitleLine1Dim.width * 0.5;
                        subtitleLine1Y = titleY + textHeight + subtitleLine1Padding;
                        ctx.fillText(subtitleLine1Text, subtitleLine1X, subtitleLine1Y);
                        if (subtitleLine2.length) {
                            subtitleLine2Height = 20;
                            subtitleLine2Padding = 8;
                            ctx.font = "".concat(subtitleLine2Height, "px body");
                            subtitleLine2Text = subtitleLine2;
                            subtitleLine2Dim = ctx.measureText(subtitleLine2Text);
                            subtitleLine2X = WIDTH * 0.5 - subtitleLine2Dim.width * 0.5;
                            subtitleLine2Y = subtitleLine1Y + subtitleLine2Height + subtitleLine2Padding;
                            ctx.fillText(subtitleLine2Text, subtitleLine2X, subtitleLine2Y);
                        }
                    }
                    stream.pipe(out);
                    out.on("finish", function () {
                        // console.log("The PNG file was created");
                        resolve(filename);
                    });
                    return [2 /*return*/];
            }
        });
    }); });
};
export default generateImage;
