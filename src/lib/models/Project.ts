import type Link from '$lib/models/Link';

export default interface Project {
	id: string;
	name: string;
	description: string;
	links: Link[];
	technologies: string[]; // Only contains the names
	year: number;
}
