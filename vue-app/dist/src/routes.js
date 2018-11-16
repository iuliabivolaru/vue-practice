"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: Replace this with HAPI middleware stuff
/* tslint:disable */
var tsoa_1 = require("tsoa");
var models = {};
function RegisterRoutes(server) {
    function isController(object) {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }
    function promiseHandler(controllerObj, promise, request, h) {
        return Promise.resolve(promise)
            .then(function (data) {
            var response = (data || data === false)
                ? h.response(data).code(200)
                : h.response("").code(204);
            if (isController(controllerObj)) {
                var headers_1 = controllerObj.getHeaders();
                Object.keys(headers_1).forEach(function (name) {
                    response.header(name, headers_1[name]);
                });
                var statusCode = controllerObj.getStatus();
                if (statusCode) {
                    response.code(statusCode);
                }
            }
            return response;
        })
            .catch(function (error) { return h.response(error).code(error.status || 500); });
    }
    function getValidatedArgs(args, request) {
        var errorFields = {};
        var values = Object.keys(args).map(function (key) {
            var name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return tsoa_1.ValidateParam(args[key], request.query[name], models, name, errorFields);
                case 'path':
                    return tsoa_1.ValidateParam(args[key], request.params[name], models, name, errorFields);
                case 'header':
                    return tsoa_1.ValidateParam(args[key], request.headers[name], models, name, errorFields);
                case 'body':
                    return tsoa_1.ValidateParam(args[key], request.payload, models, name, errorFields, name + '.');
                case 'body-prop':
                    return tsoa_1.ValidateParam(args[key], request.payload[name], models, name, errorFields, 'body.');
            }
        });
        if (Object.keys(errorFields).length > 0) {
            throw new tsoa_1.ValidateError(errorFields, '');
        }
        return values;
    }
}
exports.RegisterRoutes = RegisterRoutes;
//# sourceMappingURL=routes.js.map