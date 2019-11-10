import styled from 'styled-components';

export const Product = styled.a`
	color: #000;
	display: flex;
	border: 1px solid #ccc;
	border-radius: 5px;
	flex-basis: 100%;
	margin: 10px 0;
	text-decoration: none;

	@media (min-width: 1000px) {
		max-width: 340px;
		margin: 0 1em 1em 0;
	}
`;

export const Info = styled.div`
	padding: 15px;
	width: calc(100% - 120px);

	@media (min-width: 800px) {
		padding: 1em;
	}
`;

export const Name = styled.h3`
	font-size: 16px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	margin-bottom: 6px;
`;

export const Description = styled.p`
	font-size: 12px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;

	overflow: hidden;
	color: #0008;
`;

export const Price = styled.span`
	font-size: 13px;
	display: block;
	padding-top: 10px;
	margin-top: auto;
`;

export const Image = styled.div`
	width: 120px;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		border-radius: 3px;
		height: 75px;
		width: 100px;
	}
`;
