"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Hapi = __importStar(require("hapi"));
var DataAccess_1 = __importDefault(require("./dataAccess/DataAccess"));
var SuperController_1 = __importDefault(require("./controller/SuperController"));
var PostService_1 = __importDefault(require("./service/PostService"));
var Tweet_1 = require("./model/Tweet");
var HapiApp = /** @class */ (function () {
    function HapiApp() {
    }
    HapiApp.prototype.build = function () {
        this.server = new Hapi.Server({
            host: 'localhost',
            port: 3000
        });
        this.server.route({
            method: 'GET',
            path: '/posts',
            handler: function (request, h) {
                console.log("get");
                SuperController_1.default.setCreatedHTTPStatus();
                return PostService_1.default.retrieve()
                    .then(function (posts) {
                    if (posts.length) {
                        return posts;
                    }
                    SuperController_1.default.setStatus(404);
                    return posts;
                }).catch(function (err) {
                    console.error(err.message);
                    throw err;
                });
            }
        });
        this.server.route({
            method: 'POST',
            path: '/posts',
            handler: function (request, h) {
                var tweet = new Tweet_1.Tweet();
                tweet.title = request.payload.title;
                tweet.content = request.payload.content;
                tweet.likesNumber = request.payload.likesNumber;
                tweet.createdAt = request.payload.createdAt;
                SuperController_1.default.setCreatedHTTPStatus();
                console.info("Tweet" + JSON.stringify(tweet));
                return PostService_1.default.post(tweet)
                    .then(function (post) {
                    console.info("Posting => " + JSON.stringify(tweet));
                    SuperController_1.default.setStatus(201);
                    return post;
                }).catch(function (err) {
                    console.error(err.message);
                    throw err;
                });
                return tweet;
            }
        });
        this.server.route({
            method: 'POST',
            path: '/likes',
            handler: function (request, h) {
                var tweet = new Tweet_1.Tweet();
                tweet.title = request.payload.title;
                tweet.content = request.payload.content;
                tweet.likesNumber = request.payload.likesNumber;
                tweet.createdAt = request.payload.createdAt;
                SuperController_1.default.setCreatedHTTPStatus();
                console.info("Tweet" + JSON.stringify(tweet));
                return PostService_1.default.put(tweet)
                    .then(function (post) {
                    console.info("Putting => " + JSON.stringify(tweet));
                    SuperController_1.default.setStatus(201);
                    return post;
                }).catch(function (err) {
                    console.error(err.message);
                    throw err;
                });
            }
        });
        DataAccess_1.default.connect();
        this.server.start();
    };
    HapiApp.prototype.registerBodyParser = function (server) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, server.register({
                            plugin: require('hapi-bodyparser')
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    return HapiApp;
}());
exports.default = new HapiApp();
//# sourceMappingURL=HapiApp.js.map