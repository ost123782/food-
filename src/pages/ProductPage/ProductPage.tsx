import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import {Link, useLocation, useNavigate, useParams} from 'react-router-dom'
import getProducts from '../../store/getProducts'
import './ProductPage.scss'
import Header from "../../components/Header/Header";
import SidebarAdm from "../../components/SidebarAdm/SidebarAdm";
import axios from "axios";

interface Cart {
  productID: string,
  count: number
}

const ProductPage : React.FC = observer(() =>  {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const {productID} = useParams()

    const addToCart = () => {
      const productCart = JSON.parse(localStorage.getItem('productCart') + '')

      if (!productCart) {
        console.log(9)
        const cart = [{
          productID,
          count: 1
        }]

        localStorage.setItem('productCart', JSON.stringify(cart))

        return
      }
      
      const index = productCart.findIndex((el : Cart) => el.productID === productID)

      if (index > -1) {
        productCart[index].count++
        localStorage.setItem('productCart', JSON.stringify(productCart))

        return
      }

      productCart[productCart.length] = {productID, count: 1}
      localStorage.setItem('productCart', JSON.stringify(productCart))
      
    }

    const deleteProduct = () => {
        if (!window.confirm('Are you sure to delete that product?')) {
            return
        }
        axios.delete('http://localhost:5000/products/delete', {params : {productID: productID}})
            .then(() => navigate('/admin/products'))
            .catch(() => {
                alert('Something went wrong')
                navigate('/admin/products')
            })
    }

    useEffect(() => {
      getProducts.setFetchedProducts(productID)
    }, [productID])
  return (
    <div className={'container'}>
        <Header/>
        <SidebarAdm/>
      <h1>{getProducts.fetchedProducts[0]?.name}</h1>
        {getProducts.fetchedProducts[0]?.imageURL?.length > 0 ?
            <img width={'500px'} src={`http://localhost:5000/uploads/${getProducts.fetchedProducts[0]?.imageURL}`} alt="productImage" />
        : null}
      <p>{getProducts.fetchedProducts[0]?.price}</p>
      <span>{getProducts.fetchedProducts[0]?.description}</span>
        {pathname.includes('admin') ?
        <><button onClick={deleteProduct} className={'btn'}>Видалити продукт</button><Link to={`/admin/edit/${productID}`} className={'btn'}>Редагувати продукт</Link></>
        : <button onClick={() => addToCart()} className={'btn'}>Замовити</button>}

    </div>
  )
})

export default ProductPage