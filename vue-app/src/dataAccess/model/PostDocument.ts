import {Document} from 'mongoose';
import {Post} from '../../model/Post';

export interface PostDocument extends Post, Document {

}