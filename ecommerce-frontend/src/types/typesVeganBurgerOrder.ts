import { IImage } from './typesImage';
import { ITopping } from './typesToppingsFilter';

export interface IVeganBurgerOrder {
	order?: Array<IOrder>;
	removeFromOrder: (arg0: number) => IOrder;
	veganBurgers: Array<IVeganBurgers>;
}

export interface IOrder {
	id: string;
	size: string;
}

export interface IVeganBurgers {
	id?: string;
	image: IImage;
	name?: string;
	price?: number;
	slug?: ISlug;
	toppings?: Array<ITopping>;
}

export interface IVeganBurgerId {
	id: string;
}

interface ISlug {
	current: string;
}
