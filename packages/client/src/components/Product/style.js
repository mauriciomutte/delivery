import styled from 'styled-components';

export const Product = styled.div`
	display: flex;
	border: 1px solid #ccc;
	max-width: 340px;
	margin: 1em;
	padding: 1em;
	border-radius: 5px;
`;

export const Info = styled.div`
	margin-right: 5px;
`;

export const Title = styled.h3`
	font-size: 16px;
	margin-bottom: 6px;
`;

export const Description = styled.p`
	font-size: 12px;
	color: #0008;
`;

export const Price = styled.span`
	font-size: 13px;
	display: block;
	padding-top: 10px;
`;

export const Image = styled.div`
	img {
		border-radius: 3px;
		height: 100%;
		width: 100px;
	}
`;
