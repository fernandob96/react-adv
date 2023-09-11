import { IProduct } from "../interfaces/interfaces";

export const product1 = {
    id: '1',
    title: 'Product name',
    img: "./coffee-mug.png" 
  }
  
  export const product2 = {
    id: '2',
    title: 'Coffee mug - Meme',
    img: "./coffee-mug2.png" 
  }
  
  export const products: IProduct[] = [product1, product2];