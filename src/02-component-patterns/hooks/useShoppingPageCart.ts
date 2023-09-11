import { useState } from "react";
import { IProductInCard } from "../pages/ShoppingPage";
import { IOnChangeArgs } from "../interfaces/interfaces";


export const useShoppingPageCart = () => {

    const [shoppingCart , setShoppingCart] = useState<{[key:string] : IProductInCard}>({});

    const onProductCountChange = ({product, count}: IOnChangeArgs)=> {
        setShoppingCart(prevShoppingCart => {
    
          // Find the product or add
          const getProductInCart: IProductInCard = prevShoppingCart[product.id] || {...product, count: 0};
    
          // Si la suma del contador es mayor a 0
          if(Math.max(getProductInCart.count + count, 0) > 0) {
            getProductInCart.count += count;
            return {
              ...prevShoppingCart,
              [product.id]: getProductInCart,
            }
          } else {
            // si es menor a 0 (se elimina del listado)
            delete prevShoppingCart[product.id];
            return {
              ...prevShoppingCart
            }
          }
    
    
          // if (count===0){
          //   const { [product.id]: toDelete, ...rest } = prev;
          //   return rest;
          // }
    
          // return {
          //   ...prev,
          //   [product.id] : { ...product, count }
          // }
        })
      }

    return {
        onProductCountChange,
        shoppingCart,
    }
}