export interface IPagination {
	currentPage?: number;
	base?: string;
	totalCount?: number;
	pageSize?: number;
	skip?: number;
	hasNextPage?: boolean;
}
