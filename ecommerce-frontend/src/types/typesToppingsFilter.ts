export interface IBurgerToppings {
	burgers: Array<IBurgerTopping>;
}

interface IBurgerTopping {
	toppings: Array<ITopping>;
}

export interface ITopping {
	name: string;
	id: string;
	count?: number;
}

export interface IBurgerToppingsCount {
	burger: Array<IBurgerTopping>;
}
