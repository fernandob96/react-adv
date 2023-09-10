import { ProductButtons, ProductCard, ProductImage, ProductTitle,  } from "../components"
import '../styles/custom-styles.css'

const product = {
  id: '254865',
  title: 'Product name',
  img: "./coffee-mug.png" 
}

export const ShoppingPage = () => {
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
          <ProductCard product={product} className="bg-dark">
            <ProductImage className="custom-image" />
            <ProductTitle className="title-white" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>

          <ProductCard product={product} className="bg-dark">
            <ProductCard.Image className="custom-image" />  
            <ProductCard.Title className="title-white" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>

          <ProductCard 
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
          </ProductCard>
        </div>
      </div>

    </>
  )
}
