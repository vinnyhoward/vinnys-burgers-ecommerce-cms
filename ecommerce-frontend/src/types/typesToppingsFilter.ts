export interface IBurgerToppings {
	burgers: Array<IBurgerTopping>;
}

interface IBurgerTopping {
	toppings: Array<ITopping>;
}

export interface ITopping {
	name: string;
	id: string;
}
