import { Router } from "express";
import projectRouter from "../modules/project/project.route";
import articleRouter from '../modules/article/article.route';

const router = Router();

const routes = [
    {
        path: "/projects",
        child: projectRouter,
    },
    {
        path: '/articles',
        child: articleRouter
    }
];

routes.forEach((route) => router.use(route.path, route.child));

export default router;
