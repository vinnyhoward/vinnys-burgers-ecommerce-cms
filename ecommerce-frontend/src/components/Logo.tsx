import * as React from 'react';
import styled from 'styled-components';
import stripes from '../assets/images/stripes.svg';

const LogoStyles = styled.div`
	/* This value controls the entire size of the logo*/
	font-size: 6px;
	font-size: clamp(1px, 0.65vw, 8px);
	width: 30em;
	height: 30em;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
	margin: 0;
	--borderSize: 1em;
	background: white url(${stripes});
	background-size: 150em;
	border: var(--borderSize) solid white;
	display: flex;
	.inner {
		margin: var(--borderSize);
		flex: 1;
		background: white;
		display: grid;
		grid-template-rows: 20% 1fr 1fr;
		align-content: center;
	}
	.est {
		font-size: 1.5em;
		align-self: center;
	}
	h1 {
		display: grid;
		grid-template-rows: 8fr 2fr;
		align-items: center;
		margin: 0;
		grid-row: 2 / span 2;
		grid-gap: 1em;
		transform: translateY(-0.7em);
	}

	.burgers {
		font-size: 2.5em;
		letter-spacing: 0.2em;
		transform: translateY(-0.15em);
	}
	.vinnys {
		transform: scale(2.4);
		display: block;
		text-shadow: 0.18em 0.18em 0 rgba(0, 0, 0, 0.05);
		perspective: 100px;
	}
	.letter {
		font-size: 3em;
		color: var(--seaGreen);
		--scale: 1;
		--rotate: -10deg;
		--translateX: 0;
		--translateY: 0;
		--rotateX: 0deg;
		transform: scale(var(--scale)) rotate(var(--rotate))
			translateX(var(--translateX)) translateY(var(--translateY))
			rotateX(var(--rotateX));
		display: inline-block;
		line-height: 1;
		transition: transform 0.3s;
		&.V {
			--translateX: -0.05;
		}
		&.i {
			--rotate: 2deg;
			--scale: 0.8;
			--translateX: 0.05em;
			--translateY: -0.05em;
		}
		&.n {
			--rotate: 5deg;
			--scale: 1.2;
			--translateY: -0.1em;
			--translateX: 0.05em;
		}
		&.n {
			--rotate: 3deg;
			--scale: 0.9;
			--translateX: 0.1em;
			--translateY: 0.23em;
		}
		&.y {
			--rotate: -12deg;
			--scale: 1.2;
			--translateX: 0.06em;
		}
		&.apos {
			--translateX: 0.2em;
			--translateY: -0.1em;
		}
		&.s {
			--rotate: 12deg;
			--scale: 0.9;
			--translateY: -0.14em;
		}
	}
`;

const Logo: React.FunctionComponent<{}> = () => {
	return (
		<LogoStyles className="logo">
			<div className="inner">
				<span className="est">EST 1991</span>
				<h1>
					<span className="vinnys">
						<span className="letter V">V</span>
						<span className="letter i">i</span>
						<span className="letter i">n</span>
						<span className="letter n">n</span>
						<span className="letter n">y</span>
						<span className="letter apos">'</span>
						<span className="letter s">s</span>
					</span>
					<span className="burgers">Burgers</span>
				</h1>
			</div>
		</LogoStyles>
	);
};

export default Logo;
