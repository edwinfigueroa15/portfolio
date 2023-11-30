export interface Experience {
    date: string;
    title: string;
    company: {
        url: string;
        text: string;
    },
    technologies: Array<string>
}