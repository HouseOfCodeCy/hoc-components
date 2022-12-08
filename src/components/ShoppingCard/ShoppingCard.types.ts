import {Product} from '../../interfaces/types';

export interface ShoppingCard {
    saveButtonLabel?: string
    cancelButtonLabel?: string
    products?: Product[]
}