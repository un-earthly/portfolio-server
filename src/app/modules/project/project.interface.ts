
interface ITechnology {
    name: string;
    description?: string;
}

interface IContributor {
    name: string;
    role?: string;
}

interface IProject extends Document {
    title: string;
    description: string;
    image: string;
    projectLinks: [
        server: string,
        client: string,
        live: string
    ];
    caseStudy: string,
    technologies: ITechnology[];
    contributors: IContributor[];
    tags: string[];
}
export { IProject, IContributor, ITechnology }