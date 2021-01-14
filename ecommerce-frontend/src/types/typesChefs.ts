import { IImage } from './typesImage';

export interface IChef {
	name?: string | undefined;
	_id?: string | undefined;
	image?: IImage;
}

export interface IChefs {
	chefs?: Array<IChef>;
}
