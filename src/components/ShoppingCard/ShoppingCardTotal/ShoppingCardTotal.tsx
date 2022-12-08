import React, {FC, useEffect, useState} from 'react';
import {Product} from '../../../interfaces/types';

export interface ShoppingCardTotalProps {
    products: Product[]
}

export const ShoppingCardTotal: FC<ShoppingCardTotalProps> = ({...props}) => {
	const {products} = props;
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		calculateTotalAmount();
	}, [products]);

	const calculateTotalAmount = (): void => {
		let totalPrice = 0;
		products.forEach((product) => {
			totalPrice += product?.price;
		});
		setTotalPrice(totalPrice);
	};
	
	return (
		<div className='shopping-card-total row'>
			<div className='sub-total row'>
				<div className="col-sm-6 total-amount">
					Sub-total
				</div>
				<div className="col-sm-6 total-price">
					€{totalPrice}
				</div>
			</div>
			<div className='delivery-fees-total row'>
				<div className="col-sm-6 total-amount">
					Delivery Fees
				</div>
				<div className="col-sm-6 total-price">
					€{totalPrice}
				</div>
			</div>
			<hr />
			<div className='row'>
				<div className="col-sm-6 total-amount">
					Total Amount
				</div>
				<div className="col-sm-6 total-price">
					€{totalPrice}
				</div>
			</div>
		</div>
	);
};