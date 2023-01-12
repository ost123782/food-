import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './ProductCard.scss'

interface cardProps  {
  productID: number,
  name: string,
  price: number,
  imageURL: string
}

const ProductCard = ({productID, name, price, imageURL} : cardProps) => {
  const {pathname} = useLocation()
  return (
    <div className="main-card">
        <img src={`http://localhost:5000/uploads/${imageURL}`} width="300px" alt="prodImg" />
        <p>{name}</p>
        <p>{price}</p>
        {pathname.includes('admin') ? <Link to={`/admin/product/${productID}`} className="btn">Переглянути</Link> : <Link to={`/product/${productID}`} className="btn">Переглянути</Link>}
    </div>
  )
}

export default ProductCard