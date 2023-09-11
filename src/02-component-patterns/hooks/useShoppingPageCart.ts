import { useState } from "react";
import { IProductInCard } from "../pages/ShoppingPage";
import { IOnChangeArgs } from "../interfaces/interfaces";


export const useShoppingPageCart = () => {

    const [shoppingCart , setShoppingCart] = useState<{[key:string] : IProductInCard}>({});

    const onProductCountChange = ({product, count}: IOnChangeArgs)=> {
        setShoppingCart(prevShoppingCart => {
        
          if (count===0){
            const { [product.id]: toDelete, ...rest } = prevShoppingCart;
            return rest;
          }
    
          return {
            ...prevShoppingCart,
            [product.id] : { ...product, count }
          }
        })
      }

    return {
        onProductCountChange,
        shoppingCart,
    }
}