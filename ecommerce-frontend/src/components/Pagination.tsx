import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { IPagination } from '../types/typesPagination';

const PaginationStyles = styled.div`
	display: flex;
	align-content: center;
	align-items: center;
	justify-items: center;
	border: 1px solid var(--grey);
	margin: 2rem 0;
	border-radius: 5px;
	text-align: center;
	& > * {
		padding: 1rem;
		flex: 1;
		border-right: 1px solid var(--grey);
		text-decoration: none;
		&[aria-current],
		&.current {
			color: var(--fireOpalRed);
		}
		&[disabled] {
			pointer-events: none;
			color: var(--grey);
		}
	}
	@media (max-width: 800px) {
		.word {
			display: none;
		}
		font-size: 1.4rem;
	}
`;

const Pagination: React.FunctionComponent<IPagination> = ({
	pageSize,
	totalCount,
	currentPage,
	base,
}) => {
	const totalPages: number =
		pageSize && totalCount ? Math.ceil(totalCount / pageSize) : 4;
	const prevPage: number = currentPage ? currentPage - 1 : 1;
	const nextPage: number = currentPage ? currentPage + 1 : 1;
	const hasNextPage: boolean = nextPage <= totalPages;
	const hasPrevPage: boolean = prevPage >= 1;

	return (
		<PaginationStyles>
			<Link
				title="Prev Page"
				disabled={!hasPrevPage}
				to={`${base}/${prevPage}`}
			>
				← <span className="word">Prev</span>
			</Link>
			{Array.from({ length: totalPages }).map((_, i) => (
				<Link
					className={currentPage === 1 && i === 0 ? 'current' : ''}
					to={`${base}/${i > 0 ? i + 1 : 1}`}
					key={`page${i}`}
				>
					{i + 1}
				</Link>
			))}
			<Link
				title="Next Page"
				disabled={!hasNextPage}
				to={`${base}/${nextPage}`}
			>
				<span className="word">Next</span> →
			</Link>
		</PaginationStyles>
	);
};

export default Pagination;
