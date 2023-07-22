import { Request, Response, NextFunction } from 'express';
import {
    createArticleService,
    getAllArticlesService,
    getArticleByIdService,
    updateArticleByIdService,
    deleteArticleByIdService,
} from './article.service';
import { StatusCodes } from 'http-status-codes';
import ApiError from '../../../errors/ApiError';

export const createArticle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, content } = req.body;
        const articleData = { title, content };
        const newArticle = await createArticleService(articleData);
        res.status(StatusCodes.CREATED).json(newArticle);
    } catch (error) {
        next(new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, 'Error creating article'));
    }
};

export const getAllArticles = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const articles = await getAllArticlesService();
        res.status(StatusCodes.OK).json(articles);
    } catch (error) {
        next(new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, 'Error fetching articles'));
    }
};

export const getArticleById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const articleId = req.params.id;
        const article = await getArticleByIdService(articleId);
        if (!article) {
            throw new ApiError(StatusCodes.NOT_FOUND, 'Article not found');
        }
        res.status(StatusCodes.OK).json(article);
    } catch (error) {
        next(new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, 'Error fetching article'));
    }
};

export const updateArticleById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const articleId = req.params.id;
        const updatedArticle = await updateArticleByIdService(articleId, req.body);
        if (!updatedArticle) {
            throw new ApiError(StatusCodes.NOT_FOUND, 'Article not found');
        }
        res.status(StatusCodes.OK).json(updatedArticle);
    } catch (error) {
        next(new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, 'Error updating article'));
    }
};

export const deleteArticleById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const articleId = req.params.id;
        const deletedArticle = await deleteArticleByIdService(articleId);
        if (!deletedArticle) {
            throw new ApiError(StatusCodes.NOT_FOUND, 'Article not found');
        }
        res.status(StatusCodes.OK).json(deletedArticle);
    } catch (error) {
        next(new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, 'Error deleting article'));
    }
};
