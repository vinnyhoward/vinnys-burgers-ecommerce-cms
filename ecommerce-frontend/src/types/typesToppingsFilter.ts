export interface IBurgerToppings {
	burgers: Array<IBurgerTopping>;
}

export interface IBurgerTopping {
	toppings: Array<ITopping>;
}

export interface ITopping {
	name: string;
	id: string;
	count?: number;
	activeTopping?: boolean;
}

export interface IBurgerToppingsCount {
	burger: Array<IBurgerTopping>;
}
