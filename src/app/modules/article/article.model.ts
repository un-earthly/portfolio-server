import { model, Schema, Document } from 'mongoose';

export interface IArticle extends Document {
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

const articleSchema = new Schema<IArticle>(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
    },
    { timestamps: true }
);

const ArticleModel = model<IArticle>('Article', articleSchema);

export default ArticleModel;
