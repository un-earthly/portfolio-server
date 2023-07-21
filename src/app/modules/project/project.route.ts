import express from 'express';
import {
    getAllProjects,
    createProject,
    getProjectById,
    updateProjectById,
    deleteProjectById,
} from './project.controller';

const router = express.Router();

router.get('/', getAllProjects);
router.post('/', createProject);
router.get('/:id', getProjectById);
router.put('/:id', updateProjectById);
router.delete('/:id', deleteProjectById);

export default router;
