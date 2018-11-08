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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsoa_1 = require("tsoa");
var SuperController_1 = require("./SuperController");
var PostService_1 = __importDefault(require("../service/PostService"));
var PostController = /** @class */ (function (_super) {
    __extends(PostController, _super);
    function PostController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @SuccessResponse('201')
    // @Post()
    // public post(@Body() tweet: any): void {
    //     console.info(`Posting => ` + JSON.stringify(tweet));
    // console.info(`Posting => ` + tweet.title);
    // var deserializedTweet = JSON.parse(tweet);
    // for (var propName in deserializedTweet) {
    //      console.info(deserializedTweet[propName]);
    // }
    // console.info(`Post =>` + deserializedTweet);
    // this.setCreatedHTTPStatus();
    //     return PostService.post(tweet)
    //         .then((post: any) => {
    //             console.info(`Posting => ${JSON.stringify(tweet)}`);
    //             this.setStatus(201);
    //         }).catch((err: any) => {
    //             console.error(err.message);
    //             throw err;
    //         });
    // }
    PostController.prototype.retrieve = function () {
        var _this = this;
        this.setCreatedHTTPStatus();
        return PostService_1.default.retrieve()
            .then(function (posts) {
            // console.info(`Received posts => ${JSON.stringify(posts)}`);
            if (posts.length) {
                return posts;
            }
            _this.setStatus(404);
            return posts;
        }).catch(function (err) {
            console.error(err.message);
            throw err;
        });
    };
    __decorate([
        tsoa_1.Get()
    ], PostController.prototype, "retrieve", null);
    PostController = __decorate([
        tsoa_1.Route('posts')
    ], PostController);
    return PostController;
}(SuperController_1.SuperController));
exports.PostController = PostController;
//# sourceMappingURL=PostController.js.map