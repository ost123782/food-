import productImage from '../../assets/kabachok.jpg'
import './ProductCard.scss'

const ProductCard = () => {
  return (
    <div className="main-card">
        <img src={productImage} width="300px" alt="prodImg" />
        <p>Кабачок</p>
        <button className="btn">До корзини</button>
    </div>
  )
}

export default ProductCard