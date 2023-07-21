import { Request, Response, NextFunction } from 'express';
import { IProject } from './project.interface';
import { ProjectModel } from './project.model';
import catchAsync from '../../../utility/catchAsync';
import sendResponse from '../../../utility/sendResponse';
import { StatusCodes } from 'http-status-codes';
import ApiError from '../../../errors/ApiError';


export const getAllProjects = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const projects: IProject[] = await ProjectModel.find();
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        data: projects,
        message: 'Projects Found Successfully'
    });
});

export const createProject = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const newProject = new ProjectModel(req.body);
    const savedProject: IProject = await newProject.save();
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        data: savedProject,
        message: 'Project Created Successfully'
    });
});

export const getProjectById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const projectId = req.params.id;
    const project: IProject | null = await ProjectModel.findById(projectId);
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
    const updatedProject: IProject | null = await ProjectModel.findByIdAndUpdate(projectId, req.body, {
        new: true,
    });
    if (!updatedProject) {
        throw new ApiError(StatusCodes.NOT_FOUND, 'Project not found');
    }
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        data: updateProjectById,
        message: 'Project Updated Successfully'
    });
});

export const deleteProjectById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const projectId = req.params.id;
    const deletedProject: IProject | null = await ProjectModel.findByIdAndDelete(projectId);
    if (!deletedProject) {
        throw new ApiError(StatusCodes.NOT_FOUND, 'Project not found');
    }
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        data: deleteProjectById,
        message: 'Project Deleted Successfully'
    });
});
