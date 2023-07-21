import express from 'express';
import {
    getAllProjects,
    createProject,
    getProjectById,
    updateProjectById,
    deleteProjectById,
} from './project.controller';

const router = express.Router();

router.get('/projects', getAllProjects);
router.post('/projects', createProject);
router.get('/projects/:id', getProjectById);
router.put('/projects/:id', updateProjectById);
router.delete('/projects/:id', deleteProjectById);

export default router;
