import express from 'express';
import {
    createArticle,
    getAllArticles,
    getArticleById,
    updateArticleById,
    deleteArticleById,
} from './article.controller';

const router = express.Router();

router.post('/', createArticle);
router.get('/', getAllArticles);
router.get('/:id', getArticleById);
router.put('/:id', updateArticleById);
router.delete('/:id', deleteArticleById);

export default router;
