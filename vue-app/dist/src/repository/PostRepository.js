"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PostSchema_1 = require("../dataAccess/schema/PostSchema");
var CRUDRepository_1 = require("./CRUDRepository");
var PostRepository = /** @class */ (function (_super) {
    __extends(PostRepository, _super);
    function PostRepository() {
        return _super.call(this, PostSchema_1.postModel) || this;
    }
    return PostRepository;
}(CRUDRepository_1.CRUDRepository));
exports.default = new PostRepository();
//# sourceMappingURL=PostRepository.js.map