import React from 'react';

import * as S from './style';

export default ({ children, ...props }) => {
	return (
		<S.Category id={props.title}>
			<h2>{props.title}</h2>
			<S.ProductsList>{children}</S.ProductsList>
		</S.Category>
	);
};
