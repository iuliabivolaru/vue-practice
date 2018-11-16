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
        this.server.route({
            method: 'GET',
            path: '/posts',
            handler: function (request, h) {
                SuperController.setCreatedHTTPStatus();
                return PostService.retrieve()
                    .then((posts: any) => {
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
                let tweet = new Tweet();
                tweet.title = (request.payload as any).title;
                tweet.content = (request.payload as any).content;
                tweet.likesNumber = (request.payload as any).likesNumber;
                tweet.createdAt = (request.payload as any).createdAt;
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
                return tweet;
            }
        });
        this.server.route({
            method: 'POST',
            path: '/likes',
            handler: function (request, h) {
                let tweet = new Tweet();
                tweet.title = (request.payload as any).title;
                tweet.content = (request.payload as any).content;
                tweet.likesNumber = (request.payload as any).likesNumber;
                tweet.createdAt = (request.payload as any).createdAt;
                SuperController.setCreatedHTTPStatus();
                console.info("Tweet" + JSON.stringify(tweet));
                return PostService.put(tweet)
                    .then((post: any) => {
                        console.info(`Putting => ${JSON.stringify(tweet)}`);
                        SuperController.setStatus(201);
                        return post;
                    }).catch((err: any) => {
                        console.error(err.message);
                        throw err;
                    });
                return tweet;
            }
        });
        DataAccess.connect();
        this.server.start();
    }

    public async registerBodyParser(server: Hapi.Server): Promise<void> {
        await server.register({
            plugin: require('hapi-bodyparser')
        });
    };
}

export default new HapiApp();
