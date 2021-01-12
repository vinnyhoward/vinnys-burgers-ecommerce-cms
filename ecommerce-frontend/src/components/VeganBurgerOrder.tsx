import * as React from 'react';
import Img from 'gatsby-image';
import MenuItemStyles from '../styles/MenuItemStyles';
import calculateBurgerPrice from '../utils/calculateBurgerPrice';
import formatMoney from '../utils/formatMoney';
import {
	IVeganBurgerOrder,
	IOrder,
	IVeganBurgerId,
} from '../types/typesVeganBurgerOrder';

const VeganBurgerOrder: React.FunctionComponent<IVeganBurgerOrder> = ({
	order,
	veganBurgers,
	removeFromOrder,
}) => {
	const renderOrderList = () =>
		order?.map((singleOrder: IOrder, index: number) => {
			const singleBurger: IVeganBurgerId = veganBurgers?.find(
				({ id }: IVeganBurgerId) => {
					return id === singleOrder.id;
				}
			);

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
