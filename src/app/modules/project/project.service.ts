import { IProject } from "./project.interface";
import { ProjectModel } from "./project.model";

export const getAllProjectsService = async (): Promise<IProject[]> => {
    return ProjectModel.find();
};

export const createProjectService = async (projectData: Partial<IProject>): Promise<IProject> => {
    const newProject = new ProjectModel(projectData);
    return newProject.save();
};

export const getProjectByIdService = async (projectId: string): Promise<IProject | null> => {
    return ProjectModel.findById(projectId);
};

export const updateProjectByIdService = async (
    projectId: string,
    updatedData: Partial<IProject>
): Promise<IProject | null> => {
    return ProjectModel.findByIdAndUpdate(projectId, updatedData, { new: true });
};

export const deleteProjectByIdService = async (projectId: string): Promise<IProject | null> => {
    return ProjectModel.findByIdAndDelete(projectId);
};
