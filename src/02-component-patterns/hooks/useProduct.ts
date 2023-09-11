import { useEffect, useRef, useState } from "react";
import { IOnChangeArgs, IProduct } from "../interfaces/interfaces";

interface IUseProductArgs {
    product: IProduct;
    onChange?: (args: IOnChangeArgs) => void;
    value?: number;
}

export const useProduct = ({onChange, product, value=0}: IUseProductArgs) => {

    const [counter, setCounter] = useState(value);

    const ref = useRef(!!onChange);

    const increaseBy = ( value: number ) => {

        // Si el onChange existe, maneje su propio cambio de estado
        if(ref.current && onChange){
            return onChange({product, count: value});
        }


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