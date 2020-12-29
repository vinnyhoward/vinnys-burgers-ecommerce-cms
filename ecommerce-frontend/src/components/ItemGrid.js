import React from 'react';
import { ItemsGrid, ItemStyles } from '../styles/Grids';

export default function ItemGrid({ items }) {
	const renderItems = () =>
		items.map((item) => (
			<ItemStyles key={item._id}>
				<p>
					<span className="mark">{item.name}</span>
				</p>
				<img
					width="500"
					height="400"
					src={`${item.image.asset.url}?w=500&h=400&fit=crop`}
					alt={item.name}
					styles={{
						background: `url(${item.image.asset.metadata.lqip})`,
						backgroundSize: 'cover',
					}}
				/>
			</ItemStyles>
		));
	return <ItemsGrid>{renderItems()}</ItemsGrid>;
}
