import { Post } from '../model/Post';
import PostRepository from '../repository/PostRepository';

class PostService {

    public retrieve(): Promise<Post[]> {
        return PostRepository.retrieve();
    }
}

export default new PostService();