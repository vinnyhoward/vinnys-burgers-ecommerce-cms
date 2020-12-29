import {
	SanityPersonFilterListInput,
	Maybe,
} from '../generated/graphql-types.d';

export interface IItemGrid {
	items?: Array<IChefs>;
}

export interface IChefs {
	name: string;
	_id: string;
	image: IImage;
}

export interface IImage {
	asset: {
		url: string;
		metadata: {
			lqip: string;
		};
	};
}
