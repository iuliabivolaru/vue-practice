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
var tsoa_1 = require("tsoa");
var SuperController = /** @class */ (function (_super) {
    __extends(SuperController, _super);
    function SuperController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SuperController.prototype.setCreatedHTTPStatus = function () {
        this.setStatus(201);
    };
    SuperController.prototype.setNoContentHTTPStatus = function () {
        this.setStatus(204);
    };
    return SuperController;
}(tsoa_1.Controller));
exports.SuperController = SuperController;
//# sourceMappingURL=SuperController.js.map