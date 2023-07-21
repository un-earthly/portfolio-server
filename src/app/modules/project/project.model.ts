import mongoose, { Schema } from "mongoose";
import { IProject } from "./project.interface";

const projectSchema: Schema<IProject> = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        projectLinks: {
            server: {
                type: String,
                required: true
            },
            client: {
                type: String,
                required: true
            },
            live: {
                type: String,
                required: true
            },
        },
        caseStudy: {
            type: String
        },
        technologies: [{
            name: {
                type: String,
                required: true
            },
            description: {
                type: String
            },
        }],
        contributors: [{
            name: {
                type: String,
                required: true
            },
            role: {
                type: String
            },
        }
        ],
        tags: [{ type: String }],
    },
    { timestamps: true }
);

const ProjectModel = mongoose.model<IProject>('Project', projectSchema);

export { ProjectModel };