import { postModel } from '../dataAccess/schema/PostSchema';
import { PostDocument } from '../dataAccess/model/PostDocument';
import { CRUDRepository } from './CRUDRepository';

class PostRepository extends CRUDRepository<PostDocument> {
    constructor() {
        super(postModel);
    }
}

export default new PostRepository();