import React, {FC} from 'react';
import {Product} from '../../../interfaces/types';

export interface ShoppingCardProductProps {
    product: Product
}

export const ShoppingCardProduct: FC<ShoppingCardProductProps> = ({...props}) => {
	const {product} = props;
	return (
		<div className='shopping-card-product container'>
			<div className='row'>
				<div className="col-sm-8 title">
					{product.title}
				</div>
				<div className="col-sm-4 price">
					€{product.price}
				</div>
			</div>
			<div className='row'>
				<div className="subTitle">
					{product.subTitle}
				</div>
			</div>
		</div>
	);
};