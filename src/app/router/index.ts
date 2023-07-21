import { Router } from "express";
import projectRouter from "../modules/project/project.route";

const router = Router();

const routes = [
    {
        path: "/projects",
        child: projectRouter,
    },
];

routes.forEach((route) => router.use(route.path, route.child));

export default router;
