import type Project from './Project';

export default interface ProjectCategory {
	categoryName: string;
	projects: Project[];
}
