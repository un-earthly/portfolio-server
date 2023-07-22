import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import catchAsync from '../../../utility/catchAsync';
import sendResponse from '../../../utility/sendResponse';
import { StatusCodes } from 'http-status-codes';
import ApiError from '../../../errors/ApiError';
import { createProjectService, deleteProjectByIdService, getAllProjectsService, getProjectByIdService, updateProjectByIdService } from './project.service';

export const getAllProjects = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const projects = getAllProjectsService()

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        data: projects,
        message: 'Projects Found Successfully'
    });
});

export const createProject = async (req: Request, res: Response) => {
    const imageFileName = req.file?.filename;
    req.body.image = `localhost/uploads/${imageFileName}`;
    console.log(req.body.image);

    const project = await createProjectService(req.body);

    if (!project && req.file) {
        fs.unlinkSync(req.file.path);

        throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Couldnt create project")

    }
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        data: project,
        message: 'Project Created Successfully'
    });
};


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
