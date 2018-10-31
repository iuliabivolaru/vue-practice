import { Schema, model } from 'mongoose';
import { PostDocument } from '../model/PostDocument';

let postSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, { collection: 'posts' });

export let postModel = model<PostDocument>('post', postSchema);