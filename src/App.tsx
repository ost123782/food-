import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import './global.scss'
import AdminProducts from "./pages/AdminProducts/AdminProducts";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import ProductPage from "./pages/ProductPage/ProductPage";
import EditProduct from "./pages/EditProduct/EditProduct";
import AdminCalls from "./pages/AdminCalls/AdminCalls";

function App() {
  return (
    <Routes>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'/products'} element={<ProductsPage/>}/>
        <Route path={'/product/:productID'} element={<ProductPage/>}/>
        <Route path={'/admin'} element={<AdminPage/>} />
        <Route path={'/admin/products'} element={<AdminProducts/>}/>
        <Route path={'/admin/products/create'} element={<CreateProduct/>}/>
        <Route path={'/admin/product/:productID'} element={<ProductPage/>}/>
        <Route path={'/admin/edit/:productID'} element={<EditProduct/>}/>
        <Route path={'/admin/calls'} element={<AdminCalls/>}/>
    </Routes>
  );
}

export default App;
