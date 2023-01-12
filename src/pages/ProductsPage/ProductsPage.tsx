import getProducts from '../../store/getProducts';
import Header from "../../components/Header/Header"
import ProductCard from "../../components/ProductCard/ProductCard"
import Footer from "../../components/Footer/Footer"
import { useEffect } from 'react';
import './ProductPage.scss'
import PopupMain from "../../components/PopupMain/PopupMain";
import { observer } from 'mobx-react-lite';


const ProductsPage = observer(() => {

  useEffect(() => {
    getProducts.setFetchedProducts()
  }, [])

  return (
    <div className="container">
         <Header />
        <main className="main">
            <div className="main-cards">
            {getProducts.fetchedProducts.map(prod => {return <ProductCard key={prod.imageURL} name={prod.name} price={prod.price} imageURL={prod.imageURL} productID={prod.productID}/>})}
            </div>
        </main>
        <Footer />
        <PopupMain/>
    </div>
  )
})

export default ProductsPage