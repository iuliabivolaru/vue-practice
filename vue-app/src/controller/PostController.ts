import { Tweet } from '../model/Tweet';
import { Route, Get, Body, Post, SuccessResponse } from 'tsoa';
import { SuperController } from './SuperController';
import PostService from '../service/PostService';

@Route('posts')
export class PostController extends SuperController {

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

    @Get()
    public retrieve(): Promise<Tweet[]> {
        this.setCreatedHTTPStatus();
        return PostService.retrieve()
            .then((posts: any) => {
                // console.info(`Received posts => ${JSON.stringify(posts)}`);
                if (posts.length) {
                    return posts;
                }
                this.setStatus(404);
                return posts;
            }).catch((err: any) => {
                console.error(err.message);
                throw err;
            });
    }

}