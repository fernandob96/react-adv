import React from 'react';
import { useProduct } from '../hooks/useProduct'

/** Interfaces */
import { IProductContext, IProductCardProps } from '../interfaces/interfaces';

/** Styles */
import styles from '../styles/styles.module.css'

export const productContext = React.createContext({} as IProductContext);
const { Provider } = productContext;

export const ProductCard = ({children, product, className, style, onChange, value, initialValues}: IProductCardProps) => {

  const {counter, isMaxCountReached, maxCount, increaseBy, reset} = useProduct({product, onChange, value, initialValues});

  return (
    <Provider value={{product, counter, increaseBy, maxCount}}>
        <div 
          className={ `${styles.productCard} ${className ? className : ''}` } 
          style={style}
        >

            {children({
              count: counter,
              isMaxCountReached,
              maxCount,
              product,
              increaseBy,
              reset
            })}

        </div>
    </Provider>
  )
}

// ProductCard.ProductImage = ProductImage;
// ProductCard.ProductTitle = ProductTitle;
// ProductCard.ProductButtons = ProductButtons;
