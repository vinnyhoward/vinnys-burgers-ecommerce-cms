import { IImage } from './typesImage.ts';
import { ITopping } from './typesToppingsFilter';

export interface IVeganBurgerOrder {
	order?: IOrder;
	removeFromOrder: (number) => IOrder;
	veganBurgers: IVeganBurgers;
}

interface IOrder {
	id: string;
	size: string;
}

interface IVeganBurgers {
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
