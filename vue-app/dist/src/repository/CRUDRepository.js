"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('mongoose').Promise = global.Promise;
var CRUDRepository = /** @class */ (function () {
    function CRUDRepository(model) {
        this.model = model;
    }
    CRUDRepository.prototype.retrieve = function (callback) {
        return this.model.find({}).exec();
    };
    return CRUDRepository;
}());
exports.CRUDRepository = CRUDRepository;
//# sourceMappingURL=CRUDRepository.js.map