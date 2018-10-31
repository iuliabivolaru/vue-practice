"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var postSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, { collection: 'posts' });
exports.postModel = mongoose_1.model('post', postSchema);
//# sourceMappingURL=PostSchema.js.map