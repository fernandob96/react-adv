import React from 'react';
import { useProduct } from '../hooks/useProduct'

/** Interfaces */
import { IProductContext, IProductCardProps } from '../interfaces/interfaces';

/** Styles */
import styles from '../styles/styles.module.css'

export const productContext = React.createContext({} as IProductContext);
const { Provider } = productContext;

export const ProductCard = ({children, product, className, style, onChange, value}: IProductCardProps) => {

  const {counter, increaseBy} = useProduct({product, onChange, value});

  return (
    <Provider value={{product, counter, increaseBy}}>
        <div 
          className={ `${styles.productCard} ${className ? className : ''}` } 
          style={style}
        >

            {children}

        </div>
    </Provider>
  )
}

// ProductCard.ProductImage = ProductImage;
// ProductCard.ProductTitle = ProductTitle;
// ProductCard.ProductButtons = ProductButtons;
