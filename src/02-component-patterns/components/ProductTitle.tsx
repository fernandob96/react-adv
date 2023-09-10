import {CSSProperties, useContext } from 'react';
import { productContext } from "./ProductCard";

/** Styles */
import styles from '../styles/styles.module.css'

interface IProductTitleProps {
    title?: string;
    className?: string;
    style?: CSSProperties;
}

export const ProductTitle = ({title, className, style} : IProductTitleProps) => {

    const { product } = useContext(productContext);

    return (
        <span 
            className={ `${styles.productDescription} ${className ? className : ''}` }
            style={style}
        >
            { title ? title : product.title}
        </span>
    )
}