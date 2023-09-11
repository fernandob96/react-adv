import { useEffect, useState } from "react";
import { IOnChangeArgs, IProduct } from "../interfaces/interfaces";

interface IUseProductArgs {
    product: IProduct;
    onChange?: (args: IOnChangeArgs) => void;
    value?: number;
}

export const useProduct = ({onChange, product, value=0}: IUseProductArgs) => {

    const [counter, setCounter] = useState(value);


    const increaseBy = ( value: number ) => {

        const newValue = Math.max(counter+value, 0)
        setCounter(newValue);

        onChange && onChange({product, count: newValue});
    }

    useEffect(() => {
        setCounter(value);
    }, [value])
    

    return{
        counter,
        increaseBy,
    }
}