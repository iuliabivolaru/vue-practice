import { Tweet } from '../model/Tweet';
import PostRepository from '../repository/PostRepository';
import { PostDocument } from '../dataAccess/model/PostDocument';

class PostService {

    public retrieve(): Promise<Tweet[]> {
        return PostRepository.retrieve();
    }

    public post(tweet: Tweet): Promise<Tweet> {
        return PostRepository.post(tweet);
    }

    public put(tweet: Tweet): Promise<PostDocument | null> {
        return PostRepository.put(tweet);
    }
}

export default new PostService();