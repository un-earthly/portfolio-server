import ArticleModel, { IArticle } from './article.model';

export const createArticleService = async (articleData: Partial<IArticle>) => {
    return ArticleModel.create(articleData);
};

export const getAllArticlesService = async () => {
    return ArticleModel.find();
};

export const getArticleByIdService = async (articleId: string) => {
    return ArticleModel.findById(articleId);
};

export const updateArticleByIdService = async (articleId: string, updatedData: Partial<IArticle>) => {
    return ArticleModel.findByIdAndUpdate(articleId, updatedData, { new: true });
};

export const deleteArticleByIdService = async (articleId: string) => {
    return ArticleModel.findByIdAndDelete(articleId);
};
