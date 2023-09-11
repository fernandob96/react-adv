import { useShoppingPageCart } from "../hooks/useShoppingPageCart";

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

export const ShoppingPage = () => {  

  const { onProductCountChange, shoppingCart } = useShoppingPageCart();

  return (
    <>
      <div style={{
          display: 'flex',
          flexDirection: 'column',
      }}>
        <h1>ShoppingPage</h1>

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>

          {
            products.map((product)=>(
              <ProductCard 
                key={product.id} 
                product={product} 
                className="bg-dark"
                onChange={onProductCountChange}
                value={ shoppingCart[product.id]?.count || 0 }
              >
                <ProductImage className="custom-image" />
                <ProductTitle className="title-white" />
                <ProductButtons className="custom-buttons" />
            </ProductCard>
            ))
          }

          <div className="shopping-cart" style={{width:'100px'}}>

            {
              Object.entries(shoppingCart).map(([key, product]) => (
                <ProductCard
                  key={key}
                  product={product} 
                  className="bg-dark text-white" 
                  style={{width: '100px'}}
                  onChange={onProductCountChange}
                  value={product.count}
                >
                  <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}} />
                  <ProductButtons className="custom-buttons" />
                </ProductCard>
              ))

            }


          </div> 

          {/* <ProductCard product={product2} className="bg-dark">
            <ProductCard.Image className="custom-image" />  
            <ProductCard.Title className="title-white" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard> */}

          {/* <ProductCard 
            product={product} 
            style={{
              backgroundColor: '#70D1F8'
            }}
          >
            <ProductImage 
              style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
            />
            <ProductTitle 
              style={{fontWeight: 'bold'}}
            />
            <ProductButtons 
              style={{
                display: 'flex',
                justifyContent: 'end',
              }}
            />
          </ProductCard> */}
        </div>
      </div>

    </>
  )
}
