import Header from "../../components/Header/Header"
import ProductCard from "../../components/ProductCard/ProductCard"
import Footer from "../../components/Footer/Footer"
import './ProductPage.scss'
import PopupMain from "../../components/PopupMain/PopupMain";

const ProductPage = () => {
  return (
    <div className="container">
         <Header />
        <main className="main">
            <div className="main-cards">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </main>
        <Footer />
        <PopupMain/>
    </div>
  )
}

export default ProductPage