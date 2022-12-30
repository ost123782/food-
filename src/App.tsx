import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import './global.scss'
import AdminProducts from "./pages/AdminProducts/AdminProducts";
import CreateProduct from "./pages/CreateProduct/CreateProduct";

function App() {
  return (
    <Routes>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'/products'} element={<ProductPage/>}/>
        <Route path={'/admin'} element={<AdminPage/>} />
        <Route path={'/admin/products'} element={<AdminProducts/>}/>
        <Route path={'/admin/products/create'} element={<CreateProduct/>}/>
    </Routes>
  );
}

export default App;
