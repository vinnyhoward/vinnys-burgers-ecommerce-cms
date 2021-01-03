import * as React from 'react';
import { ItemsGrid, ItemStyles } from '../styles/Grids';
import { ILoadingGrid } from '../types/typesLoadingGrid';

const LoadingGrid: React.FunctionComponent<ILoadingGrid> = ({ count }) => {
	return (
		<ItemsGrid>
			{Array.from({ length: count }, (_, index) => (
				<ItemStyles key={`loader-${index}`}>
					<p>
						<span className="mark">Loading...</span>
					</p>
					<img
						src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAECAQAAADsOj3LAAAADklEQVR42mNkgANGQkwAAJoABWH6GPAAAAAASUVORK5CYII="
						className="loading"
						alt="Loading"
						width="500"
						height="400"
					/>
				</ItemStyles>
			))}
		</ItemsGrid>
	);
};

export default LoadingGrid;
