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

const DisabledContainer = styled.div`
	pointer-events: none;
	color: var(--grey);
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

	const linkTag = (type: string, isDisabled: boolean) => {
		if (type === 'prev') {
			if (isDisabled) {
				return (
					<DisabledContainer>
						← <span className="word">Prev</span>
					</DisabledContainer>
				);
			} else {
				return (
					<Link title="Prev Page" to={`${base}/${prevPage}`}>
						← <span className="word">Prev</span>
					</Link>
				);
			}
		} else if (type === 'next') {
			if (isDisabled) {
				return (
					<DisabledContainer>
						<span className="word">Next</span> →
					</DisabledContainer>
				);
			} else {
				return (
					<Link title="Next Page" to={`${base}/${nextPage}`}>
						<span className="word">Next</span> →
					</Link>
				);
			}
		}
	};

	return (
		<PaginationStyles>
			{linkTag('prev', !hasPrevPage)}
			{Array.from({ length: totalPages }).map((_, i) => (
				<Link
					className={currentPage === 1 && i === 0 ? 'current' : ''}
					to={`${base}/${i > 0 ? i + 1 : 1}`}
					key={`page${i}`}
				>
					{i + 1}
				</Link>
			))}
			{linkTag('next', !hasNextPage)}
		</PaginationStyles>
	);
};

export default Pagination;
