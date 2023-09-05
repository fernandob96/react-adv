import React from 'react';
import { useProduct } from '../hooks/useProduct'

/** Interfaces */
import { IProductContext, IProductCardProps } from '../interfaces/interfaces';

/** Styles */
import styles from '../styles/styles.module.css'

export const productContext = React.createContext({} as IProductContext);
const { Provider } = productContext;

export const ProductCard = ({children, product}: IProductCardProps) => {

  const {counter, increaseBy} = useProduct();

  return (
    <Provider value={{product, counter, increaseBy}}>
        <div className={ styles.productCard }>

            {children}

        </div>
    </Provider>
  )
}

// ProductCard.ProductImage = ProductImage;
// ProductCard.ProductTitle = ProductTitle;
// ProductCard.ProductButtons = ProductButtons;
