import { IImage } from './typesImage';
import { ITopping } from './typesToppingsFilter';

export interface IVeganBurgerOrder {
	order?: IOrder;
	removeFromOrder: (arg0: number) => IOrder;
	veganBurgers: IVeganBurgers;
}

export interface IOrder {
	id: string;
	size: string;
}

export interface IVeganBurgers {
	id?: string;
	name?: string;
	price?: number;
	slug?: ISlug;
	image?: IImage;
	toppings?: ITopping;
}

interface ISlug {
	current: string;
}
