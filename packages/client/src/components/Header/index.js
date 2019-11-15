import React from 'react';

import IconCart from '../IconCart';
import Basket from '../Basket';

import * as S from './styles';

export default () => {
	return (
		<S.Header>
			<S.Logo>Delivery</S.Logo>
			<S.Cart>
				<IconCart />
			</S.Cart>
			<Basket />
		</S.Header>
	);
};
