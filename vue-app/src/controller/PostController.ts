import { Post } from '../model/Post';
import { Route, Get } from 'tsoa';
import { SuperController } from './SuperController';
import PostService from '../service/PostService';

@Route('posts')
export class PostController extends SuperController {

    @Get()
    public retrieve(): Promise<Post[]> {
        this.setCreatedHTTPStatus();
        console.info(`Received posts =>`);
        return PostService.retrieve()
            .then((posts: any) => {
                console.info(`Received posts => ${JSON.stringify(posts)}`);
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