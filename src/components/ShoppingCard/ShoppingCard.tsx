import React,{FC} from 'react';

import {ShoppingCard} from './ShoppingCard.types';
import {Card, CardProps} from 'primereact/card';
import {Button} from '../Button/Button';

export interface ShoppingCardProps extends CardProps, ShoppingCard {

}

export const ShoppingCardComponent: FC<ShoppingCardProps> = ({...props}) => {
	const footer = (
		<span>
			<Button label="Save" icon="pi pi-check" />
			<Button label="Cancel" icon="pi pi-times" className="p-button-secondary ml-2" />
		</span>
	);

	const CustomShoppingCard = () => {
		return <Card title={'Marios'} elementId={'ShoppingCard'} subTitle="SubTitle" footer={footer}  {...props}>
			Content
		</Card>;
	};

	return (
		<CustomShoppingCard />
	);
};