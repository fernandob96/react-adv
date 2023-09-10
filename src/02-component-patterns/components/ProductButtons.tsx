import { CSSProperties, useContext } from "react";
import { productContext } from "./ProductCard";

/** Styles */
import styles from '../styles/styles.module.css'

export const ProductButtons = ({className, style}: {className?: string, style?: CSSProperties}) => {

    const {counter, increaseBy} = useContext(productContext);

    return(
        <div 
            className={`${styles.buttonsContainer} ${className ? className : ''}`}
            style={style}
        >
            <button 
                className={styles.buttonMinus} 
                onClick={() => increaseBy(-1)}> 
                - 
            </button>

            <div className={styles.countLabel}>{counter}</div>

            <button 
                className={styles.buttonAdd} 
                onClick={() => increaseBy(1)}>
                +
            </button>
        </div>
    )
}