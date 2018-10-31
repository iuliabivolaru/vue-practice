"use strict";
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
var routes_1 = require("./routes");
var Hapi = __importStar(require("hapi"));
var DataAccess_1 = __importDefault(require("./dataAccess/DataAccess"));
var HapiApp = /** @class */ (function () {
    function HapiApp() {
    }
    HapiApp.prototype.build = function () {
        this.server = new Hapi.Server({
            host: 'localhost',
            port: 3000
        });
        routes_1.RegisterRoutes(this.server);
        DataAccess_1.default.connect();
        this.server.start();
    };
    return HapiApp;
}());
exports.default = new HapiApp();
//# sourceMappingURL=HapiApp.js.map