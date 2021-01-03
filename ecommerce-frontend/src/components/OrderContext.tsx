import * as React from 'react';
import { ILayout } from '../types/typesLayout';

const OrderContext = React.createContext();

export const OrderProvider: React.FunctionComponent<ILayout> = ({
	children,
}) => {
	const [order, setOrder] = React.useState([]);

	return (
		<OrderContext.Provider value={[order, setOrder]}>
			{children}
		</OrderContext.Provider>
	);
};

export default OrderContext;
