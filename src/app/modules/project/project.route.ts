import express from 'express';
import {
    getAllProjects,
    createProject,
    getProjectById,
    updateProjectById,
    deleteProjectById,
} from './project.controller';
import { handleImageUpload } from '../../../utility/fileUpload';

const router = express.Router();

router.get('/', getAllProjects);
router.post('/', handleImageUpload, createProject);
router.get('/:id', getProjectById);
router.put('/:id', updateProjectById);
router.delete('/:id', deleteProjectById);

export default router;
