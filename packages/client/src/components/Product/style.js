import styled from 'styled-components';

export const Product = styled.div`
	display: flex;
	border: 1px solid #ccc;
	width: 400px;
	margin: 2em 4em;
`;

export const Info = styled.div`
	padding: 1em;
`;

export const Title = styled.h3`
	font-size: 19px;
	margin-bottom: 6px;
`;

export const Description = styled.p`
	font-size: 14px;
`;

export const Price = styled.span`
	display: block;
	padding-top: 20px;
`;

export const Image = styled.div`
	img {
		height: 100%;
		width: 150px;
	}
`;
