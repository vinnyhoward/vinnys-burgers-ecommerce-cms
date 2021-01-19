import * as React from 'react';
import Img from 'gatsby-image';
import MenuItemStyles from '../styles/MenuItemStyles';
import calculateBurgerPrice from '../utils/calculateBurgerPrice';
import formatMoney from '../utils/formatMoney';
import {
	IVeganBurgerOrder,
	IOrder,
	IVeganBurgers,
} from '../types/typesVeganBurgerOrder';

const VeganBurgerOrder: React.FunctionComponent<IVeganBurgerOrder> = ({
	order,
	veganBurgers,
	removeFromOrder,
}) => {
	const renderOrderList = () =>
		order?.map((singleOrder: IOrder, index: number) => {
			if (!veganBurgers) return <div>Sorry no burger exists</div>;
			const singleBurger = veganBurgers.find(({ id }: IVeganBurgers) => {
				return id === singleOrder.id;
			});
			if (!singleBurger) return <div>Sorry no burger exists</div>;

			return (
				<MenuItemStyles key={`${index}-${singleOrder.id}`}>
					<Img
						fluid={singleBurger?.image?.asset.fluid!}
						alt={singleBurger.name}
					/>
					<h2>{singleBurger.name}</h2>
					<p>
						{formatMoney(
							calculateBurgerPrice(singleBurger.price, singleOrder.size)
						)}
					</p>
					<button
						type="button"
						className="remove"
						title={`Remove ${singleOrder.size} ${singleBurger.name} from order`}
						onClick={() => removeFromOrder(index)}
					>
						&times;
					</button>
				</MenuItemStyles>
			);
		});
	return <>{renderOrderList()}</>;
};

export default VeganBurgerOrder;
