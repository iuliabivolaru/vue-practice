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
    },
    createdAt: {
        type: Date,
        required: true
    },
    likesNumber: {
        type: String,
        required: false
    }
}, { collection: 'posts' });

export let postModel = model<PostDocument>('post', postSchema);