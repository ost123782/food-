import './AdminProducts.scss'
import { observer } from "mobx-react-lite"
import Header from "../../components/Header/Header";
import SidebarAdm from "../../components/SidebarAdm/SidebarAdm";
import ProductCard from "../../components/ProductCard/ProductCard";
import getProducts from '../../store/getProducts';
import { Link } from 'react-router-dom';

getProducts.setFetchedProducts()

const AdminProducts : React.FC = observer(() => {
    return (
        
        <div className="container">
            <Header/>
            <main className="main">
                <h1>Edit Products</h1>
                <Link to={'/admin/products/create'} className="btn">Create Product</Link>
                <div className="main-cards">
                    {getProducts.fetchedProducts.map(prod => {return <ProductCard key={prod.imageURL} name={prod.name} price={prod.price} imageURL={prod.imageURL} productID={prod.productID}/>})}
                </div>
            </main>
            <SidebarAdm/>
        </div>

    )
})

export default AdminProducts