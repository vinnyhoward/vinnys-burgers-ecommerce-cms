export interface IBurgerToppings {
	burgers: Array<IBurgerTopping>;
}

interface IBurgerTopping {
	toppings: Array<ITopping>;
}

interface ITopping {
	name: string;
	id: string;
}
