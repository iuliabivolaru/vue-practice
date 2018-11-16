import * as mongoose from 'mongoose';
import { Tweet } from '../model/Tweet';
require('mongoose').Promise = global.Promise;

export class CRUDRepository<T extends mongoose.Document>  {

    private model: mongoose.Model<T>;

    constructor(model: mongoose.Model<T>) {
        this.model = model;
    }

    public retrieve(callback?: (error: any, result: T[]) => void): Promise<T[]> {
        return this.model.find({}).exec();

    }

    public post(tweet: Tweet): Promise<T> {
        return this.model.create(tweet);
    }

    public put(tweet: Tweet): Promise<T | null> {
        return this.model.findOneAndUpdate(tweet.createdAt, tweet, { new: true }).exec();
    }

}