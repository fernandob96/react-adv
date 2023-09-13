import { useEffect, useRef, useState } from "react";
import { IInitialValues, IOnChangeArgs, IProduct } from "../interfaces/interfaces";

interface IUseProductArgs {
    product: IProduct;
    onChange?: (args: IOnChangeArgs) => void;
    value?: number;
    initialValues?: IInitialValues;
}

export const useProduct = ({onChange, product, value=0, initialValues}: IUseProductArgs) => {

    const [counter, setCounter] = useState(initialValues?.count || value);

    const isMounted = useRef(false);

    const increaseBy = ( value: number ) => {

        let newValue = Math.max(counter+value, 0);
        if(initialValues?.maxCount){
            newValue = Math.min(newValue, initialValues.maxCount);
        }

        setCounter(newValue);

        onChange && onChange({product, count: newValue});
    }

    const reset = ()=> {
        setCounter(initialValues?.count || value);
    }

    useEffect(() => {
        if(!isMounted.current) return;
        else isMounted.current = true;

        setCounter(value);
    }, [value])
    

    return{
        counter,
        isMaxCountReached: !!initialValues?.maxCount && counter === initialValues.maxCount,
        maxCount: initialValues?.maxCount,

        increaseBy,
        reset,
    }
}