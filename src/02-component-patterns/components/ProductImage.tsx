import {CSSProperties, useContext } from 'react';
import { productContext } from "./ProductCard";

/** Styles */
import styles from '../styles/styles.module.css'

/** UI */
import noImage from '../assets/no-image.jpg'

interface IProductImageProps {
    img?:string;
    className?: string;
    style?: CSSProperties;
}

export const ProductImage = ({img, className, style} : IProductImageProps) => {

    const { product } = useContext(productContext);

    let imgToShow: string;

    if (img) {
        imgToShow = img;
    }else if (product.img) {
        imgToShow = product.img;
    }else {
        imgToShow = noImage;
    }

    return (
        <img 
            className={`${styles.productImg} ${className ? className : ''}`} 
            style={style}
            src={ imgToShow } 
            alt="Product" 
        />
    )
}