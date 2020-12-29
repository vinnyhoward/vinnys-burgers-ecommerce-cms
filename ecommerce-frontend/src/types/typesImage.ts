export interface IImage {
	asset: {
		url?: string;
		fluid?: IFluid;
		metadata?: {
			lqip: string;
		};
	};
}

interface IFluid {
	aspectRatio: number;
	base64: string;
	sizes: string;
	src: string;
	srcSet: string;
	srcSetWebp: string;
	srcWebp: string;
}
