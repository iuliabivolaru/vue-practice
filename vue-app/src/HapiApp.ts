import * as Hapi from "hapi";
import DataAccess from './dataAccess/DataAccess';
import SuperController from './controller/SuperController';
import PostService from './service/PostService';
import { Tweet } from "./model/Tweet";

class HapiApp {

    server!: Hapi.Server;

    public build(): void {
        this.server = new Hapi.Server({
            host: 'localhost',
            port: 3000
        });
        // this.registerBodyParser(this.server).then(
        //   () => {
        //        RegisterRoutes(this.server);
        this.server.route({
            method: 'GET',
            path: '/posts',
            handler: function (request, h) {
                SuperController.setCreatedHTTPStatus();
                return PostService.retrieve()
                    .then((posts: any) => {
                        // console.info(`Received posts => ${JSON.stringify(posts)}`);
                        if (posts.length) {
                            return posts;
                        }
                        SuperController.setStatus(404);
                        return posts;
                    }).catch((err: any) => {
                        console.error(err.message);
                        throw err;
                    });
            }
        });
        this.server.route({
            method: 'POST',
            path: '/posts',
            handler: function (request, h) {
                console.log("ggggg");
                let tweet = new Tweet();
                tweet.title = (request.payload as any).title;
                tweet.content = (request.payload as any).content;
                SuperController.setCreatedHTTPStatus();
                console.info("Tweet" + JSON.stringify(tweet));
                return PostService.post(tweet)
                    .then((post: any) => {
                        console.info(`Posting => ${JSON.stringify(tweet)}`);
                        SuperController.setStatus(201);
                        return post;
                    }).catch((err: any) => {
                        console.error(err.message);
                        throw err;
                    });
                console.info(`Posting => ` + JSON.stringify(tweet));
                return tweet;
            }
        });
        DataAccess.connect();
        //        return 
        this.server.start();
        //    });
    }

    public async registerBodyParser(server: Hapi.Server): Promise<void> {
        await server.register({
            plugin: require('hapi-bodyparser')
        });
    };
}

export default new HapiApp();
