import { Tweet } from '../model/Tweet';
import PostRepository from '../repository/PostRepository';

class PostService {

    public retrieve(): Promise<Tweet[]> {
        return PostRepository.retrieve();
    }

    public post(tweet: Tweet): Promise<Tweet> {
        return PostRepository.post(tweet);
    }
}

export default new PostService();