"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var DataAccess = /** @class */ (function () {
    function DataAccess() {
    }
    DataAccess.connect = function () {
        if (this.mongooseInstance) {
            return this.mongooseInstance;
        }
        this.mongooseConnection = mongoose_1.connection;
        this.mongooseInstance = mongoose_1.connect(this.mongoUrl);
        return this.mongooseInstance;
    };
    DataAccess.registerSchema = function (name, schema) {
        DataAccess.mongooseConnection.model('medias', schema);
    };
    DataAccess.mongoUrl = 'mongodb://localhost/post-db';
    return DataAccess;
}());
exports.default = DataAccess;
//# sourceMappingURL=DataAccess.js.map