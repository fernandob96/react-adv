import { CSSProperties, ReactElement } from "react";

export interface IProductCardProps {
    children: ReactElement | ReactElement[];
    product: IProduct;
    className?: string;
    style?: CSSProperties;
}

export interface IProduct {
    id: string;
    title: string;
    img?: string;
}

export interface IProductContext {
    product: IProduct;
    counter: number;
    increaseBy: (value: number) => void;
}
