import { CSSProperties } from "react";

export interface IOnChangeArgs {
    product:IProduct;
    count:number;
}

export interface IInitialValues {
    count?: number;
    maxCount?: number;
}

export interface IProductCardProps {
    children: (args: IProductCardHandlers) => JSX.Element;
    product: IProduct;
    className?: string;
    style?: CSSProperties;
    onChange?: (args: IOnChangeArgs)=> void;
    value?: number;
    initialValues?: IInitialValues;
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
    maxCount?: number;
}

export interface IProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: IProduct;

    increaseBy: (value: number)=> void;
    reset: () => void;
}
