import * as React from 'react';
import Img from 'gatsby-image';
import MenuItemStyles from '../styles/MenuItemStyles';
import calculateBurgerPrice from '../utils/calculateBurgerPrice';
import formatMoney from '../utils/formatMoney';
import {
	IVeganBurgerOrder,
	IVeganBurgers,
	IOrder,
} from '../types/typesVeganBurgerOrder';

const VeganBurgerOrder: React.FunctionComponent<IVeganBurgerOrder> = ({
	order,
	veganBurgers,
	removeFromOrder,
}) => {
	const renderOrderList = () =>
		order.map((singleOrder: Array<IOrder>, index: number) => {
			const singleBurger = veganBurgers.find((burger: IVeganBurgers) => {
				console.log('burgersz:', burger);
				return burger.id === singleOrder.id;
			});

			return (
				<MenuItemStyles key={`${index}-${singleOrder.id}`}>
					<Img fluid={singleBurger.image.asset.fluid} alt={singleBurger.name} />
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
