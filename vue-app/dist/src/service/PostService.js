"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PostRepository_1 = __importDefault(require("../repository/PostRepository"));
var PostService = /** @class */ (function () {
    function PostService() {
    }
    PostService.prototype.retrieve = function () {
        return PostRepository_1.default.retrieve();
    };
    PostService.prototype.post = function (tweet) {
        return PostRepository_1.default.post(tweet);
    };
    PostService.prototype.put = function (tweet) {
        return PostRepository_1.default.put(tweet);
    };
    return PostService;
}());
exports.default = new PostService();
//# sourceMappingURL=PostService.js.map