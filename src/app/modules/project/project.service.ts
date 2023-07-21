import { IProject } from "./project.interface";
import { ProjectModel } from "./project.model";

export const getAllProjects = async (): Promise<IProject[]> => {
    return ProjectModel.find();
};

export const createProject = async (projectData: Partial<IProject>): Promise<IProject> => {
    const newProject = new ProjectModel(projectData);
    return newProject.save();
};

export const getProjectById = async (projectId: string): Promise<IProject | null> => {
    return ProjectModel.findById(projectId);
};

export const updateProjectById = async (
    projectId: string,
    updatedData: Partial<IProject>
): Promise<IProject | null> => {
    return ProjectModel.findByIdAndUpdate(projectId, updatedData, { new: true });
};

export const deleteProjectById = async (projectId: string): Promise<IProject | null> => {
    return ProjectModel.findByIdAndDelete(projectId);
};
