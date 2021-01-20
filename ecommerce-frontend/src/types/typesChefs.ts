import { IImage } from './typesImage';
import { SitePageContext } from '../generated/graphql-types.d';

export interface IChef {
	name?: string | undefined;
	_id?: string | undefined;
	image: IImage;
	description?: string;
}

export interface IChefs {
	chefs?: Array<IChef>;
}

export interface IChefsNode {
	nodes: Array<IChef>;
}

export interface IChefsNodes {
	chefs: IChefsNode;
}

export interface IChefsComponent {
	pageContext: SitePageContext;
	data: IChefsNodes;
}

export interface IPerson {
	person: IChef;
}

export interface IChefsTemplateComponent {
	data: IPerson;
}
