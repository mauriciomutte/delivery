import React from 'react';

import * as S from './style';

export default ({ ...props }) => {
	return (
		<S.Product href={props.link}>
			<S.Info>
				<S.Title>{props.name}</S.Title>
				<S.Description>{props.description}</S.Description>
				<S.Price>{props.price}</S.Price>
			</S.Info>
			<S.Image>
				<img src={props.img} alt="" />
			</S.Image>
		</S.Product>
	);
};
