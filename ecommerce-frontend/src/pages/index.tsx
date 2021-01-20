import * as React from 'react';
import LoadingGrid from '../components/LoadingGrid';
import ItemGrid from '../components/ItemGrid';
import useLatestData from '../utils/useLatestData';
import { HomePageGrid } from '../styles/Grids';
import { IFreshBurgers } from '../types/typesVeganBurgerOrder';
import { IChefs } from '../types/typesChefs';

interface ISectionHeader {
	title?: string;
	description?: string;
}

const SectionHeader = ({ title, description }: ISectionHeader) => (
	<>
		<h2 className="center">
			<span className="mark tilt">{title}</span>
		</h2>
		<p>{description}</p>
	</>
);

function CurrentlyCooking({ chefs }: IChefs) {
	return (
		<div>
			<SectionHeader
				title="Chefs on Duty"
				description="Standing by to serve ya"
			/>
			{!chefs && <LoadingGrid count={4} />}{' '}
			{chefs && !chefs.length && <p>No one is working right now</p>}
			{chefs?.length && <ItemGrid items={chefs} />}
		</div>
	);
}

function FreshBurgers({ freshBurgers }: IFreshBurgers) {
	return (
		<div>
			<SectionHeader
				title="Fresh Burgers"
				description="Come on by and grab some good food"
			/>
			{!freshBurgers && <LoadingGrid count={4} />}{' '}
			{freshBurgers && !freshBurgers.length && (
				<p>Nothing fresh at the moment</p>
			)}
			{freshBurgers?.length && <ItemGrid items={freshBurgers} />}
		</div>
	);
}

const HomePage: React.FunctionComponent<{}> = () => {
	const { freshBurgers, chefs } = useLatestData();

	return (
		<div className="center">
			<h1>The Best Burgers Downtown!</h1>
			<p>Open 11am to 11pm every single day</p>
			<HomePageGrid>
				<CurrentlyCooking {...{ chefs }} />
				<FreshBurgers {...{ freshBurgers }} />
			</HomePageGrid>
		</div>
	);
};

export default HomePage;
