export interface ISEO {
	children?: Array<Node>;
	location?: ILocation;
	description?: string;
	title?: string;
	image?: string;
}

interface ILocation {
	href: string;
}
