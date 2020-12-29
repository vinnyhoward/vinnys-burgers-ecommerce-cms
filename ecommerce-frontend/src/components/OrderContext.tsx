import React, { useState, createContext } from 'react';
import { ILayout } from '../types/typesLayout';

const OrderContext = createContext();

export function OrderProvider({ children }: ILayout) {
	const [order, setOrder] = useState([]);

	return (
		<OrderContext.Provider value={[order, setOrder]}>
			{children}
		</OrderContext.Provider>
	);
}

export default OrderContext;
