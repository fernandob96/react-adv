/** Components */
import { ProductButtons, ProductCard, ProductImage, ProductTitle,  } from "../components"

/** data */
import { products } from "../data/products";
import { IProduct } from "../interfaces/interfaces";

/** styles */
import '../styles/custom-styles.css'

export interface IProductInCard extends IProduct {
  count: number;
}

const product = products[0];

export const ShoppingPage = () => {
  return (
    <>
      <div style={{
          display: 'flex',
          flexDirection: 'column',
      }}>
        <h1>ShoppingPage</h1>

        <div>
          <ProductCard 
            key={product.id} 
            product={product} 
            className="bg-dark"
            initialValues={{
              count: 4,
              maxCount: 10,
            }}
          >
            {
              ({count,
                increaseBy,
                reset}) => (
                <>
                  <ProductImage className="custom-image" />
                  <ProductTitle className="title-white" />
                  <ProductButtons className="custom-buttons" />
                  
                  <button onClick={reset}>Reset</button>
                  <button onClick={() => increaseBy(2)}>+2</button>
                  <button onClick={() => increaseBy(-2)}>-2</button>
                  <span>{count}</span>
                </>
              )
            }
          </ProductCard>
        </div>
      </div>

    </>
  )
}
