import { Document } from 'mongoose';
import { Tweet } from '../../model/Tweet';

export interface PostDocument extends Tweet, Document {

}