export interface Product{
    id: number;
    title: string;
    subTitle: string;
    price: number;
    images?: ProductImage[]
}

export interface ProductImage {
    id: number;
    image: any
    alt: string;

}

