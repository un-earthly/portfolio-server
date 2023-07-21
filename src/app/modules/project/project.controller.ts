import { Request, Response, NextFunction } from 'express';
import { IProject } from './project.interface';
import catchAsync from '../../../utility/catchAsync';
import sendResponse from '../../../utility/sendResponse';
import { StatusCodes } from 'http-status-codes';
import ApiError from '../../../errors/ApiError';
import { createProjectService, deleteProjectByIdService, getAllProjectsService, getProjectByIdService, updateProjectByIdService } from './project.service';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

export const getAllProjects = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const projects = getAllProjectsService()

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        data: projects,
        message: 'Projects Found Successfully'
    });
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads'));
    },
    filename: function (req, file, cb) {
        const uniqueFileName = uuidv4() + path.extname(file.originalname);
        cb(null, uniqueFileName);
    },
});

const upload = multer({ storage: storage }).single('image');

export const createProject = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    upload(req, res, async (err: any) => {
        if (err) {
            return sendResponse(res, {
                statusCode: StatusCodes.BAD_REQUEST,
                success: false,
                message: 'Error uploading image',
            });
        }

        const imageFileName = 'uniqueFileName.jpg';

        const imageURL = `localhost/uploads/${imageFileName}`;


        const newProjectData: IProject = {
            ...req.body,
            image: imageURL,
        };
        const newProject = await createProjectService(newProjectData);
        sendResponse(res, {
            statusCode: StatusCodes.OK,
            success: true,
            data: newProject,
            message: 'Project Created Successfully'
        })
    });
});


export const getProjectById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const projectId = req.params.id;
    const project = getProjectByIdService(projectId)
    if (!project) {
        throw new ApiError(StatusCodes.NOT_FOUND, 'Project not found');
    }
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        data: project,
        message: 'Project Found Successfully'
    });
});

export const updateProjectById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const projectId = req.params.id;
    const updatedProject = updateProjectByIdService(projectId, req.body)
    if (!updatedProject) {
        throw new ApiError(StatusCodes.NOT_FOUND, 'Project not found');
    }
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        data: updatedProject,
        message: 'Project Updated Successfully'
    });
});

export const deleteProjectById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const projectId = req.params.id;
    const deletedProject = deleteProjectByIdService(projectId)
    if (!deletedProject) {
        throw new ApiError(StatusCodes.NOT_FOUND, 'Project not found');
    }
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        data: deletedProject,
        message: 'Project Deleted Successfully'
    });
});
