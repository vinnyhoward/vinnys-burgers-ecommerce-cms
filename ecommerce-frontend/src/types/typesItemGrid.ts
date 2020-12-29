import { IImage } from './typesImage.ts';

export interface IItemGrid {
	items?: Array<IChefs>;
}

export interface IChefs {
	name: string;
	_id: string;
	image: IImage;
}
