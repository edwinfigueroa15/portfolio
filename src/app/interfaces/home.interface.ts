export interface Experience {
    date: string;
    title: string;
    company: {
        url: string;
        text: string;
    },
    technologies: Array<string>
}

export interface Project {
    img: string;
    title: string;
    description: string;
    link: string;
}